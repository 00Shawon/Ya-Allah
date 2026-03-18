import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getNameByNumber, CONDITIONS } from '../data/names';

const s = {
  label: { fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16, opacity: 0.7 },
  cell: { background: 'var(--deep-navy)', padding: 'clamp(24px, 5vw, 36px)' },
  cellWide: { background: 'var(--deep-navy)', padding: 'clamp(24px, 5vw, 36px)', gridColumn: '1 / -1' },
  cellAccent: { background: 'var(--navy-light)', padding: 'clamp(24px, 5vw, 36px)', gridColumn: '1 / -1' },
};

export default function NameDetail() {
  const { number } = useParams();
  const navigate = useNavigate();
  const name = getNameByNumber(parseInt(number));

  if (!name) return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Not found.</div>;

  const relatedConditions = CONDITIONS.filter(c => name.conditions.includes(c.id));

  return (
    <div style={{ minHeight: '100vh', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: 'var(--nav-pad)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to bottom,rgba(10,14,26,0.98),transparent)', width: '100%', boxSizing: 'border-box' }}>
        <Link to="/" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--gold)', textDecoration: 'none', textTransform: 'uppercase' }}>Ya Allah</Link>
        <ul style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', listStyle: 'none' }}>
          <li><Link to="/seek" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>Seek</Link></li>
          <li><Link to="/all" style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '0.15em', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>All 99</Link></li>
        </ul>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: 'var(--section-pad)' }}>

        {/* Breadcrumb */}
        <div className="animate-in delay-1" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.15em', cursor: 'pointer', padding: 0, textTransform: 'uppercase', transition: 'color 0.3s' }} onMouseEnter={e=>e.target.style.color='var(--gold)'} onMouseLeave={e=>e.target.style.color='var(--text-dim)'}>← Return</button>
          <span style={{ color: 'var(--border)', fontSize: 14 }}>/</span>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.1em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{name.transliteration}</span>
        </div>

        {/* Hero */}
        <div className="animate-in delay-2" style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.4em', color: 'var(--gold)', opacity: 0.6, textTransform: 'uppercase', marginBottom: 24 }}>{String(name.number).padStart(2,'0')} of 99</div>

          <div style={{ position: 'relative', maxWidth: 'min(100%, 600px)', margin: '0 auto 24px' }}>
            <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(201,168,76,0.08) 0%,transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
            <span className="arabic gold-shimmer" style={{ fontSize: 'clamp(60px, 15vw, 120px)', lineHeight: 1.2, display: 'block', position: 'relative', zIndex: 1, overflow: 'hidden', textAlign: 'center' }}>{name.arabic}</span>
          </div>

          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(18px, 3.5vw, 32px)', fontWeight: 500, letterSpacing: '0.2em', color: 'var(--white)', marginBottom: 8, textTransform: 'uppercase' }}>{name.transliteration}</h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-mid)', marginBottom: 28 }}>{name.meaning}</p>

          <div className="animate-in delay-3" style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 16px)', padding: '10px 20px', border: '1px solid var(--border)', background: 'rgba(201,168,76,0.04)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', opacity: 0.6 }}>Root</span>
            <span className="arabic" style={{ fontSize: 18, color: 'var(--gold)' }}>{name.root}</span>
            <span style={{ fontSize: 14, color: 'var(--text-dim)', fontStyle: 'italic', fontWeight: 300 }}>{name.root_meaning}</span>
          </div>
        </div>

        {/* Gold line */}
        <div className="animate-in delay-3" style={{ width: 60, height: 1, background: 'linear-gradient(to right,transparent,var(--gold),transparent)', margin: '0 auto 40px' }} />

        {/* Content grid */}
        <div className="animate-in delay-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: 40 }}>

          <div style={s.cell}>
            <div style={s.label}>The Name</div>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--cream)', lineHeight: 1.8, fontWeight: 300, fontStyle: 'italic' }}>{name.meaning_deep}</p>
          </div>

          <div style={s.cell}>
            <div style={s.label}>Quranic Reference</div>
            <p style={{ fontFamily: "'Cinzel',serif", fontSize: 12, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 12, textTransform: 'uppercase' }}>{name.quran_reference}</p>
            {name.quran_verse && <blockquote style={{ fontSize: 16, color: 'var(--text-mid)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8, borderLeft: '2px solid var(--gold)', paddingLeft: 16, margin: 0 }}>"{name.quran_verse}"</blockquote>}
            {name.quran_context && <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.7, fontWeight: 300, marginTop: 12 }}>{name.quran_context}</p>}
          </div>

          <div style={s.cell}>
            <div style={s.label}>The Prophetic Tradition</div>
            <p style={{ fontSize: 15, color: 'var(--cream)', lineHeight: 1.8, fontWeight: 300 }}>{name.prophetic_usage}</p>
          </div>

          <div style={s.cell}>
            <div style={s.label}>When to Call This Name</div>
            <p style={{ fontSize: 15, color: 'var(--cream)', lineHeight: 1.8, fontWeight: 300 }}>{name.how_to_call}</p>
            {name.when_to_use && <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7, fontWeight: 300, marginTop: 12, fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: 12 }}>{name.when_to_use}</p>}
          </div>

          <div style={s.cellAccent}>
            <div style={s.label}>A Dua with This Name</div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 56px)', color: 'var(--gold)', opacity: 0.25, lineHeight: 1, flexShrink: 0, fontFamily: 'Georgia,serif' }}>❝</div>
              <p style={{ fontSize: 'clamp(17px, 2.5vw, 19px)', color: 'var(--white)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300, paddingTop: 8 }}>{name.dua_example}</p>
            </div>
          </div>

          {name.significance && (
            <div style={s.cell}>
              <div style={s.label}>The Significance</div>
              <p style={{ fontSize: 15, color: 'var(--cream)', lineHeight: 1.8, fontWeight: 300 }}>{name.significance}</p>
            </div>
          )}

          <div style={name.significance ? s.cell : s.cellWide}>
            <div style={s.label}>Reflection</div>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--cream)', lineHeight: 1.9, fontWeight: 300 }}>{name.reflection}</p>
          </div>

        </div>

        {/* Related conditions */}
        {relatedConditions.length > 0 && (
          <div className="animate-in delay-6" style={{ marginBottom: 40, padding: 'clamp(24px, 5vw, 40px)', border: '1px solid var(--border)', background: 'var(--deep-navy)' }}>
            <div style={s.label}>This Name Speaks To</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
              {relatedConditions.map(c => (
                <Link key={c.id} to={`/names/${c.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', border: '1px solid var(--border)', color: 'var(--text-dim)', textDecoration: 'none', fontSize: 14, fontStyle: 'italic', fontFamily: "'Cormorant Garamond',serif", transition: 'all 0.3s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--gold)';e.currentTarget.style.color='var(--gold)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--text-dim)';}}>
                  <span style={{ fontSize: 18 }}>{c.icon}</span><span>{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        <div className="animate-in delay-6" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)' }}>
          {name.number > 1 ? (
            <button onClick={() => navigate(`/name/${name.number - 1}`)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6, padding: 'clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px)', background: 'transparent', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--gold)';e.currentTarget.style.background='rgba(201,168,76,0.04)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.background='transparent';}}>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>← Previous</span>
              <span style={{ fontSize: 14, color: 'var(--text-dim)', fontStyle: 'italic' }}>{name.number - 1} of 99</span>
            </button>
          ) : <div style={{ flex: 1 }} />}
          {name.number < 99 ? (
            <button onClick={() => navigate(`/name/${name.number + 1}`)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, padding: 'clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px)', background: 'transparent', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s', textAlign: 'right' }} onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--gold)';e.currentTarget.style.background='rgba(201,168,76,0.04)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.background='transparent';}}>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>Next →</span>
              <span style={{ fontSize: 14, color: 'var(--text-dim)', fontStyle: 'italic' }}>{name.number + 1} of 99</span>
            </button>
          ) : <div style={{ flex: 1 }} />}
        </div>

      </div>
    </div>
  );
}
