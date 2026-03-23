import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
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
      background: scrolled ? 'rgba(7,7,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(139,92,246,0.1)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <Link to="/" style={{
        fontSize: '1.25rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
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
          background: 'rgba(139,92,246,0.08)',
          border: '1px solid rgba(139,92,246,0.15)',
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
                ? 'linear-gradient(135deg, #7c3aed, #a855f7)'
                : 'transparent',
              color: location.pathname === link.path ? 'white' : '#94a3b8',
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ background: 'none', border: 'none', color: '#a855f7', cursor: 'pointer' }}
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
          background: 'rgba(7,7,15,0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139,92,246,0.15)',
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
                color: location.pathname === link.path ? '#a855f7' : '#94a3b8',
                background: location.pathname === link.path ? 'rgba(139,92,246,0.1)' : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
