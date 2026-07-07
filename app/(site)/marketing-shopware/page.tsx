import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Marketing digital para tiendas Shopware en España",
  description: "Marketing Shopware: SEO, Google Ads, GEO y CRO para tiendas ya construidas en Shopware. Tienes la plataforma, nosotros hacemos que venda. Agencia en España.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-shopware/" },
  openGraph: {
    title: "Marketing digital para tiendas Shopware en España | Mkt Web 360",
    description: "SEO, Google Ads, GEO y CRO para tu tienda Shopware. Tienes la plataforma, nosotros hacemos que venda más.",
    url: "https://www.mktweb360.com/marketing-shopware/",
    images: [{ url: "https://www.mktweb360.com/og-marketing-shopware.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing digital para tiendas Shopware",
  serviceType: "Marketing y crecimiento de ecommerce Shopware",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  areaServed: { "@type": "Country", name: "España" },
  description: "Agencia de marketing digital especializada en tiendas Shopware: SEO técnico, Google Shopping, GEO, Agentic Commerce y CRO para tiendas ya construidas que quieren vender más.",
  url: "https://www.mktweb360.com/marketing-shopware/",
};

const FAQS = [
  { q: "¿Desarrolláis la tienda Shopware o solo el marketing?", a: "Nos especializamos en marketing y crecimiento para tiendas Shopware ya construidas. No montamos la plataforma: hacemos que la que ya tienes venda más con SEO, Google Ads, GEO y CRO. Si necesitas desarrollo o una migración, te orientamos hacia el partner adecuado." },
  { q: "Mi tienda Shopware ya está lanzada pero no vende, ¿podéis ayudar?", a: "Es exactamente nuestro perfil de cliente ideal. Auditamos qué está frenando las ventas —si es un problema de visibilidad, de tráfico o de conversión— y trabajamos sobre la tienda existente para mejorar resultados desde el primer mes, sin rehacer lo que ya funciona." },
  { q: "¿Funciona el SEO en Shopware?", a: "Sí, y muy bien. Shopware ofrece un control técnico avanzado —URLs limpias, datos estructurados de producto, rendimiento y arquitectura de catálogo— que, bien trabajado, posiciona tus categorías y fichas en Google. La clave está en la ejecución SEO, no en la plataforma." },
  { q: "¿Qué es el Agentic Commerce de Shopware y por qué importa?", a: "Es la capacidad, disponible desde Shopware 6.7.9, de que los asistentes de IA como ChatGPT descubran y recomienden tus productos e incluso faciliten la compra. El GEO prepara tu tienda para aparecer en ese nuevo canal de venta antes que tu competencia, cuando todavía hay ventaja por captar." },
  { q: "¿Hacéis Google Shopping y campañas de Ads para Shopware?", a: "Sí. Configuramos el feed de productos, Google Merchant Center y campañas de Shopping y Performance Max, separando siempre el fee de gestión de la inversión publicitaria para que sepas con exactitud qué pagas y qué retorno obtienes." },
  { q: "¿En cuánto tiempo se ven resultados?", a: "Las campañas de Ads y las mejoras de CRO pueden notarse en semanas; el SEO orgánico consolida posiciones entre 4 y 8 meses según competencia y catálogo. Trabajamos ambos en paralelo: tracción a corto plazo con publicidad y conversión, y una base sostenible a medio plazo con SEO y GEO." },
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

const METHODOLOGY = [
  { step: "01", title: "Auditoría Shopware", desc: "Analizamos tu tienda a fondo: rendimiento, catálogo, SEO técnico, fichas de producto y embudo de conversión para detectar exactamente qué está frenando las ventas." },
  { step: "02", title: "SEO técnico para Shopware", desc: "Estructura de URLs, datos estructurados de producto, velocidad de carga, indexación del catálogo y arquitectura de categorías para captar tráfico orgánico que compra." },
  { step: "03", title: "Google Shopping y Ads", desc: "Feed de productos, Google Merchant Center y campañas de Shopping y Performance Max para aparecer donde se decide la compra y escalar con un ROAS bajo control." },
  { step: "04", title: "GEO y Agentic Commerce", desc: "Preparamos tu tienda para que ChatGPT, Perplexity y Gemini la recomienden, aprovechando el Agentic Commerce de Shopware 6.7.9: venta directa desde la conversación con la IA." },
  { step: "05", title: "CRO: optimización de conversión", desc: "Mejoramos fichas de producto, checkout y páginas clave con pruebas A/B para que el tráfico que ya tienes venda más, sin necesidad de gastar más en captación." },
  { step: "06", title: "Reporting y mejora continua", desc: "Monitorizamos ventas, ROAS, posiciones y conversión con un informe mensual claro y próximos pasos. Decisiones basadas en datos reales, no en intuición." },
];

const SERVICES = [
  { name: "SEO Posicionamiento", href: "/seo-posicionamiento-web-organico/" },
  { name: "Google Ads / SEM", href: "/sem-publicidad-ppc/" },
  { name: "GEO — IA Search", href: "/geo-posicionamiento-ia/" },
  { name: "Tiendas Online", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
  { name: "Auditoría Digital", href: "/auditoria-digital/" },
];

export default function MarketingShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Marketing Shopware" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Tienes la plataforma.<br />
              <span className="text-accent-400">Nosotros hacemos que venda.</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Shopware es una plataforma potente, pero por sí sola no genera ventas. Somos la agencia de marketing que convierte tu tienda Shopware en un canal que capta tráfico, convierte visitas y crece mes a mes con SEO, Google Ads, GEO y CRO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#auditoria" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Auditoría Shopware gratuita
              </a>
              <a href="#metodologia" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver cómo trabajamos
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/og-image.jpg" alt="Marketing digital para tiendas Shopware" className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "Líder B2B", label: "plataforma ecommerce líder en Europa" },
            { value: "B2B + B2C", label: "en una sola plataforma" },
            { value: "Agentic", label: "venta desde IA (Shopware 6.7.9)" },
            { value: "Open source", label: "control y propiedad total" },
          ].map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Qué hacemos / para quién */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Qué hacemos con tu tienda Shopware</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shopware es una de las plataformas de ecommerce más potentes de Europa, especialmente para negocios B2B y catálogos exigentes. Pero una plataforma potente sin estrategia de marketing es solo una tienda bonita que nadie encuentra. Ahí entramos nosotros.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                No desarrollamos la plataforma: la hacemos rendir. Trabajamos sobre tu tienda Shopware ya construida para atraer tráfico cualificado, mejorar la conversión y abrir nuevos canales de venta —incluida la IA— con un objetivo claro y medible: más ventas con mejor rentabilidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Tienda sin marketing", sub: "Catálogo invisible. El tráfico no llega o no convierte.", bad: true },
                  { label: "Tienda con Mkt Web 360", sub: "Tráfico cualificado, más conversión y venta también desde IA.", bad: false },
                ].map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">¿Para quién es este servicio?</h3>
              <ul className="space-y-3">
                {[
                  "Empresas con tienda Shopware ya lanzada que no vende lo suficiente",
                  "Negocios B2B con catálogos amplios y precios por cliente",
                  "Tiendas B2C en Shopware que quieren escalar tráfico y ventas",
                  "Marcas que dependen demasiado de un solo canal de captación",
                  "Ecommerce que quiere adelantarse en venta a través de IA",
                  "Quien tiene buena plataforma pero le falta estrategia de marketing",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="metodologia" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo hacemos crecer tu tienda Shopware</h2>
            <p className="text-gray-600">Un proceso probado para convertir tu plataforma en un canal de ventas rentable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METHODOLOGY.map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{item.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Todo lo que tu tienda Shopware necesita</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Combinamos los servicios que más venden en ecommerce, integrados en una sola estrategia para tu tienda Shopware.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all font-semibold text-primary-700 hover:text-accent-500">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciador: GEO + Agentic Commerce */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Nuevo</span>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">GEO y Agentic Commerce: vende desde ChatGPT</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El comercio está cambiando de canal. Cada vez más personas no buscan productos en Google: se los piden a una IA. Con el Agentic Commerce de Shopware 6.7.9, tu tienda puede ser descubierta, recomendada y comprada directamente desde una conversación con ChatGPT u otros asistentes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Somos pioneros en GEO en España. Preparamos el catálogo, los datos estructurados y la autoridad de tu tienda Shopware para que la IA la elija cuando un cliente pregunta por lo que vendes. Quien se posicione antes en este canal captará una ventaja difícil de recuperar.
              </p>
              <Link href="/geo-posicionamiento-ia/" className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                Conocer el servicio de GEO →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "Descubrimiento por IA", d: "Tu catálogo aparece cuando un cliente pregunta a ChatGPT por tu tipo de producto." },
                { t: "Recomendación", d: "La IA recomienda tu tienda frente a la competencia que aún no trabaja el GEO." },
                { t: "Venta agéntica", d: "Shopware 6.7.9 permite completar la compra desde la propia conversación con la IA." },
              ].map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="font-bold text-primary-700 mb-1">{c.t}</p>
                  <p className="text-sm text-gray-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes sobre marketing para Shopware</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="auditoria" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Auditoría de tu tienda Shopware gratuita</h2>
            <p className="text-primary-200">Analizamos tu tienda sin compromiso y te decimos exactamente qué está frenando tus ventas y por dónde empezar a crecer.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="seo" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Ecommerce" title="Más sobre ecommerce y tiendas online" />
    </>
  );
}
