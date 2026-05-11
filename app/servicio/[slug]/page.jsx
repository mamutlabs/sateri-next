import { doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { notFound } from 'next/navigation';
import SEOPageClient from '@/components/SEOPageClient';

export const revalidate = 86400; // revalidate every 24 hours

export async function generateStaticParams() {
  try {
    const q = query(collection(db, 'pages'), where('status', '==', 'published'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(d => ({ slug: d.id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const docSnap = await getDoc(doc(db, 'pages', slug));
    if (!docSnap.exists()) return {};
    const data = docSnap.data();
    return {
      title: data.metaTitle,
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
  const docSnap = await getDoc(doc(db, 'pages', slug));
  if (!docSnap.exists()) notFound();
  const seoData = docSnap.data();

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
