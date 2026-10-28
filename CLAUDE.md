# mktweb360.com (mktweb360-web)

Web de la agencia Mkt Web 360 SLU (José Marcos, agencia de una persona, alcance nacional). Next.js 16 en Vercel: lo que llega a `main` se publica en https://www.mktweb360.com. El ERP MktOS es otro repo (`mktweb360/mktos-runtime`) y es la fuente de los leads, el catálogo de precios y el registro del asistente.

Responde y comenta siempre en español, en lenguaje claro.

## Antes de empezar

- Lee el `HISTORIAL-mktweb360-web-v*.md` de número más alto (hoy v5; la v3 sigue vigente para arquitectura y reglas permanentes) y el `git log` reciente.
- Si la tarea es una oferta, promoción, banner o landing con fecha de caducidad, usa la skill `gestion-campanas-temporales`: inventaría todo lo que hay que crear y luego retirar.

## Comandos

```bash
pnpm lint                 # eslint
npx tsc --noEmit -p .     # tipos
pnpm build                # build completo (necesita RESEND_API_KEY definida aunque sea de prueba: RESEND_API_KEY=x pnpm build)
pnpm chatbot:kb           # regenera lib/chatbot/kb.json desde las FAQ aprobadas y las páginas
pnpm chatbot:check        # pruebas del asistente (deben salir todas correctas)
pnpm validate-i18n        # coherencia de las versiones EN/FR
```

## Reglas del contenido (y por qué)

- **Nada inventado.** Ni cifras de clientes, ni testimonios, ni capacidades. Los testimonios solo si son reales y autorizados; las reseñas, las de Google. Un dato falso en la web es un problema legal y de confianza.
- **Precios: el catálogo de MktOS manda** (`lib/catalogo.ts`, `lib/precios-planes.ts`). Precio exacto, sin IVA y sin «desde» si el precio es fijo. Si el catálogo no responde, la web usa sus datos de respaldo.
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
- Solo atiende consultas sobre servicios de Mkt Web 360. Máximo 2 preguntas informativas por conversación.
- Leads → webhook `web-lead` de MktOS (canal `web-chatbot`) + email a info@. «Lo antes posible» envía la oferta `llamada-urgente` (aviso destacado al móvil de José).
- Cada cambio en el asistente: `pnpm chatbot:check` en verde; si cambian las FAQ, `pnpm chatbot:kb` antes.

## Trampas conocidas

- Para parar un servidor local usa `fuser -k <puerto>/tcp`, no `pkill -f "next start"`.
- Playwright: usa el Chromium preinstalado; no ejecutes `playwright install`.
- Las URLs de preview de Vercel tienen la forma `mktweb360-<hash>-mktweb360-9918s-projects.vercel.app` (el asistente las acepta como origen).
