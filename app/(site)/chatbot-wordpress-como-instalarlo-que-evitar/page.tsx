import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Chatbot para WordPress: cómo instalarlo, qué evitar y qué esperar",
  description:
    "WordPress tiene decenas de plugins de chatbot. La mayoría no merece el tiempo que cuesta probarlos. Guía honesta sobre qué funciona de verdad y cómo implementar un chatbot útil en una web WordPress en 2026.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-wordpress-como-instalarlo-que-evitar/" },
  openGraph: {
    title: "Chatbot para WordPress: cómo instalarlo, qué evitar y qué esperar | Mkt Web 360",
    description:
      "WordPress tiene decenas de plugins de chatbot. La mayoría no merece el tiempo que cuesta probarlos. Guía honesta sobre qué funciona de verdad y cómo implementar un chatbot útil en una web WordPress en 2026.",
    url: "https://www.mktweb360.com/chatbot-wordpress-como-instalarlo-que-evitar/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Chatbot para WordPress: cómo instalarlo, qué evitar y qué esperar",
  description:
    "WordPress tiene decenas de plugins de chatbot. La mayoría no merece el tiempo que cuesta probarlos. Guía honesta sobre qué funciona de verdad y cómo implementar un chatbot útil en una web WordPress en 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/chatbot-wordpress-como-instalarlo-que-evitar/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-wordpress-como-instalarlo-que-evitar/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot para WordPress", item: "https://www.mktweb360.com/chatbot-wordpress-como-instalarlo-que-evitar/" },
  ],
};

const FAQS = [
  {
    q: "¿El chatbot afecta a la velocidad de carga de la web?",
    a: "Depende de la implementación. Un plugin pesado que procesa IA localmente sí puede afectar a los Core Web Vitals, especialmente en hosting compartido. Un widget externo que carga de forma asíncrona tiene un impacto mínimo en la velocidad de carga.",
  },
  {
    q: "¿Es compatible con WooCommerce?",
    a: "Un chatbot bien integrado puede conectarse con WooCommerce para consultar stock, pedidos y datos de cliente. Esto requiere una integración específica, no solo instalar un plugin genérico.",
  },
  {
    q: "¿Funciona con cualquier tema de WordPress?",
    a: "El widget de chatbot se carga como JavaScript en el footer de la web, independientemente del tema. Debe funcionar en cualquier tema bien codificado, aunque puede haber conflictos puntuales con temas muy pesados o con ciertos plugins de optimización de JavaScript.",
  },
  {
    q: "¿Cuánto cuesta mantenerlo al mes?",
    a: "Un servicio de chatbot gestionado para WordPress cuesta típicamente entre 149 y 299€/mes, dependiendo del nivel de funcionalidad y el volumen de conversaciones.",
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

export default function ChatbotWordPressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot para WordPress" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Chatbot para WordPress: cómo instalarlo, qué evitar y qué esperar
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            WordPress tiene decenas de plugins de chatbot y la mayoría no merece el tiempo que cuesta probarlos. En esta guía honesta te explicamos qué funciona de verdad, qué errores evitar y cómo implementar un chatbot útil sin cargarte la velocidad de tu <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">web WordPress</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            WordPress mueve el 59,2% de las webs con CMS según W3Techs en 2026. Esa popularidad tiene una cara B: un ecosistema saturado de plugins que prometen "chatbot con IA" y entregan poco. Antes de instalar el primero que aparece en el buscador, conviene entender qué separa a un chatbot útil de un plugin más que ralentiza tu web.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">El problema con los plugins de chatbot de WordPress</h2>
          <p>El directorio de WordPress está lleno de soluciones. Tidio, por ejemplo, supera las 80.000 instalaciones. Números así generan confianza, pero también esconden un problema: muchos de estos plugins hacen lo mismo, resuelven poco y compiten por instalarse aunque no encajen con tu negocio.</p>
          <p>La mayoría se quedan en el nivel más básico: un formulario disfrazado de chat o una bandeja de mensajes. Probar uno tras otro consume horas y deja la impresión de que "los chatbots no funcionan", cuando el problema no es la tecnología, sino la elección. Distinguir el grano de la paja es el primer paso.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué diferencia un chatbot útil de un plugin cualquiera</h2>
          <p>La diferencia está en el conocimiento y en la conexión. Un plugin cualquiera responde con reglas rígidas o con información genérica. Un chatbot útil está entrenado con tu contenido y entiende lo que pregunta el visitante, aunque lo formule de forma imprecisa.</p>
          <p>El segundo factor es la integración. Un chatbot que solo muestra un texto es un panfleto; uno que consulta datos, registra leads o deriva a una persona cuando toca es una herramienta. Ese salto de calidad es el mismo que separa una web que solo existe de una que trabaja, y tiene mucho que ver con el <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">posicionamiento web orgánico</Link>: la utilidad real retiene al visitante.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo funciona un chatbot bien integrado en WordPress</h2>
          <p>La arquitectura correcta no mete la inteligencia dentro de WordPress. El núcleo del chatbot vive en un servicio SaaS externo, donde se procesa el lenguaje y se guarda el conocimiento, y en WordPress solo se instala un plugin ligero que actúa de puente. Ese widget se carga como JavaScript en el footer, sin sobrecargar el servidor.</p>
          <p>Esta separación es la que protege el rendimiento. El trabajo pesado ocurre fuera; tu web solo muestra la ventana de chat. Es también el enfoque que se apoya en la <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link> sin convertir tu WordPress en un servidor de inteligencia artificial que no está preparado para ese trabajo.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Pasos para implementar un chatbot que funcione en tu web WordPress</h2>
          <p>El proceso, bien hecho, sigue siete pasos. Primero, definir qué quieres que resuelva el chatbot y qué consultas recibe hoy. Segundo, elegir un servicio con núcleo externo en lugar de un plugin que lo haga todo dentro. Tercero, entrenarlo con tu contenido real: servicios, precios, condiciones.</p>
          <p>Cuarto, instalar el plugin puente y conectarlo. Quinto, diseñar el mecanismo de derivación a una persona para cuando el chatbot no sepa responder. Sexto, probar con conversaciones reales antes de lanzar. Y séptimo, medir y ajustar durante las primeras semanas. Si prefieres partir de una base más amplia, entender primero <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">qué es un chatbot para empresas</Link> ayuda a tomar mejores decisiones en cada uno de estos pasos.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los errores más comunes al implementar un chatbot en WordPress</h2>
          <p>Hay cinco fallos que se repiten. El primero es elegir un plugin que procesa la IA localmente y penaliza la velocidad, sobre todo en hosting compartido. El segundo es no entrenarlo con contenido propio y dejar respuestas genéricas. El tercero es no diseñar la derivación a una persona, de modo que el usuario se queda atascado.</p>
          <p>El cuarto es olvidar la transparencia legal: el chatbot debe informar de que es una IA. Y el quinto es lanzarlo sin probarlo con casos reales, descubriendo los agujeros con los clientes en directo. Evitar estos cinco errores es, en la práctica, la diferencia entre un chatbot que suma y uno que hay que desinstalar a las dos semanas.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Quieres un chatbot bien integrado en tu WordPress?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 implementamos chatbots entrenados con tu contenido, sin comprometer la velocidad de tu web ni el cumplimiento legal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño de páginas web
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
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="chatbot-wordpress-como-instalarlo-que-evitar" />
    </>
  );
}
