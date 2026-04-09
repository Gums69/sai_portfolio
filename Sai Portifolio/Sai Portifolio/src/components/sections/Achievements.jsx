import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Sparkles } from 'lucide-react';
import { textVariant, fadeIn } from '../../utils/motion';

const achievements = [
  {
    icon: <Code size={32} className="text-secondary" />,
    title: "150+ Problems Solved",
    description: "Consistent problem solver on LeetCode with strong grasp of algorithmic patterns.",
    glow: "rgba(138,43,226,0.3)"
  },
  {
    icon: <Trophy size={32} className="text-primary" />,
    title: "Top 10 Rank",
    description: "Secured top position out of 50+ participating teams in a competitive college Hackathon.",
    glow: "rgba(0,240,255,0.3)"
  },
  {
    icon: <Sparkles size={32} className="text-secondary" />,
    title: "Logic Consistency",
    description: "Maintained a strong daily streak in logic building and hands-on coding practice.",
    glow: "rgba(138,43,226,0.3)"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-6 sm:px-16 overflow-hidden">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">Milestones</p>
        <h2 className="text-4xl md:text-5xl font-bold text-textMain glow-text mb-12">Achievements.</h2>
      </motion.div>

      <div className="flex flex-wrap gap-8 justify-center items-stretch mt-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-[calc(33.333%-1.5rem)] min-w-[300px] flex text-center"
          >
            <div className="glass w-full rounded-2xl p-8 relative group overflow-hidden border border-cardBorder hover:border-primary/50 transition-all duration-300">
              {/* Spotlight effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[80px] -z-10" 
                style={{ background: `radial-gradient(circle at center, ${item.glow} 0%, transparent 70%)` }}
              />
              
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-card/50 border border-cardBorder shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-background/80 relative z-10">
                 {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors relative z-10">{item.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed relative z-10 group-hover:text-textMain/90 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
