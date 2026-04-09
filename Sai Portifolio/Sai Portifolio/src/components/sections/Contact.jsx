import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { textVariant, fadeIn } from '../../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating EmailJS sending
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000); // Hide success after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 sm:px-16 overflow-hidden">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-secondary tracking-widest text-sm font-semibold uppercase mb-2">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold text-textMain glow-text mb-4">Contact Me.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-textMuted text-[17px] max-w-2xl leading-[30px]"
        >
          Let’s Build Something Exceptional Together. I am open to discussing freelance opportunities, 
          custom website development, and MERN stack engineering roles.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-col-reverse lg:flex-row gap-16 bg-card/20 rounded-[3rem] p-10 border border-white/5 shadow-glass relative overflow-hidden">
        {/* Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        {/* Form Container */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          }}
          className="mouse-glow flex-1 p-8 sm:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 relative z-10 shadow-glass-hover"
        >
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col">
               <label className="text-white/80 font-medium mb-3 pl-1 tracking-wide text-sm uppercase font-outfit">Your Name</label>
               <input
                 type="text"
                 name="name"
                 required
                 value={form.name}
                 onChange={(e) => setForm({ ...form, name: e.target.value })}
                 className="bg-black/40 border border-white/10 py-4 px-6 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-500 font-jakarta hover:border-white/20"
               />
            </div>
            
            <div className="flex flex-col">
               <label className="text-white/80 font-medium mb-3 pl-1 tracking-wide text-sm uppercase font-outfit">Your Email</label>
               <input
                 type="email"
                 name="email"
                 required
                 value={form.email}
                 onChange={(e) => setForm({ ...form, email: e.target.value })}
                 className="bg-black/40 border border-white/10 py-4 px-6 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-500 font-jakarta hover:border-white/20"
               />
            </div>

            <div className="flex flex-col">
               <label className="text-white/80 font-medium mb-3 pl-1 tracking-wide text-sm uppercase font-outfit">Your Message</label>
               <textarea
                 rows={5}
                 name="message"
                 required
                 value={form.message}
                 onChange={(e) => setForm({ ...form, message: e.target.value })}
                 placeholder="What do you want to build?"
                 className="bg-black/40 border border-white/10 py-5 px-6 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-500 resize-none font-jakarta hover:border-white/20"
               />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`py-5 px-8 mt-2 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden group ${
                  success ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-white text-background hover:scale-[1.02] shadow-glass-glow'
              }`}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : success ? (
                <>
                   <CheckCircle2 size={20} />
                   Message Sent
                </>
              ) : (
                <>
                   <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   Send Message
                </>
              )}
              {!success && !loading && (
                 <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-1/3 w-full flex flex-col justify-center space-y-10 z-10 p-4"
        >
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full glass flex justify-center items-center border border-cardBorder group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors shrink-0">
               <Mail size={22} className="text-primary" />
            </div>
            <div>
               <h3 className="text-white font-bold text-lg">Email</h3>
               <p className="text-textMuted group-hover:text-textMain transition-colors hover:underline cursor-pointer" onClick={() => window.location = 'mailto:sai722909@gmail.com'}>sai722909@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full glass flex justify-center items-center border border-cardBorder group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors shrink-0">
               <Phone size={22} className="text-primary" />
            </div>
            <div>
               <h3 className="text-white font-bold text-lg">Phone</h3>
               <p className="text-textMuted group-hover:text-textMain transition-colors">+91-9347188359</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full glass flex justify-center items-center border border-cardBorder group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors shrink-0">
               <MapPin size={22} className="text-primary" />
            </div>
            <div>
               <h3 className="text-white font-bold text-lg">Location</h3>
               <p className="text-textMuted group-hover:text-textMain transition-colors">India (Remote/Open to Relocate)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
