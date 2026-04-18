import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const CATEGORY_COLORS = {
  'Languages':           { border: 'rgba(244,114,182,0.5)', bg: 'rgba(244,114,182,0.08)', text: '#f9a8d4', glow: 'rgba(244,114,182,0.3)'  },
  'Frontend':            { border: 'rgba(192,132,252,0.5)', bg: 'rgba(192,132,252,0.08)', text: '#d8b4fe', glow: 'rgba(192,132,252,0.3)'  },
  'Backend':             { border: 'rgba(129,140,248,0.5)', bg: 'rgba(129,140,248,0.08)', text: '#a5b4fc', glow: 'rgba(129,140,248,0.3)'  },
  'Cloud & Platforms':   { border: 'rgba(45,212,191,0.5)',  bg: 'rgba(45,212,191,0.08)',  text: '#5eead4', glow: 'rgba(45,212,191,0.3)'   },
  'Databases':           { border: 'rgba(251,191,36,0.5)',  bg: 'rgba(251,191,36,0.08)',  text: '#fcd34d', glow: 'rgba(251,191,36,0.3)'   },
  'Streaming & Messaging':{ border: 'rgba(249,115,22,0.5)', bg: 'rgba(249,115,22,0.08)',  text: '#fdba74', glow: 'rgba(249,115,22,0.3)'   },
  'DevOps & Tools':      { border: 'rgba(148,163,184,0.5)', bg: 'rgba(148,163,184,0.08)', text: '#cbd5e1', glow: 'rgba(148,163,184,0.3)'  },
  'Testing':             { border: 'rgba(52,211,153,0.5)',  bg: 'rgba(52,211,153,0.08)',  text: '#6ee7b7', glow: 'rgba(52,211,153,0.3)'   },
  'AI & Generative AI':  { border: 'rgba(251,146,60,0.5)',  bg: 'rgba(251,146,60,0.08)',  text: '#fed7aa', glow: 'rgba(251,146,60,0.3)'   },
};

const CORE_SKILLS = new Set([
  'Java', 'TypeScript', 'JavaScript', 'Python',
  'React.js', 'Angular (10+)', 'Next.js',
  'Spring Boot', 'Node.js',
  'AWS (CloudFront, S3, Lambda, API Gateway, Amplify)',
  'Apache Kafka', 'Docker', 'Kubernetes',
  'PostgreSQL', 'MongoDB',
  'OpenAI APIs', 'RAG Pipelines',
]);

function SkillPill({ skill, category, index }) {
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[category] || CATEGORY_COLORS['Languages'];
  const isCore = CORE_SKILLS.has(skill);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.018 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: isCore ? '7px 16px' : '5px 12px',
        borderRadius: '50px',
        fontSize: isCore ? '0.82rem' : '0.72rem',
        fontWeight: isCore ? 600 : 400,
        border: `1px solid ${hovered ? color.border.replace('0.5', '0.85') : color.border}`,
        background: hovered ? color.bg.replace('0.08', '0.18') : color.bg,
        color: color.text,
        cursor: 'default',
        userSelect: 'none',
        transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 4px 16px ${color.glow}` : 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  const allSkills = skills.flatMap(group =>
    group.items.map(item => ({ skill: item, category: group.category }))
  );

  return (
    <section className="page-wrap" style={{ maxWidth: '960px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '56px' }}
      >
        <h1 className="section-title">Technical <span className="gradient-text">Skills</span></h1>
        <p className="section-subtitle">Technologies and tools I work with to build innovative solutions</p>
      </motion.div>

      {/* Tag cloud */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {allSkills.map(({ skill, category }, i) => (
          <SkillPill key={i} skill={skill} category={category} index={i} />
        ))}
      </div>

      {/* Color legend */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: '52px',
          display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center',
        }}
      >
        {skills.map((group, i) => {
          const color = CATEGORY_COLORS[group.category] || CATEGORY_COLORS['Languages'];
          return (
            <span key={i} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontSize: '0.7rem', color: '#71717a',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: color.text, flexShrink: 0,
                boxShadow: `0 0 6px ${color.glow}`,
              }} />
              {group.category}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
}
