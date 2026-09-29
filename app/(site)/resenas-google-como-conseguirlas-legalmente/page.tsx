import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: { absolute: "Reseñas en Google: cómo conseguirlas legalmente en 2026" },
  description:
    "Cómo conseguir más reseñas en Google sin infringir las políticas ni la ley española: qué está prohibido, cómo pedirlas bien y cómo responder a las negativas.",
  alternates: { canonical: "https://www.mktweb360.com/resenas-google-como-conseguirlas-legalmente/" },
  openGraph: {
    title: "Reseñas en Google: cómo conseguirlas legalmente en 2026 | Mkt Web 360",
    description:
      "Cómo conseguir más reseñas en Google sin infringir las políticas ni la ley española: qué está prohibido, cómo pedirlas bien y cómo responder a las negativas.",
    url: "https://www.mktweb360.com/resenas-google-como-conseguirlas-legalmente/",
    type: "article",
    images: [{ url: "/og-resenas-google-como-conseguirlas-legalmente.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Reseñas en Google para empresas: cómo conseguir más sin infringir la ley",
  description:
    "Cómo conseguir más reseñas en Google sin infringir las políticas ni la ley española: qué está prohibido, cómo pedirlas bien y cómo responder a las negativas.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  image: "https://www.mktweb360.com/og-resenas-google-como-conseguirlas-legalmente.jpg",
  url: "https://www.mktweb360.com/resenas-google-como-conseguirlas-legalmente/",
  mainEntityOfPage: "https://www.mktweb360.com/resenas-google-como-conseguirlas-legalmente/",
};

const FAQS = [
  {
    q: "¿Puedo ofrecer un descuento a cambio de una reseña?",
    a: "No. Google considera cualquier incentivo a cambio de una reseña, incluido un descuento, un producto gratis o un sorteo, como interacción falsa, y está prohibido. También lo está ofrecer algo por cambiar o eliminar una reseña negativa. Pide la reseña sin ofrecer nada a cambio.",
  },
  {
    q: "¿Puedo pedir reseñas solo a los clientes contentos?",
    a: "No. Pedir reseñas de forma selectiva, solo a quienes previamente te han dicho que están satisfechos, va contra las políticas de Google. Envía la misma solicitud neutral a todos tus clientes y gestiona las quejas por tus canales habituales, sin condicionar la reseña.",
  },
  {
    q: "¿Google borra una reseña negativa si se lo pido?",
    a: "Solo si incumple sus políticas: spam, conflicto de intereses, contenido ofensivo, datos personales o una persona que no fue cliente. Una opinión negativa legítima no se elimina por el hecho de ser negativa. La mejor respuesta es contestarla con profesionalidad.",
  },
  {
    q: "¿Mis empleados pueden dejar reseñas?",
    a: "No deberían: las reseñas de empleados, familiares o del propio dueño se consideran conflicto de intereses según las políticas de Google. Pueden, en cambio, recordar a los clientes que pueden opinar, entregando el enlace o el código QR de forma neutral.",
  },
  {
    q: "¿Cómo creo el enlace para pedir reseñas?",
    a: "Desde tu Perfil de Empresa en Google, en Leer reseñas > Conseguir más reseñas. Puedes copiar el enlace o descargar el código QR desde un navegador de ordenador y compartirlo por email, WhatsApp, en recibos o en tu establecimiento.",
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

const respuesta = [
  ["Agradece", "“Gracias por tomarte el tiempo de contarlo.”"],
  ["Reconoce", "“Sentimos que el plazo de entrega no fuera el que esperabas.”"],
  ["No expongas datos", "Sin nombres completos, pedidos, direcciones ni detalles médicos o personales"],
  ["Ofrece un canal", "“Escríbenos a [email] y lo revisamos contigo.”"],
  ["Cierra con una mejora", "“Hemos ajustado cómo avisamos de los plazos.”"],
];

const denunciar = [
  "Spam o contenido sin relación con tu negocio.",
  "Reseñas de personas que no han sido clientes o con conflicto de intereses, como un competidor o un exempleado.",
  "Lenguaje ofensivo, amenazas o datos personales.",
  "Suplantación de identidad.",
];

const fuentes = [
  { texto: "Política de contenido prohibido y restringido de Google Maps.", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
  { texto: "Ayuda de Perfil de Empresa: Crear un enlace o un código QR para solicitar reseñas.", url: "https://support.google.com/business/answer/16816815?hl=es" },
  { texto: "Ayuda de Perfil de Empresa: Gestionar reseñas de clientes.", url: "https://support.google.com/business/answer/3474050?hl=es" },
  { texto: "Ayuda de Perfil de Empresa: Denunciar reseñas inapropiadas.", url: "https://support.google.com/business/answer/4596773?hl=es" },
  { texto: "Ayuda de Perfil de Empresa: Denunciar intentos de extorsión con reseñas negativas.", url: "https://support.google.com/business/answer/16404809?hl=es" },
  { texto: "Ley 3/1991, de Competencia Desleal (BOE-A-1991-628).", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1991-628" },
  {
    texto: "Real Decreto Legislativo 1/2007, Ley General para la Defensa de los Consumidores y Usuarios (BOE-A-2007-20555).",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-20555",
  },
];

export default function ResenasGoogleLegalmentePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Reseñas en Google para empresas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO Local</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-25">25 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Reseñas en Google para empresas: cómo conseguir más sin infringir la ley
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Qué puedes y qué no puedes hacer para conseguir reseñas en tu Perfil de Empresa: políticas de Google, normativa española de consumo y cómo responder a las opiniones negativas.
          </p>
          <Image
            src="/og-resenas-google-como-conseguirlas-legalmente.jpg"
            alt="Reseñas en Google: cómo conseguirlas legalmente en 2026"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Puedes y debes pedir reseñas a tus clientes reales, pero <strong>no puedes comprarlas, incentivarlas ni pedir solo las positivas</strong>. Google lo considera interacción falsa y puede restringir tu Perfil de Empresa. En España, además, la normativa de consumo y de competencia desleal trata como prácticas engañosas determinadas conductas con reseñas falsas. La buena noticia es que el método legal también es el que mejor funciona.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {[
              <>Pide reseñas a <strong>clientes reales</strong> y con un mensaje <strong>neutral</strong>.</>,
              <>No ofrezcas <strong>dinero, descuentos, regalos ni servicios</strong> a cambio de una reseña.</>,
              <>No pidas <strong>cinco estrellas</strong> ni que mencionen palabras concretas.</>,
              <>No <strong>filtres</strong> a quién pides la reseña según si está contento o no.</>,
              <>Una reseña negativa solo se elimina si <strong>incumple una política</strong>, no por ser negativa.</>,
              <><strong>Responde</strong> a todas, con educación y sin revelar datos del cliente.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Qué prohíbe Google</h2>
          <p>
            Las políticas de contenido de Google Maps exigen que las reseñas reflejen una <strong>experiencia auténtica</strong>. Quedan prohibidas, entre otras:
          </p>
          <ul className="space-y-3">
            {[
              <>Reseñas <strong>compradas o pagadas</strong>, directamente o a través de terceros.</>,
              <>Reseñas <strong>incentivadas</strong>: descuentos, productos gratis, sorteos o cualquier ventaja a cambio de opinar, de cambiar una opinión o de eliminar una negativa.</>,
              <>Reseñas publicadas por <strong>empleados, familiares o el propio dueño</strong>, o para perjudicar a un competidor (conflicto de intereses).</>,
              <><strong>Pedir reseñas de forma selectiva</strong> solo a clientes satisfechos, o desanimar las negativas.</>,
              <>Reseñas coordinadas desde varias cuentas.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            La consecuencia puede ir desde la eliminación de reseñas hasta <strong>restricciones en el Perfil de Empresa</strong>, como avisos visibles o limitación de nuevas reseñas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué dice la normativa española</h2>
          <p>Tras la reforma de 2021 que incorporó la Directiva Ómnibus europea (Real Decreto-ley 24/2021):</p>
          <ul className="space-y-3">
            {[
              <>La <strong>Ley de Competencia Desleal</strong> considera desleales prácticas como publicar reseñas falsas o encargarlas, o afirmar que las opiniones proceden de clientes reales sin haber tomado medidas razonables para comprobarlo.</>,
              <>La <strong>Ley General para la Defensa de los Consumidores</strong> exige que, si muestras opiniones de consumidores en tu web o tienda, informes de <strong>si garantizas que proceden de clientes reales y cómo lo compruebas</strong>.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            En la práctica: tus opiniones deben ser auténticas y, si las publicas en tu propia web, debes explicar cómo las gestionas.
          </p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo conseguir más reseñas de forma legal</h2>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-gray-600">
              <strong>Crea el enlace o el código QR de reseñas</strong> desde tu Perfil de Empresa: <em>Leer reseñas &gt; Conseguir más reseñas</em>. Google permite compartirlo por email, WhatsApp o redes y ponerlo en recibos o en el mostrador.
            </li>
            <li className="text-gray-600">
              <strong>Pídela en el momento adecuado</strong>: justo después de entregar el servicio, cuando el cliente todavía tiene la experiencia reciente.
            </li>
            <li className="text-gray-600">
              <strong>Usa un mensaje neutral</strong>, sin condicionar la valoración. Por ejemplo:
              <blockquote className="border-l-4 border-accent-500 bg-primary-50 px-6 py-4 rounded-r-xl text-gray-700 italic mt-3">
                “Gracias por confiar en nosotros. Si quieres, puedes contarnos en Google cómo ha sido tu experiencia. Tu opinión sincera nos ayuda a mejorar.”
              </blockquote>
            </li>
            <li className="text-gray-600">
              <strong>Pídela a todos los clientes</strong>, no solo a los que sabes que están contentos.
            </li>
            <li className="text-gray-600">
              <strong>Automatiza el recordatorio, nunca el contenido</strong>: un email o WhatsApp de seguimiento está bien; redactar la reseña por el cliente, no.
            </li>
            <li className="text-gray-600">
              <strong>Pon el QR donde ya miran</strong>: factura, ticket, tarjeta de entrega o pantalla de pago.
            </li>
          </ol>
          <p>
            La constancia vence al empujón: diez reseñas repartidas en varios meses transmiten más confianza que veinte en una semana.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo responder a las reseñas negativas</h2>
          <p>Una reseña negativa bien respondida puede generar más confianza que una positiva. Sigue esta estructura:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Paso</th>
                  <th className="px-4 py-3 text-left font-semibold">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {respuesta.map(([paso, ejemplo]) => (
                  <tr key={paso} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{paso}</td>
                    <td className="px-4 py-3 text-gray-600">{ejemplo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Evita discutir en público, insultar, amenazar con acciones legales en la respuesta o insinuar que el cliente miente. Quien lee tu respuesta no es solo el cliente enfadado: son todos tus futuros clientes. Si quieres profundizar, tienes una guía completa sobre la <Link href="/gestion-resenas-negativas-google/" className="text-accent-500 hover:underline">gestión de reseñas negativas en Google</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo denunciar una reseña</h2>
          <p>Solo tiene sentido denunciar reseñas que <strong>incumplan las políticas</strong>, por ejemplo:</p>
          <ul className="space-y-3">
            {denunciar.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Google tiene además un procedimiento específico para <strong>intentos de extorsión con reseñas negativas</strong>, cuando alguien te exige dinero a cambio de no publicarlas o de retirarlas. Antes de denunciar, guarda capturas, la URL de la reseña, la fecha y cualquier prueba. Que una opinión sea dura o injusta no es motivo suficiente para que Google la retire.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Las reseñas también cuentan para posicionar</h2>
          <p>
            Google indica que el número de reseñas y su puntuación influyen en la prominencia de un negocio, uno de los factores de su posicionamiento en los resultados locales. Un flujo constante de reseñas auténticas, respondidas con criterio, es uno de los pilares del <Link href="/google-business-profile/" className="text-accent-500 hover:underline">posicionamiento de tu ficha de Google Business Profile</Link> y de tu <Link href="/reputacion-online/" className="text-accent-500 hover:underline">reputación online</Link>.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres un flujo constante de reseñas sin arriesgar tu ficha?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 montamos el circuito de solicitud, los materiales y las respuestas, dentro de las políticas de Google y de la normativa española.</p>
            <Link href="/google-business-profile/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio Google Business Profile
            </Link>
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

          <h2 className="text-2xl font-bold text-primary-600">Fuentes</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {fuentes.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/google-business-profile/" className="text-accent-500 hover:underline">Google Business Profile</Link> · <Link href="/reputacion-online/" className="text-accent-500 hover:underline">Reputación Online</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="resenas-google-como-conseguirlas-legalmente" />
    </>
  );
}
