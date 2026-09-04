import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfferBannerWebSeo } from "@/components/offers/OfferBannerWebSeo";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "5 factores clave en la web de un despacho de abogados (2026)",
  description:
    "Colegiación visible, confidencialidad del cliente, arquitectura por área de práctica y prueba social sin infringir la deontología: los 5 factores que definen la web de un despacho de abogados que capta casos.",
  alternates: alternatesFor("/5-factores-web-despacho-abogados/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-despacho-abogados/" },
  openGraph: {
    title: "5 factores clave en la web de un despacho de abogados | Mkt Web 360",
    description: "Colegiación visible, confidencialidad, arquitectura por área de práctica y prueba social sin infringir la deontología.",
    url: "https://www.mktweb360.com/5-factores-web-despacho-abogados/",
    type: "article",
    images: [{ url: "/og-5-factores-web-despacho-abogados.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de un despacho de abogados",
  description:
    "Los 5 factores que definen si la web de un despacho de abogados capta casos: identificación colegial obligatoria, confidencialidad del cliente, arquitectura por área de práctica, prueba social dentro de la deontología y captación con intención inmediata.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-04",
  url: "https://www.mktweb360.com/5-factores-web-despacho-abogados/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-despacho-abogados/",
};

const FAQS = [
  {
    q: "¿Es obligatorio mostrar el número de colegiado en la web del despacho?",
    a: "Sí. El Código Deontológico de la Abogacía Española exige que el abogado se identifique con su número de colegiado, Colegio de adscripción y despacho en las comunicaciones que realice a través de su página web, además del aviso legal completo que exige la LSSI para cualquier prestador de servicios online (NIF, domicilio, datos registrales).",
  },
  {
    q: "¿Puedo publicar testimonios o casos de éxito de clientes?",
    a: "Con matices. El Código Deontológico permite publicidad digna, leal y veraz, pero prohíbe expresamente cualquier publicidad que implique situaciones protegidas por el secreto profesional o que se dirija a personas en momentos de vulnerabilidad (por ejemplo, víctimas de accidentes). Los casos de éxito deben anonimizarse y nunca detallar información que permita identificar al cliente sin su consentimiento expreso.",
  },
  {
    q: "¿Debo pedir detalles del caso en el formulario de contacto de la web?",
    a: "No es recomendable. Un formulario público no es un canal confidencial garantizado. Lo habitual es pedir solo los datos de contacto y una descripción muy general del motivo de consulta, y reservar el detalle del caso para la primera llamada o reunión, donde sí aplica el secreto profesional con todas las garantías.",
  },
  {
    q: "¿Por qué necesito una página distinta por cada área de práctica?",
    a: "Porque quien busca un abogado no busca de forma genérica: busca 'abogado despido improcedente' o 'abogado herencias sin testamento', no 'servicios legales'. Cada área de práctica compite por búsquedas distintas, con intención distinta, y necesita su propia página para posicionar y para convertir. Una sola página de 'áreas de práctica' resumida pierde la mayoría de esas búsquedas.",
  },
  {
    q: "¿Cuánto tarda un despacho en empezar a recibir consultas desde la web?",
    a: "Las primeras consultas suelen llegar en las primeras semanas si el despacho ya tenía cierta reputación local, pero el flujo estable de captación orgánica por área de práctica tarda entre 3 y 6 meses en consolidarse, dependiendo de la competencia de cada especialidad y zona.",
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

export default function FactoresWebAbogadosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de un despacho de abogados" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Despachos de Abogados</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-04">4 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de un despacho de abogados
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de un despacho compite con dos exigencias a la vez: el Código Deontológico de la Abogacía, que limita qué y cómo se puede comunicar, y un cliente que busca de forma muy específica y necesita confiar antes de llamar. Estos son los cinco factores que resuelven ambas cosas.
          </p>
          <Image
            src="/og-5-factores-web-despacho-abogados.jpg"
            alt="5 factores clave en la web de un despacho de abogados"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Un despacho de abogados no vende un producto: vende confianza en un momento en el que el cliente casi siempre está preocupado — un despido, una herencia, un desahucio, una demanda. La web tiene que transmitir esa confianza dentro de un marco muy concreto: el que marca el Código Deontológico de la Abogacía Española, que regula qué publicidad es digna, leal y veraz, y qué cruza la línea.
          </p>
          <p>
            A partir de ahí, hay factores de arquitectura y de captación que determinan si esa confianza se traduce en una llamada o en una pestaña cerrada. Estos son los cinco que más pesan.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">1. Identificación colegial obligatoria</h2>
          <p>
            El Código Deontológico de la Abogacía Española exige que el abogado se identifique con su número de colegiado, el Colegio al que pertenece y el despacho en las comunicaciones que haga a través de su página web. A esto se suma el aviso legal que exige la Ley de Servicios de la Sociedad de la Información (LSSI) para cualquier prestador de servicios online: NIF, domicilio social y datos registrales. No es un trámite menor de pie de página — para un cliente que está comparando despachos, ver esta información visible y completa es una de las primeras señales de que está ante un profesional serio y no ante una web genérica montada sin criterio.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Confidencialidad desde el primer formulario</h2>
          <p>
            Un formulario de contacto público no es un canal con garantías de confidencialidad equivalentes a una consulta. Pedir en él detalles concretos del caso —nombres de la otra parte, cifras, documentación— expone información sensible sin necesidad. El diseño correcto limita el formulario a datos de contacto y un motivo de consulta muy general ("derecho laboral", "herencias"), y traslada el detalle real del caso a la llamada o la reunión, donde sí aplica el secreto profesional con todas las garantías. Esto además reduce la fricción del formulario, que es más corto y más rápido de rellenar.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿La web de tu despacho cumple con el Código Deontológico y capta consultas?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu formulario de contacto y tu estructura por áreas de práctica, y te decimos qué falta para captar más casos sin riesgo deontológico.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Arquitectura por área de práctica, no un listado genérico</h2>
          <p>
            Nadie busca en Google "servicios legales". Busca "abogado despido improcedente Toledo" o "abogado herencias sin testamento". Cada área de práctica —laboral, herencias, penal, mercantil, familia— compite por búsquedas distintas, con intención distinta y con un cliente en un momento vital distinto. Una sola página que resume "áreas de práctica" en tres párrafos pierde la inmensa mayoría de esas búsquedas frente a un despacho que tiene una página propia y bien desarrollada por cada especialidad, con su propia URL, su propio contenido y su propio formulario de contacto adaptado a esa situación concreta.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Prueba social dentro de los límites deontológicos</h2>
          <p>
            El Código Deontológico permite publicidad digna, leal y veraz, pero prohíbe expresamente la que implica situaciones protegidas por el secreto profesional, y es especialmente estricto con la que se dirige a personas en momentos de vulnerabilidad, como víctimas de accidentes. Esto no significa renunciar a la prueba social: significa construirla bien. Casos de éxito anonimizados sin datos identificativos, reseñas reales del despacho gestionadas de forma activa, y biografías del equipo con su formación, especialización y años de colegiación son formas de generar confianza sin cruzar ninguna línea deontológica.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Captación con intención inmediata</h2>
          <p>
            Quien llega a la web de un despacho suele estar en una situación que necesita resolver pronto, no dentro de un mes. El diseño debe reflejar esa urgencia percibida: teléfono visible en todo momento (no solo en la página de contacto), un formulario corto de "primera consulta" claro y sin fricción, y un mensaje directo sobre qué esperar del primer contacto —si es gratuito, cuánto tarda la respuesta, qué información traer—. Cuanta más incertidumbre elimine la web sobre ese primer paso, más consultas se convierten en llamadas reales.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque tú no puedas atender</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras estás en un juicio, en una reunión con un cliente o has cerrado el despacho por el fin de semana, tu web sigue abierta. Alguien que necesita un abogado de despidos un domingo por la noche encuentra tu web, entiende en qué te especializas, ve tu identificación colegial y rellena el formulario de primera consulta — sin que tú tengas que estar disponible en ese momento. Esa es la diferencia entre una web que solo existe y una que capta casos mientras tú trabajas en otra cosa.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de un despacho de abogados sigue captando consultas mientras el abogado está ocupado o fuera de horario"
                width={760}
                height={1131}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="text-accent-500 hover:underline">Páginas web corporativas</Link> · <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu despacho necesita una web que cumpla y que capte casos?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de despachos de abogados con identificación colegial correcta, arquitectura por área de práctica y captación pensada para el primer contacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver páginas corporativas
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de un despacho de abogados</h2>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="text-accent-500 hover:underline">Páginas Web Corporativas</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="5-factores-web-despacho-abogados" />
    </>
  );
}
