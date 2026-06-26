import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Qué es el GEO y cómo aparecer en ChatGPT si tienes un negocio en España",
  description:
    "El GEO posiciona tu negocio en ChatGPT y Perplexity. Si la IA no te menciona cuando alguien pregunta por tu sector, pierdes clientes. Guía práctica para negocios en España.",
  alternates: { canonical: "https://www.mktweb360.com/geo-posicionamiento-ia-chatgpt-empresas-espana/" },
  openGraph: {
    title: "Qué es el GEO y cómo aparecer en ChatGPT si tienes un negocio en España | Mkt Web 360",
    description: "El GEO posiciona tu negocio en ChatGPT y Perplexity. Guía práctica para negocios en España.",
    url: "https://www.mktweb360.com/geo-posicionamiento-ia-chatgpt-empresas-espana/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Qué es el GEO y cómo aparecer en ChatGPT si tienes un negocio en España",
  description: "El GEO posiciona tu negocio en ChatGPT y Perplexity. Guía práctica para negocios en España que quieren visibilidad en la búsqueda con IA.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/geo-posicionamiento-ia-chatgpt-empresas-espana/",
  mainEntityOfPage: "https://www.mktweb360.com/geo-posicionamiento-ia-chatgpt-empresas-espana/",
};

const FAQS = [
  {
    q: "¿Qué es el GEO exactamente?",
    a: "GEO son las siglas de Generative Engine Optimization: el conjunto de técnicas para que tu negocio sea mencionado y citado en las respuestas de motores generativos como ChatGPT, Perplexity, Gemini y los AI Overviews de Google. Donde el SEO busca posiciones en una lista de enlaces, el GEO busca ser la fuente que la IA usa para construir su respuesta.",
  },
  {
    q: "¿El GEO sustituye al SEO?",
    a: "No. El GEO se apoya en el SEO. La mayoría de los motores generativos se nutren de contenido bien estructurado, con autoridad y datos verificables, que es justo lo que produce una buena estrategia SEO. Lo recomendable es trabajar ambos: SEO para Google y GEO para las respuestas de IA.",
  },
  {
    q: "¿Cómo sé si ChatGPT ya menciona mi negocio?",
    a: "La forma más directa es preguntar. Plantéale a ChatGPT, Perplexity o Gemini consultas reales de tu sector y tu zona —como las que haría un cliente— y observa si tu marca aparece, con qué contexto y frente a qué competidores. Esa auditoría inicial marca el punto de partida.",
  },
  {
    q: "¿Cuánto tarda en notarse el GEO?",
    a: "Depende de la autoridad previa de tu marca y de la frecuencia con la que los modelos actualizan sus fuentes. Algunos motores con búsqueda en tiempo real (como Perplexity) pueden reflejar cambios en semanas; los modelos entrenados se actualizan por ciclos. Es una estrategia de medio plazo, no un interruptor.",
  },
  {
    q: "¿Sirve el GEO para un negocio local?",
    a: "Sí, y cada vez más. Cuando alguien pregunta a una IA por un servicio en su ciudad, el motor combina señales de autoridad con datos locales: tu ficha de Google Business Profile, reseñas y menciones coherentes. Un negocio local con presencia digital sólida tiene mucho que ganar apareciendo en esas respuestas.",
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

export default function GeoChatgptEmpresasEspanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Qué es el GEO y cómo aparecer en ChatGPT" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO · IA</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Qué es el GEO y cómo aparecer en ChatGPT si tienes un negocio en España
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cada vez más personas no buscan en Google: le preguntan directamente a una IA. Si ChatGPT o Perplexity no mencionan tu negocio cuando alguien pregunta por tu sector, estás perdiendo clientes que ni siquiera llegan a hacer la búsqueda tradicional.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Durante veinte años, ser visible en internet significaba aparecer en la primera página de Google. Ese juego está cambiando. Hoy, una parte creciente de las consultas termina en una respuesta generada por inteligencia artificial que resume, recomienda y, sobre todo, decide qué marcas menciona y cuáles ignora. El GEO —Generative Engine Optimization— es la disciplina que trabaja para que tu negocio sea una de las marcas mencionadas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el GEO (Generative Engine Optimization)</h2>
          <p>El GEO es el conjunto de técnicas orientadas a que los motores generativos —ChatGPT, Perplexity, Gemini, Claude y los AI Overviews de Google— citen tu negocio en sus respuestas. La diferencia con el SEO clásico es fundamental: el SEO compite por una posición dentro de una lista de enlaces; el GEO compite por ser la fuente que la IA usa para construir la respuesta que el usuario lee. En el primer caso el usuario elige entre opciones; en el segundo, la IA ya ha elegido por él.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el GEO ya importa para los negocios en España</h2>
          <p>No es una tendencia de laboratorio. Según datos de Google Search Central de abril de 2026, entre el 14% y el 16% de las búsquedas en google.es ya activan una respuesta generativa. A eso se suma que, según Gartner, el 41,8% de los usuarios en España ya utiliza herramientas de IA de forma habitual. Cuando casi la mitad de tus clientes potenciales pregunta a una IA y una de cada seis búsquedas en Google se responde con texto generado, la visibilidad en esos canales deja de ser opcional.</p>

          <h2 className="text-2xl font-bold text-primary-600">SEO y GEO no son lo mismo, pero se necesitan</h2>
          <p>El GEO no sustituye al SEO: lo amplifica. Los motores generativos se alimentan de contenido bien estructurado, con autoridad temática y datos verificables, exactamente lo que produce una estrategia de <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">posicionamiento SEO</Link> bien ejecutada. Una web técnicamente sólida, con schemas correctos y contenido que responde preguntas reales, es a la vez buena para Google y buena para la IA. Por eso el GEO se construye sobre una base SEO, no en su lugar.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu negocio aparece cuando alguien pregunta por tu sector a ChatGPT?</p>
            <p className="text-gray-600 text-sm mb-4">Hacemos una auditoría de visibilidad en IA y te decimos exactamente dónde estás y qué falta para que la IA te mencione.</p>
            <Link href="/geo-posicionamiento-ia/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio de GEO
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo aparecer en ChatGPT y Perplexity: pasos concretos</h2>
          <p>Aparecer en las respuestas de IA no es cuestión de suerte. Los estudios sobre el comportamiento de estos motores apuntan a patrones claros. Una investigación de Princeton de 2024 demostró que incluir estadísticas concretas e inline en el contenido aumenta un 41% la probabilidad de ser citado por un motor generativo. Y según Seer Interactive (2025), las marcas citadas en los AI Overviews de Google reciben un 35% más de clics que las que solo aparecen en los resultados orgánicos.</p>
          <ul className="space-y-2">
            {["Responde preguntas concretas con datos y cifras verificables, no con generalidades", "Estructura el contenido con encabezados claros y respuestas autocontenidas", "Refuerza tu autoridad temática: sé citado por otros, no solo cítate a ti mismo", "Mantén coherencia de marca, datos de contacto y especialidad en toda tu presencia digital"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">El papel de tu ficha y los datos locales</h2>
          <p>Cuando la pregunta tiene componente local —"mejor asesoría para autónomos en Toledo"— los motores generativos combinan autoridad temática con señales de proximidad. Ahí, tu <Link href="/google-business-profile/" className="text-accent-500 hover:underline">ficha de Google Business Profile</Link>, tus reseñas y la coherencia de tus datos (nombre, dirección, teléfono y especialidad) se convierten en materia prima para que la IA te recomiende. Un negocio local con la casa digital ordenada parte con ventaja en GEO.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo empezar sin perder el tiempo</h2>
          <p>El primer paso es siempre el mismo: preguntar. Plantea a ChatGPT, Perplexity y Gemini las consultas que haría tu cliente ideal y observa si apareces, con qué contexto y frente a qué competidores. Esa auditoría revela tu punto de partida real. A partir de ahí, se prioriza: reforzar el contenido que responde a esas preguntas, mejorar las señales de autoridad y mantener la coherencia de marca. El GEO es un trabajo de medio plazo, pero quien empieza antes consolida una ventaja difícil de recuperar.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/ha-muerto-el-seo-con-la-ia/" className="text-accent-500 hover:underline">¿Ha muerto el SEO con la IA?</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Haz que la IA mencione tu negocio</h2>
            <p className="text-primary-200 mb-6">
              Somos pioneros en GEO en España. Te ayudamos a aparecer en ChatGPT, Perplexity y Gemini cuando tus clientes preguntan por tu sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/geo-posicionamiento-ia/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver servicio de GEO
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Solicitar auditoría de visibilidad en IA
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre el GEO</h2>
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
            Servicios relacionados: <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO — Posicionamiento en IA</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="geo-posicionamiento-ia-chatgpt-empresas-espana" />
    </>
  );
}
