import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { recommendations } from '../data/portfolioData';

function Initials({ name }) {
  const parts = name.trim().split(' ');
  const init = parts.length >= 2 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return (
    <div style={{
      width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg, #f472b6, #c084fc)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '1rem', fontWeight: 700, color: 'white',
    }}>
      {init.toUpperCase()}
    </div>
  );
}

function RecCard({ rec, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        padding: '32px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(244,114,182,0.3)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? '0 0 32px rgba(244,114,182,0.12), 0 8px 32px rgba(0,0,0,0.4)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Quote watermark */}
      <div style={{
        position: 'absolute', top: '18px', right: '22px',
        opacity: hovered ? 0.07 : 0.035,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        color: '#f472b6',
      }}>
        <Quote size={80} />
      </div>

      {/* Subtle top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px',
        background: hovered
          ? 'linear-gradient(90deg, #f472b6, #c084fc)'
          : 'linear-gradient(90deg, rgba(244,114,182,0.3), rgba(192,132,252,0.3))',
        transition: 'background 0.3s ease',
        borderRadius: '18px 18px 0 0',
      }} />

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
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '20px' }} />

      {/* Quote accent + paragraphs */}
      <div style={{ display: 'flex', gap: '16px', flex: 1 }}>
        <div style={{
          width: '3px', borderRadius: '2px', flexShrink: 0,
          background: 'linear-gradient(to bottom, #f472b6, #c084fc)',
          alignSelf: 'stretch',
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {rec.paragraphs.map((para, j) => (
            <p key={j} style={{ color: '#a1a1aa', fontSize: '0.82rem', lineHeight: 1.75 }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Recommendations() {
  return (
    <section className="page-wrap" style={{ maxWidth: '1100px' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'stretch' }}
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
        style={{ textAlign: 'center', color: '#52525b', fontSize: '0.78rem', marginTop: '40px', fontStyle: 'italic' }}
      >
        Recommendations received on LinkedIn
      </motion.p>
    </section>
  );
}
