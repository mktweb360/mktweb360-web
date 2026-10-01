/**
 * Enlazado interno: temas de cada página y página de servicio (pilar) de cada tema.
 *
 * Objetivo SEO:
 *  - Que el módulo "Artículos relacionados" muestre artículos del MISMO tema
 *    (antes, las categorías que no existían caían en "últimos 3 artículos" y
 *    3 posts recibían ~145 enlaces internos cada uno).
 *  - Que cada artículo enlace con anchor descriptivo a la página de servicio
 *    propietaria de su tema (reparto de autoridad hacia las URLs comerciales).
 *  - Resultados deterministas (sin aleatoriedad): enlaces estables entre builds
 *    y sin desajustes de hidratación.
 */
import { allPosts, type BlogPost } from "@/lib/blog";

export type Topic =
  | "seo"
  | "seo-local"
  | "geo"
  | "sem"
  | "diseno-web"
  | "ecommerce"
  | "shopware"
  | "redes-sociales"
  | "ia"
  | "contenidos"
  | "email"
  | "whatsapp"
  | "reputacion"
  | "analitica"
  | "estrategia"
  | "negocio";

type Pillar = { href: string; anchor: string; lead: string };

/** Página de servicio propietaria de cada tema (anchor = keyword de la URL). */
export const PILLARS: Record<Topic, Pillar> = {
  seo: { href: "/seo-posicionamiento-web-organico/", anchor: "servicio de posicionamiento SEO", lead: "¿Prefieres que lo hagamos por ti? Conoce nuestro" },
  "seo-local": { href: "/seo-local/", anchor: "servicio de SEO local", lead: "¿Quieres aparecer cuando te buscan en tu zona? Conoce nuestro" },
  geo: { href: "/geo-posicionamiento-ia/", anchor: "posicionamiento en IA (GEO)", lead: "¿Quieres que ChatGPT, Gemini y Perplexity recomienden tu negocio? Conoce nuestro servicio de" },
  sem: { href: "/sem-publicidad-ppc/", anchor: "gestión de campañas de Google Ads", lead: "¿Prefieres delegarlo? Conoce nuestra" },
  "diseno-web": { href: "/diseno-de-paginas-web/", anchor: "diseño de páginas web", lead: "¿Necesitas una web que capte clientes? Conoce nuestro servicio de" },
  ecommerce: { href: "/diseno-de-paginas-web/diseno-tiendas-online/", anchor: "diseño de tiendas online", lead: "¿Vas a montar o mejorar tu ecommerce? Conoce nuestro servicio de" },
  shopware: { href: "/marketing-shopware/", anchor: "marketing para tiendas Shopware", lead: "¿Tu tienda funciona con Shopware? Conoce nuestro servicio de" },
  "redes-sociales": { href: "/smm-social-media-marketing/", anchor: "gestión de redes sociales para empresas", lead: "¿Prefieres que lo gestionemos nosotros? Conoce nuestra" },
  ia: { href: "/ia-aplicada-al-marketing/", anchor: "IA aplicada al marketing", lead: "¿Quieres aplicarlo en tu empresa? Conoce nuestro servicio de" },
  contenidos: { href: "/marketing-de-contenidos/", anchor: "marketing de contenidos", lead: "¿Prefieres delegar la estrategia? Conoce nuestro servicio de" },
  email: { href: "/email-marketing/", anchor: "email marketing para empresas", lead: "¿Quieres campañas que conviertan? Conoce nuestro servicio de" },
  whatsapp: { href: "/whatsapp-marketing/", anchor: "WhatsApp marketing", lead: "¿Quieres vender por WhatsApp de forma profesional? Conoce nuestro servicio de" },
  reputacion: { href: "/reputacion-online/", anchor: "gestión de la reputación online", lead: "¿Necesitas ayuda con tus reseñas? Conoce nuestro servicio de" },
  analitica: { href: "/analitica-web/", anchor: "analítica web", lead: "¿Quieres medir lo que de verdad te trae clientes? Conoce nuestro servicio de" },
  estrategia: { href: "/auditoria-digital/", anchor: "auditoría de marketing digital", lead: "¿No sabes por dónde empezar? Solicita nuestra" },
  negocio: { href: "/auditoria-digital/", anchor: "auditoría de marketing digital", lead: "¿Quieres saber qué mejorar primero en tu presencia online? Solicita nuestra" },
};

/** Categorías del blog → tema. */
const CATEGORY_TOPIC: Record<string, Topic> = {
  "SEO": "seo",
  "SEO Local": "seo-local",
  "GEO": "geo",
  "SEM": "sem",
  "Diseño Web": "diseno-web",
  "Ecommerce": "ecommerce",
  "Shopware": "shopware",
  "Social Media": "redes-sociales",
  "IA y Automatización": "ia",
  "IA": "ia",
  "Automatización": "ia",
  "Marketing de Contenidos": "contenidos",
  "Marketing Digital": "estrategia",
  "Estrategia": "estrategia",
  "Estrategia Digital": "estrategia",
  "Captación": "estrategia",
  "Pymes": "negocio",
  "Emprendedores": "negocio",
  "Autónomos": "negocio",
};

/** Etiquetas que, si aparecen, fijan un tema más preciso que la categoría. */
const TAG_TOPIC: [RegExp, Topic][] = [
  [/^(email|email marketing|newsletter|mailing)$/i, "email"],
  [/^whatsapp/i, "whatsapp"],
  [/^(resenas|reseñas|reputacion-online|reputación online)$/i, "reputacion"],
  [/^(analítica|analitica|atribucion|medicion|roi)$/i, "analitica"],
  [/^(chatbot)$/i, "ia"],
  [/^(cuota|cuotas|reta|mei|tarifa plana|seguridad social|factura electr[oó]nica|factura-electronica|verifactu|subvenciones|ayudas|kit-digital|alta autonomo|alta autónomo)$/i, "negocio"],
];

/** Alias de los valores de `category` que usan las páginas (ES/EN/FR). */
const PROP_ALIASES: Record<string, Topic> = {
  "seo local": "seo-local",
  "seo": "seo",
  "ecommerce": "ecommerce",
  "strategy": "estrategia",
  "estrategia": "estrategia",
  "estrategia digital": "estrategia",
  "business": "estrategia",
  "marketing digital": "estrategia",
  "digital marketing": "estrategia",
  "diseño web": "diseno-web",
  "web design": "diseno-web",
  "création web": "diseno-web",
  "social media": "redes-sociales",
  "ia · estrategia": "ia",
  "ai · strategy": "ia",
  "reputation": "reputacion",
  "reputación online": "reputacion",
  "analítica": "analitica",
  "geo": "geo",
  "sem": "sem",
};

/** Páginas que no son artículos: su tema propio (slug sin barras). */
const PAGE_TOPIC: Record<string, Topic> = {
  "seo-posicionamiento-web-organico": "seo",
  "auditoria-seo-basica": "seo",
  "seo-local": "seo-local",
  "google-business-profile": "seo-local",
  "agencia-marketing-digital-fuenlabrada": "seo-local",
  "geo-posicionamiento-ia": "geo",
  "geo-posicionamiento-ia-chatgpt-empresas-espana": "geo",
  "sem-publicidad-ppc": "sem",
  "diseno-de-paginas-web": "diseno-web",
  "diseno-de-paginas-web/paginas-corporativas": "diseno-web",
  "diseno-de-paginas-web/diseno-paginas-web-empresa": "diseno-web",
  "diseno-de-paginas-web/diseno-tiendas-online": "ecommerce",
  "tienda-online": "ecommerce",
  "diseno-web-tienda-online": "ecommerce",
  "ecommerce-participacion-resultados": "ecommerce",
  "ecommerce-dropshipping-con-participacion": "ecommerce",
  "marketing-shopware": "shopware",
  "smm-social-media-marketing": "redes-sociales",
  "ia-aplicada-al-marketing": "ia",
  "marketing-de-contenidos": "contenidos",
  "creacion-de-blog": "contenidos",
  "blog-para-monetizacion": "contenidos",
  "email-marketing": "email",
  "whatsapp-marketing": "whatsapp",
  "reputacion-online": "reputacion",
  "analitica-web": "analitica",
  "auditoria-digital": "estrategia",
  "comunicacion-audiovisual": "redes-sociales",
};

export function topicOfPost(p: BlogPost): Topic {
  for (const t of p.tags) {
    for (const [re, topic] of TAG_TOPIC) if (re.test(t)) return topic;
  }
  return CATEGORY_TOPIC[p.category] ?? "estrategia";
}

export function topicFromCategoryProp(category?: string): Topic | undefined {
  if (!category) return undefined;
  return PROP_ALIASES[category.trim().toLowerCase()];
}

export function slugFromPath(pathname: string): string {
  return pathname.replace(/^\/(en|fr)\//, "/").replace(/^\/+|\/+$/g, "");
}

export function topicOfPage(slug: string): Topic | undefined {
  if (PAGE_TOPIC[slug]) return PAGE_TOPIC[slug];
  const post = allPosts.find((p) => p.slug === slug);
  return post ? topicOfPost(post) : undefined;
}

/** Hash estable para rotar resultados según la página (reparte los enlaces). */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return Math.abs(h);
}

const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
const isArticle = (p: BlogPost) => p.category !== "Autónomos";

/** Artículos de un tema, rotados de forma estable según la página actual. */
export function postsForTopic(topic: Topic, currentSlug: string, n: number): BlogPost[] {
  const pool = allPosts
    .filter((p) => isArticle(p) && p.slug !== currentSlug && topicOfPost(p) === topic)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
  if (pool.length <= n) return pool;
  const start = hash(currentSlug) % pool.length;
  return [...pool.slice(start), ...pool.slice(0, start)].slice(0, n);
}

/**
 * Relacionados de una página:
 * 1) relatedSlugs del post (si son artículos), 2) artículos que comparten etiquetas
 * (ordenados por nº de etiquetas comunes), 3) artículos del mismo tema.
 */
export function relatedFor(currentSlug: string, fallbackTopic: Topic | undefined, n: number): BlogPost[] {
  const out: BlogPost[] = [];
  const push = (p?: BlogPost) => {
    if (p && p.slug !== currentSlug && !out.some((o) => o.slug === p.slug) && out.length < n) out.push(p);
  };
  const current = bySlug.get(currentSlug);
  if (current) {
    current.relatedSlugs.forEach((s) => push(bySlug.get(s)));
    const scored = allPosts
      .filter((p) => isArticle(p) && p.slug !== currentSlug)
      .map((p) => ({ p, s: p.tags.filter((t) => current.tags.includes(t)).length }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || b.p.date.localeCompare(a.p.date) || a.p.slug.localeCompare(b.p.slug));
    // rotación estable dentro de los que empatan en la puntuación máxima
    scored.forEach((x) => push(x.p));
  }
  const topic = fallbackTopic ?? (current ? topicOfPost(current) : undefined);
  if (topic) postsForTopic(topic, currentSlug, n).forEach(push);
  if (out.length < n) postsForTopic("estrategia", currentSlug, n).forEach(push);
  return out;
}

/** Pilar a enlazar desde una página (null si la página ya es ese pilar). */
export function pillarFor(currentSlug: string, topic: Topic | undefined): Pillar | null {
  if (!topic) return null;
  const pillar = PILLARS[topic];
  if (slugFromPath(pillar.href) === currentSlug) return null;
  return pillar;
}
