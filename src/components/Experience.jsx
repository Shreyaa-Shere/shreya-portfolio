import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="page-wrap" style={{ maxWidth: '1100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">Professional <span className="gradient-text">Experience</span></h1>
        <p className="section-subtitle">My journey in software engineering and development</p>
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '40px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '15px', top: '12px', bottom: '12px',
          width: '2px',
          background: 'linear-gradient(to bottom, #f472b6, rgba(244,114,182,0.05))',
        }} />

        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ position: 'relative', marginBottom: '32px' }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: '-33px', top: '24px',
              width: '12px', height: '12px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #f472b6, #c084fc)',
              boxShadow: '0 0 10px rgba(244,114,182,0.5)',
            }} />

            <div className="glass-card" style={{ padding: '28px 32px' }}>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fafafa', marginBottom: '3px' }}>{job.title}</h3>
                  <div style={{ color: '#e879f9', fontWeight: 600, fontSize: '0.875rem' }}>{job.company}</div>
                </div>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', flexShrink: 0 }}>
                  <span style={{ color: '#52525b', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {job.period}
                  </span>
                  <span style={{ color: '#52525b', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={12} /> {job.location}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              {job.bullets?.length > 0 && (
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                  {job.bullets.map((bullet, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6 }}>
                      <ArrowRight size={14} color="#f472b6" style={{ marginTop: '3px', flexShrink: 0 }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
