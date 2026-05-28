'use client';
import React, { useState } from 'react';

const ROOM_TYPES = [
  { label: 'Habitación', icon: 'bed', factor: 1.0 },
  { label: 'Sala / Comedor', icon: 'living', factor: 1.1 },
  { label: 'Oficina', icon: 'desktop_windows', factor: 1.15 },
  { label: 'Cocina', icon: 'cooking', factor: 1.3 },
  { label: 'Local comercial', icon: 'storefront', factor: 1.4 },
];

const SUN_OPTIONS = [
  { label: 'Poca luz solar', value: 0.9, icon: 'cloud' },
  { label: 'Luz moderada', value: 1.0, icon: 'partly_cloudy_day' },
  { label: 'Sol directo', value: 1.15, icon: 'wb_sunny' },
];

const PEOPLE_OPTIONS = [
  { label: '1–2 personas', value: 0, icon: 'person' },
  { label: '3–5 personas', value: 2000, icon: 'group' },
  { label: '6+ personas', value: 4000, icon: 'groups' },
];

function calcBTU(area, roomType, sun, people) {
  // Base: 600 BTU per m² (tropical climate like DR)
  const base = area * 600;
  const adjusted = base * roomType.factor * sun.value + people.value;
  return Math.ceil(adjusted / 1000) * 1000; // round to nearest 1000
}

function getRecommendation(btu) {
  if (btu <= 9000) return { tons: '0.75', label: '9,000 BTU', size: 'Split pequeño' };
  if (btu <= 12000) return { tons: '1', label: '12,000 BTU', size: 'Split 1 tonelada' };
  if (btu <= 18000) return { tons: '1.5', label: '18,000 BTU', size: 'Split 1.5 toneladas' };
  if (btu <= 24000) return { tons: '2', label: '24,000 BTU', size: 'Split 2 toneladas' };
  if (btu <= 36000) return { tons: '3', label: '36,000 BTU', size: 'Split 3 toneladas' };
  return { tons: '4+', label: `${(btu / 1000).toFixed(0)},000 BTU`, size: 'Sistema central o multi-split' };
}

export default function BTUCalculator({ compact = false, onRequestService }) {
  const [area, setArea] = useState('');
  const [roomType, setRoomType] = useState(ROOM_TYPES[0]);
  const [sun, setSun] = useState(SUN_OPTIONS[1]);
  const [people, setPeople] = useState(PEOPLE_OPTIONS[0]);
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    const a = parseFloat(area);
    if (!a || a <= 0) return;
    const btu = calcBTU(a, roomType, sun, people);
    setResult({ btu, ...getRecommendation(btu) });
  };

  const sectionStyle = compact ? { padding: '48px 24px' } : { padding: '80px 24px' };

  return (
    <section style={{ background: '#fff', ...sectionStyle }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {!compact && (
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 36, color: '#122c26', display: 'block', marginBottom: 12 }}>calculate</span>
            <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
              Calculadora de BTU
            </h2>
            <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 16, margin: 0 }}>
              Calcule la capacidad exacta de aire acondicionado que necesita su espacio en Santiago.
            </p>
          </div>
        )}
        {compact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#96f996', background: '#122c26', borderRadius: 12, padding: 8 }}>calculate</span>
            <div>
              <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 22, fontWeight: 700, color: '#122c26', margin: 0 }}>
                Calculadora de BTU
              </h3>
              <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 13, margin: 0 }}>
                Descubra qué capacidad necesita su espacio
              </p>
            </div>
          </div>
        )}

        <div style={{ background: '#f4f7f6', borderRadius: 20, padding: 'clamp(24px,4vw,32px)', border: '1px solid #e5e7eb' }}>
          {/* Area input */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#122c26', display: 'block', marginBottom: 8 }}>
              Tamaño del espacio (m²)
            </label>
            <input
              type="number"
              value={area}
              onChange={e => setArea(e.target.value)}
              placeholder="Ej. 20"
              min="1"
              max="500"
              style={{
                width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid #d1d5db',
                fontFamily: 'Inter', fontSize: 16, background: '#fff', outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Room type */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#122c26', display: 'block', marginBottom: 8 }}>
              Tipo de espacio
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {ROOM_TYPES.map(rt => (
                <button
                  key={rt.label}
                  onClick={() => setRoomType(rt)}
                  style={{
                    padding: '10px 16px', borderRadius: 10, border: '1px solid',
                    borderColor: roomType === rt ? '#122c26' : '#d1d5db',
                    background: roomType === rt ? '#122c26' : '#fff',
                    color: roomType === rt ? '#fff' : '#414846',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6, transition: 'all 200ms'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{rt.icon}</span>
                  {rt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sun exposure */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#122c26', display: 'block', marginBottom: 8 }}>
              Exposición solar
            </label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SUN_OPTIONS.map(s => (
                <button
                  key={s.label}
                  onClick={() => setSun(s)}
                  style={{
                    flex: 1, minWidth: 120, padding: '10px 16px', borderRadius: 10, border: '1px solid',
                    borderColor: sun === s ? '#122c26' : '#d1d5db',
                    background: sun === s ? '#122c26' : '#fff',
                    color: sun === s ? '#fff' : '#414846',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', transition: 'all 200ms'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* People */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#122c26', display: 'block', marginBottom: 8 }}>
              Personas en el espacio
            </label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {PEOPLE_OPTIONS.map(p => (
                <button
                  key={p.label}
                  onClick={() => setPeople(p)}
                  style={{
                    flex: 1, minWidth: 120, padding: '10px 16px', borderRadius: 10, border: '1px solid',
                    borderColor: people === p ? '#122c26' : '#d1d5db',
                    background: people === p ? '#122c26' : '#fff',
                    color: people === p ? '#fff' : '#414846',
                    fontFamily: 'Inter', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', transition: 'all 200ms'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{p.icon}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalc}
            style={{
              width: '100%', padding: '16px', borderRadius: 12, border: 0,
              background: '#122c26', color: '#96f996', fontFamily: 'Inter',
              fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'transform 150ms'
            }}
          >
            Calcular BTU necesarios
          </button>
        </div>

        {/* Result */}
        {result && (
          <div style={{
            marginTop: 24, background: '#122c26', borderRadius: 20, padding: 32,
            textAlign: 'center', animation: 'fadeIn 400ms ease'
          }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#96f996', marginBottom: 8 }}>
              Resultado
            </div>
            <div style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
              {result.label}
            </div>
            <div style={{ fontFamily: 'Inter', fontSize: 16, color: '#a9cfc2', marginTop: 8 }}>
              {result.size} ({result.tons} ton)
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,.5)', marginTop: 16, marginBottom: 24, lineHeight: 1.5 }}>
              Para {area} m² de {roomType.label.toLowerCase()} en Santiago de los Caballeros.
              <br />Incluye ajuste por clima tropical y exposición solar.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  if (onRequestService) {
                    onRequestService();
                  } else {
                    window.location.href = '/contact';
                  }
                }}
                style={{
                  background: '#96f996', color: '#122c26', border: 0, fontFamily: 'Inter',
                  fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 9999, cursor: 'pointer'
                }}
              >
                Solicitar instalación
              </button>
              <a
                href={`https://wa.me/18492204375?text=${encodeURIComponent(`Hola, necesito un aire de ${result.label} para un espacio de ${area}m² (${roomType.label}). ¿Tienen disponibilidad?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366', color: '#fff', border: 0, fontFamily: 'Inter',
                  fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 9999, cursor: 'pointer',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
