import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Code2, Briefcase, FolderOpen, Star, Mail, ArrowRight } from 'lucide-react';

const pages = [
  { name: 'Home',       path: '/',           icon: Home,       desc: 'Landing page'               },
  { name: 'About',      path: '/about',      icon: User,       desc: 'Who I am'                   },
  { name: 'Skills',     path: '/skills',     icon: Code2,      desc: 'Technical skills & tools'   },
  { name: 'Experience', path: '/experience', icon: Briefcase,  desc: 'Work history'                },
  { name: 'Projects',   path: '/projects',   icon: FolderOpen, desc: "What I've built"             },
  { name: 'Leadership', path: '/leadership', icon: Star,       desc: 'Leadership roles'            },
  { name: 'Contact',    path: '/contact',    icon: Mail,       desc: 'Get in touch'                },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery]           = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef  = useRef(null);
  const listRef   = useRef(null);
  const navigate  = useNavigate();

  const filtered = query.trim()
    ? pages.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase())
      )
    : pages;

  /* Reset on open */
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  /* Reset active index when results change */
  useEffect(() => { setActiveIndex(0); }, [query]);

  /* Scroll active item into view */
  useEffect(() => {
    const el = listRef.current?.children[activeIndex];
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  const go = useCallback((path) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  /* Keyboard navigation */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(i => (i + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(i => (i - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        if (filtered[activeIndex]) go(filtered[activeIndex].path);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, activeIndex, go, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 9998,
              background: 'rgba(6,6,12,0.72)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          />

          {/* ── Palette panel ── */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.94, y: -12 }}
            animate={{ opacity: 1, scale: 1,    y: 0   }}
            exit={{    opacity: 0, scale: 0.94, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: '18%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999,
              width: '100%',
              maxWidth: '560px',
              padding: '0 16px',
            }}
          >
            <div style={{
              background: 'rgba(12,12,20,0.97)',
              border: '1px solid rgba(192,132,252,0.18)',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: [
                '0 32px 96px rgba(0,0,0,0.7)',
                '0 0 0 1px rgba(192,132,252,0.08)',
                'inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 0 60px rgba(192,132,252,0.06)',
              ].join(', '),
            }}>

              {/* ── Search row ── */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <Search size={17} style={{ color: '#c084fc', flexShrink: 0 }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search pages..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fafafa',
                    fontSize: '1rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    caretColor: '#c084fc',
                  }}
                />
                <kbd style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '2px 8px',
                  fontSize: '0.72rem',
                  color: '#71717a',
                  fontFamily: 'monospace',
                  letterSpacing: '0.02em',
                }}>esc</kbd>
              </div>

              {/* ── Results list ── */}
              <div
                ref={listRef}
                style={{
                  padding: '8px',
                  maxHeight: '340px',
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                }}
              >
                {filtered.length === 0 ? (
                  <div style={{
                    padding: '28px',
                    textAlign: 'center',
                    color: '#71717a',
                    fontSize: '0.88rem',
                  }}>
                    No pages match &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filtered.map((page, i) => {
                    const Icon     = page.icon;
                    const isActive = i === activeIndex;
                    return (
                      <button
                        key={page.path}
                        onClick={() => go(page.path)}
                        onMouseEnter={() => setActiveIndex(i)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: 'none',
                          cursor: 'pointer',
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(244,114,182,0.08), rgba(192,132,252,0.12))'
                            : 'transparent',
                          boxShadow: isActive ? 'inset 0 0 0 1px rgba(192,132,252,0.18)' : 'none',
                          transition: 'all 0.12s ease',
                          textAlign: 'left',
                        }}
                      >
                        {/* Icon box */}
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '9px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(244,114,182,0.18), rgba(192,132,252,0.22))'
                            : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${isActive ? 'rgba(192,132,252,0.35)' : 'rgba(255,255,255,0.07)'}`,
                          transition: 'all 0.15s ease',
                        }}>
                          <Icon
                            size={16}
                            style={{
                              color: isActive ? '#d8b4fe' : '#71717a',
                              transition: 'color 0.15s ease',
                            }}
                          />
                        </div>

                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            color: isActive ? '#fafafa' : '#d4d4d8',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'color 0.12s ease',
                          }}>
                            {page.name}
                          </div>
                          <div style={{
                            color: isActive ? '#a1a1aa' : '#52525b',
                            fontSize: '0.76rem',
                            marginTop: '1px',
                            transition: 'color 0.12s ease',
                          }}>
                            {page.desc}
                          </div>
                        </div>

                        {/* Arrow indicator */}
                        <motion.div
                          initial={false}
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 4 }}
                          transition={{ duration: 0.12 }}
                        >
                          <ArrowRight size={14} style={{ color: '#c084fc' }} />
                        </motion.div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* ── Footer hints ── */}
              <div style={{
                padding: '10px 20px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}>
                {[
                  { keys: ['↑', '↓'], label: 'navigate' },
                  { keys: ['↵'],       label: 'open'     },
                  { keys: ['esc'],     label: 'close'    },
                ].map(({ keys, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {keys.map(k => (
                      <kbd key={k} style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '4px',
                        padding: '1px 6px',
                        fontSize: '0.68rem',
                        color: '#a1a1aa',
                        fontFamily: 'monospace',
                      }}>{k}</kbd>
                    ))}
                    <span style={{ color: '#52525b', fontSize: '0.72rem' }}>{label}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
