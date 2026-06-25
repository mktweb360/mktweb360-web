import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño Web para Clínicas y Centros de Salud",
  description:
    "Diseño web profesional para clínicas, centros médicos y de salud. Web optimizada para SEO local y captación de pacientes. Fisioterapia, psicología, estética y más.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-para-clinicas/" },
  openGraph: {
    title: "Diseño Web para Clínicas y Centros de Salud | Mkt Web 360",
    description:
      "Diseño web profesional para clínicas, centros médicos y de salud. Web optimizada para SEO local y captación de pacientes. Fisioterapia, psicología, estética y más.",
    url: "https://www.mktweb360.com/diseno-web-para-clinicas/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Diseño Web para Clínicas: Web Profesional que Genera Pacientes",
  description:
    "Diseño web profesional para clínicas, centros médicos y de salud. Web optimizada para SEO local y captación de pacientes. Fisioterapia, psicología, estética y más.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "/og-image.jpg",
  url: "https://www.mktweb360.com/diseno-web-para-clinicas/",
  mainEntityOfPage: "https://www.mktweb360.com/diseno-web-para-clinicas/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Diseño web para clínicas", item: "https://www.mktweb360.com/diseno-web-para-clinicas/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta una web para una clínica o centro de salud?",
    a: "El precio varía según la especialidad y las funcionalidades necesarias. Una web profesional para una clínica parte desde 790€ e incluye diseño, desarrollo, SEO técnico y formación. Clínicas con múltiples especialidades o sistemas de reserva complejos tienen un coste mayor.",
  },
  {
    q: "¿Puedo gestionar yo mismo los contenidos de la web?",
    a: "Sí. Desarrollamos sobre WordPress con formación incluida para que puedas actualizar servicios, añadir publicaciones, cambiar horarios y gestionar el blog de forma completamente autónoma sin depender de nosotros para cada cambio.",
  },
  {
    q: "¿Cumplen vuestras webs con la normativa RGPD y sanidad?",
    a: "Sí. Incluimos aviso legal, política de privacidad y política de cookies adaptadas al sector sanitario, así como los formularios con los checkboxes de consentimiento explícito requeridos por el RGPD.",
  },
  {
    q: "¿Hacéis webs para cualquier tipo de clínica?",
    a: "Sí. Trabajamos con fisioterapeutas, psicólogos, nutricionistas, clínicas de estética, centros de medicina deportiva, logopedas, podólogos y cualquier profesional o centro del ámbito de la salud y el bienestar.",
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

export default function DisenoWebClinicasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web para clínicas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Salud</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">25 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Diseño Web para Clínicas: Web Profesional que Genera Pacientes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Fisioterapeutas, psicólogos, nutricionistas, clínicas de estética… todos comparten el mismo problema: sus pacientes los buscan en Google y si no aparecen o su web no genera confianza, pierden esa oportunidad. Esta guía explica qué necesita la web de una clínica para captar pacientes de forma constante.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El sector salud y bienestar tiene una particularidad que lo diferencia de otros negocios: el paciente no solo busca un servicio, busca a alguien en quien confiar. Esa confianza se construye antes de la primera cita, y hoy se construye mayoritariamente en internet. Una web profesional no es un lujo para una clínica — es la herramienta más importante de captación de pacientes que existe.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué tu clínica necesita una web profesional en 2026</h2>
          <p>
            Más del 70% de las personas buscan profesionales de la salud en Google antes de decidirse. En ese momento de búsqueda, comparan varias opciones: leen reseñas, miran las fotos, ven si la especialidad coincide con lo que necesitan y valoran si la web transmite seriedad y profesionalidad.
          </p>
          <p>
            Una web lenta, anticuada o sin información real actúa en sentido contrario: genera desconfianza y hace que el potencial paciente pase a la siguiente opción. Por el contrario, una web bien estructurada, con fotos del equipo y el centro, descripciones claras de los tratamientos y formulario de cita visible, convierte visitas en primeras consultas.
          </p>
          <p>
            Además, Google premia con mejor posicionamiento local a los centros que tienen una web activa y bien optimizada. Aparecer en el "pack local" de tres resultados que muestra Google Maps en la parte superior de las búsquedas puede duplicar las llamadas y formularios de contacto recibidos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué debe incluir la web de una clínica</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Página de especialidades y servicios:</strong> cada tratamiento o especialidad con su propia sección, bien explicada y con keywords locales. Fisioterapia, psicología, nutrición, estética médica, osteopatía… cada una debe tener su espacio.</li>
            <li><strong>Equipo profesional:</strong> foto, nombre, formación y especialización de cada profesional. El paciente quiere saber quién le va a atender antes de pedir cita.</li>
            <li><strong>Reseñas y testimonios:</strong> integración con Google Reviews o testimonios propios. La prueba social es el factor de confianza más potente en el sector salud.</li>
            <li><strong>Formulario de cita o reserva online:</strong> visible en todas las páginas, optimizado para móvil. El 65% de las búsquedas de salud local se hacen desde smartphone.</li>
            <li><strong>Blog o sección de contenidos:</strong> artículos sobre salud, prevención y tratamientos posicionan la clínica como referente y atraen tráfico orgánico de forma continua.</li>
            <li><strong>Datos de contacto y ubicación:</strong> teléfono, dirección, mapa de Google y horario actualizado en un lugar visible, sin que el usuario tenga que buscarlos.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">SEO local para clínicas: cómo aparecer primero en tu zona</h2>
          <p>
            El SEO local es la estrategia que permite que tu clínica aparezca cuando alguien busca "fisioterapeuta en [ciudad]" o "psicólogo cerca de mí". Se trabaja en dos frentes complementarios:
          </p>
          <p>
            <strong>Google Business Profile:</strong> la ficha de Google Maps es tu escaparate más visible. Debe tener la categoría correcta, descripción optimizada, fotos actualizadas del centro y el equipo, horario real y respuestas a reseñas. Las clínicas que responden activamente a sus reseñas — incluso a las negativas — generan más confianza y mejor posicionamiento.
          </p>
          <p>
            <strong>Web con contenido local:</strong> mencionar la ciudad y el barrio en los textos principales, tener páginas de servicio específicas para cada especialidad y publicar contenido útil para los pacientes de la zona son las claves para escalar posiciones en los resultados orgánicos de Google.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una web que genere pacientes de forma constante?</p>
            <p className="text-gray-600 text-sm mb-4">Diseñamos webs para clínicas y centros de salud con SEO local incluido, reserva online y gestión autónoma desde el primer día.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar presupuesto gratuito
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Proceso de trabajo: de cero a web en 4 pasos</h2>
          <ul className="list-none space-y-4">
            {[
              { n: "1", t: "Análisis y estrategia local", d: "Estudiamos tu competencia en la zona, las keywords de tu especialidad y la estructura óptima para posicionarte bien desde el lanzamiento." },
              { n: "2", t: "Diseño profesional del sector salud", d: "Webs limpias, transmisoras de confianza, con paleta de colores y estética adecuada al sector sanitario. Adaptadas a móvil y cargando rápido." },
              { n: "3", t: "Contenido, especialidades y optimización", d: "Redactamos las páginas de servicio con textos optimizados para SEO. Integramos el formulario de cita, el mapa y las reseñas." },
              { n: "4", t: "Formación y entrega sin ataduras", d: "La web es tuya. Te formamos para gestionarla de forma autónoma y sin depender de nosotros para cada cambio." },
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
            <h2 className="text-2xl font-bold mb-3">Web para tu clínica que trabaja mientras tú atiendes pacientes</h2>
            <p className="text-primary-200 mb-6">
              Captación de pacientes en automático, agenda más llena y presencia digital que inspira confianza. Sin comisiones ni licencias.
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
            Ver también: <Link href="/diseno-web-para-dentistas/" className="text-accent-500 hover:underline">Diseño web para dentistas</Link> · <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> · <Link href="/google-my-business-empresas-guia/" className="text-accent-500 hover:underline">Guía Google My Business</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="diseno-web-para-clinicas" category="Diseño Web" />
    </>
  );
}
