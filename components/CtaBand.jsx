'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const CtaBand = () => {
  const router = useRouter();
  
  return (
  <section id="app-download" style={{ background: '#f4f7f6', padding: '96px 32px' }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto', borderRadius: 32,
      background: 'linear-gradient(135deg, #122c26 0%, #1a3c34 100%)',
      padding: 'clamp(48px, 6vw, 80px)', position: 'relative', overflow: 'hidden',
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center'
    }} className="cta-band">
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(150,249,150,.12), transparent 70%)' }} />

      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#96f996', marginBottom: 16 }}>
          ● Descargar la app
        </div>
        <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', lineHeight: 1.05, letterSpacing: '-.02em' }}>
          Su próximo técnico<br/>
          <em style={{ fontStyle: 'italic', color: '#a9cfc2', fontWeight: 400 }}>está a un toque.</em>
        </h2>
        <p style={{ fontFamily: 'Inter', fontSize: 17, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 460 }}>
          Reserve, pague y haga seguimiento desde su teléfono. Sin descargas, sin app stores — instalación directa desde el navegador.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button onClick={() => window.open('https://app.sateri.do', '_blank')} style={{
            background: '#96f996', color: '#122c26', border: 0, fontFamily: 'Inter',
            fontWeight: 700, fontSize: 14, padding: '16px 28px', borderRadius: 9999, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_to_home_screen</span>
            Instalar SATERI
          </button>
          <button onClick={() => router.push('/contact')} style={{
            background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.25)',
            fontFamily: 'Inter', fontWeight: 600, fontSize: 14, padding: '16px 28px', borderRadius: 9999, cursor: 'pointer'
          }}>Ver demostración</button>
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 220, padding: 24, background: '#fff', borderRadius: 28,
          boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)', textAlign: 'center'
        }}>
          <img src="/assets/icon-192.png" alt="" style={{ width: 64, height: 64, borderRadius: 14, marginBottom: 16 }} />
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#122c26' }}>SATERI App</div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#717976', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 4 }}>
            app.sateri.do
          </div>
          <div style={{ marginTop: 20, padding: 8, background: '#fff', borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8e4' }}>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://app.sateri.do" alt="QR Code para App Sateri" style={{ width: 80, height: 80 }} />
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#717976', marginTop: 12 }}>
            Escanee con su móvil
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 880px) {
        .cta-band { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
  );
};



export default CtaBand;
