import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Qué puede automatizar una pyme en marketing y ventas en 2025",
  description:
    "Descubre qué procesos puede automatizar una pyme en marketing y ventas para ahorrar tiempo, mejorar seguimiento y captar mejor.",
  alternates: { canonical: "https://www.mktweb360.com/que-puede-automatizar-una-pyme-en-marketing-y-ventas/" },
  openGraph: {
    title: "Qué puede automatizar una pyme en marketing y ventas en 2025 | Mkt Web 360",
    description: "Descubre qué procesos puede automatizar una pyme en marketing y ventas para ahorrar tiempo, mejorar seguimiento y captar mejor.",
    url: "https://www.mktweb360.com/que-puede-automatizar-una-pyme-en-marketing-y-ventas/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Qué puede automatizar una pyme en marketing y ventas para ahorrar tiempo y captar mejor",
  description: "Descubre qué procesos puede automatizar una pyme en marketing y ventas para ahorrar tiempo, mejorar seguimiento y captar mejor.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-04-28",
  url: "https://www.mktweb360.com/que-puede-automatizar-una-pyme-en-marketing-y-ventas/",
  mainEntityOfPage: "https://www.mktweb360.com/que-puede-automatizar-una-pyme-en-marketing-y-ventas/",
};

const FAQS = [
  {
    q: "¿Qué herramientas de automatización son adecuadas para una pyme?",
    a: "Para una pyme, las herramientas con mejor relación coste-beneficio son: HubSpot (CRM + automatización gratuita limitada), Mailchimp o Brevo para email automation, Make (antes Integromat) o Zapier para conectar aplicaciones, y Meta Business Suite para publicaciones programadas en redes sociales.",
  },
  {
    q: "¿Cuánto cuesta implementar automatización de marketing en una pyme?",
    a: "Hay opciones gratuitas que cubren necesidades básicas (HubSpot Free, Brevo, Zapier con límites). Para una automatización más completa, el coste suele estar entre 50 € y 300 € al mes en herramientas, más el tiempo de configuración inicial. El retorno suele verse en semanas si se implementa bien.",
  },
  {
    q: "¿La automatización reduce la calidad de la atención al cliente?",
    a: "Solo si se abusa de ella. La automatización bien diseñada mejora la atención: responde más rápido, no se olvida de hacer seguimiento y da información más precisa. El error es automatizar también las partes que requieren juicio humano y relación personal.",
  },
  {
    q: "¿Necesito conocimientos técnicos para automatizar procesos de marketing?",
    a: "No necesariamente. Herramientas como Zapier, Make o HubSpot tienen interfaces visuales sin código que permiten crear automatizaciones básicas sin programación. Para automatizaciones más complejas o integradas con sistemas propios, puede necesitarse ayuda técnica.",
  },
  {
    q: "¿Por dónde empezar a automatizar en una pyme?",
    a: "Por los procesos con mayor impacto y menor complejidad: la notificación automática de nuevos leads al equipo comercial, el email de confirmación de contacto al cliente y la programación de publicaciones en redes sociales. Estos tres cambios solos pueden ahorrar horas semanales y mejorar el tiempo de respuesta.",
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

export default function AutomatizarPymePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Qué puede automatizar una pyme en marketing y ventas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Automatización</span>
            <time className="text-sm text-gray-400" dateTime="2025-04-28">28 de abril de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Qué puede automatizar una pyme en marketing y ventas para ahorrar tiempo y captar mejor
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La automatización no es solo para grandes empresas. Una pyme puede ahorrar horas semanales y mejorar el seguimiento de leads con herramientas accesibles y configuraciones sencillas.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El mayor coste oculto de muchas pymes no está en las herramientas ni en la publicidad — está en el tiempo que el equipo dedica a tareas repetitivas que podrían hacerse solas: responder siempre lo mismo, hacer seguimiento manual de leads, publicar en redes una por una, o enviar presupuestos sin sistema.
          </p>
          <p>
            Automatizar no significa eliminar el trato humano — significa liberarlo para donde más importa. Las conversaciones de valor, las decisiones complejas y la relación con el cliente siguen necesitando personas. Lo que no las necesita son las tareas administrativas repetitivas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Procesos de marketing y ventas que conviene automatizar</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Proceso</th>
                  <th className="px-4 py-3 text-left font-semibold">¿Conviene automatizar?</th>
                  <th className="px-4 py-3 text-left font-semibold">Impacto</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Notificación de nuevo lead al comercial", "Sí — alta prioridad", "Reduce tiempo de respuesta de horas a minutos"],
                  ["Email de confirmación al lead", "Sí — alta prioridad", "Mejora percepción de profesionalidad y reduce ansiedad del cliente"],
                  ["Programación de publicaciones en RRSS", "Sí — muy recomendable", "Ahorra 2–4h semanales y mantiene consistencia"],
                  ["Seguimiento de leads sin respuesta", "Sí — si tienes CRM", "Recupera entre 15–30% de leads que no responden al primer contacto"],
                  ["Envío de newsletter mensual", "Sí — con segmentación", "Mantiene relación con base de datos sin esfuerzo semanal"],
                  ["Informe mensual de métricas", "Sí — con herramientas BI", "Ahorra tiempo de análisis y mejora la toma de decisiones"],
                  ["Solicitud de reseñas post-servicio", "Sí — muy recomendable", "Multiplica el número de reseñas en Google sin esfuerzo"],
                  ["Clasificación automática de leads", "Sí — si tienes volumen", "Prioriza el tiempo comercial en los leads con mayor potencial"],
                ].map(([proc, conviene, impacto]) => (
                  <tr key={proc} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{proc}</td>
                    <td className="px-4 py-3 text-green-700 font-medium text-xs">{conviene}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{impacto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Pierdes tiempo en tareas repetitivas que podrían automatizarse?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a identificar qué procesos tiene más sentido automatizar en tu empresa según tu volumen, equipo y herramientas disponibles.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar sobre automatización
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Flujo de ejemplo: del lead a la primera llamada</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex flex-col gap-3">
              {[
                { step: "1", label: "Lead entra por formulario web", icon: "📩" },
                { step: "2", label: "CRM crea ficha automáticamente y clasifica por servicio", icon: "🗂️" },
                { step: "3", label: "Comercial recibe alerta en móvil en menos de 1 minuto", icon: "📱" },
                { step: "4", label: "Lead recibe email de confirmación con info de próximos pasos", icon: "✉️" },
                { step: "5", label: "Si no hay respuesta en 48h, seguimiento automático", icon: "🔄" },
              ].map(({ step, label, icon }) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">{step}</span>
                  <span className="text-2xl shrink-0">{icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué NO conviene automatizar</h2>
          <ul className="space-y-3">
            {[
              { proc: "La primera conversación comercial", razon: "El cliente quiere sentir que habla con una persona, no con un bot. La primera llamada o reunión define la relación." },
              { proc: "La gestión de reclamaciones", razon: "Una reclamación mal gestionada de forma automática se convierte en reseña negativa. Requiere empatía y juicio humano." },
              { proc: "La estrategia y el mensaje de marca", razon: "La automatización ejecuta — no decide. La dirección estratégica, el tono y la identidad no pueden delegarse a una herramienta." },
              { proc: "Las decisiones de inversión en marketing", razon: "Los datos automatizados son inputs para la decisión humana, no sustitutos de ella. La interpretación y el contexto requieren personas." },
            ].map(({ proc, razon }) => (
              <li key={proc} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                <div>
                  <span className="font-semibold text-gray-800">{proc}: </span>
                  <span className="text-gray-600 text-sm">{razon}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/ia-aplicada-a-marketing-valor-real-o-humo/" className="text-accent-500 hover:underline">IA aplicada a marketing: dónde aporta valor real</Link> · <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad para una pyme</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Detecta qué procesos conviene automatizar de verdad</h2>
            <p className="text-primary-200 mb-6">
              No toda automatización tiene el mismo impacto. Te ayudamos a priorizar qué automatizar primero según tu situación y herramientas disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico digital
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Hablar con un especialista
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre automatización en pymes</h2>
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
      <RelatedArticles currentSlug="que-puede-automatizar-una-pyme-en-marketing-y-ventas" />
    </>
  );
}
