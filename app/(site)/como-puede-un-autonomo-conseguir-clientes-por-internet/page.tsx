import Image from "next/image";
﻿import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo puede un autónomo conseguir clientes por Internet en 2025",
  description:
    "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
  alternates: { canonical: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/" },
  openGraph: {
    title: "Cómo puede un autónomo conseguir clientes por Internet en 2025 | Mkt Web 360",
    description: "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
    url: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
    type: "article",
    images: [{ url: "/og-como-puede-un-autonomo-conseguir-clientes.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca",
  description: "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-05-05",
  url: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
  mainEntityOfPage: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
};

const FAQS = [
  {
    q: "¿Es mejor tener web o redes sociales?",
    a: "En muchos casos, una web sencilla y una ficha de Google bien trabajada aportan una base más sólida que depender solo de redes sociales.",
  },
  {
    q: "¿Qué debería priorizar un autónomo con poco presupuesto?",
    a: "Claridad de servicio, presencia digital mínima útil, SEO local si aplica y facilidad de contacto. Primero la base, luego los canales adicionales.",
  },
  {
    q: "¿Las redes sociales ayudan a conseguir clientes siendo autónomo?",
    a: "Depende del sector. En algunos (fotografía, diseño, hostelería) las redes son un canal de captación importante. En otros (fontanería, asesoría, instalaciones), el cliente busca en Google cuando necesita el servicio — y las redes tienen un papel secundario. No inviertas tiempo en redes si tus clientes buscan en Google.",
  },
  {
    q: "¿Cómo pido reseñas en Google sin resultar pesado?",
    a: "La forma más natural es pedir la reseña justo después de terminar el trabajo, cuando el cliente está más satisfecho. Un mensaje de WhatsApp con el enlace directo a tu ficha de Google facilita mucho el proceso. También puedes añadir el enlace en tu firma de email o en una tarjeta de visita digital.",
  },
  {
    q: "¿Puedo competir con empresas grandes siendo autónomo?",
    a: "Sí, especialmente en búsquedas locales y de nicho. Google no da preferencia automática a las empresas grandes — da preferencia a las páginas más relevantes para la búsqueda. Un autónomo bien posicionado localmente, con buenas reseñas y web optimizada, puede aparecer por encima de grandes empresas en búsquedas de su zona.",
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

export default function AutonomoClientesInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo puede un autónomo conseguir clientes por Internet" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos · Captación</span>
            <time className="text-sm text-gray-400" dateTime="2025-05-05">5 de mayo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las recomendaciones funcionan, pero son impredecibles. Construir una presencia digital te permite generar un flujo constante de clientes que te encuentran cuando te necesitan, no solo cuando alguien te recomienda.
          </p>
          <Image
            src="/og-como-puede-un-autonomo-conseguir-clientes.jpg"
            alt="Cómo puede un autónomo conseguir clientes por Internet en 2025"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El boca a boca es el canal de captación más barato — cuando funciona. El problema es que no puedes controlarlo ni escalarlo. Hay meses buenos y meses en que el teléfono no suena. Construir presencia digital es construir un sistema de captación que trabaja para ti aunque estés en una obra, en una reunión o durmiendo.
          </p>
          <p>
            No hace falta una presencia digital compleja ni una inversión grande. La mayoría de autónomos que consiguen clientes online lo hacen con tres elementos bien ejecutados: una ficha de Google optimizada, una web con la página de su servicio bien escrita y reseñas activas. Eso ya marca la diferencia frente a la mayoría de la competencia.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué necesita de verdad un autónomo</h2>
          <p>Un autónomo necesita ser encontrado cuando alguien busca lo que ofrece, generar confianza rápida y facilitar el contacto sin fricción. No necesita una presencia digital enorme ni estar en todos los canales. Necesita que los canales que usa estén bien ejecutados y orientados a generar oportunidades reales, no solo visibilidad.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué priorizar si el presupuesto es limitado</h2>
          <p>La ficha de Google bien hecha, una página de servicio clara en la web y reseñas activas son la base que más retorno da con menos inversión. Están orientadas exactamente a cuando el potencial cliente tiene intención de buscar y contratar. Añadir más canales antes de tener esa base sólida suele diluir el esfuerzo sin mejorar los resultados.</p>
          <ul className="space-y-2">
            {["Ficha de Google con fotos reales, servicios y zona", "Página de servicio que explica qué haces, para quién y cómo contactar", "Reseñas pedidas activamente después de cada trabajo"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Dependes demasiado de recomendaciones para conseguir trabajo?</p>
            <p className="text-gray-600 text-sm mb-4">Te orientamos sobre qué pasos tiene más sentido dar en tu caso para construir una presencia digital que genere clientes de forma constante, con la inversión adecuada a tu momento.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar sobre mi situación
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Web, ficha de Google o redes: qué va primero</h2>
          <p>En la mayoría de sectores de servicios, la ficha de Google va primero porque capta demanda activa con muy poco esfuerzo. La web va segundo porque refuerza la credibilidad y permite posicionar búsquedas orgánicas. Las redes sociales, en la mayoría de casos, tienen un papel más de mantenimiento de imagen que de captación directa. Si el tiempo es limitado, en esas prioridades conviene centrarse.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Plan mínimo viable</h2>
          <p>Ficha de Google creada y verificada, fotos reales del trabajo, descripción clara del servicio, cinco o más reseñas, una página web sencilla con la información clave, teléfono clickable en móvil y formulario de contacto. Con eso bien resuelto, un autónomo tiene una base que muchos competidores no tienen, y desde ahí ya se puede crecer con criterio.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> · <Link href="/cuanto-cuesta-pagina-web-profesional/" className="text-accent-500 hover:underline">Cuánto cuesta una página web profesional</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Construye una base digital que te ayude a captar mejor</h2>
            <p className="text-primary-200 mb-6">
              Te orientamos sobre qué pasos dar en función de tu situación actual, tu sector y tu presupuesto. Sin humo, sin soluciones que no necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico gratuito
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre captación online para autónomos</h2>
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
            Servicios relacionados: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO Local</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-puede-un-autonomo-conseguir-clientes-por-internet" />
    </>
  );
}
