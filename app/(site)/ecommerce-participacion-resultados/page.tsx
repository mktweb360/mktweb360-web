import type { Metadata } from "next";
import Image from "next/image";
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
    images: [{ url: "/og-ecommerce-participacion-resultados.jpg", width: 1200, height: 630 }],
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cómo se define el bonus de resultados?", acceptedAnswer: { "@type": "Answer", text: "Lo acordamos antes de empezar basándonos en los datos reales de tu negocio: ticket medio, margen bruto y objetivo de ventas mensual. El bonus se activa cuando las ventas superan un umbral definido conjuntamente. Los términos exactos se recogen en el contrato antes de empezar." } },
    { "@type": "Question", name: "¿Qué pasa si los resultados no llegan?", acceptedAnswer: { "@type": "Answer", text: "El setup inicial y la gestión mensual cubren el trabajo independientemente de los resultados. Si las ventas no alcanzan el umbral de bonus, analizamos conjuntamente las causas — producto, precio, mercado, logística — y ajustamos la estrategia. Si tras un periodo razonable el proyecto no tiene viabilidad, lo decimos claramente." } },
    { "@type": "Question", name: "¿Gestionáis también el stock y la logística?", acceptedAnswer: { "@type": "Answer", text: "No. Nuestra responsabilidad es la parte digital: web, SEO, campañas de Ads, email marketing y analítica. La logística, el stock y la atención al cliente son responsabilidad del cliente. Es un requisito previo que esa parte esté resuelta — escalar un ecommerce con problemas logísticos solo amplifica los problemas." } },
    { "@type": "Question", name: "¿Cuánto tiempo tarda en estar operativo el ecommerce?", acceptedAnswer: { "@type": "Answer", text: "El desarrollo de la tienda tarda entre 3 y 6 semanas dependiendo del catálogo y las integraciones necesarias. A partir del lanzamiento, la fase de crecimiento inicial dura entre 3 y 6 meses. Los primeros resultados significativos en ventas orgánicas llegan entre el mes 4 y el mes 8." } },
  ],
};

export default function EcommerceParticipacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Ecommerce con Participación" }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
            <div>
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
            <div className="hidden md:block">
              <Image src="/imagen-ecommerce-participacion.jpg" alt="Ecommerce con participación en resultados" width={600} height={400} className="rounded-2xl shadow-lg w-full object-cover" />
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

      {/* POR QUÉ MODELO HÍBRIDO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">Por qué el modelo híbrido es el único que tiene sentido para ambas partes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El modelo de comisión pura sobre ventas parece atractivo para el cliente a primera vista — si no vendo, no pago. Pero en la práctica crea un incentivo perverso: la agencia solo gana si el ecommerce escala rápido, lo que lleva a priorizar volumen sobre rentabilidad, tráfico barato sobre tráfico cualificado, y resultados a corto plazo sobre construcción sostenible del negocio.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El modelo híbrido que proponemos alinea los intereses de forma real. Un setup inicial que cubre el coste de construcción, una gestión mensual que garantiza dedicación continua, y un bonus de resultados que nos incentiva a crecer contigo — no a inflar métricas. Cuando tu ecommerce vende más, nosotros cobramos más. Cuando no, tenemos un incentivo directo para encontrar qué está fallando y corregirlo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hemos rechazado el modelo de comisión pura después de analizar los conflictos de interés que genera: atribución de ventas discutible, presión para aumentar inversión publicitaria independientemente del ROAS, y tensión cuando los resultados no llegan en el plazo esperado. El modelo híbrido elimina esas fricciones y permite una relación profesional a largo plazo.
          </p>
        </div>
      </section>

      {/* QUÉ NECESITAS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué necesitas tener para que este modelo funcione</h2>
          <p className="text-gray-600 mb-8">Este servicio no es para todos los proyectos. Para que el modelo híbrido tenga sentido necesitas:</p>
          <div className="space-y-4">
            {[
              "Un producto con margen suficiente para absorber los costes fijos de gestión y dejar espacio al bonus de resultados.",
              "Capacidad de cumplir con los pedidos — logística, stock y atención al cliente tienen que estar resueltos antes de escalar.",
              "Horizonte mínimo de 12 meses — los ecommerce bien construidos tardan entre 6 y 12 meses en alcanzar velocidad de crucero.",
              "Disposición a compartir datos reales de negocio — márgenes, costes logísticos, ticket medio — para definir métricas de bonus justas.",
              "Un producto que pueda venderse online con garantías legales y sin restricciones de distribución.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 bg-primary-50 rounded-xl px-5 py-4 border border-primary-100">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "¿Cómo se define el bonus de resultados?",
                a: "Lo acordamos antes de empezar basándonos en los datos reales de tu negocio: ticket medio, margen bruto y objetivo de ventas mensual. El bonus se activa cuando las ventas superan un umbral definido conjuntamente — por ejemplo, el 10% de las ventas por encima de 15.000€/mes. Los términos exactos se recogen en el contrato antes de empezar.",
              },
              {
                q: "¿Qué pasa si los resultados no llegan?",
                a: "El setup inicial y la gestión mensual cubren el trabajo independientemente de los resultados. Si las ventas no alcanzan el umbral de bonus, analizamos conjuntamente las causas — producto, precio, mercado, logística — y ajustamos la estrategia. Si tras un periodo razonable el proyecto no tiene viabilidad, lo decimos claramente.",
              },
              {
                q: "¿Gestionáis también el stock y la logística?",
                a: "No. Nuestra responsabilidad es la parte digital: web, SEO, campañas de Ads, email marketing y analítica. La logística, el stock y la atención al cliente son responsabilidad del cliente. Es un requisito previo que esa parte esté resuelta — escalar un ecommerce con problemas logísticos solo amplifica los problemas.",
              },
              {
                q: "¿Cuánto tiempo tarda en estar operativo el ecommerce?",
                a: "El desarrollo de la tienda tarda entre 3 y 6 semanas dependiendo del catálogo y las integraciones necesarias. A partir del lanzamiento, la fase de crecimiento inicial dura entre 3 y 6 meses. Los primeros resultados significativos en ventas orgánicas llegan entre el mes 4 y el mes 8.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
