import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfferBannerWebSeo } from "@/components/offers/OfferBannerWebSeo";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "5 factores clave en la web de una inmobiliaria (2026)",
  description:
    "Certificado energético obligatorio, sindicación con portales, velocidad de carga con fotografía pesada, buscador de propiedades y captación de leads por inmueble: los 5 factores clave en la web de una inmobiliaria.",
  alternates: alternatesFor("/5-factores-web-inmobiliaria/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-inmobiliaria/" },
  openGraph: {
    title: "5 factores clave en la web de una inmobiliaria | Mkt Web 360",
    description: "Certificado energético obligatorio, sindicación con portales, velocidad de carga y buscador de propiedades.",
    url: "https://www.mktweb360.com/5-factores-web-inmobiliaria/",
    type: "article",
    images: [{ url: "/og-5-factores-web-inmobiliaria.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una inmobiliaria",
  description:
    "Los 5 factores que definen si la web de una inmobiliaria vende: certificado energético obligatorio en cada ficha, sindicación con portales, velocidad con fotografía pesada, buscador avanzado de propiedades y captación de leads cualificados por inmueble.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-04",
  url: "https://www.mktweb360.com/5-factores-web-inmobiliaria/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-inmobiliaria/",
};

const FAQS = [
  {
    q: "¿Es obligatorio mostrar el certificado energético en la ficha de cada inmueble?",
    a: "Sí. El Real Decreto 390/2021 obliga a incluir la calificación de eficiencia energética en cualquier soporte publicitario de venta o alquiler, páginas web y portales inmobiliarios incluidos. El certificado debe obtenerse antes de anunciar el inmueble, y la etiqueta energética debe mostrarse de forma visible en el anuncio, no solo entregarse al firmar.",
  },
  {
    q: "¿Necesito cargar mis inmuebles a mano en Idealista o Fotocasa además de en mi web?",
    a: "No debería. Lo eficiente es que tu web genere un feed XML (formato Avancxml u otro estándar del sector) que se sincronice automáticamente con los portales, de forma que cada inmueble se dé de alta, se actualice o se retire una sola vez, en tu propia web, y se replique solo en el resto de canales.",
  },
  {
    q: "¿Por qué las webs de inmobiliarias suelen ir lentas?",
    a: "Casi siempre por las fotografías: una ficha de inmueble puede tener 20-30 imágenes en alta resolución sin optimizar. Sin compresión, formatos modernos (WebP/AVIF) y carga diferida (lazy loading), el peso de esas imágenes es el principal responsable de tiempos de carga altos, que penalizan tanto la experiencia del usuario como el posicionamiento en Google.",
  },
  {
    q: "¿Qué filtros no pueden faltar en el buscador de propiedades?",
    a: "Como mínimo: zona o localidad, tipo de operación (venta o alquiler), rango de precio, número de habitaciones y metros cuadrados. Son los criterios con los que la mayoría de usuarios empieza a filtrar, y si faltan, el usuario abandona la búsqueda antes de ver ningún resultado.",
  },
  {
    q: "¿Puedo usar en mi web fotos de un inmueble en las que aparecen personas u objetos personales del propietario?",
    a: "Es recomendable evitarlo salvo autorización expresa del propietario o de las personas que aparecen. La imagen de terceros identificables está protegida y, además, las fotos con objetos personales reducen la capacidad del comprador de proyectarse en la vivienda. Lo habitual es virtual staging o fotografía sin presencia de personas.",
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

export default function FactoresWebInmobiliariaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una inmobiliaria" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Inmobiliarias</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-04">4 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una inmobiliaria
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de una inmobiliaria vive de la fotografía y del volumen de inmuebles, y eso es exactamente lo que más suele fallar: peso de imagen sin optimizar, carga manual en cada portal y fichas sin la información obligatoria. Estos son los cinco factores que marcan la diferencia.
          </p>
          <Image
            src="/og-5-factores-web-inmobiliaria.jpg"
            alt="5 factores clave en la web de una inmobiliaria"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una inmobiliaria no vende una vivienda desde su web: la muestra, la compara y la filtra. El comprador o inquilino decide en gran medida antes de llamar, a partir de las fotos, el precio y los datos del inmueble que ve en pantalla. Eso convierte a la web en un catálogo vivo, no en una tarjeta de presentación, y le exige un nivel de rendimiento y de cumplimiento normativo que muchas webs del sector todavía no tienen resuelto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">1. Certificado de eficiencia energética en cada ficha</h2>
          <p>
            El Real Decreto 390/2021 obliga a incluir la calificación de eficiencia energética en cualquier soporte publicitario de venta o alquiler de un inmueble —web y portales incluidos— y establece que el certificado debe obtenerse antes de anunciarlo, no después. En la práctica, esto significa que la ficha de cada inmueble en tu web necesita un campo obligatorio y visible para la etiqueta energética (de la A a la G), y que el proceso de alta de un inmueble debe bloquear la publicación si ese dato falta. No es un detalle estético: es un requisito legal que aplica tanto a particulares como a empresas inmobiliarias.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Sindicación automática con los portales</h2>
          <p>
            Cargar cada inmueble a mano en la web, en Idealista, en Fotocasa y en Habitaclia multiplica el trabajo y multiplica el riesgo de que un inmueble aparezca desactualizado en algún canal —vendido en la web pero disponible todavía en un portal—. La solución técnica correcta es que la web genere un feed XML (formato Avancxml u otro estándar del sector) que se sincronice automáticamente con cada portal: un inmueble se da de alta, se actualiza de precio o se retira una sola vez, en la propia web, y el cambio se replica solo en el resto de canales.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web inmobiliaria cumple con el certificado energético y sincroniza bien con los portales?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tus fichas de inmueble y tu velocidad de carga, y te decimos exactamente qué está frenando la captación de leads.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Velocidad de carga con fotografía pesada</h2>
          <p>
            Una ficha de inmueble puede tener entre 20 y 30 fotografías en alta resolución, y ese volumen de imagen sin optimizar es, con diferencia, el principal responsable de que las webs inmobiliarias vayan lentas. La solución no es reducir la calidad de las fotos —son el elemento que más vende— sino optimizar el formato (WebP o AVIF en lugar de JPG sin comprimir), servir tamaños distintos según el dispositivo y cargar las imágenes de forma diferida (lazy loading) para que solo se descarguen las que el usuario realmente ve. Una ficha que tarda más de tres segundos en mostrar las fotos pierde usuarios antes de que lleguen a valorar el inmueble.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Buscador avanzado de propiedades</h2>
          <p>
            El buscador es la puerta de entrada real al catálogo, y necesita como mínimo los filtros con los que empieza a decidir cualquier usuario: zona o localidad, tipo de operación (venta o alquiler), rango de precio, número de habitaciones y metros cuadrados. Un buscador que obliga a abrir inmuebles uno por uno para descubrir el precio, o que no permite combinar zona y presupuesto, genera abandono inmediato. La experiencia de filtrado es, para una inmobiliaria, lo que el catálogo de producto es para una tienda online: el elemento de conversión más importante de toda la web.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Captación de leads cualificados por inmueble</h2>
          <p>
            Un formulario genérico de "contacto" al final de la web capta muchos menos leads que un formulario específico en cada ficha de inmueble ("Solicitar visita a este piso", con el inmueble ya identificado). Ese contexto reduce la fricción, mejora la calidad del lead —el comercial sabe exactamente qué inmueble interesa antes de descolgar el teléfono— y permite medir qué inmuebles generan más interés real, información que también sirve para ajustar precio o estrategia de venta. La captación por inmueble, no genérica, es lo que convierte tráfico en visitas concertadas.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque tú no puedas atender</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras enseñas un piso, cierras una operación o la oficina ya está cerrada por la tarde, tu web sigue abierta. Alguien que busca piso en tu zona un sábado por la noche filtra por precio y habitaciones, ve las fotos de cada inmueble y pide visita para el que le interesa — sin que tú tengas que estar disponible para atenderlo en ese momento. Esa es la diferencia entre un catálogo que solo existe y uno que capta leads mientras tú trabajas en otra cosa.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una inmobiliaria sigue captando leads mientras el agente está ocupado o fuera de horario"
                width={760}
                height={1131}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Diseño de tiendas online</Link> · <Link href="/senales-web-necesita-rediseno/" className="text-accent-500 hover:underline">Señales de que tu web necesita un rediseño</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu inmobiliaria necesita una web rápida, legal y que capte leads?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de inmobiliarias con certificado energético integrado, sindicación con portales, buscador avanzado y captación por inmueble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño web corporativo
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una inmobiliaria</h2>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/paginas-corporativas/" className="text-accent-500 hover:underline">Diseño Web Corporativo</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="5-factores-web-inmobiliaria" />
    </>
  );
}
