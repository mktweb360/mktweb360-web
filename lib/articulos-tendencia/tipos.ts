// Artículos «de tendencia» (oct-2026) en ES, EN y FR desde una única fuente de contenido por artículo.
// Así los tres idiomas comparten estructura, datos, fuentes y FAQ, y el JSON-LD de la FAQ se genera
// del mismo texto que se ve en la página (deben coincidir exactamente).
//
// Marcado en línea permitido en los textos (no en FAQ ni en la respuesta directa, que van en texto plano):
//   **negrita**   y   [texto del enlace](/ruta-es/ o https://...)
// Los enlaces internos se escriben SIEMPRE con la ruta ES; el componente los traduce a /en/ o /fr/
// con lib/i18n/routes.ts (si no hay traducción, enlaza la versión ES).

export type LangArticulo = "es" | "en" | "fr";

export type Bloque =
  | { t: "h2"; x: string }
  | { t: "h3"; x: string }
  | { t: "p"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "tabla"; cab: string[]; filas: string[][] }
  | { t: "nota"; x: string };

export type ContenidoArticulo = {
  /** <title> completo (sin sufijo de marca), ≤ 60 caracteres y con la keyword. */
  title: string;
  /** Meta description, ≤ 155 caracteres y con la keyword. */
  description: string;
  /** Único H1 de la página (también headline del schema). */
  h1: string;
  /** Subtítulo bajo el H1. */
  entradilla: string;
  /** Miga de pan corta (último nivel). */
  miga: string;
  /** Etiqueta visible de la categoría. */
  categoria: string;
  /** Respuesta directa citable de 40-60 palabras, texto plano. */
  respuesta: string;
  bloques: Bloque[];
  /** 4-6 preguntas, texto plano: se usa igual en la página y en el JSON-LD FAQPage. */
  faqs: { q: string; a: string }[];
  fuentes: { texto: string; url: string }[];
  cta: { titulo: string; texto: string; boton: string };
};

export type Articulo = {
  /** Ruta ES con barras: /slug/ */
  esPath: string;
  /** Fecha de publicación ISO (YYYY-MM-DD). */
  fecha: string;
  contenido: Record<LangArticulo, ContenidoArticulo>;
};
