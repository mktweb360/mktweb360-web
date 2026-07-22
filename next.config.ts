import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { aliasRedirects } from "./lib/i18n/routes";

const withMDX = createMDX({});

// Fase 2b — PENDIENTE de decision. Estos alias tienen implementacion propia con
// mas contenido que su canonica (~21 lineas / 1 <section> extra), asi que
// redirigirlos publicaria la version pobre y perderia la rica. Se excluyen del
// cableado automatico hasta decidir, para cada ruta, que version se conserva.
const ALIAS_FASE_2B = new Set([
  "boutique-en-ligne-sans-commissions", "ecommerce-no-commissions",
  "offre-boutique-en-ligne", "online-store-offer",
  "qu-est-ce-que-le-geo", "seo-positioning",
  "what-is-geo-generative-engine-optimization",
]);

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  trailingSlash: true,
  // La normalización automática de barra la hacemos en middleware.ts (solo páginas),
  // para que /api/* NO reciba el 308 de trailingSlash. Ver middleware.
  skipTrailingSlashRedirect: true,
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      // Blog articles
      { source: '/tipos-de-resultados-en-buscadores-organicos-seo-y-de-pago-sem/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/como-eliminar-resenas-negativas-en-google/', destination: '/smm-social-media-marketing/', permanent: true },
      { source: '/guia-posicionamiento-seo-wordpress/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/el-diseno-web-orientado-al-seo/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/como-optimizar-campanas-de-google-ads/', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/que-es-como-hacer-una-estrategia-de-linkbuilding/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/estrategia-de-contenido-mejora-los-contenidos-de-tu-web/', destination: '/marketing-de-contenidos/', permanent: true },
      { source: '/la-importancia-del-contenido-en-internet-para-las-empresas/', destination: '/marketing-de-contenidos/', permanent: true },
      { source: '/marketing-para-centros-de-estetica/', destination: '/contacto/', permanent: true },
      { source: '/por-que-la-campana-seo-no-me-funciona/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/que-es-search-console-insights/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/pagos-y-facturas-en-google-ads/', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/borrar-automaticamente-nuestros-datos-de-localizacion-y-actividad-en-google/', destination: '/blog/', permanent: true },
      { source: '/black-friday-marketing-digital/', destination: '/blog/', permanent: true },
      { source: '/medidas-para-la-prevencion-de-contagios-del-covid-19/', destination: '/blog/', permanent: true },
      { source: '/crear-una-pagina-web-de-empresa-que-necesito/', destination: '/diseno-de-paginas-web/', permanent: true },
      // Old portfolio/offer pages
      { source: '/portfolio-mktweb360/', destination: '/casos/', permanent: true },
      { source: '/oferta-diseno-paginas-web', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-pagina-web-para-academia/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-pintores/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-paginas-web-dentistas-y-clinicas-dentales/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-coach/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-restaurantes/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-paginas-web-para-empresas-de-limpieza/', destination: '/diseno-de-paginas-web/', permanent: true },
      // WordPress category/tag pages
      // Slash-less so it matches before the /category/:slug catch-all (trailingSlash:false strips '/x/' → '/x')
      { source: '/category/diseno-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/category/:slug/', destination: '/blog/', permanent: true },
      { source: '/tag/:slug/', destination: '/blog/', permanent: true },
      // WordPress media/uploads
      { source: '/wp-content/uploads/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },

      // Consolidación duplicado blog monetización → canónica /blog-para-monetizacion/
      { source: '/blog-monetizacion', destination: '/blog-para-monetizacion/', permanent: true },
      { source: '/blog-monetizacion/', destination: '/blog-para-monetizacion/', permanent: true },

      // (Deploy 1) Aquí vivían 12 reglas /x -> /x/ que, con trailingSlash:false,
      // rebotaban contra la normalización /x/ -> /x y hacían bucle infinito. Se
      // eliminaron para desbloquear.
      // (Deploy 2) Ya está activo trailingSlash:true + skipTrailingSlashRedirect:true;
      // la normalización de barra de páginas la hace middleware.ts (excluyendo /api,
      // /_next y ficheros). El canonical == URL servida == sitemap == llms.txt.
      // Con skipTrailingSlashRedirect NO hay auto-normalización: las reglas casan su
      // source literal, así que TODO source de página debe llevar barra final.
      // URLs WordPress con fecha /YYYY/MM/DD/slug/
      { source: '/2019/05/03/ejemplos-y-diferencias-entre-buscadores-y-navegadores/', destination: '/ejemplos-y-diferencias-entre-buscadores-y-navegadores/', permanent: true },
      { source: '/2019/05/04/tipos-de-resultados-en-buscadores-organicos-seo-y-de-pago-sem/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/2019/05/20/por-que-la-campana-seo-no-me-funciona/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/2020/11/25/la-importancia-del-contenido-en-internet-para-las-empresas/', destination: '/marketing-de-contenidos/', permanent: true },
      { source: '/2020/04/13/medidas-para-la-prevencion-de-contagios-del-covid-19/', destination: '/blog/', permanent: true },
      { source: '/2021/08/11/como-eliminar-resenas-negativas-en-google/', destination: '/smm-social-media-marketing/', permanent: true },
      { source: '/2021/08/12/estrategia-de-contenido-mejora-los-contenidos-de-tu-web/', destination: '/marketing-de-contenidos/', permanent: true },
      { source: '/2021/08/20/pagos-y-facturas-en-google-ads/', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/2021/08/25/como-usar-planificador-de-palabras-clave-google-ads/', destination: '/como-usar-planificador-de-palabras-clave-google-ads/', permanent: true },
      { source: '/2021/10/22/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/', destination: '/smm-social-media-marketing/', permanent: true },
      // Patrones con fecha genérica
      { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/', destination: '/blog/', permanent: true },
      { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug', destination: '/blog/', permanent: true },
      // URLs anidadas WordPress
      { source: '/posicionamiento-web-buscadores/seo-posicionamiento-web-organico/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/posicionamiento-web-buscadores/sem-publicidad-ppc/', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/diseno-desarrollo-web/paginas-corporativas/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/diseno-paginas-web-empresas-autonomos/pagina-web-para-pintores/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/diseno-de-paginas-web/oferta-diseno-paginas-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/kit-digital/oferta-diseno-paginas-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/oferta-diseno-paginas-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      // Páginas antiguas sin redirect
      { source: '/pagina-web-para-pintores/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/pagina-web-para-restaurantes/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/como-hacer-una-estrategia-de-redes-sociales-para-empresas/', destination: '/smm-social-media-marketing/', permanent: true },
      { source: '/google-mybusiness-seo-local-y-la-reputacion/', destination: '/google-my-business-empresas-guia/', permanent: true },
      // Paginación WordPress con parámetros ET
      { source: '/sem-publicidad-ppc/page/:page/', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/sem-publicidad-ppc/page/:page', destination: '/sem-publicidad-ppc/', permanent: true },
      { source: '/smm-social-media-marketing/page/:page/', destination: '/smm-social-media-marketing/', permanent: true },
      { source: '/la-importancia-del-contenido-en-internet-para-las-empresas/page/:page/', destination: '/marketing-de-contenidos/', permanent: true },
      { source: '/tipos-de-resultados-en-buscadores-organicos-seo-y-de-pago-sem/page/:page/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/por-que-la-campana-seo-no-me-funciona/page/:page/', destination: '/seo-posicionamiento-web-organico/', permanent: true },

      // Slugs con mayúscula y variantes raras
      { source: '/ejemplos-y-diferencias-entre-buscadores-y-navegadores/Ejemplos/', destination: '/ejemplos-y-diferencias-entre-buscadores-y-navegadores/', permanent: true },
      // Nota: los redirects individuales de /tag/* se eliminaron — cubiertos por el catch-all /tag/:slug
      // Paginaciones adicionales con ?et_blog — redirect base
      { source: '/seo-posicionamiento-web-organico/page/:page/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/seo-posicionamiento-web-organico/page/:page', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/blog/page/:page/', destination: '/blog/', permanent: true },
      { source: '/blog/page/:page', destination: '/blog/', permanent: true },
      // Kit Digital — eliminado
      { source: "/kit-digital/", destination: "/diseno-de-paginas-web/", permanent: true },
      { source: "/kit-digital/:path*/", destination: "/diseno-de-paginas-web/", permanent: true },
      // Expired SEO 6x3 offer — retired, redirect to the evergreen SEO service page.
      // Sources are slash-less because trailingSlash is off (Next strips '/x/' → '/x' before matching).
      { source: '/landing/seo-6x3/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/oferta-seo/:path*/', destination: '/seo-posicionamiento-web-organico/', permanent: true },

      // --- Alias i18n (fase 2a) generados desde lib/i18n/routes.ts, fuente de verdad.
      // 146 reglas / 73 alias. Van al final: las literales de arriba tienen prioridad.
      // Todos los sources llevan barra final (obligatorio con skipTrailingSlashRedirect).
      // permanent:false mientras se valida en produccion; pasar a true despues.
      ...aliasRedirects()
        .filter((r) => !ALIAS_FASE_2B.has(r.source.split("/")[2]))
        .map((r) => ({ ...r, permanent: false })),
    ];
  },
};

export default withMDX(nextConfig);
