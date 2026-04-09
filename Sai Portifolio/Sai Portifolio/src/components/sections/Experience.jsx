import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import { textVariant, fadeIn } from '../../utils/motion';

const trainingList = [
  {
    title: "Data Structures and Algorithms",
    organization: "LPUCPE",
    date: "Training Program",
    icon: <BookOpen className="text-secondary group-hover:text-primary transition-colors" size={24} />,
    description: [
      "Completed a structured 2-month online training program.",
      "Strengthened problem-solving using Big-O analysis.",
      "Practiced arrays, linked lists, stacks, queues, trees, and graphs.",
      "Worked with hash maps, BSTs, and priority queues."
    ]
  }
];

const certificationsList = [
  "Oracle Data Platform 2025 Foundations",
  "SWAYAM-NPTEL – Security and Privacy",
  "Java Programming Language – NeoColab",
  "Packet Switching Networks and Algorithms – Coursera"
];

const ExperienceNode = ({ experience, index }) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.2 + 0.3, 0.75)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative pl-12 sm:pl-16 py-6 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-[24px] top-12 bottom-0 w-0.5 bg-cardBorder group-hover:bg-primary/20 transition-colors" />
    
    {/* Glowing Node */}
    <div className="absolute left-[13px] sm:left-[17px] top-6 w-[22px] h-[22px] rounded-full bg-background border-4 border-secondary group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_15px_rgba(138,43,226,0.6)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]" />

    <div className="glass p-6 sm:p-8 rounded-2xl border border-cardBorder group-hover:border-textMuted/30 transition-all hover:bg-card/60 ml-2">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2 border-b border-cardBorder pb-4">
        <div className="flex items-center gap-4">
           {experience.icon && (
             <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-cardBorder group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                {experience.icon}
             </div>
           )}
           <div>
            <h3 className="text-xl font-bold text-textMain group-hover:text-primary transition-colors">{experience.title}</h3>
            <p className="text-textMuted font-semibold text-sm">{experience.organization}</p>
           </div>
        </div>
        <div className="px-3 py-1 glass rounded-full text-xs font-bold text-secondary uppercase tracking-wider self-start sm:self-auto border border-secondary/20 group-hover:border-secondary/50">
          {experience.date}
        </div>
      </div>
      
      <ul className="mt-4 list-none space-y-3">
        {experience.description.map((point, i) => (
          <li key={i} className="text-textMain/80 text-[15px] flex items-start gap-3">
            <span className="text-secondary mt-1">▹</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CertificationCard = ({ title, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15 + 0.4, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="glass p-5 rounded-xl border border-cardBorder hover:border-primary/40 transition-all flex items-center gap-4 group cursor-default hover:-translate-y-1 shadow-sm hover:shadow-[0_5px_15px_rgba(0,240,255,0.1)] relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
    <Award className="text-secondary group-hover:text-primary transition-colors" size={28} />
    <p className="text-textMain font-medium leading-tight group-hover:text-white transition-colors">{title}</p>
    <CheckCircle className="text-primary/50 ml-auto absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 sm:px-16 overflow-hidden">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold text-textMain glow-text mb-16">Experience & Certifications.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left column: Training */}
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent" />
          <h3 className="text-2xl font-bold text-white mb-8 pl-14 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary"></span>
            Training
          </h3>
          <div className="mt-4 flex flex-col">
            {trainingList.map((exp, index) => (
              <ExperienceNode key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Right column: Certifications */}
        <div className="lg:w-1/2 w-full pt-10 lg:pt-0">
          <motion.div 
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
            className="mouse-glow h-full bg-gradient-to-br from-card to-background rounded-[2rem] p-10 border border-white/5 shadow-glass relative group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <Award className="text-primary" size={28} />
              Verified Certifications
            </h3>
            
            <div className="flex flex-col gap-4 relative z-10">
              {certificationsList.map((cert, index) => (
                <CertificationCard key={index} title={cert} index={index} />
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-cardBorder/50 flex justify-between items-center relative z-10">
               <p className="text-textMuted text-sm">Always upskilling & adapting to new tech.</p>
               <span className="px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
