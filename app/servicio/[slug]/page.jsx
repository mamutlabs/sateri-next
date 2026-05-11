import { notFound } from 'next/navigation';
import { getDocument, runQuery } from '@/lib/firestore';
import SEOPageClient from '@/components/SEOPageClient';

export const revalidate = 86400; // revalidate every 24 hours

export async function generateStaticParams() {
  try {
    const pages = await runQuery('pages', [{ field: 'status', value: 'published' }]);
    return pages.map(p => ({ slug: p.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const data = await getDocument('pages', slug);
    if (!data) return {};
    return {
      title: { absolute: data.metaTitle },
      description: data.metaDescription,
      alternates: { canonical: `https://sateri.do/servicio/${slug}` },
      openGraph: {
        title: data.metaTitle,
        description: data.metaDescription,
        url: `https://sateri.do/servicio/${slug}`,
        images: [{ url: data.imageUrl || '/assets/icon-512.png' }],
      },
    };
  } catch {
    return {};
  }
}

export default async function SEOPage({ params }) {
  const { slug } = await params;
  const seoData = await getDocument('pages', slug);
  if (!seoData) notFound();

  // JSON-LD schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seoData.h1,
    description: seoData.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SATERI',
      url: 'https://sateri.do',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago de los Caballeros',
        addressRegion: 'Santiago',
        addressCountry: 'DO',
      },
    },
    areaServed: seoData.h1.split(' en ')[1] ?? 'Santiago de los Caballeros',
    serviceType: seoData.serviceCategory,
    url: `https://sateri.do/servicio/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SEOPageClient seoData={seoData} />
    </>
  );
}
