/**
 * generate-sitemap.mjs
 * Genera public/sitemap.xml consultando Firestore via REST API.
 * Uso: node generate-sitemap.mjs
 */
import { writeFileSync } from 'fs';

const PROJECT  = 'hacpen-ai-industrial';
const DATABASE = 'ai-studio-8d8b5450-7cfb-4bdf-953f-a488ca9f3c8e';
const BASE_URL = 'https://sateri.do';
const TODAY    = new Date().toISOString().split('T')[0];

const STATIC_PAGES = [
  { url: '/',           priority: '1.0', changefreq: 'weekly'  },
  { url: '/contact',    priority: '0.8', changefreq: 'monthly' },
  { url: '/privacidad', priority: '0.3', changefreq: 'yearly'  },
  { url: '/terminos',   priority: '0.3', changefreq: 'yearly'  },
];

async function getPublishedSlugs() {
  const endpoint = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/${DATABASE}/documents:runQuery`;
  const body = {
    structuredQuery: {
      from: [{ collectionId: 'pages' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'status' },
          op: 'EQUAL',
          value: { stringValue: 'published' },
        },
      },
    },
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Firestore error: ${res.status}`);
  const results = await res.json();

  return results
    .filter(r => r.document)
    .map(r => r.document.name.split('/').pop());
}

async function generate() {
  console.log('Obteniendo páginas de Firestore...');
  const slugs = await getPublishedSlugs();
  console.log(`${slugs.length} páginas encontradas.`);

  const staticEntries = STATIC_PAGES.map(p => `
  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

  const dynamicEntries = slugs.map(slug => `
  <url>
    <loc>${BASE_URL}/servicio/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...dynamicEntries].join('')}
</urlset>`;

  writeFileSync('./public/sitemap.xml', sitemap);
  console.log(`✓ public/sitemap.xml generado con ${slugs.length + STATIC_PAGES.length} URLs.`);
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
