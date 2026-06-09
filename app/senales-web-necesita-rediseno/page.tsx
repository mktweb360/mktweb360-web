import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Señales de que tu web necesita un rediseño urgente en 2025",
  description:
    "Descubre las señales más claras de que tu web está frenando ventas y cuándo conviene rediseñar en lugar de seguir optimizando.",
  alternates: { canonical: "https://www.mktweb360.com/senales-web-necesita-rediseno/" },
  openGraph: {
    title: "Señales de que tu web necesita un rediseño urgente en 2025 | Mkt Web 360",
    description: "Descubre las señales más claras de que tu web está frenando ventas y cuándo conviene rediseñar en lugar de seguir optimizando.",
    url: "https://www.mktweb360.com/senales-web-necesita-rediseno/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Señales de que tu web necesita un rediseño urgente si quieres vender más",
  description: "Descubre las señales más claras de que tu web está frenando ventas y cuándo conviene rediseñar en lugar de seguir optimizando.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-04-07",
  url: "https://www.mktweb360.com/senales-web-necesita-rediseno/",
  mainEntityOfPage: "https://www.mktweb360.com/senales-web-necesita-rediseno/",
};

const FAQS = [
  {
    q: "¿Cuándo conviene rediseñar la web en lugar de optimizarla?",
    a: "Cuando los problemas son estructurales — tecnología obsoleta, diseño no adaptable a móvil, arquitectura de contenidos errónea o mensajes de marca que ya no representan a tu empresa — la optimización no es suficiente. Si el coste de optimizar supera el 60% del coste de rehacerla, suele convenir rediseñar.",
  },
  {
    q: "¿Con qué frecuencia debe rediseñarse una web?",
    a: "No hay un ciclo fijo, pero una web con más de 4-5 años suele necesitar revisión profunda: el diseño ha envejecido, la tecnología puede quedarse obsoleta y las prácticas de SEO y UX han evolucionado. Lo importante es evaluar si la web está cumpliendo su función de negocio.",
  },
  {
    q: "¿Perderé posicionamiento SEO si rediseño mi web?",
    a: "Si el rediseño se hace bien — manteniendo las URLs, los contenidos importantes y las redirecciones correctas — no deberías perder posicionamiento. Un mal rediseño sin estas precauciones sí puede causar caídas significativas. Es fundamental que el rediseño lo gestione alguien con conocimientos SEO.",
  },
  {
    q: "¿Cuánto tarda un rediseño web?",
    a: "Un rediseño profesional completo suele tardar entre 6 y 12 semanas. Proyectos más complejos con tienda online o muchas páginas de contenido pueden tardar más. Apresurarse en un rediseño suele generar problemas técnicos que se pagan después.",
  },
  {
    q: "¿Cómo sé si mi web tiene tasa de rebote alta?",
    a: "En Google Analytics 4, revisa la métrica 'Tasa de rebote' o 'Porcentaje de rebote'. Una tasa por encima del 70-80% en páginas de captación indica que los usuarios llegan y se van sin interactuar. Valores aceptables dependen del sector, pero por encima del 80% casi siempre hay un problema.",
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

export default function SenalesRedisenoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Señales de que tu web necesita rediseño" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web</span>
            <time className="text-sm text-gray-400" dateTime="2025-04-07">7 de abril de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Señales de que tu web necesita un rediseño urgente si quieres vender más
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una web puede tener visitas y aun así no generar clientes. A veces el problema no es el marketing — es la web. Estas son las señales que indican que ha llegado el momento de rediseñar.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La pregunta correcta no es &ldquo;¿cuántos años tiene mi web?&rdquo; sino &ldquo;¿está haciendo bien su trabajo?&rdquo;. Una web que no genera contactos, que asusta a los visitantes o que no posiciona es una herramienta rota, independientemente de cuándo se hizo.
          </p>
          <p>
            Optimizar una web con problemas estructurales es como pintar un coche con el motor averiado. Hay momentos en que la solución más rentable no es parchear sino reconstruir sobre una base sólida.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">8 señales de que tu web necesita un rediseño</h2>
          <ul className="space-y-3">
            {[
              { signal: "Carga lenta en móvil", desc: "Más de 3 segundos para cargar en móvil. Google lo penaliza en posicionamiento y los usuarios la abandonan antes de ver nada." },
              { signal: "Tasa de rebote superior al 80%", desc: "Los usuarios llegan y se van sin interactuar. El contenido, el diseño o la velocidad no retienen al visitante." },
              { signal: "No convierte visitas en contactos", desc: "Tráfico constante pero apenas formularios o llamadas. El problema suele estar en los CTAs, el mensaje o la confianza transmitida." },
              { signal: "Diseño anterior a 2020", desc: "Los estándares de UX, tipografía y diseño han cambiado mucho. Una web con aspecto de 2018 transmite que tu empresa también se ha quedado atrás." },
              { signal: "No es mobile-first", desc: "Si la web no está diseñada pensando primero en el móvil, Google la penaliza y los usuarios con smartphone tienen una experiencia degradada." },
              { signal: "Sin CTAs claros en cada página", desc: "El usuario no sabe qué hacer después de leer. Si no hay una acción obvia y visible, no la toma." },
              { signal: "Mensaje confuso o genérico", desc: "La web no explica claramente qué haces, para quién y por qué contigo. Si el valor no es obvio en 5 segundos, el visitante se va." },
              { signal: "Tecnología obsoleta", desc: "Flash, jQuery desactualizado, PHP 5, WordPress sin actualizar años. La deuda técnica genera vulnerabilidades y ralentiza la web." },
            ].map(({ signal, desc }) => (
              <li key={signal} className="flex items-start gap-3 p-4 border border-red-100 bg-red-50 rounded-xl">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">!</span>
                <div>
                  <span className="font-semibold text-gray-800">{signal}: </span>
                  <span className="text-gray-600 text-sm">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web tiene visitas pero no genera contactos?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web con ojos de negocio y te decimos si el problema está en el diseño, el mensaje, la velocidad o los CTAs — y si conviene optimizar o rediseñar.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión web gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">¿Rediseñar u optimizar? Cuándo conviene cada opción</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Situación</th>
                  <th className="px-4 py-3 text-left font-semibold">Rediseñar</th>
                  <th className="px-4 py-3 text-left font-semibold">Optimizar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tecnología obsoleta (Flash, PHP 5)", "✓", "✗"],
                  ["Diseño pre-2020 sin responsive", "✓", "✗"],
                  ["Mensaje de marca que ha cambiado", "✓", "Parcial"],
                  ["Velocidad lenta con buen código base", "✗", "✓"],
                  ["CTAs poco visibles", "✗", "✓"],
                  ["Arquitectura de URLs incorrecta", "✓ con cuidado", "Depende"],
                  ["Conversión baja sin otros problemas técnicos", "✗", "✓"],
                ].map(([sit, red, opt]) => (
                  <tr key={sit} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{sit}</td>
                    <td className="px-4 py-3 font-medium text-center">{red}</td>
                    <td className="px-4 py-3 font-medium text-center">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/cuanto-cuesta-pagina-web-profesional/" className="text-accent-500 hover:underline">Cuánto cuesta una página web profesional</Link> · <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad para una pyme</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Descubre si tu web está frenando resultados</h2>
            <p className="text-primary-200 mb-6">
              Hacemos una revisión técnica y de negocio de tu web y te decimos exactamente qué está fallando y si tiene más sentido optimizar o rediseñar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre rediseño web</h2>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="senales-web-necesita-rediseno" />
    </>
  );
}
