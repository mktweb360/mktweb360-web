# HISTORIAL — mktweb360.com v4

**Documento vivo. Fuente de verdad del estado del sitio.**
**Regla de uso:** leer SIEMPRE al inicio de cualquier sesión. Actualizar SIEMPRE al cerrar.
**Última actualización:** 13 octubre 2026 (sesión del PC 12-13/10: rediseño visual completo)

Esta versión AÑADE §0 a la v3 (HISTORIAL-mktweb360-web-v3.md), que sigue vigente para la arquitectura, las reglas permanentes y el gate de verificación (§5-§7).

**Aviso:** la v3 se quedó en el 4 de agosto. Entre agosto y el 10 de octubre hubo muchos commits (#11-#48: oferta SEO + GEO + GBP, precios SEO, páginas de Toledo, i18n, títulos, schema…) que no están registrados aquí; ver `git log` y los registros de esas sesiones. Consolidar en el próximo cierre que trabaje sobre esta web.

## 0bis. SESIÓN DEL PC 12-13/10/2026 — REDISEÑO VISUAL «CON VIDA» (todo publicado en main)

### Marca y global
- Favicon oficial: círculo navy con la M y barras (app/favicon.ico, icon.png, apple-icon.png; public/icono-mw360.png). Mismo icono que el perfil de YouTube @mktweb360.
- Cabecera al hacer scroll y en páginas internas: navy translúcido, texto blanco, icono circular en vez del logotipo.
- Clases globales en globals.css: `.mw-skin-hero`, `.mw-skin-cta`, `.mw-skin-band` (navy + auroras de marca animadas + rejilla), `.mw-faq` (FAQ), `.mw-article` (artículos: barra de progreso CSS, h2 con acento, viñetas), `.mw-ping`, `.mw-float`, `.mw-aurora`, `.mw-fade-up`, revelado al scroll (scroll-driven). Todo respeta prefers-reduced-motion.
- Codemods en toda la web: 63 heroes, 214 CTA, 74 bandas, ~130 FAQ, 133 tarjetas de formulario, 188 títulos de sección, 34 insignias de pasos.
- Pie: sin la banda «Marketing digital por zonas» (criba geográfica); YouTube y Pinterest añadidos; sameAs con 6 redes.
- Metricool: código oficial como <script> literal en <head> (antes next/script lazyOnload) para la verificación.

### Portada ES / EN / FR
- Hero: diapositiva 1 con fondo tecnológico animado (`HeroTechBackdrop`, red SVG public/hero-red-tech.svg); diapositivas apiladas en rejilla (sin saltos). EN/FR sin la oferta caducada «Special June offer».
- Bloques nuevos: `CompromisoExclusividad` (mapa de España en puntos, public/mapa-espana-puntos.svg, generado con es-atlas), `HomeContacto`, `HomeFaq`, `HomeAuditoria` (EN/FR), formulario de auditoría junto a la oferta 349 € (ES). Eliminadas cifras «+1.000 proyectos / +10 años» y «¿Por qué elegir…?».
- ServicesTab con color por objetivo (degradado de marca); LangServicesTab y LangHeroSlider son envoltorios de los componentes ES.
- OfertasSlider y TestimonialsCarousel sin saltos de altura.
- EN/FR: eliminados testimonios anónimos con sector/ciudad (no verificables). Reseñas reales de Google traducidas, con aviso.

### Formularios y legal
- ContactForm: primera capa RGPD desplegable (ES/EN/FR), casilla opcional de comunicaciones comerciales (llega como `consentimientoComercial` al webhook y en el email), ids únicos por instancia (useId).
- /api/contact: escape de HTML de todos los datos del visitante en el email.

### Contenido corregido
- «Equipo senior» → «criterio / experiencia / expertise senior» y «agencia especializada» (hoy hay un solo técnico). Nosotros/About: «2016 · en marcha desde».
- /tienda-online/: eliminados tres bloques duplicados.
- blog-i18n: 7 traducciones de tarjetas que faltaban + categorías «Marketing de Contenidos» y «SEM».

### Pendiente / a revisar por José
- Política de privacidad: denominación social única, añadir alojamiento de MktOS (proveedor y región) como encargado, base jurídica de contacto (medidas precontractuales) y no exigir siempre copia del DNI.
- /oferta-web-seo/: los testimonios atribuidos a CC Láser, Interbya y Urbanpool no coinciden con reseñas públicas; confirmar que son textos reales y autorizados.
- Pinterest vacío; perfil de X sin comprobar.
- Las 11 landings locales (Toledo, Madrid, Barcelona, Sevilla) no se han auditado por contenido duplicado.
- Vídeos WooCommerce: 17 borradores en Metricool (15/10 → 12/11); lista de reproducción y miniaturas en YouTube Studio cuando se publiquen.

## 0. SESIÓN 37 (11-12/10/2026)

### Hecho

- **Landing de la auditoría gratuita SEO + GEO + GBP** (/auditoria-digital/ en ES, EN y FR). Commit `5238035` (11/10), publicado en Vercel.
  - Textos aprobados por José (Drive: «TEXTOS landing», id 14T1-lYPmXPO_hKxFFNt9iWNu_5yVCLtgAmQyky2KoyM).
  - Plazo de entrega: 24 h laborables. Sección de ficha de Google (GBP). 3 oportunidades de palabra clave. Mensaje opcional.
  - `ContactForm.tsx`: props `messageLabel`, `messageOptional` y `gbpField`.
  - `app/api/contact/route.ts`: campo `gbp` → `fichaGoogle` en el webhook `web-lead` (`oferta: "auditoria-seo-geo-gratuita"`, `canal: "web-auditoria-gratuita"`); la ficha también se añade al final de `mensaje`.
  - Además: Header, HomeInteractive, LangServicesTab y llms.txt.
  - Build local: necesita `RESEND_API_KEY=re_dummy_build_only` solo para compilar (no es una clave real).
- **Infraestructura:**
  - Railway: José borró los proyectos con copias de esta web (12/10). La web sirve solo desde Vercel (proyecto mktweb360-web); comprobado 200.
  - El proceso de la auditoría (MktOS 360) está documentado en OneDrive › 2026 › Proyectos › Mktos › 00-Gestion (REGISTRO-DE-SESION-2026-10-12-portatil.md).

- **Commits del PC el 12/10 (otra sesión, integrados aquí por rebase):**
  - `ef14b77` (#49): tracker de Metricool sin cookies en el layout raíz.
  - `753b3d6`: vídeos de la serie «Tutoriales WooCommerce» (01-09, 16:9 y 9:16) en `public/videos/tutoriales-woocommerce/`, servidos en `https://www.mktweb360.com/videos/tutoriales-woocommerce/…` (comprobado 200). Son los tutoriales para Lorena.
  - Ojo: son ~110 MB de vídeo dentro del repo. Si la serie crece, valorar alojarlos fuera (Vercel Blob, YouTube oculto o similar).

### Pendiente

- Comprobar que el módulo RT103 de MktOS lee `fichaGoogle` del webhook; si no, sacarla de `mensaje`.
- Semrush: proyecto duplicado de mktweb360.com sin auditoría pendiente de que lo borre José.
- §4.6 de la v3 (verificación de la ficha de Google Business): sin novedades registradas en esta sesión.
