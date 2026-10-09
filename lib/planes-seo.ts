// Planes SEO por tramos — fuente única de precios y límites.
// Lanzados el 09/10/2026 con precios propuestos y aprobados por Manué para empezar a vender.
// PENDIENTE URGENTE: validar cada precio con coste por hora y tiempo medio por contenido
// (ver registro de sesión del 09/10/2026). Cambiar aquí actualiza /precios-seo/, /seo-local/
// (y sus versiones EN/FR) y el schema de ofertas.
// Precios sin IVA. No usar nunca precio tachado sin precio de referencia real (Ley 3/1991, art. 5).
//
// i18n (09/10/2026): precios, ids, enlaces y lógica de recomendación son ÚNICOS para los tres
// idiomas; solo los textos (nombre, para quién, límites, incluye, extras, condiciones y notas)
// se traducen en PLAN_TEXT / EXTRAS / CONDICIONES / NOTAS. La salida ES es idéntica a la anterior.

import { ROUTES, urlFor } from "@/lib/i18n/routes";

export type PlanLang = "es" | "en" | "fr";
export type PlanId = "local" | "pyme" | "crecimiento" | "ecommerce-s" | "ecommerce-m" | "ecommerce-l";

export interface PlanSeo {
  id: PlanId;
  nombre: string;
  paraQuien: string;
  precio: number | null; // null = presupuesto a medida
  limites: string[];
  incluye: string[];
  href?: string; // página con el detalle del plan en ese idioma, si existe
}

// ── Datos únicos (no traducibles) ────────────────────────────────────────────
const BASE: { id: PlanId; precio: number | null; esHref?: string }[] = [
  { id: "local", precio: 199, esHref: "/seo-local/" },
  { id: "pyme", precio: 349, esHref: "/oferta-seo-geo-gbp/" },
  { id: "crecimiento", precio: 590 },
  { id: "ecommerce-s", precio: 449 },
  { id: "ecommerce-m", precio: 790 },
  { id: "ecommerce-l", precio: null },
];

type PlanText = Pick<PlanSeo, "nombre" | "paraQuien" | "limites" | "incluye">;

// ── Textos por idioma ────────────────────────────────────────────────────────
const PLAN_TEXT: Record<PlanLang, Record<PlanId, PlanText>> = {
  es: {
    local: {
      nombre: "SEO Local Esencial",
      paraQuien: "Autónomos y profesionales con una web sencilla que captan clientes en su zona",
      limites: ["Web de hasta 10 páginas", "1 idioma", "1 ficha de Google", "2 contenidos al mes"],
      incluye: [
        "Auditoría técnica inicial y correcciones de SEO on-page",
        "Palabras clave de tu servicio y tu zona",
        "Google Business Profile: optimización de la ficha y 2 publicaciones al mes",
        "Respuesta a hasta 10 reseñas al mes y método para pedir reseñas reales",
        "Datos estructurados para buscadores y asistentes de IA",
        "Informe mensual",
      ],
    },
    pyme: {
      nombre: "SEO + GEO + Google Business Profile",
      paraQuien: "Pymes con web corporativa que quieren aparecer en Google, en Google Maps y en la IA",
      limites: ["Web de hasta 30 páginas", "1 idioma", "1 ficha de Google", "5 contenidos al mes"],
      incluye: [
        "SEO: auditoría técnica, palabras clave, correcciones e informe mensual",
        "GEO: seguimiento mensual de 10 preguntas en 4 asistentes de IA, contenido citable, datos estructurados y llms.txt",
        "Google Business Profile: 1 ficha optimizada, 2 publicaciones al mes y respuesta a hasta 15 reseñas al mes",
        "Datos de empresa coherentes en tu web y en 5 directorios principales",
      ],
    },
    crecimiento: {
      nombre: "Crecimiento / Multisede",
      paraQuien: "Empresas con varias sedes o una web de servicios más amplia",
      limites: ["Web de hasta 80 páginas", "1 idioma", "Hasta 3 fichas de Google", "8 contenidos al mes"],
      incluye: [
        "Todo lo del plan SEO + GEO + Google Business Profile",
        "Arquitectura de páginas por servicio y por sede sin contenido duplicado",
        "Seguimiento de hasta 20 preguntas en asistentes de IA",
        "Informe mensual por sede",
      ],
    },
    "ecommerce-s": {
      nombre: "Ecommerce S",
      paraQuien: "Tiendas online pequeñas",
      limites: ["Hasta 20 categorías", "Hasta 500 productos", "1 idioma", "4 optimizaciones o contenidos al mes"],
      incluye: [
        "SEO técnico de tienda: indexación, filtros, paginación y datos estructurados de producto",
        "Optimización de categorías y fichas de producto prioritarias",
        "GEO: contenido citable y datos de producto legibles por asistentes de IA",
        "Informe mensual",
      ],
    },
    "ecommerce-m": {
      nombre: "Ecommerce M",
      paraQuien: "Tiendas con catálogo amplio y varias familias de producto",
      limites: ["Hasta 150 categorías", "Hasta 5.000 productos", "1 idioma", "8 optimizaciones o contenidos al mes"],
      incluye: [
        "Todo lo del plan Ecommerce S",
        "Arquitectura de categorías y subcategorías para evitar canibalización",
        "Plantillas de optimización para fichas de producto a escala",
        "Informe mensual",
      ],
    },
    "ecommerce-l": {
      nombre: "Ecommerce L / a medida",
      paraQuien: "Catálogos grandes, varios idiomas o varias tiendas",
      limites: ["Más de 150 categorías o 5.000 productos", "Varios idiomas o mercados"],
      incluye: ["Alcance y precio según auditoría previa"],
    },
  },
  en: {
    local: {
      nombre: "Essential Local SEO",
      paraQuien: "Sole traders and professionals with a simple website who win clients in their local area",
      limites: ["Website of up to 10 pages", "1 language", "1 Google Business Profile listing", "2 pieces of content per month"],
      incluye: [
        "Initial technical audit and on-page SEO fixes",
        "Keywords for your service and your area",
        "Google Business Profile: listing optimisation and 2 posts per month",
        "Replies to up to 10 reviews per month and a method for requesting genuine reviews",
        "Structured data for search engines and AI assistants",
        "Monthly report",
      ],
    },
    pyme: {
      nombre: "SEO + GEO + Google Business Profile",
      paraQuien: "SMEs with a corporate website that want to appear on Google, on Google Maps and in AI assistants",
      limites: ["Website of up to 30 pages", "1 language", "1 Google Business Profile listing", "5 pieces of content per month"],
      incluye: [
        "SEO: technical audit, keywords, fixes and monthly report",
        "GEO: monthly tracking of 10 questions across 4 AI assistants, citable content, structured data and llms.txt",
        "Google Business Profile: 1 optimised listing, 2 posts per month and replies to up to 15 reviews per month",
        "Consistent business details on your website and in 5 main directories",
      ],
    },
    crecimiento: {
      nombre: "Growth / Multi-location",
      paraQuien: "Businesses with several locations or a larger service website",
      limites: ["Website of up to 80 pages", "1 language", "Up to 3 Google Business Profile listings", "8 pieces of content per month"],
      incluye: [
        "Everything in the SEO + GEO + Google Business Profile plan",
        "Page architecture by service and by location, with no duplicate content",
        "Tracking of up to 20 questions in AI assistants",
        "Monthly report per location",
      ],
    },
    "ecommerce-s": {
      nombre: "Ecommerce S",
      paraQuien: "Small online stores",
      limites: ["Up to 20 categories", "Up to 500 products", "1 language", "4 optimisations or pieces of content per month"],
      incluye: [
        "Technical store SEO: indexing, filters, pagination and product structured data",
        "Optimisation of priority categories and product pages",
        "GEO: citable content and product data that AI assistants can read",
        "Monthly report",
      ],
    },
    "ecommerce-m": {
      nombre: "Ecommerce M",
      paraQuien: "Stores with a large catalogue and several product families",
      limites: ["Up to 150 categories", "Up to 5,000 products", "1 language", "8 optimisations or pieces of content per month"],
      incluye: [
        "Everything in the Ecommerce S plan",
        "Category and subcategory architecture to avoid cannibalisation",
        "Optimisation templates for product pages at scale",
        "Monthly report",
      ],
    },
    "ecommerce-l": {
      nombre: "Ecommerce L / custom",
      paraQuien: "Large catalogues, several languages or several stores",
      limites: ["More than 150 categories or 5,000 products", "Several languages or markets"],
      incluye: ["Scope and price based on a prior audit"],
    },
  },
  fr: {
    local: {
      nombre: "SEO Local Essentiel",
      paraQuien: "Indépendants et professionnels avec un site simple qui trouvent leurs clients dans leur zone",
      limites: ["Site de 10 pages maximum", "1 langue", "1 fiche Google", "2 contenus par mois"],
      incluye: [
        "Audit technique initial et corrections SEO on-page",
        "Mots-clés de votre service et de votre zone",
        "Google Business Profile : optimisation de la fiche et 2 publications par mois",
        "Réponse à 10 avis par mois maximum et méthode pour obtenir de vrais avis",
        "Données structurées pour les moteurs de recherche et les assistants d'IA",
        "Rapport mensuel",
      ],
    },
    pyme: {
      nombre: "SEO + GEO + Google Business Profile",
      paraQuien: "PME avec un site institutionnel qui veulent apparaître sur Google, sur Google Maps et dans les assistants d'IA",
      limites: ["Site de 30 pages maximum", "1 langue", "1 fiche Google", "5 contenus par mois"],
      incluye: [
        "SEO : audit technique, mots-clés, corrections et rapport mensuel",
        "GEO : suivi mensuel de 10 questions dans 4 assistants d'IA, contenu citable, données structurées et llms.txt",
        "Google Business Profile : 1 fiche optimisée, 2 publications par mois et réponse à 15 avis par mois maximum",
        "Informations d'entreprise cohérentes sur votre site et dans 5 annuaires principaux",
      ],
    },
    crecimiento: {
      nombre: "Croissance / Multi-établissements",
      paraQuien: "Entreprises avec plusieurs établissements ou un site de services plus étendu",
      limites: ["Site de 80 pages maximum", "1 langue", "Jusqu'à 3 fiches Google", "8 contenus par mois"],
      incluye: [
        "Tout le contenu de la formule SEO + GEO + Google Business Profile",
        "Architecture de pages par service et par établissement, sans contenu dupliqué",
        "Suivi de 20 questions maximum dans les assistants d'IA",
        "Rapport mensuel par établissement",
      ],
    },
    "ecommerce-s": {
      nombre: "E-commerce S",
      paraQuien: "Petites boutiques en ligne",
      limites: ["Jusqu'à 20 catégories", "Jusqu'à 500 produits", "1 langue", "4 optimisations ou contenus par mois"],
      incluye: [
        "SEO technique de boutique : indexation, filtres, pagination et données structurées produit",
        "Optimisation des catégories et des fiches produit prioritaires",
        "GEO : contenu citable et données produit lisibles par les assistants d'IA",
        "Rapport mensuel",
      ],
    },
    "ecommerce-m": {
      nombre: "E-commerce M",
      paraQuien: "Boutiques au catalogue étendu, avec plusieurs familles de produits",
      limites: ["Jusqu'à 150 catégories", "Jusqu'à 5 000 produits", "1 langue", "8 optimisations ou contenus par mois"],
      incluye: [
        "Tout le contenu de la formule E-commerce S",
        "Architecture de catégories et sous-catégories pour éviter la cannibalisation",
        "Modèles d'optimisation pour les fiches produit à grande échelle",
        "Rapport mensuel",
      ],
    },
    "ecommerce-l": {
      nombre: "E-commerce L / sur mesure",
      paraQuien: "Grands catalogues, plusieurs langues ou plusieurs boutiques",
      limites: ["Plus de 150 catégories ou 5 000 produits", "Plusieurs langues ou marchés"],
      incluye: ["Périmètre et prix définis après un audit préalable"],
    },
  },
};

const EXTRAS: Record<PlanLang, string[]> = {
  es: [
    "Idioma adicional",
    "Ficha de Google adicional",
    "Contenidos adicionales",
    "Puesta a punto técnica inicial para webs con errores graves (sale de la auditoría gratuita)",
  ],
  en: [
    "Additional language",
    "Additional Google Business Profile listing",
    "Additional content",
    "Initial technical clean-up for websites with serious errors (identified in the free audit)",
  ],
  fr: [
    "Langue supplémentaire",
    "Fiche Google supplémentaire",
    "Contenus supplémentaires",
    "Remise à niveau technique initiale pour les sites présentant des erreurs graves (identifiées lors de l'audit gratuit)",
  ],
};

const CONDICIONES: Record<PlanLang, string[]> = {
  es: [
    "Precios sin IVA",
    "Sin permanencia: baja avisando con 30 días de antelación",
    "No incluyen rediseño o desarrollo web, link building, fotografía o vídeo ni publicidad de pago",
    "No garantizamos posiciones: trabajamos con método, datos e informe mensual",
  ],
  en: [
    "Prices exclude VAT",
    "No minimum term: cancel with 30 days' notice",
    "Not included: website redesign or development, link building, photography or video, or paid advertising",
    "We do not guarantee rankings: we work with a method, data and a monthly report",
  ],
  fr: [
    "Prix hors taxes",
    "Sans engagement : résiliation avec un préavis de 30 jours",
    "Ne comprennent pas la refonte ou le développement du site, le netlinking, la photo ou la vidéo, ni la publicité payante",
    "Nous ne garantissons pas de positions : nous travaillons avec une méthode, des données et un rapport mensuel",
  ],
};

const NOTAS: Record<PlanLang, { idiomas: string; fichaTienda: string; masSedes: string; masPaginas: string }> = {
  es: {
    idiomas: "Cada idioma adicional se presupuesta como extra.",
    fichaTienda: "Si además tienes tienda física, la ficha de Google se puede añadir como extra.",
    masSedes: "Con más de 3 sedes preparamos un presupuesto a medida.",
    masPaginas: "Con más de 80 páginas preparamos un presupuesto a medida.",
  },
  en: {
    idiomas: "Each additional language is quoted as an extra.",
    fichaTienda: "If you also have a physical shop, the Google Business Profile listing can be added as an extra.",
    masSedes: "With more than 3 locations, we prepare a custom quote.",
    masPaginas: "With more than 80 pages, we prepare a custom quote.",
  },
  fr: {
    idiomas: "Chaque langue supplémentaire fait l'objet d'un devis en supplément.",
    fichaTienda: "Si vous avez aussi une boutique physique, la fiche Google peut être ajoutée en supplément.",
    masSedes: "Au-delà de 3 établissements, nous préparons un devis sur mesure.",
    masPaginas: "Au-delà de 80 pages, nous préparons un devis sur mesure.",
  },
};

// Enlace del plan en el idioma pedido: solo si esa página existe en ese idioma (nunca a la ES).
function hrefFor(esHref: string | undefined, lang: PlanLang): string | undefined {
  if (!esHref) return undefined;
  if (lang === "es") return esHref;
  const r = ROUTES.find((x) => x.es === esHref);
  return (r && urlFor(r, lang)) || undefined;
}

function buildPlanes(lang: PlanLang): PlanSeo[] {
  return BASE.map((b) => {
    const t = PLAN_TEXT[lang][b.id];
    const href = hrefFor(b.esHref, lang);
    return { id: b.id, nombre: t.nombre, paraQuien: t.paraQuien, precio: b.precio, limites: t.limites, incluye: t.incluye, ...(href ? { href } : {}) };
  });
}

const PLANES_BY_LANG: Record<PlanLang, PlanSeo[]> = { es: buildPlanes("es"), en: buildPlanes("en"), fr: buildPlanes("fr") };

export const PLANES_SEO: PlanSeo[] = PLANES_BY_LANG.es;
export const EXTRAS_SEO = EXTRAS.es;
export const CONDICIONES_COMUNES = CONDICIONES.es;

export function planesSeo(lang: PlanLang = "es"): PlanSeo[] {
  return PLANES_BY_LANG[lang];
}
export function extrasSeo(lang: PlanLang = "es"): string[] {
  return EXTRAS[lang];
}
export function condicionesComunes(lang: PlanLang = "es"): string[] {
  return CONDICIONES[lang];
}

export function planPorId(id: PlanId, lang: PlanLang = "es"): PlanSeo {
  return PLANES_BY_LANG[lang].find((p) => p.id === id)!;
}

export function precioTexto(p: PlanSeo, lang: PlanLang = "es"): string {
  if (lang === "en") return p.precio === null ? "Custom quote" : `€${p.precio}/month + VAT`;
  if (lang === "fr") return p.precio === null ? "Sur devis" : `${p.precio} €/mois HT`;
  return p.precio === null ? "Presupuesto a medida" : `${p.precio} €/mes + IVA`;
}

// Recomendación de la calculadora. Reglas simples y explicables (únicas para los tres idiomas).
export interface RespuestasCalculadora {
  tipo: "servicios" | "tienda";
  paginas: "10" | "30" | "80" | "mas"; // webs de servicios
  categorias: "20" | "150" | "mas"; // tiendas
  productos: "500" | "5000" | "mas"; // tiendas
  fichas: "0" | "1" | "3" | "mas";
  idiomas: "1" | "mas";
}

export function recomendarPlan(r: RespuestasCalculadora, lang: PlanLang = "es"): { plan: PlanSeo; notas: string[] } {
  const N = NOTAS[lang];
  const plan = (id: PlanId) => planPorId(id, lang);
  const notas: string[] = [];
  if (r.idiomas === "mas") notas.push(N.idiomas);
  if (r.tipo === "tienda") {
    if (r.categorias === "mas" || r.productos === "mas") return { plan: plan("ecommerce-l"), notas };
    if (r.categorias === "150" || r.productos === "5000") return { plan: plan("ecommerce-m"), notas };
    if (r.fichas !== "0") notas.push(N.fichaTienda);
    return { plan: plan("ecommerce-s"), notas };
  }
  if (r.fichas === "mas") {
    notas.push(N.masSedes);
    return { plan: plan("crecimiento"), notas };
  }
  if (r.paginas === "mas") {
    notas.push(N.masPaginas);
    return { plan: plan("crecimiento"), notas };
  }
  if (r.paginas === "80" || r.fichas === "3") return { plan: plan("crecimiento"), notas };
  if (r.paginas === "30") return { plan: plan("pyme"), notas };
  return { plan: plan("local"), notas };
}
