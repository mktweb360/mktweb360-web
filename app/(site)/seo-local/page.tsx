import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "SEO Local para Empresas — Posicionamiento en tu Zona",
  description: "SEO local para captar clientes de tu zona: Google Maps, Google Business Profile y reseñas. Posicionamiento local para empresas con o sin local físico.",
  alternates: { canonical: "https://www.mktweb360.com/seo-local/" },
  openGraph: {
    title: "SEO Local — Posicionamiento en Google Maps | Mkt Web 360",
    description: "Posiciona tu negocio en Google Maps y en las búsquedas de tu zona. Más clientes locales con SEO local profesional.",
    url: "https://www.mktweb360.com/seo-local/",
    images: [{ url: "/imagen-seo.jpg", width: 1200, height: 900, alt: "SEO local y Google Maps — Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Local",
  serviceType: "Posicionamiento web local",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  areaServed: { "@type": "Country", name: "España" },
  description: "Servicio de SEO local: posicionamiento en Google Maps, optimización de Google Business Profile, gestión de reseñas y búsquedas locales para empresas y profesionales.",
  url: "https://www.mktweb360.com/seo-local/",
};

const FAQS = [
  { q: "¿Qué es el SEO local y en qué se diferencia del SEO tradicional?", a: "El SEO local optimiza tu presencia para las búsquedas con intención geográfica: 'fontanero en Toledo', 'clínica dental cerca de mí' o las que Google asocia a tu ubicación. A diferencia del SEO nacional —centrado en keywords de alcance amplio—, el SEO local trabaja sobre el mapa de Google (el pack local), tu ficha de Google Business Profile, las reseñas y las señales de proximidad. Es la disciplina ideal para negocios con una zona de influencia concreta." },
  { q: "¿Cuánto tarda en posicionarse mi negocio en Google Maps?", a: "Con una ficha bien optimizada, los primeros movimientos en el pack local suelen verse entre 1 y 3 meses, más rápido que el SEO orgánico tradicional porque la competencia local es menor. Consolidar posiciones para keywords competitivas en ciudades grandes lleva entre 4 y 8 meses, en función de la densidad de competencia y del estado inicial de tu ficha y tu web." },
  { q: "¿Necesito una ficha de Google Business Profile para hacer SEO local?", a: "Sí. La ficha de Google Business Profile es el activo central del SEO local: es lo que te permite aparecer en Google Maps y en el pack local de resultados. Si no la tienes, la creamos y verificamos; si ya la tienes, la auditamos y optimizamos (categorías, servicios, fotos, productos, horarios, atributos y publicaciones). Sin una ficha optimizada, el resto del trabajo local pierde gran parte de su efecto." },
  { q: "¿El SEO local funciona si tengo varias sedes o varias ciudades?", a: "Sí. Para negocios multisede creamos y optimizamos una ficha por ubicación y diseñamos una arquitectura de páginas locales coherente, evitando contenido duplicado entre ciudades. Cada sede compite por su propia zona con su ficha, su NAP (nombre, dirección y teléfono) consistente y sus reseñas, mientras la web mantiene una estructura que Google entiende sin penalizaciones." },
  { q: "¿Por qué importan las reseñas para el posicionamiento local y cómo conseguís más?", a: "Las reseñas son uno de los factores de ranking local más influyentes y, además, el principal motor de confianza antes del primer contacto. Implementamos procesos para solicitar reseñas en el momento adecuado, facilitamos el enlace directo a tus clientes y te ayudamos a responderlas todas —también las negativas— con criterio. El objetivo es un flujo constante de reseñas reales, no picos artificiales." },
  { q: "¿Hacéis SEO local en toda España o solo en Toledo?", a: "Trabajamos SEO local en cualquier ciudad de España. Tenemos páginas y experiencia específica en Toledo, Madrid, Valencia, Zaragoza y Bilbao, pero el servicio es nacional: posicionamos negocios locales en su zona estén donde estén, adaptando la estrategia a la competencia y el mercado de cada localidad." },
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

const METHODOLOGY = [
  { step: "01", title: "Auditoría local", desc: "Analizamos tu ficha de Google Business Profile, tu posición en el mapa, la competencia de tu zona y el estado SEO de tu web para detectar oportunidades inmediatas." },
  { step: "02", title: "Keywords geolocalizadas", desc: "Identificamos las búsquedas con intención local de tu sector y ciudad: las que tus clientes usan realmente cuando buscan lo que ofreces cerca de ellos." },
  { step: "03", title: "Optimización de Google Business Profile", desc: "Categorías, servicios, productos, fotos, horarios, atributos y publicaciones. Convertimos tu ficha en un escaparate que genera llamadas y visitas." },
  { step: "04", title: "NAP y citaciones", desc: "Aseguramos que tu nombre, dirección y teléfono son consistentes en directorios y plataformas relevantes, una señal de confianza clave para el ranking local." },
  { step: "05", title: "Reseñas y reputación", desc: "Implementamos un proceso para conseguir reseñas reales de forma constante y te ayudamos a responderlas todas con criterio, también las negativas." },
  { step: "06", title: "Contenido y seguimiento", desc: "Creamos páginas locales optimizadas y monitorizamos posiciones, visibilidad en el mapa y conversiones, con informe mensual y próximos pasos." },
];

const CITIES = [
  { name: "SEO Toledo", href: "/seo-toledo/" },
  { name: "SEO Madrid", href: "/seo-madrid/" },
  { name: "SEO Valencia", href: "/seo-valencia/" },
  { name: "SEO Zaragoza", href: "/seo-zaragoza/" },
  { name: "SEO Bilbao", href: "/seo-bilbao/" },
];

export default function SeoLocalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO Local" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Aparece cuando buscan en tu zona<br />
              <span className="text-accent-400">SEO local que llena tu agenda</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Casi la mitad de las búsquedas en Google tienen intención local. Cuando alguien busca lo que ofreces cerca de él, o apareces en el mapa o tu competencia se lleva ese cliente. El SEO local pone tu negocio donde se decide la compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#auditoria" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Auditoría SEO local gratuita
              </a>
              <a href="#metodologia" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver cómo trabajamos
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-seo.jpg" alt="SEO local y posicionamiento en Google Maps" className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "46%", label: "búsquedas con intención local" },
            { value: "Google Maps", label: "tu escaparate de proximidad" },
            { value: "88%", label: "confía en reseñas como en recomendaciones" },
            { value: "Nacional", label: "SEO local en toda España" },
          ].map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Qué es el SEO local */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Qué es el SEO local y por qué tu negocio lo necesita</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El SEO local es la disciplina que posiciona tu negocio en las búsquedas con intención geográfica: las que incluyen una ciudad o barrio y las que Google interpreta como cercanas ("cerca de mí", "abierto ahora"). En esas búsquedas, Google muestra el <strong>pack local</strong> —el bloque de tres fichas con mapa— por encima de los resultados orgánicos tradicionales.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Para un negocio con zona de influencia —una clínica, un taller, un despacho, un comercio o un profesional de servicios— aparecer ahí vale más que cualquier otra posición: es tráfico con altísima intención de compra y a un paso de la llamada o la visita. Si no estás, no compites.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Sin SEO local", sub: "Invisible en el mapa. El cliente elige a quien sí aparece.", bad: true },
                  { label: "Con SEO local", sub: "En el pack local cuando buscan tu servicio en tu zona.", bad: false },
                ].map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Para quién es el SEO local?</h3>
              <ul className="space-y-3">
                {[
                  "Negocios con local físico o zona de servicio",
                  "Clínicas, dentistas, fisioterapeutas y centros de salud",
                  "Servicios de proximidad: fontaneros, cerrajeros, electricistas",
                  "Despachos profesionales: abogados, gestorías, asesorías",
                  "Comercios y hostelería que captan en su barrio o ciudad",
                  "Negocios multisede que compiten en varias ciudades",
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

      {/* Methodology */}
      <section id="metodologia" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo posicionamos tu negocio en el mapa de Google</h2>
            <p className="text-gray-600">Un proceso probado para ganar visibilidad local de forma sostenible.</p>
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

      {/* Google Business Profile */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Google Business Profile: tu activo local más importante</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">La ficha de Google es lo primero que ve un cliente que busca en tu zona. Optimizarla bien marca la diferencia entre aparecer o no en el mapa.</p>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Trabajamos cada elemento de tu ficha: categorías principales y secundarias, descripción, servicios y productos, fotografías, horarios, atributos y publicaciones periódicas. Mantenemos tu información NAP (nombre, dirección y teléfono) consistente en toda la red y activamos los mensajes y las preguntas frecuentes para que ningún cliente se quede sin respuesta. Una ficha viva, completa y con reseñas recientes es la que Google prioriza en el pack local.
          </p>
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/google-business-profile/" className="inline-flex items-center justify-center gap-2 text-accent-500 font-semibold hover:underline">
              Servicio de Google Business Profile →
            </Link>
            <Link href="/google-my-business-empresas-guia/" className="inline-flex items-center justify-center gap-2 text-accent-500 font-semibold hover:underline">
              Guía completa de Google Business Profile →
            </Link>
          </div>
        </div>
      </section>

      {/* SEO local por ciudades */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">SEO local por ciudades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trabajamos en toda España. Estas son algunas de las ciudades donde tenemos páginas y experiencia específica de posicionamiento local.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CITIES.map((c) => (
              <Link key={c.href} href={c.href} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all font-semibold text-primary-700 hover:text-accent-500">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO local vs nacional */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">SEO local vs SEO nacional: cuándo elegir cada uno</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No son lo mismo ni compiten entre sí: se complementan. El SEO local es ideal cuando tu cliente está en una zona concreta y la decisión depende de la proximidad. El SEO nacional tiene sentido cuando vendes o sirves a toda España y compites por keywords de mayor alcance.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                En muchos negocios la estrategia ganadora combina ambos: posicionamiento local para captar en tu zona y SEO nacional para construir autoridad y alcance. Te ayudamos a decidir dónde invertir primero según tu mercado y tus objetivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/seo-posicionamiento-web-organico/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                  Ver SEO nacional →
                </Link>
                <Link href="/seo-o-google-ads-que-conviene-mas/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                  ¿SEO o Google Ads? →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "Elige SEO local si…", d: "tienes local físico o zona de servicio y tus clientes buscan por proximidad." },
                { t: "Elige SEO nacional si…", d: "vendes a toda España y compites por keywords de alcance amplio." },
                { t: "Combina ambos si…", d: "quieres captar en tu zona y construir autoridad a la vez." },
              ].map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="font-bold text-primary-700 mb-1">{c.t}</p>
                  <p className="text-sm text-gray-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes sobre SEO local</h2>
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

      {/* CTA Form */}
      <section id="auditoria" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Auditoría de SEO local gratuita</h2>
            <p className="text-primary-200">Analizamos tu ficha de Google y tu visibilidad en el mapa sin compromiso, y te decimos exactamente qué está frenando tu posicionamiento local.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="seo" />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento local" />
    </>
  );
}
