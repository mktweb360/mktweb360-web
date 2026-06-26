import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Qué poner en la biografía de Instagram para empresas — Guía 2025",
  description:
    "Descubre qué poner en la biografía de Instagram de tu empresa para captar más seguidores y clientes. Ejemplos reales y consejos prácticos.",
  alternates: { canonical: "https://www.mktweb360.com/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/" },
  openGraph: {
    title: "Qué poner en la biografía de Instagram para empresas — Guía 2025 | Mkt Web 360",
    description: "Descubre qué poner en la biografía de Instagram de tu empresa para captar más seguidores y clientes. Ejemplos reales y consejos prácticos.",
    url: "https://www.mktweb360.com/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/",
    type: "article",
    images: [{ url: "/og-instagram-para-empresas-biografia.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Qué poner en la biografía de Instagram para empresas: guía completa con ejemplos",
  description: "Descubre qué poner en la biografía de Instagram de tu empresa para captar más seguidores y clientes. Ejemplos reales y consejos prácticos.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-06-12",
  url: "https://www.mktweb360.com/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/",
  mainEntityOfPage: "https://www.mktweb360.com/instagram-para-empresas-que-poner-en-la-biografia-de-instagram/",
};

const FAQS = [
  {
    q: "¿Cuántos caracteres tiene la biografía de Instagram?",
    a: "La biografía de Instagram permite un máximo de 150 caracteres. Por eso es fundamental ser conciso y directo con tu propuesta de valor.",
  },
  {
    q: "¿Puedo poner varios enlaces en la bio de Instagram?",
    a: "Instagram solo permite un enlace en la biografía. Para incluir varios, puedes usar herramientas como Linktree o crear una página propia con tus enlaces principales.",
  },
  {
    q: "¿Debo usar hashtags en la bio de Instagram?",
    a: "Puedes incluir 1-2 hashtags de marca en la biografía, pero no abuses. Los hashtags genéricos en la bio no mejoran el alcance. Es más útil el espacio para tu propuesta de valor.",
  },
  {
    q: "¿Cada cuánto debo actualizar la bio de Instagram?",
    a: "Actualiza tu bio cuando cambies de oferta, lances una promoción o tengas un evento. El enlace en bio debe estar siempre actualizado con tu página o oferta más relevante del momento.",
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

const elementos = [
  { titulo: "Nombre de empresa o marca", desc: "El nombre de tu negocio, tal como lo conocen tus clientes. Puede incluir tu especialidad principal para ganar claridad." },
  { titulo: "Propuesta de valor clara", desc: "En una línea, explica qué haces y para quién. Evita tecnicismos. Ejemplo: 'Ayudamos a pymes a crecer en internet'." },
  { titulo: "Enlace web", desc: "Es el único enlace que permite Instagram. Apunta siempre a tu página más relevante: web principal, landing de oferta o Linktree." },
  { titulo: "Llamada a la acción (CTA)", desc: "Indica qué debe hacer quien visita tu perfil: 'Solicita presupuesto', 'Descarga la guía gratis', 'Reserva tu cita'." },
  { titulo: "Emojis estratégicos", desc: "Úsalos para estructurar visualmente la bio y dar personalidad. Un emoji por punto clave es suficiente. No abuses." },
  { titulo: "Hashtag de marca", desc: "Si tienes un hashtag propio (#TuMarca o #TuSlogan), inclúyelo en la bio para fomentar que tu comunidad lo use." },
];

const ejemplosBios = [
  {
    tipo: "Tienda de ropa",
    bio: "👗 Moda sostenible para mujer\n✅ Envíos en 24h — Devolución gratis\n🛍️ Nueva colección disponible\n🔗 tienda.ejemplo.com",
    analisis: "Clara, directa, con beneficios tangibles (envíos y devoluciones) y CTA implícito con el enlace.",
  },
  {
    tipo: "Servicio profesional (consultoría)",
    bio: "📊 Estrategia digital para pymes\n🎯 +200 empresas captando clientes online\n📩 DM o link para auditoría gratuita",
    analisis: "Incluye prueba social (200 empresas), propuesta de valor clara y llamada a la acción directa.",
  },
  {
    tipo: "Restaurante",
    bio: "🍕 Pizzería artesanal en Madrid · Centro\n📅 Reservas en el link\n🕐 Mar–Dom 13:00–23:30",
    analisis: "Localización, horario y reservas resuelven las tres preguntas clave del cliente antes de visitarte.",
  },
];

const errores = [
  { error: "No tener enlace en la bio", desc: "El enlace es la única vía de llevar tráfico desde Instagram a tu web. Sin él, pierdes conversiones directas." },
  { error: "Biografía genérica o vacía", desc: "Frases como 'Bienvenidos a nuestra página oficial' no dicen nada. El visitante no sabe qué ofreces ni si es para él." },
  { error: "Sin llamada a la acción", desc: "No basta con describir tu negocio. Debes indicar qué debe hacer el usuario: reservar, comprar, contactar, descargar." },
  { error: "Solo hashtags sin contexto", desc: "Llenar la bio de hashtags genéricos no mejora el alcance y ocupa espacio valioso de tus 150 caracteres." },
];

const checklist = [
  "Nombre o marca claramente identificable",
  "Descripción de qué haces en una línea",
  "Beneficio principal o propuesta de valor",
  "Llamada a la acción concreta",
  "Enlace web actualizado",
  "Emojis para estructurar (máximo 3-4)",
  "Hashtag de marca (opcional pero recomendable)",
  "Información de contacto o localización (si aplica)",
];

export default function InstagramBioEmpresasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Qué poner en la bio de Instagram para empresas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Social Media</span>
            <time className="text-sm text-gray-400" dateTime="2025-06-12">12 de junio de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Qué poner en la biografía de Instagram para empresas: guía completa con ejemplos
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La biografía de Instagram es tu tarjeta de presentación digital. Tienes 150 caracteres para convencer a un visitante de que merece la pena seguirte o contactarte. Cada palabra cuenta.
          </p>
          <Image
            src="/og-instagram-para-empresas-biografia.jpg"
            alt="Qué poner en la biografía de Instagram para empresas — Guía 2025"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cuando alguien llega a tu perfil de Instagram, tarda menos de 3 segundos en decidir si te sigue o se va. La biografía es lo primero que lee después de tu foto de perfil. Una bio bien construida puede marcar la diferencia entre un visitante que rebota y un cliente que contacta.
          </p>
          <p>
            El problema es que la mayoría de empresas desperdician esos 150 caracteres con frases genéricas, demasiados hashtags o información irrelevante. Esta guía te explica exactamente qué incluir, con ejemplos reales y un checklist final.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Elementos imprescindibles en tu bio de Instagram</h2>
          <ul className="space-y-3">
            {elementos.map((e) => (
              <li key={e.titulo} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <div>
                  <span className="font-semibold text-gray-800">{e.titulo}: </span>
                  <span className="text-gray-600 text-sm">{e.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Ejemplos de biografías efectivas para empresas</h2>
          <div className="space-y-4">
            {ejemplosBios.map((ej) => (
              <div key={ej.tipo} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-primary-50 px-4 py-2 border-b border-gray-200">
                  <span className="font-semibold text-primary-700 text-sm">{ej.tipo}</span>
                </div>
                <div className="px-4 py-3">
                  <pre className="font-sans text-sm text-gray-800 whitespace-pre-wrap mb-2 bg-gray-50 p-3 rounded-lg">{ej.bio}</pre>
                  <p className="text-xs text-gray-500">{ej.analisis}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Errores más comunes en la bio de Instagram</h2>
          <ul className="space-y-3">
            {errores.map((e) => (
              <li key={e.error} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                <div>
                  <span className="font-semibold text-gray-800">{e.error}: </span>
                  <span className="text-gray-600 text-sm">{e.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Checklist: 8 elementos que debe tener tu bio</h2>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <ul className="space-y-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-primary-600 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la bio de Instagram</h2>
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

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Necesitas ayuda con tu estrategia en redes sociales?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 gestionamos redes sociales para empresas que quieren resultados reales: más seguidores, más interacciones y más clientes desde Instagram.
            </p>
            <Link href="/smm-social-media-marketing/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors inline-block">
              Ver servicio de redes sociales
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/smm-social-media-marketing/" className="text-accent-500 hover:underline">Social Media Marketing</Link> · <Link href="/marketing-de-contenidos/" className="text-accent-500 hover:underline">Marketing de Contenidos</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="instagram-para-empresas-que-poner-en-la-biografia-de-instagram" />
    </>
  );
}
