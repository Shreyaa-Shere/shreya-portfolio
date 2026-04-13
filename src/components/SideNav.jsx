import { useState } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'home',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact',    label: 'Contact'    },
];

export default function SideNav({ activeSection }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      className="hidden-mobile"
      style={{
        position: 'fixed',
        right: '28px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {SECTIONS.map((section, i) => {
        const isActive  = section.id === activeSection;
        const isHovered = section.id === hoveredId;

        return (
          <div
            key={section.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Dot row (label + dot) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                padding: '4px 0',
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {/* Label — slides in from the right, hidden unless active/hovered */}
              <motion.span
                animate={{
                  opacity: isActive || isHovered ? 1 : 0,
                  x: isActive || isHovered ? 0 : 6,
                }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                style={{
                  fontSize: '0.68rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#f472b6' : '#a1a1aa',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {section.label}
              </motion.span>

              {/* Dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.4 : isHovered ? 1.1 : 1,
                  opacity: isActive ? 1 : isHovered ? 0.75 : 0.35,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  background: isActive
                    ? 'linear-gradient(135deg, #f472b6, #c084fc)'
                    : 'rgba(255,255,255,0.7)',
                  boxShadow: isActive
                    ? '0 0 10px rgba(244,114,182,0.65), 0 0 4px rgba(192,132,252,0.5)'
                    : 'none',
                }}
              />
            </div>

            {/* Connector line between dots */}
            {i < SECTIONS.length - 1 && (
              <div
                style={{
                  width: '1px',
                  height: '18px',
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
