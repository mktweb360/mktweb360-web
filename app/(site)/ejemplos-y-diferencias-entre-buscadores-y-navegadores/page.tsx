import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Ejemplos y diferencias entre buscadores y navegadores web — Guía completa",
  description:
    "Descubre las principales diferencias entre buscadores y navegadores con ejemplos reales. Guía clara para entender cómo funcionan Google, Chrome, Firefox y más.",
  alternates: { canonical: "https://www.mktweb360.com/ejemplos-y-diferencias-entre-buscadores-y-navegadores/" },
  openGraph: {
    title: "Ejemplos y diferencias entre buscadores y navegadores web — Guía completa | Mkt Web 360",
    description: "Descubre las principales diferencias entre buscadores y navegadores con ejemplos reales. Guía clara para entender cómo funcionan Google, Chrome, Firefox y más.",
    url: "https://www.mktweb360.com/ejemplos-y-diferencias-entre-buscadores-y-navegadores/",
    type: "article",
    images: [{ url: "/og-ejemplos-y-diferencias-buscadores-navegadores.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Diferencias entre buscadores y navegadores: ejemplos y guía completa",
  description: "Descubre las principales diferencias entre buscadores y navegadores con ejemplos reales. Guía clara para entender cómo funcionan Google, Chrome, Firefox y más.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-06-12",
  url: "https://www.mktweb360.com/ejemplos-y-diferencias-entre-buscadores-y-navegadores/",
  mainEntityOfPage: "https://www.mktweb360.com/ejemplos-y-diferencias-entre-buscadores-y-navegadores/",
};

const FAQS = [
  {
    q: "¿Cuál es la diferencia entre un navegador y un buscador?",
    a: "El navegador es el programa que usas para acceder a internet (como Chrome o Firefox). El buscador es el servicio que te ayuda a encontrar páginas web dentro de ese navegador (como Google o Bing). Puedes usar cualquier buscador dentro de cualquier navegador.",
  },
  {
    q: "¿Es Google un navegador o un buscador?",
    a: "Google es principalmente un buscador (motor de búsqueda). Sin embargo, Google también tiene su propio navegador llamado Chrome. Son dos productos distintos de la misma empresa.",
  },
  {
    q: "¿Es Chrome un buscador o un navegador?",
    a: "Chrome es un navegador web desarrollado por Google. El buscador predeterminado de Chrome es Google, pero puedes cambiarlo por Bing, DuckDuckGo u otros en la configuración.",
  },
  {
    q: "¿Cuáles son los navegadores más usados?",
    a: "Los navegadores más usados en 2025 son Google Chrome (líder con más del 60% de cuota), Safari (especialmente en iPhone y Mac), Mozilla Firefox, Microsoft Edge y Opera.",
  },
  {
    q: "¿Cuáles son los buscadores más usados?",
    a: "Google domina con más del 90% de las búsquedas mundiales. Los siguientes son Bing (Microsoft), Yahoo, DuckDuckGo (privacidad) y Ecosia (medioambiente).",
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

const navegadores = [
  { nombre: "Google Chrome", desc: "El más usado en el mundo, desarrollado por Google. Disponible en Windows, Mac, Android e iOS. Rápido, con gran ecosistema de extensiones." },
  { nombre: "Mozilla Firefox", desc: "Navegador de código abierto desarrollado por la Fundación Mozilla. Muy valorado por su respeto a la privacidad y sus opciones de personalización." },
  { nombre: "Safari", desc: "El navegador nativo de Apple. Optimizado para iPhone, iPad y Mac. Eficiente en consumo de batería y con buen rendimiento en dispositivos Apple." },
  { nombre: "Microsoft Edge", desc: "El sucesor de Internet Explorer, basado en Chromium. Viene preinstalado en Windows 10 y 11. Integra herramientas de IA como Copilot." },
  { nombre: "Opera", desc: "Navegador con funciones avanzadas como VPN gratuita integrada, bloqueador de anuncios y modo ahorro de batería. Popular entre usuarios avanzados." },
];

const buscadores = [
  { nombre: "Google", desc: "El motor de búsqueda más utilizado del mundo, con más del 90% de cuota global. Sus algoritmos analizan miles de factores para ofrecer los resultados más relevantes." },
  { nombre: "Bing", desc: "El buscador de Microsoft. Integrado en Windows y Edge. Ofrece resultados de calidad, especialmente en imágenes y vídeos, y tiene integración con ChatGPT." },
  { nombre: "DuckDuckGo", desc: "El buscador preferido por quienes valoran la privacidad. No rastrea tu historial de búsquedas ni muestra anuncios basados en tu perfil." },
  { nombre: "Yahoo", desc: "Uno de los buscadores más antiguos. Sigue siendo relevante en algunos mercados, especialmente en Estados Unidos y Japón." },
  { nombre: "Ecosia", desc: "El buscador ecológico que destina sus beneficios publicitarios a plantar árboles. Usa los resultados de Bing con una misión medioambiental." },
];

const combinaciones = [
  { nav: "Chrome", bus: "Google", desc: "La combinación más popular del mundo. Google es el buscador predeterminado de Chrome y ofrece la experiencia más integrada." },
  { nav: "Firefox", bus: "DuckDuckGo", desc: "Preferida por usuarios que priorizan la privacidad. Firefox y DuckDuckGo comparten filosofía de protección de datos." },
  { nav: "Safari", bus: "Bing", desc: "Algunos usuarios de Apple cambian el buscador predeterminado de Safari (Google) por Bing para usar los servicios de Microsoft." },
  { nav: "Edge", bus: "Bing", desc: "La combinación nativa de Microsoft. Edge y Bing están profundamente integrados, incluyendo la IA de Copilot en ambos." },
];

export default function BuscadoresNavegadoresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diferencias entre buscadores y navegadores" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime="2025-06-12">12 de junio de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Diferencias entre buscadores y navegadores: ejemplos y guía completa
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mucha gente confunde navegadores y buscadores. Son herramientas distintas con funciones distintas — y entenderlo marca la diferencia si quieres mejorar la visibilidad de tu web en internet.
          </p>
          <Image
            src="/og-ejemplos-y-diferencias-buscadores-navegadores.jpg"
            alt="Ejemplos y diferencias entre buscadores y navegadores web — Guía completa"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cuando abres tu ordenador y entras a internet, utilizas dos herramientas distintas sin darte cuenta. Una es el <strong>navegador web</strong>, el programa que te permite acceder a páginas. La otra es el <strong>buscador o motor de búsqueda</strong>, el servicio que te ayuda a encontrar qué página visitar. Aunque trabajan juntos, son completamente diferentes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es un navegador web?</h2>
          <p>
            Un <strong>navegador web</strong> es un programa que instalas en tu dispositivo (ordenador, móvil o tablet) y que te permite acceder, visualizar e interactuar con páginas web. Actúa como una ventana hacia internet: sin él, no puedes ver ninguna página web.
          </p>
          <p>
            El navegador interpreta el código HTML, CSS y JavaScript de las páginas web y las muestra de forma visual para el usuario. También gestiona cookies, historial de navegación, marcadores y extensiones.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Ejemplos de navegadores web</h3>
          <ul className="space-y-3">
            {navegadores.map((n) => (
              <li key={n.nombre} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <div>
                  <span className="font-semibold text-gray-800">{n.nombre}: </span>
                  <span className="text-gray-600 text-sm">{n.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es un buscador o motor de búsqueda?</h2>
          <p>
            Un <strong>buscador</strong> (también llamado motor de búsqueda) es un servicio web que indexa millones de páginas de internet y te permite encontrarlas mediante palabras clave. No se instala — simplemente accedes a él a través de tu navegador.
          </p>
          <p>
            Los buscadores rastrean internet constantemente con robots (llamados <em>crawlers</em> o <em>arañas</em>), indexan el contenido de las páginas y las clasifican según <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">miles de factores de relevancia</Link> cuando alguien realiza una búsqueda.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Ejemplos de buscadores</h3>
          <ul className="space-y-3">
            {buscadores.map((b) => (
              <li key={b.nombre} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <div>
                  <span className="font-semibold text-gray-800">{b.nombre}: </span>
                  <span className="text-gray-600 text-sm">{b.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Tabla comparativa: navegador vs buscador</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Característica</th>
                  <th className="px-4 py-3 text-left font-semibold">Navegador</th>
                  <th className="px-4 py-3 text-left font-semibold">Buscador</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Función principal", "Mostrar páginas web", "Encontrar páginas web"],
                  ["Ejemplos", "Chrome, Firefox, Safari, Edge", "Google, Bing, DuckDuckGo"],
                  ["Dónde se instala", "En tu dispositivo (ordenador, móvil)", "No se instala — es un servicio web"],
                  ["Para qué se usa", "Navegar, ver vídeos, acceder a webs", "Buscar información, encontrar páginas"],
                  ["Necesita internet", "No para abrirse, sí para navegar", "Sí, siempre necesita conexión"],
                ].map(([car, nav, bus]) => (
                  <tr key={car} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{car}</td>
                    <td className="px-4 py-3 text-gray-600">{nav}</td>
                    <td className="px-4 py-3 text-gray-600">{bus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">¿Cuál es la relación entre navegador y buscador?</h2>
          <p>
            La relación es sencilla: <strong>el navegador es el programa y el buscador es el servicio que usas dentro del navegador</strong>. Cuando abres Chrome y escribes "restaurantes cerca de mí", Chrome es el navegador que ejecutas y Google es el buscador que procesa tu consulta. Para las <Link href="/seo-local/" className="text-accent-500 hover:underline">búsquedas locales</Link> como esta, aparecer en los primeros resultados es clave para atraer clientes de tu zona.
          </p>
          <p>
            Cada navegador viene con un buscador predeterminado, pero puedes cambiarlo. Chrome usa Google por defecto, Edge usa Bing, Safari también usa Google… pero cualquier usuario puede cambiar esta configuración en los ajustes del navegador.
          </p>
          <p>
            El buscador vive dentro del navegador, pero es independiente de él. Puedes usar Google desde Chrome, Firefox, Safari o cualquier otro navegador. Del mismo modo, puedes usar DuckDuckGo desde Chrome aunque Google sea su buscador predeterminado.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Ejemplos de combinaciones más comunes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {combinaciones.map((c) => (
              <div key={c.nav} className="p-4 border border-gray-200 rounded-xl">
                <p className="font-semibold text-primary-700 mb-1">{c.nav} + {c.bus}</p>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres mejorar la visibilidad de tu web en los buscadores?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 somos especialistas en SEO y posicionamiento web. Ayudamos a empresas a aparecer en Google cuando sus clientes potenciales buscan sus servicios.</p>
            <Link href="/seo-posicionamiento-web-organico/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEO
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre buscadores y navegadores</h2>
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
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de Páginas Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="ejemplos-y-diferencias-entre-buscadores-y-navegadores" />
    </>
  );
}
