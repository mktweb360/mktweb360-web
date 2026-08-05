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
  { es: "/agencias-marketing-digital-madrid/", en: "digital-marketing-agencies-madrid", fr: "digital-marketing-agencies-madrid" },
  { es: "/agencias-marketing-digital-toledo/", en: "digital-marketing-agencies-toledo", fr: "digital-marketing-agencies-toledo" },
  { es: "/analitica-web/", en: "web-analytics", fr: "analytique-web", aliases: [{ lang: "fr", slug: "service-analytique-web" }, { lang: "en", slug: "web-analytics-service" }] },
  { es: "/auditoria-digital/", en: "digital-audit", fr: "audit-digital" },
  { es: "/aviso-legal/", en: "legal-notice", fr: "mentions-legales" },
  { es: "/blog/", en: "blog", fr: "blog" },
  { es: "/chatgpt-para-marketing-digital/", en: "chatgpt-for-digital-marketing", fr: "chatgpt-pour-marketing-digital" },
  { es: "/como-crear-propuesta-de-valor/", en: "how-to-create-value-proposition", fr: "how-to-create-value-proposition" },
  { es: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", en: "how-to-create-website-for-painters", fr: "how-to-create-website-for-painters" },
  { es: "/como-darse-de-alta-autonomo/", en: "how-to-register-as-freelancer", fr: "how-to-register-as-freelancer" },
  { es: "/como-digitalizar-tu-negocio/", en: "how-to-digitalise-your-business", fr: "how-to-digitalise-your-business" },
  { es: "/como-elegir-el-mejor-hosting-para-tu-web/", en: "how-to-choose-best-hosting", fr: "how-to-choose-best-hosting" },
  { es: "/como-generar-leads-calidad-pyme/", en: "how-to-generate-quality-leads", fr: "comment-generer-leads-qualite" },
  { es: "/como-puede-un-autonomo-conseguir-clientes-por-internet/", en: "how-to-get-clients-online-freelancer", fr: "how-to-get-clients-online-freelancer" },
  { es: "/conectar-tpv-tienda-online/", en: "connect-pos-to-online-store", fr: "connecter-tpv-boutique-ligne" },
  { es: "/configurar-envios-woocommerce/", en: "configure-shipping-woocommerce", fr: "configurer-expeditions-woocommerce" },
  { es: "/contacto/", en: "contact", fr: "contact" },
  { es: "/creacion-de-blog/", en: "blog-creation-service", fr: "service-creation-blog" },
  { es: "/cuanto-cuesta-pagina-web-profesional/", en: "how-much-does-a-website-cost", fr: "combien-coute-site-web" },
  { es: "/descubre-el-analisis-pestel-en-el-marketing-digital/", en: "pestel-analysis-marketing", fr: "pestel-analysis-marketing" },
  { es: "/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/", en: "canvas-for-social-media", fr: "canvas-for-social-media" },
  { es: "/digitalizacion-empresas-castilla-la-mancha/", en: "digitalization-castilla-la-mancha", fr: "digitalization-castilla-la-mancha" },
  { es: "/diseno-de-paginas-web/", en: "web-design", fr: "creation-site-web", aliases: [{ lang: "fr", slug: "creation-site-web-entreprises" }, { lang: "en", slug: "web-design-services" }] },
  { es: "/diseno-de-paginas-web/diseno-tiendas-online/", en: "online-store", fr: "boutique-en-ligne" },
  // Ecommerce sin comisiones — pagina propia (0€ comision como argumento comercial),
  // NO alias de online-store: contenido comercial exclusivo con su propia landing ES.
  { es: "/diseno-web-tienda-online/", en: "ecommerce-no-commissions", fr: "boutique-en-ligne-sans-commissions" },
  { es: "/ejemplos-y-diferencias-entre-buscadores-y-navegadores/", en: "search-engines-vs-browsers", fr: "search-engines-vs-browsers" },
  { es: "/email-marketing/", en: "email-marketing-campaigns", fr: "campagnes-email-marketing", aliases: [{ lang: "fr", slug: "email-marketing-entreprises" }, { lang: "en", slug: "email-marketing-service" }] },
  { es: "/errores-digitales-negocio-nuevo/", en: "digital-errors-new-business", fr: "digital-errors-new-business" },
  { es: "/factura-electronica-obligatoria-autonomos-pymes/", en: "electronic-invoice-spain", fr: "electronic-invoice-spain" },
  { es: "/geo-posicionamiento-ia/", en: "geo-generative-engine-optimization", fr: "geo-optimisation-moteurs-generatifs", aliases: [{ lang: "en", slug: "geo-generative-seo" }, { lang: "fr", slug: "geo-seo-generatif" }] },
  { es: "/gestion-resenas-negativas-google/", en: "manage-negative-reviews-google", fr: "gerer-avis-negatifs-google" },
  { es: "/google-business-profile-toledo/", en: "google-business-profile-toledo", fr: "google-business-profile-toledo" },
  { es: "/google-business-profile/", en: "google-business-profile-service", fr: "gestion-google-business-profile", aliases: [{ lang: "en", slug: "google-business-profile-management" }, { lang: "en", slug: "service-google-business-profile" }] },
  { es: "/google-merchant-center-ecommerce-guia/", en: "google-merchant-center-guide", fr: "google-merchant-center-guide" },
  { es: "/google-my-business-empresas-guia/", en: "google-my-business-guide", fr: "google-my-business-guide" },
  { es: "/google-shopping-tiendas-online/", en: "google-shopping-for-online-stores", fr: "google-shopping-boutiques-en-ligne" },
  { es: "/ha-muerto-el-seo-con-la-ia/", en: "is-seo-dead-with-ai", fr: "le-seo-est-il-mort-avec-ia" },
  { es: "/ia-aplicada-al-marketing/", en: "ai-applied-marketing", fr: "marketing-intelligence-artificielle", aliases: [{ lang: "en", slug: "ai-marketing-service" }, { lang: "en", slug: "service-ia-marketing" }] },
  { es: "/importar-productos-woocommerce/", en: "import-products-woocommerce", fr: "importer-produits-woocommerce" },
  { es: "/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/", en: "instagram-for-businesses", fr: "instagram-for-businesses" },
  { es: "/link-building-pymes/", en: "link-building-for-smes", fr: "link-building-for-smes" },
  { es: "/marketing-de-contenidos/", en: "content-marketing", fr: "marketing-de-contenu", aliases: [{ lang: "en", slug: "content-marketing-service" }, { lang: "fr", slug: "service-marketing-contenu" }] },
  { es: "/marketing-digital-barcelona/", en: "digital-marketing-barcelona", fr: "digital-marketing-barcelona" },
  { es: "/marketing-digital-sevilla/", en: "digital-marketing-seville", fr: "digital-marketing-seville" },
  { es: "/marketing-digital-toledo/", en: "digital-marketing-toledo", fr: "digital-marketing-toledo" },
  { es: "/metodos-pago-tienda-online-espana/", en: "payment-methods-online-store", fr: "methodes-paiement-boutique-en-ligne" },
  { es: "/migrar-shopify-woocommerce/", en: "migrate-shopify-to-woocommerce", fr: "migrer-shopify-vers-woocommerce" },
  { es: "/migrar-tienda-online-sin-perder-datos/", en: "migrate-online-store-without-losing-data", fr: "migrer-boutique-sans-perdre-donnees" },
  { es: "/nosotros/", en: "about", fr: "about" },
  { es: "/politica-de-cookies/", en: "cookie-policy", fr: "politique-de-cookies" },
  { es: "/politica-de-privacidad/", en: "privacy-policy", fr: "politique-de-confidentialite" },
  // Articulo de blog "que es GEO" — pagina informativa propia, NO el servicio GEO.
  { es: "/que-es-geo-generative-engine-optimization/", en: "what-is-geo-generative-engine-optimization", fr: "qu-est-ce-que-le-geo" },
  { es: "/que-puede-automatizar-una-pyme-en-marketing-y-ventas/", en: "what-can-sme-automate-marketing", fr: "what-can-sme-automate-marketing" },
  { es: "/que-revisar-antes-de-invertir-mas-en-marketing-digital/", en: "what-to-review-before-investing-marketing", fr: "what-to-review-before-investing-marketing" },
  { es: "/reputacion-online/", en: "online-reputation", fr: "reputation-en-ligne", aliases: [{ lang: "fr", slug: "gestion-reputation-en-ligne" }, { lang: "fr", slug: "online-reputation-management" }, { lang: "fr", slug: "online-reputation-management-guide" }] },
  { es: "/sem-publicidad-ppc/", en: "google-ads-management", fr: "gestion-google-ads", aliases: [{ lang: "fr", slug: "campagnes-google-ads" }, { lang: "en", slug: "ppc-google-ads" }] },
  { es: "/senales-web-necesita-rediseno/", en: "signs-your-website-needs-redesign", fr: "signs-your-website-needs-redesign" },
  { es: "/seo-bilbao/", en: "seo-bilbao-guide", fr: "seo-bilbao-guide" },
  { es: "/seo-local-empresas-servicios/", en: "local-seo-for-service-businesses", fr: "seo-local-entreprises-de-services" },
  { es: "/seo-madrid/", en: "seo-madrid-guide", fr: "seo-madrid-guide" },
  { es: "/seo-o-google-ads-que-conviene-mas/", en: "seo-vs-google-ads", fr: "seo-vs-google-ads-fr" },
  { es: "/seo-para-ecommerce-errores-que-frenan-ventas/", en: "seo-for-ecommerce-errors", fr: "seo-for-ecommerce-errors" },
  { es: "/seo-para-servicios-urgentes-24h/", en: "seo-for-urgent-services", fr: "seo-for-urgent-services" },
  { es: "/seo-posicionamiento-web-organico/", en: "seo-web-positioning", fr: "positionnement-seo", aliases: [{ lang: "en", slug: "seo-positioning" }, { lang: "fr", slug: "seo-positionnement-web" }] },
  { es: "/seo-toledo/", en: "seo-toledo-guide", fr: "seo-toledo-guide" },
  { es: "/seo-valencia/", en: "seo-valencia-guide", fr: "seo-valencia-guide" },
  { es: "/seo-zaragoza/", en: "seo-zaragoza-guide", fr: "seo-zaragoza-guide" },
  { es: "/smm-social-media-marketing/", en: "social-media-marketing", fr: "marketing-reseaux-sociaux", aliases: [{ lang: "fr", slug: "gestion-reseaux-sociaux" }, { lang: "en", slug: "social-media-management" }] },
  // Landing de oferta (490€, sin comisiones, plazas limitadas). NO es alias de
  // /diseno-de-paginas-web/diseno-tiendas-online/: es una pagina propia con
  // contenido comercial exclusivo, asi que se declara como route independiente.
  { es: "/tienda-online/", en: "online-store-offer", fr: "offre-boutique-en-ligne" },
  { es: "/tiendas-online-toledo/", en: "online-stores-toledo", fr: "online-stores-toledo" },
  { es: "/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/", en: "swot-analysis-marketing", fr: "swot-analysis-marketing" },
  { es: "/whatsapp-marketing/", en: "whatsapp-marketing-service", fr: "service-whatsapp-marketing" },

  // ── Nuevas traducciones EN+FR añadidas julio 2026 ──────────────────────────

  // Páginas de servicio
  { es: "/casos/", en: "case-studies", fr: "case-studies" },
  { es: "/comunicacion-audiovisual/", en: "audiovisual-communication", fr: "audiovisual-communication" },
  { es: "/auditoria-seo-basica/", en: "basic-seo-audit", fr: "basic-seo-audit" },
  { es: "/diseno-web-pymes/", en: "web-design-smes", fr: "web-design-smes" },
  { es: "/seo-local/", en: "local-seo-services", fr: "local-seo-services" },
  { es: "/blog-para-monetizacion/", en: "blog-monetization", fr: "blog-monetization" },
  { es: "/diseno-web-para-dentistas/", en: "web-design-dentists", fr: "web-design-dentists" },
  { es: "/diseno-web-para-coaches/", en: "web-design-coaches", fr: "web-design-coaches" },
  { es: "/diseno-web-para-clinicas/", en: "web-design-clinics", fr: "web-design-clinics" },
  { es: "/diseno-web-barcelona/", en: "web-design-barcelona", fr: "web-design-barcelona" },
  { es: "/marketing-shopware/", en: "shopware-marketing", fr: "shopware-marketing" },
  { es: "/ecommerce-participacion-resultados/", en: "ecommerce-revenue-sharing", fr: "ecommerce-revenue-sharing" },
  { es: "/ecommerce-dropshipping-con-participacion/", en: "dropshipping-ecommerce", fr: "dropshipping-ecommerce" },

  // Cluster chatbot (10 artículos)
  { es: "/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/", en: "what-is-a-chatbot-for-businesses", fr: "what-is-a-chatbot-for-businesses" },
  { es: "/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/", en: "ai-chatbot-gdpr-eu-ai-act-compliance", fr: "ai-chatbot-gdpr-eu-ai-act-compliance" },
  { es: "/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/", en: "how-much-does-a-chatbot-cost", fr: "how-much-does-a-chatbot-cost" },
  { es: "/chatbot-para-tienda-online-guia-completa-2026/", en: "chatbot-for-online-store", fr: "chatbot-for-online-store" },
  { es: "/atencion-cliente-24-7-pymes-sin-contratar-personal/", en: "24-7-customer-service-smes", fr: "24-7-customer-service-smes" },
  { es: "/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/", en: "chatbot-vs-live-chat", fr: "chatbot-vs-live-chat" },
  { es: "/chatbot-captacion-cualificacion-leads-guia-practica/", en: "chatbot-lead-generation", fr: "chatbot-lead-generation" },
  { es: "/chatbot-para-clinicas-centros-salud-automatizar-citas/", en: "chatbot-for-clinics", fr: "chatbot-for-clinics" },
  { es: "/chatbot-wordpress-como-instalarlo-que-evitar/", en: "chatbot-wordpress", fr: "chatbot-wordpress" },
  { es: "/como-elegir-chatbot-para-empresa-checklist-2026/", en: "how-to-choose-chatbot", fr: "how-to-choose-chatbot" },

  // Cluster Shopware (5 artículos)
  { es: "/cro-shopware-optimizar-conversion-tienda/", en: "shopware-cro-conversion-optimization", fr: "shopware-cro-conversion-optimization" },
  { es: "/geo-shopware-agentic-commerce-chatgpt/", en: "shopware-geo-agentic-commerce", fr: "shopware-geo-agentic-commerce" },
  { es: "/google-ads-shopware-campanas-que-venden/", en: "shopware-google-ads", fr: "shopware-google-ads" },
  { es: "/migrar-shopware-prestashop-woocommerce-seo/", en: "migrate-to-shopware-seo", fr: "migrate-to-shopware-seo" },
  { es: "/seo-shopware-posicionar-tienda-google/", en: "shopware-seo-google", fr: "shopware-seo-google" },

  // Cluster GEO/IA (4 artículos)
  { es: "/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/", en: "geo-for-smes-ai-responses", fr: "geo-for-smes-ai-responses" },
  { es: "/geo-posicionamiento-ia-chatgpt-empresas-espana/", en: "geo-ai-positioning-chatgpt-businesses", fr: "geo-ai-positioning-chatgpt-businesses" },
  { es: "/ia-aplicada-a-marketing-valor-real-o-humo/", en: "ai-marketing-real-value", fr: "ai-marketing-real-value" },
  { es: "/agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio/", en: "ai-agents-marketing", fr: "ai-agents-marketing" },

  // Artículos varios
  { es: "/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/", en: "google-algorithm-updates-2026", fr: "google-algorithm-updates-2026" },
  { es: "/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/", en: "seo-ai-era-google-gemini", fr: "seo-ai-era-google-gemini" },
  { es: "/woocommerce-vs-shopify-cual-elegir-tienda-online/", en: "woocommerce-vs-shopify", fr: "woocommerce-vs-shopify" },

  // Batch 5 — julio 2026
  { es: "/como-gestionar-reputacion-online-empresa/", en: "how-to-manage-online-reputation", fr: "how-to-manage-online-reputation" },
  { es: "/como-usar-planificador-de-palabras-clave-google-ads/", en: "how-to-use-google-keyword-planner", fr: "how-to-use-google-keyword-planner" },
  { es: "/como-medir-roi-marketing-digital/", en: "how-to-measure-digital-marketing-roi", fr: "how-to-measure-digital-marketing-roi" },
  { es: "/como-crear-landing-page-que-convierte/", en: "how-to-create-landing-page-that-converts", fr: "how-to-create-landing-page-that-converts" },
  { es: "/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/", en: "how-ai-is-changing-digital-marketing", fr: "how-ai-is-changing-digital-marketing" },
  { es: "/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/", en: "how-to-optimize-content-for-ai-citations", fr: "how-to-optimize-content-for-ai-citations" },
  { es: "/cuando-elegir-seo-vs-google-ads/", en: "when-to-choose-seo-vs-google-ads", fr: "when-to-choose-seo-vs-google-ads" },
  { es: "/seo-para-clinicas-centros-salud-captar-pacientes-google/", en: "seo-for-clinics-healthcare", fr: "seo-for-clinics-healthcare" },
  { es: "/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/", en: "ai-tools-for-digital-marketing-2026", fr: "ai-tools-for-digital-marketing-2026" },
  { es: "/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/", en: "linkedin-for-smes-lead-generation-2026", fr: "linkedin-for-smes-lead-generation-2026" },
  { es: "/redes-sociales-para-empresas-2026-que-funciona-de-verdad-segun-los-datos/", en: "social-media-for-businesses-2026", fr: "social-media-for-businesses-2026" },
  { es: "/email-marketing-pymes/", en: "email-marketing-smes", fr: "email-marketing-smes" },
  { es: "/whatsapp-business-para-empresas/", en: "whatsapp-business-for-companies", fr: "whatsapp-business-for-companies" },
  { es: "/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/", en: "freelancer-social-security-spain-2026", fr: "freelancer-social-security-spain-2026" },
  { es: "/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/", en: "digital-marketing-for-freelancers-2026", fr: "digital-marketing-for-freelancers-2026" },
  { es: "/cuanto-cuesta-agencia-marketing-digital-espana-2026/", en: "cost-digital-marketing-agency-spain-2026", fr: "cost-digital-marketing-agency-spain-2026" },

  // Páginas huérfanas registradas — julio 2026
  { es: "/geo-vs-seo-diferencias/", en: "geo-vs-seo-differences", fr: "geo-vs-seo-differences" },
  { es: "/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/", en: "why-appearing-in-chatgpt-gemini-matters-more-seo-2026", fr: "why-appearing-in-chatgpt-gemini-matters-more-seo-2026" },
  { es: "/oferta-seo-geo-gbp/" },
  { es: "/diseno-de-paginas-web/diseno-paginas-web-empresa/", en: "web-design-for-businesses", fr: "web-design-for-businesses" },
  { es: "/diseno-de-paginas-web/paginas-corporativas/", en: "corporate-website-design", fr: "corporate-website-design" },

  // ── Agosto 2026 — 5 nuevos artículos de blog ──────────────────────────────
  { es: "/brandformance-como-unir-marca-y-performance/", en: "brandformance-brand-performance-strategy", fr: "brandformance-strategie-marque-performance" },
  { es: "/marketing-digital-con-ia-y-respuestas-cero-clic/", en: "digital-marketing-ai-search-zero-click", fr: "marketing-digital-ia-zero-clic" },
  { es: "/como-escribir-contenido-que-no-suene-a-ia/", en: "how-to-write-content-that-doesnt-sound-like-ai", fr: "comment-ecrire-contenu-qui-ne-sonne-pas-ia" },
  { es: "/seo-social-instagram-tiktok-linkedin-como-buscadores/", en: "social-seo-instagram-tiktok-linkedin", fr: "seo-social-instagram-tiktok-linkedin-moteurs-recherche" },
  { es: "/atribucion-de-marketing-como-medir-impacto-real/", en: "marketing-attribution-measure-real-impact", fr: "attribution-marketing-mesurer-impact-reel" },
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
  const clean = path.replace(/\/*$/, "/");
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

/**
 * Dado un slug EN o FR (sin prefijo de idioma, sin barras), devuelve el slug ES
 * limpio (sin barras). Útil para hacer lookup inverso desde páginas [lang].
 * Ejemplo: esSlugFor("google-algorithm-updates-2026") → "actualizaciones-algoritmo-google-2026-..."
 */
export function esSlugFor(langSlug: string): string | undefined {
  const r = ROUTES.find((r) => r.en === langSlug || r.fr === langSlug);
  return r?.es.replace(/^\/|\/$/g, "");
}

/**
 * Dado un slug ES limpio y un idioma destino, devuelve el slug traducido (sin barras).
 * Devuelve undefined si no existe traducción para ese idioma.
 * Ejemplo: translatedSlugFor("auditoria-seo-basica", "en") → "basic-seo-audit" (o el que corresponda)
 */
export function translatedSlugFor(esSlug: string, lang: "en" | "fr"): string | undefined {
  const r = ROUTES.find((r) => r.es.replace(/^\/|\/$/g, "") === esSlug);
  return lang === "en" ? r?.en : r?.fr;
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
