import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2, alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05, phase: Math.random() * Math.PI * 2,
    }));
    let frame, t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const a = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed + s.phase));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${a})`; ctx.fill();
      });
      t += 0.02; frame = requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: 'var(--nav-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom, rgba(10,14,26,0.98), transparent)', width: '100%', boxSizing: 'border-box' }}>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Ya Allah</span>
        <ul style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', listStyle: 'none' }}>
          <li><Link to="/seek" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--gold)'} onMouseLeave={e => e.target.style.color='var(--text-dim)'}>Feeling</Link></li>
          <li><Link to="/all" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color='var(--gold)'} onMouseLeave={e => e.target.style.color='var(--text-dim)'}>All Names</Link></li>
        </ul>
      </nav>

      {/* Rotating ornament */}
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(90vw, 600px)', height: 'min(90vw, 600px)', pointerEvents: 'none', zIndex: 1, opacity: 0.3 }}>
        <svg viewBox="0 0 200 200" className="rotate-slow" style={{ width: '100%', height: '100%' }}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
          {Array.from({length: 12}, (_, i) => { const a = (i/12)*Math.PI*2; return <line key={i} x1={100+75*Math.cos(a)} y1={100+75*Math.sin(a)} x2={100+90*Math.cos(a)} y2={100+90*Math.sin(a)} stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />; })}
          {Array.from({length: 8}, (_, i) => { const a=(i/8)*Math.PI*2, na=a+Math.PI*2/8; return <line key={i} x1={100+75*Math.cos(a)} y1={100+75*Math.sin(a)} x2={100+75*Math.cos(na)} y2={100+75*Math.sin(na)} stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />; })}
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 60px', maxWidth: 800, width: '100%' }}>

        <div className="animate-in delay-1" style={{ marginBottom: 8 }}>
          <span className="arabic" style={{ fontSize: 'clamp(16px, 2.5vw, 24px)', color: 'var(--gold)', opacity: 0.9, letterSpacing: '0.05em', lineHeight: 1.6 }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
        </div>

        {/* Gold line */}
        <div className="animate-in delay-2" style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '24px auto' }} />

        <h1 className="animate-in delay-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, margin: '8px 0 28px' }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px,1.2vw,14px)', fontWeight: 400, letterSpacing: '0.4em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>The 99 Names</span>
          <span className="arabic gold-shimmer" style={{ fontSize: 'clamp(40px,7vw,88px)', lineHeight: 1.1, display: 'block' }}>أَسْمَاءُ اللَّهِ الْحُسْنَى</span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px,1.2vw,14px)', fontWeight: 400, letterSpacing: '0.4em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>of Allah</span>
        </h1>

        <p className="animate-in delay-4" style={{ fontSize: 'clamp(15px,1.8vw,19px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 40, letterSpacing: '0.01em', padding: '0 10px' }}>
          Every name is a door.<br />Find the one that opens for where you are.
        </p>

        <div className="animate-in delay-5" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60, padding: '0 20px' }}>
          <Link to="/seek" className="btn-primary" style={{ padding: '14px 30px', fontSize: 'clamp(10px, 1.2vw, 12px)' }}>
            <span>What Are You Feeling Now</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/all" className="btn-ghost" style={{ padding: '12px 24px', fontSize: 'clamp(10px, 1.2vw, 11px)' }}>Browse All Names</Link>
        </div>

        <div className="animate-in delay-6 corner-decor" style={{ maxWidth: 'min(500px, 90vw)', margin: '0 auto 60px', padding: '24px clamp(16px, 4vw, 32px)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.8, marginBottom: 12, fontWeight: 300 }}>
            "Allah has ninety-nine names — whoever preserves them will enter Paradise."
          </p>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', opacity: 0.7 }}>— Sahih Bukhari, 2736</p>
        </div>

        <div className="animate-in delay-8" style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', marginTop: 20 }}>
          <div style={{ width: 40, height: 1, background: 'var(--border)' }} />
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: '0.3em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Begin</span>
          <div style={{ width: 40, height: 1, background: 'var(--border)' }} />
        </div>
      </div>
    </div>
  );
}
