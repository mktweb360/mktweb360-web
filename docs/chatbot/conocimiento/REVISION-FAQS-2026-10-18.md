# Revisión de FAQs para el asistente (18/10/2026)

Se han extraído **738 FAQs de 129 páginas** con `scripts/extraer-faqs-chatbot.mjs`: 458 en español, 140 en inglés y 140 en francés. Están en `faqs-web.json` con el texto tal cual se publica y estado `pendiente_revision`.

## Cómo se usan
- El asistente **solo** responderá con las FAQs que José marque como `aprobada` (paso a `crm.assistant_kb` en MktOS, fase 2 del diseño).
- Las FAQs de una oferta concreta se responden **con el contexto de esa oferta**. Ejemplo: la permanencia es distinta en `/oferta-seo-geo-gbp/` (sin permanencia, preaviso de 30 días) y en `/oferta-web-seo-organico/` (el SEO se puede cancelar tras los 3 meses incluidos). El asistente debe decir de qué oferta habla.
- Los precios no se toman de las FAQs: se leen en vivo del catálogo de MktOS.

## Respuestas con cifras, plazos, garantías o absolutos (120 en español)
Conviene revisarlas primero: el asistente no debe prometer plazos ni resultados (Plan de Captación §10.3). Se marcan las que contienen «garantiz…», plazos («30 días»), porcentajes, «primera posición», «siempre», «nunca» o «€».

| Página | Pregunta | Motivo |
|---|---|---|
| `/5-factores-web-clinicas-centros-salud/` | ¿Puedo prometer resultados o curaciones en la web de mi clínica? | nunca |
| `/5-factores-web-clinicas-centros-salud/` | ¿Cuánto tarda en notarse el trabajo hecho en la web de una clínica? | \d+\s*(días/semanas/meses/horas) |
| `/5-factores-web-clinicas-dentales/` | ¿Qué no puedo prometer en la publicidad de mi clínica dental? | garantiz |
| `/5-factores-web-clinicas-dentales/` | ¿Qué sanción hay por tratar mal los datos de salud de los pacientes? | \d+\s*% |
| `/5-factores-web-construccion-reformas/` | ¿Es obligatorio dar el presupuesto por escrito? | \d+\s*% |
| `/5-factores-web-construccion-reformas/` | ¿Cuándo se aplica el IVA del 10% en una reforma? | \d+\s*% |
| `/5-factores-web-despacho-abogados/` | ¿Puedo publicar testimonios o casos de éxito de clientes? | nunca |
| `/5-factores-web-despacho-abogados/` | ¿Debo pedir detalles del caso en el formulario de contacto de la web? | garantiz |
| `/5-factores-web-despacho-abogados/` | ¿Cuánto tarda un despacho en empezar a recibir consultas desde la web? | \d+\s*(días/semanas/meses/horas) |
| `/5-factores-web-inmobiliaria/` | ¿Por qué las webs de inmobiliarias suelen ir lentas? | siempre |
| `/5-factores-web-restaurantes-hosteleria/` | ¿Qué sanción hay por no tener hojas de reclamaciones? | € |
| `/5-factores-web-servicios-profesionales/` | ¿Qué pasa si no tengo política de privacidad y cookies en regla? | € |
| `/5-factores-web-talleres-mecanicos/` | ¿Es obligatorio dar un presupuesto por escrito antes de reparar el coche? | \d+\s*(días/semanas/meses/horas) |
| `/5-factores-web-talleres-mecanicos/` | ¿Cuánto dura la garantía de una reparación? | \d+\s*(días/semanas/meses/horas) |
| `/5-factores-web-talleres-mecanicos/` | ¿La hoja de reclamaciones puede ser digital? | siempre |
| `/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/` | ¿Qué son los AI Overviews y cómo afectan al tráfico orgánico? | \d+\s*% |
| `/analitica-web/` | ¿Cuánto tarda la configuración inicial de GA4 y GTM? | \d+\s*(días/semanas/meses/horas) |
| `/atribucion-de-marketing-como-medir-impacto-real/` | ¿Qué diferencia hay entre GA4 y Google Ads en la atribución? | \d+\s*(días/semanas/meses/horas) |
| `/auditoria-digital/` | ¿Cuánto tarda? | \d+\s*(días/semanas/meses/horas) |
| `/auditoria-geo-aparecer-chatgpt-gemini-google/` | ¿Cada cuánto hay que repetir la auditoría GEO? | siempre |
| `/auditoria-google-ads-pymes-que-revisar/` | ¿Qué son las palabras clave negativas? | nunca |
| `/blog-para-monetizacion/` | ¿Cuánto tiempo tarda un blog en generar ingresos? | \d+\s*(días/semanas/meses/horas) |
| `/blog-para-monetizacion/` | ¿Puedo gestionar el blog yo mismo después del setup? | € |
| `/brandformance-como-unir-marca-y-performance/` | ¿Cuánto tiempo tarda en verse el resultado del brandformance? | \d+\s*(días/semanas/meses/horas) |
| `/chatbot-captacion-cualificacion-leads-guia-practica/` | ¿Puede el chatbot hacer seguimiento de leads que no convirtieron? | \d+\s*(días/semanas/meses/horas) |
| `/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/` | ¿Qué pasa si mi chatbot actual no cumple? | \d+\s*% |
| `/chatbot-para-clinicas-centros-salud-automatizar-citas/` | ¿El chatbot puede dar diagnósticos? | siempre |
| `/chatbot-para-clinicas-centros-salud-automatizar-citas/` | ¿Cómo se gestiona la cancelación de citas? | \d+\s*(días/semanas/meses/horas) |
| `/chatbot-para-tienda-online-guia-completa-2026/` | ¿Funciona en móvil? | \d+\s*% |
| `/chatbot-para-tienda-online-guia-completa-2026/` | ¿Cuánto tiempo tarda en estar listo? | \d+\s*(días/semanas/meses/horas) |
| `/chatbot-wordpress-como-instalarlo-que-evitar/` | ¿Cuánto cuesta mantenerlo al mes? | € |
| `/como-darse-de-alta-autonomo/` | ¿Qué es antes, el alta en Hacienda o en la Seguridad Social? | \d+\s*(días/semanas/meses/horas) |
| `/como-darse-de-alta-autonomo/` | ¿Cuánto se paga de autónomo al mes en 2026? | € |
| `/como-elegir-chatbot-para-empresa-checklist-2026/` | ¿Cuánto tiempo debo dedicar a evaluar opciones antes de decidir? | \d+\s*(días/semanas/meses/horas) |
| `/como-elegir-chatbot-para-empresa-checklist-2026/` | ¿Debo pedir demo antes de contratar? | siempre |
| `/como-elegir-chatbot-para-empresa-checklist-2026/` | ¿Qué pasa si el chatbot no funciona como esperaba? | \d+\s*(días/semanas/meses/horas) |
| `/como-elegir-chatbot-para-empresa-checklist-2026/` | ¿Puedo cambiar de proveedor de chatbot si no estoy satisfecho? | siempre |
| `/como-escribir-contenido-que-no-suene-a-ia/` | ¿Qué señales indican que un texto suena a IA? | siempre |
| `/como-generar-leads-calidad-pyme/` | ¿Es mejor tener muchos leads baratos o pocos leads cualificados? | \d+\s*% |
| `/como-generar-leads-calidad-pyme/` | ¿Cómo sé si mis leads son de mala calidad? | \d+\s*% |
| `/como-gestionar-reputacion-online-empresa/` | ¿Es útil tener testimonios en la web además de reseñas en Google? | siempre |
| `/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/` | ¿Qué presupuesto debería dedicar una pyme a herramientas de IA en 2026? | \d+\s*(días/semanas/meses/horas), € |
| `/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/` | ¿Debería una pyme invertir en IA propia o usar herramientas SaaS? | \d+\s*% |
| `/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/` | ¿Qué es llms.txt y necesito tenerlo? | garantiz |
| `/consultor-seo/` | ¿Con qué datos trabajáis? | siempre |
| `/consultor-seo/` | ¿Podéis garantizar la primera posición en Google? | garantiz |
| `/consultor-seo/` | ¿Cuánto tiempo se tarda en ver resultados? | siempre |
| `/cro-shopware-optimizar-conversion-tienda/` | ¿Cuál es una buena tasa de conversión en ecommerce? | \d+\s*% |
| `/cuanto-cuesta-agencia-marketing-digital-espana-2026/` | ¿Cuánto cuesta de media una agencia de marketing digital en España? | € |
| `/cuanto-cuesta-agencia-marketing-digital-espana-2026/` | ¿El precio incluye la inversión en publicidad? | siempre |
| `/cuanto-cuesta-agencia-marketing-digital-espana-2026/` | ¿Cómo sé si estoy pagando de más? | \d+\s*% |
| `/cuanto-cuesta-pagina-web-profesional/` | ¿Cuánto tarda en hacerse una web profesional? | \d+\s*(días/semanas/meses/horas) |
| `/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/` | ¿Cuánto dura el contrato? | \d+\s*(días/semanas/meses/horas) |
| `/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/` | ¿Ha subido la cuota de autónomos en 2026? | \d+\s*% |
| `/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/` | ¿Cuánto paga un autónomo de cuota mínima en 2026? | € |
| `/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/` | ¿Qué es la tarifa plana de autónomos en 2026? | \d+\s*(días/semanas/meses/horas), € |
| `/diseno-de-paginas-web/` | ¿Cuánto tarda en estar lista la web? | \d+\s*(días/semanas/meses/horas), siempre |
| `/diseno-de-paginas-web/paginas-corporativas/` | ¿Cuánto cuesta una página web corporativa profesional? | € |
| `/diseno-de-paginas-web/paginas-corporativas/` | ¿Cuánto tarda en estar lista la web corporativa? | \d+\s*(días/semanas/meses/horas) |
| `/diseno-web-para-clinicas/` | ¿Cuánto cuesta una web para una clínica o centro de salud? | € |
| `/diseno-web-para-coaches/` | ¿Cuánto cuesta una web para un coach o consultor? | € |
| `/diseno-web-para-dentistas/` | ¿Cuánto cuesta una web para una clínica dental? | € |
| `/diseno-web-para-dentistas/` | ¿Cuánto tarda en estar lista la web de mi clínica? | \d+\s*(días/semanas/meses/horas) |
| `/diseno-web-tienda-online/` | ¿Por qué WooCommerce y no Shopify? | \d+\s*%, € |
| `/ecommerce-dropshipping-con-participacion/` | ¿Por qué un modelo híbrido en lugar de solo comisión por ventas? | garantiz, € |
| `/ecommerce-dropshipping-con-participacion/` | ¿Cuánto tiempo tarda en ser rentable una tienda de dropshipping? | \d+\s*(días/semanas/meses/horas) |
| `/ecommerce-dropshipping-con-participacion/` | ¿Qué proveedores de dropshipping usáis? | garantiz, siempre |
| `/ejemplos-y-diferencias-entre-buscadores-y-navegadores/` | ¿Cuáles son los navegadores más usados? | \d+\s*% |
| `/ejemplos-y-diferencias-entre-buscadores-y-navegadores/` | ¿Cuáles son los buscadores más usados? | \d+\s*% |
| `/email-marketing/` | ¿Puedo usar mi lista de contactos actual? | siempre |
| `/email-marketing/` | ¿Cuánto tiempo tarda en verse el retorno? | \d+\s*(días/semanas/meses/horas), primer[ao]s? (posici/puesto/resultado) |
| `/geo-shopware-agentic-commerce-chatgpt/` | ¿Qué necesita mi tienda para vender por Agentic Commerce? | siempre |
| `/google-business-profile/` | ¿Cuánto tarda en verse el resultado de optimizar la ficha? | \d+\s*(días/semanas/meses/horas), primer[ao]s? (posici/puesto/resultado) |
| `/google-business-profile/` | ¿Puedo gestionar Google Business Profile yo mismo? | siempre |
| `/google-merchant-center-ecommerce-guia/` | ¿Cuánto tarda Google en aprobar los productos? | \d+\s*(días/semanas/meses/horas) |
| `/google-my-business-empresas-guia/` | ¿Cuánto tiempo tarda en verificarse una ficha de Google? | \d+\s*(días/semanas/meses/horas) |
| `/google-my-business-empresas-guia/` | ¿Tengo que responder a todas las reseñas? | siempre |
| `/ha-muerto-el-seo-con-la-ia/` | ¿Qué ventaja tiene un experto SEO que usa IA frente a uno que no la usa? | siempre |
| `/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/` | ¿Merece la pena pagar por Claude, ChatGPT Plus o Gemini Advanced? | € |
| `/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/` | ¿Las herramientas de IA para marketing respetan la privacidad de los datos? | siempre |
| `/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/` | ¿Cuánto tiempo necesito para aprender a usar herramientas de IA en mi marketing? | \d+\s*(días/semanas/meses/horas) |
| `/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/` | ¿Cada cuánto debo actualizar la bio de Instagram? | siempre |
| `/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/` | ¿Cuánto cuesta anunciarse en LinkedIn para una pyme? | € |
| `/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/` | ¿Funciona el vídeo en LinkedIn para pymes? | \d+\s*% |
| `/marketing-de-contenidos/` | ¿En cuánto tiempo empieza a posicionar el contenido? | \d+\s*(días/semanas/meses/horas) |
| `/marketing-digital-con-ia-y-respuestas-cero-clic/` | ¿El cero clic significa que el SEO ya no sirve? | siempre |
| `/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/` | ¿Cuánto dinero necesita un autónomo para hacer marketing digital? | € |
| `/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/` | ¿Cuánto tiempo tarda en llegar el primer cliente por Google? | \d+\s*(días/semanas/meses/horas) |
| `/marketing-shopware/` | ¿Hacéis Google Shopping y campañas de Ads para Shopware? | siempre |
| `/marketing-shopware/` | ¿En cuánto tiempo se ven resultados? | \d+\s*(días/semanas/meses/horas) |
| `/migrar-shopware-prestashop-woocommerce-seo/` | ¿Se pierde tráfico al migrar a Shopware? | \d+\s*% |
| `/oferta-seo-geo-gbp/` | ¿Qué incluye el paquete SEO + GEO + GBP? | € |
| `/oferta-seo-geo-gbp/` | ¿Cuándo se ven los resultados? | \d+\s*(días/semanas/meses/horas), primer[ao]s? (posici/puesto/resultado) |
| `/oferta-seo-geo-gbp/` | ¿Hay permanencia? | \d+\s*(días/semanas/meses/horas) |
| `/oferta-seo-geo-gbp/` | ¿Conseguís reseñas para mi negocio? | nunca |
| `/oferta-web-seo-organico/` | ¿Qué pasa después de los 6 meses de SEO? | € |
| `/oferta-web-seo-organico/` | ¿Puedo contratar solo la web, sin el SEO? | € |
| `/oferta-web-seo-organico/` | ¿Hay permanencia? | \d+\s*(días/semanas/meses/horas) |
| `/oferta-web-seo/` | ¿Qué pasa después de los 6 meses? | \d+\s*(días/semanas/meses/horas), € |
| `/oferta-web-seo/` | ¿Puedo contratar solo la web, sin el SEO? | € |
| `/oferta-web-seo/` | ¿Hay permanencia o compromiso? | \d+\s*(días/semanas/meses/horas) |
| `/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/` | ¿Cuánto tiempo tarda en funcionar el GEO? | \d+\s*(días/semanas/meses/horas) |
| `/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/` | ¿Cuánto cuesta un chatbot para empresas? | € |
| `/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/` | ¿Cuánto tiempo tarda en estar operativo? | \d+\s*(días/semanas/meses/horas) |
| `/que-revisar-antes-de-invertir-mas-en-marketing-digital/` | ¿Es normal no ver resultados en los primeros meses? | nunca |
| `/que-revisar-antes-de-invertir-mas-en-marketing-digital/` | ¿Cuándo tiene sentido hacer una auditoría digital? | siempre |
| `/redes-sociales-para-empresas-2026-que-funciona-de-verdad-segun-los-datos/` | ¿Sigue funcionando Facebook para empresas en 2026? | \d+\s*% |
| `/reputacion-online/` | ¿Cuánto tiempo tarda en mejorar la reputación online? | \d+\s*(días/semanas/meses/horas), primer[ao]s? (posici/puesto/resultado) |
| `/senales-web-necesita-rediseno/` | ¿Cuánto tarda un rediseño web? | \d+\s*(días/semanas/meses/horas) |
| `/senales-web-necesita-rediseno/` | ¿Cómo sé si mi web tiene tasa de rebote alta? | \d+\s*%, siempre |
| `/seo-local-empresas-servicios/` | ¿Cuánto tiempo tarda el SEO local? | \d+\s*(días/semanas/meses/horas) |
| `/seo-para-clinicas-centros-salud-captar-pacientes-google/` | ¿Cuánto tarda una clínica en notar resultados con SEO? | \d+\s*(días/semanas/meses/horas) |
| `/seo-para-clinicas-centros-salud-captar-pacientes-google/` | ¿Es imprescindible Google Business Profile para una clínica? | \d+\s*% |
| `/seo-posicionamiento-web-organico/` | ¿En cuánto tiempo se ven resultados SEO? | \d+\s*(días/semanas/meses/horas) |
| `/seo-posicionamiento-web-organico/` | ¿Trabajáis con las actualizaciones del algoritmo de Google? | siempre |
| `/smm-social-media-marketing/` | ¿Qué resultados puedo esperar y en cuánto tiempo? | \d+\s*(días/semanas/meses/horas), primer[ao]s? (posici/puesto/resultado) |
| `/whatsapp-marketing/` | ¿Es legal enviar mensajes de marketing por WhatsApp? | siempre |
| `/whatsapp-marketing/` | ¿Cuánto tarda en verse resultados? | \d+\s*(días/semanas/meses/horas) |
| `/woocommerce-vs-shopify-cual-elegir-tienda-online/` | ¿Shopify cobra comisión por cada venta? | \d+\s*%, € |
| `/woocommerce-vs-shopify-cual-elegir-tienda-online/` | ¿De quién es la tienda en cada caso? | \d+\s*% |

## Propuesta de revisión (30–45 min)
1. Aprobar en bloque las FAQs informativas de artículos (qué es GEO, qué es un chatbot…), que no comprometen a la empresa.
2. Revisar una a una las FAQs de las páginas de oferta y servicio (precio, permanencia, plazos, qué incluye).
3. Corregir en la web las que no se quieran mantener, para que web y asistente digan lo mismo.
