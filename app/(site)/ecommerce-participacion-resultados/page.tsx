import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Ecommerce con Participación en Resultados — Modelo Híbrido | Mkt Web 360",
  description: "Modelo híbrido de ecommerce: montamos toda la infraestructura digital y participamos en el éxito. Setup fijo + gestión mensual + bonus por resultados. Sin comisión por venta.",
  alternates: { canonical: "https://www.mktweb360.com/ecommerce-participacion-resultados/" },
  openGraph: {
    title: "Ecommerce con Participación en Resultados | Mkt Web 360",
    description: "Modelo híbrido: setup fijo + gestión mensual garantizada + bonus por resultados. Alineamos incentivos sin riesgo para el cliente.",
    url: "https://www.mktweb360.com/ecommerce-participacion-resultados/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce con Participación en Resultados",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Modelo híbrido de marketing digital para ecommerce: setup fijo + gestión mensual + bonus por resultados. Sin comisión directa por venta.",
  areaServed: "España",
  url: "https://www.mktweb360.com/ecommerce-participacion-resultados/",
};

export default function EcommerceParticipacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Ecommerce con Participación" }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Modelo innovador</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Montamos tu ecommerce.<br />
              <span className="text-accent-400">Crecemos juntos.</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Construimos toda tu infraestructura digital — tienda online, campañas, SEO — y participamos en el éxito cuando superas objetivos definidos. Nuestros incentivos están alineados con los tuyos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#modelo" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Ver el modelo
              </a>
              <a href="#contacto" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Hablar con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Por qué no hacemos comisión pura por venta</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">La comisión directa por venta suena bien sobre el papel, pero tiene problemas operativos serios que perjudican a ambas partes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-red-100">
              <h3 className="font-bold text-red-500 mb-4">❌ Modelo de comisión pura — por qué no funciona</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Atribución imposible — ¿quién generó la venta?",
                  "Márgenes de dropshipping bajos (10-30%) — la comisión no cubre costes",
                  "Dependemos de la calidad del producto del cliente",
                  "Conflicto de intereses en cada factura",
                  "Sin garantía de cobro — riesgo financiero total",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-400 shrink-0">✗</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-accent-500">
              <h3 className="font-bold text-accent-600 mb-4">✅ Nuestro modelo híbrido — cómo lo resolvemos</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Setup fijo — cubrimos el desarrollo inicial",
                  "Gestión mensual mínima garantizada — sostenibilidad",
                  "Bonus por resultados sobre umbral definido — incentivo real",
                  "Métricas de atribución claras acordadas de antemano",
                  "Incentivos alineados sin conflicto de intereses",
                ].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent-500 shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="modelo" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo funciona el modelo híbrido</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Setup fijo",
                price: "1.500€ – 2.500€",
                desc: "Diseño y desarrollo de la tienda online, configuración de campañas, analítica y toda la infraestructura inicial.",
                items: ["Tienda online profesional", "Google Ads configurado", "SEO técnico inicial", "Analítica y tracking"],
              },
              {
                num: "02",
                title: "Gestión mensual",
                price: "300€ – 500€/mes",
                desc: "Gestión continua de campañas, SEO y optimización. Garantiza la sostenibilidad del servicio sin depender solo del éxito.",
                items: ["Gestión Google Ads", "SEO mensual", "Informes de resultados", "Optimización continua"],
              },
              {
                num: "03",
                title: "Bonus por resultados",
                price: "Definido en contrato",
                desc: "Cuando se supera un umbral de ventas o ROAS acordado, se activa un bonus. Los incentivos están alineados con tu crecimiento.",
                items: ["Umbral definido de antemano", "Métricas de atribución claras", "Revisión trimestral", "Escalable con el negocio"],
              },
            ].map((s) => (
              <div key={s.num} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div className="w-10 h-10 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center mb-4 text-sm">{s.num}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-1">{s.title}</h3>
                <p className="text-accent-500 font-bold mb-3">{s.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-accent-500 font-bold">✓</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">¿Para quién es este modelo?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-accent-400 mb-3">✅ Encaja si tienes:</h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  {[
                    "Un producto validado con demanda real",
                    "Márgenes suficientes (mínimo 30-40%)",
                    "Capacidad de gestionar stock y logística",
                    "Disposición a invertir a medio plazo",
                    "Objetivos de ventas claros y medibles",
                  ].map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-accent-400">✓</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-300 mb-3">❌ No encaja si:</h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  {[
                    "El producto no está validado todavía",
                    "Los márgenes son menores del 25%",
                    "Buscas resultados en menos de 3 meses",
                    "No puedes garantizar stock consistente",
                    "Quieres un modelo sin ningún coste fijo",
                  ].map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-red-300">✗</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Tu proyecto encaja con este modelo?</h2>
            <p className="text-primary-200">Cuéntanos tu producto, tus márgenes y tus objetivos. Te decimos honestamente si tiene sentido trabajar juntos.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="ecommerce-participacion" />
          </div>
        </div>
      </section>
    </>
  );
}
