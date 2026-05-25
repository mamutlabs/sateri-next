import { notFound } from 'next/navigation';
import { getDocument, runQuery } from '@/lib/firestore';
import SEOPageClient from '@/components/SEOPageClient';

export const revalidate = 86400;

const FAQ_BY_CATEGORY = {
  'Climatización': [
    { q: '¿Cuánto tarda la reparación de un aire acondicionado?', a: 'La mayoría de las reparaciones se completan el mismo día de la visita, en 1–3 horas dependiendo del diagnóstico.' },
    { q: '¿Ofrecen garantía en las reparaciones de aire acondicionado?', a: 'Sí, todas nuestras reparaciones incluyen garantía por escrito sobre la mano de obra y los repuestos utilizados.' },
    { q: '¿Atienden el mismo día en Santiago?', a: 'Sí, disponemos de técnicos para atención el mismo día en los principales sectores de Santiago de los Caballeros.' },
  ],
  'Plomería': [
    { q: '¿Atienden emergencias de plomería el mismo día?', a: 'Sí, atendemos emergencias de plomería el mismo día en Santiago. Contáctenos por WhatsApp para asignación inmediata.' },
    { q: '¿Trabajan los sábados?', a: 'Sí, atendemos sábados de 9am a 2pm. Para urgencias fuera de horario, contáctenos por WhatsApp.' },
    { q: '¿Cuál es el proceso para contratar el servicio?', a: 'Complete el formulario o contáctenos por WhatsApp, le asignamos un técnico certificado y le confirmamos la hora de llegada.' },
  ],
  'Electricidad': [
    { q: '¿Los técnicos eléctricos están certificados?', a: 'Sí, todos nuestros técnicos eléctricos están certificados y pasan por un proceso de auditoría antes de ser asignados.' },
    { q: '¿Atienden fallos eléctricos de emergencia?', a: 'Sí, atendemos fallos eléctricos el mismo día en Santiago de los Caballeros durante horario laboral.' },
    { q: '¿Cuánto tarda un diagnóstico eléctrico?', a: 'Un diagnóstico eléctrico residencial generalmente toma entre 30 minutos y 2 horas según la complejidad del caso.' },
  ],
  'Línea Blanca': [
    { q: '¿Reparan todas las marcas de electrodomésticos?', a: 'Sí, nuestros técnicos están capacitados para reparar las principales marcas disponibles en el mercado dominicano.' },
    { q: '¿Tienen repuestos disponibles el mismo día?', a: 'Contamos con stock de repuestos para las marcas y modelos más comunes. En casos especiales gestionamos el repuesto rápidamente.' },
    { q: '¿Ofrecen garantía en reparaciones de electrodomésticos?', a: 'Sí, todas las reparaciones incluyen garantía por escrito sobre la mano de obra y los repuestos utilizados.' },
  ],
  'Lavandería': [
    { q: '¿Cuándo recogen y entregan la ropa?', a: 'Recogemos y entregamos en su hogar. El tiempo de entrega estándar es de 24–48 horas según el volumen.' },
    { q: '¿Cómo se cobra el servicio de lavandería?', a: 'El servicio se cobra por libra de ropa. Contáctenos para conocer las tarifas actuales en su sector.' },
    { q: '¿Recogen en todos los sectores de Santiago?', a: 'Sí, cubrimos los principales sectores de Santiago de los Caballeros. Indique su dirección en el formulario.' },
  ],
  'Limpieza': [
    { q: '¿Qué incluye el servicio de limpieza del hogar?', a: 'El servicio incluye limpieza profunda de habitaciones, baños, cocina, pisos y superficies. Detalle sus necesidades al solicitar.' },
    { q: '¿Los técnicos traen sus propios materiales de limpieza?', a: 'Sí, nuestro equipo llega con todos los materiales y equipos necesarios para realizar el servicio.' },
    { q: '¿Se puede programar limpieza recurrente?', a: 'Sí, ofrecemos planes de limpieza semanal, quincenal o mensual con tarifa preferencial por frecuencia.' },
  ],
  'Seguridad': [
    { q: '¿Qué sistemas de seguridad instalan?', a: 'Instalamos cámaras de videovigilancia, sistemas de alarma y controles de acceso para residencias y negocios en Santiago.' },
    { q: '¿Cuánto tarda la instalación de cámaras de seguridad?', a: 'Una instalación residencial estándar de 4–8 cámaras se completa en un día de trabajo.' },
    { q: '¿El sistema incluye acceso remoto desde el teléfono?', a: 'Sí, los sistemas que instalamos incluyen configuración de acceso remoto desde smartphone para monitoreo en tiempo real.' },
  ],
};

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
        type: 'website',
        images: [{
          url: data.imageUrl || '/assets/icon-512.png',
          width: 1200,
          height: 630,
          alt: data.h1,
        }],
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

  const location = seoData.h1.split(' en ')[1] ?? 'Santiago de los Caballeros';
  const faqs = FAQ_BY_CATEGORY[seoData.serviceCategory] ?? FAQ_BY_CATEGORY['Climatización'];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: seoData.h1,
    description: seoData.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SATERI',
      url: 'https://sateri.do',
      telephone: '+1-849-220-4375',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago de los Caballeros',
        addressRegion: 'Santiago',
        addressCountry: 'DO',
      },
    },
    areaServed: { '@type': 'City', name: location },
    serviceType: seoData.serviceCategory,
    url: `https://sateri.do/servicio/${slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SATERI', item: 'https://sateri.do' },
      { '@type': 'ListItem', position: 2, name: seoData.serviceCategory, item: `https://sateri.do/servicio/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SEOPageClient seoData={seoData} faqs={faqs} />
    </>
  );
}
