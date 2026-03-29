import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_SKILLS = [
  { name: "React", color: "#61dafb", radius: 2.5, speed: 0.4, y: 0 },
  { name: "Three.js", color: "#00f5d4", radius: 2.5, speed: 0.4, y: 0, offset: Math.PI / 2 },
  { name: "Node.js", color: "#68a063", radius: 2, speed: 0.6, y: 0.8 },
  { name: "TypeScript", color: "#3178c6", radius: 2, speed: 0.6, y: 0.8, offset: Math.PI },
  { name: "GSAP", color: "#88ce02", radius: 3, speed: 0.25, y: -0.5 },
  { name: "Framer", color: "#b17bff", radius: 3, speed: 0.25, y: -0.5, offset: Math.PI },
  { name: "Tailwind", color: "#38bdf8", radius: 1.4, speed: 0.9, y: 0.3 },
];

function SkillSphere({ name, color, radius, speed, y = 0, offset = 0 }) {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * speed + offset;
      groupRef.current.position.x = Math.cos(t) * radius;
      groupRef.current.position.z = Math.sin(t) * radius;
      groupRef.current.position.y = y + Math.sin(clock.getElapsedTime() * 0.5 + offset) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      {/* Billboard label — always faces camera */}
      <Billboard>
        <Text
          position={[0, 0.35, 0]}
          fontSize={0.18}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2"
        >
          {name}
        </Text>
      </Billboard>
    </group>
  );
}

/** Central pulsing core sphere */
function CoreSphere() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const s = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.08;
      meshRef.current.scale.setScalar(s);
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial
        color="#00f5d4"
        emissive="#00f5d4"
        emissiveIntensity={1.2}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

/**
 * SkillsOrbit — 3D orbital system showing skills as labelled spheres
 * rotating around a glowing central core.
 */
export default function SkillsOrbit() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#00f5d4" distance={6} />
      <pointLight position={[4, 4, 4]} intensity={1} color="#b17bff" />

      <CoreSphere />

      {ORBIT_SKILLS.map((skill) => (
        <SkillSphere key={skill.name} {...skill} />
      ))}
    </>
  );
}
