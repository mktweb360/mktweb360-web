import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

const SLUG = "seo-social-instagram-tiktok-linkedin-como-buscadores";
const URL_CANONICAL = `https://www.mktweb360.com/${SLUG}/`;

export const metadata: Metadata = {
  title: "SEO social: Instagram, TikTok y LinkedIn como motores de búsqueda en 2026",
  description:
    "El 40% de la Generación Z busca en TikTok antes que en Google. El SEO social optimiza tu presencia en los buscadores de Instagram, TikTok y LinkedIn. Estrategias por plataforma para 2026.",
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL_CANONICAL },
  openGraph: {
    title: "SEO social: Instagram, TikTok y LinkedIn como buscadores | Mkt Web 360",
    description:
      "El SEO social posiciona tu contenido en los buscadores internos de Instagram, TikTok y LinkedIn. Estrategias por plataforma.",
    url: URL_CANONICAL,
    type: "article",
    images: [{ url: `/og-${SLUG}.jpg`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO social: Instagram, TikTok y LinkedIn como motores de búsqueda en 2026",
  description: "Estrategias de SEO para posicionarse en los buscadores internos de Instagram, TikTok y LinkedIn.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-08-04",
  url: URL_CANONICAL,
  mainEntityOfPage: URL_CANONICAL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "SEO social: redes como buscadores", item: URL_CANONICAL },
  ],
};

const FAQS = [
  {
    q: "¿El SEO social reemplaza al SEO en Google?",
    a: "No. Son canales complementarios con intenciones de búsqueda distintas. En Google se busca para comprar, comparar o aprender con profundidad. En TikTok o Instagram se busca inspiración, tutoriales rápidos y recomendaciones de confianza. Una estrategia completa trabaja ambos canales según el funnel y la audiencia.",
  },
  {
    q: "¿Qué palabras clave usar en el SEO social?",
    a: "Las mismas que usarías en Google, pero adaptadas al contexto conversacional de las redes. En TikTok funcionan los términos más coloquiales y específicos ('cómo quitar manchas de aceite del sofá'). En LinkedIn funcionan los términos más profesionales ('estrategia de contenido B2B'). Usa el buscador de cada plataforma para ver qué términos relacionados sugiere.",
  },
  {
    q: "¿El algoritmo de TikTok realmente usa las palabras del audio para indexar?",
    a: "Sí. TikTok transcribe el audio automáticamente y usa esa transcripción para entender el contenido del vídeo e indexarlo. Mencionar las palabras clave de tu tema en el vídeo — no solo en el caption — tiene un impacto real en la distribución del contenido en búsquedas.",
  },
  {
    q: "¿Cuánto tiempo tarda en dar resultados el SEO social?",
    a: "Mucho más rápido que el SEO web. Un vídeo de TikTok bien optimizado puede posicionarse en búsquedas relevantes en horas o días. En Instagram puede tardar una o dos semanas en consolidarse. LinkedIn tiene mayor tiempo de vida de contenido — un buen artículo puede seguir apareciendo en búsquedas semanas después.",
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

export default function SeoSocialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: "SEO social: redes como buscadores" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Social Media
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              4 de agosto de 2026
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO social: Instagram, TikTok y LinkedIn como motores de búsqueda en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El 40% de la Generación Z ya busca en TikTok antes que en Google. Instagram, LinkedIn y TikTok son motores de búsqueda activos con millones de consultas diarias. Optimizar para ellos — el SEO social — es ya una disciplina imprescindible para cualquier estrategia de contenido.
          </p>
          <Image
            src={`/og-${SLUG}.jpg`}
            alt="SEO social: Instagram, TikTok y LinkedIn como motores de búsqueda"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Las redes sociales dejaron de ser solo canales de distribución de contenido para convertirse en motores de búsqueda con comportamientos propios. Un usuario que busca "restaurante japonés en Madrid" puede hacerlo en Google, pero también en Instagram (para ver fotos reales) o en TikTok (para ver vídeos de experiencias). Si solo estás optimizando para Google, no estás presente en una parte creciente del proceso de decisión.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el SEO social y por qué importa</h2>
          <p>
            El SEO social es la optimización de tu presencia en redes sociales para aparecer en los buscadores internos de cada plataforma. Igual que el SEO web optimiza para Google, el SEO social optimiza para los algoritmos de búsqueda de Instagram, TikTok y LinkedIn.
          </p>
          <p>
            Según datos de Google (2023), el 40% de los usuarios de 18-24 años prefieren buscar en TikTok o Instagram antes que en Google. Adobe encontró que el 42% de los consumidores han comprado algo que descubrieron en TikTok. LinkedIn procesa más de 1.400 millones de búsquedas al mes. Son cifras que ninguna estrategia de contenido seria puede ignorar.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu marca aparece cuando buscan en redes sociales?</p>
            <p className="text-gray-600 text-sm mb-4">
              En Mkt Web 360 diseñamos estrategias de social media que integran SEO social — para que tu contenido no solo se vea, sino que aparezca cuando te buscan.
            </p>
            <Link
              href="/smm-social-media-marketing/"
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Ver servicio Social Media
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">SEO social en Instagram</h2>
          <p>
            Instagram indexa texto en varios lugares: la biografía, los títulos de contenido, los alt texts de imágenes y — desde 2022 — las palabras clave en los captions. Para posicionarte en el buscador de Instagram, necesitas: una biografía que incluya términos de búsqueda relevantes (sin sacrificar claridad), captions que usen lenguaje natural con las palabras clave de tu tema, y hashtags estratégicos que actúan como categorías de búsqueda.
          </p>
          <p>
            Un restaurante japonés en Madrid debería tener en su bio algo como "Cocina japonesa tradicional en Madrid · Sushi · Ramen · Reservas" — términos que alguien buscaría. Sus posts deberían incluir captions que mencionen de forma natural "sushi en Madrid", "ramen artesanal" y similares. No se trata de rellenar texto con keywords, sino de escribir como lo haría alguien que quiere ser encontrado.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">SEO social en TikTok</h2>
          <p>
            TikTok es el caso más interesante porque indexa el audio. Su sistema de transcripción automática convierte lo que dices en el vídeo en texto indexable. Esto significa que mencionar las palabras clave de tu tema en el vídeo — no solo en el caption — tiene impacto directo en la visibilidad de búsqueda.
          </p>
          <p>
            La estructura recomendada para un vídeo optimizado para búsqueda en TikTok: empieza con un hook que incluya la keyword principal ("Te voy a enseñar cómo conseguir clientes sin publicidad de pago"), desarrolla el contenido con menciones naturales al tema, cierra con un CTA claro. El caption debe incluir la keyword y 3-5 hashtags relevantes — ni más ni menos.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">SEO social en LinkedIn</h2>
          <p>
            LinkedIn tiene el buscador de mayor intención comercial entre las tres plataformas. Sus usuarios buscan proveedores, expertos, soluciones y contenido profesional. Las áreas a optimizar son: el titular de tu perfil (equivale al H1 del SEO web), la sección "Acerca de" (donde puedes incluir términos de búsqueda de forma natural), los artículos nativos de LinkedIn (indexados en su buscador y en Google) y los posts que generan conversación.
          </p>
          <p>
            Para una empresa, los artículos nativos de LinkedIn sobre temas sectoriales específicos posicionan tanto en el buscador de LinkedIn como en Google, con autoridad de dominio alta. Una agencia de marketing que publica regularmente artículos sobre "estrategia digital para pymes" tiene visibilidad de doble canal con el mismo contenido.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Presencia en todos los buscadores donde busca tu cliente</h2>
            <p className="text-primary-200 mb-6">
              Si quieres integrar el SEO social en tu estrategia de redes sociales, podemos diseñar un plan de contenido orientado a búsqueda por plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/smm-social-media-marketing/"
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Ver servicio Social Media
              </Link>
              <Link
                href="/marketing-de-contenidos/"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Ver estrategia de contenidos
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO social</h2>
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
            Ver también:{" "}
            <Link href="/smm-social-media-marketing/" className="text-accent-500 hover:underline">
              Social Media Marketing
            </Link>{" "}
            ·{" "}
            <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">
              SEO posicionamiento web
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            ← Volver al blog
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} />
    </>
  );
}
