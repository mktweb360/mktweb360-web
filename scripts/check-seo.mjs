// Guarda SEO de publicación: datos estructurados y básicos on-page de TODAS las URLs del sitemap.
//
// Uso (contra un `next start` local ya levantado):
//   RESEND_API_KEY=x pnpm run build && npx next start -p 3430 &
//   pnpm run check:seo -- 3430                         # comprobación completa
//   pnpm run check:seo -- 3430 --sin-lang              # sin comprobar <html lang>
//   pnpm run check:seo -- 3430 --ignorar slug1,slug2   # excepciones temporales (slug o ruta)
//   pnpm run check:seo -- 3430 --inventario            # lista los tipos JSON-LD de cada URL (no falla)
//
// Falla (exit 1) si una página indexable del sitemap:
//   - no responde 200 o lleva noindex;
//   - no tiene ningún JSON-LD de página (aparte de Organization/WebSite del layout y BreadcrumbList);
//   - tiene un bloque JSON-LD que no es JSON válido o sin @type;
//   - no tiene canonical, o el canonical no apunta a la propia URL;
//   - no tiene exactamente un <h1>;
//   - no tiene <title> o meta description;
//   - es artículo (está en lib/blog.ts o muestra la firma rel="author") y no lleva BlogPosting/Article
//     con author de tipo Person;
//   - (salvo --sin-lang) su <html lang> no coincide con el idioma de la URL (es/en/fr).
import { ROUTES } from "../lib/i18n/routes.ts";
import { allPosts } from "../lib/blog.ts";

const args = process.argv.slice(2).filter((a) => a !== "--");
const port = args.find((a) => /^\d+$/.test(a)) ?? "3430";
const sinLang = args.includes("--sin-lang");
const inventario = args.includes("--inventario");
const iIgn = args.indexOf("--ignorar");
const ignorar = iIgn >= 0 && args[iIgn + 1]
  ? args[iIgn + 1].split(",").map((s) => s.trim().replace(/^\/+|\/+$/g, "")).filter(Boolean)
  : [];

const PROD = "https://www.mktweb360.com";
const LOCAL = `http://localhost:${port}`;
// Tipos que pone el layout raíz en todas las páginas o que no bastan por sí solos.
const TIPOS_GLOBALES = new Set(["Organization", "LocalBusiness", "WebSite", "BreadcrumbList"]);
const ORG_ID = `${PROD}/#organization`;
const TIPOS_ARTICULO =new Set(["BlogPosting", "Article", "NewsArticle", "TechArticle"]);

// Rutas de artículo en los tres idiomas, a partir de lib/blog.ts y lib/i18n/routes.ts.
const articulos = new Set();
for (const p of allPosts) {
  const es = `/${p.slug}/`;
  articulos.add(es);
  const r = ROUTES.find((x) => x.es === es);
  if (r?.en) articulos.add(`/en/${r.en}/`);
  if (r?.fr) articulos.add(`/fr/${r.fr}/`);
}

const ignorada = (path) => {
  const limpia = path.replace(/^\/+|\/+$/g, "");
  return ignorar.some((s) => limpia === s || limpia.split("/").includes(s));
};

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

function tiposDe(nodo, out = []) {
  if (Array.isArray(nodo)) { nodo.forEach((n) => tiposDe(n, out)); return out; }
  if (!nodo || typeof nodo !== "object") return out;
  if (nodo["@graph"]) tiposDe(nodo["@graph"], out);
  if (nodo["@type"]) out.push({ tipos: [].concat(nodo["@type"]), nodo });
  return out;
}

async function revisar(url) {
  const path = url.replace(PROD, "") || "/";
  const lang = path.startsWith("/en/") ? "en" : path.startsWith("/fr/") ? "fr" : "es";
  const fallos = [];
  let res;
  try {
    res = await fetch(LOCAL + path, { redirect: "manual" });
  } catch (e) {
    return { path, lang, fallos: [`sin respuesta (${e.message})`], tipos: [] };
  }
  if (res.status !== 200) return { path, lang, fallos: [`HTTP ${res.status}`], tipos: [] };
  const html = await res.text();
  const head = html.split("</head>")[0];

  // JSON-LD
  const nodos = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let datos;
    try { datos = JSON.parse(m[1]); } catch {
      try { datos = JSON.parse(decode(m[1])); } catch { fallos.push("JSON-LD inválido (no es JSON)"); continue; }
    }
    const t = tiposDe(datos);
    if (!t.length) fallos.push("JSON-LD sin @type");
    nodos.push(...t);
  }
  const tipos = [...new Set(nodos.flatMap((n) => n.tipos))];
  if (!tipos.some((t) => !TIPOS_GLOBALES.has(t))) fallos.push("sin JSON-LD de página (solo organización/migas)");
  for (const n of nodos) {
    if (n.tipos.includes("BreadcrumbList")) {
      const items = n.nodo.itemListElement ?? [];
      if (!items.length || items.some((i) => !i.name)) fallos.push("BreadcrumbList incompleto");
    }
  }
  if (nodos.filter((n) => n.tipos.includes("BreadcrumbList")).length > 1) fallos.push("BreadcrumbList duplicado");

  // Artículo: BlogPosting con author Person
  const esArticulo = articulos.has(path) || /rel="author"/.test(html);
  if (esArticulo) {
    const art = nodos.filter((n) => n.tipos.some((t) => TIPOS_ARTICULO.has(t)));
    if (!art.length) fallos.push("artículo sin BlogPosting");
    else if (!art.some((n) => [].concat(n.nodo.author ?? []).some((a) => a?.["@type"] === "Person")))
      fallos.push("BlogPosting sin author Person");
    for (const { nodo } of art) {
      const faltan = ["headline", "datePublished", "dateModified", "mainEntityOfPage"].filter((k) => !nodo[k]);
      if (faltan.length) fallos.push(`BlogPosting sin ${faltan.join(", ")}`);
      if (nodo.publisher?.["@id"] !== ORG_ID) fallos.push("BlogPosting sin publisher @id de la organización");
      if (/<meta[^>]+property="og:image"/.test(head) && !nodo.image) fallos.push("BlogPosting sin image (la página tiene og:image)");
    }
  }
  // inLanguage de los schemas de página: es-ES / en / fr según la URL
  for (const { tipos: t, nodo } of nodos) {
    if (t.some((x) => TIPOS_GLOBALES.has(x)) || !nodo.inLanguage) continue;
    if (String(nodo.inLanguage).slice(0, 2).toLowerCase() !== lang) fallos.push(`inLanguage «${nodo.inLanguage}» en ${t.join("/")} de una URL ${lang}`);
  }

  // Metadatos
  if (/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(head)) fallos.push("noindex en una URL del sitemap");
  const canon = head.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1];
  if (!canon) fallos.push("sin canonical");
  else if (decode(canon) !== url) fallos.push(`canonical a otra URL (${decode(canon)})`);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fallos.push(`${h1} H1`);
  const title = head.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.trim();
  if (!title) fallos.push("sin title");
  const desc = head.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)?.[1]?.trim();
  if (!desc) fallos.push("sin meta description");
  if (!sinLang) {
    const htmlLang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1] ?? "";
    if (htmlLang.slice(0, 2).toLowerCase() !== lang) fallos.push(`<html lang="${htmlLang}"> en URL ${lang}`);
  }
  return { path, lang, fallos, tipos, esArticulo };
}

// Sitemap
let xml;
try {
  xml = await (await fetch(`${LOCAL}/sitemap.xml`)).text();
} catch (e) {
  console.error(`No responde ${LOCAL}/sitemap.xml: ¿está levantado «npx next start -p ${port}»? (${e.message})`);
  process.exit(2);
}
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (!urls.length) { console.error("El sitemap no tiene URLs"); process.exit(2); }

const resultados = [];
const cola = [...urls];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (cola.length) resultados.push(await revisar(cola.shift()));
}));
resultados.sort((a, b) => a.path.localeCompare(b.path));

if (inventario) {
  for (const r of resultados) console.log(`${r.path}\t${r.tipos.filter((t) => !["Organization", "LocalBusiness", "WebSite"].includes(t)).join(",") || "-"}`);
  const sin = { es: 0, en: 0, fr: 0 }, tot = { es: 0, en: 0, fr: 0 };
  for (const r of resultados) { tot[r.lang]++; if (r.fallos.some((f) => f.startsWith("sin JSON-LD de página"))) sin[r.lang]++; }
  console.log(`\nSin JSON-LD de página: ES ${sin.es}/${tot.es} · EN ${sin.en}/${tot.en} · FR ${sin.fr}/${tot.fr}`);
  const art = resultados.filter((r) => r.esArticulo && r.fallos.some((f) => f.startsWith("artículo sin") || f.startsWith("BlogPosting sin")));
  console.log(`Artículos sin BlogPosting/author Person: ${art.length}`);
  process.exit(0);
}

let malas = 0, ignoradas = 0;
for (const r of resultados) {
  if (!r.fallos.length) continue;
  if (ignorada(r.path)) { ignoradas++; console.log(`IGNORADA ${r.path}: ${r.fallos.join("; ")}`); continue; }
  malas++;
  console.error(`FALLA ${r.path}: ${r.fallos.join("; ")}`);
}
console.log(`\ncheck:seo — ${resultados.length} URLs del sitemap, ${malas} con fallos, ${ignoradas} ignoradas${sinLang ? " (sin comprobar <html lang>)" : ""}.`);
process.exit(malas ? 1 : 0);
