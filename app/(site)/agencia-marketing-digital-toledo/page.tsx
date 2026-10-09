import type { Metadata } from "next";
import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor } from "@/lib/i18n/routes";

const URL = "https://www.mktweb360.com/agencia-marketing-digital-toledo/";

export const metadata: Metadata = {
  title: "Agencia de marketing digital en Toledo",
  description: "Agencia de marketing digital con sede en Toledo: SEO, Google Maps, IA, Google Ads, diseño web y redes para pymes y profesionales. Precios publicados.",
  alternates: alternatesFor("/agencia-marketing-digital-toledo/") ?? { canonical: URL },
  openGraph: { title: "Agencia de marketing digital en Toledo | Mkt Web 360", description: "Marketing digital para pymes y profesionales de Toledo, con sede en la provincia.", url: URL, images: [{ url: "/og-marketing-digital-toledo.jpg", width: 1200, height: 630 }] },
};

const c: LocalServiceContent = {
  url: URL,
  breadcrumb: "Agencia de marketing digital en Toledo",
  h1: "Agencia de marketing digital en Toledo",
  h1Accent: "para pymes y profesionales que quieren más clientes",
  intro: "Somos Mkt Web 360, agencia de marketing digital con sede en El Viso de San Juan (Toledo). Ayudamos a negocios de la provincia a conseguir clientes por internet: que les encuentren en Google y en Google Maps, que la IA les recomiende y que su web convierta las visitas en contactos.",
  bullets: ["Un único responsable de tu cuenta", "Especialistas por área en cada fase del proyecto", "Google Ads sin comisión sobre tu inversión"],
  porQue: [
    { t: "Empezamos por el diagnóstico", d: "Antes de proponer acciones revisamos tu web, tu ficha de Google y tus datos. Así sabes qué corregir primero y qué no merece la pena hacer todavía." },
    { t: "Precios claros", d: "Publicamos nuestras tarifas y lo que incluye cada una, con sus límites. Sin permanencia en los servicios mensuales." },
    { t: "Medimos lo que importa", d: "Contactos, llamadas y ventas, no solo visitas. Cada mes te enviamos un informe con lo hecho y los siguientes pasos." },
  ],
  queHacemosTitulo: "Servicios de marketing digital para negocios de Toledo",
  queHacemos: [
    { t: "SEO y posicionamiento local", d: "Aparecer en Google y en el mapa cuando buscan tu servicio.", href: "/agencia-seo-toledo/", linkText: "Agencia SEO en Toledo" },
    { t: "Diseño web y tiendas online", d: "Webs rápidas, claras y preparadas para captar contactos.", href: "/diseno-web-toledo/", linkText: "Diseño web en Toledo" },
    { t: "Google Ads", d: "Campañas para captar clientes desde el primer día, sin cobrar porcentaje sobre tu inversión.", href: "/sem-publicidad-ppc/", linkText: "Servicio de Google Ads" },
    { t: "Visibilidad en asistentes de IA (GEO)", d: "Que los asistentes de IA citen y recomienden tu negocio.", href: "/geo-posicionamiento-ia/", linkText: "Servicio de GEO" },
    { t: "Redes sociales", d: "Publicaciones con un objetivo concreto: confianza, comunidad o captación.", href: "/smm-social-media-marketing/", linkText: "Servicio de redes sociales" },
    { t: "Auditoría gratuita", d: "Un diagnóstico SEO y de visibilidad en IA de tu web en tu correo.", href: "/auditoria-digital/", linkText: "Pedir auditoría gratuita" },
  ],
  precios: [
    { nombre: "SEO + GEO + Google Business Profile", precio: "349 €/mes + IVA", detalle: "El paquete más completo para pymes con web de hasta 30 páginas.", href: "/oferta-seo-geo-gbp/" },
    { nombre: "Web + 6 meses de SEO", precio: "999 € + IVA", detalle: "Web profesional lista para posicionar, con hosting, dominio y correo.", href: "/oferta-web-seo-organico/" },
    { nombre: "Calcula tu plan SEO", precio: "Desde 199 €/mes + IVA", detalle: "Planes según el tamaño de tu web, tus sedes y tus idiomas.", href: "/precios-seo/" },
  ],
  contexto: {
    titulo: "Cómo elegir agencia de marketing digital en Toledo",
    parrafos: [
      "Pide siempre que te expliquen qué se va a hacer cada mes, quién lo hace y cómo se va a medir. Desconfía de las garantías de primera posición y de los contratos con permanencia larga sin resultados medibles.",
      "Antes de decidir, compara qué incluye cada propuesta: cuántos contenidos al mes, quién aplica los cambios técnicos, si la ficha de Google forma parte del servicio y con qué herramientas se mide. Las herramientas de medición (Search Console y Google Analytics) deben estar siempre a nombre de tu empresa, trabajes con quien trabajes.",
      "Hemos escrito una guía con las preguntas que conviene hacer y las señales de alerta antes de contratar. Te sirve para valorar cualquier propuesta, también la nuestra.",
    ],
  },
  enlaces: [
    { href: "/agencias-marketing-digital-toledo/", text: "Guía: cómo elegir agencia en Toledo" },
    { href: "/marketing-digital-toledo/", text: "Guía de marketing digital en Toledo" },
    { href: "/precios-seo/", text: "Precios SEO" },
  ],
  faqs: [
    { q: "¿Dónde está la agencia?", a: "Nuestra sede está en Calle Chopo 98, 45215 El Viso de San Juan (Toledo). Trabajamos con negocios de toda la provincia y del resto de España." },
    { q: "¿Trabajáis con autónomos o solo con empresas?", a: "Con ambos. Tenemos planes para profesionales con una web sencilla, para pymes y para empresas con varias sedes o tiendas online." },
    { q: "¿Cobráis comisión sobre la inversión en Google Ads?", a: "No. Cobramos por la gestión, no un porcentaje de lo que inviertes en publicidad." },
    { q: "¿Por dónde empezar si no sé qué necesito?", a: "Por la auditoría gratuita: te enviamos por correo un diagnóstico de tu web en Google y en los asistentes de IA, con las 3 acciones que más impacto tendrían. A partir de ahí decides si lo haces por tu cuenta o con nosotros." },
    { q: "¿Qué datos necesitáis para empezar?", a: "La dirección de tu web y, si los tienes, acceso de lectura a Google Search Console y Google Analytics. Las cuentas siempre quedan a nombre de tu empresa." },
    { q: "¿Hay permanencia?", a: "Los servicios mensuales de SEO no tienen permanencia: puedes darte de baja avisando con 30 días de antelación." },
  ],
  formType: "marketing-toledo",
};

export default function AgenciaMarketingDigitalToledoPage() {
  return (
    <>
      {localServiceSchemas(c, "Marketing digital en Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
