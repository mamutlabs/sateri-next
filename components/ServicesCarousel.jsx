'use client';
import React from 'react';
// ServicesCarousel.jsx — horizontal scrolling carousel of service categories.
// Replaces the dense card grid. Each category opens to a sub-list of services.

const CATEGORIES = [
  {
    key: 'climatizacion', name: 'Climatización', serviceCategory: 'Climatización', icon: 'ac_unit',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Aires Split, Inverter y Centrales. Diagnóstico, recarga y reparación.',
    services: ['Mantenimiento preventivo', 'Reparación Inverter', 'Instalación', 'Reparación de tarjetas']
  },
  {
    key: 'plomeria', name: 'Plomería', serviceCategory: 'Plomería', icon: 'plumbing',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Emergencias 24h, destapes con máquina, fugas y bombas de agua.',
    services: ['Plomero 24 horas', 'Destape con máquina', 'Filtraciones', 'Bombas de agua']
  },
  {
    key: 'electricidad', name: 'Electricidad', serviceCategory: 'Electricidad', icon: 'electrical_services',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Cortocircuitos, breakers, paneles y diagnóstico seguro.',
    services: ['Electricista 24h', 'Cortocircuitos', 'Breakers y paneles', 'Lámparas y abanicos']
  },
  {
    key: 'linea-blanca', name: 'Línea Blanca', serviceCategory: 'Línea Blanca', icon: 'kitchen',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Lavadoras, neveras, secadoras, estufas y hornos. Todas las marcas.',
    services: ['Lavadoras', 'Neveras Inverter', 'Secadoras', 'Estufas y hornos']
  },
  {
    key: 'seguridad', name: 'Seguridad', serviceCategory: 'Seguridad', icon: 'videocam',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    blurb: 'CCTV, intercomunicadores y control de acceso para su hogar.',
    services: ['Cámaras CCTV', 'Intercoms', 'Control de acceso', 'Grabación 24/7']
  },
  {
    key: 'lavanderia', name: 'Lavandería', serviceCategory: 'Lavandería', icon: 'local_laundry_service',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Recogida y entrega a domicilio. Lavado, secado y planchado premium.',
    services: ['Recogida a domicilio', 'Lavado premium', 'Planchado', 'Tintorería']
  },
  {
    key: 'limpieza', name: 'Limpieza', serviceCategory: 'Limpieza', icon: 'cleaning_services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Limpieza profunda de hogares, post-construcción y muebles.',
    services: ['Limpieza profunda', 'Post-mudanza', 'Lavado de muebles', 'Cristales']
  }
];

const ServicesCarousel = ({ onSelectCategory }) => {
  const scrollRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const w = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#fff', padding: '120px 0 96px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', marginBottom: 48,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#96f996', marginBottom: 12 }}>
            <span style={{ color: '#122c26' }}>● </span>Categorías de servicio
          </div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 700, color: '#122c26', margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-.02em' }}>
            Todo lo que su hogar necesita,<br/>
            <em style={{ fontStyle: 'italic', color: '#717976', fontWeight: 400 }}>en un solo lugar.</em>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 17, color: '#414846', lineHeight: 1.6, margin: 0 }}>
            Siete categorías. Decenas de servicios. Un mismo estándar de calidad.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scrollBy(-1)} style={navBtn}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={() => scrollBy(1)} style={navBtn}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div ref={scrollRef} style={{
        display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory',
        padding: '12px 32px 32px', scrollPaddingLeft: 32,
        scrollbarWidth: 'none'
      }}>
        <div style={{ flexShrink: 0, width: 'calc(max(0px, (100vw - 1280px) / 2))' }} />
        {CATEGORIES.map((cat, i) => (
          <div key={cat.key} data-card onClick={() => onSelectCategory && onSelectCategory(cat)}
            style={{
              flexShrink: 0, width: 360, height: 480,
              borderRadius: 28, overflow: 'hidden', position: 'relative',
              scrollSnapAlign: 'start', cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(18,44,38,.12)',
              transition: 'transform 300ms cubic-bezier(.2,.7,.2,1), box-shadow 300ms'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(18,44,38,.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(18,44,38,.12)'; }}>

            <img src={cat.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,44,38,.95) 20%, rgba(18,44,38,.4) 60%, transparent 100%)' }} />

            <div style={{
              position: 'absolute', top: 24, left: 24,
              background: 'rgba(255,255,255,.95)', borderRadius: 14, padding: 10,
              backdropFilter: 'blur(8px)'
            }}>
              <span className="material-symbols-outlined" style={{ color: '#122c26', fontSize: 28, fontVariationSettings: "'wght' 400" }}>{cat.icon}</span>
            </div>

            <div style={{ position: 'absolute', top: 24, right: 24,
              fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,.7)', background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,.15)', padding: '6px 12px', borderRadius: 9999 }}>
              {String(i + 1).padStart(2, '0')} / {CATEGORIES.length.toString().padStart(2, '0')}
            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, color: '#fff' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 32, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-.01em', color: '#fff' }}>
                {cat.name}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,.8)', margin: '0 0 20px', lineHeight: 1.5 }}>
                {cat.blurb}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.services.map(s => (
                  <li key={s} style={{
                    fontFamily: 'Inter', fontSize: 12, fontWeight: 500,
                    background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.15)',
                    padding: '5px 11px', borderRadius: 9999, color: 'rgba(255,255,255,.9)'
                  }}>{s}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#96f996' }}>
                Ver todos los servicios <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
        <div style={{ flexShrink: 0, width: 32 }} />
      </div>
    </section>
  );
};

const navBtn = {
  width: 48, height: 48, borderRadius: 9999, background: '#fff', border: '1px solid #E1E5E3',
  color: '#122c26', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 200ms'
};




export default ServicesCarousel;
