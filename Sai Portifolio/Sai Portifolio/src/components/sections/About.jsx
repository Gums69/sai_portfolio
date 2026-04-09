import React from "react";
import { Tilt } from "react-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Code2, Trophy, FolderKanban, Cpu } from "lucide-react";

const stats = [
  { id: 1, title: "150+", subtitle: "LeetCode Solved", icon: <Code2 className="w-5 h-5" /> },
  { id: 2, title: "Top 10", subtitle: "College Hackathon", icon: <Trophy className="w-5 h-5" /> },
  { id: 3, title: "3+", subtitle: "Major Projects Built", icon: <FolderKanban className="w-5 h-5" /> },
  { id: 4, title: "MERN", subtitle: "Full Stack Focus", icon: <Cpu className="w-5 h-5" /> },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="about" className="py-32 w-full relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-16 flex flex-col lg:flex-row relative z-10">
        
        {/* Left: Huge Typography & Text Content */}
        <motion.div 
          style={{ y: yText }}
          className="lg:w-3/5 w-full pr-0 lg:pr-24 pt-16 z-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-primary"></span>
            <p className="text-primary tracking-[0.2em] text-xs font-bold uppercase">The Engineer</p>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold text-textMain leading-[1.05] tracking-tight mb-10">
            Designing logic. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-textMuted to-white font-light italic">Building scale.</span>
          </h2>
          
          <div className="space-y-6 text-textMuted/80 text-lg md:text-xl leading-relaxed font-jakarta max-w-2xl">
            <p>
              I am a Computer Science and Engineering student passionate about full-stack web development, 
              problem-solving, and building impactful software solutions. I thrive on translating abstract ideas 
              into responsive, scalable web applications.
            </p>
            <p>
              My expertise lies in blending clean, high-end design with efficient backend architecture, 
              utilizing modern tools like <strong className="text-textMain font-medium">React.js, Node.js, and Tailwind CSS</strong>.
            </p>
          </div>

          {/* Minimal Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-cardBorder/50">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.id}
                variants={fadeIn("up", "tween", i * 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col group cursor-default"
              >
                <div className="text-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-textMain mb-1 tracking-tight">{stat.title}</h4>
                <p className="text-textMuted text-xs font-medium uppercase tracking-widest">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Floating Glass Profile Card (Overlapping layout) */}
        <motion.div 
          style={{ y: yImage }}
          className="lg:w-2/5 w-full mt-24 lg:-mt-10 mb-10 lg:mb-0 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Tilt
            options={{ max: 15, scale: 1.02, speed: 500 }}
            className="w-full relative group"
          >
            {/* Soft decorative glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
            
            <div className="w-full aspect-[3/4] sm:aspect-[3/4] glass-premium rounded-[2.5rem] p-1 relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(225,231,236,0.15)] transition-shadow duration-500 bg-black/40">
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10" />
              
              {/* Profile Image */}
              <div className="w-full h-full rounded-[2.2rem] relative overflow-hidden bg-card/50">
                {/* Fallback glow */}
                <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-hero-glow opacity-20 animate-spin-slow rotate-12 blur-3xl mix-blend-screen" />
                
                {/* Image */}
                <img 
                  src="/profile.png" 
                  alt="Sai Srinivas - MERN Stack Developer" 
                  className="w-full h-full object-cover object-center relative z-10"
                  style={{ objectPosition: 'center top' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Text if image fails to load */}
                <div className="hidden absolute inset-0 z-10 flex-col items-center justify-center">
                  <span className="text-[120px] font-bold text-white/5 font-outfit tracking-tighter mix-blend-overlay">SS</span>
                </div>
              </div>

              {/* Foreground Card Details */}
              <div className="absolute bottom-10 left-10 z-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="text-primary tracking-[0.2em] text-xs font-bold uppercase mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                     Available for work
                  </p>
                  <h3 className="text-3xl font-bold text-white tracking-tight mb-1">Sai Srinivas</h3>
                  <p className="text-white/60 font-light text-sm tracking-wide">MERN Stack Engineer</p>
                </motion.div>
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
