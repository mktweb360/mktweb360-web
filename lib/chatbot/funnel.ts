// Sugerencias del asistente (botones bajo cada mensaje). Llevan al visitante por el embudo:
// explorar el servicio de la página → contar su caso → presupuesto, llamada o auditoría.
// Se usan en el navegador (apertura) y en el servidor (después de cada respuesta).
import type { Lang } from "./core";

export type Ctx = "seo" | "geo" | "gbp" | "web" | "tienda" | "ads" | "redes" | "ia" | "email" | "general";
export type ChipId = "incluye" | "precio" | "negocio" | "auditoria" | "presupuesto" | "llamada" | "persona" | "servicios";
export interface Chip { id: ChipId; label: string }

/** Servicio de la página a partir de su ruta. */
export function ctxOf(path: string): Ctx {
  const p = path.toLowerCase();
  if (/geo-|\/geo|chatgpt|ai-search|generative/.test(p)) return "geo";
  if (/google-business|gbp|resenas|reviews/.test(p)) return "gbp";
  if (/tienda|ecommerce|shop|woocommerce|shopify|shopware/.test(p)) return "tienda";
  if (/seo|posicion/.test(p)) return "seo";
  if (/sem|ads|ppc/.test(p)) return "ads";
  if (/redes|social|smm|instagram|linkedin|tiktok/.test(p)) return "redes";
  if (/chatbot|ia-|-ia\/|ai-|agentes|automatiza/.test(p)) return "ia";
  if (/email|newsletter/.test(p)) return "email";
  if (/web|diseno|pagina|landing/.test(p)) return "web";
  return "general";
}

/** Ruta canónica del servicio (para «¿Qué incluye?»). */
export const CTX_ROUTE: Record<Ctx, string | null> = {
  seo: "/seo-posicionamiento-web-organico/",
  geo: "/geo-posicionamiento-ia/",
  gbp: "/google-business-profile/",
  web: "/diseno-de-paginas-web/",
  tienda: "/tienda-online/",
  ads: "/sem-publicidad-ppc/",
  redes: "/smm-social-media-marketing/",
  ia: "/ia-aplicada-al-marketing/",
  email: "/email-marketing/",
  general: null,
};

const INCLUYE: Record<Ctx, Record<Lang, string>> = {
  seo: { es: "¿Qué incluye el SEO?", en: "What does SEO include?", fr: "Que comprend le SEO ?" },
  geo: { es: "¿Qué es el GEO?", en: "What is GEO?", fr: "Qu'est-ce que le GEO ?" },
  gbp: { es: "¿Qué hacéis con la ficha de Google?", en: "What do you do with my Google profile?", fr: "Que faites-vous avec ma fiche Google ?" },
  web: { es: "¿Qué incluye una web?", en: "What does a website include?", fr: "Que comprend un site web ?" },
  tienda: { es: "¿Qué incluye la tienda online?", en: "What does the online shop include?", fr: "Que comprend la boutique en ligne ?" },
  ads: { es: "¿Cómo gestionáis Google Ads?", en: "How do you manage Google Ads?", fr: "Comment gérez-vous Google Ads ?" },
  redes: { es: "¿Qué hacéis en redes sociales?", en: "What do you do on social media?", fr: "Que faites-vous sur les réseaux sociaux ?" },
  ia: { es: "¿Cómo aplicáis la IA a mi negocio?", en: "How do you apply AI to my business?", fr: "Comment appliquez-vous l'IA ?" },
  email: { es: "¿Qué incluye el email marketing?", en: "What does email marketing include?", fr: "Que comprend l'emailing ?" },
  general: { es: "¿Qué servicios tenéis?", en: "What services do you offer?", fr: "Quels services proposez-vous ?" },
};
const PRECIO: Record<Ctx, Record<Lang, string>> = {
  seo: { es: "¿Cuánto cuesta el SEO?", en: "How much is SEO?", fr: "Combien coûte le SEO ?" },
  geo: { es: "¿Cuánto cuesta el GEO?", en: "How much is GEO?", fr: "Combien coûte le GEO ?" },
  gbp: { es: "¿Cuánto cuesta la ficha de Google?", en: "How much is the Google profile service?", fr: "Combien coûte la fiche Google ?" },
  web: { es: "¿Cuánto cuesta una web?", en: "How much is a website?", fr: "Combien coûte un site ?" },
  tienda: { es: "¿Cuánto cuesta una tienda online?", en: "How much is an online shop?", fr: "Combien coûte une boutique ?" },
  ads: { es: "¿Cuánto cuesta la gestión de Ads?", en: "How much is Ads management?", fr: "Combien coûte la gestion Ads ?" },
  redes: { es: "¿Cuánto cuestan las redes?", en: "How much is social media?", fr: "Combien coûtent les réseaux ?" },
  ia: { es: "¿Cuánto cuesta un chatbot?", en: "How much is a chatbot?", fr: "Combien coûte un chatbot ?" },
  email: { es: "¿Cuánto cuesta el email marketing?", en: "How much is email marketing?", fr: "Combien coûte l'emailing ?" },
  general: { es: "¿Qué precios tenéis?", en: "What are your prices?", fr: "Quels sont vos tarifs ?" },
};
const FIJOS: Record<"negocio" | "auditoria" | "presupuesto" | "llamada" | "persona" | "servicios", Record<Lang, string>> = {
  negocio: { es: "Te cuento mi caso", en: "Let me tell you about my business", fr: "Je vous explique mon cas" },
  auditoria: { es: "Quiero la auditoría gratuita", en: "I'd like the free audit", fr: "Je veux l'audit gratuit" },
  presupuesto: { es: "Pedir presupuesto", en: "Request a quote", fr: "Demander un devis" },
  llamada: { es: "Que me llaméis", en: "Call me", fr: "Rappelez-moi" },
  persona: { es: "Hablar con José", en: "Talk to José", fr: "Parler à José" },
  servicios: { es: "¿Qué servicios tenéis?", en: "What services do you offer?", fr: "Quels services proposez-vous ?" },
};

export function chip(id: ChipId, ctx: Ctx, lang: Lang): Chip {
  const label = id === "incluye" ? INCLUYE[ctx][lang] : id === "precio" ? PRECIO[ctx][lang] : FIJOS[id][lang];
  return { id, label };
}

/** Sugerencias al abrir el chat: específicas del servicio de la página. */
export function openingChips(ctx: Ctx, lang: Lang): Chip[] {
  return (["incluye", "precio", "auditoria", "persona"] as ChipId[]).map((id) => chip(id, ctx, lang));
}

/** Sugerencias tras cada respuesta, según la etapa del embudo. */
export function funnelChips(ctx: Ctx, biz: boolean, lang: Lang, used: ChipId | null = null): Chip[] {
  const ids: ChipId[] = biz ? ["presupuesto", "llamada", "auditoria"] : ["negocio", "incluye", "precio", "auditoria"];
  return ids.filter((id) => id !== used).slice(0, 3).map((id) => chip(id, ctx, lang));
}
