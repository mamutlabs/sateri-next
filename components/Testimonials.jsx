'use client';
import React from 'react';
// Testimonials.jsx — quote cards from Santiago customers.
const Testimonials = () => {
  const items = [
    {
      quote: 'Llamé un viernes a las 10pm porque mi A/C se dañó. A las 8am del sábado el técnico estaba en mi casa con la pieza correcta. Servicio impecable.',
      name: 'Patricia M.', sector: 'Cerros de Gurabo', rating: 5
    },
    {
      quote: 'La diferencia con otros servicios técnicos en Santiago es la transparencia. Diagnóstico claro, presupuesto antes del trabajo y garantía por escrito.',
      name: 'Luis F.', sector: 'Villa Olga', rating: 5
    },
    {
      quote: 'Han venido tres veces a la casa: plomería, lavadora y nevera. Siempre el mismo nivel. Ya es el primero que llamo cuando algo falla.',
      name: 'Carla R.', sector: 'Reparto Universitario', rating: 5
    }
  ];

  return (
    <section style={{ background: '#fff', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, maxWidth: 620 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#122c26', marginBottom: 12 }}>
            ● Lo que dicen
          </div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 700, color: '#122c26', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.02em' }}>
            Confianza que se construye<br/>
            <em style={{ fontStyle: 'italic', color: '#717976', fontWeight: 400 }}>con cada visita.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {items.map((t, i) => (
            <div key={i} style={{
              background: i === 1 ? '#122c26' : '#f4f7f6',
              color: i === 1 ? '#fff' : '#122c26',
              borderRadius: 28, padding: 36,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 320,
              border: '1px solid ' + (i === 1 ? 'rgba(150,249,150,.15)' : 'rgba(113,121,118,.1)')
            }}>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                  {Array.from({length: t.rating}).map((_, k) => (
                    <span key={k} className="material-symbols-outlined"
                      style={{ color: '#fbbf24', fontSize: 20, fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p style={{
                  fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 500,
                  lineHeight: 1.4, margin: 0, letterSpacing: '-.005em'
                }}>
                  "{t.quote}"
                </p>
              </div>
              <div style={{ marginTop: 32, paddingTop: 20,
                borderTop: '1px solid ' + (i === 1 ? 'rgba(255,255,255,.1)' : 'rgba(18,44,38,.1)') }}>
                <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: i === 1 ? '#a9cfc2' : '#717976',
                  letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>
                  Cliente · {t.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Testimonials;
