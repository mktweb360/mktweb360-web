import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "GEO para pymes: cómo aparecer en ChatGPT sin ser una gran marca",
  description:
    "Las pymes tienen una ventaja real en GEO: la especificidad de nicho. Guía práctica para que cualquier negocio pequeño aparezca en las respuestas de ChatGPT, Gemini y Perplexity.",
  alternates: { canonical: "https://www.mktweb360.com/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/" },
  openGraph: {
    title: "GEO para pymes: cómo aparecer en ChatGPT sin ser una gran marca | Mkt Web 360",
    description: "Las pymes tienen una ventaja real en GEO: la especificidad de nicho. Guía práctica para que cualquier negocio pequeño aparezca en las respuestas de ChatGPT, Gemini y Perplexity.",
    url: "https://www.mktweb360.com/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-geo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "GEO para pymes: cómo aparecer en ChatGPT sin ser una gran marca",
  description: "Las pymes tienen una ventaja real en GEO: la especificidad de nicho. Guía práctica para que cualquier negocio pequeño aparezca en las respuestas de ChatGPT, Gemini y Perplexity.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-geo.jpg",
  url: "https://www.mktweb360.com/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/",
  mainEntityOfPage: "https://www.mktweb360.com/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "GEO para pymes", item: "https://www.mktweb360.com/geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca/" },
  ],
};

const FAQS = [
  {
    q: "¿Necesito contratar a alguien para hacer GEO o puedo hacerlo yo?",
    a: "Depende de tu punto de partida. Si tienes SEO técnico sólido, los primeros pasos (mejorar estructura de contenido, revisar robots.txt para bots de IA, añadir schema markup) los puede aplicar alguien con conocimientos básicos de WordPress. El GEO avanzado requiere más experiencia.",
  },
  {
    q: "¿El GEO funciona para negocios locales?",
    a: "Sí, especialmente. Cuando alguien le pregunta a ChatGPT un proveedor local, el modelo intenta dar respuestas específicas. Un negocio local con buen GBP, NAP coherente y contenido de autoridad local tiene opciones reales de aparecer.",
  },
  {
    q: "¿El GEO sirve para sectores muy especializados?",
    a: "Especialmente en esos sectores. Los modelos tienen más dificultad para encontrar fuentes de calidad en nichos específicos. Una empresa que produce contenido de calidad sobre su nicho puede convertirse en la referencia que la IA cite por ausencia de competencia real.",
  },
  {
    q: "¿Cuánto cuesta hacer GEO para una pyme?",
    a: "El GEO integrado con SEO no tiene coste adicional significativo si el trabajo de contenido ya está planificado. El coste real es el tiempo editorial. Las herramientas de monitorización van desde gratuito (pruebas manuales) hasta varios cientos de euros mensuales.",
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

export default function GeoParaPymesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "GEO para pymes: cómo aparecer en las respuestas de la IA sin ser una gran marca" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO · Estrategia para pymes</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            GEO para pymes: cómo aparecer en las respuestas de la IA sin ser una gran marca
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Aparecer en ChatGPT, Gemini o Perplexity no es un privilegio reservado a las grandes marcas. Las pymes tienen una ventaja real y a menudo desaprovechada: la especificidad de nicho. Esta guía de <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO o posicionamiento en IA</Link> recoge los pasos concretos que cualquier negocio pequeño puede dar hoy.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Muchos negocios pequeños dan por perdida la batalla de la IA antes de empezar, convencidos de que solo las grandes marcas aparecen en esas respuestas. Es un error de percepción. Los modelos generativos no reparten menciones por presupuesto, sino por quién responde mejor a una pregunta concreta, y ahí una pyme especializada puede ganar a un gigante genérico.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué las pymes tienen una ventaja real en GEO</h2>
          <p>La ventaja se llama especificidad. Una gran marca tiende a hablar de todo para todos, con un mensaje amplio y por tanto diluido. Una pyme habla de una sola cosa, con detalle, para un público muy definido. Cuando alguien le hace a la IA una pregunta muy concreta, el modelo prefiere la fuente que aborda ese tema en profundidad, no la que lo menciona de pasada.</p>
          <p>Ese es el punto ciego de las marcas grandes: la generalidad. Y es exactamente el terreno donde una pyme puede convertirse en la referencia que la IA cita, precisamente porque nadie más trata ese nicho con la misma dedicación. Trabajar el GEO, en el fondo, es apoyarse en algo que la pyme ya tiene: foco.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los cinco pasos que cualquier pyme puede dar hoy</h2>
          <p>No hace falta un gran despliegue técnico para empezar. Hay cinco movimientos, ordenados y asequibles, que marcan la diferencia. Primero, auditar el robots.txt para permitir el acceso de los bots de IA a tu contenido: de nada sirve escribir bien si los crawlers no pueden leerte. Segundo, reorganizar tu contenido hacia un formato de pregunta-respuesta, para que cada sección resuelva una duda concreta.</p>
          <p>Tercero, añadir schema markup de tipo FAQPage a tus páginas clave, para que la máquina procese tus respuestas sin ambigüedad. Cuarto, cuidar la coherencia del NAP —nombre, dirección y teléfono— en todos los canales, algo que se solapa con un buen trabajo de <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local</Link>. Y quinto, producir contenido específico de tu nicho, ese que solo tú puedes escribir con conocimiento real.</p>
          <p>Ninguno de estos pasos exige un presupuesto de gran empresa. La mayoría se apoyan en una base de <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO orgánico</Link> que muchas pymes ya tienen a medio construir; el GEO simplemente la ordena con la lógica de que ahora también lee una máquina.</p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">El error que cometen la mayoría de pymes al empezar con GEO</h2>
          <p>El fallo más común es querer aparecer en todo. Es la tentación de perseguir cada búsqueda posible de tu sector, dispersando el esfuerzo y sin dominar ninguna. El resultado es contenido superficial que compite en desventaja justo donde las grandes marcas son fuertes: en lo genérico.</p>
          <p>La estrategia acertada es la contraria: dominar una sola búsqueda antes de ir a por la siguiente. Elige la pregunta concreta donde puedes ser, sin discusión, la mejor respuesta del mercado, y trabájala hasta que la IA te reconozca como referencia. Desde esa posición de autoridad ganada es mucho más fácil expandirse a temas vecinos.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Tu tamaño no es un límite para aparecer en la IA</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a pymes y autónomos a convertir su especialización en visibilidad dentro de ChatGPT, Gemini y Perplexity, con una estrategia de GEO a su medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/geo-posicionamiento-ia/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de GEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Casos de uso donde el GEO tiene más impacto</h2>
          <p>El GEO rinde especialmente bien en dos escenarios. El primero es el negocio local: cuando alguien le pide a la IA un proveedor de una zona concreta, el modelo intenta dar una respuesta específica, y un negocio con ficha bien optimizada, NAP coherente y contenido de autoridad local tiene opciones reales de ser el nombre que aparece.</p>
          <p>El segundo son los sectores muy especializados. Los modelos tienen dificultad para encontrar fuentes de calidad en nichos estrechos, así que una empresa que produce contenido riguroso sobre su especialidad puede convertirse en la referencia que la IA cita casi por ausencia de competencia real. Cuanto más específico y menos saturado el tema, mayor es la oportunidad para la pyme.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo empezar sin invertir en herramientas de monitorización</h2>
          <p>No necesitas pagar nada para dar los primeros pasos ni para comprobar si funcionan. La monitorización básica es manual y gratuita: pregunta tú mismo a ChatGPT, Gemini y Perplexity por los temas de tu sector y anota si tu marca aparece y cómo. Repite la prueba cada cierto tiempo para ver la evolución.</p>
          <p>El coste real del GEO para una pyme no está en el software, sino en el tiempo editorial: escribir bien, con foco y de forma constante. Si ese trabajo de contenido ya está planificado, integrar el GEO no añade un gasto significativo. Cuando el negocio crezca, siempre podrás incorporar herramientas de monitorización más avanzadas; para empezar, basta con método y disciplina. Si quieres profundizar en la parte técnica, la <Link href="/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/" className="text-accent-500 hover:underline">guía sobre cómo optimizar tu contenido para que la IA te cite</Link> lo desarrolla paso a paso.</p>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre GEO para pymes</h2>
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
            Servicio relacionado: <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO · Posicionamiento en IA</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca" />
    </>
  );
}
