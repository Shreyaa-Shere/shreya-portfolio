import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
      <Link to="/" style={{
        fontSize: '1.25rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #f472b6, #c084fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textDecoration: 'none',
      }}>SS</Link>

      {/* Desktop Nav - pill style */}
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
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              padding: '8px 18px',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              background: location.pathname === link.path
                ? 'linear-gradient(135deg, #f472b6, #c084fc)'
                : 'transparent',
              color: location.pathname === link.path ? 'white' : '#a1a1aa',
            }}
          >
            {link.name}
          </Link>
        ))}
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
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                color: location.pathname === link.path ? '#c084fc' : '#a1a1aa',
                background: location.pathname === link.path ? 'rgba(192,132,252,0.08)' : 'transparent',
              }}
            >
              {link.name}
            </Link>
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
