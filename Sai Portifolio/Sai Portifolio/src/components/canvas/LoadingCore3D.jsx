import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const LoadingCore3D = ({ progressRef }) => {
  const pointsRef = useRef();
  const wireframesRef = useRef();
  const count = 2000;
  
  // Particle Data initialization
  const [positions, targetPositions, randomFactors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        // Scattered initial setup (far apart for boot up sequence)
        pos[i * 3] = (Math.random() - 0.5) * 40;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

        // Target positions: Sphere surface for neural core with depth
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        // Varying radius to create a thick crust / depth instead of thin shell
        const r = 2.0 + (Math.random() * 1.0); 

        target[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        target[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        target[i * 3 + 2] = r * Math.cos(phi);
        
        randoms[i] = Math.random();
    }
    return [pos, target, randoms];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const progress = progressRef?.current?.value || 0; // Expected 0 to 1

    // 0-1s (0 - 0.14) -> Start
    // 1-3s (0.14 - 0.42) -> Formation
    // 3-5s (0.42 - 0.71) -> Intelligence Build
    // 5-6s (0.71 - 0.85) -> Identity Reveal
    // 6-7s (0.85 - 1.0) -> Final

    let formProgress = 0;
    if (progress > 0.14) {
      formProgress = Math.min((progress - 0.14) / 0.28, 1);
    }
    
    // Smooth easing for particle formation (Cubic out)
    const easeProgress = 1 - Math.pow(1 - formProgress, 3);

    if (pointsRef.current) {
        const positionsAtt = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            // Random jitter and breath animation for life
            const breath = Math.sin(time * 2 + randomFactors[i] * Math.PI * 2) * 0.05 * easeProgress;
            
            positionsAtt.array[ix] = THREE.MathUtils.lerp(positions[ix], targetPositions[ix] + breath * targetPositions[ix], easeProgress);
            positionsAtt.array[ix + 1] = THREE.MathUtils.lerp(positions[ix + 1], targetPositions[ix + 1] + breath * targetPositions[ix + 1], easeProgress);
            positionsAtt.array[ix + 2] = THREE.MathUtils.lerp(positions[ix + 2], targetPositions[ix + 2] + breath * targetPositions[ix + 2], easeProgress);
        }
        positionsAtt.needsUpdate = true;
        
        // Dynamic rotation accelerating based on formation
        pointsRef.current.rotation.y = time * (0.2 + easeProgress * 0.4);
        pointsRef.current.rotation.x = time * 0.15;
    }

    if (wireframesRef.current) {
        let buildProgress = 0;
        if (progress > 0.42) {
            buildProgress = Math.min((progress - 0.42) / 0.29, 1);
        }
        
        // Heartbeat pulsing effect during Intelligence Build
        const pulseFrequency = buildProgress * 8;
        const pulse = 1 + Math.sin(time * pulseFrequency) * 0.08 * buildProgress;
        
        wireframesRef.current.scale.setScalar(easeProgress * pulse);
        
        // Reveal connections safely
        if (wireframesRef.current.children?.[0]?.material) {
            wireframesRef.current.children[0].material.opacity = buildProgress * 0.4;
        }
        if (wireframesRef.current.children?.[1]?.material) {
            wireframesRef.current.children[1].material.opacity = buildProgress * 0.15;
        }
        
        wireframesRef.current.rotation.y = -time * 0.2;
        wireframesRef.current.rotation.x = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group>
            {/* Particle Core System */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.04}
                    color="#00f0ff"
                    transparent
                    opacity={0.9}
                    blending={THREE.AdditiveBlending}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>

            {/* Neural Connections via Wireframe Geometries */}
            <group ref={wireframesRef}>
                <mesh>
                    <icosahedronGeometry args={[2.8, 2]} />
                    <meshBasicMaterial
                        color="#00f0ff"
                        wireframe
                        transparent
                        opacity={0}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
                <mesh scale={[1.15, 1.15, 1.15]}>
                    <icosahedronGeometry args={[2.8, 1]} />
                    <meshBasicMaterial
                        color="#8a2be2"
                        wireframe
                        transparent
                        opacity={0}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
            </group>
        </group>
    </Float>
  );
};

export default LoadingCore3D;
