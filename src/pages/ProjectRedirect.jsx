import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';

export default function ProjectRedirect() {
  const { slug } = useParams();
  const proj = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (proj?.projectUrl) {
      window.location.replace(proj.projectUrl);
    }
  }, [proj]);

  if (!proj?.projectUrl) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#09090f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#a1a1aa',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '3px solid rgba(192,132,252,0.2)',
        borderTopColor: '#c084fc',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ fontSize: '1rem', color: '#d4d4d8' }}>
        Opening <span style={{ color: '#c084fc', fontWeight: 600 }}>{proj.title}</span>…
      </p>
      <a
        href={proj.projectUrl}
        style={{ color: '#f472b6', fontSize: '0.85rem', textDecoration: 'underline' }}
      >
        Click here if not redirected
      </a>
    </div>
  );
}
