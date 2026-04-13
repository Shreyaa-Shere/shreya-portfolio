import { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

const navLinks = [
  { name: 'Home',       id: 'home'       },
  { name: 'About',      id: 'about'      },
  { name: 'Skills',     id: 'skills'     },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects',   id: 'projects'   },
  { name: 'Leadership', id: 'leadership' },
  { name: 'Contact',    id: 'contact'    },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ activeSection, onOpenPalette }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '16px 24px',
      background: scrolled ? 'rgba(9,9,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <button
        onClick={() => scrollTo('home')}
        style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #f472b6, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >SS</button>

      {/* Desktop Nav — pill style */}
      <div
        className="hidden-mobile"
        style={{
          display: 'flex',
          gap: '4px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '50px',
          padding: '6px',
        }}
      >
        {navLinks.map(link => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: isActive
                  ? 'linear-gradient(135deg, #f472b6, #c084fc)'
                  : 'transparent',
                color: isActive ? 'white' : '#a1a1aa',
              }}
            >
              {link.name}
            </button>
          );
        })}
      </div>

      {/* Command palette trigger — desktop */}
      <button
        onClick={onOpenPalette}
        className="hidden-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '8px 14px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '50px',
          color: '#71717a',
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(192,132,252,0.35)';
          e.currentTarget.style.color = '#c084fc';
          e.currentTarget.style.background = 'rgba(192,132,252,0.07)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.color = '#71717a';
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        }}
        title="Open command palette (Ctrl+K)"
      >
        <Command size={13} />
        <span>Ctrl K</span>
      </button>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ background: 'none', border: 'none', color: '#c084fc', cursor: 'pointer' }}
        className="show-mobile"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(9,9,15,0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: activeSection === link.id ? '#c084fc' : '#a1a1aa',
                background: activeSection === link.id ? 'rgba(192,132,252,0.08)' : 'transparent',
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onOpenPalette(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(192,132,252,0.2)',
              background: 'rgba(192,132,252,0.06)',
              color: '#c084fc',
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginTop: '4px',
              fontFamily: 'Inter, system-ui, sans-serif',
              width: '100%',
              textAlign: 'left',
            }}
          >
            <Command size={15} />
            Command palette
            <kbd style={{
              marginLeft: 'auto',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '4px',
              padding: '1px 7px',
              fontSize: '0.72rem',
              color: '#71717a',
              fontFamily: 'monospace',
            }}>Ctrl K</kbd>
          </button>
        </div>
      )}
    </nav>
  );
}
