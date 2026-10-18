# HISTORIAL — mktweb360.com v5

**Documento vivo. Fuente de verdad del estado del sitio.**
**Regla de uso:** leer al inicio de cada sesión que trabaje sobre la web y actualizar al cerrarla (nueva versión; la anterior se conserva).
**Última actualización:** 18 octubre 2026 (sesión del asistente IA de la web, ver §0ter)

Esta versión AÑADE §0ter a la v4. La v4 (§0bis y anteriores, copiados abajo sin cambios) y la v3 siguen vigentes para arquitectura, reglas permanentes y gate de verificación. Las reglas de trabajo con Claude están ahora también en `CLAUDE.md` del repositorio.

## 0ter. SESIÓN 18/10/2026 — ASISTENTE IA DE LA WEB Y AJUSTES (todo publicado en main)

### Asistente de la web (nuevo)
- Widget en todas las páginas públicas (oculto en /area-privada, /portal, /admin, /api), arriba a la derecha con bocadillo, logo MW360 en la cabecera. Aviso de IA al empezar (art. 50 del Reglamento de IA).
- Motor: FAQ aprobadas por José primero (`lib/chatbot/kb.json`, 36 FAQ); IA (`claude-haiku-5-5`, effort low, sin razonamiento extendido, caché del prompt) solo cuando no hay FAQ directa, con validación de la salida (sin precios no autorizados, sin garantías, sin fugas). Solo servicios de Mkt Web 360; máximo 2 preguntas informativas por conversación.
- Topes: 1 €/día y 15 €/mes en el código; 15 $/mes en el espacio de trabajo `chatbot-web` de la Claude Console. Variables en Vercel: `ANTHROPIC_API_KEY` (clave «mktweb360-chatbot», caduca 31/05/2027, aviso en el calendario el 17/05/2027) y `CHATBOT_SECRET`.
- Sugerencias por página al abrir y de embudo tras cada respuesta; acciones: presupuesto, auditoría gratuita, llamada (huecos reales del calendario de MktOS o «Lo antes posible» = aviso urgente) y contacto.
- Leads → webhook `web-lead` de MktOS (canal `web-chatbot`) + email a info@. Registro seudonimizado de cada turno en MktOS (informe en mktos360.app → Agencia → Asistente de la web; se borra a los 90 días).
- WhatsApp desactivado en el chat (`WHATSAPP_ACTIVO = false` en `components/chatbot/ChatWidget.tsx`) hasta que el 622 74 89 87 funcione en la app WhatsApp Business (en curso el 19/10). Quedan 6 botones wa.me en otras páginas, que funcionarán solos cuando el número esté activo.
- Pruebas: `pnpm chatbot:check` (44). Diseño: `docs/chatbot/DISENO-asistente-ia-v1.md`.

### Legal
- Política de privacidad: apartado 2.4 del asistente, encargados Anthropic PBC (EE. UU., cláusulas contractuales tipo) y Supabase (Zúrich, Suiza, decisión de adecuación; soporte puntual desde EE. UU. y Singapur con cláusulas tipo), retención 90 días, decisión humana.

### Contenido
- Plazos unificados en toda la web y el asistente: SEO orgánico, primeros resultados en 3-6 meses y consolidación en 6-12; Google Maps / ficha de Google, 1-2 meses.
- robots.ts: Claude-User y Claude-SearchBot explícitos.

### Trabajo con Claude
- `CLAUDE.md` del proyecto y hooks en `.claude/` (bloqueo de .env, eslint por archivo y pruebas del asistente al tocarlo).

### Pendiente / a revisar por José
- Oferta de webs demo: precio y validez, y aclarar 790 € frente a 249 € en la web (urgente, 19/10).
- Revisar las 44 FAQ que quedan en «revisar» en la página «Revisión FAQs del asistente»; después `pnpm chatbot:kb` y publicar.
- Reactivar WhatsApp en el chat cuando el 622 funcione en el móvil.
- Pendientes de la v4 (§0bis) siguen abiertos salvo la política de privacidad (resuelta en lo relativo a MktOS y al asistente).

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
