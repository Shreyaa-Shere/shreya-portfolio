import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const CARD_GRADIENTS = [
  { bg: 'linear-gradient(135deg, rgba(244,114,182,0.55) 0%, rgba(192,132,252,0.45) 100%)', glow: 'rgba(244,114,182,0.25)' },
  { bg: 'linear-gradient(135deg, rgba(99,102,241,0.55) 0%, rgba(168,85,247,0.45) 100%)',   glow: 'rgba(99,102,241,0.25)'  },
  { bg: 'linear-gradient(135deg, rgba(20,184,166,0.50) 0%, rgba(59,130,246,0.45) 100%)',   glow: 'rgba(20,184,166,0.22)'  },
];

function ProjectCard({ proj, index, isOdd }) {
  const [hovered, setHovered] = useState(false);
  const grad = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        height: '440px',
        cursor: 'pointer',
        gridColumn: isOdd ? '1 / -1' : undefined,
        maxWidth: isOdd ? '580px' : undefined,
        margin: isOdd ? '0 auto' : undefined,
        width: isOdd ? '100%' : undefined,
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 0 40px ${grad.glow}, 0 8px 32px rgba(0,0,0,0.4)` : '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
      }}
    >
      {/* Gradient background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: grad.bg,
        transition: 'opacity 0.35s ease',
        opacity: hovered ? 0.85 : 1,
      }} />

      {/* Dark base layer */}
      <div style={{ position: 'absolute', inset: 0, background: '#0d0d18', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: grad.bg, zIndex: 1 }} />

      {/* Watermark project name */}
      <div style={{
        position: 'absolute',
        bottom: '90px',
        right: '-10px',
        zIndex: 2,
        fontSize: 'clamp(3rem, 8vw, 5.5rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.07)',
        letterSpacing: '-0.03em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 0 : 1,
      }}>
        {proj.title}
      </div>

      {/* Bottom info bar (always visible) */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        zIndex: 3,
        padding: '20px 24px',
        background: 'linear-gradient(to top, rgba(9,9,15,0.97) 0%, rgba(9,9,15,0.85) 70%, transparent 100%)',
        transition: 'opacity 0.25s ease',
        opacity: hovered ? 0 : 1,
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fafafa', marginBottom: '4px' }}>
          {proj.title}
        </h3>
        <p style={{ color: '#e879f9', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
          {proj.subtitle}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {proj.tags.slice(0, 5).map((tag, j) => (
            <span key={j} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#d4d4d8',
              padding: '3px 10px',
              borderRadius: '50px',
              fontSize: '0.72rem',
              fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Hover overlay — slides up */}
      <div style={{
        position: 'absolute', inset: 0,
        zIndex: 4,
        background: 'rgba(9,9,15,0.92)',
        backdropFilter: 'blur(12px)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fafafa', marginBottom: '4px' }}>{proj.title}</h3>
              <p style={{ color: '#e879f9', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{proj.subtitle}</p>
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px',
                padding: '7px 14px',
                color: '#fafafa',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(244,114,182,0.15)'; e.currentTarget.style.borderColor = 'rgba(244,114,182,0.4)'; e.currentTarget.style.color = '#f472b6'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fafafa'; }}
            >
              <Github size={14} /> GitHub <ArrowUpRight size={12} />
            </a>
          </div>

          <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '16px' }}>
            {proj.description}
          </p>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', listStyle: 'none', padding: 0 }}>
            {proj.highlights.map((h, j) => (
              <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#c4b5fd', fontSize: '0.82rem', fontWeight: 500 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#f472b6', display: 'inline-block', flexShrink: 0 }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags at bottom of overlay */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
          {proj.tags.map((tag, j) => (
            <span key={j} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#71717a',
              padding: '3px 10px',
              borderRadius: '50px',
              fontSize: '0.72rem',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="page-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">Featured <span className="gradient-text">Projects</span></h1>
        <p className="section-subtitle">Real-world applications of AI and software engineering</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="projects-grid">
        {projects.map((proj, i) => {
          const isLastOdd = projects.length % 2 !== 0 && i === projects.length - 1;
          return <ProjectCard key={i} proj={proj} index={i} isOdd={isLastOdd} />;
        })}
      </div>
    </section>
  );
}
