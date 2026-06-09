import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Quiénes Somos | Mkt Web 360 — Agencia de Marketing Digital",
  description:
    "Conoce el equipo y la filosofía de Mkt Web 360. Una agencia de marketing digital que trabaja tu proyecto con compromiso, transparencia y orientación a resultados.",
  alternates: { canonical: "https://www.mktweb360.com/nosotros/" },
  openGraph: {
    title: "Quiénes Somos | Mkt Web 360 — Agencia de Marketing Digital",
    description: "Agencia de marketing digital fundada para ofrecer servicio serio a PYMEs. Conoce nuestra historia, filosofía y cómo trabajamos.",
    url: "https://www.mktweb360.com/nosotros/",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mkt Web 360 SLU",
  url: "https://www.mktweb360.com",
  logo: "https://www.mktweb360.com/logo.png",
  telephone: "+34696714476",
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
  description:
    "Agencia de marketing digital para PYMEs y empresas. Especialistas en SEO, SEM, gestión de redes sociales y diseño web. Servicio nacional desde Toledo, España.",
};

const VALORES = [
  { icon: "🤝", title: "Compromiso", desc: "Tratamos cada proyecto como si fuera nuestro propio negocio. Tu éxito es nuestro éxito." },
  { icon: "🔍", title: "Transparencia", desc: "Informes claros, métricas reales y comunicación honesta sobre lo que funciona y lo que no." },
  { icon: "🎯", title: "Orientación a resultados", desc: "Cada acción tiene un objetivo medible. No hacemos marketing por hacer, hacemos marketing que convierte." },
  { icon: "💬", title: "Comunicación", desc: "Respuesta ágil, reuniones periódicas y contacto directo con tu responsable de cuenta." },
  { icon: "⚡", title: "Adaptabilidad", desc: "El marketing digital cambia cada mes. Nos formamos continuamente para aplicar lo que mejor funciona hoy." },
  { icon: "📚", title: "Formación continua", desc: "Nuestro equipo se actualiza de forma constante para ofrecerte siempre estrategias al día." },
];

const PASOS = [
  { num: "01", title: "Diagnóstico inicial", desc: "Analizamos tu situación digital actual: web, SEO, competencia, redes y analítica. Sin coste y sin compromiso." },
  { num: "02", title: "Estrategia", desc: "Diseñamos un plan de acción personalizado con objetivos claros, plazos y métricas de seguimiento." },
  { num: "03", title: "Implementación", desc: "Ejecutamos las acciones acordadas con precisión y calidad, manteniéndote informado en cada paso." },
  { num: "04", title: "Seguimiento", desc: "Monitorizamos los resultados semanalmente y reportamos mensualmente con datos reales." },
  { num: "05", title: "Optimización", desc: "Analizamos lo que funciona, ajustamos lo que no y seguimos mejorando de forma continua." },
];

export default function NosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Quiénes Somos" }]} />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Una agencia que trabaja tu proyecto como si fuera el suyo
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          En Mkt Web 360 no somos una agencia más. Somos un equipo comprometido con resultados reales para empresas reales.
        </p>

        {/* Historia */}
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Nuestra historia</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mkt Web 360 nació con un objetivo claro: ofrecer a las PYMEs españolas el mismo nivel de marketing digital serio y profesional que hasta entonces solo estaba al alcance de las grandes empresas. Vimos que existía una brecha enorme entre lo que las pequeñas empresas necesitaban y lo que el mercado les ofrecía.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Desde nuestros inicios en Toledo hemos trabajado con empresas de sectores muy distintos — desde servicios asistenciales hasta industria metalúrgica — y en todos los casos con el mismo nivel de implicación y rigor. Hoy damos servicio a empresas de toda España manteniendo la cercanía y el trato personalizado que nos diferencia.
          </p>
        </section>

        {/* Filosofía */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Nuestra filosofía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Transparencia total", desc: "Te mostramos los datos reales, tanto los buenos como los malos. Solo así podemos mejorar juntos." },
              { title: "Colaboración constante", desc: "No somos proveedores externos, somos parte de tu equipo. Tu negocio nos importa más allá del contrato." },
              { title: "Comunicación abierta", desc: "Acceso directo a tu responsable, respuesta en menos de 24h y reuniones periódicas de seguimiento." },
              { title: "Mejora continua", desc: "Cada mes analizamos qué ha funcionado y ajustamos la estrategia para hacerlo mejor el siguiente." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Cómo trabajamos</h2>
          <div className="space-y-4">
            {PASOS.map((paso) => (
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

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Nuestros valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {VALORES.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-xl p-6 text-center">
                <span className="text-4xl mb-3 block">{v.icon}</span>
                <h3 className="font-bold text-primary-700 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Cuéntanos tu proyecto</h2>
          <p className="text-primary-200 mb-6">
            Hablamos sin compromiso. Analizamos tu situación y te decimos honestamente qué podemos hacer por ti.
          </p>
          <Link
            href="/contacto/"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Contactar ahora
          </Link>
        </section>
      </div>
      <RelatedArticles />
    </>
  );
}
