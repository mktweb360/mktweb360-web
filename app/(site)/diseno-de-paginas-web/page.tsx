import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web Profesionales — Mkt Web 360",
  description: "Diseño de páginas web profesionales, tiendas online y webs corporativas. Webs rápidas, modernas y optimizadas para SEO y conversión. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/" },
  openGraph: {
    title: "Diseño de Páginas Web Profesionales | Mkt Web 360",
    description: "Webs profesionales, rápidas y optimizadas para SEO y conversión. Servicio nacional.",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/",
    images: [{ url: "/imagen-diseno-web.jpg", width: 1200, height: 900, alt: "Diseño web profesional Mkt Web 360" }],
  },
};

const SUB_SERVICES = [
  {
    title: "Páginas Corporativas",
    desc: "Presencia digital profesional que genera confianza y convierte visitas en contactos.",
    href: "/diseno-de-paginas-web/paginas-corporativas/",
  },
  {
    title: "Tiendas Online",
    desc: "Ecommerce sin comisiones ni licencias. Tú gestionas, nosotros construimos.",
    href: "/diseno-de-paginas-web/diseno-tiendas-online/",
  },
  {
    title: "Webs para Empresas",
    desc: "Soluciones a medida con funcionalidades específicas para tu sector y tamaño.",
    href: "/diseno-de-paginas-web/diseno-paginas-web-empresa/",
  },
];

const FEATURES = [
  "Diseño responsive adaptado a móvil",
  "Velocidad optimizada — Core Web Vitals",
  "SEO técnico incluido desde el inicio",
  "SSL, RGPD y formularios configurados",
  "Analytics y seguimiento de conversiones",
  "Soporte y mantenimiento post-entrega",
];

const PROCESS = [
  { step: "01", title: "Briefing", desc: "Entendemos tu negocio, tu público y tus objetivos antes de diseñar nada." },
  { step: "02", title: "Diseño", desc: "Prototipo visual adaptado a tu marca. Tú apruebas antes de desarrollar." },
  { step: "03", title: "Desarrollo", desc: "Web rápida, segura y optimizada para SEO desde el primer día." },
  { step: "04", title: "Entrega", desc: "Formación, traspaso y soporte. Tu web funciona desde el primer momento." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de Páginas Web Profesionales",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Diseño y desarrollo de páginas web profesionales, tiendas online y webs corporativas.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-de-paginas-web/",
};

export default function WebDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Diseño Web" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Tu web que trabaja<br />
              <span className="text-accent-400">mientras tú trabajas</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Diseñamos páginas web que no solo se ven bien — convierten visitantes en clientes. Rápidas, seguras y optimizadas para Google desde el primer día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </Link>
              <Link href="#tipos" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver tipos de web
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/imagen-diseno-web.jpg" alt="Diseño web profesional" className="rounded-2xl shadow-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "100%", label: "Proyectos entregados" },
            { value: "Responsive", label: "Móvil, tablet y desktop" },
            { value: "SEO", label: "Incluido desde el inicio" },
            { value: "Soporte", label: "Post-entrega incluido" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="tipos" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Qué tipo de web necesitas?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Cada proyecto es diferente. Elige el que mejor encaja con tus objetivos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUB_SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent-300 transition-all group text-center">
                <h3 className="text-xl font-bold text-primary-600 mb-3 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-accent-500 text-sm font-semibold group-hover:underline">Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo trabajamos</h2>
            <p className="text-gray-600">Un proceso claro, sin sorpresas y contigo en el centro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-primary-600 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Todo incluido en cada proyecto</h2>
              <div className="space-y-4">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-4">
                    <span className="text-accent-500 text-xl font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Tu web actual no convierte?</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">Analizamos tu web sin compromiso y te decimos exactamente qué está frenando tus ventas.</p>
              <ul className="space-y-3 text-primary-100">
                {[
                  "Diagnóstico gratuito de tu web",
                  "Análisis de velocidad y SEO técnico",
                  "Propuesta personalizada sin rodeos",
                  "Respuesta en menos de 24 horas",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-accent-400 font-bold">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">La experiencia de un equipo senior. La precisión de la inteligencia artificial.</p>
            <p className="text-gray-500 text-sm mt-1">Protocolos propios de IA aplicados a cada proyecto para resultados más rápidos y precisos.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tu mejor cliente aún no te conoce</h2>
            <p className="text-primary-200">Vamos a presentaros. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="diseno-web" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Diseño Web" title="Más sobre diseño web" />
    </>
  );
}
