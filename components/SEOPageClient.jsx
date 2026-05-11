'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';
import SEOContent from './SEOContent';

export default function SEOPageClient({ seoData }) {
  const router = useRouter();
  const serviceName = seoData.h1.split(' en ')[0];

  return (
    <>
      <section style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', background: '#1a3c34', paddingTop: 80, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={seoData.imageUrl} alt={seoData.h1} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .2, mixBlendMode: 'overlay' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #122c26, rgba(18,44,38,.95), rgba(18,44,38,.6))' }} />
        </div>
        <div className="seo-hero-grid" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
          <div>
            <button onClick={() => router.push('/')} style={{ background: 'transparent', border: 0, color: '#a9cfc2', fontFamily: 'Inter', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', cursor: 'pointer', marginBottom: 24, padding: 0 }}>
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
          </div>
          <div className="seo-hero-form">
            <ContactForm initialService={serviceName} />
          </div>
        </div>
      </section>
      <SEOContent paragraphs={seoData.content ? seoData.content.split('\n') : []} />
    </>
  );
}
