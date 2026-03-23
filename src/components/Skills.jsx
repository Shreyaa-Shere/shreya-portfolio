import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">Technical <span className="gradient-text">Skills</span></h1>
        <p className="section-subtitle">Technologies and tools I work with to build innovative solutions</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#f8fafc',
              marginBottom: '20px',
              paddingLeft: '16px',
              borderLeft: '3px solid #8b5cf6',
            }}>{group.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.items.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginTop: '48px', fontStyle: 'italic' }}
      >
        Continuously learning and adapting to emerging technologies in AI and software engineering
      </motion.p>
    </section>
  );
}
