import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Cómo Usar el Planificador de Palabras Clave de Google Ads — Guía Completa",
  description:
    "Guía paso a paso para usar el Planificador de Palabras Clave de Google Ads. Cómo encontrar keywords, analizar volumen de búsqueda y crear tu estrategia SEO y SEM.",
  alternates: { canonical: "https://www.mktweb360.com/como-usar-planificador-de-palabras-clave-google-ads/" },
  openGraph: {
    title: "Cómo Usar el Planificador de Palabras Clave de Google Ads — Guía Completa | Mkt Web 360",
    description:
      "Guía paso a paso para usar el Planificador de Palabras Clave de Google Ads. Cómo encontrar keywords, analizar volumen de búsqueda y crear tu estrategia SEO y SEM.",
    url: "https://www.mktweb360.com/como-usar-planificador-de-palabras-clave-google-ads/",
    type: "article",
    images: [{ url: "/og-como-usar-planificador-de-palabras-clave-google-ads.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Usar el Planificador de Palabras Clave de Google Ads — Guía Completa",
  description:
    "Guía paso a paso para usar el Planificador de Palabras Clave de Google Ads. Cómo encontrar keywords, analizar volumen de búsqueda y crear tu estrategia SEO y SEM.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "/og-image.jpg",
  url: "https://www.mktweb360.com/como-usar-planificador-de-palabras-clave-google-ads/",
  mainEntityOfPage: "https://www.mktweb360.com/como-usar-planificador-de-palabras-clave-google-ads/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Planificador de palabras clave", item: "https://www.mktweb360.com/como-usar-planificador-de-palabras-clave-google-ads/" },
  ],
};

const FAQS = [
  {
    q: "¿Es gratuito el Planificador de Palabras Clave de Google Ads?",
    a: "Sí, es gratuito. Solo necesitas una cuenta de Google Ads para acceder. Sin embargo, si no tienes ninguna campaña activa con gasto real, los datos de volumen aparecen en rangos amplios (por ejemplo, 1.000–10.000) en lugar de cifras exactas.",
  },
  {
    q: "¿Puedo usar el Planificador de Palabras Clave sin tener una campaña activa?",
    a: "Sí puedes acceder, pero los datos serán menos precisos. Con una campaña activa que genere algo de gasto, Google desbloquea los volúmenes exactos por mes en lugar de mostrar rangos. Una alternativa es crear una campaña pausada con un presupuesto mínimo.",
  },
  {
    q: "¿Para qué sirve el Planificador de Palabras Clave en SEO si es una herramienta de Ads?",
    a: "Aunque está diseñado para planificar campañas de pago, su utilidad para SEO es enorme. Permite descubrir keywords con intención real de búsqueda, identificar long tails con menor competencia, conocer la estacionalidad de las búsquedas y agrupar términos por tema para crear una arquitectura de contenidos sólida.",
  },
  {
    q: "¿Cuántas palabras clave puedo analizar a la vez con el Planificador?",
    a: "Puedes introducir hasta 10 keywords semilla en la función de descubrimiento. En la función de volumen y previsiones puedes pegar listas de hasta 2.500 keywords para analizar todas de golpe, lo que es especialmente útil para auditorías o planificaciones de contenido a escala.",
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

export default function PlanificadorPalabrasClavePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Planificador de palabras clave" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Google Ads</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">25 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo Usar el Planificador de Palabras Clave de Google Ads
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El Planificador de Palabras Clave de Google Ads es la herramienta gratuita más potente para investigar qué busca tu audiencia. Sirve para campañas de pago, pero también es una mina de oro para SEO. Esta guía te explica cómo usarla paso a paso.
          </p>
          <Image
            src="/og-como-usar-planificador-de-palabras-clave-google-ads.jpg"
            alt="Cómo usar el Planificador de Palabras Clave de Google Ads"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cuando quieres posicionar una web o lanzar una campaña de Google Ads, el primer paso siempre es el mismo: entender qué términos usa tu audiencia para buscar lo que ofreces. El Planificador de Palabras Clave de Google es la única herramienta del mercado que da acceso directo a los datos reales del buscador más usado del mundo. No es perfecta, pero ninguna alternativa de pago tiene acceso a esa fuente primaria.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo acceder al Planificador de Palabras Clave</h2>
          <p>
            Para acceder necesitas una cuenta de Google Ads, que es gratuita de crear. Una vez dentro, ve a <strong>Herramientas y configuración → Planificación → Planificador de palabras clave</strong>. Verás dos opciones principales: <em>Descubrir nuevas palabras clave</em> y <em>Ver el volumen de búsquedas y las previsiones</em>.
          </p>
          <p>
            Aquí está el matiz más importante que debes conocer: <strong>los datos que muestra la herramienta dependen de si tienes una campaña activa con gasto real o no</strong>. Sin gasto activo, los volúmenes aparecen en rangos amplios como "1.000 – 10.000 búsquedas mensuales". Con al menos una campaña con algo de inversión, los datos se desbloquean y puedes ver cifras exactas mes a mes. Si no quieres gastar, una solución habitual es crear una campaña con un presupuesto mínimo y pausarla después de unos días de actividad.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Descubrir nuevas palabras clave</h2>
          <p>
            Esta es la función más utilizada para investigación inicial. Introduces hasta <strong>10 keywords semilla</strong> — términos relacionados con tu negocio, producto o servicio — y la herramienta te devuelve cientos de variantes con sus métricas asociadas.
          </p>
          <p>
            Antes de lanzar la búsqueda, configura bien dos filtros fundamentales:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Idioma:</strong> selecciona español para evitar contaminación con búsquedas en otros idiomas.</li>
            <li><strong>Ubicación:</strong> filtra por el país o región donde opera tu negocio. Las búsquedas en España de "abogado laboral" tienen un volumen e intención muy distintos a las de México o Argentina.</li>
          </ul>
          <p>
            Los resultados te mostrarán para cada keyword: el <strong>promedio de búsquedas mensuales</strong>, el nivel de <strong>competencia</strong> (baja, media o alta, según cuántos anunciantes pujan por esa keyword), la <strong>puja sugerida</strong> en la parte superior de la página y la variación estacional. La competencia alta no significa que debas evitar una keyword — significa que tiene valor comercial. La decisión depende de tu estrategia y presupuesto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Ver el volumen de búsquedas y las previsiones</h2>
          <p>
            La segunda función del Planificador tiene dos usos distintos. Puedes pegar una lista de hasta <strong>2.500 keywords</strong> para ver su volumen de golpe — ideal para auditorías o cuando ya tienes una lista elaborada. Y puedes ver <strong>previsiones</strong>: cuántos clics e impresiones esperarías si pujaras por esas keywords con un presupuesto determinado.
          </p>
          <p>
            Es importante distinguir entre <strong>volumen histórico</strong> y <strong>previsiones</strong>. El volumen histórico te dice cuántas veces se ha buscado esa keyword en los últimos 12 meses de media. Las previsiones son proyecciones de rendimiento para una campaña de Ads con una puja concreta — útiles para SEM, no para SEO.
          </p>
          <p>
            Presta atención a la <strong>estacionalidad</strong>. Una keyword como "ideas regalo Navidad" tiene un pico enorme en noviembre y diciembre y casi cero el resto del año. Saber esto te ayuda a planificar cuándo publicar el contenido o activar la campaña para capturar esa demanda en el momento preciso.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Necesitas una estrategia de keywords para tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 hacemos el análisis de palabras clave como parte de nuestra estrategia SEO. Identificamos las oportunidades reales para tu sector, no solo las más buscadas.</p>
            <Link href="/seo-posicionamiento-web-organico/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEO
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo usar el Planificador para SEO (no solo para Ads)</h2>
          <p>
            Aunque Google lo llama "Planificador de palabras clave de Google Ads", su utilidad para SEO es igual o mayor. La razón es simple: te da acceso a datos reales de búsqueda que ninguna herramienta de terceros puede replicar con la misma fidelidad.
          </p>
          <p>
            Para SEO, el flujo de trabajo habitual es el siguiente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Extrae keywords con intención de búsqueda clara.</strong> Una keyword como "comprar zapatillas running hombre" tiene intención transaccional. "Cómo elegir zapatillas running" tiene intención informacional. Para SEO, necesitas ambas, pero en páginas distintas.</li>
            <li><strong>Identifica long tails.</strong> Las keywords de cola larga (más de 3-4 palabras) tienen menos volumen pero mucho menos competencia y mayor tasa de conversión. El Planificador las genera automáticamente a partir de tus seeds.</li>
            <li><strong>Agrupa por tema semántico.</strong> Keywords como "posicionamiento web", "SEO web", "mejorar posición en Google" y "cómo salir primero en Google" hablan de lo mismo. Deben ir en la misma página, no en páginas separadas.</li>
            <li><strong>Exporta para tu plan de contenidos.</strong> Descarga el CSV con todas las keywords, ordénalas por volumen, filtra las relevantes y construye tu calendario editorial basado en demanda real.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Errores comunes al usar el Planificador</h2>
          <p>
            El Planificador es potente, pero se usa mal con mucha frecuencia. Estos son los errores más habituales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fiarse de los rangos amplios como si fueran datos exactos.</strong> Si ves "10.000–100.000 búsquedas mensuales", no sabes si son 11.000 o 95.000. Decisiones basadas en rangos tan amplios son arriesgadas. Activa datos exactos antes de tomar decisiones de inversión.</li>
            <li><strong>Ignorar la intención de búsqueda.</strong> Un volumen alto no sirve de nada si la keyword no coincide con lo que tu página puede ofrecer. Buscar "qué es el SEO" atrae curiosos, no clientes. Buscar "agencia SEO Madrid presupuesto" atrae potenciales clientes.</li>
            <li><strong>Centrarse solo en volumen alto.</strong> Las keywords más buscadas suelen ser las más competidas. En muchos sectores, atacar keywords de volumen medio con buena intención de compra da resultados mucho mejores que intentar competir por las grandes desde el principio.</li>
            <li><strong>No cruzar los datos con otras fuentes.</strong> El Planificador no te dice si una keyword ya la trabajas, si tienes contenido existente que podría mejorarse, ni si hay oportunidades de aparición en búsquedas de IA. Combínalo con Google Search Console y otras herramientas.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Alternativas al Planificador de Google</h2>
          <p>
            El Planificador de Google es la referencia, pero no la única opción. Dependiendo de lo que necesites, otras herramientas aportan datos complementarios muy valiosos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Semrush:</strong> la herramienta más completa del mercado para análisis de keywords, seguimiento de posiciones, análisis de competidores y auditorías técnicas. De pago, pero con prueba gratuita.</li>
            <li><strong>Ahrefs:</strong> especialmente potente para análisis de backlinks y keywords de largo plazo. Su índice de keywords es uno de los más amplios del sector.</li>
            <li><strong>Ubersuggest:</strong> alternativa más económica desarrollada por Neil Patel. Ofrece datos de volumen, dificultad y sugerencias de contenido. Buena opción para autónomos y pymes con presupuesto ajustado.</li>
          </ul>
          <p>
            Ninguna de estas herramientas tiene acceso directo a los datos de Google — trabajan con estimaciones basadas en sus propios rastreos. Por eso el Planificador de Google, pese a sus limitaciones, sigue siendo el punto de partida más fiable para cualquier estrategia seria.
          </p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/cuando-elegir-seo-vs-google-ads/" className="text-accent-500 hover:underline">Cuándo elegir SEO o Google Ads</Link> · <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más a tu negocio</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Convierte las keywords en clientes reales</h2>
            <p className="text-primary-200 mb-6">
              Encontrar las palabras clave correctas es el primer paso. El segundo es ejecutar la estrategia para posicionarlas. En Mkt Web 360 hacemos los dos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/seo-posicionamiento-web-organico/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver servicio SEO
              </Link>
              <Link href="/sem-publicidad-ppc/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver Google Ads
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre el Planificador de Palabras Clave</h2>
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
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Google Ads y SEM</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-usar-planificador-de-palabras-clave-google-ads" category="SEO" />
    </>
  );
}
