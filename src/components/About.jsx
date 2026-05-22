import { motion } from 'framer-motion';
import { Server, Code2, GitMerge, GraduationCap } from 'lucide-react';
import { personalInfo, education, expertise } from '../data/portfolioData';

const iconMap = { Server, Code2, GitMerge };

export default function About() {
  return (
    <section className="page-wrap" style={{ paddingTop: '72px' }}>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '720px', margin: '0 auto 64px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fafafa', marginBottom: '18px' }}>
          Hi, I&apos;m {personalInfo.name}
        </h2>
        <p style={{ color: '#a1a1aa', lineHeight: 1.85, marginBottom: '18px', fontSize: '1rem' }}>{personalInfo.bioLong}</p>
        <p style={{ color: '#a1a1aa', lineHeight: 1.85, fontSize: '1rem' }}>{personalInfo.bioLong2}</p>
      </motion.div>

      {/* Photo Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '64px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'end' }}>
          {[
            { src: '/grad-1.jpg', rotate: '-2deg', translateY: '0px', pos: 'center 30%' },
            { src: '/grad-3.jpg', rotate: '0deg',  translateY: '-20px', pos: 'center 20%' },
            { src: '/grad-2.jpg', rotate: '2deg',  translateY: '0px', pos: 'center 20%' },
          ].map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.03, rotate: '0deg', zIndex: 10 }}
              style={{
                transform: `rotate(${photo.rotate}) translateY(${photo.translateY})`,
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
                cursor: 'default',
              }}
            >
              <div style={{
                position: 'absolute', inset: '-2px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #f472b6, #c084fc, #818cf8)',
                zIndex: 0,
              }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: '14px', overflow: 'hidden', margin: '2px' }}>
                <img
                  src={photo.src}
                  alt="Graduation photo"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    objectPosition: photo.pos,
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '60px',
                  background: 'linear-gradient(to top, rgba(9,9,15,0.5) 0%, transparent 100%)',
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
