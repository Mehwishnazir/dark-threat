import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { Mesh } from 'three';

function RotatingThreatSphere() {
  const sphereRef = useRef<Mesh>(null);
  const boxesRef = useRef<Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.5;
      sphereRef.current.rotation.x = Math.sin(time) * 0.1;
    }

    boxesRef.current.forEach((box, index) => {
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
      {/* Main threat sphere */}
      <Sphere ref={sphereRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff0000"
          metalness={0.8}
          roughness={0.2}
          emissive="#330000"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Orbiting threat indicators */}
      {Array.from({ length: 6 }, (_, i) => (
        <Box
          key={i}
          ref={(ref) => (boxesRef.current[i] = ref!)}
          args={[0.2, 0.2, 0.2]}
          position={[Math.sin(i * Math.PI / 3) * 3, 0, Math.cos(i * Math.PI / 3) * 3]}
        >
          <meshStandardMaterial
            color="#ff0000"
            metalness={0.9}
            roughness={0.1}
            emissive="#660000"
            emissiveIntensity={0.3}
          />
        </Box>
      ))}

      {/* Lighting */}
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
      >
        <RotatingThreatSphere />
      </Canvas>
    </div>
  );
}