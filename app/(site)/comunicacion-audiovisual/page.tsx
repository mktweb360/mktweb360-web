import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Comunicación Audiovisual para Empresas | Vídeo Marketing | Mkt Web 360",
  description:
    "Producción de vídeo corporativo, reels, spots, presentaciones animadas y fotografía para empresas. Piezas audiovisuales que comunican, conectan y convierten.",
  alternates: { canonical: "https://www.mktweb360.com/comunicacion-audiovisual/" },
  openGraph: {
    title: "Comunicación Audiovisual para Empresas | Vídeo Marketing | Mkt Web 360",
    description: "Vídeo corporativo, reels, spots publicitarios y fotografía profesional para empresas que quieren destacar.",
    url: "https://www.mktweb360.com/comunicacion-audiovisual/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Comunicación Audiovisual para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Producción de vídeo corporativo, reels, spots publicitarios, presentaciones animadas y fotografía profesional para empresas.",
  areaServed: "España",
  url: "https://www.mktweb360.com/comunicacion-audiovisual/",
};

const TIPOS_PIEZAS = [
  { icon: "🎬", title: "Vídeo corporativo", desc: "Presenta tu empresa, equipo y valores de forma profesional. Ideal para tu web, redes sociales y presentaciones comerciales." },
  { icon: "📱", title: "Reels y vídeos para redes", desc: "Contenido vertical optimizado para Instagram, TikTok y LinkedIn. Formatos que el algoritmo prioriza y los usuarios consumen." },
  { icon: "📺", title: "Spots publicitarios", desc: "Piezas de vídeo para campañas de YouTube Ads, Meta Ads y televisión local. Creatividad orientada a conversión." },
  { icon: "✨", title: "Presentaciones animadas", desc: "Motion graphics y presentaciones animadas para eventos, pitch decks y contenido formativo o de ventas." },
  { icon: "📸", title: "Fotografía corporativa", desc: "Sesiones de fotografía profesional de equipo, producto, instalaciones y reportajes de empresa." },
  { icon: "🎙️", title: "Testimoniales y casos de éxito", desc: "Vídeos de clientes satisfechos que generan confianza y reducen las objeciones de compra." },
];

const PROCESO = [
  { num: "01", title: "Briefing", desc: "Nos reunimos para entender tu negocio, audiencia, objetivos y el mensaje que quieres transmitir." },
  { num: "02", title: "Guión y storyboard", desc: "Desarrollamos el guión creativo y, si aplica, el storyboard visual para tener alineación antes de rodar." },
  { num: "03", title: "Producción", desc: "Grabación con equipo profesional. Dirigimos el rodaje para extraer lo mejor de tu equipo y tus instalaciones." },
  { num: "04", title: "Postproducción", desc: "Montaje, color grading, música, voz en off, subtítulos y gráficos. Todo integrado en la identidad visual de tu marca." },
  { num: "05", title: "Entrega y adaptación", desc: "Entrega de la pieza final en todos los formatos y tamaños que necesitas para cada canal." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Tenéis equipo propio o subcontratáis la producción?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos con un equipo de producción propio para proyectos en la zona de Castilla-La Mancha y Madrid, y con colaboradores especializados en otras provincias. En todos los casos, la dirección creativa, el guión y la estrategia los gestionamos nosotros directamente." } },
    { "@type": "Question", name: "¿Cuánto tarda en entregarse un vídeo corporativo?", acceptedAnswer: { "@type": "Answer", text: "El plazo estándar desde el briefing hasta la entrega del vídeo final es de 2 a 3 semanas. Incluye reunión de briefing, redacción de guión, rodaje, montaje y revisiones. Para proyectos más complejos con animaciones o varios días de rodaje, el plazo se ajusta antes de empezar." } },
    { "@type": "Question", name: "¿Qué formatos de entrega incluís?", acceptedAnswer: { "@type": "Answer", text: "Entregamos la pieza en todos los formatos necesarios para cada canal: versión horizontal para web y YouTube, versión vertical para Instagram Reels y TikTok, versión cuadrada para feed de Instagram, y versiones adaptadas a las especificaciones de cada plataforma publicitaria." } },
    { "@type": "Question", name: "¿Podemos usar el vídeo en campañas de Google Ads o Meta Ads?", acceptedAnswer: { "@type": "Answer", text: "Sí, y lo recomendamos. Producimos las piezas teniendo en cuenta los requisitos técnicos y creativos de cada plataforma publicitaria. Si además gestionamos tus campañas de Ads, coordinamos la producción con la estrategia publicitaria para maximizar el rendimiento de cada pieza." } },
  ],
};

export default function ComunicacionAudiovisualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Comunicación Audiovisual" }]} />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Comunicación Audiovisual — Piezas visuales que trabajan para tu negocio
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          El vídeo y la imagen son el lenguaje del marketing digital actual. Producimos piezas audiovisuales profesionales que comunican tu propuesta de valor, generan confianza y convierten visitas en clientes.
        </p>

        {/* Por qué el vídeo importa */}
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Por qué el vídeo importa en tu estrategia digital</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            {[
              { stat: "82%", label: "del tráfico global de internet es vídeo" },
              { stat: "6x", label: "más probabilidad de conversión con vídeo en landing page" },
              { stat: "3x", label: "más engagement en redes sociales frente a imágenes estáticas" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-4xl font-bold text-accent-500 mb-1">{item.stat}</p>
                <p className="text-gray-700 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Una empresa sin presencia audiovisual profesional transmite desconfianza en un entorno digital donde la competencia sí la tiene. El vídeo no es un extra — es un componente esencial de cualquier estrategia de marketing que funcione hoy.
          </p>
        </section>

        {/* Qué ofrecemos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué ofrecemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIPOS_PIEZAS.map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Nuestro proceso de producción</h2>
          <div className="space-y-4">
            {PROCESO.map((paso) => (
              <div key={paso.num} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-2xl shrink-0 w-10">{paso.num}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{paso.title}</h3>
                  <p className="text-gray-600 text-sm">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Por qué profesional */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué la calidad audiovisual define cómo te percibe tu cliente</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El vídeo corporativo no es un lujo reservado a grandes empresas. Es la herramienta que más rápidamente comunica quién eres, qué haces y por qué confiar en ti — en menos de 90 segundos y sin que el usuario tenga que leer nada. En un entorno donde la atención es el recurso más escaso, el vídeo es el formato que más se consume, más se recuerda y más se comparte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El problema es que un vídeo mal producido causa el efecto contrario: transmite falta de profesionalidad y genera desconfianza. La diferencia entre un vídeo grabado con el móvil sin criterio y una pieza producida con guión, iluminación, edición y música no es solo estética — es la diferencia entre un cliente que confía y uno que sigue buscando.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En Mkt Web 360 integramos la comunicación audiovisual con la estrategia de marketing digital. Cada pieza que producimos tiene un objetivo concreto — posicionarte en YouTube, mejorar la conversión de tu landing, generar confianza en redes sociales o fortalecer tu propuesta comercial — y está diseñada para cumplirlo.
          </p>
        </section>

        {/* Sectores */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Para qué tipo de empresa producimos contenido audiovisual?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Producimos contenido audiovisual para empresas de todos los sectores. Algunos de los casos más habituales:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Servicios profesionales", desc: "Vídeos corporativos que transmiten confianza y autoridad. Presentaciones del equipo, testimoniales de clientes y vídeos de proceso de trabajo." },
              { sector: "Clínicas y salud", desc: "Presentación de instalaciones, vídeos de equipo médico, explicación de tratamientos y testimoniales de pacientes que reducen las objeciones de nuevos clientes." },
              { sector: "Hostelería y turismo", desc: "Vídeos atmosféricos de establecimiento, reels de producto y experiencia, contenido para redes sociales que muestra el ambiente y genera reservas." },
              { sector: "Ecommerce y retail", desc: "Vídeos de producto, unboxing, tutoriales de uso y spots publicitarios para campañas de Meta Ads y YouTube Ads que mejoran la tasa de conversión." },
              { sector: "Formación y academias", desc: "Presentación del centro y metodología, vídeos de aula, testimoniales de alumnos y spots de captación para campañas de inicio de curso." },
              { sector: "Industria y B2B", desc: "Vídeos corporativos para ferias y presentaciones comerciales, documentación de procesos productivos y piezas que generan confianza en clientes empresariales." },
            ].map(s => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre producción audiovisual</h2>
          <div className="space-y-4">
            {[
              { q: "¿Tenéis equipo propio o subcontratáis la producción?",
                a: "Trabajamos con un equipo de producción propio para proyectos en la zona de Castilla-La Mancha y Madrid, y con colaboradores especializados en otras provincias. En todos los casos, la dirección creativa, el guión y la estrategia los gestionamos nosotros directamente." },
              { q: "¿Cuánto tarda en entregarse un vídeo corporativo?",
                a: "El plazo estándar desde el briefing hasta la entrega del vídeo final es de 2 a 3 semanas. Incluye reunión de briefing, redacción de guión, rodaje, montaje y revisiones. Para proyectos más complejos con animaciones o varios días de rodaje, el plazo se ajusta antes de empezar." },
              { q: "¿Qué formatos de entrega incluís?",
                a: "Entregamos la pieza en todos los formatos necesarios para cada canal: versión horizontal para web y YouTube, versión vertical para Instagram Reels y TikTok, versión cuadrada para feed de Instagram, y versiones adaptadas a las especificaciones de cada plataforma publicitaria." },
              { q: "¿Podemos usar el vídeo en campañas de Google Ads o Meta Ads?",
                a: "Sí, y lo recomendamos. Producimos las piezas teniendo en cuenta los requisitos técnicos y creativos de cada plataforma publicitaria. Si además gestionamos tus campañas de Ads, coordinamos la producción con la estrategia publicitaria para maximizar el rendimiento de cada pieza." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Solicitar presupuesto</h2>
          <p className="text-primary-200 mb-6">
            Cuéntanos qué necesitas y te preparamos una propuesta sin compromiso. Cada pieza es única y el presupuesto se adapta a tu proyecto.
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" />
    </>
  );
}
