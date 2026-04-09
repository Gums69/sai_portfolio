import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { fadeIn, textVariant } from '../../utils/motion';

import lingualearn from '../../assets/lingualearn.png';
import carpainting from '../../assets/car-painting.png';
import banking from '../../assets/banking.png';

const projects = [
  {
    name: "Deep Learning Audio Language Model (ALM)",
    description: "An AI-driven audio language system designed to process speech and environmental sounds with strong contextual understanding using deep learning-based audio and language models.",
    impact: [
      "Improved contextual understanding accuracy by 85%",
      "Reduced response latency by 35%",
      "Managed 1000+ audio interactions efficiently"
    ],
    tags: ["React.js", "Node.js", "Express.js", "Tailwind"],
    source_code_link: "https://github.com/Gums69",
    image: lingualearn,
    type: "AI Research",
    color: "#00f0ff",
    number: "01",
  },
  {
    name: "Car Painting Service Website",
    description: "A responsive service-based website designed to showcase multiple car painting packages with optimized performance and improved accessibility. Focused on seamless client conversion and mobile-first UX.",
    impact: [
      "Showcased 10+ service packages",
      "Improved load time by 40%",
      "Handled 200+ monthly inquiries"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    source_code_link: "https://github.com/Gums69",
    image: carpainting,
    type: "Commercial",
    color: "#8a2be2",
    number: "02",
  },
  {
    name: "Simple Banking System (SBS)",
    description: "A feature-rich banking application enabling secure financial operations such as deposits, withdrawals, transfers, and balance checks with rigorous authentication protocols.",
    impact: [
      "Supports 5+ core banking services",
      "100% authenticated request handling",
      "Applied DSA for optimized processing"
    ],
    tags: ["PHP", "JavaScript", "DSA", "HTML/CSS"],
    source_code_link: "https://github.com/Gums69",
    image: banking,
    type: "FinTech",
    color: "#00f0ff",
    number: "03",
  },
];

const ProjectShowcase = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const isEven = index % 2 === 0;
  
  // Parallax the image slightly differently than the text
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className={`min-h-[80vh] w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 py-20`}>
      
      {/* Abstract Image Container */}
      <motion.div 
        style={{ y: yImage }}
        className="w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] relative overflow-hidden group shadow-premium border border-white/5 bg-white/[0.01]"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl z-20 transition-opacity duration-500 opacity-0 md:group-hover:opacity-10 pointer-events-none" />
        
        {/* Project Image or Abstract Placeholder */}
        <div className="absolute inset-0 bg-card border border-white/5 flex flex-col items-center justify-center overflow-hidden">
           {project.image ? (
             <img 
               src={project.image} 
               alt={project.name} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               onError={(e) => {
                 const next = e.currentTarget.nextElementSibling;
                 e.currentTarget.style.display = 'none';
                 if (next) next.style.display = 'flex';
               }}
             />
           ) : null}
           
           <div className={`${project.image ? 'hidden' : 'flex'} absolute inset-0 flex-col items-center justify-center`}>
              <div 
                className="absolute w-[200%] h-[200%] opacity-20 blur-[80px] animate-spin-slow transition-transform duration-1000 group-hover:scale-150"
                style={{ background: `conic-gradient(from 0deg, transparent, ${project.color}, transparent, ${project.color}, transparent)` }}
              />
              <FiGithub className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-white/80 group-hover:text-white" />
              <div className={`w-32 h-32 rounded-full border border-[${project.color}]/30 flex items-center justify-center relative z-10 mix-blend-screen`}>
                 <span className="text-white/80 font-bold tracking-widest">{project.type}</span>
                 <div className="absolute inset-0 border border-white/20 rounded-full scale-110 blur-sm" />
              </div>
           </div>
           
           <h4 className="text-[12rem] font-black italic text-white/5 opacity-50 absolute -top-10 -right-10 pointer-events-none">{project.number}</h4>
        </div>

        {/* View overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 flex items-center justify-center backdrop-blur-sm">
            <button onClick={() => window.open(project.source_code_link, "_blank")} className="px-8 py-4 rounded-full bg-primary text-background font-bold flex items-center gap-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 shadow-glass-glow">
              View Repository <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
      </motion.div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-primary font-mono text-sm tracking-[0.2em] mb-4 uppercase"
          style={{ color: project.color }}
        >
          Project {project.number} — {project.type}
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight hover:text-white/80 transition-colors"
        >
          {project.name}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-textMuted/90 text-lg leading-relaxed mb-8 max-w-xl font-jakarta"
        >
          {project.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
           {project.impact?.map((item, i) => (
              <div key={i} className="glass p-4 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <span className="text-primary font-bold" style={{ color: project.color }}>{i + 1}</span>
                 </div>
                 <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
           ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 pb-8 mb-8 border-b border-cardBorder"
        >
          {project.tags?.map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full border border-cardBorder bg-card/50 text-white/80 text-xs font-semibold tracking-wider">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
        >
           <a href={project.source_code_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <FiGithub size={18} />
              </span>
              <span className="font-medium tracking-wide text-sm uppercase">Source Code</span>
           </a>
        </motion.div>
      </div>

    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 max-w-[1400px] mx-auto px-6 sm:px-16 overflow-hidden relative">
      <motion.div 
        variants={textVariant()} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }}
        className="mb-24 md:w-2/3"
      >
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-4 flex items-center gap-4">
           <span className="h-[1px] w-8 bg-secondary" /> Selected Work
        </p>
        <h2 className="text-6xl md:text-8xl font-bold text-textMain leading-[1.05] tracking-tight">
          Featured <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMuted to-white font-light italic">Case Studies.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectShowcase key={project.number} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
