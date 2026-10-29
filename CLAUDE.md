# mktweb360.com (mktweb360-web)

Web de la agencia Mkt Web 360 SLU (José Marcos, agencia de una persona, alcance nacional). Next.js 16 en Vercel: lo que llega a `main` se publica en https://www.mktweb360.com. El ERP MktOS es otro repo (`mktweb360/mktos-runtime`) y es la fuente de los leads, el catálogo de precios y el registro del asistente.

Responde y comenta siempre en español, en lenguaje claro.

## Antes de empezar

- Lee el `HISTORIAL-mktweb360-web-v*.md` de número más alto (hoy v6; la v3 sigue vigente para arquitectura y reglas permanentes) y el `git log` reciente.
- Si la tarea es una oferta, promoción, banner o landing con fecha de caducidad, usa la skill `gestion-campanas-temporales`: inventaría todo lo que hay que crear y luego retirar.

## Comandos

```bash
pnpm lint                 # eslint
npx tsc --noEmit -p .     # tipos
pnpm build                # build completo (necesita RESEND_API_KEY definida aunque sea de prueba: RESEND_API_KEY=x pnpm build)
pnpm chatbot:kb           # regenera lib/chatbot/kb.json desde las FAQ aprobadas y las páginas
pnpm chatbot:check        # pruebas del asistente (deben salir todas correctas)
pnpm validate-i18n        # coherencia de las versiones EN/FR
pnpm check:seo -- 3430    # guarda SEO sobre el HTML servido (ver abajo)
pnpm check:precios        # avisa si hay precios de servicios fuera de las ofertas (política del 25/10/2026)
```

## Guarda SEO antes de publicar (obligatoria)

Toda página indexable (todas las URLs de `app/sitemap.ts`, en ES/EN/FR) debe llevar datos estructurados correctos. **Antes de publicar cualquier página o artículo nuevo** (y antes de fusionar a `main`):

```bash
RESEND_API_KEY=x pnpm run build
npx next start -p 3430            # en otra terminal
pnpm run check:seo -- 3430        # exit 1 si algo falla
```

Falla si una URL del sitemap: no da 200 o lleva noindex; no tiene JSON-LD de página (además de Organization/WebSite del layout y BreadcrumbList); tiene JSON-LD inválido; no tiene canonical o apunta a otra URL; no tiene exactamente un H1; le falta title o meta description; un `inLanguage` no coincide con el idioma de la URL; o, si es artículo (está en `lib/blog.ts` o lleva la firma `rel="author"`), no tiene BlogPosting con author Person, headline, fechas, `mainEntityOfPage`, publisher con `@id` de la organización e image (si la página tiene og:image). También comprueba que `<html lang>` coincide con el idioma de la URL.

- Opciones: `--sin-lang` (no comprueba `<html lang>`), `--ignorar a,b,c` (slugs o rutas como `en/blog`; se listan como IGNORADA), `--inventario` (tipos JSON-LD por URL, sin fallar).
- Cómo añadir schema: helpers de `lib/schema.ts` (`blogPostingSchema`, `serviceSchema`, `webPageSchema`, `fromMeta`) y `components/JsonLd.tsx` (`<JsonLd>`, `<IntlArticleJsonLd>` para artículos EN/FR). Las migas (`components/Breadcrumbs.tsx`) ya emiten su BreadcrumbList: no añadir otro. Nada inventado: el schema dice lo mismo que el texto visible (sin valoraciones, reseñas ni precios que no estén en la página).
- **Excepción temporal hasta el 04/11/2026** (archivos de la cadena de ramas de publicación diaria; se arreglan después y entonces se quita la lista):

```bash
pnpm run check:seo -- 3430 --sin-lang --ignorar ai-max-google-ads-que-es-como-controlarlo,anuncios-chatgpt-ads-espana,como-crear-landing-page-que-convierte,como-usar-planificador-de-palabras-clave-google-ads,digitalizacion-pymes-espana-datos-ine-2026,estrategia-de-contenidos-calendario-editorial,factura-electronica-obligatoria-autonomos-pymes,ai-max-google-ads-definition-controle,en/blog,fr/blog,chatgpt-ads-spain,content-strategy-editorial-calendar,digitalisation-pme-espagne-donnees-ine-2026,electronic-invoice-spain,google-ads-ai-max-what-it-is-how-to-control-it,how-to-create-landing-page-that-converts,how-to-use-google-keyword-planner,publicite-chatgpt-ads-espagne,sme-digitalisation-spain-ine-data-2026,strategie-de-contenu-calendrier-editorial
```

  `--sin-lang` también es temporal: el `<html lang>` de EN/FR se corrige en otra rama.

## Reglas del contenido (y por qué)

- **Nada inventado.** Ni cifras de clientes, ni testimonios, ni capacidades. Los testimonios solo si son reales y autorizados; las reseñas, las de Google. Un dato falso en la web es un problema legal y de confianza.
- **Precios: solo en las OFERTAS** (decisión de José, 25/10/2026). La web, el asistente y toda la presencia digital NO muestran precios de servicios; solo llevan precio las ofertas vigentes, cuyas cifras viven en `lib/ofertas.ts` (SEO + GEO + Maps 349 €/mes sin permanencia o 149 €/mes ×6 con permanencia de 6 meses; Web profesional desde 249 € + IVA; Tienda online desde 490 €). Para cualquier otro servicio: «presupuesto a medida tras un diagnóstico gratuito». Las cifras de terceros y los rangos de mercado pueden quedar si se dice claramente que son referencia de mercado y no tarifa nuestra. No se usa precio tachado. `pnpm check:precios` avisa si reaparece una tarifa propia. El catálogo de MktOS (`lib/catalogo.ts`, `lib/precios-planes.ts`) ya no pinta precios en páginas que no sean de oferta ni alimenta al asistente.
- **Plazos y resultados:** nunca prometer posiciones ni resultados garantizados. Los plazos orientativos deben ser coherentes entre páginas (unificados el 18/10: SEO 3-6 meses primeros resultados y 6-12 consolidación; Maps 1-2 meses).
- **Equipo:** hoy hay un solo técnico. Nada de «equipo de expertos»; sí «criterio / experiencia senior».
- **Captación nacional:** los materiales de captación no mencionan ciudad ni provincia. Las páginas de SEO local por ciudad son la excepción, porque su objetivo es posicionar esa ciudad.
- **Legal:** cualquier formulario lleva primera capa RGPD y casilla separada de comunicaciones comerciales. Si se añade un proveedor que trata datos, se añade a la política de privacidad (encargado, ubicación y garantía).

## Reglas técnicas

- **Secretos fuera del repo y fuera del chat.** No se abren `.env*`. Las variables viven en Vercel (Production/Preview); si hace falta una nueva, la pone José.
- **El contenido importante va en el HTML que sirve el servidor.** Los buscadores y los asistentes de IA (el lector web de Claude no ejecuta JavaScript) deben verlo sin JS. Nada de precios, servicios o FAQ cargados solo en el cliente.
- **robots.ts:** dejar pasar a los rastreadores de búsqueda y de asistentes (Googlebot, Claude-User, Claude-SearchBot, OAI-SearchBot, ChatGPT-User, PerplexityBot). Bloquear uno de ellos reduce la visibilidad del cliente en esa plataforma.
- **Schema y FAQ:** el texto del JSON-LD y el visible deben coincidir.
- **Tres layouts raíz, un `<html lang>` por idioma (28/10/2026):** `app/(site)/layout.tsx` (ES, con cabecera y pie), `app/(app)/layout.tsx` (área privada, portal y landings, sin cabecera, noindex) y `app/[lang]/layout.tsx` (EN/FR). Los tres pintan `components/RootDocument.tsx` (GTM, Consent Mode, Metricool, schema de la organización, banner de cookies y asistente): lo común se cambia ahí, una sola vez. No hay `app/layout.tsx`; las URL que no existen las sirve `app/global-not-found.tsx` (`experimental.globalNotFound`). Una página nueva en español va en `app/(site)/`; nunca suelta en `app/`.
- **Una página en otro idioma con `lang` equivocado es un error, no un detalle.** Lo mismo con hreflang, canonical, título, descripción, H1 y datos estructurados: se comprueban antes de publicar.
- **Commits como José** (`git -c user.name="José Marcos" -c user.email="mktweb360@gmail.com"`), en español y sin `Co-Authored-By`. Rama de trabajo y luego `main`; antes de publicar, tipos y lint en verde.

Los hooks de `.claude/settings.json` bloquean los `.env`, pasan eslint a cada archivo editado y, si se toca el asistente, sus pruebas.

## Asistente de la web (`lib/chatbot`, `app/api/chat`, `components/chatbot`)

- Diseño completo en `docs/chatbot/DISENO-asistente-ia-v1.md`. Decisiones de las FAQ en `docs/chatbot/conocimiento/`.
- Modelo `claude-haiku-5-5`, effort `low`, sin razonamiento extendido, caché del prompt. Topes de gasto: 1 €/día y 15 €/mes en el código, y 15 $/mes en el espacio de trabajo `chatbot-web` de la Console.
- Responde primero con FAQ aprobadas; la IA solo cuando no hay FAQ directa, con validación de la salida (sin precios no autorizados, sin garantías, sin fugas del prompt).
- Precios del asistente: solo los de las ofertas vigentes (`lib/ofertas.ts`). Ante «¿cuánto cuesta…?» responde «a medida tras diagnóstico gratuito» + ofertas con su precio + dejar datos. Ya no lee precios del catálogo de MktOS.
- Solo atiende consultas sobre servicios de Mkt Web 360. Máximo 2 preguntas informativas por conversación.
- Leads → webhook `web-lead` de MktOS (canal `web-chatbot`) + email a info@. «Lo antes posible» envía la oferta `llamada-urgente` (aviso destacado al móvil de José).
- Cada cambio en el asistente: `pnpm chatbot:check` en verde; si cambian las FAQ, `pnpm chatbot:kb` antes.

## Trampas conocidas

- Para parar un servidor local usa `fuser -k <puerto>/tcp`, no `pkill -f "next start"`.
- Playwright: usa el Chromium preinstalado; no ejecutes `playwright install`.
- Las URLs de preview de Vercel tienen la forma `mktweb360-<hash>-mktweb360-9918s-projects.vercel.app` (el asistente las acepta como origen).
