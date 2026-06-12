export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  relatedSlugs: string[];
};

export const allPosts: BlogPost[] = [
  { slug: "seo-para-servicios-urgentes-24h", title: "SEO para cerrajeros, fontaneros y electricistas 24h: más llamadas urgentes", excerpt: "El SEO bien ejecutado convierte tu web en un canal estable de captación para servicios urgentes.", date: "2025-01-15", category: "SEO", tags: ["seo-local","servicios","urgentes"], relatedSlugs: ["seo-local-empresas-servicios","seo-o-google-ads-que-conviene-mas"] },
  { slug: "como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google", title: "Cómo crear una página web para pintores y conseguir clientes en Google", excerpt: "Tu web de pintor no debería ser una tarjeta online. Debería captar clientes activamente.", date: "2025-02-01", category: "Diseño Web", tags: ["web","autonomos","local"], relatedSlugs: ["cuanto-cuesta-pagina-web-profesional","senales-web-necesita-rediseno"] },
  { slug: "todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing", title: "Todo lo que necesitas saber sobre el Análisis DAFO en tu Estrategia de Marketing", excerpt: "El análisis DAFO es una herramienta versátil para tomar decisiones informadas en marketing.", date: "2024-03-10", category: "Estrategia", tags: ["estrategia","analisis","pymes"], relatedSlugs: ["que-revisar-antes-de-invertir-mas-en-marketing-digital","como-generar-leads-calidad-pyme"] },
  { slug: "descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales", title: "Descubre el Poder del Canvas para la Gestión de tus Redes Sociales", excerpt: "El Canvas es una herramienta fundamental para el éxito de tu estrategia en redes sociales.", date: "2024-03-17", category: "Social Media", tags: ["redes-sociales","estrategia","canvas"], relatedSlugs: ["que-revisar-antes-de-invertir-mas-en-marketing-digital","como-generar-leads-calidad-pyme"] },
  { slug: "descubre-el-analisis-pestel-en-el-marketing-digital", title: "Navegando el Entorno Digital: Descubre el Análisis PESTEL en el Marketing Digital", excerpt: "Un análisis PESTEL ayuda a comprender el entorno externo en el que opera tu organización.", date: "2024-03-24", category: "Estrategia", tags: ["estrategia","analisis","entorno"], relatedSlugs: ["todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing","que-revisar-antes-de-invertir-mas-en-marketing-digital"] },
  { slug: "como-elegir-el-mejor-hosting-para-tu-web", title: "Cómo elegir el mejor hosting para tu web", excerpt: "La elección de un buen hosting garantiza velocidad y rendimiento. Te mostramos las claves.", date: "2022-06-01", category: "Diseño Web", tags: ["web","hosting","tecnico"], relatedSlugs: ["cuanto-cuesta-pagina-web-profesional","senales-web-necesita-rediseno"] },
  { slug: "cuanto-cuesta-pagina-web-profesional", title: "Cuánto cuesta una página web profesional y qué debe incluir para generar clientes", excerpt: "Descubre qué influye en el precio de una web profesional y qué debe incluir para captar clientes.", date: "2025-03-10", category: "Diseño Web", tags: ["web","precio","presupuesto","pymes"], relatedSlugs: ["senales-web-necesita-rediseno","seo-o-google-ads-que-conviene-mas"] },
  { slug: "seo-o-google-ads-que-conviene-mas", title: "SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia", excerpt: "Descubre si te conviene más SEO, Google Ads o una combinación según tu negocio y urgencia.", date: "2025-03-17", category: "SEO", tags: ["seo","sem","google-ads","captacion"], relatedSlugs: ["seo-local-empresas-servicios","que-revisar-antes-de-invertir-mas-en-marketing-digital"] },
  { slug: "seo-local-empresas-servicios", title: "SEO local para empresas de servicios: cómo conseguir clientes en tu zona", excerpt: "Aprende qué necesita una empresa de servicios para mejorar su presencia local en Google.", date: "2025-03-24", category: "SEO", tags: ["seo-local","servicios","captacion","google-maps"], relatedSlugs: ["como-puede-un-autonomo-conseguir-clientes-por-internet","seo-o-google-ads-que-conviene-mas"] },
  { slug: "que-revisar-antes-de-invertir-mas-en-marketing-digital", title: "Qué revisar en tu empresa antes de invertir más en marketing digital", excerpt: "Revisa estas 7 áreas clave antes de invertir más en marketing para no amplificar errores.", date: "2025-04-01", category: "Estrategia", tags: ["auditoria","estrategia","pymes","inversion"], relatedSlugs: ["seo-o-google-ads-que-conviene-mas","como-generar-leads-calidad-pyme"] },
  { slug: "senales-web-necesita-rediseno", title: "Señales de que tu web necesita un rediseño urgente si quieres vender más", excerpt: "Descubre las señales más claras de que tu web está frenando ventas y cuándo conviene rediseñar.", date: "2025-04-07", category: "Diseño Web", tags: ["web","rediseno","conversion","ux"], relatedSlugs: ["cuanto-cuesta-pagina-web-profesional","como-generar-leads-calidad-pyme"] },
  { slug: "como-generar-leads-calidad-pyme", title: "Cómo generar leads de calidad para una pyme sin llenar el embudo de contactos inútiles", excerpt: "Aprende cómo mejorar mensaje, segmentación, canales y proceso comercial para captar mejor.", date: "2025-04-14", category: "Captación", tags: ["leads","captacion","pymes","conversion"], relatedSlugs: ["seo-o-google-ads-que-conviene-mas","que-puede-automatizar-una-pyme-en-marketing-y-ventas"] },
  { slug: "seo-para-ecommerce-errores-que-frenan-ventas", title: "SEO para ecommerce: los errores que más frenan ventas en una tienda online", excerpt: "Descubre los errores SEO más comunes en ecommerce y cómo mejorar visibilidad y ventas.", date: "2025-04-21", category: "Ecommerce", tags: ["ecommerce","seo","tienda-online","ventas"], relatedSlugs: ["senales-web-necesita-rediseno","que-revisar-antes-de-invertir-mas-en-marketing-digital"] },
  { slug: "que-puede-automatizar-una-pyme-en-marketing-y-ventas", title: "Qué puede automatizar una pyme en marketing y ventas para ahorrar tiempo y captar mejor", excerpt: "Descubre qué procesos conviene automatizar para ahorrar tiempo y mejorar el seguimiento.", date: "2025-04-28", category: "Automatización", tags: ["automatizacion","pymes","marketing","ventas"], relatedSlugs: ["ia-aplicada-a-marketing-valor-real-o-humo","como-generar-leads-calidad-pyme"] },
  { slug: "ia-aplicada-a-marketing-valor-real-o-humo", title: "IA aplicada a marketing: dónde aporta valor real y dónde sigue siendo humo", excerpt: "Separa el ruido de la señal: dónde la IA aporta valor real en marketing y dónde no.", date: "2025-05-01", category: "IA", tags: ["ia","marketing","automatizacion","tendencias"], relatedSlugs: ["que-puede-automatizar-una-pyme-en-marketing-y-ventas","que-revisar-antes-de-invertir-mas-en-marketing-digital"] },
  { slug: "como-puede-un-autonomo-conseguir-clientes-por-internet", title: "Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca", excerpt: "Construye una base digital clara y rentable para conseguir clientes de forma estable.", date: "2025-05-05", category: "Autónomos", tags: ["autonomos","seo-local","web","captacion"], relatedSlugs: ["seo-local-empresas-servicios","cuanto-cuesta-pagina-web-profesional"] },
  { slug: "ejemplos-y-diferencias-entre-buscadores-y-navegadores", title: "Diferencias entre buscadores y navegadores: ejemplos y guía completa", excerpt: "Descubre las diferencias clave entre navegadores y buscadores con ejemplos reales de Chrome, Firefox, Google o Bing.", date: "2025-06-12", category: "SEO", tags: ["seo","navegadores","buscadores","google"], relatedSlugs: ["seo-o-google-ads-que-conviene-mas","seo-posicionamiento-web-organico"] },
  { slug: "instagram-para-empresas-que-poner-en-la-biografia-de-instagram", title: "Qué poner en la biografía de Instagram para empresas: guía completa con ejemplos", excerpt: "La biografía de Instagram es tu tarjeta de presentación. Tienes 150 caracteres para convencer. Te explicamos cómo usarlos.", date: "2025-06-12", category: "Social Media", tags: ["instagram","redes-sociales","empresa"], relatedSlugs: ["descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales","que-puede-automatizar-una-pyme-en-marketing-y-ventas"] },
];

export function getLatestPosts(n: number): BlogPost[] {
  return [...allPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
}

export function getRelatedPosts(currentSlug: string, n: number): BlogPost[] {
  const current = allPosts.find(p => p.slug === currentSlug);
  if (!current) return getLatestPosts(n);
  const byRelated = allPosts.filter(p => current.relatedSlugs.includes(p.slug));
  if (byRelated.length >= n) return byRelated.slice(0, n);
  const byTag = allPosts.filter(p => p.slug !== currentSlug && !current.relatedSlugs.includes(p.slug) && p.tags.some(t => current.tags.includes(t)));
  return [...byRelated, ...byTag].slice(0, n);
}

export function getPostsByCategory(category: string, n: number): BlogPost[] {
  return allPosts.filter(p => p.category.toLowerCase().includes(category.toLowerCase())).slice(0, n).concat(getLatestPosts(n)).filter((v,i,a)=>a.findIndex(p=>p.slug===v.slug)===i).slice(0,n);
}
