// Ofertas vigentes con precio — ÚNICA fuente de las cifras de oferta para el asistente y para lib/planes-seo.ts.
// Decisión de José (25/10/2026): la web y el asistente NO muestran precios de servicios; solo las ofertas llevan precio.
// Sin imports: lo usan el asistente (servidor) y las pruebas (node --experimental-strip-types).
// Al cambiar o retirar una oferta, actualiza aquí y revisa banners, páginas de oferta, llms.txt y las pruebas (skill gestion-campanas-temporales).

export type OfertaLang = "es" | "en" | "fr";

/** SEO + GEO + Google Maps: 349 €/mes sin permanencia, o 149 €/mes los 6 primeros meses con permanencia de 6 meses. IVA no incluido. */
export const PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA = 349;
export const PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M = 149;
/** Web profesional: desde 249 € + IVA (pago único; hosting, dominio y correo no incluidos). */
export const PRECIO_WEB_PROFESIONAL_DESDE = 249;
/** Tienda online: desde 490 € (sin comisiones por venta ni licencias mensuales). */
export const PRECIO_TIENDA_ONLINE_DESDE = 490;

export interface OfertaVigente {
  id: string;
  ruta: string; // ruta ES canónica de la landing de la oferta
  texto: Record<OfertaLang, string>;
}

export const OFERTAS_VIGENTES: OfertaVigente[] = [
  {
    id: "seo-geo-maps",
    ruta: "/oferta-seo-geo-gbp/",
    texto: {
      es: `SEO + GEO + Google Maps: ${PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA} €/mes + IVA sin permanencia, o ${PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M} €/mes + IVA durante 6 meses con permanencia de 6 meses.`,
      en: `SEO + GEO + Google Maps: €${PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA}/month + VAT with no minimum term, or €${PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M}/month + VAT for 6 months with a 6-month commitment.`,
      fr: `SEO + GEO + Google Maps : ${PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA} €/mois HT sans engagement, ou ${PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M} €/mois HT pendant 6 mois avec 6 mois d'engagement.`,
    },
  },
  {
    id: "web-profesional",
    ruta: "/oferta-web-seo-organico/",
    texto: {
      es: `Web profesional: desde ${PRECIO_WEB_PROFESIONAL_DESDE} € + IVA (pago único; hosting, dominio y correo no incluidos).`,
      en: `Professional website: from €${PRECIO_WEB_PROFESIONAL_DESDE} + VAT (one-off payment; hosting, domain and email not included).`,
      fr: `Site professionnel : à partir de ${PRECIO_WEB_PROFESIONAL_DESDE} € HT (paiement unique ; hébergement, nom de domaine et messagerie non inclus).`,
    },
  },
  {
    id: "tienda-online",
    ruta: "/tienda-online/",
    texto: {
      es: `Tienda online: desde ${PRECIO_TIENDA_ONLINE_DESDE} € + IVA, sin comisiones por venta ni licencias mensuales.`,
      en: `Online store: from €${PRECIO_TIENDA_ONLINE_DESDE} + VAT, with no commission per sale and no monthly licences.`,
      fr: `Boutique en ligne : à partir de ${PRECIO_TIENDA_ONLINE_DESDE} € HT, sans commission par vente ni licence mensuelle.`,
    },
  },
];

/** Importes que el asistente puede citar: solo los de las ofertas vigentes. */
export const IMPORTES_OFERTAS: number[] = [
  PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA,
  PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M,
  PRECIO_WEB_PROFESIONAL_DESDE,
  PRECIO_TIENDA_ONLINE_DESDE,
];

/** Líneas de las ofertas vigentes en el idioma pedido (para respuestas y para el prompt de la IA). */
export function lineasOfertas(lang: OfertaLang): string[] {
  return OFERTAS_VIGENTES.map((o) => `- ${o.texto[lang]}`);
}
