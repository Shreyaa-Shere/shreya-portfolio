import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import CommandPalette from './components/CommandPalette';
import SideNav from './components/SideNav';

export const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'leadership', 'contact'];

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const openPalette  = useCallback(() => setPaletteOpen(true),  []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  /* Global Ctrl+K / Cmd+K shortcut */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Scroll-based active section tracking */
  useEffect(() => {
    const handleScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight * 0.4;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <BackgroundAnimation />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
      <Navbar activeSection={activeSection} onOpenPalette={openPalette} />
      <SideNav activeSection={activeSection} />

      <div id="home" className="snap-section"><Hero /></div>
      <div id="about" className="snap-section"><About /></div>
      <div id="skills" className="snap-section"><Skills /></div>
      <div id="experience" className="snap-section"><Experience /></div>
      <div id="projects" className="snap-section"><Projects /></div>
      <div id="leadership" className="snap-section"><Leadership /></div>
      <div id="contact" className="snap-section"><Contact /></div>
      <Footer />
    </div>
  );
}
