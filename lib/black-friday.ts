// Campaña «Black Friday» 2026 — FUENTE ÚNICA de fechas, precios de campaña y textos.
// Decidido por José el 15/11/2026 (documentos de bandeja (6) §5.3 y (8)). Sin imports: la usan componentes de servidor y de cliente.
//
// Reglas que se cumplen aquí (y que hay que mantener):
//  - La etiqueta «Black Friday» SOLO va en las ofertas con descuento temporal. El GEO solo a 99 €/mes es PERMANENTE: sin etiqueta.
//  - Todas las ofertas: sin permanencia, importes sin IVA («+ IVA»), contratando hasta BF_FIN_ISO (incluido).
//  - Sin escasez (nada de «plazas limitadas», cuentas atrás ni «solo hoy»). La fecha de fin es un dato real.
//  - La cláusula de baja anticipada del 50 % está ELIMINADA: no debe aparecer en ninguna parte.
//  - Precio de referencia (regla de los 30 días): el «precio habitual» solo se muestra donde José confirmó (15/11/2026) que es el
//    más bajo realmente aplicado. En el pack SEO + GEO + Maps el 149 ya estaba anunciado, así que NO se presenta como rebaja:
//    se muestra el 149 de campaña y la tarifa general de 349 €/mes, sin tachado ni «antes».
//  - Al terminar la promoción de cada cliente NO se pasa automáticamente al precio habitual: se habla con el cliente (MktOS avisa un mes antes).
//
// AMPLIAR LA CAMPAÑA (solo si José lo decide, antes del 30/11/2026): cambia BF_FIN_ISO y BF_FIN_TEXTO aquí y lo demás se actualiza
// (textos, schema priceValidUntil). Revisa a mano public/llms.txt y public/llms-full.txt y las FAQ de lib/chatbot/kb.json (estáticos).
// RETIRAR LA CAMPAÑA (01/12/2026 si no se amplía): skill gestion-campanas-temporales; busca «Black Friday» y BF_ en el repo.

export type BfLang = "es" | "en" | "fr";
export type BfPlanId = "local" | "pyme" | "crecimiento" | "ecommerce-s" | "ecommerce-m";

export const BF_INICIO_ISO = "2026-11-15";
/** Último día para contratar (incluido). También es el priceValidUntil del schema Offer de las promociones. */
export const BF_FIN_ISO = "2026-11-30";
export const BF_FIN_TEXTO: Record<BfLang, string> = {
  es: "30 de noviembre de 2026",
  en: "30 November 2026",
  fr: "30 novembre 2026",
};
export const BF_FIN_CORTO: Record<BfLang, string> = { es: "30/11/2026", en: "30/11/2026", fr: "30/11/2026" };

/** GEO solo: precio PERMANENTE (no es promoción, sin etiqueta Black Friday). */
export const PRECIO_GEO_SOLO = 99;

export interface PromoBf {
  /** Precio de campaña, €/mes sin IVA. */
  promo: number;
  /** Duración del precio de campaña en meses. */
  meses: 6 | 12;
  /** Precio habitual confirmado como el más bajo aplicado en los 30 días previos; null = no se muestra como «habitual» (pack). */
  habitual: number | null;
}

export const PROMOS_BF: Record<BfPlanId, PromoBf> = {
  local: { promo: 99, meses: 6, habitual: 199 },
  pyme: { promo: 149, meses: 6, habitual: null },
  crecimiento: { promo: 413, meses: 12, habitual: 590 },
  "ecommerce-s": { promo: 314, meses: 12, habitual: 449 },
  "ecommerce-m": { promo: 553, meses: 12, habitual: 790 },
};

/** Tarifa general del pack SEO + GEO + Maps (sin permanencia). Su fuente en la web es preciosOfertaSeo(). */
export const TARIFA_GENERAL_PACK = 349;

const T = {
  es: {
    etiqueta: "Black Friday",
    mes: "€/mes + IVA",
    durante6: "durante 6 meses",
    durante12: "durante el primer año",
    habitual: "Precio habitual",
    sinPerm: "sin permanencia",
    hasta: "contratando hasta el",
    tarifaGeneral: "Tarifa general",
    destinatarios: "Oferta para empresas y profesionales",
    despues6: "Pasados los 6 meses hablamos contigo para acordar cómo seguir",
    despues12: "Pasado el primer año hablamos contigo para acordar cómo seguir",
    descuento30: "30 % de descuento",
    permanente: "Precio permanente",
  },
  en: {
    etiqueta: "Black Friday",
    mes: "€/month + VAT",
    durante6: "for 6 months",
    durante12: "for the first year",
    habitual: "Regular price",
    sinPerm: "no minimum term",
    hasta: "when you sign up by",
    tarifaGeneral: "Standard rate",
    destinatarios: "Offer for businesses and professionals",
    despues6: "After the 6 months we talk with you to agree how to continue",
    despues12: "After the first year we talk with you to agree how to continue",
    descuento30: "30% off",
    permanente: "Permanent price",
  },
  fr: {
    etiqueta: "Black Friday",
    mes: "€/mois HT",
    durante6: "pendant 6 mois",
    durante12: "pendant la première année",
    habitual: "Prix habituel",
    sinPerm: "sans engagement",
    hasta: "en souscrivant avant le",
    tarifaGeneral: "Tarif général",
    destinatarios: "Offre pour entreprises et professionnels",
    despues6: "Passés les 6 mois, nous en discutons avec vous pour convenir de la suite",
    despues12: "Passée la première année, nous en discutons avec vous pour convenir de la suite",
    descuento30: "30 % de réduction",
    permanente: "Prix permanent",
  },
} as const;

/** Importes de campaña y precios habituales que el asistente puede citar (además de los de lib/ofertas.ts). */
export const IMPORTES_BF: number[] = [
  PRECIO_GEO_SOLO,
  ...Object.values(PROMOS_BF).flatMap((p) => (p.habitual ? [p.promo, p.habitual] : [p.promo])),
  TARIFA_GENERAL_PACK,
];

function dur(lang: BfLang, m: 6 | 12) {
  return m === 6 ? T[lang].durante6 : T[lang].durante12;
}

/**
 * Línea completa de una oferta Black Friday con TODAS sus condiciones juntas (precio, duración, habitual, sin permanencia, fecha).
 * El pack no lleva «precio habitual»: se cita la tarifa general (`tarifaPack` = preciosOfertaSeo().sinPermanencia).
 */
export function lineaBf(id: BfPlanId, lang: BfLang, tarifaPack: number = TARIFA_GENERAL_PACK, habitualPlan?: number | null): string {
  const t = T[lang];
  const p = PROMOS_BF[id];
  const fin = BF_FIN_TEXTO[lang];
  const habitual = id === "pyme" ? null : (habitualPlan ?? p.habitual);
  const partes: string[] = [`${t.etiqueta}: ${p.promo} ${t.mes} ${dur(lang, p.meses)}`];
  if (habitual) partes.push(`${t.habitual}: ${habitual} ${t.mes}`);
  else if (id === "pyme") partes.push(`${t.tarifaGeneral}: ${tarifaPack} ${t.mes}`);
  partes.push(t.sinPerm, `${t.hasta} ${fin}`);
  return partes.join(" · ");
}

/** Qué pasa al terminar el periodo de la promoción (no se pasa automáticamente al precio habitual). */
export function despuesBf(id: BfPlanId, lang: BfLang): string {
  return PROMOS_BF[id].meses === 6 ? T[lang].despues6 : T[lang].despues12;
}

export function etiquetaBf(lang: BfLang): string {
  return T[lang].etiqueta;
}
export function destinatariosBf(lang: BfLang): string {
  return T[lang].destinatarios;
}
export function descuento30(lang: BfLang): string {
  return T[lang].descuento30;
}
export function permanenteTxt(lang: BfLang): string {
  return T[lang].permanente;
}
export function textoGeoSolo(lang: BfLang): string {
  const t = T[lang];
  return `${t.permanente}: ${PRECIO_GEO_SOLO} ${t.mes} · ${t.sinPerm}`;
}
