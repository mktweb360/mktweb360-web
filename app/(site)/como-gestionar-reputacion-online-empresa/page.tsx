import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo gestionar la reputación online de tu empresa: guía práctica 2026",
  description:
    "La reputación online se construye o destruye en público. Descubre cómo gestionarla con criterio: reseñas, menciones, respuestas y prevención de crisis.",
  alternates: { canonical: "https://www.mktweb360.com/como-gestionar-reputacion-online-empresa/" },
  openGraph: {
    title: "Cómo gestionar la reputación online de tu empresa: guía práctica 2026 | Mkt Web 360",
    description: "La reputación online se construye o destruye en público. Descubre cómo gestionarla con criterio: reseñas, menciones, respuestas y prevención de crisis.",
    url: "https://www.mktweb360.com/como-gestionar-reputacion-online-empresa/",
    type: "article",
    images: [{ url: "/og-como-gestionar-reputacion-online-empresa.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo gestionar la reputación online de tu empresa: guía práctica 2026",
  description: "La reputación online se construye o destruye en público. Descubre cómo gestionarla con criterio: reseñas, menciones, respuestas y prevención de crisis.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/como-gestionar-reputacion-online-empresa/",
  mainEntityOfPage: "https://www.mktweb360.com/como-gestionar-reputacion-online-empresa/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo gestionar la reputación online", item: "https://www.mktweb360.com/como-gestionar-reputacion-online-empresa/" },
  ],
};

const FAQS = [
  {
    q: "¿Puedo eliminar una reseña negativa de Google?",
    a: "Solo si incumple las políticas de Google (spam, contenido inapropiado, conflicto de intereses). Si es una opinión legítima aunque injusta, no puede eliminarse. La mejor respuesta es contestar con profesionalidad y trabajar en conseguir más reseñas positivas.",
  },
  {
    q: "¿Debo responder a todas las reseñas?",
    a: "Sí, especialmente a las negativas. Responder muestra que el negocio está activo y se preocupa por sus clientes. Para las positivas, un agradecimiento breve es suficiente.",
  },
  {
    q: "¿Cómo sé qué se dice de mi empresa en internet?",
    a: "Configurar alertas de Google con el nombre de tu empresa es el primer paso, gratuito e inmediato. También puedes revisar periódicamente Google, Trustpilot, las redes sociales y los portales específicos de tu sector.",
  },
  {
    q: "¿Una sola reseña negativa puede arruinar mi reputación?",
    a: "Raramente, si hay un volumen suficiente de reseñas positivas. Lo que daña la reputación es tener pocas reseñas, que la mayoría sean negativas, o no responder a las críticas. Una reseña negativa bien respondida puede incluso transmitir profesionalidad.",
  },
  {
    q: "¿Es útil tener testimonios en la web además de reseñas en Google?",
    a: "Sí. Los testimonios en web complementan las reseñas de Google. Ayudan a construir confianza en la página y permiten mostrar casos de uso específicos que Google no siempre permite en las reseñas.",
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

export default function ReputacionOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo gestionar la reputación online de tu empresa" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo gestionar la reputación online de tu empresa: guía práctica 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Antes de contratar, la mayoría de personas busca opiniones sobre el negocio. Lo que encuentran — reseñas, menciones, respuestas — forma la primera impresión que determina si te llaman o se van a la competencia. Gestionar eso no es opcional.
          </p>
          <Image
            src="/og-como-gestionar-reputacion-online-empresa.jpg"
            alt="Cómo gestionar la reputación online de tu empresa: guía práctica 2026"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La reputación online ya no es solo para grandes marcas. Cualquier negocio — un fontanero, una clínica, una tienda local — tiene una reputación digital que se construye o destruye en reseñas, redes sociales y foros. La diferencia entre gestionarla activamente o ignorarla puede ser la diferencia entre crecer o perder clientes silenciosamente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es la reputación online y por qué importa</h2>
          <p>La reputación online es la percepción pública que se forma sobre tu empresa a partir de lo que aparece en internet: reseñas de Google, menciones en redes sociales, artículos, opiniones en plataformas sectoriales. Es el equivalente digital del boca a boca — pero permanente, visible para todos y accesible antes de cualquier contacto directo. No gestionarla no significa que no exista — significa que la están construyendo otros sin tu participación.</p>

          <h2 className="text-2xl font-bold text-primary-600">Las reseñas: el pilar más visible</h2>
          <p>Las reseñas de Google son el activo de reputación más importante para la mayoría de negocios locales. Influyen en el posicionamiento en Google Maps, en el CTR de los resultados y en la decisión de compra. La estrategia de reseñas tiene tres partes: pedir activamente después de cada servicio bien terminado, responder a todas (positivas y negativas) con profesionalidad, y nunca comprar ni fabricar reseñas falsas — Google las detecta y penaliza.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo responder a las reseñas negativas</h2>
          <p>Una reseña negativa bien respondida puede ser más poderosa que diez reseñas positivas sin respuesta. La clave es no ponerse a la defensiva, agradecer el feedback aunque sea injusto, explicar si hubo algún malentendido y ofrecer resolver el problema por un canal privado. El objetivo no es ganar la discusión — es demostrar a quien lee la respuesta que el negocio es profesional y responsable.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres mejorar la percepción digital de tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a construir una presencia online que transmita confianza: desde la ficha de Google hasta la web y los contenidos que refuerzan tu credibilidad.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar diagnóstico de reputación online
            </Link>
          </div>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Monitorizar menciones y alertas</h2>
          <p>Saber qué se dice de tu empresa en internet es el primer paso para gestionarlo. Configurar alertas de Google con el nombre del negocio, revisar periódicamente las principales plataformas de reseñas de tu sector y tener un proceso para detectar menciones en redes sociales permite actuar a tiempo en lugar de descubrir problemas cuando ya se han amplificado.</p>

          <h2 className="text-2xl font-bold text-primary-600">La prevención es más barata que la gestión de crisis</h2>
          <p>La mayoría de crisis de reputación online son evitables. Procesos de atención al cliente claros, comunicación proactiva cuando algo sale mal antes de que el cliente lo publique, y una política coherente de resolución de problemas reducen drásticamente la probabilidad de que un incidente se convierta en una crisis pública. La reputación se construye en el día a día — no solo cuando hay un problema.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/google-my-business-empresas-guia/" className="text-accent-500 hover:underline">Google Business Profile para empresas: guía completa</Link> · <Link href="/como-crear-propuesta-de-valor/" className="text-accent-500 hover:underline">Cómo crear una propuesta de valor que atraiga a los clientes que quieres</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Construye una reputación online que trabaje para ti</h2>
            <p className="text-primary-200 mb-6">
              Te ayudamos a gestionar tu presencia digital de forma que transmita confianza, genere más reseñas positivas y proteja tu reputación a largo plazo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO Local
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre reputación online</h2>
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
            Servicio relacionado: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-gestionar-reputacion-online-empresa" />
    </>
  );
}
