import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Marketing digital para autónomos en 2026: cómo conseguir clientes sin contratar una agencia",
  description:
    "Los autónomos tienen más herramientas que nunca para conseguir clientes online por su cuenta. Guía práctica: SEO local, Google Business Profile, LinkedIn y contenido para autónomos en 2026.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/" },
  openGraph: {
    title: "Marketing digital para autónomos en 2026: cómo conseguir clientes sin contratar una agencia | Mkt Web 360",
    description:
      "Los autónomos tienen más herramientas que nunca para conseguir clientes online por su cuenta. Guía práctica: SEO local, Google Business Profile, LinkedIn y contenido para autónomos en 2026.",
    url: "https://www.mktweb360.com/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-homepage.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Marketing digital para autónomos en 2026: cómo conseguir clientes sin contratar una agencia",
  description:
    "Los autónomos tienen más herramientas que nunca para conseguir clientes online por su cuenta. Guía práctica: SEO local, Google Business Profile, LinkedIn y contenido para autónomos en 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-homepage.jpg",
  url: "https://www.mktweb360.com/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/",
  mainEntityOfPage: "https://www.mktweb360.com/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Marketing digital para autónomos en 2026", item: "https://www.mktweb360.com/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto dinero necesita un autónomo para hacer marketing digital?",
    a: "Con 0€ se pueden hacer muchas cosas: optimizar Google Business Profile, publicar en LinkedIn, mejorar el SEO básico de la web. Con 100-200€/mes ya se puede hacer Google Ads para búsquedas locales con resultados medibles.",
  },
  {
    q: "¿Necesita un autónomo una web para conseguir clientes online?",
    a: "En 2026, la web sigue siendo el activo digital más importante. Google Business Profile puede traer clientes locales sin web, y LinkedIn puede generar consultas B2B, pero sin web no tienes un lugar donde profundizar, mostrar tu trabajo o controlar tu presencia.",
  },
  {
    q: "¿Cuál es el canal de marketing más eficaz para un autónomo?",
    a: "Depende del servicio. Servicios locales: Google Business Profile + SEO local es el canal con mayor ROI. Servicios profesionales B2B: LinkedIn + contenido de autoridad. Servicios creativos: Instagram. No hay respuesta universal.",
  },
  {
    q: "¿Cuánto tiempo tarda en llegar el primer cliente por Google?",
    a: "Con Google Business Profile bien optimizado en ciudades medianas, los primeros contactos pueden llegar en 2-4 semanas. Con SEO orgánico: 3-4 meses. Con Google Ads: el primer día si la campaña está bien configurada.",
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

export default function MarketingDigitalAutonomos2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Marketing digital para autónomos en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos · Marketing Digital</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Marketing digital para autónomos en 2026: la guía práctica para conseguir clientes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            En 2026 los autónomos tienen más herramientas que nunca para conseguir clientes online por su cuenta, sin depender de una agencia. Esta guía práctica ordena lo esencial: SEO local, Google Business Profile, LinkedIn y contenido. Y si vendes servicios en tu zona, empieza por el <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link>, el canal con mayor retorno.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La mayoría de autónomos cree que hacer marketing digital requiere presupuesto y una agencia. En 2026 eso ya no es cierto: con las herramientas adecuadas y el orden correcto, un autónomo puede construir una presencia digital que le traiga clientes de forma constante. La clave no es hacer más, sino hacer lo correcto en el momento correcto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">La realidad del marketing digital para autónomos en 2026</h2>
          <p>El autónomo compite con menos recursos que las grandes empresas, pero también con menos burocracia y más cercanía. Esa agilidad es una ventaja real: puede responder rápido, personalizar el trato y especializarse en un nicho concreto donde las grandes marcas no llegan.</p>
          <p>El error más común es querer estar en todas partes a la vez. Con tiempo y presupuesto limitados, la estrategia ganadora es concentrarse en uno o dos canales bien elegidos y dominarlos, en lugar de repartir esfuerzo sin masa crítica en ninguno.</p>

          <h2 className="text-2xl font-bold text-primary-600">El orden correcto: primero Google Business Profile, luego el resto</h2>
          <p>Si tu negocio tiene un componente local, el primer paso siempre es Google Business Profile. Es gratuito, aparece en el momento exacto en que alguien busca lo que ofreces cerca de él, y con una buena optimización los primeros contactos pueden llegar en 2-4 semanas.</p>
          <p>Optimizar tu ficha de <Link href="/google-business-profile/" className="text-accent-500 hover:underline">Google Business Profile</Link> con categorías correctas, fotos, horarios actualizados y reseñas es la acción con mejor relación esfuerzo-resultado que puede hacer un autónomo local. Solo después de tener esto en marcha tiene sentido pensar en el resto de canales.</p>

          <h2 className="text-2xl font-bold text-primary-600">SEO local: la inversión con mayor ROI para autónomos de servicios</h2>
          <p>Para un autónomo que presta servicios en su zona, el SEO local es el canal con mayor retorno a medio plazo. Aparecer en las búsquedas de tu ciudad para tu servicio significa captar clientes con intención real de contratar, justo cuando te necesitan.</p>
          <p>El SEO orgánico tarda más que Google Ads (3-4 meses para resultados sólidos), pero construye un activo duradero: una vez posicionado, sigue trayendo clientes sin coste por clic. Para muchos autónomos de servicios, es la base de toda la estrategia digital. Y ese tráfico necesita aterrizar en una <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">página web bien diseñada</Link> que convierta visitas en consultas.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">LinkedIn para autónomos que venden a empresas</h2>
          <p>Si tu cliente es una empresa, LinkedIn es tu canal prioritario. En 2026, el contenido publicado desde el perfil personal genera mucho más alcance que el de las páginas corporativas, y para un autónomo eso es una ventaja: tu marca personal es tu mejor activo.</p>
          <p>Publicar con constancia sobre tu especialidad, compartir casos y participar en conversaciones de tu sector construye autoridad y genera consultas B2B sin invertir en publicidad. Es un canal de largo recorrido que premia la consistencia por encima del volumen.</p>

          <h2 className="text-2xl font-bold text-primary-600">Google Ads para autónomos: cuándo vale la pena</h2>
          <p>Google Ads es la vía más rápida para conseguir clientes: bien configurada, una campaña puede traer el primer contacto el mismo día. Con 100-200€/mes ya se pueden hacer campañas de búsqueda local con resultados medibles.</p>
          <p>La <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">publicidad PPC</Link> vale la pena cuando necesitas resultados inmediatos o mientras el SEO madura. El riesgo es depender solo de ella: en cuanto dejas de pagar, dejan de llegar clientes. Por eso funciona mejor combinada con canales orgánicos que construyen presencia a largo plazo.</p>

          <h2 className="text-2xl font-bold text-primary-600">El contenido como diferenciador</h2>
          <p>En un mercado donde muchos autónomos ofrecen lo mismo, el contenido es lo que te diferencia. Explicar cómo trabajas, resolver dudas frecuentes y demostrar experiencia real genera confianza antes de la primera llamada.</p>
          <p>No necesitas producir mucho: unos pocos contenidos bien hechos que respondan a las preguntas reales de tus clientes potenciales trabajan por ti las 24 horas. Y como todo negocio necesita orden financiero para crecer, conviene tener claras también cuestiones como la <Link href="/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/" className="text-accent-500 hover:underline">cuota de autónomos en 2026</Link>.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Consigue más clientes sin complicarte la vida</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a autónomos a montar una estrategia digital realista y rentable, con el orden correcto y sin gastar de más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/seo-local-empresas-servicios/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de SEO local
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
      <RelatedArticles currentSlug="marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia" />
    </>
  );
}
