import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Google Business Profile para Empresas — Visibilidad Local",
  description: "Optimización y gestión de Google Business Profile para empresas. Aparece en Google Maps, consigue más reseñas y atrae clientes locales. Auditoría, configuración y gestión mensual. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/google-business-profile/" },
  openGraph: {
    title: "Google Business Profile para Empresas | Mkt Web 360",
    description: "Optimiza tu ficha de Google y aparece cuando tus clientes te buscan cerca.",
    url: "https://www.mktweb360.com/google-business-profile/",
    images: [{ url: "/imagen-google-business-profile.jpg", width: 1200, height: 900, alt: "Google Business Profile Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión Google Business Profile",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Optimización y gestión de Google Business Profile para empresas. Mejora tu visibilidad local en Google Maps y Google Search.",
  areaServed: "España",
  url: "https://www.mktweb360.com/google-business-profile/",
};

const FAQS = [
  { q: "¿Cuánto tarda en verse el resultado de optimizar la ficha?",
    a: "Los primeros cambios son inmediatos: la ficha actualizada aparece en Google en 24-48 horas. La mejora en el posicionamiento dentro del Local Pack (los 3 primeros resultados del mapa) suele verse entre 4 y 8 semanas, dependiendo de la competencia en tu zona y sector." },
  { q: "¿Necesito tener una dirección física para tener Google Business Profile?",
    a: "No necesariamente. Si prestas servicios a domicilio o en casa del cliente (fontaneros, electricistas, asesores, etc.) puedes crear una ficha de área de servicio sin mostrar tu dirección. Configuramos la ficha según tu modelo de negocio." },
  { q: "¿Cómo conseguís más reseñas para mi negocio?",
    a: "Diseñamos una estrategia de captación de reseñas adaptada a tu sector: email automatizado post-servicio, QR en el punto de venta, formación al equipo para solicitar reseñas de forma natural. También gestionamos las respuestas a todas las reseñas, positivas y negativas." },
  { q: "¿Qué pasa si tengo reseñas negativas?",
    a: "Las reseñas negativas bien gestionadas generan más confianza que no tenerlas. Respondemos de forma profesional y constructiva a cada reseña negativa. Si son falsas o incumplen las políticas de Google, tramitamos su eliminación ante Google." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto tarda en verse el resultado de optimizar la ficha?", acceptedAnswer: { "@type": "Answer", text: "Los primeros cambios son inmediatos: la ficha actualizada aparece en Google en 24-48 horas. La mejora en el posicionamiento dentro del Local Pack (los 3 primeros resultados del mapa) suele verse entre 4 y 8 semanas, dependiendo de la competencia en tu zona y sector." } },
    { "@type": "Question", name: "¿Necesito tener una dirección física para tener Google Business Profile?", acceptedAnswer: { "@type": "Answer", text: "No necesariamente. Si prestas servicios a domicilio o en casa del cliente (fontaneros, electricistas, asesores, etc.) puedes crear una ficha de área de servicio sin mostrar tu dirección. Configuramos la ficha según tu modelo de negocio." } },
    { "@type": "Question", name: "¿Cómo conseguís más reseñas para mi negocio?", acceptedAnswer: { "@type": "Answer", text: "Diseñamos una estrategia de captación de reseñas adaptada a tu sector: email automatizado post-servicio, QR en el punto de venta, formación al equipo para solicitar reseñas de forma natural. También gestionamos las respuestas a todas las reseñas, positivas y negativas." } },
    { "@type": "Question", name: "¿Qué pasa si tengo reseñas negativas?", acceptedAnswer: { "@type": "Answer", text: "Las reseñas negativas bien gestionadas generan más confianza que no tenerlas. Respondemos de forma profesional y constructiva a cada reseña negativa. Si son falsas o incumplen las políticas de Google, tramitamos su eliminación ante Google." } },
  ],
};

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Google Business Profile" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Aparece cuando<br />
              <span className="text-accent-400">te están buscando</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El 46% de las búsquedas en Google tienen intención local. Si tu ficha de Google Business Profile no está optimizada, estás regalando clientes a tu competencia cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Optimizar mi ficha
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-google-business-profile.jpg" alt="Google Business Profile" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "46%", label: "búsquedas con intención local" },
            { value: "3x", label: "más visitas con ficha optimizada" },
            { value: "Reviews", label: "gestión activa de reseñas" },
            { value: "Maps", label: "posicionamiento en Google Maps" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Por qué GBP */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué Google Business Profile es la herramienta de captación local más potente</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cuando alguien busca "fontanero en Toledo", "clínica dental cerca de mí" o "restaurante italiano Madrid", Google muestra el Local Pack: los 3 negocios que aparecen en el mapa antes que cualquier resultado orgánico. Si no estás en esos 3, no existes para ese cliente potencial.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Google Business Profile es completamente gratuito, pero la mayoría de empresas tiene la ficha a medias, sin fotos actualizadas, sin responder reseñas, sin publicaciones y con información incorrecta. Eso penaliza directamente su posición en el mapa y destruye la confianza del cliente antes de que te contacte.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Una ficha bien optimizada y gestionada activamente genera un 3x más de visitas al sitio web, más llamadas directas y más solicitudes de ruta — que son las acciones que más se correlacionan con clientes reales. El ROI de optimizar Google Business Profile es de los más altos de cualquier acción de marketing local.
          </p>
        </section>

        {/* Qué incluye */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Qué incluye el servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">Optimización inicial</h3>
              <ul className="space-y-3">
                {[
                  "Auditoría completa de tu ficha actual",
                  "Categorías y atributos optimizados",
                  "Descripción persuasiva con keywords locales",
                  "Fotos y vídeos del negocio",
                  "Horarios, servicios y precios actualizados",
                  "NAP consistente con tu web y directorios",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">Gestión mensual</h3>
              <ul className="space-y-3">
                {[
                  "Publicaciones semanales en Google",
                  "Respuesta profesional a todas las reseñas",
                  "Estrategia de captación de reseñas",
                  "Seguimiento de posiciones en Maps",
                  "Análisis de búsquedas y llamadas",
                  "Informe mensual de rendimiento",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría de la ficha actual", desc: "Analizamos el estado actual de tu Google Business Profile: información incompleta, categorías incorrectas, fotos desactualizadas, reseñas sin responder y coherencia NAP con tu web." },
              { num: "02", title: "Optimización completa", desc: "Completamos y optimizamos todos los campos: descripción con keywords locales, categorías primaria y secundarias, atributos de negocio, horarios, servicios, precios y fotos." },
              { num: "03", title: "Estrategia de reseñas", desc: "Diseñamos e implementamos el sistema de captación de reseñas: email post-servicio, QR en el local, formación al equipo. Y respondemos a todas las reseñas existentes." },
              { num: "04", title: "Gestión y seguimiento", desc: "Publicamos contenido semanal en la ficha, monitorizamos las métricas de visibilidad local y enviamos un informe mensual con evolución de posiciones, llamadas y visitas." },
            ].map(step => (
              <div key={step.num} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Para qué tipo de negocio es imprescindible?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Google Business Profile es especialmente crítico para negocios con clientes locales o que prestan servicios en un área geográfica concreta:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Servicios del hogar", desc: "Fontaneros, electricistas, pintores, cerrajeros, reformas. El Local Pack es el primer punto de contacto cuando el cliente tiene una urgencia." },
              { sector: "Clínicas y salud", desc: "Dentistas, fisioterapeutas, psicólogos, clínicas estéticas. Las reseñas son determinantes en la decisión del paciente." },
              { sector: "Hostelería y restauración", desc: "Restaurantes, bares, hoteles, cafeterías. Google Maps es el directorio de referencia para encontrar dónde comer o dormir." },
              { sector: "Comercio local y retail", desc: "Tiendas físicas que quieren captar clientes de su zona. La ficha muestra horarios, productos y facilita la visita." },
              { sector: "Servicios profesionales", desc: "Asesorías, gestorías, abogados, consultoras. La presencia en Maps refuerza la confianza y facilita el primer contacto." },
              { sector: "Centros de formación", desc: "Academias, autoescuelas, centros de idiomas. Las búsquedas locales de cursos y formación tienen alta intención de compra." },
            ].map(s => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Por qué Google Business Profile es clave para tu negocio local</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Visibilidad inmediata", desc: "Aparece en Google Maps y en el Local Pack antes que los resultados orgánicos. Es el escaparate digital más visible para búsquedas locales." },
              { title: "Más llamadas directas", desc: "Los clientes te llaman o solicitan ruta directamente desde la ficha sin necesidad de visitar tu web. Menos fricción, más conversiones." },
              { title: "Confianza con reseñas", desc: "Un negocio con reseñas positivas y gestionadas activamente convierte hasta 3 veces más que uno sin reseñas o con críticas sin responder." },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Oferta verano */}
        <OfertaVeranoBanner />

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre Google Business Profile</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Céntrate en tu negocio</h2>
          <p className="text-primary-200 mb-6">Nosotros ponemos el foco en que te encuentren. Cuéntanos tu situación y te decimos cómo mejorar tu visibilidad local.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>

      <RelatedArticles category="SEO" title="Más sobre posicionamiento local" />
    </>
  );
}
