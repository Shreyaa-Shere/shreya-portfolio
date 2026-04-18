import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const VAR_NAMES = {
  'Languages':             'languages',
  'Frontend':              'frontend',
  'Backend':               'backend',
  'Cloud & Platforms':     'cloudPlatforms',
  'Databases':             'databases',
  'Streaming & Messaging': 'streamingMessaging',
  'DevOps & Tools':        'devopsTools',
  'Testing':               'testing',
  'AI & Generative AI':    'aiGenerativeAI',
};

const ITEMS_PER_ROW = 3;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function buildBlocks(groups, startLine = 1) {
  let lineNum = startLine;
  return groups.map((group, bi) => {
    const varName = VAR_NAMES[group.category] || group.category;
    const rows = chunk(group.items, ITEMS_PER_ROW);
    const commentLine = lineNum++;
    const openLine = lineNum++;
    const itemLines = rows.map(() => lineNum++);
    const closeLine = lineNum++;
    const blankLine = lineNum++;
    return { group, varName, rows, commentLine, openLine, itemLines, closeLine, blankLine };
  });
}

function CodeColumn({ blocks, active, hovered, onSelect, onHover }) {
  const codeLine = (num, content, isActive, isHov) => (
    <div key={num} style={{
      display: 'flex',
      minHeight: '1.65em',
      background: isActive ? 'rgba(244,114,182,0.09)' : isHov ? 'rgba(255,255,255,0.025)' : 'transparent',
      borderLeft: `2px solid ${isActive ? '#f472b6' : 'transparent'}`,
      transition: 'background 0.2s, border-color 0.2s',
      paddingRight: '12px',
    }}>
      <span style={{
        color: '#2a2a38', fontSize: '0.68rem', fontFamily: 'monospace',
        minWidth: '36px', textAlign: 'right', paddingRight: '14px',
        lineHeight: '1.65', userSelect: 'none', flexShrink: 0,
      }}>{num}</span>
      <span style={{
        fontFamily: '"JetBrains Mono","Fira Code","Courier New",monospace',
        fontSize: '0.76rem', lineHeight: '1.65',
      }}>{content}</span>
    </div>
  );

  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      {blocks.map(({ group, varName, rows, commentLine, openLine, itemLines, closeLine, blankLine }, bi) => {
        const isActive = active === group.category;
        const isHov = hovered === group.category;
        const isDimmed = active !== null && !isActive;

        return (
          <motion.div
            key={bi}
            animate={{ opacity: isDimmed ? 0.18 : 1 }}
            transition={{ duration: 0.22 }}
            onClick={() => onSelect(group.category)}
            onMouseEnter={() => onHover(group.category)}
            onMouseLeave={() => onHover(null)}
            style={{ cursor: 'pointer' }}
          >
            {codeLine(commentLine,
              <span style={{ color: '#3d5a4a', fontStyle: 'italic' }}>{'// '}{group.category}</span>,
              isActive, isHov
            )}
            {codeLine(openLine,
              <><span style={{ color: '#c084fc' }}>const </span><span style={{ color: '#7dd3fc' }}>{varName}</span><span style={{ color: '#94a3b8' }}> = [</span></>,
              isActive, isHov
            )}
            {rows.map((row, ri) =>
              codeLine(itemLines[ri],
                <span style={{ paddingLeft: '18px' }}>
                  {row.map((item, ii) => (
                    <span key={ii}>
                      <span style={{ color: '#86efac' }}>"{item}"</span>
                      {(ii < row.length - 1 || ri < rows.length - 1) && <span style={{ color: '#94a3b8' }}>, </span>}
                    </span>
                  ))}
                </span>,
                isActive, isHov
              )
            )}
            {codeLine(closeLine, <span style={{ color: '#94a3b8' }}>];</span>, isActive, isHov)}
            {bi < blocks.length - 1 && codeLine(blankLine, '', isActive, isHov)}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  const half = Math.ceil(skills.length / 2);
  const leftGroups = skills.slice(0, half);
  const rightGroups = skills.slice(half);

  const leftBlocks = buildBlocks(leftGroups, 1);
  const rightBlocks = buildBlocks(rightGroups, 1);

  const handleSelect = (cat) => setActive(p => p === cat ? null : cat);

  return (
    <section className="page-wrap" style={{ maxWidth: '1100px' }}>
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: '#080810',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}
      >
        {/* Title bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '10px 18px',
          background: 'rgba(255,255,255,0.025)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />
          ))}
          <span style={{ color: '#52525b', fontSize: '0.72rem', marginLeft: '12px', fontFamily: 'monospace' }}>skills.js</span>
          <span style={{ marginLeft: 'auto', color: '#3f3f46', fontSize: '0.68rem', fontFamily: 'monospace' }}>
            {active ? `// ${active}` : '// click any block to focus'}
          </span>
        </div>

        {/* Split code view */}
        <div style={{ display: 'flex', padding: '14px 0 18px' }}>
          <CodeColumn
            blocks={leftBlocks}
            active={active}
            hovered={hovered}
            onSelect={handleSelect}
            onHover={setHovered}
          />
          {/* Vertical divider */}
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.05)', flexShrink: 0, margin: '0 4px' }} />
          <CodeColumn
            blocks={rightBlocks}
            active={active}
            hovered={hovered}
            onSelect={handleSelect}
            onHover={setHovered}
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ textAlign: 'center', color: '#2a2a38', fontSize: '0.7rem', marginTop: '18px', fontFamily: 'monospace' }}
      >
        {'// click any block to focus • click again to clear'}
      </motion.p>
    </section>
  );
}
