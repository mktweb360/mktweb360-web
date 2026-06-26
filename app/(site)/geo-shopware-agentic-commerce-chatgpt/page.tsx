import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "GEO para Shopware: vende desde ChatGPT con Agentic Commerce",
  description:
    "Shopware 6.7.9 trae Agentic Commerce nativo. Prepara tu tienda con GEO para que ChatGPT y Perplexity recomienden y vendan tus productos directamente.",
  alternates: { canonical: "https://www.mktweb360.com/geo-shopware-agentic-commerce-chatgpt/" },
  openGraph: {
    title: "GEO para Shopware: vende desde ChatGPT con Agentic Commerce | Mkt Web 360",
    description: "GEO y Agentic Commerce en Shopware 6.7.9: prepara tu tienda para que ChatGPT y Perplexity recomienden y vendan tus productos.",
    url: "https://www.mktweb360.com/geo-shopware-agentic-commerce-chatgpt/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "GEO para Shopware: vende desde ChatGPT con Agentic Commerce",
  description: "Shopware 6.7.9 trae Agentic Commerce nativo. Prepara tu tienda con GEO para que ChatGPT y Perplexity recomienden y vendan tus productos directamente.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/geo-shopware-agentic-commerce-chatgpt/",
  mainEntityOfPage: "https://www.mktweb360.com/geo-shopware-agentic-commerce-chatgpt/",
};

const FAQS = [
  { q: "¿Qué es el Agentic Commerce de Shopware?", a: "Es una funcionalidad nativa desde Shopware 6.7.9: una API que permite a asistentes de IA como ChatGPT y Perplexity descubrir, recomendar y facilitar la compra de tus productos directamente desde la conversación, sin pasar por la web tradicional." },
  { q: "¿Qué es el GEO aplicado a una tienda online?", a: "Es optimizar tu tienda para que los motores de IA la citen y recomienden cuando alguien pide consejo de producto. Equivale a posicionar, pero en ChatGPT, Perplexity o Gemini en lugar de en Google." },
  { q: "¿Tengo que dejar que los bots de IA entren en mi web?", a: "Sí, si quieres aparecer en sus respuestas. El robots.txt debe permitir GPTBot, ClaudeBot y PerplexityBot. Si los bloqueas, la IA no puede conocer ni recomendar tu catálogo." },
  { q: "¿Qué necesita mi tienda para vender por Agentic Commerce?", a: "Una API de catálogo rápida, stock en tiempo real y datos de producto completos y estructurados. La IA consulta en directo, así que la información tiene que estar siempre actualizada y bien marcada." },
  { q: "¿Por qué interesa adelantarse en GEO ahora?", a: "Porque casi nadie lo trabaja todavía. Muy pocas agencias combinan Shopware y GEO en España, y preparar tu tienda ahora te da presencia en la IA antes de que el canal se sature, igual que pasó con el SEO en sus inicios." },
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

export default function GeoShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "GEO para Shopware y Agentic Commerce" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Shopware · GEO</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            GEO para Shopware: vende desde ChatGPT con Agentic Commerce
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Shopware 6.7.9 trae Agentic Commerce nativo y muy pocas tiendas lo aprovechan. Te explicamos cómo preparar la tuya para vender a través de la IA antes que tu competencia.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>El comercio electrónico está a punto de cambiar de canal. Cada vez más clientes no buscan productos en Google: se los piden a ChatGPT o Perplexity. Shopware ha sido de las primeras plataformas en responder a ese cambio con Agentic Commerce nativo, y las tiendas que se preparen ahora con GEO tendrán una ventaja difícil de alcanzar después.</p>
          <h2 className="text-2xl font-bold text-primary-600">Agentic Commerce: la novedad de Shopware 6.7.9</h2>
          <p>Shopware 6.7.9 incorpora Agentic Commerce de forma nativa: una API que permite a asistentes de IA como ChatGPT y Perplexity descubrir productos de tu tienda, recomendarlos y facilitar la compra directamente desde la conversación, sin que el usuario pase por la web tradicional. Es un canal de venta nuevo, y por ahora con muy poca competencia. Quien lo active y lo prepare bien aparece donde casi nadie está todavía.</p>
          <h2 className="text-2xl font-bold text-primary-600">Qué es el GEO y por qué importa en ecommerce</h2>
          <p>GEO (Generative Engine Optimization) es la disciplina de optimizar tu presencia para que los motores de IA te citen y recomienden. En ecommerce es especialmente relevante: cuando alguien pide a una IA una recomendación de producto, el motor elige unas pocas tiendas para mencionar. Estar entre ellas equivale a aparecer en el primer resultado de Google, pero en un canal que apenas trabaja la competencia.</p>
          <h2 className="text-2xl font-bold text-primary-600">GEO técnico para tu tienda Shopware</h2>
          <p>Preparar una tienda para la IA tiene una capa técnica concreta. El robots.txt debe permitir el acceso de los rastreadores de IA (GPTBot de OpenAI, ClaudeBot de Anthropic, PerplexityBot de Perplexity); si los bloqueas, la IA no puede conocer tu catálogo. El schema Product completo y las fichas con contenido citable —datos claros, especificaciones, respuestas a dudas— facilitan que el modelo te entienda y te cite. Un NAP consistente (nombre, dirección, teléfono) y un archivo llms.txt refuerzan tu identidad. Y las reseñas verificadas funcionan como señal de confianza para los LLMs, igual que para las personas.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres que ChatGPT recomiende los productos de tu tienda?</p>
            <p className="text-gray-600 text-sm mb-4">Preparamos tu tienda Shopware con GEO y Agentic Commerce para que la IA descubra, recomiende y venda tu catálogo antes que tu competencia.</p>
            <Link href="/marketing-shopware/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver marketing para Shopware
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-primary-600">Preparar la tienda para Agentic Commerce</h2>
          <p>Más allá del GEO, el Agentic Commerce exige que la tienda esté lista para responder a una máquina. Eso significa una API de catálogo rápida (la IA consulta en tiempo real), información de stock actualizada al momento (no puede recomendar lo que no hay) y datos de producto completos y estructurados (precio, variantes, atributos, plazos). Una tienda Shopware con estos cimientos bien puestos puede vender de forma agéntica desde el primer día en que el canal madure.</p>
          <h2 className="text-2xl font-bold text-primary-600">Ventaja competitiva: Shopware + GEO en España</h2>
          <p>Aquí está la oportunidad real. Muy pocas agencias en España trabajan la combinación de Shopware y GEO, y casi ninguna tienda tiene su catálogo preparado para la venta agéntica. Adelantarse ahora —cuando el canal está naciendo— permite construir autoridad y presencia en la IA antes de que llegue la saturación. Es el mismo tipo de ventaja que tuvieron quienes apostaron por el SEO cuando Google era joven.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Adelántate en el comercio con IA</h2>
            <p className="text-primary-200 mb-6">
              Somos pioneros en GEO en España. Preparamos tu tienda Shopware para el Agentic Commerce y para que la IA la recomiende cuando tus clientes preguntan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketing-shopware/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver marketing para Shopware
              </Link>
              <Link href="/geo-posicionamiento-ia/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de GEO
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
            Servicios relacionados: <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Marketing Shopware</Link> · <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO — Posicionamiento en IA</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="geo-shopware-agentic-commerce-chatgpt" />
    </>
  );
}
