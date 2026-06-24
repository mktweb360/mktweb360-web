import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo crear una propuesta de valor que atraiga a los clientes que quieres",
  description:
    "Una propuesta de valor clara es la base de cualquier estrategia de marketing efectiva. Aprende a construirla con ejemplos prácticos para pymes.",
  alternates: { canonical: "https://www.mktweb360.com/como-crear-propuesta-de-valor/" },
  openGraph: {
    title: "Cómo crear una propuesta de valor que atraiga a los clientes que quieres | Mkt Web 360",
    description: "Una propuesta de valor clara es la base de cualquier estrategia de marketing efectiva. Aprende a construirla con ejemplos prácticos para pymes.",
    url: "https://www.mktweb360.com/como-crear-propuesta-de-valor/",
    type: "article",
    images: [{ url: "/og-como-crear-propuesta-de-valor.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo crear una propuesta de valor que atraiga a los clientes que quieres",
  description: "Una propuesta de valor clara es la base de cualquier estrategia de marketing efectiva. Aprende a construirla con ejemplos prácticos para pymes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/como-crear-propuesta-de-valor/",
  mainEntityOfPage: "https://www.mktweb360.com/como-crear-propuesta-de-valor/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo crear una propuesta de valor", item: "https://www.mktweb360.com/como-crear-propuesta-de-valor/" },
  ],
};

const FAQS = [
  {
    q: "¿Qué es exactamente una propuesta de valor?",
    a: "Es la respuesta clara a por qué un cliente ideal debería elegirte a ti y no a la competencia. Explica qué problema resuelves, para quién y qué hace que tu solución sea mejor o diferente.",
  },
  {
    q: "¿En cuántas palabras debe expresarse una propuesta de valor?",
    a: "No hay un número exacto, pero debe poder entenderse en menos de 10 segundos. Si necesitas un párrafo largo para explicarla, no está bien construida todavía.",
  },
  {
    q: "¿Puede una pyme pequeña tener una propuesta de valor clara?",
    a: "Sí, y de hecho es más sencillo para una pyme porque puede ser más específica y directa que una empresa grande. La especificidad es una ventaja competitiva real.",
  },
  {
    q: "¿La propuesta de valor cambia con el tiempo?",
    a: "Puede evolucionar a medida que cambia el mercado, la empresa o el cliente objetivo. Conviene revisarla periódicamente para asegurarse de que sigue siendo relevante y diferenciadora.",
  },
  {
    q: "¿La propuesta de valor tiene que estar en la web?",
    a: "Sí, y debe estar visible en el primer pantalllazo de la página de inicio. Es lo primero que un visitante debe entender al llegar. Si no está clara en la web, se pierde una oportunidad enorme de conversión.",
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

export default function PropuestaDeValorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo crear una propuesta de valor" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo crear una propuesta de valor que atraiga a los clientes que quieres
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La propuesta de valor es la respuesta a la pregunta más importante del marketing: ¿por qué debería elegirte a ti? Si no tienes una respuesta clara, concisa y diferenciadora, todo lo que inviertas en marketing estará trabajando con un freno de mano puesto.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Muchas pymes tienen claro qué hacen, pero no saben articular por qué sus clientes deberían elegirlles a ellas en lugar de a la competencia. Esa falta de claridad se nota en los anuncios, en la web, en las conversaciones de venta y en los resultados. Una propuesta de valor bien construida es el cimiento sobre el que se apoya todo el marketing.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es una propuesta de valor y qué no es</h2>
          <p>Una propuesta de valor es una declaración clara de qué problema resuelves, para quién y qué te hace diferente o mejor. No es un slogan de marca. No es una lista de características del producto. No es "calidad y precio". Es la respuesta honesta a por qué un cliente ideal debería elegirte a ti y no a otra opción — incluyendo no hacer nada.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los tres elementos que toda propuesta de valor necesita</h2>
          <p>El primer elemento es la claridad sobre a quién va dirigida: no puedes escribir para todos a la vez sin acabar escribiendo para nadie. El segundo es la relevancia: qué problema o necesidad concreta resuelve tu propuesta para ese cliente. El tercero es la diferenciación: qué hace que tu solución sea mejor, diferente o más adecuada que las alternativas disponibles. Sin estos tres elementos, la propuesta queda débil o genérica.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo construirla desde cero</h2>
          <p>Un buen punto de partida es hablar con tus mejores clientes actuales. Pregúntales por qué te eligieron, qué problema tenían antes de contratarte y qué cambió después. Sus respuestas suelen contener la propuesta de valor mejor expresada que cualquier ejercicio interno de brainstorming. Después, contrasta esas razones con lo que ofrece la competencia para identificar dónde está la diferenciación real.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web no transmite bien lo que haces y para quién?</p>
            <p className="text-gray-600 text-sm mb-4">Podemos revisar tu presencia digital y ayudarte a articular una propuesta de valor que convierta visitantes en clientes desde el primer momento.</p>
            <Link href="/diseno-de-paginas-web/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio de diseño web
            </Link>
          </div>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Dónde debe aparecer tu propuesta de valor</h2>
          <p>La propuesta de valor debe ser visible y comprensible en menos de 10 segundos en la página de inicio de tu web. En el encabezado, antes de cualquier scroll. También debe estar presente en tus anuncios, en el perfil de redes sociales y en cualquier presentación comercial. Si necesita ser explicada, no está suficientemente bien construida. El objetivo es que sea inmediatamente clara para el cliente que sí es para ti.</p>

          <h2 className="text-2xl font-bold text-primary-600">Errores más frecuentes al definirla</h2>
          <p>Los errores más habituales son ser demasiado genérico ("calidad, compromiso y experiencia"), hablar de características en lugar de resultados para el cliente, intentar abarcar a demasiados perfiles de cliente a la vez y copiar el lenguaje de la competencia en lugar de encontrar la propia voz diferenciadora. Una propuesta de valor que podría pertenecer a cualquier competidor no es una propuesta de valor — es ruido.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad para una pyme</Link> · <Link href="/errores-digitales-negocio-nuevo/" className="text-accent-500 hover:underline">Errores digitales al montar un negocio desde cero</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Construye una estrategia digital sobre bases sólidas</h2>
            <p className="text-primary-200 mb-6">
              Ayudamos a pymes a definir y comunicar su propuesta de valor con claridad, para que el marketing funcione con tracción real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar sesión estratégica
              </Link>
              <Link href="/auditoria-digital/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver auditoría digital
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la propuesta de valor</h2>
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
            Servicio relacionado: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/marketing-de-contenidos/" className="text-accent-500 hover:underline">Marketing de Contenidos</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-crear-propuesta-de-valor" />
    </>
  );
}
