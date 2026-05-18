'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';
import SEOContent from './SEOContent';

const TESTIMONIALS = [
  { name: 'María González', sector: 'Villa Olga', rating: 5, text: 'Llegaron el mismo día, repararon el A/C en menos de dos horas y dejaron todo limpio. El técnico fue muy profesional.' },
  { name: 'Carlos Marte', sector: 'Los Jardines', rating: 5, text: 'Excelente servicio. Me dieron el diagnóstico y el precio antes de empezar. Sin sorpresas. Lo recomiendo totalmente.' },
  { name: 'Laura Féliz', sector: 'Cerros de Gurabo', rating: 5, text: 'Ya los he llamado dos veces y siempre la misma calidad. Técnicos puntuales y honestos. SATERI es mi opción fija.' },
];

export default function SEOPageClient({ seoData }) {
  const router = useRouter();
  const serviceName = seoData.h1.split(' en ')[0];
  const location = seoData.h1.split(' en ')[1] || 'Santiago';

  const scrollToForm = () => {
    const isMobile = window.innerWidth <= 768;
    const el = document.getElementById(isMobile ? 'seo-form-mobile' : 'seo-form-desktop');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', background: '#1a3c34', paddingTop: 80, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={seoData.imageUrl} alt={seoData.h1} decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .2, mixBlendMode: 'overlay' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #122c26, rgba(18,44,38,.95), rgba(18,44,38,.6))' }} />
        </div>
        <div className="seo-hero-grid" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
          <div>
            <button onClick={() => router.push('/')} aria-label="Volver a la página principal de SATERI" style={{ background: 'transparent', border: 0, color: '#a9cfc2', fontFamily: 'Inter', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: 24, padding: 0 }}>
              ← Volver al inicio
            </button>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 9999, padding: '8px 16px', backdropFilter: 'blur(12px)', marginBottom: 32 }}>
              <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>verified</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>{seoData.serviceCategory} Premium</span>
            </div>
            <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(36px,5vw,68px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 24px' }}>
              {seoData.h1}.
            </h1>
            <p style={{ fontWeight: 300, fontSize: 'clamp(16px,1.4vw,21px)', color: '#a9cfc2', lineHeight: 1.55, margin: 0, maxWidth: 520 }}>
              {seoData.heroText}
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(seoData.benefits || []).map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,.9)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 20 }}>check_circle</span>
                  <span style={{ fontFamily: 'Inter' }}>{b}</span>
                </div>
              ))}
            </div>
            {/* Mobile CTA button */}
            <button
              onClick={scrollToForm}
              aria-label={`Solicitar servicio de ${seoData.h1}`}
              className="seo-mobile-cta"
              style={{ display: 'none', marginTop: 32, background: '#96f996', color: '#122c26', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, padding: '16px 32px', borderRadius: 9999, border: 0, cursor: 'pointer', width: '100%' }}
            >
              Solicitar servicio ahora →
            </button>
          </div>
          <div id="seo-form-desktop" className="seo-hero-form">
            <ContactForm initialService={serviceName} />
          </div>
        </div>
      </section>

      {/* ── MOBILE FORM (below hero on small screens) ── */}
      <div id="seo-form-mobile" className="seo-mobile-form" style={{ display: 'none', padding: '48px 24px', background: '#f4f7f6' }}>
        <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 28, fontWeight: 700, color: '#122c26', marginBottom: 24, textAlign: 'center' }}>
          Solicite su servicio ahora
        </h2>
        <ContactForm initialService={serviceName} />
      </div>

      {/* ── SEO CONTENT ── */}
      <SEOContent paragraphs={seoData.content ? seoData.content.split('\n') : []} />

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#f59e0b', fontSize: 20 }}>★</span>)}
            </div>
            <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
              Lo que dicen nuestros clientes
            </h2>
            <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 16 }}>
              Clientes reales en {location} y toda el área de Santiago.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#f4f7f6', borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#f59e0b', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'Inter', color: '#414846', lineHeight: 1.6, fontSize: 15, margin: 0 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#122c26', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#96f996', fontWeight: 700, fontFamily: 'Inter', fontSize: 16 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 600, color: '#122c26', fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 13 }}>{t.sector}, Santiago</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: '#122c26', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#96f996', display: 'block', marginBottom: 16 }}>home_repair_service</span>
          <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
            ¿Listo para resolver su problema hoy?
          </h2>
          <p style={{ fontFamily: 'Inter', color: '#a9cfc2', fontSize: 18, margin: '0 0 40px', lineHeight: 1.6 }}>
            Un técnico certificado disponible en {location}. Le contactamos en menos de 30 minutos durante horario laboral.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={scrollToForm}
              aria-label={`Solicitar servicio de ${seoData.h1}`}
              style={{ background: '#96f996', color: '#122c26', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, padding: '18px 40px', borderRadius: 9999, border: 0, cursor: 'pointer', boxShadow: '0 4px 24px rgba(150,249,150,.3)' }}
            >
              Solicitar servicio →
            </button>
            <a
              href="https://wa.me/18492204375?text=Hola%2C%20necesito%20un%20servicio%20de%20SATERI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              style={{ background: '#25D366', color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 16, padding: '18px 40px', borderRadius: 9999, border: 0, cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
          <p style={{ fontFamily: 'Inter', color: 'rgba(255,255,255,.4)', fontSize: 13, marginTop: 24 }}>
            Lunes a Viernes 8am–6pm · Sábados 9am–2pm
          </p>
        </div>
      </section>
    </>
  );
}
