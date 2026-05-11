'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const GraciasPage = () => {
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre');

  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6', paddingTop: 80 }}>

      {/* Hero confirm — dark band */}
      <section style={{
        background: 'linear-gradient(135deg, #122c26 0%, #1a3c34 100%)',
        padding: 'clamp(64px,8vw,96px) 24px'
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 9999,
            background: 'rgba(150,249,150,.15)', border: '1px solid rgba(150,249,150,.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px'
          }}>
            <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 36 }}>task_alt</span>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)',
            borderRadius: 9999, padding: '8px 16px', backdropFilter: 'blur(12px)', marginBottom: 28
          }}>
            <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>verified</span>
            <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
              Solicitud recibida
            </span>
          </div>

          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(36px,5vw,60px)', fontWeight: 700,
            color: '#fff', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 20px'
          }}>
            {nombre ? `Gracias, ${nombre}.` : 'Solicitud recibida.'}
          </h1>

          <p style={{
            fontFamily: 'Inter', fontWeight: 300,
            fontSize: 'clamp(16px,1.4vw,20px)', color: '#a9cfc2',
            lineHeight: 1.6, margin: '0 auto', maxWidth: 520
          }}>
            Hemos registrado su solicitud. Un técnico certificado de SATERI le contactará en menos de 30 minutos durante horario laboral.
          </p>
        </div>
      </section>

      {/* App install CTA */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* Header común */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 28,
            background: '#fff', borderRadius: 24, padding: 28,
            boxShadow: '0 4px 24px rgba(18,44,38,.08)', border: '1px solid rgba(18,44,38,.08)' }}>
            <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12,
              background: '#122c26', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 22 }}>smartphone</span>
            </div>
            <div>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: '#122c26', margin: '0 0 8px' }}>
                Instale la app para dar seguimiento
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#4A5552', lineHeight: 1.6, margin: 0 }}>
                El estado de su servicio, la confirmación del técnico y la hora de llegada están disponibles <strong>exclusivamente en la app SATERI</strong>.
              </p>
            </div>
          </div>

          {/* MÓVIL: pasos + botón */}
          <div className="gracias-mobile">
            <div style={{ background: '#fff', borderRadius: 24, padding: 'clamp(24px,4vw,40px)',
              boxShadow: '0 4px 24px rgba(18,44,38,.08)', border: '1px solid rgba(18,44,38,.08)', marginBottom: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  { n: '1', ico: 'open_in_browser',    t: 'Abra app.sateri.do en este navegador', sub: 'Ya está aquí si llega desde el link' },
                  { n: '2', ico: 'ios_share',           t: 'Toque el ícono de compartir', sub: 'Caja con flecha ↑ en Safari · Menú ⋮ en Chrome' },
                  { n: '3', ico: 'add_to_home_screen',  t: 'Seleccione "Añadir a pantalla de inicio"', sub: 'Queda instalada como cualquier otra app' },
                ].map(({ n, ico, t, sub }) => (
                  <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 14,
                    background: '#f4f7f6', borderRadius: 14, padding: '14px 16px' }}>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 9999,
                      background: '#122c26', color: '#96f996', fontFamily: 'Inter', fontWeight: 700,
                      fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>
                    <span className="material-symbols-outlined" style={{ color: '#122c26', fontSize: 20, flexShrink: 0 }}>{ico}</span>
                    <div>
                      <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 14, color: '#122c26' }}>{t}</div>
                      <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#717976', marginTop: 2 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://app.sateri.do" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                background: '#122c26', color: '#fff', textDecoration: 'none',
                fontFamily: 'Inter', fontWeight: 700, fontSize: 15,
                padding: '18px 32px', borderRadius: 9999, width: '100%', boxSizing: 'border-box'
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add_to_home_screen</span>
                Abrir app SATERI
              </a>
            </div>
          </div>

          {/* DESKTOP: QR prominente */}
          <div className="gracias-desktop">
            <div style={{ background: '#fff', borderRadius: 24, padding: 40,
              boxShadow: '0 4px 24px rgba(18,44,38,.08)', border: '1px solid rgba(18,44,38,.08)',
              display: 'flex', gap: 40, alignItems: 'center' }}>
              <div style={{ flexShrink: 0, background: '#122c26', borderRadius: 20, padding: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=96f996&bgcolor=122c26&data=https://app.sateri.do"
                  alt="QR Code SATERI" style={{ width: 140, height: 140, borderRadius: 8 }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em',
                  textTransform: 'uppercase', color: '#fff', background: '#122c26',
                  display: 'inline-block', padding: '4px 12px', borderRadius: 9999, marginBottom: 16 }}>
                  Instalar desde su teléfono
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
                  Escanee el código QR
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#4A5552', lineHeight: 1.6, margin: '0 0 20px' }}>
                  Apunte la cámara de su teléfono al código para abrir <strong>app.sateri.do</strong> directamente. Una vez dentro, añada el ícono a su pantalla de inicio para instalar la app.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Safari (iPhone): compartir → Añadir', 'Chrome (Android): menú ⋮ → Añadir'].map(t => (
                    <span key={t} style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5552',
                      background: '#f4f7f6', padding: '6px 12px', borderRadius: 9999 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button onClick={() => router.push('/')} style={{
              background: 'transparent', border: 0, fontFamily: 'Inter', fontSize: 13,
              color: '#717976', cursor: 'pointer', letterSpacing: '.04em'
            }}>
              ← Volver al inicio
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default GraciasPage;
