// Autoría de los artículos del blog (E-E-A-T): firma visible y author del JSON-LD.
// Decisión de José (28/10/2026): los artículos los firma una persona real, José Marcos.
// La organización sigue siendo el publisher. La página de autor solo lleva datos que ya
// están publicados en la web (aviso legal, Nosotros y schema de la organización).

export type AutorLang = "es" | "en" | "fr";

export const AUTOR_NOMBRE = "José Marcos";

const BASE = "https://www.mktweb360.com";

// Rutas de la página de autor por idioma (registradas en lib/i18n/routes.ts).
export const AUTOR_PATH: Record<AutorLang, string> = {
  es: "/autor/jose-marcos/",
  en: "/en/author-jose-marcos/",
  fr: "/fr/auteur-jose-marcos/",
};

export function autorLang(lang?: string): AutorLang {
  return lang === "en" || lang === "fr" ? lang : "es";
}

export function autorUrl(lang?: string): string {
  return `${BASE}${AUTOR_PATH[autorLang(lang)]}`;
}

// author del BlogPosting/Article.
export function autorSchema(lang?: string) {
  return { "@type": "Person" as const, name: AUTOR_NOMBRE, url: autorUrl(lang) };
}
