# HISTORIAL mktweb360-web v6

La v3 sigue vigente para arquitectura y reglas permanentes. La v5 recoge las sesiones anteriores.

## SESIÓN 25/10/2026: precios solo en las ofertas

### Decisión de José
- La web y el asistente no muestran precios de servicios. Solo llevan precio las ofertas vigentes.
- Los 199 € del SEO Local y demás tarifas siguen existiendo como precio habitual del servicio, pero no se publican. Con esto se cierra la discrepancia de la «escalera» de planes.
- Páginas de precios (/precios-seo/, versión EN/FR, calculadora, artículos «cuánto cuesta…»): se mantienen la URL y la guía, sin nuestras cifras. Los rangos de mercado pueden quedar si se etiquetan como referencia de mercado.
- Asistente ante el precio de un servicio que no es oferta: «a medida tras diagnóstico gratuito» + ofertas vigentes + dejar datos.

### Ofertas que conservan precio (`lib/ofertas.ts`, fuente única)
- SEO + GEO + Maps: 349 €/mes sin permanencia, o 149 €/mes durante 6 meses con permanencia de 6 meses.
- Web profesional: desde 249 € + IVA.
- Tienda online: desde 490 €.
- Auditoría / diagnóstico gratuito.

### Hecho
- `lib/ofertas.ts` nuevo (sin imports, lo usan el asistente, `lib/planes-seo.ts` y las pruebas).
- `lib/planes-seo.ts`: los planes muestran «Presupuesto a medida» (ES), «Custom quote» (EN), «Devis sur mesure» (FR).
- Unas 80 páginas y componentes en ES/EN/FR sin precios propios (también JSON-LD, FAQ, `priceRange`, llms.txt y llms-full.txt).
- Banner de tienda online: quitado el precio tachado.
- Asistente: ya no lee el catálogo de MktOS; prompt con bloque `<ofertas>`; el validador solo admite importes de ofertas; FAQ de precio retiradas (`retiradas.json`); `kb.json` regenerado (27 FAQ).
- `scripts/check-precios.mjs` (`pnpm check:precios`): falla si reaparece `priceRange`, schema con precio fuera de páginas de oferta o una tarifa propia retirada.
- CLAUDE.md actualizado con la nueva regla.

### Revisión independiente (aplicada)
- Descripciones de páginas del asistente sin «precios publicados» (kb regenerado).
- Validador de importes: rangos, «EUR 350», importes con letra, «dólares» y «1,5k €» se descartan; la regla 3 del prompt ya no permite citar cifras de mercado.
- «¿Cuánto tarda…?» ya no devuelve la respuesta de tarifas; «cuánto me sale», «importe», «cuota» sí cuentan como pregunta de precio.
- Plan «pyme» de las tarjetas: «Oferta vigente: precio en la página de la oferta» (antes «a medida»).
- Tienda online: retirado el «total a 3 años» (940/985 €, cifras de hosting sin respaldo); llms con «desde 490 €»; título de la oferta SEO aclara «oferta».
- Barcelona (ES/EN/FR): rangos etiquetados como referencia de mercado.

### Comprobaciones
tsc limpio; `pnpm validate-i18n` sin incoherencias; `pnpm chatbot:check` 58/58; `pnpm check:precios` correcto; build correcto; páginas servidas en local solo con cifras de oferta; asistente probado en ES, EN y FR. El modo IA (Haiku) no se pudo probar en local (sin clave).

### Para decidir / revisar
- Hosting de 49 € (HostingModal): quitado; José puede recuperarlo como complemento de las ofertas.
- Porcentajes de dropshipping/participación en resultados: retirados en los tres idiomas.
- Rangos de mercado que se mantienen etiquetados: cuanto-cuesta-agencia-marketing-digital-espana-2026 y migrate-online-store EN/FR (Barcelona y las guías de Toledo ya no existen en main). Algunos coinciden numéricamente con antiguas tarifas propias.
- blog-para-monetizacion: «30–150 €/mes con AdSense» sin fuente.
- diseno-web-para-clinicas conserva «desde 249 € + IVA» como oferta; dentistas se reformuló: revisar coherencia.
- `google-ads-no-commission-marketing-agency` tiene texto en español en las versiones EN/FR (ajeno a esta tarea).
- Fuente de verdad de la oferta SEO: la página de la oferta aún lee 349/149 del catálogo de MktOS y el asistente usa `lib/ofertas.ts`. Si MktOS cambia el precio, hay que cambiar también `lib/ofertas.ts`. Decidir si la página pasa a leer solo `lib/ofertas.ts`.
- Contrato SEO 6x3 (600 € + IVA): José confirma el 26/10 que ese contrato ya no existe. Queda código huérfano por retirar en una PR aparte: `app/api/admin/leads/seo-6x3/*`, `app/api/leads/seo-6x3`, `app/area-privada/leads/seo-6x3/*`, el enlace en `app/area-privada/leads/page.tsx` y las referencias de `next.config.ts`.
- `check:precios` no está en el build ni en un hook, y su lista de páginas de oferta es amplia: afinar.
- El catálogo de MktOS conserva los precios internamente; `app/area-privada`, `app/api` y contratos no se han tocado.

## SESIÓN 29/10/2026: reaplicación sobre main (rama `contenido/sin-precios-servicios-v2`)

La PR #55 se quedó atrás respecto a main (Toledo consolidado, ciudades retiradas, página de autor, captación en artículos, schema completo, `check:seo`). Se reaplica con cherry-pick y resolución manual:
- Las páginas de ciudades, guías de Toledo y navegadores borradas en main siguen borradas.
- Se conservan captación, schema y descripciones de main; encima, la retirada de precios (p. ej. la descripción nueva de blog-monetization EN/FR pierde «desde 990 €»).
- Lo añadido el 28/10 que contradecía la decisión: menú (ES/EN/FR) «Precios SEO» → «Cuánto cuesta el SEO» con descripción de presupuesto a medida; enlaces con ancla «precios SEO» / «planes y precios SEO» en artículos → «cuánto cuesta el SEO» (y frases que decían «tarifas publicadas» reescritas); la guía «SEO para pymes» (ES/EN/FR) mostraba los planes con precio (199–790 €) leídos del catálogo: ahora tamaños de proyecto con `precioTexto` y solo la oferta SEO + GEO + GBP con cifra (de `lib/ofertas.ts`); fuera el `Offer` con precio de los Service de páginas corporativas (ES/EN/FR); llms.txt cita la guía como «Cuánto cuesta el SEO».
- Portada (ES/EN/FR): retirado el testimonio de Miguel Palomino (decisión de José del 29/10: suena a promesa de posición).
- `check:precios`: nueva regla 4 (precios de planes leídos por código, `preciosPlanesSeo` / `p.precio`, fuera de páginas de oferta) y la cotización de autónomos EN/FR cuenta como cifra de terceros.
- Barrido del HTML servido (403 URLs del sitemap): «€» solo en ofertas (banners, menú, páginas de oferta) y en cifras de mercado o de terceros (sanciones, cuotas de autónomos, Shopify/Tidio/Zendesk, inversión publicitaria, ROI del email, rangos de mercado etiquetados).

## SESIÓN 15/11/2026: cabecera nueva de GEO publicada y precios Black Friday (rama `feat/precios-black-friday`)

### Cabecera nueva de GEO (ES/EN/FR) — PUBLICADA
- Fusión a `main` el **15/11/2026 a las 13:06 (hora de España)**, commit `31236de` (rama `feat/geo-hero-corte-diagonal`, commits 61da926 a 18a6100). OK de José a las 12:06 en el chat. Vercel: correcto. Alcance: solo la página de GEO en los tres idiomas; no se extiende a otras páginas sin OK de José.
- Antes de publicar: tsc, validate-i18n, check:precios, build y `check:seo` (424 URLs, 0 fallos) en verde. Capturas en local a 1440 px y a 390 px en ES, EN y FR, sin desborde horizontal. Los errores de consola vistos en local son de recursos externos bloqueados por el entorno de pruebas.
- Para medir: cualquier cambio de visitas o conversiones en esa página desde esa hora se mezcla con la campaña Black Friday (arranca el 15/11) y con el piloto de la Fase B: no atribuir resultados a la cabecera sin comparar con Search Console y GA4.

### Precios Black Friday — EN RAMA, SIN PUBLICAR
- Fuente única de fechas, precios y textos de campaña: `lib/black-friday.ts` (campaña hasta el 30/11/2026, incluido; todo sin permanencia, sin IVA mostrado, sin escasez). `components/CondicionesBlackFriday.tsx` y `components/geo/GeoOfertas.tsx` son nuevos.
- Presentación decidida por José (15/11): pack SEO + GEO + Maps a 149 €/mes durante 6 meses SIN «precio habitual» ni tachado (el 149 con permanencia ya estaba anunciado en los 30 días previos); SEO Local Esencial 99 (habitual 199) y Crecimiento 413, Ecommerce S 314 y Ecommerce M 553 (habituales 590, 449 y 790, confirmados por José como los más bajos aplicados). GEO solo 99 €/mes permanente, sin etiqueta Black Friday.
- Retirados: modalidad con permanencia de 6 meses y penalización del 50 % por baja anticipada; la oferta deja de decir «permanente».
- `scripts/check-precios.mjs`: las páginas de GEO y los dos componentes nuevos pasan a la lista de páginas de oferta (llevan precio y schema Offer). `scripts/check-chatbot.mjs`: ahora el asistente puede citar los importes de campaña y habituales (12 importes); la prueba «199 rechazado» pasa a «299 rechazado». `tsconfig.json`: `allowImportingTsExtensions` (lib/ofertas.ts importa lib/black-friday.ts con extensión para que lo lean las pruebas con node).
- Pendiente: OK de José para fusionar a `main`; crear en el catálogo de MktOS el plan «GEO solo 99 €/mes» y las promociones (hoy los importes de campaña viven en `lib/black-friday.ts`, no en el catálogo); aviso automático de MktOS un mes antes de que acabe el periodo de cada cliente (tarea de MktOS); retirar todo el 01/12/2026 si no se amplía (skill gestion-campanas-temporales); revisar a mano `public/llms*.txt` y las FAQ de `kb.json` si se amplía.
