'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const CAT_ICON = {
  'Climatización': 'ac_unit',
  'Plomería': 'plumbing',
  'Electricidad': 'electrical_services',
  'Línea Blanca': 'kitchen',
  'Lavandería': 'local_laundry_service',
  'Limpieza': 'cleaning_services',
  'Seguridad': 'videocam',
};

// Cada chip mapea a la serviceCategory real de Firestore
const CHIPS = [
  { label: 'Se rompió una tubería',    cat: 'Plomería'       },
  { label: 'El aire no enfría',        cat: 'Climatización'  },
  { label: 'La lavadora no funciona',  cat: 'Línea Blanca'   },
  { label: 'Fallo eléctrico',          cat: 'Electricidad'   },
  { label: 'Recoger ropa sucia',       cat: 'Lavandería'     },
];

const HeroSearch = ({ pages = [], onSelectService }) => {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef(null);

  const results = React.useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const filtered = pages.filter(p =>
      p.h1?.toLowerCase().includes(q) ||
      p.serviceCategory?.toLowerCase().includes(q) ||
      p.slug?.toLowerCase().includes(q)
    );
    const seen = new Set();
    return filtered.filter(p => {
      const prefix = p.h1?.split(' en ')[0] ?? p.h1;
      if (seen.has(prefix)) return false;
      seen.add(prefix);
      return true;
    }).slice(0, 7);
  }, [query, pages]);

  const handleSearch = () => {
    if (results.length > 0) {
      onSelectService && onSelectService(results[0]);
    } else {
      // Sin resultados en Firestore o páginas aún no cargadas → contacto
      onSelectService && onSelectService(null);
    }
  };

  const handleChip = ({ label, cat }) => {
    // Si hay páginas cargadas, navega directo al primer resultado de esa categoría
    const match = pages.find(p => p.serviceCategory === cat);
    if (match) {
      onSelectService && onSelectService(match);
    } else {
      // Firestore aún no cargó o no hay páginas — muestra resultados en el buscador
      setQuery(label);
      setFocused(true);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section style={{
      position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center',
      background: '#1a3c34', paddingTop: 80, overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80"
          alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .45, mixBlendMode: 'overlay' }} />
        <div style={{ position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(18,44,38,.45), #122c26 75%)' }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', maxWidth: 980, margin: '0 auto',
        padding: '64px 24px', textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
          borderRadius: 9999, padding: '8px 16px', backdropFilter: 'blur(12px)', marginBottom: 36
        }}>
          <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>verified</span>
          <span className="hero-badge-text" style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
            Disponible en Santiago de los Caballeros
          </span>
        </div>

        <h1 style={{
          fontFamily: '"Playfair Display", serif', fontSize: 'clamp(40px, 6vw, 84px)', fontWeight: 700,
          color: '#fff', lineHeight: 1.02, letterSpacing: '-.025em', margin: '0 0 24px 0'
        }}>
          El cuidado premium<br/>
          <em style={{ color: '#a9cfc2', fontStyle: 'italic', fontWeight: 400 }}>que su hogar requiere.</em>
        </h1>

        <p style={{
          fontFamily: 'Inter', fontWeight: 300, fontSize: 'clamp(16px,1.4vw,20px)',
          color: 'rgba(255,255,255,.75)', lineHeight: 1.55, margin: '0 auto 48px', maxWidth: 600
        }}>
          Técnicos certificados en Santiago. Complete el formulario, le asignamos un técnico y le damos seguimiento por la app.
        </p>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'center', background: '#fff',
            borderRadius: 9999, padding: '8px 8px 8px 24px', overflow: 'hidden',
            boxShadow: focused
              ? '0 25px 50px -12px rgba(0,0,0,.5), 0 0 0 4px rgba(150,249,150,.25)'
              : '0 25px 50px -12px rgba(0,0,0,.4)',
            transition: 'box-shadow 200ms'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#122c26', fontSize: 24, marginRight: 12, flexShrink: 0 }}>search</span>
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 200)}
              onKeyDown={handleKey}
              placeholder="¿Qué servicio necesita? p.ej. plomero, A/C, lavadora…"
              style={{
                flex: 1, minWidth: 0, border: 0, outline: 'none', fontFamily: 'Inter', fontSize: 16,
                color: '#1a1c1c', background: 'transparent', padding: '14px 0'
              }}
            />
            <button
              onMouseDown={e => e.preventDefault()}
              onClick={handleSearch}
              style={{
                background: '#122c26', color: '#fff', border: 0, fontFamily: 'Inter',
                fontWeight: 700, fontSize: 13, padding: '14px 28px', borderRadius: 9999,
                cursor: 'pointer', letterSpacing: '.04em', flexShrink: 0
              }}>Buscar</button>
          </div>

          {/* Quick chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 20 }}>
            <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', alignSelf: 'center', marginRight: 8 }}>Popular:</span>
            {CHIPS.map(c => (
              <button key={c.label}
                onMouseDown={e => e.preventDefault()}
                onClick={() => handleChip(c)}
                style={{
                  background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)',
                  color: 'rgba(255,255,255,.85)', fontFamily: 'Inter', fontSize: 13, fontWeight: 500,
                  padding: '6px 14px', borderRadius: 9999, cursor: 'pointer', backdropFilter: 'blur(8px)'
                }}>{c.label}</button>
            ))}
          </div>

          {/* Dropdown resultados */}
          {focused && query.length >= 2 && results.length > 0 && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 12px)', left: 0, right: 0, zIndex: 50,
              background: '#fff', borderRadius: 24, boxShadow: '0 25px 50px -12px rgba(0,0,0,.4)',
              padding: 12, textAlign: 'left'
            }}>
              {results.map((page) => {
                const sector = page.h1?.split(' en ')[1] ?? '';
                const icon = CAT_ICON[page.serviceCategory] ?? 'build_circle';
                return (
                  <button key={page.slug}
                    onMouseDown={e => e.preventDefault()}
                    onClick={() => { setQuery(''); setFocused(false); onSelectService && onSelectService(page); }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                      padding: '12px 16px', background: 'transparent', border: 0, cursor: 'pointer',
                      borderRadius: 14, textAlign: 'left'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f4f7f6'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <span className="material-symbols-outlined" style={{ background: '#122c26', color: '#96f996', borderRadius: 12, padding: 6, fontSize: 22, flexShrink: 0 }}>{icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: 600, color: '#122c26' }}>{page.h1}</div>
                      {sector && <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#717976' }}>{sector}</div>}
                    </div>
                    <span className="material-symbols-outlined" style={{ color: '#717976' }}>arrow_forward</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Sin resultados */}
          {focused && query.length >= 2 && results.length === 0 && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 12px)', left: 0, right: 0, zIndex: 50,
              background: '#fff', borderRadius: 24, boxShadow: '0 25px 50px -12px rgba(0,0,0,.4)',
              padding: '20px 24px', textAlign: 'center'
            }}>
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#717976', margin: '0 0 12px' }}>
                No encontramos páginas para <strong style={{ color: '#122c26' }}>"{query}"</strong>.
              </p>
              <button
                onMouseDown={e => e.preventDefault()}
                onClick={() => { setFocused(false); onSelectService && onSelectService(null); }}
                style={{
                  background: '#122c26', color: '#fff', border: 0, fontFamily: 'Inter',
                  fontWeight: 700, fontSize: 13, padding: '10px 22px', borderRadius: 9999, cursor: 'pointer'
                }}>
                Contáctenos directamente →
              </button>
            </div>
          )}
        </div>

        {/* Trust row */}
        <div style={{
          marginTop: 56, display: 'flex', justifyContent: 'center', gap: 40,
          flexWrap: 'wrap', color: 'rgba(255,255,255,.7)', fontFamily: 'Inter', fontSize: 13
        }}>
          {[
            ['shield_person', 'Técnicos auditados'],
            ['verified', 'Garantía por escrito'],
            ['schedule', 'Atención el mismo día']
          ].map(([ico, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 18 }}>{ico}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
