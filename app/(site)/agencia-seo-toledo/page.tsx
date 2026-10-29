import type { Metadata } from "next";
import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor } from "@/lib/i18n/routes";

const URL = "https://www.mktweb360.com/agencia-seo-toledo/";

export const metadata: Metadata = {
  title: "Agencia SEO en Toledo: posicionamiento web",
  description: "Agencia SEO con sede en Toledo: posicionamiento web, Google Maps y visibilidad en IA para negocios de la provincia. Presupuesto tras un diagnóstico gratuito y sin permanencia.",
  alternates: alternatesFor("/agencia-seo-toledo/") ?? { canonical: URL },
  openGraph: { title: "Agencia SEO en Toledo | Mkt Web 360", description: "Posicionamiento web para negocios de Toledo, con sede en la provincia.", url: URL, images: [{ url: "/og-seo-toledo.jpg", width: 1200, height: 630 }] },
};

const contenido: LocalServiceContent = {
  url: URL,
  breadcrumb: "Agencia SEO en Toledo",
  h1: "Agencia SEO en Toledo",
  h1Accent: "para que te encuentren antes que a tu competencia",
  intro: "Somos una agencia de posicionamiento web con sede en El Viso de San Juan, en La Sagra toledana. Trabajamos el SEO de negocios de Toledo para que aparezcan en Google, en Google Maps y en los asistentes de IA cuando sus clientes buscan lo que ofrecen.",
  bullets: ["Agencia fundada en 2016, con sede en la provincia de Toledo", "SEO + Google Maps + visibilidad en IA", "Diagnóstico gratuito y sin permanencia"],
  porQue: [
    { t: "Estamos en la provincia", d: "Tenemos la sede en La Sagra. Sabemos que no es lo mismo competir en Toledo capital que en un municipio pequeño, y planteamos el SEO de cada negocio según dónde están sus clientes." },
    { t: "Un método, no promesas", d: "Partimos de tus datos de Search Console, revisamos cada error antes de recomendar nada y medimos cada mes. No garantizamos posiciones: nadie puede hacerlo." },
    { t: "Google y la IA a la vez", d: "Cada vez más clientes preguntan a asistentes de IA. Trabajamos tu web para que también te citen y recomienden ahí." },
  ],
  queHacemosTitulo: "Qué hacemos por el SEO de tu negocio en Toledo",
  queHacemos: [
    { t: "Auditoría técnica y de contenidos", d: "Indexación, velocidad, estructura y textos: corregimos lo que frena tu web antes de crear nada nuevo." },
    { t: "Palabras clave de tu servicio y tu zona", d: "Búsquedas reales de clientes de Toledo y alrededores, cada una con su página para que no compitan entre sí." },
    { t: "Google Business Profile", d: "Ficha completa, publicaciones y gestión de reseñas reales para aparecer en el mapa de Google.", href: "/google-business-profile/", linkText: "Servicio de Google Business Profile" },
    { t: "Visibilidad en asistentes de IA", d: "Contenido citable, datos estructurados y coherencia de tu marca en las fuentes que consultan los asistentes.", href: "/geo-posicionamiento-ia/", linkText: "Qué es el GEO" },
  ],
  precios: [
    { nombre: "SEO Local Esencial", precio: "Presupuesto a medida", detalle: "Webs de hasta 10 páginas, 1 ficha de Google y 2 contenidos al mes.", href: "/seo-local/" },
    { nombre: "SEO + GEO + Google Business Profile", precio: "Oferta vigente con precio", detalle: "Webs de hasta 30 páginas, 1 ficha de Google y 5 contenidos al mes. Consulta la oferta y su precio.", href: "/oferta-seo-geo-gbp/" },
    { nombre: "Otros tamaños y tiendas online", precio: "Presupuesto a medida", detalle: "Webs más grandes, varias sedes o ecommerce. Calcula el tamaño de tu proyecto.", href: "/precios-seo/" },
  ],
  contexto: {
    titulo: "Posicionamiento web en Toledo: cómo trabajamos la zona",
    parrafos: [
      "En la provincia de Toledo conviven búsquedas muy distintas: quien busca un servicio en Toledo capital, quien lo busca en su municipio de La Sagra y quien busca sin indicar lugar y deja que Google use su ubicación. Por eso no basta con añadir «Toledo» a los textos: hay que decidir qué páginas trabajan cada zona y cómo se refuerzan con la ficha de Google.",
      "El trabajo de cada mes sigue un orden: primero corregimos lo técnico que impide posicionar, después reforzamos las páginas de los servicios que más te interesan y su relación con la ficha de Google, y por último creamos los contenidos que responden a las dudas de tus clientes antes de contratar. Cada informe mensual explica qué se ha hecho, qué ha cambiado en Search Console y qué haremos después.",
      "Si tu negocio atiende a toda España, la estrategia es otra: posicionamiento nacional por servicio, sin limitarte a una ubicación. Te decimos cuál te conviene después de la auditoría.",
    ],
  },
  enlaces: [
    { href: "/seo-posicionamiento-web-organico/", text: "Nuestro servicio de posicionamiento SEO" },
    { href: "/seo-local/", text: "Servicio de SEO local" },
    { href: "/auditoria-digital/", text: "Auditoría SEO gratuita" },
  ],
  faqs: [
    { q: "¿Dónde está vuestra sede?", a: "En Calle Chopo 98, 45215 El Viso de San Juan (Toledo). Trabajamos con negocios de toda la provincia y del resto de España." },
    { q: "¿Cuánto cuesta el SEO para un negocio de Toledo?", a: "Lo mismo que en cualquier otro lugar: depende del tamaño de tu web y de tus sedes, no del municipio. Tras un diagnóstico gratuito te damos un presupuesto por escrito y sin compromiso; la calculadora de la página de precios SEO te indica el tamaño de proyecto que encaja con tu web." },
    { q: "¿En cuánto tiempo se ven resultados?", a: "Los cambios técnicos se reflejan en semanas; el posicionamiento en búsquedas con competencia suele llevar meses. Lo medimos contra una línea base y te enviamos un informe cada mes." },
    { q: "¿Trabajáis también el mapa de Google?", a: "Sí. La ficha de Google Business Profile forma parte de los planes de SEO local y del paquete SEO + GEO + Google Business Profile." },
    { q: "¿Qué diferencia hay entre SEO local y SEO nacional?", a: "El SEO local trabaja las búsquedas con intención de cercanía («dentista en Toledo», «fontanero en Illescas») y la ficha de Google; el nacional, las búsquedas sin ubicación. Si tus clientes vienen de la provincia, empezamos por el local." },
    { q: "¿Necesito web para aparecer en Google Maps?", a: "No es imprescindible: la ficha de Google puede traer llamadas por sí sola. Pero con una web que tenga una página por servicio puedes aparecer en muchas más búsquedas y recibir solicitudes fuera de tu horario." },
    { q: "¿Cuántas reseñas necesito para aparecer en el mapa?", a: "No hay una cifra mínima. Pesan más las reseñas recientes y constantes que el total acumulado. Las pedimos a todos los clientes, sin incentivos ni filtros, como exigen las normas de Google." },
    { q: "¿Puedo gestionar la ficha de Google yo mismo?", a: "Sí: mantenerla al día, publicar novedades y responder reseñas lleva un par de horas al mes. Lo que conviene delegar es la elección de categorías y servicios, el análisis de la competencia y la relación de la ficha con la web." },
  ],
  formType: "seo-toledo",
};

export default function AgenciaSeoToledoPage() {
  // Sin precios de servicios (decisión 25/10/2026): solo las ofertas vigentes muestran precio.
  const c = contenido;
  return (
    <>
      {localServiceSchemas(c, "Posicionamiento SEO en Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
