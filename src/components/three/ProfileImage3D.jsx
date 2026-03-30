import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";
import profileImg from "../../assets/profileImage2.jpeg";

export default function ProfileImage3D() {
  const meshRef = useRef();
  const texture = useTexture(profileImg);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Add subtle interactive tilt based on mouse
  useFrame((state) => {
    if (meshRef.current) {
      const targetRotationX = state.pointer.y * 0.1;
      const targetRotationY = state.pointer.x * 0.1;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetRotationX, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 5]} intensity={2.5} />
      <pointLight position={[-3, 0, 3]} intensity={2} color="#00f5d4" />
      <pointLight position={[3, -3, 3]} intensity={2} color="#b17bff" />

      {/* Floating Interactive 3D Card */}
      <Float
        speed={2.05}
        rotationIntensity={0.2}
        floatIntensity={0.8}
        floatingRange={[-0.1, 0.1]}
      >
        <group>
          {/* Main Profile Image */}
          <mesh ref={meshRef}>
            <planeGeometry args={[2.5, 2.5 * 1.2]} />
            <meshStandardMaterial
              map={texture}
              roughness={0.1}
              metalness={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Decorative Backing Frame/Glow */}
          <mesh position={[0, 0, -0.05]} scale={1.03}>
            <planeGeometry args={[2.5, 2.5 * 1.2]} />
            <meshBasicMaterial
              color="#00f5d4"
              transparent
              opacity={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0.08, -0.08, -0.1]} scale={1}>
            <planeGeometry args={[2.5, 2.5 * 1.2]} />
            <meshBasicMaterial
              color="#b17bff"
              transparent
              opacity={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
}
