import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cómo generar leads de calidad para una pyme sin gastar más en publicidad",
  description:
    "Aprende cómo generar leads de calidad para tu pyme mejorando mensaje, segmentación, canales, web y proceso comercial.",
  alternates: { canonical: "https://www.mktweb360.com/como-generar-leads-calidad-pyme/" },
  openGraph: {
    title: "Cómo generar leads de calidad para una pyme sin gastar más en publicidad | Mkt Web 360",
    description: "Aprende cómo generar leads de calidad para tu pyme mejorando mensaje, segmentación, canales, web y proceso comercial.",
    url: "https://www.mktweb360.com/como-generar-leads-calidad-pyme/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo generar leads de calidad para una pyme sin llenar el embudo de contactos inútiles",
  description: "Aprende cómo generar leads de calidad para tu pyme mejorando mensaje, segmentación, canales, web y proceso comercial.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-04-14",
  url: "https://www.mktweb360.com/como-generar-leads-calidad-pyme/",
  mainEntityOfPage: "https://www.mktweb360.com/como-generar-leads-calidad-pyme/",
};

const FAQS = [
  {
    q: "¿Qué es un lead de calidad?",
    a: "Un lead de calidad es un contacto que cumple el perfil de cliente que tu empresa puede servir bien, tiene una necesidad real y tiene intención de compra. No todos los contactos son leads de calidad — muchos son curiosos, competidores o personas fuera de tu mercado objetivo.",
  },
  {
    q: "¿Cómo mejorar la calidad de los leads sin aumentar el presupuesto?",
    a: "Mejorando la segmentación de los mensajes (habla directamente al perfil exacto que quieres atraer), añadiendo fricción cualificadora en los formularios (pregunta por presupuesto, plazo, tipo de proyecto), y revisando la propuesta de valor para que filtre naturalmente a los no ideales.",
  },
  {
    q: "¿Es mejor tener muchos leads baratos o pocos leads cualificados?",
    a: "En casi todos los casos, pocos leads cualificados. Un comercial que gestiona 50 leads al mes con 5% de cierre tiene peores resultados que uno que gestiona 15 con 30% de cierre. La calidad reduce el coste de venta y mejora el uso del tiempo del equipo comercial.",
  },
  {
    q: "¿Cómo sé si mis leads son de mala calidad?",
    a: "Si tu tasa de cierre es inferior al 15%, si los contactos frecuentemente no tienen presupuesto, si no corresponden al sector que atiendes o si el tiempo medio de respuesta y seguimiento es alto sin resultados — es muy probable que tengas un problema de calidad de lead.",
  },
  {
    q: "¿Qué papel juega la web en la generación de leads de calidad?",
    a: "Un papel clave. El mensaje de la landing page, el tipo de formulario, los casos de uso que muestras y las preguntas que haces pre-cualifican al visitante antes de que contacte. Una web bien orientada actúa como filtro y cualificador automático antes de que el lead llegue a ventas.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function LeadsCalidadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo generar leads de calidad para una pyme" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Captación</span>
            <time className="text-sm text-gray-400" dateTime="2025-04-14">14 de abril de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo generar leads de calidad para una pyme sin llenar el embudo de contactos inútiles
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Más leads no significa mejor negocio. Un embudo lleno de contactos que no encajan con lo que vendes es una carga, no un activo. La clave está en atraer menos pero mejores.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Es un problema muy frecuente en pymes que llevan un tiempo haciendo marketing digital: el formulario de contacto recibe mensajes, pero la mayoría no cierran. No tienen presupuesto, buscan algo diferente, o simplemente no son el tipo de cliente con el que trabajas bien.
          </p>
          <p>
            Generar más tráfico sobre un sistema que no filtra bien solo multiplica el problema. La solución no es siempre más volumen — es mejor mensaje, mejor segmentación y un proceso que filtre desde el primer contacto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Más leads vs mejores leads: la diferencia que importa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold"></th>
                  <th className="px-4 py-3 text-left font-semibold">Más leads</th>
                  <th className="px-4 py-3 text-left font-semibold">Mejores leads</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Enfoque", "Máximo volumen de contactos", "Atraer al perfil de cliente ideal"],
                  ["Resultado", "Muchos contactos, pocos cierres", "Menos contactos, más cierres"],
                  ["Coste", "Mayor inversión en captación", "Mayor inversión en mensaje y segmentación"],
                  ["Cierre", "5–10% de tasa media", "20–40% de tasa media"],
                  ["Tiempo comercial", "Alto, muchas gestiones inútiles", "Bajo, conversaciones más productivas"],
                ].map(([row, ...cols]) => (
                  <tr key={row} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row}</td>
                    {cols.map((c, i) => <td key={i} className="px-4 py-3 text-gray-600">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás generando contactos pero no encajan con lo que vendes?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a revisar el mensaje, la segmentación y el proceso de captación para que los leads que lleguen sean los que realmente puedes cerrar.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar sobre mi captación
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Los 4 pilares para generar leads de calidad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { num: "01", title: "Mensaje claro", desc: "Si tu propuesta de valor filtra bien desde el primer momento, los que contactan ya saben qué van a encontrar — y son los que encajan." },
              { num: "02", title: "Canal adecuado", desc: "No todos los canales generan el mismo perfil de lead. El canal correcto depende de dónde está tu cliente ideal cuando tiene la intención de compra." },
              { num: "03", title: "Landing que convierte y filtra", desc: "Una buena landing page no solo convierte — también cualifica. Las preguntas del formulario, el tono y los casos de uso filtran antes del primer contacto." },
              { num: "04", title: "Seguimiento rápido", desc: "Un lead no respondido en menos de una hora pierde entre 4 y 7 veces más probabilidad de cerrar. La velocidad de respuesta es parte del proceso de captación." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="border border-gray-200 rounded-xl p-5">
                <span className="text-accent-500 font-bold text-2xl">{num}</span>
                <h3 className="font-semibold text-primary-700 mt-1 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link> · <Link href="/que-puede-automatizar-una-pyme-en-marketing-y-ventas/" className="text-accent-500 hover:underline">Qué puede automatizar una pyme en marketing y ventas</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Mejora la calidad del lead, no solo el volumen</h2>
            <p className="text-primary-200 mb-6">
              Te ayudamos a revisar tu proceso completo de captación — desde el mensaje hasta el seguimiento — para que los leads que lleguen sean los que puedes cerrar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar auditoría de captación
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Hablar con un especialista
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre generación de leads</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicio relacionado: <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
    </>
  );
}
