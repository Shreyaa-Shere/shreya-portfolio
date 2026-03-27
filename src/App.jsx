import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function AppInner() {
  const [paletteOpen, setPaletteOpen] = useState(false);

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

  return (
    <>
      <CommandPalette open={paletteOpen} onClose={closePalette} />
      <Routes>
        <Route path="/"           element={<PageWrapper onOpenPalette={openPalette}><Hero /></PageWrapper>} />
        <Route path="/about"      element={<PageWrapper onOpenPalette={openPalette}><About /></PageWrapper>} />
        <Route path="/skills"     element={<PageWrapper onOpenPalette={openPalette}><Skills /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper onOpenPalette={openPalette}><Experience /></PageWrapper>} />
        <Route path="/projects"   element={<PageWrapper onOpenPalette={openPalette}><Projects /></PageWrapper>} />
        <Route path="/leadership" element={<PageWrapper onOpenPalette={openPalette}><Leadership /></PageWrapper>} />
        <Route path="/contact"    element={<PageWrapper onOpenPalette={openPalette}><Contact /></PageWrapper>} />
      </Routes>
    </>
  );
}

function PageWrapper({ children, onOpenPalette }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <BackgroundAnimation />
      <Navbar onOpenPalette={onOpenPalette} />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
