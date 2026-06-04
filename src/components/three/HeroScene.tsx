import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function Laptop() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const mx = state.mouse.x;
    const my = state.mouse.y;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mx * 0.35, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -my * 0.18 + Math.sin(t * 0.4) * 0.04,
      0.05,
    );
    group.current.position.y = Math.sin(t * 0.6) * 0.06;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Screen */}
      <RoundedBox args={[2.6, 1.6, 0.08]} radius={0.06} smoothness={4} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#0B0F19" metalness={0.4} roughness={0.4} />
      </RoundedBox>
      {/* Screen glow panel */}
      <mesh position={[0, 0.4, 0.045]}>
        <planeGeometry args={[2.4, 1.45]} />
        <meshBasicMaterial color="#6D5DFB" transparent opacity={0.18} />
      </mesh>
      {/* Code lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[-0.9 + (i % 2) * 0.05, 0.95 - i * 0.14, 0.05]}>
          <planeGeometry args={[0.8 + Math.random() * 0.6, 0.04]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00D4FF' : '#94A3B8'} transparent opacity={0.55} />
        </mesh>
      ))}
      {/* Base */}
      <RoundedBox args={[2.7, 0.08, 1.7]} radius={0.04} smoothness={4} position={[0, -0.42, 0.55]}>
        <meshStandardMaterial color="#161D2D" metalness={0.6} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

function OrbitingCard({ radius, speed, offset, color, label }: {
  radius: number; speed: number; offset: number; color: string; label: string;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * 0.3 + 0.4;
    ref.current.rotation.y = -t;
  });
  return (
    <group ref={ref}>
      <Float floatIntensity={0.4} rotationIntensity={0.2} speed={2}>
        <RoundedBox args={[0.45, 0.28, 0.05]} radius={0.04} smoothness={4}>
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.25}
          />
        </RoundedBox>
      </Float>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#7BD7FF" size={0.018} sizeAttenuation transparent opacity={0.55} />
    </points>
  );
}

function Grid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[12, 12, 12, 12]} />
      <meshBasicMaterial color="#6D5DFB" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-3, 2, -2]} intensity={0.5} color="#6D5DFB" />
        <pointLight position={[3, -1, 2]} intensity={0.4} color="#00D4FF" />

        <Float floatIntensity={0.3} rotationIntensity={0.1} speed={1.2}>
          <Laptop />
        </Float>

        <OrbitingCard radius={2.2} speed={0.6} offset={0} color="#6D5DFB" label="React" />
        <OrbitingCard radius={2.4} speed={0.5} offset={2.1} color="#00D4FF" label="Node" />
        <OrbitingCard radius={2.0} speed={0.7} offset={4.2} color="#F59E0B" label="Mongo" />

        <Grid />
        <Particles />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.35} scale={6} blur={2.6} far={2} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
