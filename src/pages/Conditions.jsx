import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CONDITIONS } from '../data/names';

export default function Conditions() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelected(id);
    setTimeout(() => navigate(`/names/${id}`), 380);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: 'var(--nav-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom, rgba(10,14,26,0.98), transparent)', width: '100%', boxSizing: 'border-box' }}>
        <Link to="/" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Ya Allah</Link>
        <ul style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', listStyle: 'none' }}>
          <li><Link to="/seek" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Seek a Name</Link></li>
          <li><Link to="/all" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>All 99</Link></li>
        </ul>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'var(--section-pad)' }}>

        {/* Header */}
        <div className="animate-in delay-1" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 64px)' }}>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '0.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>Begin Here</p>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '0 auto 24px' }} />
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.3, marginBottom: 20, fontStyle: 'italic' }}>
            What are you carrying<br />right now?
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'var(--text-mid)', lineHeight: 1.8, fontWeight: 300, maxWidth: 600, margin: '0 auto' }}>
            Allah has a name for every state of the heart.<br />
            Choose what is true for you in this moment.
          </p>
        </div>

        {/* Grid */}
        <div className="animate-in delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: 48, overflow: 'hidden' }}>
          {CONDITIONS.map((condition, i) => (
            <button
              key={condition.id}
              className="condition-card"
              onClick={() => handleSelect(condition.id)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: 'clamp(16px, 3vw, 24px)',
                background: selected === condition.id ? 'var(--navy-light)' : 'var(--deep-navy)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.3s',
                overflow: 'hidden',
                animationDelay: `${0.3 + i * 0.04}s`,
                '--card-color': condition.color,
              }}
              onMouseEnter={e => { if (selected !== condition.id) e.currentTarget.style.background = 'var(--navy)'; }}
              onMouseLeave={e => { if (selected !== condition.id) e.currentTarget.style.background = 'var(--deep-navy)'; }}
            >
              <div className="card-bg" />
              <div style={{ fontSize: 18, flexShrink: 0, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(201,168,76,0.08)', border: '1px solid var(--border)', transition: 'all 0.3s', position: 'relative', zIndex: 1 }}>
                {condition.icon}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: 'clamp(13px, 1.4vw, 14px)', color: 'var(--cream)', fontWeight: 400, lineHeight: 1.4, fontFamily: "'Cormorant Garamond',serif" }}>{condition.label}</span>
                <span className="arabic" style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: 'var(--text-dim)', lineHeight: 1.5 }}>{condition.arabic}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/all" className="btn-ghost" style={{ padding: '10px 24px', fontSize: 10 }}>Browse all 99 names instead</Link>
        </div>
      </div>
    </div>
  );
}
