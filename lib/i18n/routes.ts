// GENERADO desde el inventario i18n (CSV) — ÚNICA FUENTE DE VERDAD de rutas por idioma.
// Editar aquí y dejar que el guardián (scripts/validate-i18n.ts) valide la coherencia.
export type Lang = "es" | "en" | "fr";

export interface Route {
  es: string;                               // ruta ES completa, con barra final
  en?: string;                              // slug EN canónico (sin prefijo); "" = home. undefined = no existe en EN
  fr?: string;                              // slug FR canónico. undefined = no existe en FR
  aliases?: { lang: Lang; slug: string }[]; // slugs [lang] duplicados/retirados -> 301
}

const BASE = "https://www.mktweb360.com";

export const ROUTES: Route[] = [
  { es: "/", en: "", fr: "" },
  { es: "/agencias-marketing-digital-madrid/", aliases: [{ lang: "en", slug: "digital-marketing-agencies-madrid" }] },
  { es: "/agencias-marketing-digital-toledo/", aliases: [{ lang: "en", slug: "digital-marketing-agencies-toledo" }] },
  { es: "/analitica-web/", en: "web-analytics", fr: "analytique-web", aliases: [{ lang: "fr", slug: "service-analytique-web" }, { lang: "en", slug: "web-analytics-service" }] },
  { es: "/auditoria-digital/", en: "digital-audit", fr: "audit-digital" },
  // Legales: solo ES. Las traducciones requieren revisión jurídica; hasta
  // entonces no se declaran para que el switcher no enlace a 404.
  { es: "/aviso-legal/" },
  { es: "/blog/", aliases: [{ lang: "en", slug: "blog" }] },
  { es: "/chatgpt-para-marketing-digital/", aliases: [{ lang: "en", slug: "chatgpt-for-digital-marketing" }, { lang: "fr", slug: "chatgpt-pour-marketing-digital" }] },
  { es: "/como-crear-propuesta-de-valor/", aliases: [{ lang: "en", slug: "how-to-create-value-proposition" }] },
  { es: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", aliases: [{ lang: "en", slug: "how-to-create-website-for-painters" }] },
  { es: "/como-darse-de-alta-autonomo/", aliases: [{ lang: "en", slug: "how-to-register-as-freelancer" }] },
  { es: "/como-digitalizar-tu-negocio/", aliases: [{ lang: "en", slug: "how-to-digitalise-your-business" }] },
  { es: "/como-elegir-el-mejor-hosting-para-tu-web/", aliases: [{ lang: "en", slug: "how-to-choose-best-hosting" }] },
  { es: "/como-generar-leads-calidad-pyme/", aliases: [{ lang: "fr", slug: "comment-generer-leads-qualite" }, { lang: "en", slug: "how-to-generate-quality-leads" }] },
  { es: "/como-puede-un-autonomo-conseguir-clientes-por-internet/", aliases: [{ lang: "en", slug: "how-to-get-clients-online-freelancer" }] },
  { es: "/conectar-tpv-tienda-online/", aliases: [{ lang: "en", slug: "connect-pos-to-online-store" }, { lang: "fr", slug: "connecter-tpv-boutique-ligne" }] },
  { es: "/configurar-envios-woocommerce/", aliases: [{ lang: "en", slug: "configure-shipping-woocommerce" }, { lang: "fr", slug: "configurer-expeditions-woocommerce" }] },
  { es: "/contacto/", en: "contact", fr: "contact" },
  { es: "/creacion-de-blog/", en: "blog-creation-service", fr: "service-creation-blog" },
  { es: "/cuanto-cuesta-pagina-web-profesional/", aliases: [{ lang: "fr", slug: "combien-coute-site-web" }, { lang: "en", slug: "how-much-does-a-website-cost" }] },
  { es: "/descubre-el-analisis-pestel-en-el-marketing-digital/", aliases: [{ lang: "en", slug: "pestel-analysis-marketing" }] },
  { es: "/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/", aliases: [{ lang: "en", slug: "canvas-for-social-media" }] },
  { es: "/digitalizacion-empresas-castilla-la-mancha/", aliases: [{ lang: "en", slug: "digitalization-castilla-la-mancha" }] },
  { es: "/diseno-de-paginas-web/", en: "web-design", fr: "creation-site-web", aliases: [{ lang: "fr", slug: "creation-site-web-entreprises" }, { lang: "en", slug: "web-design-services" }] },
  { es: "/diseno-de-paginas-web/diseno-tiendas-online/", en: "online-store", fr: "boutique-en-ligne" },
  // Ecommerce sin comisiones — pagina propia (0€ comision como argumento comercial),
  // NO alias de online-store: contenido comercial exclusivo con su propia landing ES.
  { es: "/diseno-web-tienda-online/", en: "ecommerce-no-commissions", fr: "boutique-en-ligne-sans-commissions" },
  { es: "/ejemplos-y-diferencias-entre-buscadores-y-navegadores/", aliases: [{ lang: "en", slug: "search-engines-vs-browsers" }] },
  { es: "/email-marketing/", en: "email-marketing-campaigns", fr: "campagnes-email-marketing", aliases: [{ lang: "fr", slug: "email-marketing-entreprises" }, { lang: "en", slug: "email-marketing-service" }] },
  { es: "/errores-digitales-negocio-nuevo/", aliases: [{ lang: "en", slug: "digital-errors-new-business" }] },
  { es: "/factura-electronica-obligatoria-autonomos-pymes/", aliases: [{ lang: "en", slug: "electronic-invoice-spain" }] },
  { es: "/geo-posicionamiento-ia/", en: "geo-generative-engine-optimization", fr: "geo-optimisation-moteurs-generatifs", aliases: [{ lang: "en", slug: "geo-generative-seo" }, { lang: "fr", slug: "geo-seo-generatif" }] },
  { es: "/gestion-resenas-negativas-google/", aliases: [{ lang: "fr", slug: "gerer-avis-negatifs-google" }, { lang: "en", slug: "manage-negative-reviews-google" }] },
  { es: "/google-business-profile-toledo/", aliases: [{ lang: "en", slug: "google-business-profile-toledo" }] },
  { es: "/google-business-profile/", en: "google-business-profile-service", fr: "gestion-google-business-profile", aliases: [{ lang: "en", slug: "google-business-profile-management" }, { lang: "en", slug: "service-google-business-profile" }] },
  { es: "/google-merchant-center-ecommerce-guia/", aliases: [{ lang: "en", slug: "google-merchant-center-guide" }] },
  { es: "/google-my-business-empresas-guia/", aliases: [{ lang: "en", slug: "google-my-business-guide" }] },
  { es: "/google-shopping-tiendas-online/", aliases: [{ lang: "fr", slug: "google-shopping-boutiques-en-ligne" }, { lang: "en", slug: "google-shopping-for-online-stores" }] },
  { es: "/ha-muerto-el-seo-con-la-ia/", aliases: [{ lang: "en", slug: "is-seo-dead-with-ai" }, { lang: "fr", slug: "le-seo-est-il-mort-avec-ia" }] },
  { es: "/ia-aplicada-al-marketing/", en: "ai-applied-marketing", fr: "marketing-intelligence-artificielle", aliases: [{ lang: "en", slug: "ai-marketing-service" }, { lang: "en", slug: "service-ia-marketing" }] },
  { es: "/importar-productos-woocommerce/", aliases: [{ lang: "en", slug: "import-products-woocommerce" }, { lang: "fr", slug: "importer-produits-woocommerce" }] },
  { es: "/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/", aliases: [{ lang: "en", slug: "instagram-for-businesses" }] },
  { es: "/link-building-pymes/", aliases: [{ lang: "en", slug: "link-building-for-smes" }] },
  { es: "/marketing-de-contenidos/", en: "content-marketing", fr: "marketing-de-contenu", aliases: [{ lang: "en", slug: "content-marketing-service" }, { lang: "fr", slug: "service-marketing-contenu" }] },
  { es: "/marketing-digital-barcelona/", aliases: [{ lang: "en", slug: "digital-marketing-barcelona" }] },
  { es: "/marketing-digital-sevilla/", aliases: [{ lang: "en", slug: "digital-marketing-seville" }] },
  { es: "/marketing-digital-toledo/", aliases: [{ lang: "en", slug: "digital-marketing-toledo" }] },
  { es: "/metodos-pago-tienda-online-espana/", aliases: [{ lang: "fr", slug: "methodes-paiement-boutique-en-ligne" }, { lang: "en", slug: "payment-methods-online-store" }] },
  { es: "/migrar-shopify-woocommerce/", aliases: [{ lang: "en", slug: "migrate-shopify-to-woocommerce" }, { lang: "fr", slug: "migrer-shopify-vers-woocommerce" }] },
  { es: "/migrar-tienda-online-sin-perder-datos/", aliases: [{ lang: "en", slug: "migrate-online-store-without-losing-data" }, { lang: "fr", slug: "migrer-boutique-sans-perdre-donnees" }] },
  { es: "/nosotros/", en: "about", fr: "about" },
  { es: "/politica-de-cookies/" },      // solo ES (ver nota en /aviso-legal/)
  { es: "/politica-de-privacidad/" },   // solo ES (ver nota en /aviso-legal/)
  // Articulo de blog "que es GEO" — pagina informativa propia, NO el servicio GEO.
  { es: "/que-es-geo-generative-engine-optimization/", en: "what-is-geo-generative-engine-optimization", fr: "qu-est-ce-que-le-geo" },
  { es: "/que-puede-automatizar-una-pyme-en-marketing-y-ventas/", aliases: [{ lang: "en", slug: "what-can-sme-automate-marketing" }] },
  { es: "/que-revisar-antes-de-invertir-mas-en-marketing-digital/", aliases: [{ lang: "en", slug: "what-to-review-before-investing-marketing" }] },
  { es: "/reputacion-online/", en: "online-reputation", fr: "reputation-en-ligne", aliases: [{ lang: "fr", slug: "gestion-reputation-en-ligne" }, { lang: "fr", slug: "online-reputation-management" }, { lang: "fr", slug: "online-reputation-management-guide" }] },
  { es: "/sem-publicidad-ppc/", en: "google-ads-management", fr: "gestion-google-ads", aliases: [{ lang: "fr", slug: "campagnes-google-ads" }, { lang: "en", slug: "ppc-google-ads" }] },
  { es: "/senales-web-necesita-rediseno/", aliases: [{ lang: "en", slug: "signs-your-website-needs-redesign" }] },
  { es: "/seo-bilbao/", aliases: [{ lang: "en", slug: "seo-bilbao-guide" }] },
  { es: "/seo-local-empresas-servicios/", aliases: [{ lang: "en", slug: "local-seo-for-service-businesses" }, { lang: "fr", slug: "seo-local-entreprises-de-services" }] },
  { es: "/seo-madrid/", aliases: [{ lang: "en", slug: "seo-madrid-guide" }] },
  { es: "/seo-o-google-ads-que-conviene-mas/", aliases: [{ lang: "en", slug: "seo-vs-google-ads" }, { lang: "fr", slug: "seo-vs-google-ads-fr" }] },
  { es: "/seo-para-ecommerce-errores-que-frenan-ventas/", aliases: [{ lang: "en", slug: "seo-for-ecommerce-errors" }] },
  { es: "/seo-para-servicios-urgentes-24h/", aliases: [{ lang: "en", slug: "seo-for-urgent-services" }] },
  { es: "/seo-posicionamiento-web-organico/", en: "seo-web-positioning", fr: "positionnement-seo", aliases: [{ lang: "en", slug: "seo-positioning" }, { lang: "fr", slug: "seo-positionnement-web" }] },
  { es: "/seo-toledo/", aliases: [{ lang: "en", slug: "seo-toledo-guide" }] },
  { es: "/seo-valencia/", aliases: [{ lang: "en", slug: "seo-valencia-guide" }] },
  { es: "/seo-zaragoza/", aliases: [{ lang: "en", slug: "seo-zaragoza-guide" }] },
  { es: "/smm-social-media-marketing/", en: "social-media-marketing", fr: "marketing-reseaux-sociaux", aliases: [{ lang: "fr", slug: "gestion-reseaux-sociaux" }, { lang: "en", slug: "social-media-management" }] },
  // Landing de oferta (490€, sin comisiones, plazas limitadas). NO es alias de
  // /diseno-de-paginas-web/diseno-tiendas-online/: es una pagina propia con
  // contenido comercial exclusivo, asi que se declara como route independiente.
  { es: "/tienda-online/", en: "online-store-offer", fr: "offre-boutique-en-ligne" },
  { es: "/tiendas-online-toledo/", aliases: [{ lang: "en", slug: "online-stores-toledo" }] },
  { es: "/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/", aliases: [{ lang: "en", slug: "swot-analysis-marketing" }] },
  { es: "/whatsapp-marketing/", en: "whatsapp-marketing-service", fr: "service-whatsapp-marketing" },
];

// ---------- helpers derivados ----------

// URL pública de una route en un idioma dado (o null si no existe en ese idioma)
export function urlFor(r: Route, lang: Lang): string | null {
  if (lang === "es") return r.es;
  const slug = lang === "en" ? r.en : r.fr;
  if (slug === undefined) return null;
  return slug === "" ? `/${lang}/` : `/${lang}/${slug}/`;
}

// Idiomas para los que un slug [lang] es CANÓNICO (para generateStaticParams por página)
export function langsForSlug(slug: string): Lang[] {
  const out: Lang[] = [];
  for (const r of ROUTES) {
    if (r.en === slug) out.push("en");
    if (r.fr === slug) out.push("fr");
  }
  return [...new Set(out)];
}

// Encuentra la route a la que pertenece un path (canónico) servido
function findByPath(path: string): { route: Route; lang: Lang } | null {
  const clean = path.replace(/\/+$/, "/") || "/";
  const m = clean.match(/^\/(en|fr)(\/(.*))?$/);
  if (m) {
    const lang = m[1] as Lang;
    const slug = (m[3] || "").replace(/\/$/, "");
    for (const r of ROUTES) if ((lang === "en" ? r.en : r.fr) === slug) return { route: r, lang };
    return null;
  }
  for (const r of ROUTES) if (r.es === clean) return { route: r, lang: "es" };
  return null;
}

// hreflang + canonical para <head>
export function alternatesFor(path: string) {
  const hit = findByPath(path);
  if (!hit) return null;
  const { route, lang } = hit;
  const languages: Record<string, string> = {};
  const es = urlFor(route, "es"); if (es) languages["es-ES"] = BASE + es;
  const en = urlFor(route, "en"); if (en) languages["en"] = BASE + en;
  const fr = urlFor(route, "fr"); if (fr) languages["fr"] = BASE + fr;
  languages["x-default"] = BASE + (urlFor(route, "es") as string);
  return { canonical: BASE + (urlFor(route, lang) as string), languages };
}

// Selector de idioma: SOLO idiomas que EXISTEN para esa route (nunca 404)
export function switcherFor(path: string): { lang: Lang; url: string }[] {
  const hit = findByPath(path);
  if (!hit) return [];
  const out: { lang: Lang; url: string }[] = [];
  for (const lang of ["es", "en", "fr"] as Lang[]) {
    const u = urlFor(hit.route, lang);
    if (u) out.push({ lang, url: u });
  }
  return out;
}

// Todas las URLs existentes (para sitemap.ts); ES + EN/FR donde estén definidos
export function allUrls(): string[] {
  const urls: string[] = [];
  for (const r of ROUTES) for (const lang of ["es", "en", "fr"] as Lang[]) {
    const u = urlFor(r, lang);
    if (u) urls.push(u);
  }
  return urls;
}

// Redirects 301 de alias -> canónico (o -> ES si ese idioma no se mantiene). Cubre AMBOS prefijos
// porque cada dir [lang] se sirve bajo /en/ y /fr/.
export function aliasRedirects(): { source: string; destination: string }[] {
  const out: { source: string; destination: string }[] = [];
  for (const r of ROUTES) {
    if (!r.aliases) continue;
    for (const a of r.aliases) {
      for (const prefix of ["en", "fr"] as Lang[]) {
        const dest = urlFor(r, prefix) || r.es; // si ese idioma no se mantiene -> a la ES
        out.push({ source: `/${prefix}/${a.slug}/`, destination: dest });
      }
    }
  }
  return out;
}
