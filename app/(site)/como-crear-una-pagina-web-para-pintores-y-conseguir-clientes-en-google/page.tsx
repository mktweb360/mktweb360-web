import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Crear una Página Web para Pintores y Conseguir Clientes en Google",
  description: "Guía completa para pintores y empresas de pintura que quieren tener presencia online y conseguir clientes a través de Google. Secciones imprescindibles, SEO local y más.",
  alternates: { canonical: "https://www.mktweb360.com/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/" },
  openGraph: {
    title: "Página Web para Pintores: Guía Completa para Conseguir Clientes | Mkt Web 360",
    description: "Cómo crear una web para una empresa de pintura y posicionarla en Google para conseguir clientes locales.",
    url: "https://www.mktweb360.com/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/",
    type: "article",
    images: [{ url: "/og-como-crear-una-pagina-web-para-pintores.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Crear una Página Web para Pintores y Conseguir Clientes en Google",
  description: "Guía para pintores que quieren presencia online y clientes desde Google.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2024-02-20",
  url: "https://www.mktweb360.com/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/",
  mainEntityOfPage: "https://www.mktweb360.com/como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google/",
};

export default function PaginaWebPintoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Página Web para Pintores" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web</span>
            <time className="text-sm text-gray-400" dateTime="2024-02-20">20 de febrero de 2024</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo Crear una Página Web para Pintores y Conseguir Clientes en Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una web profesional es la herramienta más potente para que una empresa de pintura capte nuevos clientes. Te explicamos todo lo que necesitas saber para tener presencia online y posicionarte en Google.
          </p>
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Por qué un pintor necesita página web?</h2>
          <p>El 80% de los consumidores busca en internet antes de contratar cualquier servicio del hogar, incluyendo empresas de pintura. Sin presencia web, estás perdiendo esos clientes ante la competencia que sí aparece en Google.</p>
          <p>Una página web profesional no solo te hace visible: transmite confianza, muestra tu trabajo y te diferencia de los pintores que solo tienen un número de teléfono en un directorio.</p>

          <h2 className="text-2xl font-bold text-primary-600">Secciones imprescindibles en la web de un pintor</h2>

          <h3 className="text-xl font-semibold text-primary-700">1. Página de inicio con propuesta de valor clara</h3>
          <p>El visitante debe entender en 3 segundos qué haces, dónde trabajas y por qué debe elegirte. Incluye un titular claro (&ldquo;Empresa de pintura en Madrid — Presupuesto sin compromiso en 24h&rdquo;), una breve descripción de tus servicios y un botón de llamada a la acción visible.</p>

          <h3 className="text-xl font-semibold text-primary-700">2. Portfolio de trabajos con fotos antes/después</h3>
          <p>Las imágenes del antes y después son el elemento más persuasivo para un pintor. Los clientes quieren ver la calidad de tu trabajo antes de contratarte. Invierte en buenas fotos: son la diferencia entre recibir una llamada o no.</p>
          <p>Organiza el portfolio por tipo de trabajo: pintura interior, exterior, fachadas, decorativos, industriales, etc. Así es más fácil que el cliente encuentre algo similar a lo que necesita.</p>

          <h3 className="text-xl font-semibold text-primary-700">3. Servicios detallados</h3>
          <p>Crea una página específica para cada tipo de servicio: pintura de pisos, pintura de fachadas, pintura industrial, pintura decorativa, microcemento, etc. Cada página debe explicar el proceso, los materiales que usas y el resultado que puede esperar el cliente.</p>

          <h3 className="text-xl font-semibold text-primary-700">4. Reseñas y testimonios de clientes</h3>
          <p>Las reseñas de Google son fundamentales. Muéstralas en tu web y facilita que los clientes satisfechos te dejen valoraciones. Un pintor con 50 reseñas de 5 estrellas tiene una ventaja competitiva enorme frente a otro sin reseñas.</p>

          <h2 className="text-2xl font-bold text-primary-600">SEO local para pintores: palabras clave que funcionan</h2>
          <p>Las búsquedas más efectivas para una empresa de pintura son:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>pintor [ciudad] — la búsqueda más competida pero también la más buscada</li>
            <li>empresa de pintura [ciudad] — más específica, menor competencia</li>
            <li>pintor de pisos [ciudad] — intención de compra clara</li>
            <li>pintar fachada [ciudad] — búsqueda de trabajo concreto</li>
            <li>presupuesto pintura [ciudad] — usuario listo para contratar</li>
          </ul>
          <p>Cada una de estas keywords merece su propia página o sección en la web, con contenido relevante y orientado a resolver las dudas del cliente.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Google Business Profile: el complemento perfecto</h2>
          <p>Además de la web, es imprescindible tener una ficha de Google Business Profile bien optimizada. Esta ficha te permite aparecer en el Pack Local de Google (el mapa) cuando alguien busca &ldquo;pintor cerca de mí&rdquo; o &ldquo;empresa de pintura [ciudad]&rdquo;.</p>
          <p>Añade fotos de tus trabajos, mantén el horario actualizado, responde a todas las reseñas y publica actualizaciones periódicas para mantener la ficha activa.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una web profesional para tu empresa de pintura?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 diseñamos webs para empresas de pintura y las posicionamos en Google. Solicita un presupuesto sin compromiso.</p>
            <Link href="/diseno-de-paginas-web/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio de diseño web
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google" />
    </>
  );
}
