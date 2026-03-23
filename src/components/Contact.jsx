import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${form.name}&body=${form.message}`;
  };

  return (
    <section className="page-wrap" style={{ maxWidth: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
        <p className="section-subtitle">Let&apos;s discuss how we can work together</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="contact-grid">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '36px' }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '24px' }}>Send a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['name', 'email'].map(field => (
              <div key={field}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', textTransform: 'capitalize' }}>{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field === 'name' ? 'Your name' : 'your.email@example.com'}
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(139,92,246,0.05)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(139,92,246,0.2)'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Message</label>
              <textarea
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                style={{
                  width: '100%',
                  background: 'rgba(139,92,246,0.05)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#f8fafc',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(139,92,246,0.2)'}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
              <Send size={16} /> Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div className="glass-card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '24px' }}>Contact Information</h2>
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: Linkedin, label: 'LinkedIn', value: personalInfo.linkedin, href: personalInfo.linkedinUrl },
              { icon: Github, label: 'GitHub', value: personalInfo.github, href: personalInfo.githubUrl },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{
                  width: '40px', height: '40px',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <item.icon size={18} color="white" />
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{item.label}</div>
                  <div style={{ color: '#c4b5fd', fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Open to work */}
          <div style={{
            padding: '24px',
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '16px',
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
              Open to Opportunities
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
              I&apos;m currently seeking full-time opportunities in AI Engineering, Machine Learning, and Software Development. Let&apos;s connect and explore how we can create impact together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
