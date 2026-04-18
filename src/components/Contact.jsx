import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FORMSPREE_ID = 'meevkarl';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="page-wrap" style={{ maxWidth: '1100px' }}>
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
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '24px' }}>Send a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['name', 'email'].map(field => (
              <div key={field}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '6px', textTransform: 'capitalize' }}>{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field === 'name' ? 'Your name' : 'your.email@example.com'}
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#fafafa',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(192,132,252,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '6px' }}>Message</label>
              <textarea
                placeholder="Tell me about your project or inquiry..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#fafafa',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s ease',
                  fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(192,132,252,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            {status === 'success' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '0.9rem', padding: '12px', background: 'rgba(74,222,128,0.08)', borderRadius: '10px', border: '1px solid rgba(74,222,128,0.2)' }}>
                <CheckCircle size={16} /> Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontSize: '0.9rem', padding: '12px', background: 'rgba(248,113,113,0.08)', borderRadius: '10px', border: '1px solid rgba(248,113,113,0.2)' }}>
                <AlertCircle size={16} /> Something went wrong. Please try again or email directly.
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
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
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fafafa', marginBottom: '24px' }}>Contact Information</h2>
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
                  background: 'linear-gradient(135deg, #f472b6, #c084fc)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <item.icon size={18} color="white" />
                </div>
                <div>
                  <div style={{ color: '#71717a', fontSize: '0.75rem' }}>{item.label}</div>
                  <div style={{ color: '#e9d5ff', fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Open to work */}
          <div style={{
            padding: '24px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fafafa', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 8, height: 8, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} />
              Open to Opportunities
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.6 }}>
              I&apos;m currently seeking full-time opportunities in AI Engineering, Machine Learning, and Software Development. Let&apos;s connect and explore how we can create impact together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
