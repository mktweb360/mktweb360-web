import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño Web para Dentistas y Clínicas Dentales — Consigue Más Pacientes | Mkt Web 360",
  description:
    "Diseño web profesional para dentistas y clínicas dentales. Web optimizada para SEO local, Google Maps y captación de nuevos pacientes. Sin comisiones.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-para-dentistas/" },
  openGraph: {
    title: "Diseño Web para Dentistas y Clínicas Dentales — Consigue Más Pacientes | Mkt Web 360",
    description:
      "Diseño web profesional para dentistas y clínicas dentales. Web optimizada para SEO local, Google Maps y captación de nuevos pacientes. Sin comisiones.",
    url: "https://www.mktweb360.com/diseno-web-para-dentistas/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Diseño Web para Dentistas: Cómo Conseguir Más Pacientes desde Google",
  description:
    "Diseño web profesional para dentistas y clínicas dentales. Web optimizada para SEO local, Google Maps y captación de nuevos pacientes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "/og-image.jpg",
  url: "https://www.mktweb360.com/diseno-web-para-dentistas/",
  mainEntityOfPage: "https://www.mktweb360.com/diseno-web-para-dentistas/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Diseño web para dentistas", item: "https://www.mktweb360.com/diseno-web-para-dentistas/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta una web para una clínica dental?",
    a: "Una web profesional para dentistas parte desde 790€ dependiendo del número de páginas, funcionalidades (reserva online, blog, galería de casos) y nivel de personalización. El precio incluye diseño, desarrollo, SEO técnico básico y formación para gestión autónoma.",
  },
  {
    q: "¿Puedo añadir un sistema de reserva de cita online?",
    a: "Sí. Integramos sistemas de reserva online conectados con tu agenda, ya sea con herramientas propias o con plataformas como Doctoralia, Calendly o sistemas específicos del sector dental. El paciente reserva 24/7 sin llamar.",
  },
  {
    q: "¿El SEO local está incluido en el diseño web?",
    a: "El diseño web incluye SEO técnico y optimización inicial de keywords. El posicionamiento local continuado (Google Business Profile, link building local, contenido SEO) es un servicio aparte que complementa la web para conseguir resultados orgánicos a largo plazo.",
  },
  {
    q: "¿Cuánto tarda en estar lista la web de mi clínica?",
    a: "El plazo habitual es de 3 a 5 semanas desde el inicio del proyecto. Depende de la velocidad en la aportación de contenidos (textos, fotos, información de servicios). Trabajamos con un proceso estructurado para que el cliente sepa en todo momento en qué fase está el proyecto.",
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

export default function DisenoWebDentistaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web para dentistas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Salud</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">25 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Diseño Web para Dentistas: Cómo Conseguir Más Pacientes desde Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cuando alguien necesita un dentista, lo primero que hace es buscar en Google. Si tu clínica no aparece o tiene una web que no genera confianza, ese paciente va a la competencia. Esta guía explica qué necesita la web de una clínica dental para captar pacientes de verdad.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El sector dental es uno de los más competidos en búsqueda local. En cualquier ciudad de tamaño medio hay decenas de clínicas compitiendo por los mismos pacientes. La diferencia entre las que llenan agenda y las que dependen del boca a boca ya no es solo la calidad clínica — es la visibilidad digital y la confianza que transmite la presencia online.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué una clínica dental necesita una web profesional</h2>
          <p>
            La web de una clínica dental cumple tres funciones simultáneas que no puede cubrir ninguna otra herramienta digital: <strong>generar confianza antes del primer contacto</strong>, <strong>posicionarse en búsquedas locales</strong> y <strong>convertir visitas en citas</strong>.
          </p>
          <p>
            Un paciente que busca "dentista en [ciudad]" va a comparar varias clínicas antes de decidirse. En esa comparación, la web es el elemento que más pesa después de las reseñas. Una web anticuada, lenta o con poca información comunica exactamente lo contrario de lo que una clínica dental necesita transmitir: profesionalidad, higiene, confianza y modernidad.
          </p>
          <p>
            Además, Google Business Profile — la ficha que aparece en Google Maps — funciona mucho mejor cuando está respaldada por una web bien estructurada. Las clínicas con web optimizada aparecen más en el llamado "pack local" de tres resultados que Google muestra antes que los resultados orgánicos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué debe tener la web de una clínica dental</h2>
          <p>Una web para dentistas que realmente capta pacientes debe incluir, como mínimo, los siguientes elementos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Página de servicios detallada:</strong> ortodoncia, implantes, blanqueamiento, estética dental, endodoncia... cada servicio en su propia página con información real y precios orientativos si es posible.</li>
            <li><strong>Equipo médico:</strong> nombre, foto, formación y especialización de cada dentista. Los pacientes quieren saber quién les va a atender antes de ir.</li>
            <li><strong>Galería de casos:</strong> antes y después de tratamientos (con consentimiento del paciente). Es el argumento visual más potente en odontología estética.</li>
            <li><strong>Reseñas y testimonios:</strong> integradas desde Google o mostradas directamente en la web. El 90% de los pacientes lee reseñas antes de elegir dentista.</li>
            <li><strong>Formulario de cita o reserva online:</strong> accesible desde cualquier página, especialmente desde móvil. El 60% del tráfico de estas búsquedas viene de smartphone.</li>
            <li><strong>Datos de contacto visibles:</strong> teléfono, dirección con mapa, horario actualizado y WhatsApp si se usa.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">SEO local para dentistas</h2>
          <p>
            El SEO local es la estrategia que permite aparecer en Google cuando alguien busca "dentista cerca de mí" o "clínica dental en [tu ciudad]". Tiene dos pilares fundamentales:
          </p>
          <p>
            <strong>Google Business Profile optimizado:</strong> nombre correcto, categoría principal ("Dentista"), descripción con keywords locales, horario actualizado, fotos de la clínica y el equipo, y gestión activa de reseñas. Responder a las reseñas — especialmente a las negativas — es una señal de confianza tanto para Google como para los potenciales pacientes.
          </p>
          <p>
            <strong>Web con keywords locales:</strong> los textos de la web deben mencionar la ciudad y el barrio de forma natural. "Clínica dental en el centro de Guadalajara" posiciona mejor que "Clínica dental" sin contexto geográfico. Cada servicio importante puede tener su propia página optimizada con la localización.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una web que llene tu agenda de pacientes?</p>
            <p className="text-gray-600 text-sm mb-4">Diseñamos webs para clínicas dentales optimizadas para SEO local y captación de pacientes. Sin comisiones, con gestión autónoma desde el primer día.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar presupuesto
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Proceso de trabajo: de cero a web en 4 pasos</h2>
          <ul className="list-none space-y-4">
            {[
              { n: "1", t: "Análisis y estrategia", d: "Estudiamos tu zona, tu competencia y las keywords con más volumen local. Definimos la estructura de la web y los servicios a priorizar." },
              { n: "2", t: "Diseño y desarrollo", d: "Diseñamos una web que transmite confianza y profesionalidad. Rápida, segura, adaptada a móvil y optimizada técnicamente para SEO desde el primer día." },
              { n: "3", t: "Contenido y optimización", d: "Redactamos los textos de servicios optimizados para posicionamiento local. Integramos formulario de cita, reseñas y Google Maps." },
              { n: "4", t: "Formación y entrega", d: "Te enseñamos a gestionar la web de forma autónoma — subir noticias, actualizar horarios, añadir fotos. La web es tuya, sin ataduras." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Web profesional para tu clínica dental</h2>
            <p className="text-primary-200 mb-6">
              Más pacientes, agenda llena y presencia digital que genera confianza. Sin comisiones, sin licencias, con gestión autónoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar presupuesto
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio diseño web
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

          <p className="text-sm text-gray-500 pt-4">
            Ver también: <Link href="/diseno-web-para-clinicas/" className="text-accent-500 hover:underline">Diseño web para clínicas</Link> · <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de páginas web profesionales</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="diseno-web-para-dentistas" category="Diseño Web" />
    </>
  );
}
