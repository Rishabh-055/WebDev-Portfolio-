import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * ParticleGalaxy — 8000-point particle system forming a swirling galaxy/nebula.
 * Reacts to time uniform for wave-like motion.
 */
function ParticleGalaxy() {
  const meshRef = useRef();

  const [positions, colors] = useMemo(() => {
    const count = 8000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorA = new THREE.Color("#00f5d4"); // neon cyan
    const colorB = new THREE.Color("#b17bff"); // neon purple
    const colorC = new THREE.Color("#ff4ecd"); // neon pink

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 8 + 1;
      const spinAngle = radius * 1.5;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4;
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4;
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * 0.4;

      pos[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i3 + 1] = randomY * 0.5;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color based on distance from center
      const mixedColor = colorA.clone();
      const t = radius / 9;
      if (t < 0.33) mixedColor.lerp(colorA, t * 3);
      else if (t < 0.66) mixedColor.lerp(colorB, (t - 0.33) * 3);
      else mixedColor.lerp(colorC, (t - 0.66) * 3);

      col[i3 + 0] = mixedColor.r;
      col[i3 + 1] = mixedColor.g;
      col[i3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
        opacity={0.9}
        transparent
      />
    </points>
  );
}

/**
 * FloatingTorusKnot — animated glowing torus knot at the center of the scene.
 */
function FloatingTorusKnot() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.z = t * 0.1;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
      <torusKnotGeometry args={[1, 0.35, 128, 32, 2, 3]} />
      <MeshDistortMaterial
        color="#00f5d4"
        emissive="#00f5d4"
        emissiveIntensity={0.4}
        metalness={0.9}
        roughness={0.1}
        distort={0.3}
        speed={2}
        wireframe={false}
      />
    </mesh>
  );
}

/**
 * CameraRig — gently tilts camera based on mouse position passed via props.
 */
function CameraRig({ mouse }) {
  useFrame(({ camera }) => {
    // Smoothly interpolate camera toward mouse direction
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.y * 1.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/**
 * HeroScene — the main Three.js canvas content for the Hero section.
 * Receives mouse {x, y} in range [-0.5, 0.5] from parent.
 */
export default function HeroScene({ mouse = { x: 0, y: 0 } }) {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={3} color="#00f5d4" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#b17bff" />
      <pointLight position={[0, -5, 3]} intensity={1.5} color="#ff4ecd" />
      <pointLight position={[3, 0, 2]} intensity={1} color="#ffffff" />

      {/* Background stars */}
      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main elements */}
      <ParticleGalaxy />
      {/* <FloatingTorusKnot /> */}

      {/* Camera mouse parallax */}
      <CameraRig mouse={mouse} />
    </>
  );
}
