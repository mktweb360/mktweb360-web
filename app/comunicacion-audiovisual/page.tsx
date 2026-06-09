import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

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

export default function ComunicacionAudiovisualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
    </>
  );
}
