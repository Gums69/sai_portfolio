import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Hero3D from '../schemas/Hero3D';
import { textVariant, fadeIn } from '../../utils/motion';

const subtitles = [
  "Building scalable web experiences",
  "Designing logic-driven digital products",
  "Crafting immersive user interfaces",
  "Turning ideas into full-stack solutions"
];

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex items-center overflow-hidden py-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Hero3D />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full z-10 pt-16 pb-8">
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-start h-full">
          
          <motion.div variants={textVariant(0.1)} initial="hidden" animate="show">
             <p className="text-secondary tracking-widest text-xs sm:text-sm font-semibold uppercase mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-6 sm:w-8 h-[1px] bg-secondary"></span> 
                Portfolio 2026
             </p>
            <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-textMain leading-[1.05] tracking-tight text-glow">
              Sai <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Srinivas
              </span>
            </h1>
          </motion.div>

          {/* Role subtitle */}
          <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-2xl font-light text-textMuted tracking-wide flex flex-col sm:flex-row sm:items-center gap-4 mt-8"
          >
            <span className="px-4 py-2 rounded-full glass-premium text-sm sm:text-base text-primary font-medium tracking-widest uppercase">
              MERN Stack
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-secondary/80"></span>
            <span className="px-4 py-2 rounded-full glass-premium text-sm sm:text-base text-accent font-medium tracking-widest uppercase">
              Web Developer
            </span>
          </motion.div>

          {/* Rotating Subtitles */}
          <div className="h-[40px] flex items-center overflow-hidden mt-1">
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentSubtitle}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl sm:text-2xl text-textMain/90 font-medium tracking-wide"
              >
                {subtitles[currentSubtitle]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1)}
            initial="hidden"
            animate="show"
            className="mt-6 text-textMuted text-base sm:text-lg max-w-xl leading-relaxed font-jakarta"
          >
            Computer Science student and aspiring full-stack developer focused on building responsive, scalable, and impactful digital experiences with modern web technologies.
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4 mt-6 sm:mt-10"
          >
            <a href="#projects" className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-background font-bold text-base sm:text-lg hover:scale-105 transition-all duration-500 overflow-hidden shadow-glass-glow hover:shadow-[0_0_40px_rgba(225,231,236,0.5)]">
              <span className="relative z-10 flex items-center gap-2">View Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glass-premium group relative px-6 sm:px-8 py-3 sm:py-4 text-textMain font-medium transition-all duration-300 flex items-center gap-3">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform text-secondary" /> Download CV
            </a>

            <div className="flex gap-3 items-center">
              <a href="https://github.com/Gums69" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass hover:border-primary hover:text-primary transition-all group">
                <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/srinivasgollapalli18/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass hover:border-primary hover:text-primary transition-all group">
                <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:sai722909@gmail.com" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full glass hover:border-primary hover:text-primary transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[52px] rounded-3xl border-4 border-textMuted/40 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-primary mb-1 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
