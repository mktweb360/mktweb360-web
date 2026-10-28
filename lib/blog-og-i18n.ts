// Imagen de cada artículo en EN/FR (miniatura del listado del blog y de los relacionados).
// La clave es el slug ES. Si un artículo no tiene imagen traducida, se usa la ES (/og-{slug-es}.jpg).
// Al publicar un artículo con imagen traducida, añade aquí su línea (regla de José, 28/10/2026:
// los artículos y sus imágenes van en ES, EN y FR).

export const OG_I18N: Record<string, { en: string; fr: string }> = {
  "auditoria-seo-basica": { en: "/og-basic-seo-audit-en.jpg", fr: "/og-basic-seo-audit-fr.jpg" },
  "cuanto-tarda-el-seo-en-dar-resultados": { en: "/og-how-long-does-seo-take.jpg", fr: "/og-seo-combien-de-temps-resultats.jpg" },
  "seo-para-pymes-guia": { en: "/og-seo-for-smes-guide.jpg", fr: "/og-seo-pour-pme-guide.jpg" },
  "digitalizacion-pymes-espana-datos-ine-2026": { en: "/og-sme-digitalisation-spain-ine-data-2026.jpg", fr: "/og-digitalisation-pme-espagne-donnees-ine-2026.jpg" },
  "como-usar-planificador-de-palabras-clave-google-ads": { en: "/og-how-to-use-google-keyword-planner-en.jpg", fr: "/og-how-to-use-google-keyword-planner-fr.jpg" },
  "factura-electronica-obligatoria-autonomos-pymes": { en: "/og-electronic-invoice-spain-en.jpg", fr: "/og-electronic-invoice-spain-fr.jpg" },
  "estrategia-de-contenidos-calendario-editorial": { en: "/og-content-strategy-editorial-calendar.jpg", fr: "/og-strategie-de-contenu-calendrier-editorial.jpg" },
};

export function ogImageFor(esSlug: string, lang: string): string {
  const t = OG_I18N[esSlug];
  if (t && (lang === "en" || lang === "fr")) return t[lang];
  return `/og-${esSlug}.jpg`;
}
