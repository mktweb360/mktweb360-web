import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Quiénes Somos — Agencia de Marketing Digital | Mkt Web 360",
  description: "Equipo senior con protocolos propios de IA. Conoce la metodología, los valores y la historia de Mkt Web 360. Agencia de marketing digital para PYMEs. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/nosotros/" },
  openGraph: {
    title: "Quiénes Somos | Mkt Web 360 — Agencia de Marketing Digital",
    description: "La experiencia de un equipo senior. La precisión de la inteligencia artificial. Conoce cómo trabajamos.",
    url: "https://www.mktweb360.com/nosotros/",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mkt Web 360 SLU",
  url: "https://www.mktweb360.com",
  logo: "https://www.mktweb360.com/logo.png",
  telephone: "+34622748897",
  email: "info@mktweb360.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Viso de San Juan",
    addressLocality: "El Viso de San Juan",
    addressRegion: "Toledo",
    postalCode: "45215",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.facebook.com/mktweb360",
    "https://twitter.com/mktweb360",
    "https://www.instagram.com/mktweb360",
    "https://www.linkedin.com/company/mktweb360",
  ],
  description: "Agencia de marketing digital para PYMEs y empresas. Especialistas en SEO, SEM, gestión de redes sociales y diseño web. Servicio nacional.",
};

const VALORES = [
  { title: "Compromiso", desc: "Tratamos cada proyecto como si fuera nuestro propio negocio. Tu éxito es nuestro éxito." },
  { title: "Transparencia", desc: "Informes claros, métricas reales y comunicación honesta sobre lo que funciona y lo que no." },
  { title: "Resultados", desc: "Cada acción tiene un objetivo medible. No hacemos marketing por hacer, hacemos marketing que convierte." },
  { title: "Comunicación", desc: "Respuesta en menos de 24h y contacto directo con tu responsable de cuenta en todo momento." },
  { title: "Exclusividad", desc: "No trabajamos con tu competencia en tu zona. Tu sector es exclusivamente tuyo en tu área." },
  { title: "IA aplicada", desc: "Protocolos propios de inteligencia artificial integrados en cada servicio para resultados más rápidos y precisos." },
];

const PASOS = [
  { num: "01", title: "Diagnóstico gratuito", desc: "Analizamos tu situación digital: web, SEO, competencia, redes y analítica. Sin coste y sin compromiso." },
  { num: "02", title: "Estrategia personalizada", desc: "Diseñamos un plan de acción con objetivos claros, plazos y métricas de seguimiento adaptado a tu negocio." },
  { num: "03", title: "Implementación con IA", desc: "Ejecutamos con protocolos propios de IA que aceleran los tiempos y mejoran la precisión de cada acción." },
  { num: "04", title: "Seguimiento continuo", desc: "Monitorizamos resultados semanalmente y reportamos mensualmente con datos reales y próximos pasos." },
  { num: "05", title: "Optimización constante", desc: "Analizamos lo que funciona, ajustamos lo que no y seguimos mejorando de forma continua mes a mes." },
];

export default function NosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Quiénes Somos" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La experiencia de un equipo senior.<br />
              <span className="text-accent-400">La precisión de la inteligencia artificial.</span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed">
              En Mkt Web 360 no somos una agencia más. Somos un equipo comprometido con resultados reales para empresas reales — con protocolos propios de IA que nos permiten trabajar más rápido, analizar más datos y tomar mejores decisiones que una agencia tradicional.
            </p>
            <p className="text-lg text-primary-100 italic mb-8">
              "Céntrate en tu negocio. Nosotros ponemos el foco en que te encuentren."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Cuéntanos tu proyecto
              </a>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver nuestros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "+10 años", label: "de experiencia" },
            { value: "Nacional", label: "servicio en toda España" },
            { value: "IA propia", label: "protocolos desarrollados" },
            { value: "Exclusivo", label: "un cliente por sector y zona" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Nuestra historia</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mkt Web 360 nació con un objetivo claro: ofrecer a las PYMEs españolas el mismo nivel de marketing digital serio y profesional que hasta entonces solo estaba al alcance de las grandes empresas.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vimos que existía una brecha enorme entre lo que las pequeñas empresas necesitaban y lo que el mercado les ofrecía — agencias que prometían mucho, reportaban poco y desaparecían cuando llegaban las preguntas difíciles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Desde entonces hemos trabajado con empresas de sectores muy distintos — desde servicios asistenciales hasta industria metalúrgica — manteniendo siempre el mismo nivel de implicación, rigor y cercanía que nos diferencia.
              </p>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Por qué somos diferentes</h3>
              <ul className="space-y-4">
                {[
                  "Equipo senior — no practicantes ni perfiles júnior",
                  "Protocolos propios de IA en cada servicio",
                  "Exclusividad sectorial y geográfica por cliente",
                  "Reporting real — datos buenos y datos malos",
                  "Acceso directo a tu responsable, siempre",
                  "Orientación a negocio, no a métricas de vanidad",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-primary-100">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IA methodology */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">IA integrada en nuestra metodología</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No usamos la IA como todos. Hemos desarrollado protocolos propios integrados en cada servicio — para trabajar más rápido, analizar más datos y tomar mejores decisiones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Más rápido", desc: "Lo que antes tardaba días lo resolvemos en horas. Más tiempo para estrategia y menos para tareas repetitivas." },
              { title: "Más preciso", desc: "Analizamos más datos en menos tiempo. Detectamos oportunidades y amenazas antes que una agencia tradicional." },
              { title: "Mejores decisiones", desc: "Cada recomendación está respaldada por datos reales, no por intuición o por lo que se lleva de moda." },
            ].map((c) => (
              <div key={c.title} className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <h3 className="font-bold text-primary-600 mb-2 text-lg">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-700 rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-2">"Un equipo cualificado con protocolos propios de IA.</p>
            <p className="text-primary-200">Trabajamos más rápido, analizamos más datos y tomamos mejores decisiones que una agencia tradicional. Y todo eso revierte en tus resultados."</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo trabajamos</h2>
            <p className="text-gray-600">Un proceso transparente, medible y orientado a resultados desde el primer día.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PASOS.map((paso) => (
              <div key={paso.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">{paso.num}</div>
                <h3 className="font-bold text-primary-600 mb-2 text-sm">{paso.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {VALORES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-600 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Diferenciador estratégico</span>
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Pioneros en GEO en España</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Somos una de las primeras agencias en España en implementar GEO — Generative Engine Optimization — la disciplina de optimizar tu presencia para aparecer en ChatGPT, Perplexity y Gemini.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "SEO", desc: "Te posicionamos en Google con estrategias probadas y duraderas.", href: "/seo-posicionamiento-web-organico/", badge: "Consolidado" },
              { title: "GEO", desc: "Optimizamos tu presencia para aparecer en las respuestas de ChatGPT, Perplexity y Gemini.", href: "/geo-posicionamiento-ia/", badge: "Pioneros" },
              { title: "SEO + GEO", desc: "La estrategia completa para visibilidad total en todos los canales de búsqueda actuales y futuros.", href: "/contacto/", badge: "Recomendado" },
            ].map((s) => (
              <a key={s.title} href={s.href} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-primary-600 text-xl group-hover:text-accent-500 transition-colors">{s.title}</h3>
                  <span className="text-xs font-bold bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">{s.badge}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a href="/geo-posicionamiento-ia/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
              Conocer el servicio GEO completo →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tu mejor cliente aún no te conoce</h2>
            <p className="text-primary-200">Vamos a presentaros. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="nosotros" />
          </div>
        </div>
      </section>
    </>
  );
}
