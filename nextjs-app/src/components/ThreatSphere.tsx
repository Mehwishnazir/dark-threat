"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function RotatingThreatSphere() {
  const sphereRef = useRef<Mesh>(null);
  const boxRefs = useRef<(Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.5;
      sphereRef.current.rotation.x = Math.sin(time) * 0.1;
    }

    boxRefs.current.forEach((box, index) => {
      if (box) {
        box.rotation.y = time * (1 + index * 0.1);
        box.position.x = Math.sin(time + index * 2) * 3;
        box.position.z = Math.cos(time + index * 2) * 3;
        box.position.y = Math.sin(time * 2 + index) * 0.5;
      }
    });
  });

  return (
    <>
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#ff0000"
          metalness={0.8}
          roughness={0.2}
          emissive="#330000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {Array.from({ length: 6 }, (_, i) => (
        <mesh
          key={i}
          ref={(ref) => {
            boxRefs.current[i] = ref;
          }}
          position={[Math.sin((i * Math.PI) / 3) * 3, 0, Math.cos((i * Math.PI) / 3) * 3]}
        >
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial
            color="#ff0000"
            metalness={0.9}
            roughness={0.1}
            emissive="#660000"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ff0000" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffffff" />
    </>
  );
}

export default function ThreatSphere() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <RotatingThreatSphere />
      </Canvas>
    </div>
  );
}
