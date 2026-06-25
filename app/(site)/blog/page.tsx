import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital",
  description: "Artículos, guías y consejos de marketing digital, SEO, SEM, redes sociales y diseño web para empresas españolas.",
  alternates: { canonical: "https://www.mktweb360.com/blog/" },
  openGraph: {
    title: "Blog Marketing Digital | Mkt Web 360",
    description: "Artículos y guías de marketing digital para empresas.",
    url: "https://www.mktweb360.com/blog/",
    images: [{ url: "/og-blog.jpg", width: 1200, height: 630 }],
  },
};

const BLOG_POSTS = [
  {
    slug: "/ia-aplicada-a-marketing-valor-real-o-humo/",
    title: "IA aplicada a marketing: dónde aporta valor real y dónde sigue siendo humo",
    excerpt: "Descubre dónde la IA aplicada a marketing aporta valor real, qué usos conviene priorizar y dónde sigue habiendo demasiado ruido en 2025.",
    date: "2025-03-01",
    category: "IA · Estrategia",
  },
  {
    slug: "/cuanto-cuesta-pagina-web-profesional/",
    title: "Cuánto cuesta una página web profesional y qué debe incluir para generar clientes",
    excerpt: "Descubre qué influye de verdad en el precio de una web profesional, qué debe incluir para captar clientes y cómo comparar presupuestos.",
    date: "2025-03-10",
    category: "Diseño Web",
  },
  {
    slug: "/seo-o-google-ads-que-conviene-mas/",
    title: "SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia",
    excerpt: "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
    date: "2025-03-17",
    category: "SEO · SEM",
  },
  {
    slug: "/seo-local-empresas-servicios/",
    title: "SEO local para empresas de servicios: cómo conseguir clientes en tu zona",
    excerpt: "Aprende qué necesita una empresa de servicios para mejorar su presencia local y captar más clientes desde Google en su zona.",
    date: "2025-03-24",
    category: "SEO Local",
  },
  {
    slug: "/que-revisar-antes-de-invertir-mas-en-marketing-digital/",
    title: "Qué revisar en tu empresa antes de invertir más en marketing digital",
    excerpt: "Antes de invertir más en marketing digital, revisa estas 7 áreas clave para no amplificar errores y tomar mejores decisiones de inversión.",
    date: "2025-04-01",
    category: "Estrategia",
  },
  {
    slug: "/senales-web-necesita-rediseno/",
    title: "Señales de que tu web necesita un rediseño urgente si quieres vender más",
    excerpt: "Descubre las señales más claras de que tu web está frenando ventas y cuándo conviene rediseñar en lugar de seguir optimizando.",
    date: "2025-04-07",
    category: "Diseño Web",
  },
  {
    slug: "/como-generar-leads-calidad-pyme/",
    title: "Cómo generar leads de calidad para una pyme sin llenar el embudo de contactos inútiles",
    excerpt: "Aprende cómo generar leads de calidad para tu pyme mejorando mensaje, segmentación, canales, web y proceso comercial.",
    date: "2025-04-14",
    category: "Captación",
  },
  {
    slug: "/seo-para-ecommerce-errores-que-frenan-ventas/",
    title: "SEO para ecommerce: los errores que más frenan ventas en una tienda online",
    excerpt: "Descubre los errores SEO más comunes en ecommerce y qué revisar para mejorar visibilidad, tráfico cualificado y ventas.",
    date: "2025-04-21",
    category: "SEO · Ecommerce",
  },
  {
    slug: "/que-puede-automatizar-una-pyme-en-marketing-y-ventas/",
    title: "Qué puede automatizar una pyme en marketing y ventas para ahorrar tiempo y captar mejor",
    excerpt: "Descubre qué procesos puede automatizar una pyme en marketing y ventas para ahorrar tiempo, mejorar seguimiento y captar mejor.",
    date: "2025-04-28",
    category: "Automatización",
  },
  {
    slug: "/como-puede-un-autonomo-conseguir-clientes-por-internet/",
    title: "Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca",
    excerpt: "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo de recomendaciones.",
    date: "2025-05-05",
    category: "Autónomos · Captación",
  },
  {
    slug: "/seo-para-servicios-urgentes-24h/",
    title: "SEO para Servicios Urgentes 24h: Cómo Posicionar en Google",
    excerpt: "Descubre cómo los negocios de servicios urgentes pueden posicionarse en Google y captar clientes en el momento exacto que te necesitan.",
    date: "2024-03-15",
    category: "SEO",
  },
  {
    slug: "/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/",
    title: "Cómo Crear una Página Web para Pintores y Conseguir Clientes en Google",
    excerpt: "Guía completa para pintores y empresas de pintura que quieren tener presencia online y conseguir clientes a través de Google.",
    date: "2024-02-20",
    category: "Diseño Web",
  },
  {
    slug: "/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/",
    title: "Todo lo que Necesitas Saber sobre el Análisis DAFO en tu Estrategia de Marketing",
    excerpt: "El análisis DAFO es una herramienta fundamental para cualquier estrategia de marketing. Aprende a aplicarlo correctamente en tu empresa.",
    date: "2024-01-10",
    category: "Estrategia",
  },
  {
    slug: "/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/",
    title: "Descubre el Poder del Canvas para la Gestión de tus Redes Sociales",
    excerpt: "El modelo Canvas adaptado a las redes sociales te ayuda a planificar tu estrategia de contenidos de forma más efectiva.",
    date: "2023-12-05",
    category: "Redes Sociales",
  },
  {
    slug: "/descubre-el-analisis-pestel-en-el-marketing-digital/",
    title: "Descubre el Análisis PESTEL en el Marketing Digital",
    excerpt: "El análisis PESTEL te permite entender el entorno macro de tu empresa y adaptar tu estrategia de marketing digital a los factores externos.",
    date: "2023-11-18",
    category: "Estrategia",
  },
  {
    slug: "/como-elegir-el-mejor-hosting-para-tu-web/",
    title: "Cómo Elegir el Mejor Hosting para tu Web",
    excerpt: "Una guía completa para elegir el hosting adecuado para tu página web según tus necesidades, presupuesto y tipo de proyecto.",
    date: "2023-10-25",
    category: "Diseño Web",
  },
  {
    slug: "/ha-muerto-el-seo-con-la-ia/",
    title: "¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso",
    excerpt: "Muchos creen que la IA ha matado el SEO. Analizamos por qué eso no es cierto y por qué IA + técnico cualificado es la fórmula ganadora.",
    date: "2026-06-12",
    category: "SEO",
  },
  {
    slug: "/como-darse-de-alta-autonomo/",
    title: "Cómo darse de alta como autónomo en 2026: pasos, costes y errores a evitar",
    excerpt: "Guía completa para darse de alta como autónomo en 2026. Pasos en Hacienda y Seguridad Social, cuota, errores frecuentes y qué necesitas tener listo.",
    date: "2026-06-12",
    category: "Autónomos",
  },
  {
    slug: "/factura-electronica-obligatoria-autonomos-pymes/",
    title: "Factura electrónica obligatoria para autónomos y pymes: qué debes saber en 2026",
    excerpt: "La factura electrónica será obligatoria para autónomos y pymes. Descubre qué implica, cuándo entra en vigor, qué necesitas y cómo prepararte.",
    date: "2026-06-12",
    category: "Autónomos",
  },
  {
    slug: "/como-digitalizar-tu-negocio/",
    title: "Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes en 2026",
    excerpt: "Digitalizar un negocio no significa comprar software caro. Descubre qué pasos dar primero, qué herramientas tienen sentido y cómo hacerlo con orden.",
    date: "2026-06-12",
    category: "Pymes",
  },
  {
    slug: "/google-my-business-empresas-guia/",
    title: "Google Business Profile para empresas: guía completa 2026",
    excerpt: "Aprende a optimizar tu ficha de Google Business Profile para aparecer en búsquedas locales, conseguir más reseñas y convertir visitas en clientes.",
    date: "2026-06-12",
    category: "SEO Local",
  },
  {
    slug: "/como-crear-propuesta-de-valor/",
    title: "Cómo crear una propuesta de valor que atraiga a los clientes que quieres",
    excerpt: "Una propuesta de valor clara es la base de cualquier estrategia de marketing efectiva. Aprende a construirla con ejemplos prácticos para pymes.",
    date: "2026-06-12",
    category: "Estrategia",
  },
  {
    slug: "/errores-digitales-negocio-nuevo/",
    title: "10 errores digitales al montar un negocio desde cero (y cómo evitarlos)",
    excerpt: "Arrancar un negocio con errores digitales cuesta dinero y tiempo. Descubre los más frecuentes y cómo evitarlos desde el principio.",
    date: "2026-06-12",
    category: "Emprendedores",
  },
  {
    slug: "/como-gestionar-reputacion-online-empresa/",
    title: "Cómo gestionar la reputación online de tu empresa: guía práctica 2026",
    excerpt: "La reputación online se construye o destruye en público. Descubre cómo gestionarla con criterio: reseñas, menciones, respuestas y prevención de crisis.",
    date: "2026-06-12",
    category: "Estrategia",
  },
  {
    slug: "/google-merchant-center-ecommerce-guia/",
    title: "Google Merchant Center para ecommerce: guía completa 2026",
    excerpt: "Aprende a configurar Google Merchant Center, crear tu feed de productos y aparecer en Google Shopping para aumentar las ventas de tu tienda online.",
    date: "2026-06-12",
    category: "Ecommerce",
  },
  {
    slug: "/marketing-digital-toledo/",
    title: "Marketing digital para empresas en Toledo: guía práctica para crecer online",
    excerpt: "Qué canales de marketing digital funcionan mejor para negocios en Toledo según el tipo de negocio, presupuesto y objetivos. Guía práctica con costes orientativos.",
    date: "2025-06-02",
    category: "SEO Local",
  },
  {
    slug: "/seo-toledo/",
    title: "SEO en Toledo: cómo aparecer en Google si tienes un negocio local",
    excerpt: "Guía de SEO local para negocios en Toledo. Factores de posicionamiento, keywords locales y cómo optimizar tu Google Business Profile para atraer más clientes.",
    date: "2025-06-09",
    category: "SEO Local",
  },
  {
    slug: "/digitalizacion-empresas-castilla-la-mancha/",
    title: "Cómo digitalizar tu empresa en Castilla-La Mancha en 2025",
    excerpt: "Los pasos, herramientas y ayudas disponibles para digitalizar una PYME en Castilla-La Mancha. Incluye información sobre el Kit Digital y cómo elegir un partner de digitalización.",
    date: "2025-06-16",
    category: "Estrategia Digital",
  },
  {
    slug: "/agencias-marketing-digital-toledo/",
    title: "Cómo elegir una agencia de marketing digital en Toledo sin cometer errores",
    excerpt: "Qué preguntar antes de contratar, qué red flags detectar y cómo comparar presupuestos de agencias de marketing digital en Toledo. Guía práctica para no equivocarse.",
    date: "2025-06-23",
    category: "Estrategia Digital",
  },
  {
    slug: "/tiendas-online-toledo/",
    title: "Tiendas online en Toledo: cómo vender tus productos más allá de la provincia",
    excerpt: "Qué necesitas para lanzar una tienda online desde Toledo, cuánto cuesta, cómo gestionar envíos a toda España y cómo evitar los errores más comunes en ecommerce.",
    date: "2025-07-07",
    category: "Ecommerce",
  },
  {
    slug: "/google-business-profile-toledo/",
    title: "Google Business Profile para negocios en Toledo: guía paso a paso",
    excerpt: "Cómo crear, verificar y optimizar tu ficha de Google Business Profile si tienes un negocio en Toledo. Estrategia de reseñas, publicaciones y métricas que debes seguir.",
    date: "2025-07-14",
    category: "SEO Local",
  },
  {
    slug: "/que-es-geo-generative-engine-optimization/",
    title: "Qué es el GEO y por qué es más importante que el SEO tradicional en 2025",
    excerpt: "GEO (Generative Engine Optimization) es la disciplina de optimizar tu presencia para aparecer en ChatGPT, Perplexity y Gemini. Qué es, cómo funciona y cómo empezar.",
    date: "2025-07-21",
    category: "IA · Estrategia",
  },
  {
    slug: "/como-crear-landing-page-que-convierte/",
    title: "Cómo crear una landing page que convierte visitas en clientes",
    excerpt: "Estructura, copy, CTA y errores que debes evitar para crear landing pages que multiplican las conversiones sin aumentar el presupuesto de publicidad.",
    date: "2025-07-28",
    category: "Diseño Web",
  },
  {
    slug: "/whatsapp-business-para-empresas/",
    title: "WhatsApp Business para empresas: guía completa de configuración y estrategia",
    excerpt: "Cómo sacar el máximo partido a WhatsApp Business para captar y fidelizar clientes. Configuración, automatizaciones, catálogo y cuándo dar el salto a la API.",
    date: "2025-08-04",
    category: "Marketing Digital",
  },
  {
    slug: "/email-marketing-pymes/",
    title: "Email marketing para PYMEs: guía de primeros pasos para empezar a vender por email",
    excerpt: "Cómo construir tu lista, qué herramientas usar y cómo diseñar campañas de email marketing que generan resultados reales para una PYME desde cero.",
    date: "2025-08-11",
    category: "Marketing Digital",
  },
  {
    slug: "/como-medir-roi-marketing-digital/",
    title: "Cómo medir el ROI de tus campañas de marketing digital paso a paso",
    excerpt: "Cómo calcular el ROI de cada canal digital, configurar GA4 para seguimiento de conversiones y presentar resultados de marketing de forma clara a dirección.",
    date: "2025-08-18",
    category: "Analítica",
  },
  {
    slug: "/gestion-resenas-negativas-google/",
    title: "Cómo gestionar las reseñas negativas en Google sin perder clientes",
    excerpt: "Estrategia profesional para responder reseñas negativas, plantillas de respuesta, cuándo solicitar la eliminación de una reseña falsa y cómo generar más reseñas positivas.",
    date: "2025-08-25",
    category: "Reputación Online",
  },
  {
    slug: "/diseno-web-pymes/",
    title: "Diseño web para PYMEs: qué debe tener tu web para convertir visitas en clientes",
    excerpt: "Los 7 elementos imprescindibles en la web de una PYME, errores de diseño que cuestan clientes y cómo el SEO técnico y el copywriting determinan si tu web vende o no.",
    date: "2025-09-01",
    category: "Diseño Web",
  },
  {
    slug: "/importar-productos-woocommerce/",
    title: "Cómo importar productos en WooCommerce con CSV: guía paso a paso sin errores",
    excerpt: "Formato correcto del CSV, mapeo de columnas, productos variables con atributos y cómo resolver los errores más frecuentes al importar catálogos en WooCommerce.",
    date: "2025-10-06",
    category: "Ecommerce",
  },
  {
    slug: "/conectar-tpv-tienda-online/",
    title: "Cómo conectar el TPV de tu tienda física con tu tienda online: guía completa",
    excerpt: "Opciones de integración entre TPV y WooCommerce, qué datos sincronizar, cómo gestionar el stock unificado y el retorno de inversión de la integración.",
    date: "2025-10-13",
    category: "Ecommerce",
  },
  {
    slug: "/migrar-tienda-online-sin-perder-datos/",
    title: "Cómo migrar tu tienda online sin perder datos, pedidos ni posicionamiento en Google",
    excerpt: "Qué datos hay que migrar y en qué orden, cómo preservar el SEO con redirecciones 301, plan de migración por fases y los errores más costosos que debes evitar.",
    date: "2025-10-20",
    category: "Ecommerce",
  },
  {
    slug: "/seo-madrid/",
    title: "SEO en Madrid: cómo posicionar tu negocio en el mercado más competitivo de España",
    excerpt: "Keywords locales, estrategia para el Local Pack, cómo atacar desde long tail y qué plazos realistas esperar para posicionar en Madrid.",
    date: "2025-10-27",
    category: "SEO Local",
  },
  {
    slug: "/migrar-shopify-woocommerce/",
    title: "Cómo migrar de Shopify a WooCommerce sin perder tu tienda ni tu posicionamiento",
    excerpt: "Qué puedes exportar de Shopify, cómo resolver el problema de URLs y redirecciones, proceso paso a paso y configuración post-migración imprescindible.",
    date: "2025-11-03",
    category: "Ecommerce",
  },
  {
    slug: "/marketing-digital-barcelona/",
    title: "Marketing digital para empresas en Barcelona: qué funciona y qué no en el mercado catalán",
    excerpt: "Bilingüismo en SEO, Google Ads en Barcelona, redes sociales para cada sector y cómo aprovechar el turismo digital en la segunda ciudad de España.",
    date: "2025-11-10",
    category: "SEO Local",
  },
  {
    slug: "/metodos-pago-tienda-online-espana/",
    title: "Métodos de pago para tiendas online en España: cuál elegir y cuánto cobran en 2025",
    excerpt: "Comparativa de Stripe, Redsys, PayPal, Bizum y BNPL para ecommerce en España. Comisiones reales, integración con WooCommerce y impacto en conversión.",
    date: "2025-11-17",
    category: "Ecommerce",
  },
  {
    slug: "/seo-valencia/",
    title: "SEO en Valencia: cómo posicionar tu negocio local en el tercer mercado digital de España",
    excerpt: "Oportunidades SEO en Valencia, keywords en valenciano y castellano, optimización del Local Pack por barrios y plazos realistas de resultados.",
    date: "2025-11-24",
    category: "SEO Local",
  },
  {
    slug: "/auditoria-seo-basica/",
    title: "Cómo hacer una auditoría SEO básica de tu web: guía práctica sin conocimientos técnicos",
    excerpt: "Google Search Console, Screaming Frog y PageSpeed Insights paso a paso para detectar los problemas SEO más importantes y priorizarlos correctamente.",
    date: "2025-12-01",
    category: "SEO",
  },
  {
    slug: "/chatgpt-para-marketing-digital/",
    title: "Cómo usar ChatGPT para marketing digital sin perder la autenticidad de tu marca",
    excerpt: "Qué tareas de marketing puedes delegar con confianza a ChatGPT, prompts efectivos, cómo mantener la voz de tu marca y qué no debe hacer nunca la IA por ti.",
    date: "2025-12-08",
    category: "IA · Estrategia",
  },
  {
    slug: "/marketing-digital-sevilla/",
    title: "Marketing digital para empresas en Sevilla: guía práctica para crecer online en la capital andaluza",
    excerpt: "SEO local por barrios, Google Business Profile, redes sociales y cómo aprovechar el turismo y la estacionalidad para el marketing digital en Sevilla.",
    date: "2025-12-15",
    category: "SEO Local",
  },
  {
    slug: "/google-shopping-tiendas-online/",
    title: "Google Shopping para tiendas online: cómo aparecer en los resultados de compra y aumentar ventas",
    excerpt: "Configurar Google Merchant Center, optimizar el feed de productos, diferencias entre fichas gratuitas y anuncios de pago, y métricas clave de rendimiento.",
    date: "2025-12-22",
    category: "Ecommerce",
  },
  {
    slug: "/seo-bilbao/",
    title: "SEO en Bilbao: cómo posicionar tu negocio en el mercado digital del País Vasco",
    excerpt: "Mercado digital vasco, SEO en euskera, oportunidades por sector, Google Business Profile en el Gran Bilbao y estrategia recomendada para PYMEs bilbaínas.",
    date: "2026-01-05",
    category: "SEO Local",
  },
  {
    slug: "/link-building-pymes/",
    title: "Link building para PYMEs: cómo conseguir backlinks de calidad sin presupuesto para spam",
    excerpt: "Estrategias de link building para pequeñas empresas: directorios de calidad, prensa local, colaboraciones con negocios complementarios y contenido enlazable.",
    date: "2026-01-12",
    category: "SEO",
  },
  {
    slug: "/agencias-marketing-digital-madrid/",
    title: "Cómo elegir una agencia de marketing digital en Madrid sin cometer errores costosos",
    excerpt: "Las 8 preguntas que debes hacer antes de contratar, red flags a detectar, cómo comparar presupuestos y cuándo tiene más sentido un freelance que una agencia.",
    date: "2026-01-19",
    category: "SEO Local",
  },
  {
    slug: "/configurar-envios-woocommerce/",
    title: "Cómo configurar los envíos en WooCommerce para España: guía completa paso a paso",
    excerpt: "Zonas de envío, tarifa plana, envío gratuito, integración con Correos y SEUR, configuración especial para Canarias y estrategia de precios para aumentar conversiones.",
    date: "2026-01-26",
    category: "Ecommerce",
  },
  {
    slug: "/diseno-web-barcelona/",
    title: "Diseño web en Barcelona: qué debes saber antes de contratar una agencia o freelance",
    excerpt: "Precios orientativos, qué debe incluir una web profesional, diferencias entre agencia y freelance en Barcelona y cómo evaluar un portfolio correctamente.",
    date: "2026-02-02",
    category: "SEO Local",
  },
  {
    slug: "/geo-vs-seo-diferencias/",
    title: "GEO vs SEO: diferencias clave y cómo compaginar ambas estrategias en 2025",
    excerpt: "Qué diferencia el GEO del SEO tradicional, por qué necesitas los dos, cómo priorizarlos según tu tipo de negocio y qué tácticas sirven para ambas disciplinas.",
    date: "2026-02-09",
    category: "IA · Estrategia",
  },
  {
    slug: "/seo-zaragoza/",
    title: "SEO en Zaragoza: cómo posicionar tu negocio en Google y captar clientes en Aragón",
    excerpt: "Sectores con mayor oportunidad digital en Zaragoza, Google Business Profile por barrios, estrategia de contenido local y tiempos realistas de resultados.",
    date: "2026-02-16",
    category: "SEO Local",
  },
  {
    slug: "/cuando-elegir-seo-vs-google-ads/",
    title: "Cuándo elegir SEO y cuándo Google Ads: guía para tomar la decisión correcta según tu negocio",
    excerpt: "Diferencias estructurales entre SEO y Google Ads, cuándo es mejor cada uno, cómo combinarlos estratégicamente y una matriz de decisión con casos prácticos.",
    date: "2026-02-23",
    category: "Estrategia",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Blog de Marketing Digital</h1>
      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
        Artículos, guías y recursos de marketing digital para ayudarte a hacer crecer tu negocio online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                <time className="text-xs text-gray-400" dateTime={post.date}>
                  {new Date(post.date + "T00:00:00").toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <h2 className="text-lg font-bold text-primary-700 mb-2 line-clamp-2">
                <Link href={post.slug} className="hover:text-accent-500 transition-colors">{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
              <Link href={post.slug} className="mt-4 inline-block text-accent-500 text-sm font-medium hover:text-accent-600">
                Leer artículo →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
