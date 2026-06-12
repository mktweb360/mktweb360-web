import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      // Blog articles
      { source: '/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/', destination: '/smm-social-media-marketing/', permanent: true },
      { source: '/tipos-de-resultados-en-buscadores-organicos-seo-y-de-pago-sem/', destination: '/seo-posicionamiento-web-organico/', permanent: true },
      { source: '/como-usar-planificador-de-palabras-clave-google-ads/', destination: '/sem-publicidad-ppc/', permanent: true },
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
      { source: '/oferta-diseno-paginas-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-pagina-web-para-academia/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-pintores/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-paginas-web-dentistas-y-clinicas-dentales/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-coach/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/pagina-web-para-restaurantes/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/oferta-diseno-paginas-web/diseno-paginas-web-para-empresas-de-limpieza/', destination: '/diseno-de-paginas-web/', permanent: true },
      // WordPress category/tag pages
      { source: '/category/diseno-web/', destination: '/diseno-de-paginas-web/', permanent: true },
      { source: '/category/:slug', destination: '/blog/', permanent: true },
      { source: '/tag/:slug', destination: '/blog/', permanent: true },
      // WordPress media/uploads
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      // WordPress blog pagination
      { source: '/blog/page/:page/', destination: '/blog/', permanent: true },
      { source: '/blog/page/:page', destination: '/blog/', permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
