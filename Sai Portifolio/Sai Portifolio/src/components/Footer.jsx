import React from 'react';
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-cardBorder pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at top, #8a2be2 0%, transparent 50%)' }} />
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
           <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-textMuted">
             Gollapalli Uma Manikanta Sai Srinivas
           </h2>
           <p className="text-sm font-medium text-secondary/80 flex items-center gap-2 uppercase tracking-widest mt-1">
             <span className="w-4 h-[1px] bg-secondary" /> MERN Stack Developer
           </p>
           <p className="text-textMuted/70 text-sm mt-3 italic max-w-sm">
             "Engineering immersive web experiences and turning ideas into intelligent digital products."
           </p>
        </div>

        {/* Right Side: Social links */}
        <div className="flex flex-col items-center md:items-end gap-6">
           <div className="flex gap-4">
               <a href="https://github.com/Gums69" target="_blank" rel="noreferrer" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-cardBorder hover:text-white transition-all text-textMuted">
                  <FiGithub size={20} />
               </a>
               <a href="https://www.linkedin.com/in/srinivasgollapalli18/" target="_blank" rel="noreferrer" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-cardBorder hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all text-textMuted">
                  <FiLinkedin size={20} />
               </a>
               <a href="mailto:sai722909@gmail.com" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-cardBorder hover:text-red-400 hover:border-red-400/50 transition-all text-textMuted">
                  <Mail size={20} />
               </a>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 mt-16 pt-8 border-t border-cardBorder/30 flex flex-col sm:flex-row items-center justify-between text-xs text-textMuted/50 font-medium relative z-10">
         <p>&copy; {new Date().getFullYear()} Sai Srinivas. All rights reserved.</p>
         <p className="mt-2 sm:mt-0">Designed & built with <span className="text-secondary group-hover:animate-pulse">♥</span> & React.</p>
      </div>
    </footer>
  );
};

export default Footer;
