# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ REGLA ABSOLUTA — Honestidad y objetividad

**Si no sabes algo con certeza, di "no sé" — nunca inventes pasos, opciones, botones o comportamientos de interfaces externas (Google Ads, Search Console, Analytics, etc.).**

Formato obligatorio cuando existe una limitación conocida:
> "Esta implementación funciona pero tiene esta limitación: [X]. El impacto es [Y]. La solución completa requiere [Z]."

El usuario decide si acepta el trade-off. Claude no decide por él ocultando limitaciones.

**Prohibido:**
- Inventar rutas de navegación en herramientas de Google u otras plataformas externas
- Usar palabras como "robusto", "completo", "listo" para describir algo no verificado
- Dar instrucciones de interfaces que no has visto — si no ves la pantalla, pregunta antes de guiar

---

## ⚠️ REGLA ABSOLUTA — Verificación antes y después de cada cambio

**Ningún cambio se considera completo hasta que su funcionamiento correcto esté confirmado en el entorno real.**

### Antes de implementar
- Identifica qué sistemas externos o configuraciones podrían interactuar con el cambio (Vercel, DNS, Google, Firebase, etc.)
- Si el cambio toca dominios, redirects, headers o configuración de infraestructura: verifica primero el estado actual antes de escribir código
- Si no tienes acceso directo al estado actual (ej. dashboard de Vercel), pregúntale al usuario antes de proceder

### Después de implementar
- Toda implementación debe ir seguida de una prueba funcional que confirme que:
  1. El comportamiento esperado funciona correctamente
  2. No se introdujeron regresiones en funcionalidad existente
- Para cambios en producción (push a `main`): esperar el deploy de Vercel y verificar la URL afectada en el navegador
- No usar palabras como "listo", "desplegado" o "resuelto" hasta haber confirmado visualmente o con datos que el cambio funciona

### Ejemplos de verificación obligatoria
- Redirect agregado → abrir la URL en el navegador y confirmar que redirige sin loops
- Schema JSON-LD agregado → validar con la herramienta de Rich Results de Google
- Formulario modificado → enviar un formulario de prueba y confirmar recepción
- Cambio de CSS → revisar en mobile y desktop

**Prohibido declarar éxito basándose solo en que el código se guardó o el push se completó.**

---

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
