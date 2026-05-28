'use client';
import React from 'react';
import Link from 'next/link';

const LINKS = [
  { label: 'Calculadora BTU', to: '/herramientas/calculadora-btu' },
  { label: 'Privacidad', to: '/privacidad' },
  { label: 'Términos',   to: '/terminos'   },
  { label: 'Contacto',   to: '/contact'    },
];

const linkStyle = {
  fontFamily: 'Inter', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 300ms'
};

const SateriFooter = () => (
  <footer style={{ background: '#121414', padding: '64px 32px', marginTop: 'auto' }}>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: 1280, margin: '0 auto', flexWrap: 'wrap', gap: 16
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src="/assets/icon-512.png" alt="" style={{ height: 40, width: 40, opacity: .5, filter: 'grayscale(1)', borderRadius: 8 }} />
        <span style={{
          fontFamily: 'Inter', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.4)'
        }}>© 2026 SATERI. All rights reserved.</span>
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {LINKS.map(({ label, to }) => (
          <Link
            key={to}
            href={to}
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.5)'}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default SateriFooter;
