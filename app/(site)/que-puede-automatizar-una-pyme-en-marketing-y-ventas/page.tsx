import Image from "next/image";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

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
    images: [{ url: "/og-que-puede-automatizar-una-pyme.jpg", width: 1200, height: 630 }],
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
    q: "¿Qué conviene automatizar primero?",
    a: "Normalmente la entrada y clasificación de leads, el seguimiento inicial y ciertas tareas repetitivas con alto volumen y bajo criterio necesario.",
  },
  {
    q: "¿La automatización sustituye al equipo comercial?",
    a: "No. Lo refuerza. Ayuda a no perder oportunidades y a reducir trabajo manual, pero el criterio humano sigue siendo clave en las decisiones importantes.",
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
          <Image
            src="/og-que-puede-automatizar-una-pyme.jpg"
            alt="Qué puede automatizar una pyme en marketing y ventas en 2025"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El mayor coste oculto de muchas pymes no está en las herramientas ni en la publicidad — está en el tiempo que el equipo dedica a tareas repetitivas que podrían hacerse solas: responder siempre lo mismo, hacer seguimiento manual de leads, publicar en redes una por una, o enviar presupuestos sin sistema.
          </p>
          <p>
            Automatizar no significa eliminar el trato humano — significa liberarlo para donde más importa. Las conversaciones de valor, las decisiones complejas y la relación con el cliente siguen necesitando personas. Lo que no las necesita son las tareas administrativas repetitivas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué problemas resuelve de verdad</h2>
          <p>La automatización resuelve principalmente tres problemas: la pérdida de oportunidades por tiempo de respuesta lento, la falta de seguimiento sistemático a leads que no responden al primer contacto, y el desgaste de tiempo en tareas repetitivas que no necesitan criterio humano. Son problemas reales con coste de negocio concreto, y la automatización tiene mucho sentido en ellos.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué no conviene automatizar todavía</h2>
          <p>La primera conversación comercial real, la gestión de reclamaciones, las decisiones estratégicas y cualquier interacción donde el contexto y la empatía son determinantes no son buenos candidatos. Automatizar esas partes suele alejar al cliente o generar fricciones que costaban menos resolverse de forma humana directa.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Pierdes tiempo en tareas repetitivas que podrían automatizarse?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a identificar qué procesos tiene más sentido automatizar en tu empresa según tu volumen, equipo y herramientas disponibles.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar sobre automatización
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo empezar bien</h2>
          <p>Lo más útil suele ser empezar por automatizaciones simples con impacto inmediato: notificación de lead al comercial, email de confirmación al contacto, solicitud de reseña tras el servicio. Estas tres acciones son fáciles de implementar con herramientas accesibles, tienen un efecto claro y no requieren transformar todo el proceso desde cero.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Qué debe buscar una pyme</h2>
          <p>Una pyme no necesita la automatización más compleja, sino la más adecuada a su momento. Herramientas modulares, fáciles de ajustar y que no requieran mantenimiento intensivo son mejores opciones que sistemas potentes pero frágiles o difíciles de supervisar. El objetivo es liberar tiempo y reducir errores, no añadir complejidad operativa.</p>

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
