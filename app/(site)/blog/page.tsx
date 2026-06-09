import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital — Mkt Web 360",
  description: "Artículos, guías y consejos de marketing digital, SEO, SEM, redes sociales y diseño web para empresas españolas.",
  alternates: { canonical: "https://www.mktweb360.com/blog/" },
  openGraph: {
    title: "Blog Marketing Digital | Mkt Web 360",
    description: "Artículos y guías de marketing digital para empresas.",
    url: "https://www.mktweb360.com/blog/",
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
