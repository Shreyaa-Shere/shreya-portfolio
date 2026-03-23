import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }} className="projects-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gridColumn: (projects.length % 2 !== 0 && i === projects.length - 1) ? '1 / -1' : undefined,
              maxWidth: (projects.length % 2 !== 0 && i === projects.length - 1) ? '600px' : undefined,
              margin: (projects.length % 2 !== 0 && i === projects.length - 1) ? '0 auto' : undefined,
              width: (projects.length % 2 !== 0 && i === projects.length - 1) ? '100%' : undefined,
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '6px' }}>{proj.title}</h3>
              <div style={{ color: '#e879f9', fontWeight: 600, fontSize: '0.875rem', marginBottom: '16px' }}>{proj.subtitle}</div>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>{proj.description}</p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {proj.tags.map((tag, j) => (
                  <span key={j} style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#d4d4d8',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>

              {/* Highlights */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px', listStyle: 'none', padding: 0 }}>
                {proj.highlights.map((h, j) => (
                  <li key={j} style={{ color: '#a1a1aa', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f472b6', display: 'inline-block', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub link */}
            <a
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                color: '#a1a1aa',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#f472b6'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#a1a1aa'; }}
            >
              <Github size={16} /> Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
