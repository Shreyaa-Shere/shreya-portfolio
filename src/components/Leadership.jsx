import { motion } from 'framer-motion';
import { Users, Code2, Trophy, Heart } from 'lucide-react';
import { leadership, values } from '../data/portfolioData';

const iconMap = { Users, Code2, Trophy, Heart };

export default function Leadership() {
  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">Leadership & <span className="gradient-text">Community</span></h1>
        <p className="section-subtitle">Empowering others through mentorship and community building</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
        {leadership.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {Icon && <Icon size={22} color="white" />}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>{item.title}</h3>
                  <div style={{ color: '#a855f7', fontWeight: 600, fontSize: '0.875rem', marginBottom: '4px' }}>{item.org}</div>
                  <div style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '12px' }}>{item.period}</div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '14px' }}>{item.description}</p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {item.highlights.map((h, j) => (
                      <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="values-grid">
          {values.map((val, i) => {
            const Icon = iconMap[val.icon];
            return (
              <div key={i} className="glass-card" style={{ padding: '28px', textAlign: 'center' }}>
                {Icon && <Icon size={28} color="#a855f7" style={{ margin: '0 auto 12px', display: 'block' }} />}
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>{val.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>{val.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
