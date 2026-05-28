import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs, getAllArticles } from '@/lib/blog-data';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: { absolute: `${article.metaTitle} | SATERI` },
    description: article.metaDescription,
    alternates: { canonical: `https://sateri.do/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://sateri.do/blog/${article.slug}`,
      type: 'article',
      article: {
        publishedTime: `${article.publishedAt}T08:00:00-04:00`,
        section: article.category,
      },
      images: [{ url: article.imageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

const CATEGORY_ICONS = {
  'Climatización': 'ac_unit',
  'Plomería': 'plumbing',
  'Electricidad': 'bolt',
  'Seguridad': 'videocam',
  'Línea Blanca': 'kitchen',
};

export default function BlogArticle({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const publishDate = new Date(article.publishedAt).toLocaleDateString('es-DO', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: article.imageUrl,
    datePublished: `${article.publishedAt}T08:00:00-04:00`,
    url: `https://sateri.do/blog/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: 'SATERI',
      url: 'https://sateri.do',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SATERI',
      url: 'https://sateri.do',
      logo: { '@type': 'ImageObject', url: 'https://sateri.do/assets/icon-512.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sateri.do/blog/${article.slug}`,
    },
    articleSection: article.category,
    wordCount: article.sections.reduce((sum, s) => sum + s.paragraphs.join(' ').split(' ').length, 0),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://sateri.do' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://sateri.do/blog' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://sateri.do/blog/${article.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'flex-end', background: '#1a3c34', paddingTop: 80 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25, mixBlendMode: 'overlay' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #122c26 10%, rgba(18,44,38,.8) 50%, rgba(18,44,38,.5))' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
          <Link href="/blog" style={{ fontFamily: 'Inter', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: '#a9cfc2', textDecoration: 'none' }}>
            ← Volver al blog
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', borderRadius: 9999, padding: '6px 14px', marginTop: 24, marginBottom: 20 }}>
            <span className="material-symbols-outlined" style={{ color: '#96f996', fontSize: 14 }}>
              {CATEGORY_ICONS[article.category] || 'build'}
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff' }}>
              {article.category}
            </span>
          </div>
          <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(28px,4.5vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontFamily: 'Inter', fontSize: 13, color: '#a9cfc2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>calendar_today</span>
              {publishDate}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>schedule</span>
              {article.readTime} min de lectura
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {article.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, color: '#122c26', margin: '0 0 16px', lineHeight: 1.2 }}>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} style={{ fontFamily: 'Inter', fontSize: 17, color: '#414846', lineHeight: 1.75, margin: '0 0 16px' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* CTA inline */}
          <div style={{
            background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 20,
            padding: 32, textAlign: 'center', marginTop: 48,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 36, color: '#122c26', marginBottom: 12, display: 'block' }}>home_repair_service</span>
            <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 24, fontWeight: 700, color: '#122c26', margin: '0 0 8px' }}>
              ¿Necesita un técnico de {article.category.toLowerCase()}?
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#6b7280', margin: '0 0 24px' }}>
              SATERI le asigna un técnico certificado en Santiago. Respuesta en menos de 30 minutos.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: '#122c26', color: '#fff', fontFamily: 'Inter', fontWeight: 700,
                fontSize: 14, padding: '14px 28px', borderRadius: 9999, textDecoration: 'none'
              }}>Solicitar servicio →</Link>
              <a href="https://wa.me/18492204375?text=Hola%2C%20necesito%20un%20servicio%20de%20SATERI" target="_blank" rel="noopener noreferrer" style={{
                background: '#25D366', color: '#fff', fontFamily: 'Inter', fontWeight: 700,
                fontSize: 14, padding: '14px 28px', borderRadius: 9999, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section style={{ background: '#f4f7f6', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#122c26', textAlign: 'center', margin: '0 0 40px' }}>
              Otros artículos que le pueden interesar
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                    <div style={{ position: 'relative', paddingTop: '50%', overflow: 'hidden' }}>
                      <img src={r.imageUrl} alt={r.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 20 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#96f996' }}>
                          {CATEGORY_ICONS[r.category] || 'build'}
                        </span>
                        <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6b7280' }}>
                          {r.category}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: '"Playfair Display",serif', fontSize: 18, fontWeight: 700, color: '#122c26', margin: 0, lineHeight: 1.3 }}>
                        {r.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
