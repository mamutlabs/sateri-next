import Link from 'next/link';
import { getAllArticles } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog — Consejos de mantenimiento y hogar',
  description: 'Artículos y guías prácticas sobre climatización, plomería, electricidad y seguridad para hogares y negocios en Santiago de los Caballeros.',
  alternates: { canonical: 'https://sateri.do/blog' },
  openGraph: {
    title: 'Blog — SATERI',
    description: 'Consejos de mantenimiento y hogar para Santiago de los Caballeros.',
    url: 'https://sateri.do/blog',
    type: 'website',
  },
};

const CATEGORY_ICONS = {
  'Climatización': 'ac_unit',
  'Plomería': 'plumbing',
  'Electricidad': 'bolt',
  'Seguridad': 'videocam',
  'Línea Blanca': 'kitchen',
};

export default function BlogIndex() {
  const articles = getAllArticles();

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog SATERI',
    description: 'Artículos y guías prácticas sobre servicios técnicos del hogar.',
    url: 'https://sateri.do/blog',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'SATERI',
      url: 'https://sateri.do',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://sateri.do/blog/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />

      {/* Hero */}
      <section style={{ background: '#122c26', padding: '120px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.2)', borderRadius: 9999, padding: '8px 20px',
            marginBottom: 24
          }}>
            <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>article</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#fff' }}>
              Blog SATERI
            </span>
          </div>
          <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, margin: '0 0 16px' }}>
            Consejos para su hogar
          </h1>
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(16px,1.4vw,19px)', color: '#a9cfc2', lineHeight: 1.6, margin: 0 }}>
            Guías prácticas sobre climatización, plomería, electricidad y seguridad para hogares y negocios en Santiago.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ background: '#f4f7f6', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <article style={{
                  background: '#fff', borderRadius: 20, overflow: 'hidden',
                  border: '1px solid #e5e7eb', transition: 'transform 200ms, box-shadow 200ms',
                  display: 'flex', flexDirection: 'column', height: '100%',
                }}>
                  <div style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      loading="lazy"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'rgba(18,44,38,.85)', backdropFilter: 'blur(8px)',
                      borderRadius: 9999, padding: '6px 14px',
                    }}>
                      <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>
                        {CATEGORY_ICONS[article.category] || 'build'}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff' }}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h2 style={{
                      fontFamily: '"Playfair Display",serif', fontSize: 22, fontWeight: 700,
                      color: '#122c26', lineHeight: 1.25, margin: '0 0 12px',
                    }}>
                      {article.title}
                    </h2>
                    <p style={{
                      fontFamily: 'Inter', fontSize: 14, color: '#6b7280',
                      lineHeight: 1.6, margin: '0 0 20px', flex: 1,
                    }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#9ca3af' }}>schedule</span>
                        <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#9ca3af' }}>
                          {article.readTime} min de lectura
                        </span>
                      </div>
                      <span style={{
                        fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#122c26',
                        display: 'flex', alignItems: 'center', gap: 4,
                      }}>
                        Leer más
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#122c26', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>
            ¿Necesita ayuda profesional?
          </h2>
          <p style={{ fontFamily: 'Inter', color: '#a9cfc2', fontSize: 16, margin: '0 0 32px' }}>
            Nuestros técnicos certificados están disponibles en Santiago de los Caballeros.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#96f996', color: '#122c26', fontFamily: 'Inter', fontWeight: 700,
              fontSize: 15, padding: '16px 32px', borderRadius: 9999, textDecoration: 'none'
            }}>Solicitar servicio</Link>
            <a href="https://wa.me/18492204375?text=Hola%2C%20necesito%20un%20servicio%20de%20SATERI" target="_blank" rel="noopener noreferrer" style={{
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
