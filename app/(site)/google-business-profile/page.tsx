import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Google Business Profile para Empresas — Visibilidad Local | Mkt Web 360",
  description: "Optimización y gestión de Google Business Profile para empresas. Aparece en Google Maps, consigue más reseñas y atrae clientes locales. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/google-business-profile/" },
  openGraph: {
    title: "Google Business Profile para Empresas | Mkt Web 360",
    description: "Optimiza tu ficha de Google y aparece cuando tus clientes te buscan cerca.",
    url: "https://www.mktweb360.com/google-business-profile/",
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

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Google Business Profile" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Aparece cuando<br />
              <span className="text-accent-400">te están buscando</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El 46% de las búsquedas en Google tienen intención local. Si tu ficha de Google no está optimizada, estás regalando clientes a tu competencia cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Optimizar mi ficha
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Tu negocio en Google Maps</p>
                  <div className="flex text-accent-400 text-xs">★★★★★ <span className="text-primary-200 ml-1">4.9 · 127 reseñas</span></div>
                </div>
              </div>
              <p className="text-primary-200 text-xs">Así ve tu ficha un cliente potencial cuando busca en Google. Optimizada, con reseñas y toda la información correcta.</p>
            </div>
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Optimización inicial</h3>
              <ul className="space-y-3">
                {[
                  "Auditoría completa de tu ficha actual",
                  "Categorías y atributos optimizados",
                  "Descripción persuasiva y con keywords",
                  "Fotos profesionales del negocio",
                  "Horarios, servicios y precios actualizados",
                  "NAP consistente con tu web y directorios",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Gestión mensual</h3>
              <ul className="space-y-3">
                {[
                  "Publicaciones semanales en Google",
                  "Respuesta profesional a reseñas",
                  "Estrategia para conseguir más reseñas",
                  "Seguimiento de posiciones en Maps",
                  "Análisis de búsquedas y llamadas",
                  "Informe mensual de rendimiento",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">Por qué Google Business Profile es clave</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-2xl mx-auto">
            Cuando alguien busca "fontanero en Toledo" o "clínica dental cerca de mí", Google muestra el Local Pack — esos 3 negocios que aparecen en el mapa. Si no estás ahí, no existes para ese cliente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Visibilidad inmediata", desc: "Aparece en Google Maps y en los resultados locales antes que la competencia." },
              { title: "Más llamadas directas", desc: "Los clientes te llaman directamente desde la ficha sin pasar por la web." },
              { title: "Confianza con reseñas", desc: "Un negocio con reseñas positivas y bien gestionadas convierte hasta 3 veces más." },
            ].map((c) => (
              <div key={c.title} className="bg-primary-50 rounded-2xl p-6 text-center">
                <h3 className="font-bold text-primary-600 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Céntrate en tu negocio</h2>
            <p className="text-primary-200">Nosotros ponemos el foco en que te encuentren. Cuéntanos tu situación y te decimos cómo mejorar tu visibilidad local.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="google-business-profile" />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre posicionamiento local" />
    </>
  );
}
