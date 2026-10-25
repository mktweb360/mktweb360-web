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

### Comprobaciones
tsc limpio; `pnpm validate-i18n` sin incoherencias; `pnpm chatbot:check` 58/58; `pnpm check:precios` correcto; build correcto; páginas servidas en local solo con cifras de oferta; asistente probado en ES, EN y FR. El modo IA (Haiku) no se pudo probar en local (sin clave).

### Para decidir / revisar
- Hosting de 49 € (HostingModal): quitado; José puede recuperarlo como complemento de las ofertas.
- Porcentajes de dropshipping/participación en resultados: retirados en los tres idiomas.
- Rangos de mercado que se mantienen etiquetados: diseno-web-barcelona, cuanto-cuesta-agencia-marketing-digital-espana-2026, marketing-digital-toledo, online-stores-toledo, migrate-online-store EN/FR. Algunos coinciden numéricamente con antiguas tarifas propias.
- «El ROI suele ser positivo desde el primer trimestre» en páginas SEO de ciudad: cercano a promesa de resultado; valorar.
- blog-para-monetizacion: «30–150 €/mes con AdSense» sin fuente.
- diseno-web-para-clinicas conserva «desde 249 € + IVA» como oferta; dentistas se reformuló: revisar coherencia.
- `google-ads-no-commission-marketing-agency` tiene texto en español en las versiones EN/FR (ajeno a esta tarea).
- El catálogo de MktOS conserva los precios internamente; `app/area-privada`, `app/api` y contratos no se han tocado.
