import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { MetodologiaSeo } from "@/components/MetodologiaSeo";
import { OfertasSlider } from "@/components/OfertasSlider";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Posicionamiento Web SEO — Agencia SEO España",
  description: "Servicio profesional de SEO y posicionamiento web para empresas españolas. Auditorías, estrategia de keywords y contenidos que llevan tu web a la primera página de Google.",
  alternates: { canonical: "https://www.mktweb360.com/seo-posicionamiento-web-organico/" },
  openGraph: {
    title: "Posicionamiento Web SEO — Agencia SEO España | Mkt Web 360",
    description: "Posiciona tu web en Google con estrategias SEO probadas. Resultados duraderos. Servicio nacional.",
    url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/",
    images: [{ url: "https://www.mktweb360.com/og-seo.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Posicionamiento Web SEO",
  serviceType: "Search Engine Optimization",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de posicionamiento web orgánico SEO para empresas. Auditorías técnicas, estrategia de keywords, optimización on-page y link building.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    description: "Presupuesto personalizado según proyecto",
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/",
  },
};

const FAQS = [
  { q: "¿Qué incluye vuestro servicio SEO?", a: "Auditoría técnica inicial, investigación de palabras clave, optimización on-page, creación de contenido optimizado, link building ético, seguimiento mensual de posiciones e informe de resultados." },
  { q: "¿En cuánto tiempo se ven resultados SEO?", a: "Los primeros movimientos de posiciones suelen verse entre 2 y 4 meses. Para resultados consolidados, esperamos entre 6 y 12 meses, aunque esto depende de la competencia y el estado inicial de la web." },
  { q: "¿Trabajáis con las actualizaciones del algoritmo de Google?", a: "Sí, seguimos de cerca todas las actualizaciones del algoritmo de Google y adaptamos las estrategias para estar siempre dentro de las buenas prácticas (white hat SEO)." },
  { q: "¿Hacéis SEO local y SEO nacional?", a: "Hacemos ambos. El SEO local es ideal para negocios con presencia física que quieren atraer clientes de su zona. El SEO nacional se orienta a keywords de mayor alcance geográfico." },
  { q: "¿Cómo medís los resultados?", a: "Monitorizamos posiciones en Google, tráfico orgánico, conversiones atribuidas a SEO y visibilidad de marca. Recibes un informe mensual detallado con evolución y próximos pasos." },
  { q: "¿Qué diferencia hay entre SEO y GEO?", a: "El SEO (Search Engine Optimization) optimiza tu web para aparecer en los resultados de Google. El GEO (Generative Engine Optimization) optimiza tu presencia para aparecer en las respuestas de ChatGPT, Perplexity, Gemini y Claude. Son complementarios — juntos te dan visibilidad completa en todos los canales de búsqueda actuales y futuros." },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "SEO Posicionamiento Web", item: "https://www.mktweb360.com/seo-posicionamiento-web-organico/" },
  ],
};

const METHODOLOGY = [
  { step: "01", title: "Auditoría técnica SEO", desc: "Análisis completo de tu web: velocidad, indexación, errores técnicos, arquitectura, backlinks y competencia." },
  { step: "02", title: "Investigación de keywords", desc: "Identificamos las palabras clave con mayor potencial de tráfico y conversión para tu sector y zona." },
  { step: "03", title: "Optimización on-page", desc: "Mejoramos títulos, metas, contenidos, estructura de URLs, enlaces internos y datos estructurados." },
  { step: "04", title: "Contenido SEO", desc: "Artículos, páginas de servicio y landings optimizadas para posicionar keywords estratégicas." },
  { step: "05", title: "Link building ético", desc: "Construcción de autoridad con enlaces naturales de sitios relevantes y de calidad en tu sector." },
  { step: "06", title: "Seguimiento y reportes", desc: "Monitorizamos posiciones, tráfico y conversiones. Informe mensual con evolución y próximos pasos." },
];

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO Posicionamiento Web" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Primeras posiciones<br />
              <span className="text-accent-400">clientes que te encuentran</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El 93% de las experiencias online empiezan en Google. Si no apareces en la primera página, tu competencia se lleva esos clientes cada día. El SEO es la inversión con mayor retorno a largo plazo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#auditoria" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Auditoría SEO gratuita
              </a>
              <a href="#metodologia" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver metodología
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-seo.jpg" alt="SEO posicionamiento web" className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "93%", label: "búsquedas empiezan en Google" },
            { value: "SEO + GEO", label: "visibilidad en Google y en IA" },
            { value: "Duradero", label: "resultados que se mantienen" },
            { value: "Nacional", label: <>y <Link href="/seo-local/" className="underline decoration-accent-400 hover:text-white">SEO local</Link></> },
          ].map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">SEO vs Publicidad de pago</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Google Ads genera tráfico inmediato pero cuando dejas de pagar, desaparece. El SEO construye una base sólida que genera tráfico constante mes tras mes, sin coste adicional por visita.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Una web bien posicionada es el activo digital más rentable de un negocio. A los 12 meses el coste por lead orgánico es significativamente menor que cualquier canal de pago.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Google Ads", sub: "Pagas por cada clic. Sin presupuesto, sin tráfico.", bad: true },
                  { label: "SEO", sub: "Inviertes una vez. El tráfico crece con el tiempo.", bad: false },
                ].map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Qué incluye el servicio?</h3>
              <ul className="space-y-3">
                {[
                  "Auditoría técnica SEO completa",
                  "Investigación de keywords por sector",
                  "Optimización on-page de todas las páginas clave",
                  "Creación de contenido SEO mensual",
                  "Link building ético y natural",
                  "Seguimiento de posiciones semanal",
                  "Informe mensual con métricas y próximos pasos",
                  "Integración con Google Search Console y GA4",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When SEO makes sense */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">¿Cuándo tiene sentido invertir en SEO?</h2>
          <div className="space-y-4 text-gray-600">
            <p>El SEO no es la respuesta correcta para todos los negocios en todos los momentos. Tiene sentido cuando el negocio tiene un horizonte temporal de al menos 6-12 meses, cuando existe volumen de búsqueda real para los productos o servicios que ofrece, y cuando el objetivo es construir un canal de captación sostenible que no dependa de presupuesto publicitario continuo.</p>
            <p>No tiene sentido como canal único cuando se necesitan resultados en semanas, cuando el producto es completamente nuevo sin demanda de búsqueda existente, o cuando el presupuesto no permite mantener el trabajo durante el tiempo necesario para ver resultados. En esos casos, Google Ads es la herramienta correcta para el corto plazo mientras el SEO construye a largo plazo.</p>
            <p>Para la mayoría de pymes y autónomos en España, la combinación más rentable es arrancar con una campaña de Google Ads para generar tráfico y ventas inmediatas, mientras el SEO trabaja en paralelo para reducir progresivamente la dependencia del presupuesto publicitario. A los 12-18 meses, el canal orgánico suele superar al de pago en volumen de tráfico cualificado y coste por cliente adquirido.</p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="metodologia" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nuestra metodología SEO</h2>
            <p className="text-gray-600">Un proceso probado, transparente y orientado a resultados reales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METHODOLOGY.map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{item.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs national SEO */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">SEO local y SEO nacional: dos estrategias distintas</h2>
          <div className="space-y-4 text-gray-600">
            <p>El SEO local y el SEO nacional responden a intenciones de búsqueda diferentes y requieren estrategias distintas. No es mejor uno que otro — es una cuestión de qué tipo de cliente busca tu servicio y desde dónde.</p>
            <p>El SEO local es la estrategia correcta para negocios que atienden clientes en una zona geográfica específica: clínicas, despachos, tiendas físicas, talleres, restaurantes, academias, instaladores, reformistas. En este caso, las búsquedas que importan incluyen un modificador local — "fontanero Toledo", "gestoría Madrid centro", "clínica dental Salamanca" — o se hacen desde el dispositivo móvil con la ubicación activada. El canal más importante para SEO local es Google Business Profile: la ficha que aparece en el mapa cuando alguien busca tu servicio cerca.</p>
            <p>El SEO nacional se orienta a keywords sin modificador geográfico: "agencia de marketing digital", "software de gestión para pymes", "tienda online de moda sostenible". Compite en un universo más amplio y más competido, lo que requiere mayor autoridad de dominio, más contenido y más tiempo para ver resultados significativos.</p>
            <p>En Mkt Web 360 trabajamos ambas modalidades. Para negocios con presencia física en Toledo y Castilla-La Mancha, el SEO local es generalmente la inversión con mayor retorno a corto plazo: menor competencia, búsquedas con alta intención de compra, y resultados visibles en 2-4 meses en lugar de 6-12.</p>
          </div>
        </div>
      </section>

      {/* Offer slider */}
      <OfertasSlider />

      <MetodologiaSeo />

      {/* GEO differentiator */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Nuevo</span>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">SEO + GEO: visibilidad completa en la era de la IA</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El SEO te posiciona en Google. El GEO te posiciona en ChatGPT, Perplexity y Gemini. Cada vez más personas hacen sus búsquedas directamente a la IA — si tu marca no aparece en esas respuestas, estás perdiendo clientes que nunca llegarán a Google.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                En Mkt Web 360 somos pioneros en GEO en España. Nuestros servicios SEO ya incluyen la base técnica necesaria para visibilidad en IA: schemas estructurados, llms.txt, arquitectura de contenido optimizada para LLMs y estrategia de autoridad semántica.
              </p>
              <a href="/geo-posicionamiento-ia/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                Conocer el servicio GEO →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { channel: "Google Search", tool: "SEO", color: "bg-primary-600" },
                { channel: "ChatGPT", tool: "GEO", color: "bg-accent-500" },
                { channel: "Google Maps", tool: "SEO Local", color: "bg-primary-600" },
                { channel: "Perplexity", tool: "GEO", color: "bg-accent-500" },
                { channel: "Bing", tool: "SEO", color: "bg-primary-600" },
                { channel: "Gemini", tool: "GEO", color: "bg-accent-500" },
              ].map((c) => (
                <div key={c.channel} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-gray-700">{c.channel}</span>
                  <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${c.color}`}>{c.tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What SEO does not include */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">Qué no incluye el SEO (y por qué es importante saberlo)</h2>
          <div className="space-y-4 text-gray-600">
            <p>El SEO orgánico posiciona tu web en los resultados de búsqueda de Google. No incluye la creación de contenido de redes sociales, la gestión de publicidad de pago, el diseño gráfico para campañas, ni la gestión de tu reputación online más allá de las acciones directamente vinculadas al posicionamiento.</p>
            <p>Tampoco garantiza posiciones específicas ni fechas exactas de resultados. Cualquier agencia que garantice "primera posición en Google en X semanas" está vendiendo algo que no puede cumplir — el algoritmo de Google no lo controla nadie.</p>
            <p>Lo que sí garantizamos: un trabajo técnico y estratégico riguroso, transparencia total en los informes mensuales, y una metodología consistente con las directrices de Google que protege tu dominio de penalizaciones. Los resultados dependen de factores que controlamos — calidad del trabajo — y factores que no controlamos: competencia, actualizaciones del algoritmo, velocidad de indexación de Google. Si en 6 meses de trabajo no hay movimiento observable en las posiciones de las keywords objetivo, revisamos la estrategia conjuntamente y ajustamos el enfoque.</p>
          </div>
        </div>
      </section>

      {/* Oferta verano */}
      <OfertaVeranoBanner />

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes sobre SEO</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* IA badge */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">La experiencia de un equipo senior. La precisión de la inteligencia artificial.</p>
            <p className="text-gray-500 text-sm mt-1">Protocolos propios de IA aplicados a cada proyecto para resultados más rápidos y precisos.</p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="auditoria" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Auditoría SEO gratuita</h2>
            <p className="text-primary-200">Analizamos tu web sin compromiso y te decimos exactamente qué está frenando tu posicionamiento.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="seo" />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento" />
    </>
  );
}
