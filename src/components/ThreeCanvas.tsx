import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTheme } from '../context/ThemeContext';

// Particle component
const Particles = ({ count = 2000, color = '#4ecdc4' }) => {
  const mesh = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  
  // Get viewport dimensions
  const { viewport, size } = useThree();
  
  // Create particles
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * viewport.width - viewport.width / 2;
      const y = Math.random() * viewport.height - viewport.height / 2;
      const z = Math.random() * -10;
      
      // Random speeds
      const vx = Math.random() * 0.01 - 0.005;
      const vy = Math.random() * 0.01 - 0.005;
      
      temp.push({ x, y, z, vx, vy });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);
  
  // Update particles on each frame
  useFrame(() => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Update position based on velocity
      particles[i].x += particles[i].vx;
      particles[i].y += particles[i].vy;
      
      // Check boundaries and wrap around
      if (particles[i].x > viewport.width / 2) particles[i].x = -viewport.width / 2;
      if (particles[i].x < -viewport.width / 2) particles[i].x = viewport.width / 2;
      if (particles[i].y > viewport.height / 2) particles[i].y = -viewport.height / 2;
      if (particles[i].y < -viewport.height / 2) particles[i].y = viewport.height / 2;
      
      // Update position array
      positions[i3] = particles[i].x;
      positions[i3 + 1] = particles[i].y;
      positions[i3 + 2] = particles[i].z;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate entire point cloud slowly
    mesh.current.rotation.z += 0.0005;
  });
  
  const particleColor = theme === 'dark' ? color : '#1a2b45';
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.length * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        sizeAttenuation={true}
        color={particleColor}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const ThreeCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;