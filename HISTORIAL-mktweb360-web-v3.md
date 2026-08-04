# HISTORIAL — mktweb360.com v3

**Documento vivo. Fuente de verdad del estado del sitio.**
**Regla de uso:** leer SIEMPRE al inicio de cualquier sesión. Actualizar SIEMPRE al cerrar.
**Última actualización:** 4 agosto 2026 (sesión 3)

---

## 1. ESTADO DE PRODUCCIÓN (4 ago 2026)

| Métrica | Estado |
|---------|--------|
| Build | ✅ Verde, 400 páginas estáticas |
| Canonical vs URL servida | ✅ Coinciden (trailingSlash:true) |
| Redirects activos | ✅ 216 reglas (70 permanentes + 146×307) |
| Validador i18n | ✅ 0 incoherencias, 73 routes |
| Selector de idioma | ✅ switcherFor() — sin 404 |
| Hreflang | ✅ Presente en todas las páginas con traducción |
| Canonical EN/FR | ✅ Resuelto — sin fugas FR→EN |
| POST /api/* | ✅ Sin 3xx |
| robots.txt | ✅ Una sola fuente: app/robots.ts (public/robots.txt eliminado) |
| llms.txt | ✅ Actualizado — blog-para-monetizacion + chatbot IA incluidos |
| OG images servicios | ✅ 6 imágenes 1200×630px con diseño visual de marca |
| Títulos duplicados | ✅ 5 páginas corregidas |
| Sitemap EN/FR | ✅ EN/FR incluidas vía allUrls() |
| GTM conversiones | ✅ Consentimiento configurado y publicado (v5) |
| GBP | ⏳ Video enviado 4 agosto, pendiente verificación Google |
| WhatsApp NAP | ✅ 622748987 (correcto) |
| OG images blog | ✅ Sistema programático /api/og + fallback rewrite |
| Redirects 307→301 | ✅ permanent:true aplicado a aliasRedirects |

---

## 2. COMMITS EN MAIN (cronológico)

| Commit | Fecha | Qué hizo |
|--------|-------|----------|
| `cd4a573` | 15 jul | Deploy 1 (PR#1) — eliminó 12 reglas bucle infinito |
| `8091676` | 16 jul | Deploy 2 (PR#2) — trailingSlash:true + redirects + canonical home |
| `1b873c0` | 22 jul | chore: add OAI-SearchBot to robots.txt |
| `599e986` | 22 jul | chore: add ChatGPT-User to robots.txt |
| `3fab4c0` | 22 jul | chore: ignore WSL Zone.Identifier |
| `e796fa2` | 22 jul | chore: remove Zone.Identifier files from repo |
| `2941d26` | 22 jul | chore: widen Zone.Identifier ignore pattern (WSL/Windows) |
| `d1dc44e` | 22 jul | fix: consolidate blog-monetizacion→blog-para-monetizacion (PR#3) |
| `ee41324` | 22 jul | fix(i18n): wire alternatesFor() — sample (3 páginas) |
| `956453d` | 22 jul | fix(i18n): wire alternatesFor() to ALL [lang] pages (121 archivos) |
| `d78ea95` | 22 jul | fix(i18n): phase 2a — 73 alias redirects 307 + borrar regla google-ads-management |
| `3b16c68` | 22 jul | fix(i18n): phase 2b — port metrics bands, delete 12 alias dirs |
| `afd27d2` | 22 jul | fix(i18n): phase 2b complete — 4 independent routes, close ALIAS_FASE_2B |
| `f0971cd` | 22 jul | chore: add i18n validator script |
| `8b07cb5` | 22 jul | fix: i18n switcher grayed out on all ES pages + full EN/FR translations |
| `abea08d` | 22 jul | feat: register 5 orphan pages in routes.ts + EN/FR translations |
| `ce494b2` | 22 jul | fix(build): accept lang prop in BlogBanner+ContactForm, fix syntax error |
| `ec1d8e0` | 22 jul | chore: remove public/robots.txt — app/robots.ts is the source of truth |
| `a5fa84f` | 22 jul | feat: complete i18n hreflang + sitemap EN/FR + cleanup |
| `f6a5386` | 4 ago | feat(llms): add blog-para-monetizacion and chatbot empresarial entries (#8) |
| `162ae9a` | 4 ago | feat: add OG images for service pages (#9) |
| `c0bcb88` | 4 ago | fix: remove duplicate brand suffix from metadata titles (#10) |

---

## 3. ANOMALÍAS RESUELTAS

### 3.1 Bucle infinito 12 páginas · Deploy 1
**Causa:** reglas /x→/x/ con trailingSlash:false. **Solución:** eliminadas.

### 3.2 Canonical contradiciendo URL servida · Deploy 2
**Causa:** trailingSlash:false servía sin barra, canonical declaraba con barra.
**Solución:** trailingSlash:true. Verificado: canonical == URL servida.

### 3.3 60 reglas redirect dormidas · Deploy 2
**Solución:** auditadas. 69 reglas activas, 0 auto-referenciales.

### 3.4 POST /api/* recibía 308 · Deploy 2
**Solución:** skipTrailingSlashRedirect:true + middleware excluye /api.

### 3.5 Home sin canonical · Deploy 2

### 3.6 Duplicado blog-monetizacion · 22 jul (PR#3 d1dc44e)
**Canónica:** /blog-para-monetizacion/ · **Precios correctos:** 990€ setup 15 arts / 290€/mes 10 arts/mes
**Redirect 301** activo. Footer, HomeClient, sitemap actualizados.

### 3.7 Selector de idioma construía URLs 404 · 22 jul (3ea6d47→956453d)
**Causa:** getLangUrl() hacía string-replace asumiendo paridad de slug.
**Solución:** switcherFor() de routes.ts. Opción deshabilitada si no hay traducción.

### 3.8 Canonical EN/FR incorrecto · 22 jul (956453d)
28 páginas FR declaraban canonical inglés. alternatesFor() conectada a las 124 páginas [lang].
**Resultado:** canonical correcto por idioma + hreflang en todas las páginas con traducción.

### 3.9 /en/google-ads-management/ redirigida a home · 22 jul (d78ea95)
Regla obsoleta eliminada. Página rescatada.

### 3.10 213 URLs alias respondiendo 200 con contenido duplicado · 22 jul (d78ea95+3b16c68+afd27d2)
**Fase 2a:** 73 alias seguros → 307 hacia canónica del idioma correcto.
**Fase 2b:** 10 pares con contenido propio resueltos:
- 7 pares: contenido portado a canónica, alias eliminados (12 directorios borrados)
- 3 pares declarados routes independientes: online-store-offer (490€), ecommerce-no-commissions (0€ comisión), what-is-geo (artículo informacional)
**Estado final:** 400 páginas estáticas, 0 incoherencias i18n, 73 routes.

### 3.11 robots.txt: conflicto dos fuentes · 22 jul (ec1d8e0)
**Causa:** coexistían public/robots.txt y app/robots.ts. Gana app/robots.ts pero public/ generaba ambigüedad.
**Solución:** eliminado public/robots.txt. app/robots.ts es única fuente de verdad. /area-privada/ correctamente excluida de indexación.

### 3.12 GBP: clasificación incorrecta del negocio · jul–ago 2026
**Causa:** checkbox "Mostrar la dirección de la empresa a los clientes" activado → clasificada como "local con visita presencial" → requería vídeo con ubicación física visible.
**Solución:** toggle desactivado → ficha reclasificada como "empresa de área de servicio (sin local)". Vídeo de verificación enviado 4 agosto 2026. Documentos: factura DIGI (julio 2026) + Mis datos censales AEAT.
**Estado:** pendiente confirmación Google.
**Nota domicilio:** domicilio fiscal AEAT = El Viso de San Juan ✅. Domicilio social (Registro Mercantil) = Fuenlabrada ❌ — requiere escritura pública notarial + RM Toledo (no urgente).

### 3.13 llms.txt desactualizado (#8) · 4 ago (f6a5386)
Añadidos: Blog para Monetización (990€ setup / 290€/mes) y Chatbot Empresarial IA (setup 300–500€ / 149–299€/mes). Descripción intro actualizada con todos los servicios actuales.

### 3.14 OG images: 6 páginas de servicio sin imagen visual (#9) · 4 ago (162ae9a)
Creadas 6 imágenes JPEG 1200×630px con diseño visual de marca:
- og-seo.jpg — gráfica de barras, ranking #1/#2/#3, barra de búsqueda
- og-geo.jpg — red neuronal, nodos conectados, chat bubbles IA (ChatGPT/Gemini/Perplexity)
- og-sem.jpg — curva de rendimiento, métricas CTR/CPC/ROAS, cursor de objetivo
- og-smm.jpg — tarjetas de posts sociales, contadores de engagement
- og-paginas-corporativas.jpg — mockup navegador con layout web, elementos de código
- og-marketing-contenidos.jpg — layout de artículo, badge SEO score 92, keywords flotantes
Fix adicional: diseno-de-paginas-web/page.tsx apuntaba a /imagen-diseno-web.jpg (URL relativa, 900px) → corregido a URL absoluta og-paginas-corporativas.jpg (630px).

### 3.15 Títulos duplicados "| Mkt Web 360 | Mkt Web 360" (#10) · 4 ago (c0bcb88)
Los layouts raíz y [lang] definen title.template "%s | Mkt Web 360". 5 páginas incluían el sufijo de marca en su `title:` de metadata, produciendo doble branding.
Páginas corregidas: contacto, not-found, tienda-online/gracias, oferta-web-seo/gracias, landing/seo-geo-gbp-verano/gracias.
124 openGraph.title preservan la marca correctamente.

### 3.16 GTM: 0 conversiones por CookieYes · 4 ago (GTM v5)
**Causa:** "Etiqueta de Google" y "Evento de GA4 - Form" sin configuración de consentimiento adicional — CookieYes bloqueaba ambas etiquetas al cargar antes del consentimiento del usuario.
**Solución:** GTM → Configuración de consentimiento → "No se requiere ningún consentimiento adicional" en ambas etiquetas.
**Publicado:** versión 5 "Consentimiento configurado - GA4 + Form" el 4 agosto 2026.
**Contexto versiones anteriores:** v4 (12/06/2026) "GA4 eventos formulario + Consent Mode v2" tenía el evento de formulario configurado pero sin resolver el bloqueo por CookieYes.

### 3.17 WhatsApp número temporal · 4 ago
`app/layout.tsx` revertido a 622748987 (número correcto). Eliminada incoherencia NAP.

### 3.18 Redirects 307→301 · 4 ago
`next.config.ts` — `aliasRedirects()` mapeados con `permanent: true`. Los 146 aliases de i18n emiten ahora 301 en lugar de 307.

### 3.19 Sitemap EN/FR: 0 URLs · 4 ago
`app/sitemap.ts` migrado a `allUrls()` de `lib/i18n/routes.ts`. Las páginas EN/FR se añaden automáticamente al sitemap. Eliminada dependencia de lista hardcodeada para idiomas.

### 3.20 Blog EN/FR: listing de artículos · 4 ago (sesión 3)
`app/[lang]/(site)/blog/page.tsx` reescrito. Era placeholder ("content in Spanish").
Ahora construye un `Map<esSlug, translatedSlug>` desde ROUTES y divide los artículos en:
- Artículos traducidos → cards completas con link a `/${lang}/${translatedSlug}/`
- Artículos sin traducción → sección secundaria con badge "ES", link a versión ES, mensaje "Translations coming soon"
Fechas localizadas: en-GB (inglés) / fr-FR (francés).

### 3.21 middleware → proxy warning Next 16 · 4 ago (sesión 3)
El warning en build era `experimental: { mdxRs: true }` (deprecated, ya estable por defecto en Next 16).
Eliminado el bloque experimental de `next.config.ts`. `middleware.ts` (auth + trailing slash) no requería cambios.
El warning "proxy" del nombre de la anomalía era un error de terminología en la auditoría original.

### 3.22 Legales EN/FR · 4 ago (sesión 3)
Creadas 6 páginas de documentos legales traducidos:
- `app/[lang]/(site)/legal-notice/page.tsx` — aviso legal EN
- `app/[lang]/(site)/mentions-legales/page.tsx` — aviso legal FR
- `app/[lang]/(site)/privacy-policy/page.tsx` — privacidad EN (con tabla RGPD)
- `app/[lang]/(site)/politique-de-confidentialite/page.tsx` — privacidad FR
- `app/[lang]/(site)/cookie-policy/page.tsx` — cookies EN (con tabla de cookies)
- `app/[lang]/(site)/politique-de-cookies/page.tsx` — cookies FR
Todas con `robots: { index: false, follow: false }`, `alternatesFor()`, Breadcrumbs.
`lib/i18n/routes.ts` actualizado con los 3 pares de slugs legales EN/FR.

### 3.23 OG images blog — sistema programático · 4 ago (sesión 3)
Resuelto sin modificar los ~120 page.tsx de artículos.
**Solución de 2 partes:**
1. `app/api/og/route.tsx` — endpoint edge runtime (ImageResponse 1200×630). Acepta `?slug=` (busca en allPosts) o `?title=&cat=`. Diseño: gradiente oscuro #0f172a→#1e293b, acento naranja #ea580c, badge de categoría, título, CTA "Leer artículo →".
2. `next.config.ts` — `async rewrites()` con `fallback: [{ source: "/og-:slug.jpg", destination: "/api/og?slug=:slug" }]`. Las imágenes de servicio (ya en /public/ como og-seo.jpg, etc.) no llegan al fallback y se sirven estáticamente.
Adicionalmente: 24 page.tsx de blog actualizados para referenciar `/og-[slug].jpg` específico en lugar de la genérica. 5 de esos archivos tenían URL relativa (`/og-image.jpg`) en lugar de absoluta — también corregidas.

### 3.24 Schema extensión · 4 ago (sesión 3)
`app/layout.tsx` — Organization/LocalBusiness schema ya era completo (address, geo, openingHours, priceRange, areaServed, knowsAbout, hasOfferCatalog con 6 servicios, sameAs). Sin cambios necesarios.
Las 24 páginas de blog actualizadas en 3.23 tenían el campo `image` del schema BlogPosting apuntando a la imagen genérica `og-image.jpg`. Corregidas para referenciar la imagen específica de cada artículo (`og-[folder-slug].jpg`), lo que hace eligibles los rich snippets para artículos individuales.

### 3.25 NAP directorios · 4 ago (sesión 3)
Creado `CHECKLIST-NAP-directorios.md` en raíz del repo.
Fuente de verdad NAP: Calle Chopo 98, El Viso de San Juan, 45215 Toledo · +34 622 748 987 · CIF B87679304.
Directorios priorizados: GBP (en proceso 3.12), Bing Places, Apple Maps (CRÍTICOS); Páginas Amarillas, Europages, Kompass, InfoEmpresas, Einforma (ALTOS); Clutch, Sortlist, DesignRush (MEDIOS).
Queries para detectar ficha antigua: `"Mkt Web 360" "Fuenlabrada"`, `"mktweb360.com" directorio`.
**Acción manual requerida:** actualizar cada directorio con los datos NAP correctos.

### 3.26 Warnings preload · 4 ago (sesión 3)
**Causas identificadas:**
1. `<html lang="es">` hardcodeado en root layout para páginas EN/FR → incorrecto semánticamente + hydration mismatch.
2. No había `<link rel="preconnect">` para GTM/GA4 → conexión fría en el primer consentimiento, aviso DevTools.
3. `<Image priority>` en Header (client component) sin `sizes` → Next.js podía generar preload URL incorrecta.

**Soluciones implementadas:**
- Nuevo `components/LangSetter.tsx` — client component que corre `document.documentElement.lang = lang` en useEffect.
- `app/[lang]/layout.tsx` — import y uso de `<LangSetter lang={lang} />` en el return.
- `app/layout.tsx` — añadido `suppressHydrationWarning` a `<html>` + 4 hints de preconexión: `rel="preconnect"` y `rel="dns-prefetch"` para `www.googletagmanager.com` y `www.google-analytics.com`.
- `components/Header.tsx` — añadido `sizes="180px"` a la imagen del logo para que Next.js genere el preload exacto que el browser usará.

### 3.27 Validador i18n con CI · 4 ago (sesión 3)
`scripts/validate-i18n.ts` — script TypeScript con 4 reglas:
- R1: directorios [lang] sin entrada en ROUTES
- R2: entradas ROUTES sin page.tsx correspondiente
- R3: slugs ES declarados en ROUTES pero sin página en app/(site)/
- R4: slugs duplicados en ROUTES

`package.json` — añadido script `"validate-i18n": "npx tsx scripts/validate-i18n.ts"`.
`.github/workflows/validate-i18n.yml` — CI en GitHub Actions que corre el validador en cada push/PR a main si cambian routes.ts, app/[lang]/\*\*, app/(site)/\*\* o el propio script.

---

## 4. ANOMALÍAS ABIERTAS

### ALTAS

#### 4.6 GBP: verificación pendiente
Vídeo enviado el 4 agosto 2026. Clasificada correctamente como "empresa de área de servicio".
**Pendiente:** confirmación de verificación por Google.
**Tras verificar:** configurar áreas de servicio prioritarias (Fuenlabrada pos 2.42 — 507 impr, 0 clicks; Illescas; Madrid sur; La Sagra; Toledo; Parla; Getafe; Móstoles).

---

## 5. ARQUITECTURA CONFIRMADA

### Stack
Next.js 15/16 App Router + TypeScript + Tailwind v4 + pnpm · Vercel (org mktweb360-9918)
PC WSL: /home/mktwe/mktweb360-web · Portátil WSL: /home/mktadmin/mktweb360-web

### Rutas ES
- app/(site)/[slug]/page.tsx — páginas de servicio y artículos (carpetas estáticas)
- NO existe ruta dinámica blog/[slug] — cada artículo es carpeta propia
- app/sitemap.ts — lista manual hardcodeada (132 URLs ES)

### Rutas EN/FR
- app/[lang]/(site)/[slug-traducido]/page.tsx — 110 páginas
- generateStaticParams en app/[lang]/layout.tsx — devuelve ["en", "fr"]
- Los slugs FR son re-exports de implementaciones EN (isEn flag interno)

### i18n
- lib/i18n/routes.ts — 73 routes con slugs ES/EN/FR + helpers
- switcherFor() — conectado al Header (selector de idioma)
- alternatesFor() — conectado a generateMetadata de todas las páginas [lang]
- aliasRedirects() — conectado a next.config.ts (Fase 2a: 146 redirects 307)
- allUrls() — conectada al sitemap (ver 3.19)
- scripts/validate-i18n.ts — ejecutar: node --experimental-strip-types scripts/validate-i18n.ts

### GTM/GA4
- GTM: GTM-KVB3R3H · GA4: G-GWDMPMPB3V · Google Ads: AW-870698032
- CookieYes integrado — consentimiento configurado en ambas etiquetas (resuelto — ver 3.16)

### Middleware
- Normaliza barra final (308) para páginas, excluye /api, /_next, ficheros
- Protege /area-privada/ por cookie · Protege /portal/ con JWT HS256

---

## 6. REGLAS PERMANENTES

1. Nunca `request.nextUrl.clone()` — usar `new URL(request.url)`
2. Confirmar merges con `gh pr view N --json state,mergedAt`
3. Nunca `git add -A` sin verificar staged files
4. scripts/ excluido del tsconfig — no reintroducir
5. Verificar con prod-build local, no con `next dev`
6. El repo es la fuente de verdad, no `curl` a producción
7. Un 200 no prueba nada si hay capa de auth delante
8. Leer este documento al inicio de cada sesión

---

## 7. GATE DE VERIFICACIÓN

Antes de cambios en next.config.ts o middleware.ts:
```js
document.querySelector('link[rel=canonical]').href === location.href // true
(await fetch('/x', {redirect:'manual'})).status // 308
(await fetch('/x/', {redirect:'manual'})).status // 200
```

Trimestral: barrido sitemap.xml → 0 URLs que devuelvan 3xx.

---

*Sistema Operativo Claude × Mkt Web 360 · HISTORIAL v3 · 4 agosto 2026 (sesión 3)*
