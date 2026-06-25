import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  hue: number;
}

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    const particles: Particle[] = [];
    let mx = -999, my = -999;
    let hue = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      hue = (hue + 1.5) % 360;
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;
        particles.push({
          x: mx,
          y: my,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          life: 1,
          maxLife: 1,
          r: Math.random() * 6 + 4,
          hue: hue + Math.random() * 40 - 20,
        });
      }
    };

    window.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life -= 0.022;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        const alpha = p.life;
        const radius = p.r * p.life;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 2.5);
        grd.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${alpha * 0.9})`);
        grd.addColorStop(0.5, `hsla(${p.hue + 30}, 90%, 55%, ${alpha * 0.4})`);
        grd.addColorStop(1, `hsla(${p.hue + 60}, 80%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
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
        zIndex: 5,
        mixBlendMode: 'screen',
      }}
    />
  );
}
