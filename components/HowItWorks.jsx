'use client';
import React from 'react';
// HowItWorks.jsx — 4-step process timeline.
const HowItWorks = () => {
  const steps = [
    { n: '01', icon: 'search',           title: 'Solicite', desc: 'Busque su servicio o seleccione una categoría desde la app.' },
    { n: '02', icon: 'engineering',      title: 'Asignamos', desc: 'Le enviamos al técnico certificado más cercano a su sector.' },
    { n: '03', icon: 'home_repair_service', title: 'Resolvemos', desc: 'El técnico llega, diagnostica y repara con repuestos originales.' },
    { n: '04', icon: 'verified',         title: 'Garantizamos', desc: 'Recibe garantía por escrito y soporte post-servicio.' }
  ];

  return (
    <section style={{ background: '#122c26', padding: '120px 0', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(150,249,150,.08), transparent 70%)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 80, maxWidth: 720, margin: '0 auto 80px' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#96f996', marginBottom: 16 }}>
            ● Cómo funciona
          </div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.02em' }}>
            De la solicitud al hogar listo,<br/>
            <em style={{ fontStyle: 'italic', color: '#a9cfc2', fontWeight: 400 }}>en cuatro pasos.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 1,
            background: 'linear-gradient(to right, transparent, rgba(150,249,150,.3) 20%, rgba(150,249,150,.3) 80%, transparent)' }} />

          {steps.map(s => (
            <div key={s.n} style={{ position: 'relative', textAlign: 'center', padding: '0 8px' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: '#1a3c34', border: '1px solid rgba(150,249,150,.3)',
                margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 2
              }}>
                <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 32, fontVariationSettings: "'wght' 400" }}>{s.icon}</span>
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', color: '#96f996', marginBottom: 8 }}>
                PASO {s.n}
              </div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-.01em', color: '#fff' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,.65)', lineHeight: 1.55, margin: 0, maxWidth: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default HowItWorks;
