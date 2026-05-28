'use client';
import React from 'react';

const STATS = [
  { icon: 'verified_user', value: '100%', label: 'Técnicos auditados', desc: 'Verificamos antecedentes, certificaciones y experiencia antes de cada asignación' },
  { icon: 'workspace_premium', value: '3+ años', label: 'Experiencia promedio', desc: 'Cada técnico tiene mínimo 3 años de experiencia comprobable en su especialidad' },
  { icon: 'shield', value: 'Garantía', label: 'Por escrito', desc: 'Toda reparación incluye garantía documentada sobre mano de obra y repuestos' },
  { icon: 'schedule', value: '< 30 min', label: 'Tiempo de respuesta', desc: 'Le confirmamos un técnico disponible en menos de 30 minutos en horario laboral' },
];

const CERTS = [
  'Técnicos certificados en refrigeración y climatización',
  'Plomeros con licencia y experiencia verificada',
  'Electricistas certificados con conocimiento del código eléctrico dominicano',
  'Auditoría de calidad posterior a cada servicio',
  'Seguro de responsabilidad civil en cada visita',
];

export default function TrustSignals({ serviceName = 'nuestros servicios' }) {
  return (
    <section style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, background: '#f0fdf4',
            border: '1px solid #bbf7d0', borderRadius: 9999, padding: '8px 20px', marginBottom: 16
          }}>
            <span className="material-symbols-outlined" style={{ color: '#16a34a', fontSize: 16 }}>verified</span>
            <span style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#16a34a' }}>
              Compromiso SATERI
            </span>
          </div>
          <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
            Por qué confiar en SATERI
          </h2>
          <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 16, margin: 0, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            No somos un directorio. Auditamos, asignamos y garantizamos cada servicio.
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 48 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              background: '#f4f7f6', borderRadius: 20, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 12
            }}>
              <span className="material-symbols-outlined" style={{
                fontSize: 28, color: '#fff', background: '#122c26',
                borderRadius: 14, padding: 10, width: 'fit-content'
              }}>{s.icon}</span>
              <div style={{ fontFamily: '"Playfair Display",serif', fontSize: 28, fontWeight: 700, color: '#122c26' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#122c26' }}>
                {s.label}
              </div>
              <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications list */}
        <div style={{
          background: '#122c26', borderRadius: 24, padding: 'clamp(32px,4vw,48px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 48px', alignItems: 'start'
        }} className="trust-certs-grid">
          <div>
            <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 24, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
              Estándares de calidad
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#a9cfc2', margin: 0, lineHeight: 1.6 }}>
              Cada técnico de SATERI pasa por un proceso de auditoría antes de ser asignado a {serviceName.toLowerCase()}.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CERTS.map((cert, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 18, flexShrink: 0, marginTop: 2 }}>check_circle</span>
                <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,.85)', lineHeight: 1.5 }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.trust-certs-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
