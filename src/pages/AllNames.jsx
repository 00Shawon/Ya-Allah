import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAMES, CONDITIONS } from '../data/names';

export default function AllNames() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();

  const filtered = NAMES.filter(n => {
    const matchSearch = !search || n.transliteration.toLowerCase().includes(search.toLowerCase()) || n.meaning.toLowerCase().includes(search.toLowerCase()) || n.arabic.includes(search);
    const matchFilter = !filter || n.conditions.includes(filter);
    return matchSearch && matchFilter;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: 'var(--nav-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom,rgba(10,14,26,0.98),transparent)', width: '100%', boxSizing: 'border-box' }}>
        <Link to="/" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Ya Allah</Link>
        <ul style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', listStyle: 'none' }}>
          <li><Link to="/seek" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>Seek</Link></li>
          <li><Link to="/all" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.15em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>All 99</Link></li>
        </ul>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--section-pad)' }}>

        {/* Header */}
        <div className="animate-in delay-1" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: 10, letterSpacing: '0.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>The Complete Collection</p>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right,transparent,var(--gold),transparent)', margin: '0 auto 24px' }} />
          <span className="arabic gold-shimmer" style={{ fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.3, display: 'block', marginBottom: 12 }}>أَسْمَاءُ اللَّهِ الْحُسْنَى</span>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--text-dim)', fontStyle: 'italic', fontWeight: 300 }}>The 99 Most Beautiful Names of Allah</p>
        </div>

        {/* Search + filter */}
        <div className="animate-in delay-2" style={{ marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            placeholder="Search by name or meaning..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', background: 'var(--deep-navy)', border: '1px solid var(--border)', color: 'var(--white)', fontFamily: "'Cormorant Garamond',serif", fontSize: 16, outline: 'none', transition: 'border-color 0.3s' }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <div className="filter-scroll">
            <button onClick={() => setFilter(null)} style={{ padding: '6px 14px', background: !filter ? 'rgba(201,168,76,0.1)' : 'transparent', border: `1px solid ${!filter ? 'var(--gold)' : 'var(--border)'}`, color: !filter ? 'var(--gold)' : 'var(--text-dim)', fontFamily: "'Cormorant Garamond',serif", fontSize: 13, cursor: 'pointer', fontStyle: 'italic', transition: 'all 0.3s', flexShrink: 0 }}>All</button>
            {CONDITIONS.map(c => (
              <button key={c.id} onClick={() => setFilter(filter === c.id ? null : c.id)} style={{ padding: '6px 14px', background: filter === c.id ? 'rgba(201,168,76,0.1)' : 'transparent', border: `1px solid ${filter === c.id ? 'var(--gold)' : 'var(--border)'}`, color: filter === c.id ? 'var(--gold)' : 'var(--text-dim)', fontFamily: "'Cormorant Garamond',serif", fontSize: 13, cursor: 'pointer', fontStyle: 'italic', whiteSpace: 'nowrap', transition: 'all 0.3s', flexShrink: 0 }}>
                {c.icon} {c.label}
              </button>
            ))} 
          </div>
        </div>

        <p className="animate-in delay-3" style={{ fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: '0.2em', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: 20 }}>
          Showing <span style={{ color: 'var(--gold)' }}>{filtered.length}</span> of 99 names
        </p>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%, 180px),1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', overflow: 'hidden' }}>
          {filtered.map((name, i) => (
            <div
              key={name.number}
              className="all-card animate-in"
              onClick={() => navigate(`/name/${name.number}`)}
              style={{ background: 'var(--deep-navy)', padding: '20px 16px', cursor: 'pointer', transition: 'background 0.25s', display: 'flex', flexDirection: 'column', gap: 4, animationDelay: `${0.1 + (i % 20) * 0.03}s`, opacity: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--navy)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--deep-navy)'}
            >
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)', opacity: 0.5 }}>{String(name.number).padStart(2,'0')}</div>
              <span className="arabic" style={{ fontSize: 'clamp(26px, 4vw, 32px)', lineHeight: 1.3, background: 'linear-gradient(135deg,var(--gold-pale),var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', overflow: 'hidden', display: 'block' }}>{name.arabic}</span>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', opacity: 0.7 }}>{name.transliteration}</div>
              <div style={{ fontSize: 'clamp(14px, 1.5vw, 15px)', color: 'var(--cream)', fontStyle: 'italic', lineHeight: 1.4, fontWeight: 300 }}>{name.meaning}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                {name.conditions.slice(0,3).map(cid => { const cond = CONDITIONS.find(c => c.id === cid); return cond ? <span key={cid} style={{ fontSize: 13, opacity: 0.5 }} title={cond.label}>{cond.icon}</span> : null; })}
              </div>
              <button className="view-details-btn">View Details →</button>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-dim)', fontStyle: 'italic', fontSize: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <p>No names match your search.</p>
            <button onClick={() => { setSearch(''); setFilter(null); }} className="btn-ghost" style={{ padding: '8px 20px', fontSize: 10 }}>Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
