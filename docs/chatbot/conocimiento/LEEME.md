# Conocimiento del asistente
- `paginas-web.json`: índice de las páginas de la web (ruta, URL, tipo, servicio inferido, título y descripción), generado el 18/10/2026 a partir de los metadatos de `app/(site)/*/page.tsx`. Sirve para personalizar el asistente por URL. El servicio está inferido por el nombre de la ruta y hay que **revisarlo** antes de usarlo.
- Precios y modalidades: **no se copian aquí**. El asistente los lee en vivo del catálogo de MktOS (`/api/public/catalog`), con `lib/planes-seo.ts` de respaldo, igual que la web.
- Pendiente: extraer las FAQs y los bloques «qué hacemos» de cada página de servicio, y crear en MktOS la base curada (`crm.assistant_kb`) con las respuestas que apruebe José.
