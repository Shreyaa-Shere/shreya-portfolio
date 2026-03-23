import { useEffect, useRef } from 'react';

const SYMBOLS = [
  '{ }', '</>', '=>', 'const', 'async', 'await', 'import',
  'git push', 'npm', 'API', 'def', '//', '[ ]', '&&', '===',
  'return', 'export', 'fetch()', '.then()', 'useState',
  '<!—', '#', '&&', '||', '()', 'class', 'docker', 'SELECT *',
];

const COLORS = [
  'rgba(244, 114, 182, VAL)',  // pink
  'rgba(192, 132, 252, VAL)',  // lavender
  'rgba(129, 140, 248, VAL)',  // indigo
  'rgba(253, 164, 175, VAL)',  // soft rose
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn a particle
    function spawn() {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        x: randomBetween(0, canvas.width),
        y: canvas.height + randomBetween(0, 100),
        size: randomBetween(13, 20),
        speed: randomBetween(0.25, 0.7),
        opacity: randomBetween(0.17, 0.25),
        drift: randomBetween(-0.15, 0.15),    // gentle horizontal sway
        color,
        life: 0,                               // 0→1 for fade in/out
      };
    }

    // Initial particles spread across screen
    for (let i = 0; i < 38; i++) {
      const p = spawn();
      p.y = randomBetween(0, canvas.height);   // start at random height
      particlesRef.current.push(p);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        // Move up + drift
        p.y -= p.speed;
        p.x += p.drift;
        p.life += 0.004;

        // Fade in for first 15% of travel, fade out for last 15%
        const progress = 1 - p.y / canvas.height;
        const fade = progress < 0.15
          ? progress / 0.15
          : progress > 0.85
            ? (1 - progress) / 0.15
            : 1;

        const alpha = p.opacity * fade;
        const colorStr = p.color.replace('VAL', alpha.toFixed(3));

        ctx.save();
        ctx.font = `${p.size}px 'Fira Code', 'Courier New', monospace`;
        ctx.fillStyle = colorStr;
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();

        // Recycle when off-screen
        if (p.y < -30) {
          particlesRef.current[i] = spawn();
        }
      });

      // Occasionally add a new one if under cap
      if (particlesRef.current.length < 42 && Math.random() < 0.008) {
        particlesRef.current.push(spawn());
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
