import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'fixed',
        top: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139,92,246,0.1)',
            border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: '50px',
            padding: '8px 18px',
            marginBottom: '24px',
            fontSize: '0.875rem',
            color: '#c4b5fd',
          }}
        >
          <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
          Open to opportunities · {personalInfo.tagline}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '8px' }}>Hi There, I&apos;m</p>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #c4b5fd 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {personalInfo.name}
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 600,
            color: '#a855f7',
            marginBottom: '24px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {personalInfo.role}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '12px',
          }}
        >
          {personalInfo.bio1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '40px',
          }}
        >
          {personalInfo.bio2}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '48px' }}
        >
          <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Hire Me <ArrowRight size={16} />
          </Link>
          <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={16} /> Resume
          </a>
          <div style={{ display: 'flex', gap: '12px', marginLeft: '8px' }}>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" style={{
              color: '#94a3b8',
              transition: 'color 0.2s ease',
              display: 'flex',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#a855f7'}
            onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
            >
              <Linkedin size={22} />
            </a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" style={{
              color: '#94a3b8',
              transition: 'color 0.2s ease',
              display: 'flex',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#a855f7'}
            onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#a855f7' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
