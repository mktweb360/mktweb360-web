// Ofertas vigentes con precio y VALORES DE RESPALDO de sus cifras.
// Decisión de José (25/10/2026): la web y el asistente NO muestran precios de servicios; solo las ofertas llevan precio.
// Sin imports: lo usan el asistente (servidor), componentes de cliente y las pruebas (node --experimental-strip-types).
//
// Fuente única del precio de la oferta SEO + GEO + Google Business Profile (decisión de José, 29/10/2026):
// TODO lo lee de `preciosOfertaSeo()` (lib/precios-planes.ts), que toma el catálogo de MktOS y, si no responde o el
// dato no encaja, usa PRECIOS_OFERTA_SEO_RESPALDO de aquí. Las páginas, los banners, la guía y el asistente reciben ese
// resultado y lo aplican con `lineasOfertas(lang, p)`, `importesOfertas(p)` o `preciosEnTexto(texto, p)`.
// No escribas 349/149 a mano en una página: usa estos valores o `preciosEnTexto`.
// Al cambiar o retirar una oferta, actualiza aquí y revisa banners, páginas de oferta, llms.txt y las pruebas (skill gestion-campanas-temporales).

export type OfertaLang = "es" | "en" | "fr";

/** SEO + GEO + Google Maps: 349 €/mes sin permanencia, o 149 €/mes los 6 primeros meses con permanencia de 6 meses. IVA no incluido. */
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
        es: `SEO + GEO + Google Maps: ${p.sinPermanencia} €/mes + IVA sin permanencia, o ${p.permanencia6m} €/mes + IVA durante 6 meses con permanencia de 6 meses.`,
        en: `SEO + GEO + Google Maps: €${p.sinPermanencia}/month + VAT with no minimum term, or €${p.permanencia6m}/month + VAT for 6 months with a 6-month commitment.`,
        fr: `SEO + GEO + Google Maps : ${p.sinPermanencia} €/mois HT sans engagement, ou ${p.permanencia6m} €/mois HT pendant 6 mois avec 6 mois d'engagement.`,
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
}

/** Ofertas con los precios de respaldo (pruebas y usos sin acceso al catálogo). */
export const OFERTAS_VIGENTES: OfertaVigente[] = ofertasVigentes();

/** Importes que el asistente puede citar: solo los de las ofertas vigentes. */
export function importesOfertas(p: PreciosOfertaSeo = PRECIOS_OFERTA_SEO_RESPALDO): number[] {
  return [p.sinPermanencia, p.permanencia6m, PRECIO_WEB_PROFESIONAL_DESDE, PRECIO_TIENDA_ONLINE_DESDE];
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
