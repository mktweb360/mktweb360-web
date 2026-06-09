import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cómo puede un autónomo conseguir clientes por Internet en 2025",
  description:
    "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
  alternates: { canonical: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/" },
  openGraph: {
    title: "Cómo puede un autónomo conseguir clientes por Internet en 2025 | Mkt Web 360",
    description: "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
    url: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca",
  description: "Descubre cómo puede un autónomo conseguir clientes por Internet con una base digital clara, rentable y sin depender solo del boca a boca.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-05-05",
  url: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
  mainEntityOfPage: "https://www.mktweb360.com/como-puede-un-autonomo-conseguir-clientes-por-internet/",
};

const FAQS = [
  {
    q: "¿Necesita un autónomo una web para conseguir clientes online?",
    a: "No es imprescindible para empezar, pero sí muy recomendable para crecer de forma sostenida. Una web permite posicionar en Google búsquedas de tu servicio en tu zona, transmitir profesionalidad y generar contactos mientras duermes. Sin web, dependes exclusivamente de redes sociales y del boca a boca.",
  },
  {
    q: "¿Cuánto debería invertir un autónomo en marketing digital?",
    a: "No hay una cifra fija, pero un autónomo que empieza puede obtener buenos resultados con una inversión de entre 100 € y 300 € al mes entre herramientas, publicidad local y mantenimiento web. Lo más importante es priorizar bien: primero la ficha de Google, después la web, después la publicidad.",
  },
  {
    q: "¿Las redes sociales ayudan a conseguir clientes siendo autónomo?",
    a: "Depende del sector. En algunos (fotografía, diseño, hostelería) las redes son un canal de captación importante. En otros (fontanería, asesoría, instalaciones), el cliente busca en Google cuando necesita el servicio — y las redes tienen un papel secundario. No inviertas tiempo en redes si tus clientes buscan en Google.",
  },
  {
    q: "¿Cómo pido reseñas en Google sin resultar pesado?",
    a: "La forma más natural es pedir la reseña justo después de terminar el trabajo, cuando el cliente está más satisfecho. Un mensaje de WhatsApp con el enlace directo a tu ficha de Google facilita mucho el proceso. También puedes añadir el enlace en tu firma de email o en una tarjeta de visita digital.",
  },
  {
    q: "¿Puedo competir con empresas grandes siendo autónomo?",
    a: "Sí, especialmente en búsquedas locales y de nicho. Google no da preferencia automática a las empresas grandes — da preferencia a las páginas más relevantes para la búsqueda. Un autónomo bien posicionado localmente, con buenas reseñas y web optimizada, puede aparecer por encima de grandes empresas en búsquedas de su zona.",
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

export default function AutonomoClientesInternetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo puede un autónomo conseguir clientes por Internet" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos · Captación</span>
            <time className="text-sm text-gray-400" dateTime="2025-05-05">5 de mayo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo puede un autónomo conseguir clientes por Internet sin depender solo del boca a boca
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las recomendaciones funcionan, pero son impredecibles. Construir una presencia digital te permite generar un flujo constante de clientes que te encuentran cuando te necesitan, no solo cuando alguien te recomienda.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El boca a boca es el canal de captación más barato — cuando funciona. El problema es que no puedes controlarlo ni escalarlo. Hay meses buenos y meses en que el teléfono no suena. Construir presencia digital es construir un sistema de captación que trabaja para ti aunque estés en una obra, en una reunión o durmiendo.
          </p>
          <p>
            No hace falta una presencia digital compleja ni una inversión grande. La mayoría de autónomos que consiguen clientes online lo hacen con tres elementos bien ejecutados: una ficha de Google optimizada, una web con la página de su servicio bien escrita y reseñas activas. Eso ya marca la diferencia frente a la mayoría de la competencia.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Si solo pudieras hacer 3 cosas este mes</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Optimizar tu ficha de Google Business Profile",
                desc: "Si no tienes ficha, créala ahora. Si la tienes, asegúrate de que tiene: fotos reales (de ti, de tu trabajo, de antes y después), descripción clara de tus servicios, horario correcto, zona de servicio definida y categoría principal bien elegida. Esta sola acción puede generar llamadas directas sin web ni inversión publicitaria.",
              },
              {
                num: "02",
                title: "Tener una web con página de servicio clara",
                desc: "No necesitas una web enorme. Necesitas una página que explique qué haces, para quién, en qué zona, qué incluye, y cuánto cuesta orientativamente. Con un formulario o número de teléfono visible. Una sola página bien escrita puede posicionar para búsquedas de tu servicio en tu zona.",
              },
              {
                num: "03",
                title: "Pedir reseñas activamente",
                desc: "Después de cada trabajo, envía un mensaje de WhatsApp con el enlace directo a tu ficha de Google. La mayoría de clientes satisfechos dejan reseña si se lo pones fácil. Cinco reseñas positivas ya te diferencian de competidores que tienen cero.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-3xl shrink-0 w-12">{num}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Dependes demasiado de recomendaciones para conseguir trabajo?</p>
            <p className="text-gray-600 text-sm mb-4">Te orientamos sobre qué pasos tiene más sentido dar en tu caso para construir una presencia digital que genere clientes de forma constante, con la inversión adecuada a tu momento.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar sobre mi situación
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo priorizar cada canal</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Canal</th>
                  <th className="px-4 py-3 text-left font-semibold">Cuándo priorizarlo</th>
                  <th className="px-4 py-3 text-left font-semibold">Qué necesitas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ficha de Google (GMB)", "Siempre — es el primer paso", "15 minutos para crearla, fotos y descripción"],
                  ["Web propia", "Cuando quieres escalar más allá del pack local", "Inversión de 800–2.000 € bien hecha"],
                  ["Redes sociales", "Si tu servicio es visual o tu cliente está en redes", "Consistencia — mejor 2 redes bien que 5 mal"],
                  ["Google Ads local", "Si necesitas clientes ya y tienes presupuesto", "Mínimo 200–300 €/mes + gestión"],
                  ["Blog / contenido", "Para posicionar búsquedas informacionales y diferenciarte", "Tiempo o presupuesto para crear contenido de calidad"],
                ].map(([canal, cuando, que]) => (
                  <tr key={canal} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{canal}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{cuando}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{que}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Checklist: base digital mínima para un autónomo</h2>
          <ul className="space-y-2">
            {[
              "Ficha de Google Business Profile creada y verificada",
              "Fotos reales de tu trabajo subidas a la ficha",
              "Al menos 5 reseñas positivas en Google",
              "Web con página de servicio principal (qué haces, para quién, zona, contacto)",
              "Teléfono clickable en la web para móvil",
              "Respuesta a todas las reseñas (positivas y negativas)",
              "Email profesional con tu dominio (no gmail.com)",
              "SSL activo en tu web (https://)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> · <Link href="/cuanto-cuesta-pagina-web-profesional/" className="text-accent-500 hover:underline">Cuánto cuesta una página web profesional</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Construye una base digital que te ayude a captar mejor</h2>
            <p className="text-primary-200 mb-6">
              Te orientamos sobre qué pasos dar en función de tu situación actual, tu sector y tu presupuesto. Sin humo, sin soluciones que no necesitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico gratuito
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre captación online para autónomos</h2>
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
            Servicios relacionados: <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO Local</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
    </>
  );
}
