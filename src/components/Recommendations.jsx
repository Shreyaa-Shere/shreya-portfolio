import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';
import { recommendations } from '../data/portfolioData';

function Initials({ name }) {
  const parts = name.trim().split(' ');
  const init = parts.length >= 2
    ? parts[0][0] + parts[parts.length - 1][0]
    : parts[0][0];
  return (
    <div style={{
      width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #f472b6, #c084fc)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1.1rem', fontWeight: 700, color: 'white',
    }}>
      {init.toUpperCase()}
    </div>
  );
}

export default function Recommendations() {
  return (
    <section className="page-wrap" style={{ maxWidth: '860px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">
          What People <span className="gradient-text">Say</span>
        </h1>
        <p className="section-subtitle">Recommendations from colleagues I've had the pleasure of working with</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            className="glass-card"
            style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
          >
            {/* Background quote watermark */}
            <div style={{
              position: 'absolute', top: '20px', right: '28px',
              opacity: 0.04, pointerEvents: 'none',
            }}>
              <Quote size={96} />
            </div>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '28px' }}>
              <Initials name={rec.name} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fafafa' }}>{rec.name}</h3>
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#818cf8', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.color = '#f472b6'}
                    onMouseOut={e => e.currentTarget.style.color = '#818cf8'}
                    title="View on LinkedIn"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
                <p style={{ color: '#71717a', fontSize: '0.78rem', lineHeight: 1.5, margin: '4px 0', maxWidth: '560px' }}>
                  {rec.title}
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>{rec.date}</span>
                  <span style={{ fontSize: '0.75rem', color: '#c084fc', fontStyle: 'italic' }}>{rec.relationship}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

            {/* Quote accent bar + paragraphs */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{
                width: '3px', borderRadius: '2px', flexShrink: 0,
                background: 'linear-gradient(to bottom, #f472b6, #c084fc)',
                alignSelf: 'stretch',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {rec.paragraphs.map((para, j) => (
                  <p key={j} style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.75 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LinkedIn attribution */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: 'center', color: '#52525b', fontSize: '0.8rem', marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
      >
        <Linkedin size={13} /> Recommendations received on LinkedIn
      </motion.p>
    </section>
  );
}
