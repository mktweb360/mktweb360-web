import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

// 09/10/2026 — la URL se reaprovecha como captador: auditoría SEO + GEO gratuita (decisión de Manué).
// Entregable definido en 01-Proyectos/2026-10 Auditoria gratuita (OneDrive) y skill auditoria-seo-geo-gratuita.
// Proceso inicial manual: la solicitud llega por correo/MktOS, Manué pasa el dominio, se genera el informe y
// se envía desde nuestro correo. El plazo de 48 h laborables debe poder cumplirse con ese proceso.

const URL = "https://www.mktweb360.com/auditoria-digital/";

export const metadata: Metadata = {
  title: "Auditoría SEO gratuita de tu web en 48 h",
  description:
    "Auditoría SEO y GEO gratuita: errores técnicos, palabras clave con oportunidad, visibilidad en asistentes de IA, competencia y plan de mejora con propuesta.",
  alternates: alternatesFor("/auditoria-digital/") ?? { canonical: URL },
  openGraph: {
    title: "Auditoría SEO gratuita de tu web en 48 h | Mkt Web 360",
    description: "Te enviamos por correo un diagnóstico SEO y de visibilidad en IA de tu web, con las 3 acciones que más impacto tendrían y una propuesta para aplicarlas.",
    url: URL,
    images: [{ url: "/og-auditoria-digital.jpg", width: 1200, height: 630 }],
  },
};

const ENTREGABLE = [
  { t: "Estado técnico", d: "Los errores que más frenan tu web en Google, ordenados por prioridad: indexación, rastreo, velocidad en móvil, datos estructurados y enlaces rotos." },
  { t: "Visibilidad actual", d: "Por qué búsquedas apareces hoy y en qué posiciones. Los datos de herramientas externas se indican como estimación." },
  { t: "10 oportunidades de palabras clave", d: "Búsquedas reales de tus clientes en las que puedes competir, con la página de tu web que debería trabajarlas." },
  { t: "Visibilidad en asistentes de IA", d: "Si los asistentes de IA citan tu web o mencionan tu marca cuando alguien busca lo que ofreces." },
  { t: "Tu competencia", d: "Tres competidores que aparecen por delante de ti y qué están haciendo mejor." },
  { t: "Plan de mejora y propuesta", d: "Las 3 acciones con más impacto y una propuesta con plan y precio para aplicarlas, si quieres que lo hagamos nosotros." },
];

const PASOS = [
  { n: "01", t: "Nos dejas tu web", d: "Rellenas el formulario con la web que quieres auditar y qué te gustaría conseguir." },
  { n: "02", t: "Analizamos", d: "Revisamos tu web con herramientas profesionales y criterio experto. No es un informe automático: cada hallazgo se comprueba." },
  { n: "03", t: "Te lo enviamos por correo", d: "En un máximo de 48 horas laborables recibes el informe con el plan de mejora y la propuesta." },
  { n: "04", t: "Decides tú", d: "Puedes aplicar las mejoras por tu cuenta o pedirnos que lo hagamos. Sin compromiso." },
];

const FAQS = [
  { q: "¿La auditoría SEO es realmente gratuita?", a: "Sí. No tiene coste ni compromiso. Al final del informe incluimos una propuesta para aplicar las mejoras, por si quieres que lo hagamos nosotros; aceptarla o no es decisión tuya." },
  { q: "¿Cuánto tarda?", a: "La recibes por correo electrónico en un máximo de 48 horas laborables desde tu solicitud." },
  { q: "¿Necesitáis acceso a mi web o a Google Search Console?", a: "No para la auditoría gratuita: trabajamos con lo que es público. Si nos das acceso de lectura a Search Console, el diagnóstico es más preciso porque se basa en tus datos reales de Google." },
  { q: "¿Qué diferencia hay con una auditoría digital completa?", a: "La gratuita se centra en SEO y visibilidad en IA. Si necesitas además revisar analítica, redes sociales o publicidad, lo indicas en el formulario y te preparamos una propuesta de auditoría completa." },
  { q: "¿Para qué webs es?", a: "Para webs de empresas, pymes y profesionales que venden o prestan servicios en España: webs corporativas, de servicios y tiendas online." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Auditoría SEO y GEO gratuita",
  serviceType: "Auditoría SEO",
  provider: { "@id": "https://www.mktweb360.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: URL,
  offers: { "@type": "Offer", price: 0, priceCurrency: "EUR", description: "Informe por correo en un máximo de 48 horas laborables" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AuditoriaSeoGratuitaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Auditoría SEO gratuita" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Auditoría SEO gratuita de tu web<br />
              <span className="text-accent-400">en 48 horas, en tu correo</span>
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              Te decimos qué está frenando tu web en Google y en los asistentes de IA, qué búsquedas puedes ganar y qué harías primero. Con un plan de mejora y una propuesta para aplicarlo.
            </p>
            <ul className="space-y-2 text-primary-100">
              <li>✓ Sin coste y sin compromiso</li>
              <li>✓ Revisado por un especialista, no un informe automático</li>
              <li>✓ SEO + visibilidad en IA (GEO) en el mismo informe</li>
            </ul>
          </div>
          <div id="solicitar" className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <h2 className="text-xl font-bold text-primary-700 mb-1">Solicita tu auditoría</h2>
            <p className="text-sm text-gray-500 mb-4">Te la enviamos a tu correo en un máximo de 48 horas laborables.</p>
            <ContactForm
              formType="auditoria"
              websiteRequired
              messagePlaceholder="¿Qué te gustaría conseguir con tu web? (más clientes de tu zona, vender online, aparecer en la IA…) ¿Inviertes ya en SEO o publicidad?"
              submitLabel="Quiero mi auditoría gratuita"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué recibes en la auditoría</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un informe claro, sin jerga innecesaria, que puedes usar aunque no trabajes con nosotros.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTREGABLE.map((e, i) => (
              <div key={e.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <span className="text-accent-500 font-bold text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-primary-700 mt-2 mb-2">{e.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PASOS.map((p) => (
              <div key={p.n} className="text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-primary-600 text-white font-bold items-center justify-center mb-3">{p.n}</span>
                <h3 className="font-bold text-primary-700 mb-2">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600 mb-2">Por qué empezar por una auditoría</h2>
          <p>Antes de invertir en SEO, publicidad o una web nueva, conviene saber dónde estás. La auditoría te dice qué corregir primero, qué puede esperar y qué no merece la pena hacer todavía.</p>
          <p>Los problemas que más encontramos son siempre parecidos: páginas que compiten entre sí por la misma búsqueda, titulares que no dicen a Google qué servicio ofrece la página, medición que no registra los contactos, imágenes que disparan el tiempo de carga en móvil y redirecciones mal planteadas tras una migración.</p>
          <p>Hoy hay además una capa nueva: los asistentes de IA. Una web puede aparecer como fuente en sus respuestas sin que la marca se llegue a nombrar. La auditoría también revisa eso.</p>
          <p>Si después quieres que lo hagamos nosotros, tienes los <Link href="/precios-seo/" className="text-accent-700 underline underline-offset-2">planes y precios SEO</Link> publicados.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#solicitar" className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">Solicitar mi auditoría gratuita</a>
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento" />
    </>
  );
}
