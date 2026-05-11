'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const SECTORS = [
  { name: 'Villa Olga',                  premium: true  },
  { name: 'Los Jardines Metropolitanos', premium: true  },
  { name: 'Cerros de Gurabo',            premium: true  },
  { name: 'Reparto Universitario',       premium: true  },
  { name: 'El Dorado',                   premium: true  },
  { name: 'Quintas de Pontezuela',       premium: true  },
  { name: 'Gurabo',                      premium: false },
  { name: 'La Trinitaria',               premium: false },
  { name: 'La Esmeralda',                premium: false },
  { name: 'Rincón Largo',                premium: false },
  { name: 'Los Llanos de Gurabo',        premium: false },
  { name: 'Las Carmelitas',              premium: false },
  { name: 'La Rosaleda',                 premium: false },
  { name: 'Los Colegios',                premium: false },
  { name: 'Casilda',                     premium: false },
  { name: 'Los Álamos',                  premium: false },
  { name: 'El Embrujo I',                premium: false },
];

const SectorsMap = () => {
  
  const router = useRouter();
  const [filter, setFilter] = React.useState('todos');
  const visible = SECTORS.filter(s => filter === 'todos' || s.premium);
  const premiumCount = SECTORS.filter(s => s.premium).length;

  return (
    <section style={{
      background: 'linear-gradient(180deg, #f4f7f6 0%, #e8ede9 100%)',
      padding: '120px 0', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}
             className="sectors-grid">
          {/* Left — copy + visual */}
          <div>
            <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#122c26', marginBottom: 12 }}>
              ● Cobertura
            </div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 700, color: '#122c26', margin: '0 0 20px', lineHeight: 1.05, letterSpacing: '-.02em' }}>
              17 sectores<br/>
              <em style={{ fontStyle: 'italic', color: '#717976', fontWeight: 400 }}>de Santiago.</em>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: 17, color: '#414846', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 460 }}>
              Operamos exclusivamente en los sectores más exigentes de Santiago de los Caballeros. Nuestros técnicos llegan en menos de 60 minutos.
            </p>

            {/* Stat tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
              <div style={{ background: '#122c26', color: '#fff', padding: '20px 22px', borderRadius: 16 }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 44, fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>
                  {premiumCount}
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#96f996' }}>
                  Sectores premium
                </div>
              </div>
              <div style={{ background: '#fff', color: '#122c26', padding: '20px 22px', borderRadius: 16, border: '1px solid rgba(18,44,38,.1)' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 44, fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>
                  &lt;60<span style={{ fontSize: 22, opacity: .6 }}>min</span>
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#717976' }}>
                  Tiempo de llegada
                </div>
              </div>
            </div>

            <button onClick={() => router.push('/contact')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#122c26',
              fontFamily: 'Inter', fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase',
              padding: '14px 22px', borderRadius: 9999, border: '1px solid #122c26',
              cursor: 'pointer'
            }}>
              ¿No ve su sector? Consúltenos
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Right — sector grid */}
          <div>
            {/* Filter pills */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              {[['todos', `Todos (${SECTORS.length})`], ['premium', `Premium (${premiumCount})`]].map(([k, t]) => (
                <button key={k} onClick={() => setFilter(k)} style={{
                  background: filter === k ? '#122c26' : 'transparent',
                  color: filter === k ? '#fff' : '#122c26',
                  border: '1px solid ' + (filter === k ? '#122c26' : 'rgba(18,44,38,.2)'),
                  fontFamily: 'Inter', fontSize: 12, fontWeight: 700, letterSpacing: '.12em',
                  textTransform: 'uppercase', padding: '10px 18px', borderRadius: 9999, cursor: 'pointer'
                }}>{t}</button>
              ))}
            </div>

            <div style={{
              background: '#fff', border: '1px solid rgba(18,44,38,.08)', borderRadius: 20,
              padding: 28, boxShadow: '0 1px 2px rgba(18,44,38,.04)'
            }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px 24px'
              }} className="sector-list">
                {visible.map((s, i) => (
                  <div key={s.name} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                    padding: '14px 0',
                    borderBottom: i < visible.length - (visible.length % 2 === 0 ? 2 : 1)
                      ? '1px solid rgba(18,44,38,.06)' : 'none',
                    fontFamily: 'Inter'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="material-symbols-outlined" style={{
                        fontSize: 16, color: s.premium ? '#122c26' : 'rgba(18,44,38,.35)'
                      }}>location_on</span>
                      <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1c1c' }}>{s.name}</span>
                    </div>
                    {s.premium && (
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase',
                        color: '#122c26', background: '#96f996',
                        padding: '4px 8px', borderRadius: 999
                      }}>Premium</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              fontFamily: 'Inter', fontSize: 12, color: '#717976', marginTop: 16, lineHeight: 1.5
            }}>
              <strong style={{ color: '#414846', fontWeight: 700 }}>Premium</strong> incluye prioridad en agenda, ventana de 30 min y técnico senior asignado.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .sectors-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .sector-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};



export default SectorsMap;
