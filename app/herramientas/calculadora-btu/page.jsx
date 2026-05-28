import BTUCalculator from '@/components/BTUCalculator';

export const metadata = {
  title: 'Calculadora de BTU — ¿Qué aire acondicionado necesito?',
  description: 'Calcule gratis la capacidad exacta de aire acondicionado para su espacio en Santiago de los Caballeros. Herramienta interactiva de SATERI con ajuste por clima tropical.',
  alternates: { canonical: 'https://sateri.do/herramientas/calculadora-btu' },
  openGraph: {
    title: 'Calculadora de BTU — SATERI',
    description: 'Descubra qué capacidad de aire acondicionado necesita su hogar u oficina en Santiago. Herramienta gratuita con ajuste por clima tropical.',
    url: 'https://sateri.do/herramientas/calculadora-btu',
    type: 'website',
  },
};

export default function CalculadoraBTUPage() {
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Calculadora de BTU — SATERI',
    description: 'Herramienta interactiva para calcular la capacidad de aire acondicionado necesaria según el tamaño del espacio, tipo de habitación, exposición solar y ocupantes.',
    url: 'https://sateri.do/herramientas/calculadora-btu',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'DOP',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'SATERI',
      url: 'https://sateri.do',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuántos BTU necesito para mi habitación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La regla general para clima tropical como el de Santiago de los Caballeros es 600 BTU por metro cuadrado. Una habitación de 20m² necesita aproximadamente 12,000 BTU (1 tonelada). Factores como exposición solar directa, cantidad de personas y electrodomésticos pueden aumentar la necesidad hasta un 30%.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaño de aire acondicionado necesito para una sala de 30m²?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para una sala de 30m² en Santiago, necesita entre 18,000 y 24,000 BTU dependiendo de la exposición solar y la cantidad de personas. Si recibe sol directo por la tarde, opte por 24,000 BTU (2 toneladas). SATERI puede evaluar su espacio y recomendar el equipo exacto.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es mejor un aire inverter o convencional en República Dominicana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En República Dominicana, un aire inverter ahorra entre 30-60% en la factura eléctrica comparado con uno convencional, porque ajusta la velocidad del compresor en lugar de encender y apagar constantemente. La inversión se recupera en 1-2 años de uso continuo.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: '#122c26', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.2)', borderRadius: 9999, padding: '8px 20px',
            marginBottom: 24
          }}>
            <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>construction</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
              Herramienta gratuita SATERI
            </span>
          </div>
          <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, margin: '0 0 16px' }}>
            Calculadora de BTU
          </h1>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(16px,1.4vw,19px)', color: '#a9cfc2', lineHeight: 1.6, margin: 0 }}>
            Descubra la capacidad exacta de aire acondicionado que necesita su espacio. Ajustado para el clima tropical de Santiago de los Caballeros.
          </p>
        </div>
      </section>

      <BTUCalculator />

      {/* Educational content */}
      <section style={{ background: '#f4f7f6', padding: '80px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 30, fontWeight: 700, color: '#122c26', marginBottom: 24 }}>
            Guía de BTU para clima tropical
          </h2>
          <p style={{ fontFamily: 'Inter', color: '#414846', lineHeight: 1.7, marginBottom: 24, fontSize: 17 }}>
            En <strong>Santiago de los Caballeros</strong>, las temperaturas superan los 30°C durante gran parte del año, lo que exige una mayor capacidad de enfriamiento comparado con climas templados. La regla de <strong>600 BTU por metro cuadrado</strong> es el punto de partida, pero varios factores pueden modificar este cálculo significativamente.
          </p>
          <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 22, fontWeight: 700, color: '#122c26', marginTop: 36, marginBottom: 16 }}>
            Factores que aumentan la necesidad de BTU
          </h3>
          <p style={{ fontFamily: 'Inter', color: '#414846', lineHeight: 1.7, marginBottom: 24, fontSize: 17 }}>
            La <strong>exposición solar directa</strong> puede incrementar la carga térmica hasta un 15%. Una cocina con estufas y hornos activos requiere un 30% más de capacidad. Los espacios con <strong>techos altos</strong> (más de 2.7m) o múltiples ventanas también necesitan equipos de mayor capacidad para mantener una temperatura confortable.
          </p>
          <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 22, fontWeight: 700, color: '#122c26', marginTop: 36, marginBottom: 16 }}>
            Tabla de referencia rápida
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter', fontSize: 15 }}>
              <thead>
                <tr style={{ background: '#122c26', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, borderRadius: '12px 0 0 0' }}>Área (m²)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>BTU recomendados</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>Toneladas</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, borderRadius: '0 12px 0 0' }}>Tipo de equipo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['10–15', '9,000', '0.75', 'Split pequeño'],
                  ['15–20', '12,000', '1', 'Split estándar'],
                  ['20–30', '18,000', '1.5', 'Split mediano'],
                  ['30–40', '24,000', '2', 'Split grande'],
                  ['40–60', '36,000', '3', 'Split comercial'],
                  ['60+', '48,000+', '4+', 'Central o multi-split'],
                ].map(([area, btu, ton, tipo], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{area}</td>
                    <td style={{ padding: '12px 16px' }}>{btu}</td>
                    <td style={{ padding: '12px 16px' }}>{ton}</td>
                    <td style={{ padding: '12px 16px', color: '#6b7280' }}>{tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: 'Inter', color: '#6b7280', fontSize: 13, marginTop: 16, fontStyle: 'italic' }}>
            * Valores de referencia para clima tropical (Santiago de los Caballeros, RD). El cálculo exacto depende de factores adicionales como aislamiento, orientación y uso del espacio. Use la calculadora arriba para un resultado personalizado.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#122c26', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>
            ¿Ya sabe qué necesita?
          </h2>
          <p style={{ fontFamily: 'Inter', color: '#a9cfc2', fontSize: 16, margin: '0 0 32px' }}>
            Un técnico SATERI puede instalar su aire acondicionado con garantía por escrito.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              background: '#96f996', color: '#122c26', fontFamily: 'Inter', fontWeight: 700,
              fontSize: 15, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none'
            }}>Solicitar instalación</a>
            <a href="https://wa.me/18492204375?text=Hola%2C%20necesito%20instalar%20un%20aire%20acondicionado" target="_blank" rel="noopener noreferrer" style={{
              background: '#25D366', color: '#fff', fontFamily: 'Inter', fontWeight: 700,
              fontSize: 15, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
