import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

/**
 * AboutBlob — Morphing icosahedron that acts as a decorative 3D element
 * in the About section. Color cycles between neon-cyan and neon-purple.
 */
export default function AboutBlob() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
      // Subtle scale pulse
      const scale = 1 + Math.sin(t * 1.2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00f5d4" />
      <pointLight position={[-3, -3, 3]} intensity={1.5} color="#b17bff" />

      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 5]} />
        <MeshDistortMaterial
          color="#081a1a"
          emissive="#00f5d4"
          emissiveIntensity={0.55}
          metalness={0.9}
          roughness={0.1}
          distort={0.5}
          speed={2.5}
          wireframe={false}
        />
      </mesh>

      {/* Outer glow wireframe */}
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshBasicMaterial color="#00f5d4" wireframe opacity={0.08} transparent />
      </mesh>
    </>
  );
}
