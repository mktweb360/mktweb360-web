import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Google Business Profile para empresas: guía completa 2026",
  description:
    "Aprende a optimizar tu ficha de Google Business Profile para aparecer en búsquedas locales, conseguir más reseñas y convertir visitas en clientes.",
  alternates: { canonical: "https://www.mktweb360.com/google-my-business-empresas-guia/" },
  openGraph: {
    title: "Google Business Profile para empresas: guía completa 2026 | Mkt Web 360",
    description: "Aprende a optimizar tu ficha de Google Business Profile para aparecer en búsquedas locales, conseguir más reseñas y convertir visitas en clientes.",
    url: "https://www.mktweb360.com/google-my-business-empresas-guia/",
    type: "article",
    images: [{ url: "/og-google-my-business-empresas-guia.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Business Profile para empresas: guía completa 2026",
  description: "Aprende a optimizar tu ficha de Google Business Profile para aparecer en búsquedas locales, conseguir más reseñas y convertir visitas en clientes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/google-my-business-empresas-guia/",
  mainEntityOfPage: "https://www.mktweb360.com/google-my-business-empresas-guia/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Google Business Profile para empresas", item: "https://www.mktweb360.com/google-my-business-empresas-guia/" },
  ],
};

const FAQS = [
  {
    q: "¿Google Business Profile es gratuito?",
    a: "Sí, completamente gratuito. Crear y gestionar tu ficha de Google Business Profile no tiene coste. Es una de las herramientas de marketing local más rentables precisamente por eso.",
  },
  {
    q: "¿Cuánto tiempo tarda en verificarse una ficha de Google?",
    a: "Depende del método de verificación. Por postal puede tardar 1-2 semanas. Por teléfono o video, puede hacerse en minutos. Google también ofrece verificación instantánea para algunas categorías.",
  },
  {
    q: "¿Cuántas reseñas necesito para aparecer bien posicionado localmente?",
    a: "No hay un número mágico, pero tener más de 10 reseñas recientes con buena puntuación mejora significativamente la visibilidad. La calidad, la frecuencia y las respuestas del negocio también influyen.",
  },
  {
    q: "¿Tengo que responder a todas las reseñas?",
    a: "Sí, siempre que sea posible — especialmente a las negativas. Responder a las reseñas muestra profesionalidad y es una señal positiva para Google. Las respuestas también pueden influir en la decisión de nuevos clientes.",
  },
  {
    q: "¿Puedo tener ficha de Google sin tener web?",
    a: "Sí. La ficha de Google funciona de forma independiente. Pero combinar una buena ficha con una web optimizada multiplica la visibilidad local y la conversión.",
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

export default function GoogleMyBusinessGuiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Google Business Profile para empresas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO Local</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Google Business Profile para empresas: guía completa 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tu ficha de Google Business Profile es la primera impresión que tienes en las búsquedas locales. Bien optimizada, es la herramienta de captación local más efectiva y económica que existe. Aquí te explicamos cómo sacarle el máximo partido.
          </p>
          <Image
            src="/og-google-my-business-empresas-guia.jpg"
            alt="Google Business Profile para empresas: guía completa 2026"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cuando alguien busca "fontanero cerca de mí" o "clínica dental en Toledo", lo primero que ve es el pack de resultados locales de Google: tres fichas con nombre, valoración, horario y dirección. Aparecer ahí — y hacerlo bien — es lo que marca la diferencia entre ser encontrado o ser invisible para los clientes de tu zona.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es Google Business Profile y por qué importa</h2>
          <p>Google Business Profile (antes Google My Business) es la herramienta gratuita de Google que permite a empresas gestionar cómo aparecen en Google Search y Google Maps. Una ficha completa y optimizada aparece en el "local pack" — el bloque de resultados locales que se muestra antes de los resultados orgánicos en búsquedas con intención local. Para negocios con clientes locales, es la herramienta de mayor impacto por menor coste que existe.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo crear y verificar tu ficha</h2>
          <p>El proceso empieza en business.google.com. Necesitas una cuenta de Google, el nombre de tu negocio, la categoría principal, la dirección (o zona de servicio si no atiendes en local fijo), el teléfono y el horario. La verificación confirma que el negocio existe en la dirección indicada — Google puede pedirla por postal, teléfono, video o de forma instantánea según la categoría. Sin verificación, la ficha no aparece en resultados.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué optimizar para mejorar el posicionamiento local</h2>
          <p>La descripción del negocio debe incluir las palabras clave relevantes de tu sector y zona de forma natural. Las categorías (principal y secundarias) deben reflejar con precisión lo que haces. Las fotos reales del negocio, el equipo y los trabajos mejoran el CTR. Los horarios actualizados, el precio si aplica y los servicios detallados completan la información que Google usa para evaluar la relevancia de la ficha.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres que tu ficha de Google aparezca por encima de la competencia?</p>
            <p className="text-gray-600 text-sm mb-4">Optimizamos tu Google Business Profile junto con tu web para que domines las búsquedas locales de tu sector y zona.</p>
            <Link href="/seo-posicionamiento-web-organico/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEO Local
            </Link>
          </div>

          <OfertaVeranoBanner />
          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Las reseñas: el factor más importante</h2>
          <p>Las reseñas son el indicador de confianza más visible en tu ficha. Influyen directamente en el posicionamiento local y en la decisión de nuevos clientes. La estrategia más efectiva es simple: pide la reseña justo después de terminar el trabajo, cuando el cliente está más satisfecho, con un enlace directo a la ficha. Responder a todas las reseñas — especialmente las negativas, con calma y profesionalidad — muestra que el negocio está activo y se preocupa por sus clientes.</p>

          <h2 className="text-2xl font-bold text-primary-600">Publicaciones y actualizaciones periódicas</h2>
          <p>Google valora las fichas activas. Publicar novedades, ofertas o contenido relevante de forma periódica mantiene la ficha fresca y puede mejorar su visibilidad. No hace falta publicar cada día — una o dos publicaciones al mes son suficientes para demostrar que el negocio está activo y para aprovechar el espacio de visibilidad adicional que ofrecen las publicaciones.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios: lo que realmente funciona</Link> · <Link href="/como-puede-un-autonomo-conseguir-clientes-por-internet/" className="text-accent-500 hover:underline">Cómo puede un autónomo conseguir clientes por internet</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Domina las búsquedas locales de tu zona</h2>
            <p className="text-primary-200 mb-6">
              Combinamos la optimización de Google Business Profile con SEO local en web para que seas la primera opción cuando alguien busca lo que ofreces en tu zona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico gratuito
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre Google Business Profile</h2>
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

          <p className="text-sm text-gray-500 pt-4">
            Servicio relacionado: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="google-my-business-empresas-guia" />
    </>
  );
}
