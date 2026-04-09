import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../utils/motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    score: "CGPA: 6.5",
    date: "Since Aug 2023",
  },
  {
    institution: "Aditya Junior College",
    location: "Kakinada, Andhra Pradesh, India",
    degree: "Intermediate",
    score: "Percentage: 85%",
    date: "Apr 2021 – Mar 2023",
  },
  {
    institution: "Aditya EM School",
    location: "Kakinada, Andhra Pradesh, India",
    degree: "Matriculation",
    score: "Percentage: 95%",
    date: "Apr 2020 – Mar 2021",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 sm:px-16">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">My Background</p>
        <h2 className="text-4xl md:text-5xl font-bold text-textMain glow-text mb-16">Education.</h2>
      </motion.div>

      <div className="relative mt-12 pl-6 sm:pl-0 border-l-2 border-cardBorder sm:border-l-0">
        {/* Only visible on sm and up - central timeline line */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cardBorder -translate-x-1/2" />
        
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.2 + 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`relative mb-12 sm:mb-24 flex flex-col sm:flex-row items-center w-full group ${
              index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
            }`}
          >
            {/* Center Node (visible on sm+) */}
            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all">
                <span className="w-2 h-2 rounded-full bg-primary" />
            </div>

            {/* Mobile Node */}
            <div className="sm:hidden absolute -left-[29px] top-6 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)]" />

            <div className={`sm:w-[45%] w-full glass p-6 rounded-2xl border border-cardBorder group-hover:border-primary/50 transition-all hover:-translate-y-2 relative overflow-hidden`}>
              {/* Blur effect */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-20 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} />
              
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-12 h-12 shrink-0 rounded-full bg-card/60 border border-cardBorder flex items-center justify-center text-secondary group-hover:text-primary group-hover:bg-background transition-colors shadow-inner">
                  <GraduationCap size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors pr-10">{edu.institution}</h3>
                   <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-3">{edu.location}</p>
                   <p className="text-textMain/90 font-medium mb-1">{edu.degree}</p>
                   <div className="flex justify-between items-center mt-4 border-t border-cardBorder pt-4">
                      <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-md text-sm">{edu.score}</span>
                      <span className="text-secondary font-medium text-sm">{edu.date}</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
