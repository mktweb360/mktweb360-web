import type { Metadata } from "next";
import { LocalServicePage, localServiceSchemas, type LocalServiceContent } from "@/components/LocalServicePage";
import { alternatesFor } from "@/lib/i18n/routes";

const URL = "https://www.mktweb360.com/diseno-web-toledo/";

export const metadata: Metadata = {
  title: "Diseño web en Toledo: webs profesionales",
  description: "Diseño de páginas web y tiendas online para negocios de Toledo, con SEO técnico desde el primer día. Sede en la provincia y precios desde 249 € + IVA.",
  alternates: alternatesFor("/diseno-web-toledo/") ?? { canonical: URL },
  openGraph: { title: "Diseño web en Toledo | Mkt Web 360", description: "Páginas web y tiendas online para negocios de Toledo, rápidas y preparadas para Google.", url: URL },
};

const c: LocalServiceContent = {
  url: URL,
  breadcrumb: "Diseño web en Toledo",
  h1: "Diseño web en Toledo",
  h1Accent: "webs que cargan rápido y traen clientes",
  intro: "Diseñamos páginas web y tiendas online para negocios de Toledo desde nuestra sede en El Viso de San Juan. Webs pensadas para que el cliente entienda qué haces, confíe y te contacte, y preparadas para aparecer en Google desde el primer día.",
  bullets: ["Precio cerrado y publicado", "SEO técnico y medición incluidos", "Agencia con sede en la provincia de Toledo"],
  porQue: [
    { t: "Una web es una herramienta de ventas", d: "No la valoramos por lo bonita que queda, sino por si genera contactos: mensajes claros, llamadas a la acción visibles y formularios que funcionan y se miden." },
    { t: "Rápida en el móvil", d: "La mayoría de tus clientes te buscará desde el móvil. Optimizamos imágenes, tipografías y código para que la web cargue rápido donde más importa." },
    { t: "Preparada para Google y la IA", d: "Títulos, estructura, datos estructurados y ficha de Google coherentes desde el lanzamiento, para no tener que rehacer nada después." },
  ],
  queHacemosTitulo: "Qué tipo de webs hacemos para negocios de Toledo",
  queHacemos: [
    { t: "Web corporativa o de servicios", d: "Para profesionales y pymes que necesitan explicar sus servicios y recibir contactos.", href: "/diseno-de-paginas-web/", linkText: "Servicio de diseño web" },
    { t: "Tienda online", d: "Tiendas sin comisiones por venta ni licencias mensuales, con catálogo, pasarela de pago y SEO técnico.", href: "/tienda-online/", linkText: "Tienda online desde 490 €" },
    { t: "Rediseño de una web existente", d: "Si tu web ya posiciona, la rediseñamos sin perder lo ganado: mismas URLs o redirecciones bien planteadas." },
    { t: "Web + SEO desde el inicio", d: "Lanzamos la web y la posicionamos durante los primeros meses con el mismo equipo.", href: "/oferta-web-seo-organico/", linkText: "Web + 6 meses de SEO" },
  ],
  precios: [
    { nombre: "Web profesional", precio: "Desde 249 € + IVA", detalle: "Diseño y desarrollo de la web, sin el paquete de SEO.", href: "/oferta-web-seo-organico/" },
    { nombre: "Web + 6 meses de SEO", precio: "999 € + IVA", detalle: "Web profesional con hosting, dominio, correo y 6 meses de posicionamiento.", href: "/oferta-web-seo-organico/" },
    { nombre: "Tienda online", precio: "Desde 490 €", detalle: "Tienda sin comisiones por venta ni licencias mensuales.", href: "/tienda-online/" },
  ],
  contexto: {
    titulo: "Cómo planteamos una web para un negocio de Toledo",
    parrafos: [
      "Empezamos por lo que el cliente busca cuando necesita tu servicio: qué palabras usa, si busca en Toledo capital o en su municipio, y qué necesita ver para decidirse. Con eso definimos las páginas, los textos y las llamadas a la acción antes de diseñar.",
      "Durante el desarrollo trabajamos sobre una versión de pruebas para que la revises antes de publicar, y preparamos los textos legales, la política de cookies y los formularios con su protección contra el spam. Al lanzar, damos de alta la web en Google Search Console y enviamos el mapa del sitio para que Google la descubra cuanto antes.",
      "Después la web se mide: contactos por formulario, llamadas y clics de WhatsApp. Así sabes qué te trae clientes y qué no, y puedes decidir con datos dónde invertir.",
    ],
  },
  enlaces: [
    { href: "/diseno-de-paginas-web/", text: "Nuestro servicio de diseño web" },
    { href: "/cuanto-cuesta-pagina-web-profesional/", text: "Cuánto cuesta una página web profesional" },
    { href: "/marketing-digital-toledo/", text: "Guía de marketing digital en Toledo" },
  ],
  faqs: [
    { q: "¿Cuánto cuesta una página web en Toledo?", a: "Nuestros precios son los mismos en toda España: web profesional desde 249 € + IVA, web con 6 meses de SEO por 999 € + IVA y tienda online desde 490 €. Te enviamos un presupuesto cerrado según lo que necesites." },
    { q: "¿La web incluye hosting y dominio?", a: "El paquete de web + 6 meses de SEO incluye hosting, dominio, correo corporativo y páginas legales. En el resto de opciones te lo indicamos en el presupuesto." },
    { q: "¿Podéis rediseñar mi web sin perder posicionamiento?", a: "Sí. Revisamos qué páginas reciben visitas y desde qué búsquedas, y mantenemos las URLs o creamos redirecciones a la página equivalente para conservar lo ganado." },
    { q: "¿Cuánto se tarda en tener la web publicada?", a: "Depende del tamaño y de que tengamos a tiempo los textos, las fotos y los datos legales del negocio. Al aceptar el presupuesto te damos un calendario con las fechas de revisión y de publicación." },
    { q: "¿Quién escribe los textos de la web?", a: "Podemos partir de los tuyos o redactarlos con la información que nos des sobre tus servicios. En ambos casos los adaptamos para que respondan a lo que busca tu cliente y a las búsquedas que te interesan en Google." },
    { q: "¿Dónde estáis?", a: "En Calle Chopo 98, 45215 El Viso de San Juan (Toledo). Trabajamos con negocios de toda la provincia y del resto de España." },
  ],
  formType: "diseno-web-toledo",
};

export default function DisenoWebToledoPage() {
  return (
    <>
      {localServiceSchemas(c, "Diseño web en Toledo").map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <LocalServicePage c={c} />
    </>
  );
}
