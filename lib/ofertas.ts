// Ofertas vigentes con precio y VALORES DE RESPALDO de sus cifras.
// Decisión de José (25/10/2026): la web y el asistente NO muestran precios de servicios; solo las ofertas llevan precio.
// Solo importa lib/black-friday.ts (sin más dependencias): lo usan el asistente (servidor), componentes de cliente y las pruebas (node --experimental-strip-types).
//
// Fuente única del precio de la oferta SEO + GEO + Google Business Profile (decisión de José, 29/10/2026):
// TODO lo lee de `preciosOfertaSeo()` (lib/precios-planes.ts), que toma el catálogo de MktOS y, si no responde o el
// dato no encaja, usa PRECIOS_OFERTA_SEO_RESPALDO de aquí. Las páginas, los banners, la guía y el asistente reciben ese
// resultado y lo aplican con `lineasOfertas(lang, p)`, `importesOfertas(p)` o `preciosEnTexto(texto, p)`.
// No escribas 349/149 a mano en una página: usa estos valores o `preciosEnTexto`.
// Al cambiar o retirar una oferta, actualiza aquí y revisa banners, páginas de oferta, llms.txt y las pruebas (skill gestion-campanas-temporales).

import { lineaBf, PRECIO_GEO_SOLO, IMPORTES_BF } from "./black-friday.ts";

export type OfertaLang = "es" | "en" | "fr";

/**
 * SEO + GEO + Google Maps. IVA no incluido. Desde el 15/11/2026 (Black Friday, ver lib/black-friday.ts): 149 €/mes durante 6 meses
 * SIN permanencia (contratando hasta el 30/11/2026) y tarifa general de 349 €/mes sin permanencia.
 * Los nombres PRECIO_..._SIN_PERMANENCIA y PRECIO_..._PERMANENCIA_6M y los campos sinPermanencia / permanencia6m son heredados:
 * «permanencia6m» es hoy el precio de campaña de los 6 primeros meses (ya NO lleva permanencia). No se renombran para no romper el catálogo de MktOS.
 */
export const PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA = 349;
export const PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M = 149;
/** Web profesional: desde 249 € + IVA (pago único; hosting, dominio y correo no incluidos). */
export const PRECIO_WEB_PROFESIONAL_DESDE = 249;
/** Tienda online: desde 490 € (sin comisiones por venta ni licencias mensuales). */
export const PRECIO_TIENDA_ONLINE_DESDE = 490;

/** Precios vigentes de la oferta SEO + GEO + Google Business Profile (€/mes, sin IVA). */
export interface PreciosOfertaSeo {
  sinPermanencia: number;
  permanencia6m: number;
}
/** Respaldo si el catálogo de MktOS no responde o no trae un precio válido. */
export const PRECIOS_OFERTA_SEO_RESPALDO: PreciosOfertaSeo = {
  sinPermanencia: PRECIO_SEO_GEO_MAPS_SIN_PERMANENCIA,
  permanencia6m: PRECIO_SEO_GEO_MAPS_PERMANENCIA_6M,
};

export interface OfertaVigente {
  id: string;
  ruta: string; // ruta ES canónica de la landing de la oferta
  texto: Record<OfertaLang, string>;
}

export function ofertasVigentes(p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): OfertaVigente[] {
  return [
    {
      id: "seo-geo-maps",
      ruta: "/oferta-seo-geo-gbp/",
      texto: {
        es: `SEO + GEO + Google Maps — Black Friday: ${p.permanencia6m} €/mes + IVA durante 6 meses, sin permanencia, contratando hasta el 30 de noviembre de 2026 (tarifa general: ${p.sinPermanencia} €/mes + IVA, sin permanencia). Oferta para empresas y profesionales.`,
        en: `SEO + GEO + Google Maps — Black Friday: €${p.permanencia6m}/month + VAT for 6 months, no minimum term, when you sign up by 30 November 2026 (standard rate: €${p.sinPermanencia}/month + VAT, no minimum term). Offer for businesses and professionals.`,
        fr: `SEO + GEO + Google Maps — Black Friday : ${p.permanencia6m} €/mois HT pendant 6 mois, sans engagement, en souscrivant avant le 30 novembre 2026 (tarif général : ${p.sinPermanencia} €/mois HT, sans engagement). Offre pour entreprises et professionnels.`,
      },
    },
    {
      id: "geo-solo",
      ruta: "/geo-posicionamiento-ia/",
      texto: {
        es: `GEO (posicionamiento en IA) solo: ${PRECIO_GEO_SOLO} €/mes + IVA, precio permanente, sin permanencia.`,
        en: `GEO (AI visibility) on its own: €${PRECIO_GEO_SOLO}/month + VAT, permanent price, no minimum term.`,
        fr: `GEO (visibilité dans les IA) seul : ${PRECIO_GEO_SOLO} €/mois HT, prix permanent, sans engagement.`,
      },
    },
    {
      id: "seo-local-bf",
      ruta: "/seo-local/",
      texto: { es: lineaBf("local", "es"), en: lineaBf("local", "en"), fr: lineaBf("local", "fr") },
    },
    {
      id: "crecimiento-bf",
      ruta: "/precios-seo/",
      texto: { es: `Plan Crecimiento / Multisede — ${lineaBf("crecimiento", "es")}`, en: `Growth / Multi-location plan — ${lineaBf("crecimiento", "en")}`, fr: `Plan Croissance / Multi-sites — ${lineaBf("crecimiento", "fr")}` },
    },
    {
      id: "ecommerce-s-bf",
      ruta: "/precios-seo/",
      texto: { es: `Plan Ecommerce S — ${lineaBf("ecommerce-s", "es")}`, en: `Ecommerce S plan — ${lineaBf("ecommerce-s", "en")}`, fr: `Plan Ecommerce S — ${lineaBf("ecommerce-s", "fr")}` },
    },
    {
      id: "ecommerce-m-bf",
      ruta: "/precios-seo/",
      texto: { es: `Plan Ecommerce M — ${lineaBf("ecommerce-m", "es")}`, en: `Ecommerce M plan — ${lineaBf("ecommerce-m", "en")}`, fr: `Plan Ecommerce M — ${lineaBf("ecommerce-m", "fr")}` },
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
}

/** Ofertas con los precios de respaldo (pruebas y usos sin acceso al catálogo). */
export const OFERTAS_VIGENTES: OfertaVigente[] = ofertasVigentes();

/** Importes que el asistente puede citar: solo los de las ofertas vigentes. */
export function importesOfertas(p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): number[] {
  return [...new Set([p.sinPermanencia, p.permanencia6m, PRECIO_WEB_PROFESIONAL_DESDE, PRECIO_TIENDA_ONLINE_DESDE, ...IMPORTES_BF])];
}
export const IMPORTES_OFERTAS: number[] = importesOfertas();

/** Líneas de las ofertas vigentes en el idioma pedido (para respuestas y para el prompt de la IA). */
export function lineasOfertas(lang: OfertaLang, p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): string[] {
  return ofertasVigentes(p).map((o) => `- ${o.texto[lang]}`);
}

/**
 * Cambia en un texto los precios de respaldo de la oferta SEO (349 y 149 pegados a «€», también codificados en URL)
 * por los vigentes. Si los precios vigentes son los de respaldo, devuelve el texto tal cual.
 * Para textos largos escritos con las cifras de respaldo (FAQ, banners, metadatos, JSON-LD).
 */
export function preciosEnTexto(texto: string, p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): string {
  const R = PRECIOS_OFERTA_SEO_RESPALDO;
  const cambios = ([["sinPermanencia", R.sinPermanencia], ["permanencia6m", R.permanencia6m]] as const).filter(([k, n]) => p[k] !== n);
  if (!cambios.length) return texto;
  let out = texto;
  // Dos pasadas con marcas: un precio nuevo no se confunde con el de respaldo de la otra modalidad.
  for (const [k, n] of cambios) {
    out = out
      .replace(new RegExp(`€[ \u00a0]?${n}(?![0-9.,])`, "g"), (m) => m.replace(String(n), `\u0000${k}\u0000`))
      .replace(new RegExp(`(?<!(?<!%2)[0-9.,])${n}([ \u00a0]?€|%20%E2%82%AC|%E2%82%AC)`, "g"), `\u0000${k}\u0000$1`)
      .replace(new RegExp(`("price"[ ]*:[ ]*")${n}(")`, "g"), `$1\u0000${k}\u0000$2`);
  }
  for (const [k] of cambios) out = out.split(`\u0000${k}\u0000`).join(String(p[k]));
  return out;
}

/** preciosEnTexto aplicado a un objeto de datos serializable (contenido de una página, FAQ, JSON-LD). */
export function preciosEnDatos<T>(datos: T, p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): T {
  const json = JSON.stringify(datos);
  const out = preciosEnTexto(json, p);
  return out === json ? datos : (JSON.parse(out) as T);
}
