import { motion } from 'framer-motion';
import { Server, Code2, GitMerge, GraduationCap } from 'lucide-react';
import { personalInfo, education, expertise } from '../data/portfolioData';

const iconMap = { Server, Code2, GitMerge };

export default function About() {
  return (
    <section className="page-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        <h1 className="section-title">About <span className="gradient-text">Me</span></h1>
        <p className="section-subtitle">Get to know who I am and what I do</p>
      </motion.div>

      {/* Bio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', marginBottom: '64px', alignItems: 'center' }} className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative' }}
        >
          {/* Gradient border ring */}
          <div style={{
            position: 'absolute', inset: '-3px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, #f472b6, #c084fc, #818cf8)',
            zIndex: 0, filter: 'blur(1px)',
          }} />
          {/* Glow */}
          <div style={{
            position: 'absolute', inset: '-18px',
            borderRadius: '32px',
            background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)',
            zIndex: 0,
          }} />
          <div style={{ position: 'relative', zIndex: 1, borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src="/shreya-about.jpg"
              alt="Shreya Shere"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                objectPosition: 'center 58%',
                display: 'block',
              }}
            />
            {/* Bottom fade overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '80px',
              background: 'linear-gradient(to top, rgba(9,9,15,0.6) 0%, transparent 100%)',
            }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fafafa', marginBottom: '18px' }}>
            Hi, I&apos;m {personalInfo.name}
          </h2>
          <p style={{ color: '#a1a1aa', lineHeight: 1.85, marginBottom: '18px', fontSize: '1rem' }}>{personalInfo.bioLong}</p>
          <p style={{ color: '#a1a1aa', lineHeight: 1.85, fontSize: '1rem' }}>{personalInfo.bioLong2}</p>
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
