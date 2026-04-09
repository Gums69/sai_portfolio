import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="relative z-0 bg-background overflow-hidden selection:bg-primary/30 selection:text-white cursor-none">
        <CustomCursor />
        
        <AnimatePresence mode="wait" onExitComplete={() => setShowContent(true)}>
          {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {showContent && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Achievements />
            <Education />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </ReactLenis>
  );
};

export default App;
