# HISTORIAL — mktweb360.com v4

**Documento vivo. Fuente de verdad del estado del sitio.**
**Regla de uso:** leer SIEMPRE al inicio de cualquier sesión. Actualizar SIEMPRE al cerrar.
**Última actualización:** 12 octubre 2026 (sesión 37 del portátil)

Esta versión AÑADE §0 a la v3 (HISTORIAL-mktweb360-web-v3.md), que sigue vigente para la arquitectura, las reglas permanentes y el gate de verificación (§5-§7).

**Aviso:** la v3 se quedó en el 4 de agosto. Entre agosto y el 10 de octubre hubo muchos commits (#11-#48: oferta SEO + GEO + GBP, precios SEO, páginas de Toledo, i18n, títulos, schema…) que no están registrados aquí; ver `git log` y los registros de esas sesiones. Consolidar en el próximo cierre que trabaje sobre esta web.

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

### Pendiente

- Comprobar que el módulo RT103 de MktOS lee `fichaGoogle` del webhook; si no, sacarla de `mensaje`.
- Semrush: proyecto duplicado de mktweb360.com sin auditoría pendiente de que lo borre José.
- §4.6 de la v3 (verificación de la ficha de Google Business): sin novedades registradas en esta sesión.
