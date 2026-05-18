# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ REGLA ABSOLUTA — Datos de contacto

**NUNCA inventes, supongas ni generes:**
- Números de teléfono o WhatsApp
- Direcciones físicas o postales
- Dominios o URLs de terceros
- Correos electrónicos

Si el código necesita cualquiera de estos datos, **pregúntale al usuario antes de escribir el código**. No uses placeholders sin avisar explícitamente que son temporales.

---

## Proyecto

**SATERI** — Sitio de SEO programático para una empresa de servicios técnicos del hogar en Santiago de los Caballeros, República Dominicana.

- Dominio: `sateri.do`
- Repo GitHub: `mamutlabs/sateri-next`
- Deploy: Vercel (auto-deploy en cada push a `main`)
- Base de datos: Firebase Firestore — proyecto `hacpen-ai-industrial`, base de datos nombrada `ai-studio-8d8b5450-7cfb-4bdf-953f-a488ca9f3c8e`

## Comandos

```bash
npm run dev      # Servidor local en localhost:3000
npm run build    # Build de producción (genera páginas estáticas)
npm run start    # Servidor de producción local
```

Para desplegar: basta con hacer `git push origin main` — Vercel detecta el push y despliega automáticamente.

```bash
# Regenerar sitemap (cuando se agregan páginas nuevas en Firestore)
node generate-sitemap.mjs
git add public/sitemap.xml && git commit -m "Update sitemap" && git push
```

## Arquitectura

### Generación de páginas

El sitio tiene ~663 páginas SEO pre-generadas estáticamente (SSG) con ISR. Cada página corresponde a un documento en la colección `pages` de Firestore con `status: "published"`.

- `app/page.jsx` — Home (Server Component, `revalidate = 3600`)
- `app/servicio/[slug]/page.jsx` — Páginas SEO (Server Component, `revalidate = 86400`, SSG via `generateStaticParams`)

### Acceso a Firestore

**No usar Firebase Client SDK** en Server Components — falla en el entorno serverless de Vercel. Usar exclusivamente `lib/firestore.js` que implementa la Firestore REST API con `fetch()` nativo:

```js
import { getDocument, runQuery } from '@/lib/firestore';

// Obtener un documento
const page = await getDocument('pages', slug);

// Consultar con filtros
const pages = await runQuery('pages', [{ field: 'status', value: 'published' }]);
```

`lib/firebase.js` existe pero solo debe usarse en Client Components si se necesita en el futuro.

### Server vs Client Components

- **Server Components** (`app/*/page.jsx`): hacen fetch a Firestore, generan metadata SEO, renderizan JSON-LD schema
- **Client Components** (`components/*Client.jsx`, `components/ContactForm.jsx`): tienen `'use client'` al inicio, manejan interactividad, usan `useRouter` de `next/navigation`

### SEO

Cada página SEO (`/servicio/[slug]`) incluye:
- `generateMetadata()` → title, description, canonical, Open Graph
- JSON-LD `Service` schema + `LocalBusiness` schema en el layout raíz
- `{ absolute: data.metaTitle }` para evitar duplicar el sufijo `| SATERI` del template del layout

### Formulario de contacto

`ContactForm.jsx` envía a Google Forms via `fetch` con `mode: 'no-cors'`, luego redirige a `/gracias?nombre=...`. El formulario ID de Google es `1FAIpQLScBSrLX9FZVY-qXpZBTfwQy-RPT6Fid8ccfalDBDT8tsm-mng`.

### CSS

No hay CSS modules ni Tailwind. Todos los estilos son inline (`style={{}}`). Los estilos globales y media queries están en el `<style>` dentro de `app/layout.jsx`.

Clases CSS importantes definidas en el layout:
- `.seo-hero-grid` — grid de 2 columnas en desktop, 1 en mobile
- `.seo-hero-form` — oculto en mobile (`display: none`)
- `.seo-mobile-form` — visible solo en mobile
- `.seo-mobile-cta` — botón CTA visible solo en mobile
