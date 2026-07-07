import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo elegir el chatbot correcto para tu empresa: checklist completa para 2026",
  description:
    "Antes de elegir un chatbot para tu empresa, hay 10 preguntas que debes responder. Esta checklist te ayuda a evitar los errores más frecuentes y a elegir la solución que realmente se adapta a lo que necesitas.",
  alternates: { canonical: "https://www.mktweb360.com/como-elegir-chatbot-para-empresa-checklist-2026/" },
  openGraph: {
    title: "Cómo elegir el chatbot correcto para tu empresa: checklist completa para 2026 | Mkt Web 360",
    description:
      "Antes de elegir un chatbot para tu empresa, hay 10 preguntas que debes responder. Esta checklist te ayuda a evitar los errores más frecuentes y a elegir la solución que realmente se adapta a lo que necesitas.",
    url: "https://www.mktweb360.com/como-elegir-chatbot-para-empresa-checklist-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo elegir el chatbot correcto para tu empresa: checklist completa para 2026",
  description:
    "Antes de elegir un chatbot para tu empresa, hay 10 preguntas que debes responder. Esta checklist te ayuda a evitar los errores más frecuentes y a elegir la solución que realmente se adapta a lo que necesitas.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/como-elegir-chatbot-para-empresa-checklist-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/como-elegir-chatbot-para-empresa-checklist-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo elegir el chatbot correcto", item: "https://www.mktweb360.com/como-elegir-chatbot-para-empresa-checklist-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto tiempo debo dedicar a evaluar opciones antes de decidir?",
    a: "Con esta checklist, 2-3 semanas son suficientes para evaluar 3-4 opciones con rigor: una semana para definir requisitos, una para solicitar demos y propuestas, y una para analizar y decidir. Más tiempo raramente cambia la decisión.",
  },
  {
    q: "¿Debo pedir demo antes de contratar?",
    a: "Siempre. Y no solo una demo del producto en general — pide que te demuestren cómo funcionaría específicamente con el contenido de tu empresa y conectado a tus sistemas. Si el proveedor no puede hacer eso antes de firmar, es una señal de alerta.",
  },
  {
    q: "¿Qué pasa si el chatbot no funciona como esperaba?",
    a: "Por eso es importante negociar un período de prueba o un compromiso escalonado. Los primeros 30-60 días son de calibración — espera resultados medibles a partir del mes 3. Si a los 3 meses no hay mejora observable, hay un problema de implementación que resolver con el proveedor.",
  },
  {
    q: "¿Puedo cambiar de proveedor de chatbot si no estoy satisfecho?",
    a: "Sí, aunque el cambio tiene costes: nuevo setup, nuevo entrenamiento, migración de datos. Por eso la elección inicial importa. Negocia siempre una cláusula de salida razonable antes de firmar compromisos largos.",
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

export default function ComoElegirChatbotChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo elegir el chatbot correcto" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Marketing Digital · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo elegir el chatbot correcto para tu empresa: checklist completa para 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Antes de elegir un chatbot para tu empresa hay 10 preguntas que conviene responder. Esta checklist te ayuda a evitar los errores más frecuentes y a quedarte con la solución que de verdad se adapta a lo que necesitas. Si primero quieres entender el terreno, empieza por la <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">guía sobre qué es un chatbot para empresas</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Elegir chatbot no es elegir una herramienta, es elegir cómo vas a atender a tus clientes durante los próximos años. El error más común es empezar por el proveedor en lugar de empezar por tus propias necesidades. Estas diez preguntas invierten ese orden: primero defines qué necesitas y luego buscas quién lo cumple.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 1: ¿Qué problema concreto quiero resolver?</h2>
          <p>Antes de mirar ninguna plataforma, escribe en una frase qué problema te lleva a plantearte un chatbot. No es lo mismo querer reducir el volumen de consultas repetitivas que buscar captar leads fuera de horario o descargar de trabajo a un equipo de atención saturado. Cada objetivo lleva a una configuración distinta.</p>
          <p>Si no defines el problema, acabarás comparando funciones que no te importan y pagando por capacidades que no vas a usar. Un chatbot orientado a ventas se mide y se entrena distinto que uno orientado a soporte. Ten clara la meta antes de dar un paso más.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 2: ¿Con qué sistemas necesita integrarse?</h2>
          <p>Un chatbot aislado sirve de poco. Piensa con qué herramientas debe hablar: tu CRM, tu tienda online, tu sistema de reservas, tu base de conocimiento o tu pasarela de tickets. Si el bot no puede consultar el estado de un pedido o registrar un lead donde ya trabajas, gran parte de su valor se pierde.</p>
          <p>Haz la lista de integraciones imprescindibles antes de hablar con proveedores y pregúntales por cada una de forma explícita. Las integraciones son, con frecuencia, lo que separa a una solución que encaja de una que te obligará a duplicar trabajo manual.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 3: ¿Qué volumen de conversaciones espero?</h2>
          <p>El volumen determina el plan que necesitas y el coste real. No es lo mismo un negocio que recibe unas decenas de consultas al mes que uno con miles. Muchos proveedores facturan por conversaciones o por resoluciones, así que una estimación realista te evita sorpresas en la factura.</p>
          <p>Revisa tu histórico de consultas por email, teléfono o chat para calcular una cifra de partida. Ten en cuenta también la estacionalidad: si tienes picos en fechas concretas, asegúrate de que la solución escala sin penalizarte de forma desproporcionada.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 4: ¿Quién va a entrenar y mantener el chatbot?</h2>
          <p>Un chatbot no se configura una vez y se olvida. Alguien tiene que entrenarlo con tu contenido, revisar las conversaciones que falla y ajustar las respuestas con el tiempo. Decide desde el principio si esa responsabilidad recae en tu equipo o en el proveedor.</p>
          <p>Si nadie internamente va a dedicarle tiempo, prioriza soluciones gestionadas donde el mantenimiento esté incluido. Un bot sin mantenimiento se degrada: aparecen preguntas nuevas que no sabe responder y la calidad cae poco a poco.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 5: ¿Cuáles son mis requisitos de cumplimiento legal?</h2>
          <p>Un chatbot maneja datos personales y conversaciones, así que el cumplimiento no es opcional. En España y la UE debes cumplir el RGPD y el AI Act, que obliga, entre otras cosas, a identificar los sistemas de IA como tales. Repasa una checklist de cumplimiento con al menos diez puntos: información al usuario, base legal del tratamiento, conservación de datos, derechos de acceso y supresión, y ubicación del alojamiento, entre otros.</p>
          <p>Pregunta a cada proveedor cómo cubre estos requisitos y pide que lo pongan por escrito. Para no dejarte nada, apóyate en nuestra guía específica de <Link href="/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/" className="text-accent-500 hover:underline">chatbots de IA, RGPD y AI Act en España</Link>.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 6: ¿Necesito que funcione en varios canales?</h2>
          <p>Piensa dónde están tus clientes. Puede que te baste con el chat de la web, o puede que necesites atender también por WhatsApp, Instagram, Facebook Messenger o incluso dentro de tu app. Cada canal añade complejidad y, a menudo, coste.</p>
          <p>No caigas en la tentación de contratar todos los canales por si acaso. Empieza por donde tus clientes ya te escriben y amplía cuando tenga sentido. Confirma que la plataforma soporta los canales que realmente vas a usar antes de firmar.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 7: ¿Qué nivel de personalización necesito?</h2>
          <p>Algunas empresas se conforman con respuestas estándar bien resueltas; otras necesitan que el bot hable con el tono de su marca, siga flujos de conversación propios y se adapte a casos particulares. Cuanto más a medida, más potente debe ser la plataforma y más tiempo de configuración requerirá.</p>
          <p>Sé honesto con lo que de verdad necesitas. Una personalización excesiva encarece el proyecto y lo hace más difícil de mantener, mientras que una demasiado rígida puede dar una imagen impersonal. Busca el punto que encaja con tu marca sin complicarte de más.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 8: ¿Cómo voy a medir si funciona?</h2>
          <p>Sin métricas no sabrás si la inversión merece la pena. Define desde el inicio qué vas a medir: porcentaje de consultas resueltas por el bot, tiempo de respuesta, leads captados, satisfacción del usuario o carga de trabajo liberada al equipo humano. Esos números serán tu vara de medir.</p>
          <p>Ten en cuenta los tiempos: los primeros 30-60 días son de calibración, así que no esperes cifras estables de inmediato. A partir del tercer mes deberías ver resultados medibles y una tendencia clara. Asegúrate de que la plataforma te da los datos que necesitas para juzgar.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 9: ¿Qué soporte técnico necesito?</h2>
          <p>Cuando algo falla, el soporte marca la diferencia. Valora qué nivel necesitas: ¿te basta con documentación y email, o quieres un contacto directo que responda rápido? Pregunta por los tiempos de respuesta, el idioma de atención y si hay acompañamiento en la puesta en marcha.</p>
          <p>Un buen soporte es especialmente importante en las primeras semanas, cuando estás calibrando el bot. Si tu equipo no es técnico, prioriza proveedores que ofrezcan onboarding guiado y acompañamiento real, no solo un manual.</p>

          <h2 className="text-2xl font-bold text-primary-600">Pregunta 10: ¿Cuál es mi horizonte temporal y ROI esperado?</h2>
          <p>Por último, aterriza las expectativas de tiempo y retorno. Con un proceso ordenado, evaluar 3-4 opciones lleva unas 2-3 semanas: una para definir requisitos, otra para pedir demos y propuestas, y otra para analizar y decidir. La implementación tiene después su propia curva.</p>
          <p>En cuanto al retorno, cuenta con un período de calibración de 30-60 días y un ROI medible a partir del mes 3. Si a los tres meses no hay mejora observable, hay un problema de implementación que resolver. Para dimensionar la inversión, revisa <Link href="/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/" className="text-accent-500 hover:underline">cuánto cuesta un chatbot para empresas en España</Link> y contrasta con lo que esperas ganar.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Elige tu chatbot con criterio, no a ciegas</h2>
            <p className="text-primary-200 mb-6">
              Te ayudamos a responder estas diez preguntas aplicadas a tu negocio y a elegir la solución que de verdad encaja, con demo real y objetivos medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/ia-aplicada-al-marketing/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver IA aplicada al marketing
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
      <RelatedArticles currentSlug="como-elegir-chatbot-para-empresa-checklist-2026" />
    </>
  );
}
