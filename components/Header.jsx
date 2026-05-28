'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const SateriHeader = () => {
  const router = useRouter();

  const scrollToDownload = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.open('https://app.sateri.do', '_blank');
      return;
    }
    const el = document.getElementById('app-download');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: '#fff',
      boxShadow: '0 1px 2px rgba(18,44,38,.06)', width: '100%'
    }}>
      <div className="header-inner" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 24px', maxWidth: 1280, margin: '0 auto'
      }}>
        <div onClick={() => router.push('/')} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
          <img src="/assets/icon-512.png" alt="SATERI" style={{ height: 48, width: 48, objectFit: 'contain', borderRadius: 12 }} />
          <span className="header-logo-text" style={{
            fontFamily: '"Playfair Display", serif', fontWeight: 800, fontSize: 22,
            color: '#122c26', letterSpacing: '.05em'
          }}>SATERI</span>
        </div>
        <div className="header-nav" style={{ gap: 28, alignItems: 'center', fontFamily: 'Inter', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase' }}>
          <span style={{ color: '#122c26', fontWeight: 700 }}>Santiago, RD</span>
          <span style={{ color: 'rgba(18,44,38,.6)', fontWeight: 500 }}>Servicios Premium</span>
          <span onClick={() => router.push('/blog')} style={{ color: 'rgba(18,44,38,.6)', fontWeight: 500, cursor: 'pointer' }}>Blog</span>
        </div>
        <button onClick={scrollToDownload} className="header-cta" style={{
          background: '#122c26', color: '#fff', fontFamily: 'Inter', fontWeight: 700,
          fontSize: 12, padding: '10px 18px', borderRadius: 9999, border: 0, cursor: 'pointer', whiteSpace: 'nowrap'
        }}>Descargar App</button>
      </div>
    </header>
  );
};

export default SateriHeader;
