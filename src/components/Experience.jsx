import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="page-wrap" style={{ maxWidth: '900px' }}>
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

      <div style={{ position: 'relative', paddingLeft: '48px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '12px',
          bottom: '12px',
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
            style={{ position: 'relative', marginBottom: '40px' }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-36px',
              top: '20px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f472b6, #c084fc)',
              boxShadow: '0 0 12px rgba(244,114,182,0.4)',
            }} />

            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #f472b6, #c084fc)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Briefcase size={22} color="white" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fafafa', marginBottom: '4px' }}>{job.title}</h3>
                  <div style={{ color: '#e879f9', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>{job.company}</div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#71717a', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {job.period}
                    </span>
                    <span style={{ color: '#71717a', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                {job.bullets.map((bullet, j) => (
                  <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} color="#f472b6" style={{ marginTop: '2px', flexShrink: 0 }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
