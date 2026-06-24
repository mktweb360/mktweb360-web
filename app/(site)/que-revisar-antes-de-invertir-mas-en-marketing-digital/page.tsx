import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Qué revisar antes de invertir más en marketing digital en 2025",
  description:
    "Antes de invertir más en marketing digital, revisa estas áreas clave para no amplificar errores y tomar mejores decisiones.",
  alternates: { canonical: "https://www.mktweb360.com/que-revisar-antes-de-invertir-mas-en-marketing-digital/" },
  openGraph: {
    title: "Qué revisar antes de invertir más en marketing digital en 2025 | Mkt Web 360",
    description: "Antes de invertir más en marketing digital, revisa estas áreas clave para no amplificar errores y tomar mejores decisiones.",
    url: "https://www.mktweb360.com/que-revisar-antes-de-invertir-mas-en-marketing-digital/",
    type: "article",
    images: [{ url: "/og-que-revisar-antes-de-invertir-en-marketing.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Qué revisar en tu empresa antes de invertir más en marketing digital",
  description: "Antes de invertir más en marketing digital, revisa estas áreas clave para no amplificar errores y tomar mejores decisiones.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-04-01",
  url: "https://www.mktweb360.com/que-revisar-antes-de-invertir-mas-en-marketing-digital/",
  mainEntityOfPage: "https://www.mktweb360.com/que-revisar-antes-de-invertir-mas-en-marketing-digital/",
};

const FAQS = [
  {
    q: "¿Qué es una auditoría digital?",
    a: "Un análisis estructurado de la presencia digital de una empresa: web, SEO, campañas, medición y embudo comercial, para identificar qué está fallando antes de invertir más.",
  },
  {
    q: "¿Cuándo tiene sentido escalar el presupuesto de marketing?",
    a: "Cuando la base está bien resuelta: web que convierte, mensaje claro, medición fiable y proceso comercial que puede absorber más demanda.",
  },
  {
    q: "¿Qué métricas debo revisar antes de invertir más?",
    a: "Tasa de conversión web, coste por lead, origen del tráfico, tasa de cierre comercial y tiempo de respuesta a leads. Si no tienes estos datos, el primer paso es configurar bien la analítica antes de gastar más en captación.",
  },
  {
    q: "¿Es normal no ver resultados en los primeros meses?",
    a: "Depende del canal. Google Ads puede dar resultados en días si la web convierte. El SEO necesita varios meses. Lo importante es distinguir entre 'no funciona aún' y 'no va a funcionar nunca por un problema de base'.",
  },
  {
    q: "¿Cuándo tiene sentido hacer una auditoría digital?",
    a: "Siempre que lleves tiempo invirtiendo sin ver resultados claros, cuando vayas a cambiar de estrategia o cuando quieras escalar. La auditoría te dice dónde estás exactamente y qué acciones tienen más impacto con menos esfuerzo.",
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

const AREAS = [
  { num: "01", title: "Web y conversión", desc: "¿Tu web convierte visitas en contactos? Revisa la velocidad, el diseño en móvil, los CTAs, los formularios y los textos. Invertir en tráfico sobre una web que no convierte es tirar dinero." },
  { num: "02", title: "Propuesta de valor clara", desc: "¿Sabe un visitante en menos de 5 segundos qué haces, para quién y por qué contigo? Si la propuesta de valor no es obvia, ningún canal de captación funcionará bien." },
  { num: "03", title: "Seguimiento y analítica", desc: "¿Sabes de dónde vienen tus clientes? ¿Tienes GA4 y Search Console bien configurados? Sin datos fiables es imposible tomar buenas decisiones de inversión." },
  { num: "04", title: "Proceso comercial", desc: "¿En cuánto tiempo respondes a los leads? ¿Tienes seguimiento estructurado? Un lead sin respuesta en menos de 1h tiene 7 veces menos probabilidad de cerrar." },
  { num: "05", title: "Presupuesto realista", desc: "¿El presupuesto que destinas permite resultados medibles? El marketing con presupuesto insuficiente genera datos demasiado pequeños para optimizar y frustración innecesaria." },
  { num: "06", title: "Audiencia definida", desc: "¿Sabes exactamente a quién te diriges? Cuanto más específico sea tu cliente ideal, más efectivos serán los mensajes, los canales y la inversión." },
  { num: "07", title: "Objetivos medibles", desc: "¿Tienes objetivos concretos con plazos y métricas? 'Quiero más clientes' no es un objetivo. '20 leads cualificados al mes en 6 meses' sí lo es." },
];

export default function QueRevisarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Qué revisar antes de invertir más en marketing" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2025-04-01">1 de abril de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Qué revisar en tu empresa antes de invertir más en marketing digital
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Invertir más en marketing sin revisar la base no acelera los resultados — amplifica los errores. Este artículo te ayuda a identificar qué revisar antes de activar más acciones.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Es un patrón muy frecuente: la empresa no consigue los resultados que espera, y la respuesta instintiva es invertir más — más presupuesto en Ads, más publicaciones en redes, más acciones de SEO. Pero si el problema está en la base, más inversión solo genera más gasto con los mismos resultados pobres.
          </p>
          <p>
            El marketing digital funciona como un amplificador. Si lo que tienes es bueno, lo amplifica. Si tiene fallos, los amplifica también. Revisar estas 7 áreas antes de escalar es lo que separa las empresas que crecen de las que gastan sin resultados.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Las áreas que conviene auditar primero</h2>
          <p>La propuesta de valor y el mensaje, la web y su capacidad de conversión, el SEO, las campañas activas o previstas, la medición, el embudo comercial y la alineación entre marketing y negocio son las capas que más suelen explicar el bajo rendimiento. Si una o varias de estas piezas fallan, aumentar inversión rara vez corrige el problema principal.</p>
          <ul className="space-y-2">
            {["Propuesta de valor y claridad del mensaje", "Web, estructura de páginas y confianza", "SEO, indexación y páginas con intención", "Campañas, segmentación y calidad del tráfico", "Analítica, medición y seguimiento comercial"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás invirtiendo en marketing sin ver resultados?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a identificar exactamente qué está fallando antes de que sigas invirtiendo sin retorno. Diagnóstico sin compromiso.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar diagnóstico digital
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Señales de que se está invirtiendo sin base suficiente</h2>
          <p>Hay varios síntomas recurrentes: tráfico que no convierte, campañas con métricas de actividad pero poco negocio, falta de claridad sobre qué canal funciona mejor, leads que no se atienden bien y decisiones tomadas con prisa o intuición. Cuando ocurre esto, la prioridad no es meter más presupuesto, sino entender qué está rompiendo el sistema.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué errores se repiten</h2>
          <p>Pensar que el problema es solo de tráfico, no revisar la web antes de escalar campañas, querer hacerlo todo a la vez y medir solo clics o leads sin conectarlos con valor real son errores muy frecuentes. También es habitual invertir en canales sin haber definido bien la propuesta de valor ni el proceso comercial posterior.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Qué revisar antes de escalar</h2>
          <p>Antes de subir presupuesto, conviene revisar si la web convierte, si el mensaje es claro para el cliente correcto, si el SEO base está resuelto, si las campañas tienen datos suficientes para optimizar y si el equipo comercial puede absorber más demanda con criterio. Escalar sobre una base débil amplifica los problemas, no los resuelve.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link> · <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad para una pyme</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Revisa tu base antes de invertir más</h2>
            <p className="text-primary-200 mb-6">
              Una auditoría digital te da una imagen clara de dónde estás, qué está fallando y qué acciones tendrían más impacto. Antes de gastar más, saber más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/auditoria-digital/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de auditoría
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
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
      <RelatedArticles currentSlug="que-revisar-antes-de-invertir-mas-en-marketing-digital" />
    </>
  );
}
