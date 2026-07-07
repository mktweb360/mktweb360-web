import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo la IA está cambiando el marketing digital para siempre (y qué significa para tu negocio)",
  description:
    "La IA ya no es una tendencia en marketing: es la infraestructura. Más del 70% de las interacciones de marketing digital estarán influenciadas por IA en 2026. Qué cambia, qué no cambia y qué tienes que hacer.",
  alternates: { canonical: "https://www.mktweb360.com/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/" },
  openGraph: {
    title: "Cómo la IA está cambiando el marketing digital para siempre (y qué significa para tu negocio) | Mkt Web 360",
    description: "La IA ya no es una tendencia en marketing: es la infraestructura. Más del 70% de las interacciones de marketing digital estarán influenciadas por IA en 2026. Qué cambia, qué no cambia y qué tienes que hacer.",
    url: "https://www.mktweb360.com/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo la IA está cambiando el marketing digital para siempre (y qué significa para tu negocio)",
  description: "La IA ya no es una tendencia en marketing: es la infraestructura. Más del 70% de las interacciones de marketing digital estarán influenciadas por IA en 2026. Qué cambia, qué no cambia y qué tienes que hacer.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/",
  mainEntityOfPage: "https://www.mktweb360.com/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo la IA cambia el marketing digital", item: "https://www.mktweb360.com/como-la-ia-esta-cambiando-el-marketing-digital-para-siempre/" },
  ],
};

const FAQS = [
  {
    q: "¿La IA va a sustituir a los profesionales de marketing digital?",
    a: "No va a sustituirlos, pero va a cambiar lo que hacen. Las tareas repetitivas serán cada vez más automatizadas. Las que requieren criterio estratégico, creatividad genuina, comprensión del contexto de negocio y relaciones humanas no. El profesional de marketing del futuro combina conocimiento de negocio con alfabetización en IA.",
  },
  {
    q: "¿Qué presupuesto debería dedicar una pyme a herramientas de IA en 2026?",
    a: "Entre 50 y 200€/mes para herramientas básicas es suficiente para obtener ventajas reales de productividad. El coste oculto no está en las herramientas sino en el tiempo de aprendizaje y configuración, que puede ser de 20-40 horas iniciales.",
  },
  {
    q: "¿Cómo sé si una agencia de marketing realmente usa IA o solo lo dice?",
    a: "Pregunta por sus procesos específicos: qué herramientas usan en cada fase, cómo documentan los prompts y flujos, qué resultados atribuyen específicamente a la IA. Una agencia que usa IA de verdad puede mostrarte cómo funciona, no solo decir que lo hace.",
  },
  {
    q: "¿Debería una pyme invertir en IA propia o usar herramientas SaaS?",
    a: "Para el 99% de las pymes, las herramientas SaaS son la respuesta. Desarrollar IA propia requiere datos, infraestructura y talento especializado que ninguna pyme puede justificar. Las herramientas SaaS de IA en 2026 ofrecen capacidades que hace 3 años solo tenían las grandes corporaciones.",
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

export default function ComoLaIaCambiaMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo la IA cambia el marketing digital" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA · Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo la IA está cambiando el marketing digital para siempre
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La IA ya no es una tendencia en marketing: es la infraestructura. Más del 70% de las interacciones de marketing digital estarán influenciadas por IA en 2026. Analizamos qué cambia, qué no cambia y qué tienes que hacer, empezando por entender la <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Hablar de si la IA «va a cambiar» el marketing ya es tarde: el cambio ocurrió. Lo que antes era una herramienta que algunos probaban hoy es la capa sobre la que funcionan la búsqueda, la publicidad, la creación de contenido y la relación con el cliente. La pregunta útil ya no es si adoptarla, sino cómo hacerlo con criterio.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">El cambio que ya ocurrió: la IA como infraestructura de marketing</h2>
          <p>Según IEBS, más del 70% de las interacciones de marketing digital estarán influenciadas por IA en 2026. Esto significa que la IA ya no es un canal ni una campaña: está por debajo de todo, desde el buscador que decide qué respuesta muestra hasta el sistema publicitario que optimiza tu inversión.</p>
          <p>El dato de fondo lo confirma la inversión: IBM señala que el 75% de los ejecutivos planea invertir en IA agéntica. Cuando la infraestructura cambia, las empresas que no se adaptan no compiten en desventaja; simplemente dejan de aparecer donde su cliente busca.</p>

          <h2 className="text-2xl font-bold text-primary-600">Lo que la IA hace bien en marketing con datos reales</h2>
          <p>La IA destaca en tres frentes concretos. El primero es la producción de contenido: multiplica hasta por diez la velocidad de generación de borradores, textos y variaciones. El segundo es el análisis de datos, donde procesa volúmenes que ningún equipo humano abarcaría a mano. El tercero es la personalización a escala, adaptando mensajes a segmentos que antes eran imposibles de atender uno a uno.</p>
          <p>Estos tres usos son los que dan retorno inmediato a una pyme. Para aprovecharlos sin dispersarte, conviene apoyarse en las <Link href="/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/" className="text-accent-500 hover:underline">herramientas de IA que realmente funcionan</Link> y descartar el resto.</p>

          <h2 className="text-2xl font-bold text-primary-600">Lo que la IA no puede hacer todavía</h2>
          <p>Frente a lo que cambia, hay un núcleo que se mantiene: la estrategia, el criterio, las relaciones y la creatividad genuina. La IA no decide el posicionamiento de tu marca, no entiende las particularidades de tu mercado como quien lo vive cada día, ni construye la confianza que se genera entre personas.</p>
          <p>Confundir velocidad con estrategia es el error más caro de esta etapa. Producir mucho contenido mediocre a gran velocidad no mejora ningún negocio. La IA amplifica lo que ya tienes: si la estrategia es buena, la multiplica; si no la hay, multiplica el ruido.</p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">El nuevo rol del profesional de marketing en la era de la IA</h2>
          <p>El profesional de marketing no desaparece, se transforma. Su valor se desplaza desde ejecutar tareas repetitivas hacia dirigir, revisar y dar criterio a lo que la IA produce. La alfabetización en IA se convierte en una competencia básica, tan importante como saber redactar o analizar datos hace unos años.</p>
          <p>El perfil que gana es el que combina conocimiento profundo del negocio con soltura en las herramientas de IA. Ahí entran también los <Link href="/agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio/" className="text-accent-500 hover:underline">agentes de IA para marketing</Link>, que delegan la ejecución para que las personas se concentren en decidir.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo preparar tu empresa para el marketing con IA</h2>
          <p>La preparación no empieza comprando herramientas, sino ordenando lo que ya tienes. Define qué tareas repetitivas consumen más tiempo, elige una o dos herramientas para atacarlas y reserva las 20-40 horas iniciales de aprendizaje que exige la puesta en marcha. Con un presupuesto de entre 50 y 200€/mes ya se obtienen ventajas reales de productividad.</p>
          <p>Un frente que ninguna empresa debería descuidar es la visibilidad en los motores generativos. A medida que la gente pregunta directamente a la IA, aparecer en sus respuestas se vuelve tan importante como aparecer en Google, y ahí entra en juego el <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en IA</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">La ventana de oportunidad que se está cerrando</h2>
          <p>Ahora mismo hay una ventaja para quien se mueve pronto: la mayoría de pymes todavía no ha integrado la IA de forma seria en su marketing. Esa ventana no durará. A medida que las herramientas SaaS ponen al alcance de cualquiera capacidades que hace tres años solo tenían las grandes corporaciones, la ventaja de ser temprano se diluye.</p>
          <p>El coste de esperar no es solo tecnológico, es competitivo. Quien construye ahora su músculo de marketing con IA parte con años de recorrido cuando esto sea el estándar de todos.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Prepara tu negocio para el marketing con IA</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a pymes y autónomos a integrar la IA en su estrategia digital con criterio, aprovechando la ventana de oportunidad antes de que se cierre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/geo-posicionamiento-ia/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver posicionamiento en IA
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
      <RelatedArticles currentSlug="como-la-ia-esta-cambiando-el-marketing-digital-para-siempre" />
    </>
  );
}
