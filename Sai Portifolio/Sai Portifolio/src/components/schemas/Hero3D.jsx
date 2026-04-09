import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleGalaxy = ({ props = {} }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  
  // Create outer and inner particle spheres
  const [sphere1] = useState(() => random.inSphere(new Float32Array(6000), { radius: 2.5 }));
  const [sphere2] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref1.current) {
      ref1.current.rotation.x -= delta / 10;
      ref1.current.rotation.y -= delta / 15;
    }
    if (ref2.current) {
      ref2.current.rotation.x += delta / 12;
      ref2.current.rotation.y += delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref1} positions={sphere1} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // AdditiveBlending
        />
      </Points>
      <Points ref={ref2} positions={sphere2} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#e1e7ec"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
        />
      </Points>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleGalaxy />
      </Canvas>
    </div>
  );
};

export default Hero3D;
