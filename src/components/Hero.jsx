import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 48px',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '1300px',
        margin: '0 auto',
      }}
    >
      {/* Aurora background blobs */}
      <div style={{
        position: 'fixed', top: '0%', right: '0%',
        width: '700px', height: '700px',
        background: 'radial-gradient(ellipse, rgba(244,114,182,0.13) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', bottom: '0%', left: '0%',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(129,140,248,0.10) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', top: '40%', left: '30%',
        width: '500px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(192,132,252,0.07) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px', padding: '7px 16px',
              marginBottom: '20px', fontSize: '0.85rem', color: '#d4d4d8',
            }}
          >
            <span style={{ width: 8, height: 8, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', display: 'inline-block', flexShrink: 0 }} />
            Open to opportunities · {personalInfo.tagline}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{ color: '#a1a1aa', fontSize: '1rem', marginBottom: '6px' }}>Hi There, I&apos;m</p>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              fontWeight: 900, lineHeight: 1.05, marginBottom: '12px',
              background: 'linear-gradient(135deg, #fafafa 0%, #fda4af 40%, #c084fc 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {personalInfo.name}
            </h1>
            <h2 style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', fontWeight: 600,
              color: '#e879f9', marginBottom: '20px',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              {personalInfo.role}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: '#a1a1aa', fontSize: '0.975rem', lineHeight: 1.7,
              maxWidth: '520px', marginBottom: '28px',
            }}
          >
            {personalInfo.bio1}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-text-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '36px' }}
          >
            <Link to="/contact" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Hire Me <ArrowRight size={15} />
            </Link>
            <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={15} /> Resume
            </a>
            <div style={{ display: 'flex', gap: '12px', marginLeft: '4px' }}>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer"
                style={{ color: '#a1a1aa', transition: 'color 0.2s ease', display: 'flex' }}
                onMouseOver={e => e.currentTarget.style.color = '#f472b6'}
                onMouseOut={e => e.currentTarget.style.color = '#a1a1aa'}
              ><Linkedin size={21} /></a>
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer"
                style={{ color: '#a1a1aa', transition: 'color 0.2s ease', display: 'flex' }}
                onMouseOver={e => e.currentTarget.style.color = '#f472b6'}
                onMouseOut={e => e.currentTarget.style.color = '#a1a1aa'}
              ><Github size={21} /></a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f472b6' }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          className="hero-photo-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative', flexShrink: 0 }}
        >
          {/* Glow ring */}
          <div style={{
            position: 'absolute', inset: '-3px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #f472b6, #c084fc, #818cf8)',
            zIndex: 0, filter: 'blur(1px)',
          }} />
          <div style={{
            position: 'absolute', inset: '-20px',
            borderRadius: '40px',
            background: 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, transparent 70%)',
            zIndex: 0,
          }} />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <img
              src="/shreya.jpg"
              alt="Shreya Shere"
              className="hero-photo"
            />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
              background: 'linear-gradient(to top, rgba(9,9,15,0.7) 0%, transparent 100%)',
              borderRadius: '0 0 24px 24px', zIndex: 2,
            }} />
            {/* Open to work badge */}
            <div style={{
              position: 'absolute', bottom: '16px', left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px', padding: '7px 16px',
              fontSize: '0.8rem', color: '#d4d4d8',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ width: 7, height: 7, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
              Open to work
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
