import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "LinkedIn para pymes españolas en 2026: guía práctica para generar leads",
  description:
    "LinkedIn ha cambiado más en 2026 que en los 5 años anteriores. Nuevo algoritmo, vídeo como formato dominante, Employee Generated Content y social selling. Cómo aprovecharlo si eres una pyme.",
  alternates: { canonical: "https://www.mktweb360.com/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/" },
  openGraph: {
    title: "LinkedIn para pymes españolas en 2026: guía práctica para generar leads | Mkt Web 360",
    description: "LinkedIn ha cambiado más en 2026 que en los 5 años anteriores. Nuevo algoritmo, vídeo como formato dominante, Employee Generated Content y social selling. Cómo aprovecharlo si eres una pyme.",
    url: "https://www.mktweb360.com/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-smm.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "LinkedIn para pymes españolas en 2026: guía práctica para generar leads",
  description: "LinkedIn ha cambiado más en 2026 que en los 5 años anteriores. Nuevo algoritmo, vídeo como formato dominante, Employee Generated Content y social selling. Cómo aprovecharlo si eres una pyme.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-smm.jpg",
  url: "https://www.mktweb360.com/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/",
  mainEntityOfPage: "https://www.mktweb360.com/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "LinkedIn para pymes españolas en 2026", item: "https://www.mktweb360.com/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta anunciarse en LinkedIn para una pyme?",
    a: "El presupuesto mínimo recomendado para LinkedIn Ads es de 300-500€/mes. Es más caro que Meta Ads, pero la calidad del lead en B2B suele compensarlo. Para pymes con presupuesto limitado, la estrategia orgánica basada en EGC puede generar resultados sin inversión en Ads.",
  },
  {
    q: "¿Es mejor publicar desde el perfil personal o desde la página de empresa?",
    a: "El algoritmo de LinkedIn en 2026 favorece claramente los perfiles personales. El contenido publicado por personas genera 8 veces más engagement que el de páginas corporativas. La estrategia correcta: activar al fundador o equipo comercial como creadores de contenido.",
  },
  {
    q: "¿Con qué frecuencia debo publicar en LinkedIn?",
    a: "3-5 publicaciones por semana como frecuencia óptima para construir audiencia. Por debajo de 3, el algoritmo reduce la distribución. La consistencia importa más que la frecuencia exacta.",
  },
  {
    q: "¿Funciona el vídeo en LinkedIn para pymes?",
    a: "El vídeo nativo en LinkedIn creció un 30% interanual en 2026 y el algoritmo lo prioriza. Los vídeos de 60-90 segundos grabados con móvil, con buena luz y audio claro, funcionan mejor que los vídeos corporativos muy producidos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function LinkedInPymesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "LinkedIn para pymes españolas en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Social Media · LinkedIn</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            LinkedIn para pymes en 2026: cómo generar leads sin gastar en publicidad
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            LinkedIn ha cambiado más en 2026 que en los cinco años anteriores: nuevo algoritmo, vídeo dominante, contenido de empleados y social selling. Bien aprovechado, es hoy uno de los canales más rentables para <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">generar leads de calidad</Link> sin depender de la publicidad.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Muchas pymes siguen viendo LinkedIn como una simple base de datos de currículums. Es un error caro. En 2026, LinkedIn es la plataforma B2B con mayor crecimiento orgánico y, para negocios que venden a empresas, un canal capaz de generar consultas cualificadas sin invertir un euro en anuncios. La clave está en entender cómo funciona hoy.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">El nuevo LinkedIn de 2026: qué ha cambiado</h2>
          <p>El dato lo resume todo: según Metricool, el número de cuentas activas de empresa en LinkedIn creció un 88% en el último periodo analizado. Cada vez más marcas entienden que aquí está su cliente B2B, y el algoritmo ha evolucionado para premiar el contenido que genera conversación real, no el que solo busca visibilidad.</p>
          <p>Ese algoritmo prioriza ahora los formatos que retienen la atención (vídeo y carruseles) y penaliza el contenido puramente autopromocional. Para una pyme, esto es una buena noticia: no hace falta un gran presupuesto, hace falta contenido relevante y constante. Es la misma lógica que rige el resto de plataformas según los <Link href="/redes-sociales-para-empresas-2026-que-funciona-de-verdad-segun-los-datos/" className="text-accent-500 hover:underline">datos de redes sociales para empresas en 2026</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el perfil personal gana a la página de empresa</h2>
          <p>La página de empresa sigue siendo necesaria como escaparate, pero el motor real de alcance en 2026 son los perfiles personales. El contenido publicado por personas genera hasta 8 veces más engagement que el de las páginas corporativas, porque la gente conecta con personas, no con logotipos.</p>
          <p>Para una pyme esto tiene una implicación estratégica clara: hay que activar al fundador, a la persona que lidera el negocio o al equipo comercial como creadores de contenido. No se trata de convertirse en influencer, sino de compartir con criterio lo que ya se sabe del sector. Esa presencia personal es también el mejor complemento a una estrategia de <Link href="/marketing-de-contenidos/" className="text-accent-500 hover:underline">marketing de contenidos</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los formatos que funcionan en 2026 con datos reales</h2>
          <p>Los números marcan el camino. Los carruseles generan un 278% más de interacción que las publicaciones de solo texto, lo que los convierte en el formato estrella para explicar procesos, compartir aprendizajes o desglosar un caso paso a paso. El vídeo nativo, por su parte, creció un 30% interanual y el algoritmo lo prioriza de forma activa.</p>
          <p>La buena noticia para una pyme es que no hace falta una gran producción: los vídeos de 60-90 segundos grabados con el móvil, con buena luz y audio claro, funcionan mejor que las piezas corporativas muy producidas. La autenticidad rinde más que la perfección.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Employee Generated Content: la tendencia que más oportunidades crea</h2>
          <p>El Employee Generated Content (EGC), o contenido generado por los propios empleados, es una de las mayores oportunidades de 2026. Cuando varias personas del equipo comparten contenido relacionado con la empresa desde sus perfiles, la marca multiplica su alcance sin coste publicitario y con mucha más credibilidad.</p>
          <p>Para una pyme, activar a tres o cuatro personas del equipo como creadores puede tener más impacto que cualquier campaña de pago. La coordinación es sencilla: temas comunes, libertad de estilo y constancia. El resultado es una presencia distribuida y auténtica que ninguna página corporativa puede igualar.</p>

          <h2 className="text-2xl font-bold text-primary-600">Social selling: cómo convertir LinkedIn en fuente de clientes</h2>
          <p>El social selling consiste en usar LinkedIn para construir relaciones que acaban en oportunidades comerciales, sin recurrir a los mensajes en frío de siempre. Se basa en aportar valor de forma constante para que, cuando el potencial cliente tenga la necesidad, tu negocio sea el primero que le venga a la mente.</p>
          <p>En la práctica: publicar contenido útil, comentar de forma genuina en las publicaciones de tu red y contactar solo cuando hay contexto real. Esta forma de vender encaja de manera natural dentro de una estrategia más amplia de <Link href="/smm-social-media-marketing/" className="text-accent-500 hover:underline">social media marketing</Link> orientada a resultados.</p>

          <h2 className="text-2xl font-bold text-primary-600">El error que destruye la estrategia de LinkedIn de muchas pymes</h2>
          <p>El error más común es la inconsistencia. Muchas pymes empiezan con energía, publican durante dos semanas y lo abandonan al no ver resultados inmediatos. LinkedIn es un canal de construcción a medio plazo: por debajo de 3-5 publicaciones semanales, el algoritmo reduce la distribución y el esfuerzo se diluye.</p>
          <p>El segundo error es convertir el perfil en un catálogo de autobombo. LinkedIn premia a quien enseña, aporta y conversa, no a quien solo se anuncia. La regla es sencilla: aportar valor la mayor parte del tiempo y vender de forma explícita solo de vez en cuando.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Convierte LinkedIn en un canal de clientes para tu pyme</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 diseñamos y ejecutamos estrategias de LinkedIn y social media orientadas a generar leads reales, no solo seguidores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/smm-social-media-marketing/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de Social Media
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads" />
    </>
  );
}
