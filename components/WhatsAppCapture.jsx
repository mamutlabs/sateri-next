'use client';
import React, { useState } from 'react';

const BENEFITS = [
  { icon: 'local_offer', text: 'Ofertas exclusivas y descuentos de temporada' },
  { icon: 'notifications_active', text: 'Recordatorios de mantenimiento preventivo' },
  { icon: 'bolt', text: 'Prioridad en atención de emergencias' },
];

export default function WhatsAppCapture() {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    window.open(
      'https://wa.me/18492204375?text=' + encodeURIComponent(
        'Hola, quiero unirme a la lista de SATERI para recibir ofertas y recordatorios de mantenimiento.'
      ),
      '_blank'
    );
    setJoined(true);
  };

  return (
    <section style={{ background: '#f4f7f6', padding: '80px 24px' }}>
      <div style={{
        maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 24,
        padding: 'clamp(32px,5vw,48px)', border: '1px solid #e5e7eb', textAlign: 'center'
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16, background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>

        <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
          Lista SATERI en WhatsApp
        </h2>
        <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 15, margin: '0 0 32px', lineHeight: 1.6 }}>
          Únase a nuestro canal directo. Sin spam, sin algoritmos — solo ofertas reales y recordatorios útiles de mantenimiento.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
          {BENEFITS.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="material-symbols-outlined" style={{
                fontSize: 20, color: '#25D366', background: '#f0fdf4',
                borderRadius: 8, padding: 6, flexShrink: 0
              }}>{b.icon}</span>
              <span style={{ fontFamily: 'Inter', fontSize: 14, color: '#414846' }}>{b.text}</span>
            </div>
          ))}
        </div>

        {!joined ? (
          <button
            onClick={handleJoin}
            style={{
              background: '#25D366', color: '#fff', border: 0, fontFamily: 'Inter',
              fontWeight: 700, fontSize: 16, padding: '16px 40px', borderRadius: 9999,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: '0 4px 16px rgba(37,211,102,.3)', transition: 'transform 150ms'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Unirme a la lista SATERI
          </button>
        ) : (
          <div style={{
            background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16,
            padding: '16px 24px', display: 'inline-flex', alignItems: 'center', gap: 10
          }}>
            <span className="material-symbols-outlined" style={{ color: '#16a34a', fontSize: 22 }}>check_circle</span>
            <span style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#16a34a' }}>
              Se abrió WhatsApp — envíe el mensaje para unirse
            </span>
          </div>
        )}

        <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#9ca3af', marginTop: 16 }}>
          Máximo 2 mensajes por semana. Puede salirse en cualquier momento.
        </p>
      </div>
    </section>
  );
}
