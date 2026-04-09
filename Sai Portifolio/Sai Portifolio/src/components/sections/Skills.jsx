import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { textVariant, fadeIn } from '../../utils/motion';

const skillsData = {
  Languages: ["C", "C++", "Java", "JavaScript", "PHP"],
  "Core CS": ["Data Structures", "Algorithms", "Problem Solving", "Time & Space Complexity"],
  Frontend: ["HTML", "CSS", "React.js", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express.js", "PHP"],
  "Tools & Platforms": ["GitHub", "Coursera", "NeoColab"]
};

const focuses = [
  "Full Stack Development",
  "Responsive UI Engineering",
  "Backend Logic",
  "Scalable Project Architecture",
  "Problem Solving"
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 sm:px-16">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">My Capabilities</p>
        <h2 className="text-5xl md:text-7xl font-bold text-textMain glow-text mb-12 tracking-tight">Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMuted to-white font-light italic">& Focus.</span></h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Technical Skills Map */}
        <div className="lg:w-2/3 w-full">
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(skillsData).map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-md ${
                  activeTab === category 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                    : "bg-background/50 text-textMuted border-white/10 hover:border-white/30 hover:text-white"
                }`}
                variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div 
            layout
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
            className="mouse-glow glass-premium rounded-[2rem] p-10 min-h-[300px] relative overflow-hidden group transition-all"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-4 relative z-10"
              >
                {skillsData[activeTab].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="px-6 py-3 bg-background/60 border border-cardBorder rounded-xl hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all cursor-default group/skill flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover/skill:bg-primary transition-colors block"></span>
                    <span className="text-textMain font-medium font-sans tracking-wide">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Soft Skills / Focus */}
        <motion.div 
          className="lg:w-1/3 w-full"
          variants={fadeIn("left", "tween", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="glass-premium rounded-2xl p-8 h-full relative overflow-hidden group transition-all">
            <h3 className="text-xl font-bold text-textMain mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/50 shadow-[0_0_10px_rgba(138,43,226,0.3)]">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              </span>
              What I Focus On
            </h3>
            <ul className="space-y-4">
              {focuses.map((focus, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="flex items-start gap-3 text-textMuted group-hover:text-textMain/90 transition-colors"
                >
                  <span className="text-primary mt-1 rotate-45">❖</span>
                  <span className="leading-snug">{focus}</span>
                </motion.li>
              ))}
            </ul>
             <div className="absolute right-0 bottom-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
