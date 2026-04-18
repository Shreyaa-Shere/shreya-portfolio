import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { recommendations } from '../data/portfolioData';

function Initials({ name }) {
  const parts = name.trim().split(' ');
  const init = parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return (
    <div style={{
      width: '50px', height: '50px', borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #f472b6, #c084fc)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1rem', fontWeight: 700, color: 'white',
    }}>
      {init.toUpperCase()}
    </div>
  );
}

function RecCard({ rec, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.18 }}
      style={{ height: '100%' }}
    >
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4 + index * 0.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ height: '100%' }}
    >
      {/* Framer Motion doesn't support CSS animation keyframes on same element,
          so we use a wrapper div for the animated border */}
      <div style={{
        height: '100%',
        padding: '2px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #f472b6, #c084fc, #818cf8, #f472b6)',
        backgroundSize: '300% 300%',
        animation: `rec-border-shift ${5 + index}s ease infinite`,
        boxShadow: '0 8px 40px rgba(244,114,182,0.15)',
      }}>
        <div style={{
          height: '100%',
          background: '#0c0c18',
          borderRadius: '18px',
          padding: '32px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Quote watermark */}
          <div style={{
            position: 'absolute', top: '18px', right: '24px',
            opacity: 0.05, pointerEvents: 'none', color: '#f472b6',
          }}>
            <Quote size={80} />
          </div>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '22px' }}>
            <Initials name={rec.name} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa' }}>{rec.name}</h3>
              <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '0.72rem', color: '#71717a' }}>{rec.date}</span>
                <span style={{ fontSize: '0.72rem', color: '#c084fc', fontStyle: 'italic' }}>{rec.relationship}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '20px' }} />

          {/* Quote accent bar + paragraphs */}
          <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
            <div style={{
              width: '3px', borderRadius: '2px', flexShrink: 0,
              background: 'linear-gradient(to bottom, #f472b6, #c084fc)',
              alignSelf: 'stretch',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {rec.paragraphs.map((para, j) => (
                <p key={j} style={{ color: '#a1a1aa', fontSize: '0.83rem', lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <section className="page-wrap" style={{ maxWidth: '1240px' }}>
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

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'stretch' }}
        className="recommendations-grid"
      >
        {recommendations.map((rec, i) => (
          <RecCard key={i} rec={rec} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: 'center', color: '#52525b', fontSize: '0.78rem', marginTop: '48px', fontStyle: 'italic' }}
      >
        Recommendations received on LinkedIn
      </motion.p>
    </section>
  );
}
