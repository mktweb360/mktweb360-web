import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Gestión de Reputación Online para Empresas — España",
  description: "Servicio profesional de gestión y mejora de reputación online para empresas. Monitorización, gestión de reseñas en Google, estrategia de imagen digital e informes mensuales. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/reputacion-online/" },
  openGraph: {
    title: "Gestión Reputación Online para Empresas | Mkt Web 360",
    description: "Monitorización, gestión de reseñas y estrategia de imagen digital para empresas.",
    url: "https://www.mktweb360.com/reputacion-online/",
    images: [{ url: "/imagen-reputacion-online.jpg", width: 1200, height: 900, alt: "Reputación online Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Reputación Online para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio profesional de gestión y mejora de reputación online para empresas y marcas. Monitorización, gestión de reseñas y estrategia de imagen digital.",
  areaServed: "España",
  url: "https://www.mktweb360.com/reputacion-online/",
};

const FAQS = [
  { q: "¿Podéis eliminar reseñas negativas de Google?",
    a: "Las reseñas solo se pueden eliminar si incumplen las políticas de Google: contenido falso, spam, conflicto de intereses o lenguaje inapropiado. Tramitamos la solicitud de eliminación ante Google cuando procede. Para el resto, la mejor estrategia es responder de forma profesional y generar un volumen de reseñas positivas que diluya el impacto de las negativas." },
  { q: "¿Cuánto tiempo tarda en mejorar la reputación online?",
    a: "Los primeros resultados visibles suelen verse en 60-90 días: mejora en la valoración media, más reseñas recientes y respuestas profesionales a todas las existentes. La mejora en el posicionamiento local de Google Maps como resultado de una mejor reputación tarda entre 3 y 6 meses." },
  { q: "¿Qué pasa si recibo una reseña negativa falsa de un competidor?",
    a: "Es más frecuente de lo que parece. Documentamos la situación, tramitamos la denuncia ante Google con las pruebas disponibles y aplicamos la respuesta más adecuada mientras se resuelve. También te asesoramos sobre las acciones legales disponibles si el daño es significativo." },
  { q: "¿Gestionáis la reputación en redes sociales también?",
    a: "Sí. Monitorizamos menciones en Instagram, Facebook, X (Twitter) y LinkedIn, además de foros y webs de opinión del sector. La gestión de reseñas en Google es el núcleo del servicio, pero la monitorización es completa en todos los canales donde tu marca puede ser mencionada." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Podéis eliminar reseñas negativas de Google?", acceptedAnswer: { "@type": "Answer", text: "Las reseñas solo se pueden eliminar si incumplen las políticas de Google: contenido falso, spam, conflicto de intereses o lenguaje inapropiado. Tramitamos la solicitud de eliminación ante Google cuando procede. Para el resto, la mejor estrategia es responder de forma profesional y generar un volumen de reseñas positivas que diluya el impacto de las negativas." } },
    { "@type": "Question", name: "¿Cuánto tiempo tarda en mejorar la reputación online?", acceptedAnswer: { "@type": "Answer", text: "Los primeros resultados visibles suelen verse en 60-90 días: mejora en la valoración media, más reseñas recientes y respuestas profesionales a todas las existentes. La mejora en el posicionamiento local de Google Maps como resultado de una mejor reputación tarda entre 3 y 6 meses." } },
    { "@type": "Question", name: "¿Qué pasa si recibo una reseña negativa falsa de un competidor?", acceptedAnswer: { "@type": "Answer", text: "Es más frecuente de lo que parece. Documentamos la situación, tramitamos la denuncia ante Google con las pruebas disponibles y aplicamos la respuesta más adecuada mientras se resuelve. También te asesoramos sobre las acciones legales disponibles si el daño es significativo." } },
    { "@type": "Question", name: "¿Gestionáis la reputación en redes sociales también?", acceptedAnswer: { "@type": "Answer", text: "Sí. Monitorizamos menciones en Instagram, Facebook, X (Twitter) y LinkedIn, además de foros y webs de opinión del sector. La gestión de reseñas en Google es el núcleo del servicio, pero la monitorización es completa en todos los canales donde tu marca puede ser mencionada." } },
  ],
};

export default function ReputacionOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Reputación Online" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Gestión de Reputación Online para Empresas
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Tu reputación online es lo primero que ven tus clientes potenciales antes de contactarte. Gestionamos y mejoramos la imagen digital de tu empresa para que las primeras impresiones trabajen a tu favor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-reputacion-online.jpg" alt="Reputación online" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Por qué */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué la reputación online define tus ventas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El 93% de los consumidores lee reseñas online antes de tomar una decisión de compra. Una sola reseña negativa sin respuesta puede costar decenas de clientes potenciales. Y no se trata solo de Google — las menciones en redes sociales, foros y directorios forman una imagen que el usuario construye en segundos antes de decidir si confía en tu empresa.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La reputación online no es un activo pasivo — requiere gestión activa y estrategia. Las empresas que responden a todas sus reseñas, positivas y negativas, generan hasta un 45% más de confianza que las que no lo hacen. Y las que mantienen un flujo constante de reseñas recientes posicionan mejor en Google Maps que las que tienen muchas reseñas antiguas sin actividad.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gestionamos tanto la parte reactiva — responder reseñas de forma profesional, incluyendo las negativas — como la proactiva: generar un sistema de captación de reseñas que funcione de forma automática y sostenida. El objetivo es que cualquier cliente potencial que busque tu empresa encuentre una imagen de confianza antes del primer contacto.
          </p>
        </section>

        {/* Incluye y plataformas */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Auditoría inicial de reputación",
                "Monitorización de menciones y reseñas",
                "Gestión de reseñas en Google",
                "Estrategia de respuesta a críticas",
                "Sistema de captación de reseñas positivas",
                "Control de resultados de búsqueda",
                "Informe mensual de reputación",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Plataformas que monitorizamos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Google Business Profile",
                "Trustpilot",
                "Tripadvisor",
                "Facebook Reviews",
                "Instagram y LinkedIn",
                "Foros y webs de opinión",
                "Resultados de búsqueda orgánica",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría de reputación", desc: "Analizamos el estado actual de tu imagen digital: reseñas existentes, valoración media, menciones en redes y webs de opinión, y resultados que aparecen al buscar tu marca en Google." },
              { num: "02", title: "Plan de acción", desc: "Definimos la estrategia: qué reseñas negativas se pueden eliminar, cómo responder a las existentes, qué sistema de captación implementar y qué acciones de mejora de imagen son prioritarias." },
              { num: "03", title: "Gestión activa", desc: "Respondemos a todas las reseñas, tramitamos eliminaciones cuando procede, implementamos el sistema de captación de nuevas reseñas y monitorizamos las menciones de tu marca de forma continua." },
              { num: "04", title: "Informe mensual", desc: "Recibes un informe mensual con la evolución de tu valoración media, número de reseñas nuevas, menciones detectadas y el impacto en tu posicionamiento local en Google Maps." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Para qué tipo de negocio es crítica la reputación online?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            La reputación online impacta en todos los negocios, pero es especialmente determinante en sectores donde la confianza es la barrera de entrada principal:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Clínicas y salud", desc: "El paciente investiga al médico, dentista o terapeuta antes de pedir cita. Una valoración baja o reseñas sin responder puede suponer perder decenas de nuevos pacientes cada mes." },
              { sector: "Hostelería y restauración", desc: "El 94% de los comensales revisa las reseñas antes de reservar. En Tripadvisor, Google y The Fork, la gestión activa de la reputación es directamente proporcional a la ocupación." },
              { sector: "Servicios profesionales", desc: "Abogados, asesores, consultores. La reputación online es el equivalente digital del boca a boca. Una mala reseña visible puede anular meses de inversión en captación." },
              { sector: "Comercio local y retail", desc: "Las tiendas físicas con mejor reputación en Google Maps reciben más visitas. La valoración media y el número de reseñas influyen directamente en el posicionamiento local." },
              { sector: "Ecommerce", desc: "Las reseñas de producto y de la tienda son el principal factor de conversión en compras online. Gestionamos la reputación tanto en Google como en marketplaces y plataformas de opinión." },
              { sector: "Centros de formación", desc: "Los padres y alumnos investigan exhaustivamente antes de matricularse. La reputación online de academias, colegios y centros de idiomas influye directamente en la tasa de captación." },
            ].map(s => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre reputación online</h2>
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
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tu reputación online?</h2>
          <p className="text-primary-200 mb-6">Analizamos tu situación actual sin compromiso y te explicamos qué está afectando a tu imagen digital.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" title="Más sobre reputación y presencia digital" />
    </>
  );
}
