import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'achievements', title: 'Achievements' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (title) => {
    setActive(title);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-[1400px] mx-auto px-6 sm:px-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive('');
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xl rounded-full group-hover:scale-105 transition-transform duration-500 shadow-glass-glow">
              SS
            </div>
            <p className="text-white text-lg font-bold cursor-pointer flex font-outfit uppercase tracking-wider ml-2 group-hover:text-primary transition-colors">
              Sai
            </p>
          </a>

          {/* Desktop Nav */}
          <ul className="list-none hidden lg:flex flex-row gap-8 xl:gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-white/50'
                } hover:text-white transition-colors duration-300 text-xs font-semibold tracking-widest uppercase cursor-pointer relative group`}
                onClick={() => handleNavClick(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <span
                  className={`absolute -bottom-2 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    active === nav.title ? 'scale-x-100' : ''
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-all z-50 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#0a0a0f] border-l border-white/10 shadow-2xl flex flex-col pt-24 pb-10 px-8"
            >
              {/* Logo in panel */}
              <div className="absolute top-5 left-8 flex items-center gap-2">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-sm rounded-full">
                  SS
                </div>
                <span className="text-white font-bold uppercase tracking-widest text-sm">Sai</span>
              </div>

              <ul className="flex flex-col gap-1">
                {navLinks.map((nav, i) => (
                  <motion.li
                    key={nav.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <a
                      href={`#${nav.id}`}
                      onClick={() => handleNavClick(nav.title)}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                        active === nav.title
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {nav.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-textMuted text-xs text-center">© 2025 Sai Srinivas</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
