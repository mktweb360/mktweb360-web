import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cuota de autónomos 2026: tabla de tramos, MEI y lo que ha cambiado",
  description:
    "Las cuotas de autónomos 2026 se mantienen iguales a 2025 por prórroga del Gobierno, salvo el MEI que sube al 0,9%. Tabla completa de tramos, tarifa plana de 80€ y cómo cambiar tu base hasta 6 veces al año.",
  alternates: { canonical: "https://www.mktweb360.com/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/" },
  openGraph: {
    title: "Cuota de autónomos 2026: tabla de tramos, MEI y lo que ha cambiado | Mkt Web 360",
    description:
      "Las cuotas de autónomos 2026 se mantienen iguales a 2025 por prórroga del Gobierno, salvo el MEI que sube al 0,9%. Tabla completa de tramos, tarifa plana de 80€ y cómo cambiar tu base hasta 6 veces al año.",
    url: "https://www.mktweb360.com/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-homepage.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuota de autónomos 2026: tabla de tramos, MEI y lo que ha cambiado",
  description:
    "Las cuotas de autónomos 2026 se mantienen iguales a 2025 por prórroga del Gobierno, salvo el MEI que sube al 0,9%. Tabla completa de tramos, tarifa plana de 80€ y cómo cambiar tu base hasta 6 veces al año.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-homepage.jpg",
  url: "https://www.mktweb360.com/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/",
  mainEntityOfPage: "https://www.mktweb360.com/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cuota de autónomos 2026", item: "https://www.mktweb360.com/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/" },
  ],
};

const FAQS = [
  {
    q: "¿Ha subido la cuota de autónomos en 2026?",
    a: "Las tablas de cotización de 2026 se mantienen iguales a las de 2025 por prórroga. La única variación es el MEI (Mecanismo de Equidad Intergeneracional), que sube del 0,8% al 0,9%, lo que supone un pequeño incremento en la cuota para todos los autónomos.",
  },
  {
    q: "¿Cuánto paga un autónomo de cuota mínima en 2026?",
    a: "Los autónomos del primer tramo (ingresos hasta 670€/mes) pagan 200€/mes. Segundo tramo (670€-900€): 220€. Tercer tramo (900€-1.166,70€): 260€. A partir del cuarto tramo los importes suben progresivamente hasta los 1.542€ para los ingresos más altos.",
  },
  {
    q: "¿Qué es la tarifa plana de autónomos en 2026?",
    a: "Una bonificación para nuevos autónomos: cuota reducida de 80€/mes (88,64€ con MEI) durante los primeros 12 meses, prorrogable a 24 meses si los ingresos no superan el SMI. Solo aplica si no has sido autónomo en los últimos 2 años.",
  },
  {
    q: "¿Cuántas veces puedo cambiar mi base de cotización en 2026?",
    a: "Hasta 6 veces al año. Los cambios tienen efecto diferido según el momento de solicitud. La gestión se hace a través del portal Importass de la Seguridad Social.",
  },
  {
    q: "¿Cómo afecta la cuota que pago a mi pensión futura?",
    a: "Directamente. Cotizar por la base mínima reduce la cuota hoy pero también reduce la base de cálculo de tu pensión, prestación por baja médica y cese de actividad. Para autónomos cercanos a los 50 años puede ser conveniente revisar si el ahorro mensual compensa la reducción en prestaciones futuras.",
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

export default function CuotaAutonomos2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cuota de autónomos 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos · Fiscal</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cuota de autónomos en 2026: todo lo que tienes que saber sobre tramos, MEI y tarifa plana
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las cuotas de autónomos de 2026 se mantienen iguales a las de 2025 por prórroga del Gobierno, con una única variación: el MEI sube al 0,9%. En esta guía tienes la tabla de tramos, la tarifa plana de 80€ y cómo cambiar tu base hasta 6 veces al año. Si además estás empezando, te interesa saber <Link href="/como-darse-de-alta-autonomo/" className="text-accent-500 hover:underline">cómo darte de alta como autónomo</Link> sin errores.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Pocos temas generan tanta confusión entre los autónomos como la cuota que pagan cada mes. Entre el sistema de tramos por ingresos reales, el MEI y la tarifa plana, es fácil perderse. Este artículo ordena la información esencial de 2026 para que sepas exactamente qué pagas y por qué.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Las cuotas de 2026: qué ha cambiado y qué no</h2>
          <p>La noticia principal es que las tablas de cotización de 2026 se mantienen iguales a las de 2025. El Gobierno ha prorrogado los importes, por lo que los tramos y las cuotas mínimas no varían respecto al año anterior.</p>
          <p>La única variación real es el MEI (Mecanismo de Equidad Intergeneracional), que sube del 0,8% al 0,9%. Es un incremento pequeño pero que afecta a todos los autónomos, independientemente de su tramo. En la práctica, significa que pagarás prácticamente lo mismo que en 2025, con un ligero aumento derivado del MEI.</p>

          <h2 className="text-2xl font-bold text-primary-600">Tabla completa de tramos y cuotas mínimas 2026</h2>
          <p>El sistema de cotización por ingresos reales asigna una cuota según lo que facturas. Estas son las cuotas mínimas de los primeros tramos en 2026:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Primer tramo (ingresos hasta 670€/mes): 200€/mes.</li>
            <li>Segundo tramo (670€ - 900€): 220€/mes.</li>
            <li>Tercer tramo (900€ - 1.166,70€): 260€/mes.</li>
            <li>A partir del cuarto tramo, los importes suben progresivamente hasta los 1.542€/mes para los ingresos más altos.</li>
          </ul>
          <p>La clave del sistema es que la cuota se ajusta a tus rendimientos netos reales. Si tus ingresos cambian a lo largo del año, tienes la posibilidad de ajustar tu base para que la cuota se corresponda con tu situación real.</p>

          <h2 className="text-2xl font-bold text-primary-600">El MEI en 2026: qué es y cuánto sube tu cuota</h2>
          <p>El MEI es un recargo destinado a reforzar la sostenibilidad del sistema de pensiones. En 2026 pasa del 0,8% al 0,9%, aplicándose sobre la base de cotización de cada autónomo.</p>
          <p>Aunque el porcentaje es pequeño, conviene tenerlo en cuenta al calcular tu cuota total: es la razón por la que, pese a que las tablas no cambian, la cifra final que pagas cada mes es ligeramente superior a la de 2025.</p>

          <h2 className="text-2xl font-bold text-primary-600">Tarifa plana 2026: 80€/mes para nuevos autónomos</h2>
          <p>La tarifa plana sigue siendo la gran ventaja para quien empieza. Consiste en una cuota reducida de 80€/mes (88,64€ con el MEI incluido) durante los primeros 12 meses de actividad.</p>
          <p>Esta bonificación es prorrogable a 24 meses si tus ingresos no superan el SMI, y solo aplica si no has sido autónomo en los últimos 2 años. Si estás valorando dar el paso, la tarifa plana reduce de forma notable la barrera de entrada durante el primer año.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo cambiar tu base de cotización a lo largo del año</h2>
          <p>Uno de los aspectos más útiles del sistema actual es la flexibilidad: puedes cambiar tu base de cotización hasta 6 veces al año. Esto te permite adaptar la cuota a la evolución real de tus ingresos.</p>
          <p>Los cambios tienen efecto diferido según el momento en que los solicites, y toda la gestión se realiza a través del portal Importass de la Seguridad Social. Revisar tu base varias veces al año es una buena práctica para no pagar de más ni de menos.</p>

          <h2 className="text-2xl font-bold text-primary-600">Planificación: cuándo te conviene cotizar más</h2>
          <p>Cotizar por la base mínima reduce tu cuota hoy, pero también reduce la base de cálculo de tu pensión, tu prestación por baja médica y el cese de actividad. Es una decisión que tiene consecuencias a largo plazo.</p>
          <p>Para autónomos cercanos a los 50 años, en particular, puede ser conveniente revisar si el ahorro mensual compensa la reducción en prestaciones futuras. Y como todo negocio necesita ingresos estables para poder planificar su cotización, conviene acompañar la parte fiscal con una estrategia sólida para <Link href="/marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia/" className="text-accent-500 hover:underline">conseguir clientes como autónomo en 2026</Link>. También te interesa preparar tu negocio para la <Link href="/factura-electronica-obligatoria-autonomos-pymes/" className="text-accent-500 hover:underline">factura electrónica obligatoria</Link> que llega para autónomos y pymes.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Haz crecer tu negocio para poder cotizar mejor</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a autónomos y pymes a conseguir más y mejores clientes online, con una presencia digital que sostiene el crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Solicitar información
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

          <p className="text-sm text-gray-500">Este artículo es informativo y no constituye asesoramiento fiscal. Consulta siempre con un asesor o gestor antes de tomar decisiones sobre tu cotización.</p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cuota-autonomos-2026-todo-lo-que-tienes-que-saber" />
    </>
  );
}
