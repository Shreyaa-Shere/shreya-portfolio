import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(139,92,246,0.1)',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
        &copy; 2026 {personalInfo.name}. All rights reserved.
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        {[
          { icon: Linkedin, href: personalInfo.linkedinUrl },
          { icon: Github, href: personalInfo.githubUrl },
          { icon: Mail, href: `mailto:${personalInfo.email}` },
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noreferrer" style={{
            color: '#64748b', transition: 'color 0.2s ease',
          }}
          onMouseOver={e => e.currentTarget.style.color = '#a855f7'}
          onMouseOut={e => e.currentTarget.style.color = '#64748b'}
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
