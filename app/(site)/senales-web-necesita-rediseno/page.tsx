import Image from "next/image";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

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
    images: [{ url: "/og-senales-web-necesita-rediseno.jpg", width: 1200, height: 630 }],
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
    q: "¿Cómo saber si necesito un rediseño completo?",
    a: "Cuando varias señales estructurales se acumulan: mala conversión, mala UX, lentitud, mala escalabilidad y mensaje débil que ya no representa bien al negocio.",
  },
  {
    q: "¿Una web antigua puede afectar al SEO?",
    a: "Sí. Puede perjudicar rendimiento, estructura, experiencia móvil y capacidad de crear páginas útiles para captar intención de búsqueda real.",
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
          <Image
            src="/og-senales-web-necesita-rediseno.jpg"
            alt="Señales de que tu web necesita un rediseño urgente en 2025"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La pregunta correcta no es &ldquo;¿cuántos años tiene mi web?&rdquo; sino &ldquo;¿está haciendo bien su trabajo?&rdquo;. Una web que no genera contactos, que asusta a los visitantes o que no posiciona es una herramienta rota, independientemente de cuándo se hizo.
          </p>
          <p>
            Optimizar una web con problemas estructurales es como pintar un coche con el motor averiado. Hay momentos en que la solución más rentable no es parchear sino reconstruir sobre una base sólida.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué muchas webs siguen activas más tiempo del que deberían</h2>
          <p>Una web puede seguir técnicamente operativa durante años mientras acumula problemas silenciosos: mensajes que ya no representan bien al negocio, estructura que no responde a cómo busca el cliente actual, rendimiento que penaliza la experiencia y base SEO que nunca se resolvió bien. El problema es que esos problemas raramente son obvios de golpe; se acumulan despacio hasta que la web se convierte en un freno.</p>

          <h2 className="text-2xl font-bold text-primary-600">Señales que indican que algo no funciona</h2>
          <p>Hay señales técnicas, comerciales y estratégicas. Las técnicas incluyen lentitud, mala experiencia móvil y problemas de indexación. Las comerciales incluyen tráfico que no convierte, formularios que no generan oportunidades útiles y mensajes que no conectan. Las estratégicas incluyen una arquitectura que ya no refleja el negocio actual, servicios que han cambiado y una imagen que ya no transmite el nivel real de la empresa.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web tiene visitas pero no genera contactos?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web con ojos de negocio y te decimos si el problema está en el diseño, el mensaje, la velocidad o los CTAs — y si conviene optimizar o rediseñar.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión web gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo tiene sentido rediseñar y cuándo no</h2>
          <p>No siempre la respuesta correcta es rehacer desde cero. A veces basta con mejorar la arquitectura, actualizar mensajes, resolver problemas técnicos o añadir páginas bien pensadas. El rediseño completo tiene sentido cuando la base es tan limitante que no permite crecer sin arrastrar esas limitaciones.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Qué debe resolver un buen rediseño</h2>
          <p>Un rediseño bien planteado no solo cambia el aspecto visual. Debe resolver el mensaje, la arquitectura, la experiencia móvil, la base SEO, los CTAs, la medición y la escalabilidad. Si solo se cambia el diseño sin tocar la estrategia, el resultado suele ser una web más bonita con los mismos problemas de fondo.</p>

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
