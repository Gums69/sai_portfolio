import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LoadingCore3D from './canvas/LoadingCore3D';

const loadingPhrases = [
  "Booting Intelligent Portfolio...",
  "Compiling Ideas...",
  "Building Scalable Systems...",
  "Initializing Developer Environment...",
  "Loading Full-Stack Experience...",
];

// Adds slight mouse parallax to the entire 3D scene
const CameraParallax = () => {
    useFrame((state) => {
        // Mapped slightly for parallax effect on mouse move
        const targetX = (state.mouse.x * 1.5);
        const targetY = (state.mouse.y * 1.5);
        
        state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
        state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  
  // Custom object to hold the tweened value linearly across the timeline
  const progressRef = useRef({ value: 0 }); 
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showIdentity, setShowIdentity] = useState(false);
  const [completeSequence, setCompleteSequence] = useState(false);

  // GSAP Timeline for master sequence control
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setCompleteSequence(true);
        // Add delay before unmount to ensure smooth transition
        setTimeout(onComplete, 800); 
      }
    });

    // Animate from 0 to 1 over 7 seconds linearly
    tl.to(progressRef.current, {
      value: 1,
      duration: 7,
      ease: "power2.inOut",
      onUpdate: () => {
        const p = progressRef.current.value;
        const time = p * 7; 
        
        // Sequence text updates based on time (0 to 7)
        if (time > 1 && time < 2.5) {
            setPhraseIndex((prev) => prev !== 1 ? 1 : prev);
        } else if (time > 2.5 && time < 4) {
            setPhraseIndex((prev) => prev !== 2 ? 2 : prev);
        } else if (time > 4 && time < 5.5) {
            setPhraseIndex((prev) => prev !== 3 ? 3 : prev);
        } else if (time > 5.5) {
            setPhraseIndex((prev) => prev !== 4 ? 4 : prev);
        }

        // Sequence identity reveal
        if (time >= 4.8 && !showIdentity) {
            // Must use regular set state, but be careful with closures
            // We'll trust the time trigger here.
        }
      }
    });

    // Handle Identity safely
    tl.call(() => setShowIdentity(true), [], 5.0);

  }, { scope: containerRef });

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <CameraParallax />
            <LoadingCore3D progressRef={progressRef} />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        
        {/* Core glow and SS text */}
        <AnimatePresence>
            {showIdentity && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.1, 1],
                        filter: "blur(0px)",
                        textShadow: [
                            "0 0 20px #8a2be2, 0 0 40px #00f0ff",
                            "0 0 40px #00f0ff, 0 0 80px #8a2be2",
                            "0 0 20px #8a2be2, 0 0 40px #00f0ff",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute text-5xl md:text-8xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-8 z-20"
                >
                    SS
                </motion.div>
            )}
        </AnimatePresence>

        {/* Ambient Core Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-violet-500/10 rounded-full blur-[80px] -z-10 mix-blend-screen" />

        {/* Console / Terminal UI overlay */}
        <div className="absolute bottom-12 md:bottom-24 w-full flex flex-col justify-center items-center px-4">
             <div className="font-mono text-cyan-400/80 text-[10px] md:text-xs tracking-[0.3em] mb-4 uppercase">
                System Boot Sequence
             </div>
             
             <AnimatePresence mode="popLayout">
                <motion.div 
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-mono text-white/90 text-sm md:text-[16px] tracking-wider text-glow flex items-center justify-center text-center"
                >
                    <span className="text-violet-400 mr-2">{'>'}</span> 
                    {loadingPhrases[phraseIndex]}
                    <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="ml-2 w-2 h-4 bg-cyan-400 inline-block"
                    />
                </motion.div>
             </AnimatePresence>
        </div>

        {/* CPU/AI Scanning Overlay */}
        {!completeSequence && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="absolute inset-0 pointer-events-none mix-blend-screen"
                style={{ 
                    backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.9) 100%)',
                }}
            >
                {/* Horizontal scanner line */}
                <motion.div
                    animate={{ y: ["0vh", "100vh", "0vh"] }}
                    transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    className="w-full h-[1px] bg-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
                />
            </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
