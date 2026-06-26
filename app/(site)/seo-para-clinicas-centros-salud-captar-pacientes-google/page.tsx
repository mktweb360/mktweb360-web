import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO para clínicas y centros de salud: cómo captar pacientes en Google",
  description:
    "El 74% de los pacientes busca en Google antes de llamar. SEO específico para clínicas dentales, fisioterapia y centros de salud en España. Capta más pacientes desde el primer mes.",
  alternates: { canonical: "https://www.mktweb360.com/seo-para-clinicas-centros-salud-captar-pacientes-google/" },
  openGraph: {
    title: "SEO para clínicas y centros de salud: cómo captar pacientes en Google | Mkt Web 360",
    description: "SEO específico para clínicas dentales, fisioterapia y centros de salud en España. Capta más pacientes desde Google.",
    url: "https://www.mktweb360.com/seo-para-clinicas-centros-salud-captar-pacientes-google/",
    type: "article",
    images: [{ url: "/og-seo-clinicas-centros-salud-captar-pacientes.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO para clínicas y centros de salud: cómo captar pacientes en Google",
  description: "Guía de SEO específico para clínicas dentales, fisioterapia y centros de salud en España: E-E-A-T médico, Google Business Profile y captación de pacientes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/seo-para-clinicas-centros-salud-captar-pacientes-google/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-para-clinicas-centros-salud-captar-pacientes-google/",
};

const FAQS = [
  {
    q: "¿Por qué el SEO de una clínica es diferente al de otros negocios?",
    a: "Porque la salud es un sector YMYL (Your Money or Your Life) para Google: las decisiones afectan al bienestar de las personas, así que el buscador exige más señales de autoridad y fiabilidad (E-E-A-T). Una clínica debe demostrar experiencia, especialización médica y confianza de forma más explícita que un negocio convencional.",
  },
  {
    q: "¿Cuánto tarda una clínica en notar resultados con SEO?",
    a: "Con una ficha de Google Business Profile bien optimizada, el impacto local suele verse en 4 a 8 semanas. El posicionamiento orgánico de la web para búsquedas competitivas requiere más tiempo, normalmente entre 4 y 8 meses, según la competencia de la zona y el estado inicial.",
  },
  {
    q: "¿Es imprescindible Google Business Profile para una clínica?",
    a: "Sí. Cerca del 80% de los pacientes elige entre las clínicas del Local Pack (el bloque de tres fichas con mapa) antes de llegar a los resultados orgánicos. Sin una ficha optimizada con reseñas, fotos, servicios y horarios, una clínica es prácticamente invisible para la búsqueda local.",
  },
  {
    q: "¿Las reseñas influyen en el posicionamiento de una clínica?",
    a: "Mucho. Son un factor de ranking local de primer orden y, además, el principal motor de confianza antes de la primera llamada. Un flujo constante de reseñas reales, bien gestionadas y respondidas, mejora tanto la visibilidad como la conversión.",
  },
  {
    q: "¿Sirve tener blog en la web de una clínica?",
    a: "Sí, si se hace bien. Un blog que responde a las dudas reales de los pacientes refuerza la autoridad temática y capta búsquedas informativas que luego se convierten en pacientes. El error frecuente es publicar contenido genérico o sin criterio médico, que no aporta ni a Google ni al paciente.",
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

export default function SeoClinicasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO para clínicas y centros de salud" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Salud</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO para clínicas y centros de salud: cómo captar pacientes en Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El 74% de los pacientes busca en Google antes de llamar a una clínica. Si tu centro no aparece cuando alguien busca tu especialidad en tu zona, ese paciente acaba en la consulta de al lado. El SEO sanitario tiene reglas propias, y conviene conocerlas.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Captar pacientes ya no depende del boca a boca ni del cartel en la fachada. Según RankTop (2026), el 74% de los pacientes consulta Google antes de decidir a qué clínica llama. Y la mayoría no pasa de los primeros resultados. Para una clínica dental, un centro de fisioterapia o una consulta de psicología, ser visible en ese momento decide buena parte de la agenda del mes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el SEO de clínicas es diferente</h2>
          <p>La salud es, para Google, un sector YMYL —Your Money or Your Life—: contenidos que pueden afectar al bienestar o las decisiones importantes de una persona. En estas temáticas el buscador eleva el listón y exige más señales de E-E-A-T (experiencia, pericia, autoridad y fiabilidad). Una clínica no compite solo por palabras clave: compite por demostrar que es una fuente médica de confianza. Eso significa información del equipo, titulaciones, especialidades claras y contenido con rigor.</p>

          <h2 className="text-2xl font-bold text-primary-600">La triple intención del paciente</h2>
          <p>Quien busca salud en Google no siempre busca lo mismo. Hay una intención informativa ("por qué duele la mandíbula al masticar"), una local ("dentista cerca de mí abierto hoy") y una transaccional ("pedir cita implante dental Toledo"). Una estrategia de SEO sanitario eficaz cubre las tres: contenido que resuelve dudas, presencia local que capta proximidad y páginas de servicio que convierten la búsqueda en cita. Atender solo una de ellas deja pacientes por el camino.</p>

          <h2 className="text-2xl font-bold text-primary-600">Google Business Profile: el activo principal</h2>
          <p>Para una clínica, la ficha de Google es más importante incluso que la web. Según Updent (2026), cerca del 80% de los pacientes elige entre las clínicas del Local Pack —el bloque de tres fichas con mapa— antes de llegar a los resultados orgánicos. Por eso, optimizar tu <Link href="/google-business-profile/" className="text-accent-500 hover:underline">ficha de Google Business Profile</Link> con categorías correctas, servicios, fotos reales, horarios y un flujo constante de reseñas es la palanca de captación más rentable que tiene un centro de salud.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu clínica aparece cuando buscan tu especialidad en tu zona?</p>
            <p className="text-gray-600 text-sm mb-4">Analizamos tu visibilidad local, tu ficha de Google y tu web, y te decimos qué falta para captar más pacientes.</p>
            <Link href="/seo-local/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver SEO local para clínicas
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Las búsquedas que generan pacientes reales</h2>
          <p>No todas las visitas valen lo mismo. Las búsquedas con intención local y transaccional —"clínica dental [ciudad]", "urgencias fisioterapia [barrio]", "primera consulta psicología [zona]"— son las que llenan la agenda. El trabajo consiste en identificar esas consultas para cada especialidad y zona, y construir páginas que respondan a ellas con claridad: qué ofreces, para quién, con qué garantías y cómo pedir cita. Una clínica con varias especialidades necesita una página por servicio, no una sola página genérica.</p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Errores frecuentes en el blog de una clínica</h2>
          <p>El blog médico mal entendido resta en lugar de sumar. Los errores más comunes: copiar contenido genérico de otras webs (Google penaliza la falta de originalidad, más aún en salud), publicar sin criterio profesional, o redactar para el buscador y no para el paciente. Un buen contenido sanitario responde a una duda real con rigor, transmite confianza y enlaza de forma natural hacia el servicio correspondiente. Calidad y autoridad por encima de cantidad.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuánto tarda en notarse</h2>
          <p>La buena noticia para las clínicas es que la parte local da resultados rápido. Una ficha de Google Business Profile bien optimizada suele tener impacto visible en 4 a 8 semanas. El posicionamiento orgánico de la web para términos competitivos es más lento —de 4 a 8 meses— pero más estable y defendible en el tiempo. Combinando ambos, una clínica puede empezar a captar pacientes desde el primer mes mientras construye una base sólida a medio plazo.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> · <Link href="/google-my-business-empresas-guia/" className="text-accent-500 hover:underline">Guía de Google Business Profile</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Llena la agenda de tu clínica con pacientes de tu zona</h2>
            <p className="text-primary-200 mb-6">
              Trabajamos el SEO sanitario con sus reglas propias: autoridad médica, ficha de Google optimizada y páginas que convierten búsquedas en citas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico para tu clínica
              </Link>
              <Link href="/google-business-profile/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver Google Business Profile
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO para clínicas</h2>
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
            Servicios relacionados: <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link> · <Link href="/google-business-profile/" className="text-accent-500 hover:underline">Google Business Profile</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-para-clinicas-centros-salud-captar-pacientes-google" />
    </>
  );
}
