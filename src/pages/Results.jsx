import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CONDITIONS, getNamesByCondition } from '../data/names';

const Nav = () => (
  <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: 'var(--nav-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom,rgba(10,14,26,0.98),transparent)', width: '100%', boxSizing: 'border-box' }}>
    <Link to="/" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Ya Allah</Link>
    <ul style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', listStyle: 'none' }}>
      <li><Link to="/seek" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>Seek</Link></li>
      <li><Link to="/all" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>All 99</Link></li>
    </ul>
  </nav>
);

export default function Results() {
  const { conditionId } = useParams();
  const navigate = useNavigate();
  const condition = CONDITIONS.find(c => c.id === conditionId);
  const names = getNamesByCondition(conditionId);

  if (!condition) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Not found.</div>;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--midnight)' }}>
      <Nav />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--section-pad)' }}>

        {/* Breadcrumb */}
        <div className="animate-in delay-1" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(24px, 5vw, 40px)' }}>
          <button onClick={() => navigate('/seek')} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '0.15em', cursor: 'pointer', padding: 0, textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>← Return</button>
          <span style={{ color: 'var(--border)', fontSize: 12 }}>/</span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '0.1em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{condition.label}</span>
        </div>

        {/* Header */}
        <div className="animate-in delay-2" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', border: '1px solid var(--border)', background: 'rgba(201,168,76,0.04)', marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>{condition.icon}</span>
            <span style={{ fontSize: 13, color: 'var(--text-mid)', fontStyle: 'italic', fontFamily: "'Cormorant Garamond',serif" }}>{condition.label}</span>
          </div>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right,transparent,var(--gold),transparent)', margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 300, color: 'var(--white)', fontStyle: 'italic', marginBottom: 16 }}>
            {names.length} Name{names.length !== 1 ? 's' : ''} for This Moment
          </h1>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'var(--text-mid)', fontWeight: 300 }}>Allah is near. Call upon Him by the name that speaks to your state.</p>
        </div>

        {/* Names grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%, 300px), 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: 64, overflow: 'hidden' }}>
          {names.map((name, i) => (
            <div
              key={name.number}
              className="name-card animate-in"
              onClick={() => navigate(`/name/${name.number}`)}
              style={{ position: 'relative', background: 'var(--deep-navy)', cursor: 'pointer', transition: 'background 0.3s', overflow: 'hidden', animationDelay: `${0.3 + i * 0.07}s`, opacity: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--navy)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--deep-navy)'}
            >
              <div style={{ padding: 'clamp(24px, 4vw, 32px)', position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: 12, letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: 16, opacity: 0.6 }}>{String(name.number).padStart(2,'0')}</div>
                <div style={{ marginBottom: 16 }}>
                  <span className="arabic" style={{ fontSize: 'clamp(32px, 5vw, 40px)', lineHeight: 1.4, background: 'linear-gradient(135deg,var(--gold-pale),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', textAlign: 'right', overflow: 'hidden', width: '100%' }}>{name.arabic}</span>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: 13, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', opacity: 0.7 }}>{name.transliteration}</span>
                </div>
                <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', fontWeight: 500, color: 'var(--white)', marginBottom: 10, fontFamily: "'Cormorant Garamond',serif" }}>{name.meaning}</h3>
                  <p className="line-clamp-3" style={{ fontSize: 'clamp(15px, 1.8vw, 16px)', color: 'var(--text-mid)', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 300 }}>{name.meaning_deep}</p>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 10, opacity: 0.7 }}>Call upon this name</div>
                  <p className="line-clamp-3" style={{ fontSize: 'clamp(15px, 1.8vw, 16px)', color: 'var(--cream)', lineHeight: 1.7, fontWeight: 300 }}>{name.how_to_call}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{name.quran_reference}</span>
                  <button className="name-read-more">Full Reflection →</button>
                </div>
              </div>
              <div className="name-card-glow" />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div style={{ textAlign: 'center' }}>
          <div className="corner-decor" style={{ display: 'inline-block', padding: 'clamp(32px, 8vw, 40px) clamp(24px, 6vw, 48px)', border: '1px solid var(--border)', maxWidth: 520, width: '100%', boxSizing: 'border-box' }}>
            <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1.8, marginBottom: 8, fontWeight: 300 }}>"To Allah belong the most beautiful names, so call upon Him by them."</p>
            <p style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: '0.2em', color: 'var(--gold)', opacity: 0.7, marginBottom: 28, textTransform: 'uppercase' }}>— Surah Al-A'raf 7:180</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/seek" className="btn-ghost" style={{ padding: '8px 20px', fontSize: 9 }}>Choose Another</Link>
              <Link to="/all" className="btn-ghost" style={{ padding: '8px 20px', fontSize: 9 }}>See All 99</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
