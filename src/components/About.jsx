import { motion } from 'framer-motion';
import { Brain, Cloud, Code2, GraduationCap } from 'lucide-react';
import { personalInfo, education, expertise } from '../data/portfolioData';

const iconMap = { Brain, Cloud, Code2 };

export default function About() {
  return (
    <section className="page-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">About <span className="gradient-text">Me</span></h1>
        <p className="section-subtitle">Get to know who I am and what I do</p>
      </motion.div>

      {/* Bio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '64px', alignItems: 'center' }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f472b6, #c084fc)',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 800,
              color: 'white',
            }}>SS</div>
            <div style={{ color: '#c084fc', fontSize: '0.875rem', fontWeight: 600 }}>AI Engineer + Developer</div>
            <div style={{ color: '#71717a', fontSize: '0.8rem', marginTop: '4px' }}>Arizona State University</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fafafa', marginBottom: '16px' }}>
            Hi, I&apos;m {personalInfo.name}
          </h2>
          <p style={{ color: '#a1a1aa', lineHeight: 1.8, marginBottom: '16px' }}>{personalInfo.bioLong}</p>
          <p style={{ color: '#a1a1aa', lineHeight: 1.8 }}>{personalInfo.bioLong2}</p>
        </motion.div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '64px' }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fafafa', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <GraduationCap size={24} color="#c084fc" /> Education
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="edu-grid">
          {education.map((edu, i) => (
            <div key={i} className="glass-card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fafafa', marginBottom: '8px' }}>{edu.degree}</h3>
              <div style={{ color: '#e879f9', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>{edu.school}</div>
              <div style={{ color: '#71717a', fontSize: '0.85rem', marginBottom: '4px' }}>{edu.period}</div>
              <div style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>GPA: <span style={{ color: '#c084fc', fontWeight: 600 }}>{edu.gpa}</span></div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expertise */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fafafa', marginBottom: '24px', textAlign: 'center' }}>Areas of Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="expertise-grid">
          {expertise.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={i} className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{
                  width: '56px', height: '56px',
                  background: 'linear-gradient(135deg, #f472b6, #c084fc)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  {Icon && <Icon size={24} color="white" />}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#71717a', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
