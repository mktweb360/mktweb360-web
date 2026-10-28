import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

export const metadata: Metadata = {
  title: "10 errores digitales al montar un negocio",
  description:
    "Arrancar un negocio con errores digitales cuesta dinero y tiempo. Descubre los más frecuentes y cómo evitarlos desde el principio.",
  alternates: alternatesFor("/errores-digitales-negocio-nuevo/") ?? { canonical: "https://www.mktweb360.com/errores-digitales-negocio-nuevo/" },
  openGraph: {
    title: "10 errores digitales al montar un negocio desde cero (y cómo evitarlos) | Mkt Web 360",
    description: "Arrancar un negocio con errores digitales cuesta dinero y tiempo. Descubre los más frecuentes y cómo evitarlos desde el principio.",
    url: "https://www.mktweb360.com/errores-digitales-negocio-nuevo/",
    type: "article",
    images: [{ url: "/og-errores-digitales-negocio-nuevo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "10 errores digitales al montar un negocio desde cero (y cómo evitarlos)",
  description: "Arrancar un negocio con errores digitales cuesta dinero y tiempo. Descubre los más frecuentes y cómo evitarlos desde el principio.",
  author: autorSchema(),
  publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  url: "https://www.mktweb360.com/errores-digitales-negocio-nuevo/",
  mainEntityOfPage: "https://www.mktweb360.com/errores-digitales-negocio-nuevo/",
  inLanguage: "es-ES",
  image: "https://www.mktweb360.com/og-errores-digitales-negocio-nuevo.jpg",
};

const FAQS = [
  {
    q: "¿Qué es lo primero que debo hacer digitalmente cuando monto un negocio?",
    a: "Asegurar el nombre de dominio y crear la ficha de Google. Son dos pasos rápidos, gratuitos o muy baratos, y que conviene hacer antes de que alguien más los ocupe.",
  },
  {
    q: "¿Necesito una web cara para empezar?",
    a: "No. Necesitas una web que funcione bien, transmita confianza y esté optimizada básicamente para SEO. El coste puede ser razonable si se trabaja con las prioridades correctas desde el inicio.",
  },
  {
    q: "¿Es un error empezar vendiendo solo en redes sociales sin web?",
    a: "Puede funcionar al principio, pero es arriesgado a medio plazo. Las redes sociales cambian sus algoritmos, pueden suspender cuentas o reducir el alcance orgánico. Una web propia es un activo que controlas tú.",
  },
  {
    q: "¿Cuándo tiene sentido invertir en publicidad online siendo un negocio nuevo?",
    a: "Cuando tienes la base resuelta: la web funciona, el mensaje es claro y hay capacidad de atender los contactos que lleguen. Invertir en publicidad antes de eso suele ser dinero perdido.",
  },
  {
    q: "¿Qué métricas debería mirar al empezar?",
    a: "Las básicas: visitas a la web, fuentes de tráfico, páginas más visitadas y tasa de rebote. No hace falta un dashboard complejo — con Google Analytics básico y Google Search Console es suficiente para empezar a entender qué funciona.",
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

export default function ErroresDigitalesNegocioNuevoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Errores digitales al montar un negocio" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Emprendedores</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
            <AuthorByline />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            10 errores digitales al montar un negocio desde cero (y cómo evitarlos)
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cuando montas un negocio nuevo, los errores digitales son los que más se repiten y los que más coste silencioso generan. La mayoría son evitables con información y un poco de orden. Aquí los más frecuentes.
          </p>
          <Image
            src="/og-errores-digitales-negocio-nuevo.jpg"
            alt="10 errores digitales al montar un negocio desde cero (y cómo evitarlos)"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Emprender en 2026 implica tomar decisiones digitales desde el primer día. Dominio, web, redes, publicidad, herramientas de gestión — y hacerlo bajo presión, con poco tiempo y muchas otras cosas en la cabeza. No es raro cometer errores que después cuestan dinero o tiempo para corregir.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">No asegurar el dominio y las redes sociales desde el principio</h2>
          <p>El nombre de dominio de tu negocio puede estar ocupado si esperas. Lo mismo con los perfiles de redes sociales. El primer día, o incluso antes de abrir, conviene registrar el dominio y reservar el nombre de usuario en las redes que vayas a usar — aunque todavía no las actives. Es rápido, barato y evita encontrarte con que alguien más usa tu nombre en internet.</p>

          <h2 className="text-2xl font-bold text-primary-600">Lanzar una web sin SEO básico</h2>
          <p>A una web que no está mínimamente optimizada para buscadores le cuesta mucho aparecer en Google. No hace falta una estrategia SEO compleja desde el inicio, pero sí una web bien estructurada, con títulos y descripciones correctos, velocidad de carga aceptable y contenido que responde las búsquedas que hacen tus clientes potenciales. Sin eso, la web existe pero no trabaja. Por eso nuestra <Link href="/oferta-web-seo-organico/" className="text-accent-500 hover:underline">web profesional para negocios que empiezan</Link> ya sale con el SEO técnico de base hecho: estructura, títulos, descripciones y velocidad.</p>

          <h2 className="text-2xl font-bold text-primary-600">No crear ni verificar la ficha de Google Business Profile</h2>
          <p>Muchos negocios nuevos abren sin crear su ficha de Google. Eso significa no aparecer en el mapa local, no recibir las visitas que llegarían de búsquedas locales y perder visibilidad frente a competidores que sí la tienen activa. Crear la ficha es gratuito y lleva poco tiempo; la verificación de Google puede tardar unos días, así que conviene empezar pronto. Si no tienes tiempo de trabajarla, existe la opción de <Link href="/google-business-profile/" className="text-accent-500 hover:underline">delegar la gestión de tu ficha de Google</Link> (fotos, publicaciones y respuesta a reseñas). No hacerlo desde el principio es uno de los errores que más pesan en la captación local.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás montando un negocio y quieres evitar errores costosos?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a construir una presencia digital desde el inicio con orden: dominio, web, SEO básico y ficha de Google bien trabajada.</p>
            <Link href="/diseno-de-paginas-web/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver opciones de diseño web
            </Link>
          </div>

          <BlogBanner
            badge="Para negocios que empiezan"
            title="Empieza con una web que ya trabaja para ti"
            desc="Diseño a medida integrado en WordPress para que edites tú los contenidos, adaptado a móvil, con formulario de contacto, páginas legales básicas y SEO técnico de base. Sin permanencia."
            cta="Ver la oferta de web profesional"
            href="/oferta-web-seo-organico/"
            secondary={{ text: "¿Ya has abierto? Pide la auditoría gratuita y mira qué corregir", href: "/auditoria-digital/" }}
          />

          <h2 className="text-2xl font-bold text-primary-600">Invertir en publicidad antes de tener la base resuelta</h2>
          <p>Arrancar Google Ads o Meta Ads cuando la web no convierte, el mensaje no está claro o no hay capacidad de responder los contactos es gastar dinero para atraer tráfico que no se va a convertir. La publicidad amplifica lo que ya funciona — si nada funciona bien, la amplificación del problema es cara. La base primero, la publicidad después.</p>

          <h2 className="text-2xl font-bold text-primary-600">Depender solo de las redes sociales como canal digital principal</h2>
          <p>Las redes sociales son canales prestados. Los algoritmos cambian, el alcance orgánico se reduce, las cuentas pueden suspenderse. Una pyme que construye toda su presencia digital sobre redes sociales sin tener web propia y lista de contactos propia está construyendo sobre terreno que no controla. Las redes son un canal más — no la base.</p>

          <h2 className="text-2xl font-bold text-primary-600">No medir nada desde el principio</h2>
          <p>Sin métricas no hay aprendizaje. Instalar Google Analytics y Google Search Console desde el inicio es gratuito y tarda poco. Tener datos desde el primer mes permite entender qué funciona, de dónde viene el tráfico y qué páginas convierten. Empezar a medir tarde significa perder semanas o meses de datos que habrían permitido tomar mejores decisiones antes.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/como-darse-de-alta-autonomo/" className="text-accent-500 hover:underline">Cómo darse de alta como autónomo en 2026</Link> · <Link href="/como-digitalizar-tu-negocio/" className="text-accent-500 hover:underline">Cómo digitalizar tu negocio sin complicarte la vida</Link>
          </p>

          <div className="mw-skin-cta text-white rounded-3xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Ya has cometido alguno de estos errores?</h2>
            <p className="text-primary-200 mb-6">
              Pide la auditoría gratuita: revisamos tu web, tu ficha de Google y tu visibilidad en la IA, y te decimos qué corregir primero. Si aún no tienes web, mira qué incluye la nuestra para negocios que empiezan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Pedir la auditoría gratuita
              </Link>
              <Link href="/oferta-web-seo-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver la web profesional
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre errores digitales en negocios nuevos</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicio relacionado: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="errores-digitales-negocio-nuevo" />
    </>
  );
}
