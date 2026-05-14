import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, ExternalLink, Play, Map } from 'lucide-react';
import { projects } from '../data/portfolioData';

const CARD_GRADIENTS = [
  { bg: 'linear-gradient(135deg, rgba(244,114,182,0.55) 0%, rgba(192,132,252,0.45) 100%)', glow: 'rgba(244,114,182,0.25)' },
  { bg: 'linear-gradient(135deg, rgba(99,102,241,0.55) 0%, rgba(168,85,247,0.45) 100%)',   glow: 'rgba(99,102,241,0.25)'  },
  { bg: 'linear-gradient(135deg, rgba(20,184,166,0.50) 0%, rgba(59,130,246,0.45) 100%)',   glow: 'rgba(20,184,166,0.22)'  },
];

function TagList({ tags }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
      {tags.slice(0, 4).map((tag, j) => (
        <span key={j} style={{
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          color: '#d4d4d8', padding: '2px 9px', borderRadius: '50px', fontSize: '0.68rem',
        }}>{tag}</span>
      ))}
    </div>
  );
}

function ProjectCard({ proj, index }) {
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
        height: '580px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 0 40px ${grad.glow}, 0 8px 32px rgba(0,0,0,0.4)`
          : '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
      }}
    >
      {proj.image ? (
        <>
          {/* Image zone */}
          <div style={{
            flex: '0 0 400px',
            position: 'relative',
            background: '#0a0a14',
            overflow: 'hidden',
          }}>
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '18px',
                filter: 'brightness(0.78) saturate(0.9)',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
                transition: 'transform 0.38s ease',
              }}
            />
            {/* bottom fade into info zone */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '48px',
              background: 'linear-gradient(to bottom, transparent, #0d0d18)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Info zone */}
          <div style={{
            flex: 1,
            background: '#0d0d18',
            padding: '14px 20px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', marginBottom: '3px' }}>{proj.title}</h3>
              <p style={{ color: '#e879f9', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{proj.subtitle}</p>
            </div>
            <TagList tags={proj.tags} />
          </div>
        </>
      ) : (
        <>
          {/* Gradient background */}
          <div style={{ position: 'absolute', inset: 0, background: '#0d0d18', zIndex: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: grad.bg, zIndex: 1 }} />

          {/* Watermark */}
          <div style={{
            position: 'absolute', bottom: '100px', left: '16px', right: '16px', zIndex: 2,
            fontSize: '2rem', fontWeight: 900, lineHeight: 1.15,
            color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.02em',
            userSelect: 'none', pointerEvents: 'none',
            transition: 'opacity 0.3s ease', opacity: hovered ? 0 : 1,
            wordBreak: 'break-word',
          }}>{proj.title}</div>

          {/* Resting info */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
            padding: '16px 20px',
            background: 'linear-gradient(to top, rgba(9,9,15,0.97) 0%, rgba(9,9,15,0.85) 70%, transparent 100%)',
            transition: 'opacity 0.25s ease', opacity: hovered ? 0 : 1,
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', marginBottom: '3px' }}>{proj.title}</h3>
            <p style={{ color: '#e879f9', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '10px' }}>{proj.subtitle}</p>
            <TagList tags={proj.tags} />
          </div>
        </>
      )}

      {/* Hover overlay — covers all cards */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: 'rgba(9,9,15,0.93)', backdropFilter: 'blur(12px)',
        padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', marginBottom: '2px' }}>{proj.title}</h3>
          <p style={{ color: '#e879f9', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{proj.subtitle}</p>
        </div>

        <p style={{ color: '#a1a1aa', fontSize: '0.82rem', lineHeight: 1.6 }}>{proj.description}</p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none', padding: 0 }}>
          {proj.highlights.map((h, j) => (
            <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '7px', color: '#c4b5fd', fontSize: '0.78rem', fontWeight: 500 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#f472b6', flexShrink: 0, display: 'inline-block' }} />
              {h}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '7px', marginTop: 'auto', flexWrap: 'wrap' }}>
          <a href={proj.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50px', padding: '6px 13px', color: '#fafafa',
              textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s ease',
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgba(244,114,182,0.15)'; e.currentTarget.style.borderColor = 'rgba(244,114,182,0.4)'; e.currentTarget.style.color = '#f472b6'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fafafa'; }}
          >
            <Github size={12} /> GitHub <ArrowUpRight size={11} />
          </a>
          {proj.demoUrl && (
            <a href={proj.demoUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px', padding: '6px 13px', color: '#fafafa',
                textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(244,114,182,0.15)'; e.currentTarget.style.borderColor = 'rgba(244,114,182,0.4)'; e.currentTarget.style.color = '#f472b6'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fafafa'; }}
            >
              <Play size={12} /> Demo Video <ArrowUpRight size={11} />
            </a>
          )}
          {proj.mindMapUrl && (
            <a href={proj.mindMapUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50px', padding: '6px 13px', color: '#fafafa',
                textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(192,132,252,0.15)'; e.currentTarget.style.borderColor = 'rgba(192,132,252,0.4)'; e.currentTarget.style.color = '#c084fc'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fafafa'; }}
            >
              <Map size={12} /> Project Mind Map <ArrowUpRight size={11} />
            </a>
          )}
          {proj.liveUrl && (
            <a href={proj.liveUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                background: 'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(192,132,252,0.2))',
                border: '1px solid rgba(244,114,182,0.35)',
                borderRadius: '50px', padding: '6px 13px', color: '#f9a8d4',
                textDecoration: 'none', fontSize: '0.75rem', fontWeight: 600, transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(244,114,182,0.35), rgba(192,132,252,0.35))'; e.currentTarget.style.color = '#fafafa'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(244,114,182,0.2), rgba(192,132,252,0.2))'; e.currentTarget.style.color = '#f9a8d4'; }}
            >
              <ExternalLink size={12} /> Live Demo <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const cols = projects.length === 3 ? 3 : 2;

  return (
    <section className="page-wrap" style={{ maxWidth: '1500px' }}>
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

      <div
        style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '24px' }}
        className="projects-grid"
      >
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} index={i} />
        ))}
      </div>
    </section>
  );
}
