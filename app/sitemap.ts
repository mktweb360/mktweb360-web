import { MetadataRoute } from "next";

const BASE = "https://www.mktweb360.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/seo-posicionamiento-web-organico/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/sem-publicidad-ppc/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/smm-social-media-marketing/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/diseno-de-paginas-web/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/diseno-de-paginas-web/paginas-corporativas/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/diseno-de-paginas-web/diseno-tiendas-online/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/diseno-de-paginas-web/diseno-paginas-web-empresa/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/marketing-de-contenidos/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/kit-digital/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog/", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contacto/", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/aviso-legal/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politica-de-privacidad/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/politica-de-cookies/", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/seo-para-servicios-urgentes-24h/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/descubre-el-analisis-pestel-en-el-marketing-digital/", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/como-elegir-el-mejor-hosting-para-tu-web/", priority: 0.6, changeFrequency: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
