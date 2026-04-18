import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Thanks line */}
      <div style={{ textAlign: 'center', padding: '20px 24px 4px' }}>
        <p style={{ color: '#3f3f46', fontSize: '0.75rem', fontFamily: 'monospace' }}>
          {'// thanks for scrolling this far :)'}
        </p>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: '16px 24px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <p style={{ color: '#52525b', fontSize: '0.8rem' }}>
          &copy; 2026 {personalInfo.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { icon: Linkedin, href: personalInfo.linkedinUrl },
            { icon: Github, href: personalInfo.githubUrl },
            { icon: Mail, href: `mailto:${personalInfo.email}` },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noreferrer" style={{
              color: '#52525b', transition: 'color 0.2s ease',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#f472b6'}
            onMouseOut={e => e.currentTarget.style.color = '#52525b'}
            >
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
