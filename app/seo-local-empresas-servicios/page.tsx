import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "SEO local para empresas de servicios: cómo captar clientes en 2025",
  description:
    "Aprende qué necesita una empresa de servicios para mejorar su presencia local y captar más clientes desde Google en su zona.",
  alternates: { canonical: "https://www.mktweb360.com/seo-local-empresas-servicios/" },
  openGraph: {
    title: "SEO local para empresas de servicios: cómo captar clientes en 2025 | Mkt Web 360",
    description: "Aprende qué necesita una empresa de servicios para mejorar su presencia local y captar más clientes desde Google en su zona.",
    url: "https://www.mktweb360.com/seo-local-empresas-servicios/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO local para empresas de servicios: cómo conseguir clientes en tu zona",
  description: "Aprende qué necesita una empresa de servicios para mejorar su presencia local y captar más clientes desde Google en su zona.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-03-24",
  url: "https://www.mktweb360.com/seo-local-empresas-servicios/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-local-empresas-servicios/",
};

const FAQS = [
  {
    q: "¿Qué es el SEO local?",
    a: "El SEO local es el conjunto de técnicas para mejorar la visibilidad de un negocio en las búsquedas de Google con intención geográfica — como 'fontanero en Toledo' o 'clínica dental Madrid centro'. Incluye optimización de Google Business Profile, menciones locales, reseñas y páginas web con contenido geolocalizado.",
  },
  {
    q: "¿Cómo aparecer primero en Google Maps?",
    a: "Para aparecer en el Pack de 3 de Google Maps debes tener tu ficha de Google Business Profile completamente optimizada, con fotos reales, horario correcto, categorías adecuadas y muchas reseñas positivas respondidas. La distancia del buscador y la relevancia de tu ficha son los factores principales.",
  },
  {
    q: "¿Cuánto tiempo tarda el SEO local?",
    a: "El SEO local suele dar resultados más rápidos que el SEO nacional. Con una ficha optimizada y trabajo consistente, es posible ver mejoras en Google Maps en 4–8 semanas. El posicionamiento orgánico local en webs tarda entre 3 y 6 meses.",
  },
  {
    q: "¿Necesito web para hacer SEO local?",
    a: "No es imprescindible para aparecer en Google Maps, pero sí muy recomendable. Una web con páginas de servicio locales amplía tu visibilidad a las búsquedas orgánicas, que tienen más volumen que el Pack Local. La combinación de ficha + web es la estrategia más completa.",
  },
  {
    q: "¿Qué es el pack de 3 de Google?",
    a: "El pack de 3 (o Local Pack) es el bloque que Google muestra en los resultados de búsqueda con un mapa y tres negocios locales relevantes para la búsqueda. Aparecer aquí es el objetivo principal del SEO local porque tiene una tasa de clic muy alta y alta intención de compra.",
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

export default function SeoLocalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO local para empresas de servicios" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO Local</span>
            <time className="text-sm text-gray-400" dateTime="2025-03-24">24 de marzo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO local para empresas de servicios: cómo conseguir clientes en tu zona
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Más del 46% de las búsquedas en Google tienen intención local. Si tienes una empresa de servicios y no apareces cuando alguien busca lo que haces en tu zona, estás dejando clientes para la competencia.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Las búsquedas locales tienen una característica que las hace especialmente valiosas: alta intención de compra. Alguien que busca "instalador de aires acondicionados en Sevilla" no está navegando por curiosidad — está buscando contratar. Estar en las primeras posiciones de esa búsqueda es equivalente a tener el local en la calle más transitada.
          </p>
          <p>
            Google Business Profile (antes Google My Business) es la palanca más importante del SEO local. Una ficha bien optimizada, con fotos reales, horario correcto, categorías adecuadas y reseñas activas puede generar contactos directos sin necesidad de web ni de publicidad de pago.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Checklist de SEO local: qué necesitas tener</h2>
          <ul className="space-y-3">
            {[
              { item: "Ficha de Google Business Profile optimizada", desc: "Categorías correctas, descripción completa, fotos reales, horario actualizado y respuesta a todas las reseñas." },
              { item: "Web con páginas de servicio locales", desc: "Una página específica por servicio y zona: 'Fontanero en Toledo', 'Fontanero en Talavera'. Contenido único en cada una." },
              { item: "Reseñas activas y respondidas", desc: "Más reseñas positivas y respondidas = mayor visibilidad en el Pack Local. Pide reseñas activamente a clientes satisfechos." },
              { item: "NAP consistente en todos los directorios", desc: "Name, Address, Phone idénticos en web, ficha de Google, páginas amarillas, redes sociales y cualquier directorio sectorial." },
              { item: "Contenido con referencias geográficas", desc: "Menciona barrios, zonas, municipios que atiendes. Google asocia tu negocio a esas áreas geográficas." },
              { item: "Velocidad y mobile-first", desc: "Las búsquedas locales se hacen mayoritariamente desde el móvil. Una web lenta o no adaptada pierde clics y posiciones." },
            ].map(({ item, desc }) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">{item}: </span>
                  <span className="text-gray-600 text-sm">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu empresa depende de clientes de una zona concreta?</p>
            <p className="text-gray-600 text-sm mb-4">Te analizamos la visibilidad local y te decimos exactamente qué está frenando tu aparición en Google Maps y en las búsquedas de tu zona.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar análisis de SEO local
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Errores frecuentes que frenan tu visibilidad local</h2>
          <ul className="space-y-3">
            {[
              { error: "No tener ficha de Google Business Profile", consecuencia: "Invisible en Google Maps y en el Pack Local para cualquier búsqueda con intención geográfica." },
              { error: "Ficha sin fotos ni actualizaciones", consecuencia: "Google penaliza las fichas abandonadas. Además los usuarios no confían en negocios sin imagen real." },
              { error: "Web sin menciones locales", consecuencia: "Google no asocia tu web a ninguna zona, lo que limita tu posicionamiento en búsquedas locales." },
              { error: "No pedir reseñas sistemáticamente", consecuencia: "Tu competencia acumula valoraciones mientras tú dependes de que algún cliente lo haga espontáneamente." },
              { error: "Ignorar las búsquedas de voz", consecuencia: "Búsquedas como '¿dónde hay un electricista cerca?' tienen intención de compra inmediata y se responden desde Google Business Profile." },
            ].map(({ error, consecuencia }) => (
              <li key={error} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                <div>
                  <span className="font-semibold text-gray-800">{error}: </span>
                  <span className="text-gray-600 text-sm">{consecuencia}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link> · <Link href="/como-puede-un-autonomo-conseguir-clientes-por-internet/" className="text-accent-500 hover:underline">Cómo puede un autónomo conseguir clientes por internet</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Detecta qué está frenando tu visibilidad local</h2>
            <p className="text-primary-200 mb-6">
              Analizamos tu ficha de Google, tu web y tu presencia en buscadores locales. Te decimos exactamente qué mejorar para empezar a captar más clientes en tu zona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar auditoría digital
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO local</h2>
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
    </>
  );
}
