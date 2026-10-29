import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ROUTES, alternatesFor, urlFor } from "@/lib/i18n/routes";
import type { Articulo, Bloque, ContenidoArticulo, LangArticulo } from "@/lib/articulos-tendencia/tipos";
import { AuthorByline } from "@/components/AuthorByline";
import { AUTOR_NOMBRE, autorSchema } from "@/lib/autor";

// Plantilla común de los artículos «de tendencia» en ES, EN y FR.
// Todo se renderiza en el servidor: el texto, la FAQ y el JSON-LD están en el HTML servido.

const BASE = "https://www.mktweb360.com";
// Mismo autor y página de autor que el resto del blog (lib/autor.ts).
const AUTOR = AUTOR_NOMBRE;

const UI: Record<LangArticulo, {
  inicio: string; blog: string; por: string; lectura: string; respuesta: string;
  faq: string; fuentes: string; volver: string; locale: string; inLanguage: string; fecha: (iso: string) => string;
}> = {
  es: {
    inicio: "Inicio", blog: "Blog", por: "Por", lectura: "min de lectura", respuesta: "Respuesta rápida",
    faq: "Preguntas frecuentes", fuentes: "Fuentes", volver: "← Volver al blog", locale: "es_ES", inLanguage: "es-ES",
    fecha: (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }),
  },
  en: {
    inicio: "Home", blog: "Blog", por: "By", lectura: "min read", respuesta: "Quick answer",
    faq: "Frequently asked questions", fuentes: "Sources", volver: "← Back to the blog", locale: "en_GB", inLanguage: "en",
    fecha: (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }),
  },
  fr: {
    inicio: "Accueil", blog: "Blog", por: "Par", lectura: "min de lecture", respuesta: "Réponse rapide",
    faq: "Questions fréquentes", fuentes: "Sources", volver: "← Retour au blog", locale: "fr_FR", inLanguage: "fr",
    fecha: (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }),
  },
};

/** Ruta pública de una ruta ES en el idioma pedido (si no existe traducción, la ES). */
export function rutaEn(esPath: string, lang: LangArticulo): string {
  const [base, hash] = esPath.split("#");
  const r = ROUTES.find((x) => x.es === base);
  const u = r ? urlFor(r, lang) ?? base : base;
  return hash ? `${u}#${hash}` : u;
}

/** Slug sin barras de la página en ese idioma. */
function slugEn(articulo: Articulo, lang: LangArticulo): string {
  return rutaEn(articulo.esPath, lang).replace(/^\/(en|fr)\//, "/").replace(/^\/|\/$/g, "");
}

/** Imagen og/cabecera en ese idioma: /og-{slug del idioma}.jpg (textos de la imagen traducidos). */
function ogDe(articulo: Articulo, lang: LangArticulo): string {
  return `${BASE}/og-${slugEn(articulo, lang)}.jpg`;
}

export function metadataArticulo(articulo: Articulo, lang: LangArticulo): Metadata {
  const c = articulo.contenido[lang];
  const path = rutaEn(articulo.esPath, lang);
  const og = ogDe(articulo, lang);
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: alternatesFor(path) ?? { canonical: `${BASE}${path}` },
    authors: [{ name: AUTOR }],
    openGraph: {
      title: `${c.title} | Mkt Web 360`,
      description: c.description,
      url: `${BASE}${path}`,
      type: "article",
      locale: UI[lang].locale,
      publishedTime: `${articulo.fecha}T08:00:00+02:00`,
      modifiedTime: `${articulo.fecha}T08:00:00+02:00`,
      authors: [AUTOR],
      images: [{ url: og, width: 1200, height: 630 }],
    },
  };
}

// ---------- texto en línea: **negrita** y [enlace](href) ----------
function enLinea(texto: string, lang: LangArticulo): ReactNode[] {
  const partes = texto.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return partes.map((p, i) => {
    const b = p.match(/^\*\*([^*]+)\*\*$/);
    if (b) return <strong key={i}>{b[1]}</strong>;
    const l = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (l) {
      const [, txt, href] = l;
      if (/^https?:\/\//.test(href)) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">
            {txt}
          </a>
        );
      }
      return (
        <Link key={i} href={rutaEn(href, lang)} className="text-accent-500 hover:underline">
          {txt}
        </Link>
      );
    }
    return p;
  });
}

function textoPlano(texto: string): string {
  return texto.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function palabras(c: ContenidoArticulo): number {
  const trozos: string[] = [c.respuesta];
  for (const b of c.bloques) {
    if ("x" in b) trozos.push(b.x);
    if ("items" in b) trozos.push(...b.items);
    if (b.t === "tabla") trozos.push(...b.cab, ...b.filas.flat());
  }
  for (const f of c.faqs) trozos.push(f.q, f.a);
  return textoPlano(trozos.join(" ")).split(/\s+/).filter(Boolean).length;
}

function renderBloque(b: Bloque, i: number, lang: LangArticulo) {
  switch (b.t) {
    case "h2":
      return <h2 key={i} className="text-2xl font-bold text-primary-600 pt-2">{b.x}</h2>;
    case "h3":
      return <h3 key={i} className="text-xl font-semibold text-primary-700">{b.x}</h3>;
    case "p":
      return <p key={i}>{enLinea(b.x, lang)}</p>;
    case "nota":
      return (
        <p key={i} className="p-5 bg-primary-50 rounded-xl border-l-4 border-accent-500 text-gray-700">
          {enLinea(b.x, lang)}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-3">
          {b.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
              <span className="text-primary-600 font-bold shrink-0 mt-0.5" aria-hidden="true">▸</span>
              <span className="text-gray-600">{enLinea(it, lang)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3 list-none">
          {b.items.map((it, j) => (
            <li key={j} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">{j + 1}</span>
              <span className="text-gray-600">{enLinea(it, lang)}</span>
            </li>
          ))}
        </ol>
      );
    case "tabla":
      return (
        <div key={i} className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-600 text-white">
                {b.cab.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.filas.map((fila, j) => (
                <tr key={j} className="border-b border-gray-200 even:bg-gray-50">
                  {fila.map((celda, k) => (
                    <td key={k} className={`px-4 py-3 align-top ${k === 0 ? "font-medium text-gray-800" : "text-gray-600"}`}>
                      {enLinea(celda, lang)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticuloTendencia({ articulo, lang }: { articulo: Articulo; lang: LangArticulo }) {
  const c = articulo.contenido[lang];
  const ui = UI[lang];
  const path = rutaEn(articulo.esPath, lang);
  const url = `${BASE}${path}`;
  const og = ogDe(articulo, lang);
  const minutos = Math.max(1, Math.round(palabras(c) / 200));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.h1,
    description: c.description,
    inLanguage: ui.inLanguage,
    datePublished: `${articulo.fecha}T08:00:00+02:00`,
    dateModified: `${articulo.fecha}T08:00:00+02:00`,
    author: autorSchema(lang),
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Mkt Web 360 SLU",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    image: og,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: ui.inicio, href: lang === "es" ? "/" : `/${lang}/` },
            { label: ui.blog, href: rutaEn("/blog/", lang) },
            { label: c.miga },
          ]}
        />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{c.categoria}</span>
            <time dateTime={articulo.fecha}>{ui.fecha(articulo.fecha)}</time>
            <span>·</span>
            <AuthorByline lang={lang} />
            <span>·</span>
            <span>{minutos} {ui.lectura}</span>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{c.h1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{c.entradilla}</p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <section aria-label={ui.respuesta} className="p-6 bg-primary-50 rounded-xl border-l-4 border-accent-500">
            <p className="font-semibold text-primary-700 mb-2">{ui.respuesta}</p>
            <p className="text-gray-700">{c.respuesta}</p>
          </section>

          {c.bloques.map((b, i) => renderBloque(b, i, lang))}

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{c.cta.titulo}</p>
            <p className="text-gray-600 text-sm mb-4">{c.cta.texto}</p>
            <Link
              href={rutaEn("/auditoria-digital/", lang)}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {c.cta.boton}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{ui.faq}</h2>
          <div className="space-y-3">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-bold">{faq.q}</h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{ui.fuentes}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {c.fuentes.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={rutaEn("/blog/", lang)} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{ui.volver}</Link>
        </nav>
      </article>
      <RelatedArticles lang={lang} currentSlug={slugEn(articulo, lang)} />
    </>
  );
}
