import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Actualizaciones del algoritmo de Google en 2026: qué ha cambiado y cómo afecta a tu web",
  description:
    "Google ha lanzado varias actualizaciones de algoritmo en 2026 con foco en experiencia de usuario, contenido de IA y señales E-E-A-T. Analizamos qué ha cambiado y qué tienes que hacer.",
  alternates: { canonical: "https://www.mktweb360.com/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/" },
  openGraph: {
    title: "Actualizaciones del algoritmo de Google en 2026: qué ha cambiado y cómo afecta a tu web | Mkt Web 360",
    description: "Google ha lanzado varias actualizaciones de algoritmo en 2026 con foco en experiencia de usuario, contenido de IA y señales E-E-A-T. Analizamos qué ha cambiado y qué tienes que hacer.",
    url: "https://www.mktweb360.com/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-seo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Actualizaciones del algoritmo de Google en 2026: qué ha cambiado y cómo afecta a tu web",
  description: "Google ha lanzado varias actualizaciones de algoritmo en 2026 con foco en experiencia de usuario, contenido de IA y señales E-E-A-T. Analizamos qué ha cambiado y qué tienes que hacer.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-seo.jpg",
  url: "https://www.mktweb360.com/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/",
  mainEntityOfPage: "https://www.mktweb360.com/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Actualizaciones del algoritmo de Google en 2026", item: "https://www.mktweb360.com/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/" },
  ],
};

const FAQS = [
  {
    q: "¿Penaliza Google el contenido creado con IA?",
    a: "No directamente. Google penaliza el contenido que no aporta valor, sea creado por humanos o por IA. El contenido generado con IA que es genuinamente útil, bien revisado y que demuestra experiencia real no está penalizado. Lo que sí penaliza es el contenido masivo de baja calidad.",
  },
  {
    q: "¿Qué son los AI Overviews y cómo afectan al tráfico orgánico?",
    a: "Los AI Overviews son las respuestas generadas por IA que Google muestra encima de los resultados orgánicos en más del 58% de las búsquedas. Para búsquedas informacionales pueden reducir clics. Para búsquedas comerciales con intención de compra el impacto es menor.",
  },
  {
    q: "¿Sigue funcionando el link building en 2026?",
    a: "Sí, pero con matices. Google sigue valorando los enlaces como señal de autoridad pero ha mejorado su capacidad de detectar patrones artificiales. El link building mediante contenido citable sigue siendo eficaz. La compra de enlaces tiene riesgo creciente.",
  },
  {
    q: "¿Cuánto tarda en recuperarse una web tras una penalización de Google?",
    a: "Depende del tipo. Una penalización manual puede recuperarse en semanas si se corrige y se solicita reconsideración. Una caída algorítmica puede tardar varios meses porque requiere demostrar mejora consistente.",
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

export default function AlgoritmoGoogle2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Actualizaciones del algoritmo de Google en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Algoritmo Google</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Actualizaciones del algoritmo de Google en 2026: qué ha cambiado y qué tienes que hacer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Google ha lanzado varias actualizaciones de algoritmo en 2026 con foco en experiencia de usuario, contenido de IA y señales E-E-A-T. Si tu tráfico orgánico se ha movido y no sabes por qué, este artículo te explica qué ha cambiado y cómo adaptar tu <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">estrategia de SEO</Link> sin perder posiciones.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cada actualización de algoritmo genera nerviosismo, y la de 2026 no es una excepción. La buena noticia es que la dirección de Google es coherente con lo que lleva años pidiendo: contenido útil, experiencia real detrás de las páginas y una web técnicamente sana. Quien ha trabajado con criterio tiene poco que temer; quien ha buscado atajos, sí.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Las principales actualizaciones de Google en 2026</h2>
          <p>Las actualizaciones de este año han seguido dos líneas claras: mejorar la calidad de las respuestas que Google entrega directamente al usuario y reforzar la detección de contenido de bajo valor. Los AI Overviews, presentes ya en más del 58% de las búsquedas, han cambiado la forma en que muchos usuarios interactúan con los resultados antes de hacer clic.</p>
          <p>Ninguna de estas actualizaciones ha sido una ruptura brusca. Google sigue premiando lo mismo que antes, pero con más precisión: páginas que resuelven una intención concreta, cargan rápido y provienen de una fuente con autoridad demostrable. Si has notado movimientos en tu tráfico, lo primero es diagnosticar el origen con una <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">auditoría SEO básica</Link> antes de tocar nada.</p>

          <h2 className="text-2xl font-bold text-primary-600">El E-E-A-T en 2026: cómo ha evolucionado</h2>
          <p>El E-E-A-T (Experiencia, Pericia, Autoridad y Confianza) sigue siendo la brújula de calidad de Google, pero en 2026 la primera E, la de Experiencia real, pesa más que nunca. Google quiere ver que detrás del contenido hay alguien que realmente ha hecho lo que describe, no solo alguien que ha recopilado información de otras fuentes.</p>
          <p>En la práctica esto significa firmar los artículos con autores identificables, mostrar credenciales reales, incluir ejemplos y detalles que solo aporta quien tiene experiencia directa, y mantener coherencia de marca en toda la web. Para sectores sensibles como salud o finanzas, estas señales de confianza son determinantes.</p>

          <h2 className="text-2xl font-bold text-primary-600">AI Overviews: cómo adaptarse sin perder tráfico</h2>
          <p>Los AI Overviews resumen la respuesta encima de los resultados orgánicos y, en búsquedas informacionales puras, pueden reducir los clics hacia las webs. La reacción sensata no es lamentarse, sino adaptar el enfoque: en las búsquedas con intención comercial el impacto es mucho menor, porque el usuario necesita profundizar antes de decidir.</p>
          <p>Aparecer como fuente citada dentro de un AI Overview aporta visibilidad de marca y sigue enviando visitas cualificadas. Estructurar el contenido en formato pregunta-respuesta, con datos verificables y schema markup correcto, aumenta las probabilidades de ser la fuente elegida. Aquí el SEO se acerca al terreno del <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en IA</Link>.</p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Contenido y IA: lo que Google premia y penaliza</h2>
          <p>La pregunta que más se repite es si Google penaliza el contenido creado con IA. La respuesta es no, al menos no por el hecho de usar IA. Lo que Google penaliza es el contenido masivo y genérico que no aporta valor, se cree con la herramienta que se cree. Un artículo generado con IA, revisado por una persona con criterio y enriquecido con experiencia real, puede posicionar perfectamente.</p>
          <p>El riesgo está en el otro extremo: publicar decenas de artículos automáticos sin revisión para inflar la web. Esa estrategia, que antes daba resultados a corto plazo, hoy es una vía rápida a perder posiciones. La regla es sencilla: si el contenido no serviría a un lector real, tampoco servirá para Google.</p>

          <h2 className="text-2xl font-bold text-primary-600">Señales técnicas que más pesan en 2026</h2>
          <p>El apartado técnico sigue siendo un filtro de entrada. Los Core Web Vitals mantienen su relevancia, con especial peso del INP (Interaction to Next Paint), que mide la capacidad de respuesta de la página ante las interacciones del usuario. Una web lenta o inestable parte con desventaja aunque su contenido sea excelente.</p>
          <p>El link building natural sigue funcionando: Google continúa leyendo los enlaces como votos de autoridad, pero detecta cada vez mejor los patrones artificiales. Conseguir enlaces mediante contenido que otros quieran citar es la estrategia sostenible. Si dudas de si el SEO sigue teniendo sentido en la era de la IA, te interesa este análisis sobre <Link href="/ha-muerto-el-seo-con-la-ia/" className="text-accent-500 hover:underline">si ha muerto el SEO con la IA</Link>.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu tráfico ha caído tras la última actualización?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 analizamos qué ha cambiado en tu posicionamiento y diseñamos un plan para recuperar y consolidar tus posiciones en Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de SEO
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
      <RelatedArticles currentSlug="actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web" />
    </>
  );
}
