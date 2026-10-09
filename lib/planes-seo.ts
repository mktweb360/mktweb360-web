// Planes SEO por tramos — fuente única de precios y límites.
// Lanzados el 09/10/2026 con precios propuestos y aprobados por Manué para empezar a vender.
// PENDIENTE URGENTE: validar cada precio con coste por hora y tiempo medio por contenido
// (ver registro de sesión del 09/10/2026). Cambiar aquí actualiza /precios-seo/, /seo-local/
// y el schema de ofertas.
// Precios sin IVA. No usar nunca precio tachado sin precio de referencia real (Ley 3/1991, art. 5).

export type PlanId = "local" | "pyme" | "crecimiento" | "ecommerce-s" | "ecommerce-m" | "ecommerce-l";

export interface PlanSeo {
  id: PlanId;
  nombre: string;
  paraQuien: string;
  precio: number | null; // null = presupuesto a medida
  limites: string[];
  incluye: string[];
  href?: string; // página con el detalle del plan, si existe
}

export const PLANES_SEO: PlanSeo[] = [
  {
    id: "local",
    nombre: "SEO Local Esencial",
    paraQuien: "Autónomos y profesionales con una web sencilla que captan clientes en su zona",
    precio: 199,
    limites: ["Web de hasta 10 páginas", "1 idioma", "1 ficha de Google", "2 contenidos al mes"],
    incluye: [
      "Auditoría técnica inicial y correcciones de SEO on-page",
      "Palabras clave de tu servicio y tu zona",
      "Google Business Profile: optimización de la ficha y 2 publicaciones al mes",
      "Respuesta a hasta 10 reseñas al mes y método para pedir reseñas reales",
      "Datos estructurados para buscadores y asistentes de IA",
      "Informe mensual",
    ],
    href: "/seo-local/",
  },
  {
    id: "pyme",
    nombre: "SEO + GEO + Google Business Profile",
    paraQuien: "Pymes con web corporativa que quieren aparecer en Google, en Google Maps y en la IA",
    precio: 349,
    limites: ["Web de hasta 30 páginas", "1 idioma", "1 ficha de Google", "5 contenidos al mes"],
    incluye: [
      "SEO: auditoría técnica, palabras clave, correcciones e informe mensual",
      "GEO: seguimiento mensual de 10 preguntas en 4 asistentes de IA, contenido citable, datos estructurados y llms.txt",
      "Google Business Profile: 1 ficha optimizada, 2 publicaciones al mes y respuesta a hasta 15 reseñas al mes",
      "Datos de empresa coherentes en tu web y en 5 directorios principales",
    ],
    href: "/oferta-seo-geo-gbp/",
  },
  {
    id: "crecimiento",
    nombre: "Crecimiento / Multisede",
    paraQuien: "Empresas con varias sedes o una web de servicios más amplia",
    precio: 590,
    limites: ["Web de hasta 80 páginas", "1 idioma", "Hasta 3 fichas de Google", "8 contenidos al mes"],
    incluye: [
      "Todo lo del plan SEO + GEO + Google Business Profile",
      "Arquitectura de páginas por servicio y por sede sin contenido duplicado",
      "Seguimiento de hasta 20 preguntas en asistentes de IA",
      "Informe mensual por sede",
    ],
  },
  {
    id: "ecommerce-s",
    nombre: "Ecommerce S",
    paraQuien: "Tiendas online pequeñas",
    precio: 449,
    limites: ["Hasta 20 categorías", "Hasta 500 productos", "1 idioma", "4 optimizaciones o contenidos al mes"],
    incluye: [
      "SEO técnico de tienda: indexación, filtros, paginación y datos estructurados de producto",
      "Optimización de categorías y fichas de producto prioritarias",
      "GEO: contenido citable y datos de producto legibles por asistentes de IA",
      "Informe mensual",
    ],
  },
  {
    id: "ecommerce-m",
    nombre: "Ecommerce M",
    paraQuien: "Tiendas con catálogo amplio y varias familias de producto",
    precio: 790,
    limites: ["Hasta 150 categorías", "Hasta 5.000 productos", "1 idioma", "8 optimizaciones o contenidos al mes"],
    incluye: [
      "Todo lo del plan Ecommerce S",
      "Arquitectura de categorías y subcategorías para evitar canibalización",
      "Plantillas de optimización para fichas de producto a escala",
      "Informe mensual",
    ],
  },
  {
    id: "ecommerce-l",
    nombre: "Ecommerce L / a medida",
    paraQuien: "Catálogos grandes, varios idiomas o varias tiendas",
    precio: null,
    limites: ["Más de 150 categorías o 5.000 productos", "Varios idiomas o mercados"],
    incluye: ["Alcance y precio según auditoría previa"],
  },
];

export const EXTRAS_SEO = [
  "Idioma adicional",
  "Ficha de Google adicional",
  "Contenidos adicionales",
  "Puesta a punto técnica inicial para webs con errores graves (sale de la auditoría gratuita)",
];

export const CONDICIONES_COMUNES = [
  "Precios sin IVA",
  "Sin permanencia: baja avisando con 30 días de antelación",
  "No incluyen rediseño o desarrollo web, link building, fotografía o vídeo ni publicidad de pago",
  "No garantizamos posiciones: trabajamos con método, datos e informe mensual",
];

export function planPorId(id: PlanId): PlanSeo {
  return PLANES_SEO.find((p) => p.id === id)!;
}

export function precioTexto(p: PlanSeo): string {
  return p.precio === null ? "Presupuesto a medida" : `${p.precio} €/mes + IVA`;
}

// Recomendación de la calculadora. Reglas simples y explicables.
export interface RespuestasCalculadora {
  tipo: "servicios" | "tienda";
  paginas: "10" | "30" | "80" | "mas"; // webs de servicios
  categorias: "20" | "150" | "mas"; // tiendas
  productos: "500" | "5000" | "mas"; // tiendas
  fichas: "0" | "1" | "3" | "mas";
  idiomas: "1" | "mas";
}

export function recomendarPlan(r: RespuestasCalculadora): { plan: PlanSeo; notas: string[] } {
  const notas: string[] = [];
  if (r.idiomas === "mas") notas.push("Cada idioma adicional se presupuesta como extra.");
  if (r.tipo === "tienda") {
    if (r.categorias === "mas" || r.productos === "mas") return { plan: planPorId("ecommerce-l"), notas };
    if (r.categorias === "150" || r.productos === "5000") return { plan: planPorId("ecommerce-m"), notas };
    if (r.fichas !== "0") notas.push("Si además tienes tienda física, la ficha de Google se puede añadir como extra.");
    return { plan: planPorId("ecommerce-s"), notas };
  }
  if (r.fichas === "mas") {
    notas.push("Con más de 3 sedes preparamos un presupuesto a medida.");
    return { plan: planPorId("crecimiento"), notas };
  }
  if (r.paginas === "mas") {
    notas.push("Con más de 80 páginas preparamos un presupuesto a medida.");
    return { plan: planPorId("crecimiento"), notas };
  }
  if (r.paginas === "80" || r.fichas === "3") return { plan: planPorId("crecimiento"), notas };
  if (r.paginas === "30") return { plan: planPorId("pyme"), notas };
  return { plan: planPorId("local"), notas };
}
