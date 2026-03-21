import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const particleCount = 5000;
const defaultPositions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
    const r = 20 + Math.random() * 30;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    defaultPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    defaultPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    defaultPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
}

const ParticleField = ({ color = '#FFFFFF' }: { color?: string }) => {
  const points = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => defaultPositions, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.position.y = Math.sin(time * 0.2) * 2;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ConnectingLines = () => {
    // Optional: could add faint glowing lines here, but particles alone often feel 
    // more premium and less 'glitchy' than geometric shapes.
    return null;
}

const ThreeBackground: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
        background: isLight
          ? 'radial-gradient(ellipse at top, #F3F5F9 0%, #FFFFFF 100%)' 
          : 'radial-gradient(ellipse at top, #1A1A1A 0%, #121212 100%)',
        transition: 'background 0.8s var(--transition-premium)',
      }}
    >
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        {/* Fog to soften distant particles */}
        <fog attach="fog" args={[isLight ? '#FAFAFC' : '#121212', 25, 60]} />
        <ambientLight intensity={0.2} />
        {/* Theme-aware subtle accent lighting */}
        <pointLight position={[20, 20, 10]} intensity={isLight ? 0.5 : 1.5} color="#FFC300" distance={50} />
        <pointLight position={[-20, -20, -10]} intensity={isLight ? 0.3 : 1} color="#00CFFF" distance={50} />
        {/* Theme-aware particles: dark on light bg, bright on dark bg */}
        <ParticleField color={isLight ? '#1F2937' : '#FFFFFF'} />
        <ConnectingLines />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
