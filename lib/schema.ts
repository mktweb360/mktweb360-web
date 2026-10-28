// Datos estructurados (JSON-LD) de página, comunes a los tres idiomas.
// La organización y el sitio web los pone app/layout.tsx en todas las páginas; aquí solo se
// referencian por @id. Regla: lo que diga el JSON-LD tiene que estar en el texto visible
// (nada de valoraciones, reseñas ni precios que no salgan en la página).
// La guarda `pnpm run check:seo` falla si una página del sitemap se publica sin schema de página.

import { autorSchema } from "@/lib/autor";
import { allPosts } from "@/lib/blog";
import { BLOG_I18N } from "@/lib/blog-i18n";
import { ROUTES, langSlug } from "@/lib/i18n/routes";

export const SITE = "https://www.mktweb360.com";
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

export type SchemaLang = "es" | "en" | "fr";

export function schemaLang(lang?: string): SchemaLang {
  return lang === "en" || lang === "fr" ? lang : "es";
}

// inLanguage de los schemas de página.
export function inLanguage(lang?: string): string {
  const l = schemaLang(lang);
  return l === "es" ? "es-ES" : l;
}

export const absUrl = (path: string) => (path.startsWith("http") ? path : `${SITE}${path}`);

/** Ruta canónica EN/FR de una plantilla de app/[lang]/(site) a partir del nombre de su carpeta. */
export function intlPath(lang: string, slug: string): string {
  return `/${lang}/${langSlug(lang, slug)}/`;
}

/** Ruta ES equivalente de una ruta EN/FR (según lib/i18n/routes.ts). */
export function esPathOf(lang: string, slug: string): string | undefined {
  const s = langSlug(lang, slug);
  return ROUTES.find((r) => (lang === "fr" ? r.fr : r.en) === s || r.en === slug || r.fr === slug)?.es;
}

type BlogPostingInput = {
  lang?: string;
  path: string;
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

export function blogPostingSchema(p: BlogPostingInput) {
  const url = absUrl(p.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.headline,
    ...(p.description ? { description: p.description } : {}),
    ...(p.image ? { image: absUrl(p.image) } : {}),
    ...(p.datePublished ? { datePublished: p.datePublished, dateModified: p.dateModified ?? p.datePublished } : {}),
    author: autorSchema(p.lang),
    publisher: { "@type": "Organization", "@id": ORG_ID, name: "Mkt Web 360 SLU", url: SITE },
    inLanguage: inLanguage(p.lang),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * BlogPosting de un artículo EN/FR (plantillas de app/[lang]/(site)). Los datos salen de
 * lib/blog.ts (fecha del artículo ES equivalente) y lib/blog-i18n.ts (título y descripción
 * traducidos, que son los del metadata de la página). `headline` se pasa con el texto del H1.
 */
export function intlArticleSchema(lang: string, slug: string, opts: { headline?: string; image?: string } = {}) {
  const l = schemaLang(lang);
  const es = esPathOf(l, slug);
  const esSlug = es?.replace(/^\/|\/$/g, "") ?? "";
  const post = allPosts.find((x) => x.slug === esSlug);
  const tr = l === "es" ? undefined : BLOG_I18N[esSlug]?.[l];
  return blogPostingSchema({
    lang: l,
    path: intlPath(l, slug),
    headline: opts.headline ?? tr?.title ?? post?.title ?? "",
    description: tr?.excerpt,
    image: opts.image,
    datePublished: post?.date,
  });
}

type PageInput = { lang?: string; path: string; name: string; description?: string };

/** WebPage y sus subtipos (AboutPage, ContactPage, CollectionPage, ProfilePage…). */
export function webPageSchema(type: string, p: PageInput, extra: Record<string, unknown> = {}) {
  const url = absUrl(p.path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name: p.name,
    ...(p.description ? { description: p.description } : {}),
    url,
    inLanguage: inLanguage(p.lang),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...extra,
  };
}

/** Service: un servicio de la agencia, prestado en toda España. */
export function serviceSchema(p: PageInput & { serviceType?: string }) {
  const url = absUrl(p.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.name,
    ...(p.serviceType ? { serviceType: p.serviceType } : {}),
    ...(p.description ? { description: p.description } : {}),
    provider: { "@type": "Organization", "@id": ORG_ID, name: "Mkt Web 360 SLU", url: SITE },
    areaServed: { "@type": "Country", name: schemaLang(p.lang) === "es" ? "España" : schemaLang(p.lang) === "fr" ? "Espagne" : "Spain" },
    url,
    inLanguage: inLanguage(p.lang),
  };
}

type MetaLike = { title?: unknown; description?: unknown } | undefined | null;

/** name y description del schema a partir del metadata de la página (mismo texto que <title> y la meta description). */
export function fromMeta(meta: MetaLike): { name: string; description?: string } {
  const t = meta?.title;
  const name =
    typeof t === "string" ? t
    : t && typeof t === "object" ? String((t as { absolute?: string; default?: string }).absolute ?? (t as { default?: string }).default ?? "")
    : "";
  const d = meta?.description;
  return { name, ...(typeof d === "string" && d ? { description: d } : {}) };
}
