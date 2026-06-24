import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Creación de Blog para Monetización — Afiliación y AdSense | Mkt Web 360",
  description: "Creamos tu blog de monetización listo para generar ingresos pasivos con AdSense, Amazon Associates y afiliación. Análisis de nicho, diseño, SEO y primeros artículos incluidos.",
  alternates: { canonical: "https://www.mktweb360.com/blog-monetizacion/" },
  openGraph: {
    title: "Blog para Monetización — Afiliación y AdSense | Mkt Web 360",
    description: "Tu blog de ingresos pasivos. Análisis de nicho, diseño, SEO y artículos optimizados para monetización.",
    url: "https://www.mktweb360.com/blog-monetizacion/",
    images: [{ url: "/og-blog-monetizacion.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de Blog para Monetización",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Creación de blogs de monetización con AdSense, Amazon Associates y afiliación. Incluye análisis de nicho, diseño, SEO y primeros artículos optimizados.",
  areaServed: "España",
  url: "https://www.mktweb360.com/blog-monetizacion/",
};

const PACKAGES = [
  {
    name: "Blog Starter",
    price: "990€",
    desc: "Para emprendedores que quieren lanzar su primer proyecto de blog monetizado.",
    includes: [
      "Análisis de nicho y validación de rentabilidad",
      "Diseño y desarrollo del blog (WordPress)",
      "Configuración de Google AdSense",
      "Integración Amazon Associates",
      "Estructura SEO completa",
      "10 artículos optimizados para monetización",
      "Formación para gestión autónoma",
    ],
    cta: "Empezar con Starter",
    featured: false,
  },
  {
    name: "Blog Pro",
    price: "1.990€",
    desc: "Para proyectos más ambiciosos con mayor potencial de ingresos.",
    includes: [
      "Todo lo del plan Starter",
      "Análisis competitivo de nicho avanzado",
      "Diseño premium personalizado",
      "Integración con múltiples redes de afiliación",
      "25 artículos optimizados para monetización",
      "Estrategia de link building inicial",
      "Informe mensual de rendimiento durante 3 meses",
    ],
    cta: "Empezar con Pro",
    featured: true,
  },
  {
    name: "Blog Gestión",
    price: "Desde 490€/mes",
    desc: "Para quien quiere delegar la gestión y el crecimiento del blog.",
    includes: [
      "Creación de 8-10 artículos mensuales",
      "Optimización SEO continua",
      "Gestión de monetización y optimización de ingresos",
      "Informes mensuales de tráfico e ingresos",
      "Estrategia de contenido y keywords",
    ],
    cta: "Ver gestión mensual",
    featured: false,
  },
];

export default function BlogMonetizacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog para Monetización" }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Ingresos pasivos</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Un blog que genera ingresos<br />
                <span className="text-accent-400">mientras tú duermes</span>
              </h1>
              <p className="text-xl text-primary-200 mb-4 leading-relaxed">
                Creamos tu blog de monetización desde cero — análisis de nicho, diseño, SEO y los primeros artículos optimizados para AdSense y afiliación. Tú te llevas el activo digital, nosotros lo construimos.
              </p>
              <p className="text-primary-300 italic mb-8 text-sm">
                ⚠️ Importante: los ingresos relevantes de un blog tardan entre 6 y 18 meses. Esto es una inversión a largo plazo, no un ingreso inmediato.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#paquetes" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                  Ver paquetes
                </a>
                <a href="#contacto" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                  Hablar con un experto
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src="/imagen-blog-monetizacion.jpg" alt="Blog para monetización con ingresos pasivos" width={600} height={400} className="rounded-2xl shadow-lg w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "AdSense", label: "Google configurado" },
            { value: "Amazon", label: "Associates integrado" },
            { value: "SEO", label: "desde el primer artículo" },
            { value: "6-18m", label: "para ingresos relevantes" },
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo funciona un blog de monetización</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un blog bien construido es el activo digital más rentable que existe. Genera tráfico orgánico constante sin pagar por cada visita.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { step: "01", title: "Análisis de nicho", desc: "Identificamos nichos con alto potencial de monetización, baja competencia y demanda de búsqueda suficiente para generar ingresos reales." },
                { step: "02", title: "Construcción y SEO", desc: "Diseñamos y desarrollamos el blog con arquitectura SEO óptima. Cada artículo está optimizado para posicionar keywords comerciales." },
                { step: "03", title: "Monetización", desc: "Configuramos AdSense, Amazon Associates y otras redes de afiliación. El blog empieza a generar desde el primer visitante cualificado." },
                { step: "04", title: "Crecimiento", desc: "El blog crece con nuevos artículos y optimizaciones. A partir de los 6-12 meses los ingresos se vuelven consistentes y escalables." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center shrink-0 text-sm">{s.step}</div>
                  <div>
                    <h3 className="font-bold text-primary-600 mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Fuentes de monetización que integramos</h3>
              <ul className="space-y-3">
                {[
                  "Google AdSense — publicidad contextual",
                  "Amazon Associates — afiliación de productos",
                  "Temu / AliExpress afiliados",
                  "Redes de afiliación (Tradedoubler, Awin, etc.)",
                  "Productos digitales propios",
                  "Contenido patrocinado",
                  "Links de afiliación directos con marcas",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>
                    <span className="text-primary-100">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="paquetes" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Paquetes y precios</h2>
            <p className="text-gray-600">Sin permanencia en los paquetes de setup. La gestión mensual tiene permanencia mínima de 6 meses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border-2 relative ${p.featured ? "border-accent-500 bg-accent-50" : "border-gray-200 bg-white"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full">Más popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-primary-600 mb-1">{p.name}</h3>
                <p className="text-3xl font-bold text-accent-500 mb-2">{p.price}</p>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 mb-8">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center px-6 py-3 rounded-full font-bold transition-colors ${p.featured ? "bg-accent-500 text-white hover:bg-accent-600" : "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-4">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-amber-800 mb-2">Lo que debes saber antes de empezar</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Un blog de monetización es una inversión a largo plazo. Los primeros ingresos relevantes llegan generalmente entre 6 y 18 meses después del lanzamiento. Es un activo digital que crece con el tiempo — no una fuente de ingresos inmediata. Si buscas resultados rápidos, te recomendamos explorar primero nuestros servicios de SEO o Google Ads.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Mientras tú trabajas, tu blog genera ingresos</h2>
            <p className="text-primary-200">Cuéntanos tu idea de nicho y te decimos si tiene potencial real de monetización.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="blog-monetizacion" />
          </div>
        </div>
      </section>
    </>
  );
}
