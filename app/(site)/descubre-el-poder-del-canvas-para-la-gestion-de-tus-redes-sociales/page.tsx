import Image from "next/image";
﻿import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Canvas para la Gestión de Redes Sociales — Guía Práctica",
  description: "Descubre cómo usar el modelo Canvas adaptado a las redes sociales para planificar tu estrategia de contenidos. Herramienta práctica para empresas.",
  alternates: { canonical: "https://www.mktweb360.com/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/" },
  openGraph: {
    title: "Canvas para Redes Sociales: Planifica tu Estrategia | Mkt Web 360",
    description: "Aprende a usar el Social Media Canvas para planificar tu estrategia de contenidos en redes sociales.",
    url: "https://www.mktweb360.com/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/",
    type: "article",
    images: [{ url: "/og-descubre-el-poder-del-canvas.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Descubre el Poder del Canvas para la Gestión de tus Redes Sociales",
  description: "Cómo usar el modelo Canvas para planificar la estrategia de contenidos en redes sociales.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2023-12-05",
  url: "https://www.mktweb360.com/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/",
  mainEntityOfPage: "https://www.mktweb360.com/descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales/",
};

export default function CanvasRedesSocialesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Canvas para Redes Sociales" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Redes Sociales</span>
            <time className="text-sm text-gray-400" dateTime="2023-12-05">5 de diciembre de 2023</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Descubre el Poder del Canvas para la Gestión de tus Redes Sociales
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El modelo Canvas, famoso en el mundo del emprendimiento, tiene una adaptación muy potente para planificar estrategias de redes sociales. Te explicamos cómo aprovecharlo.
          </p>
          <Image
            src="/og-descubre-el-poder-del-canvas.jpg"
            alt="Canvas para la Gestión de Redes Sociales — Guía Práctica"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Qué es el Social Media Canvas?</h2>
          <p>El Business Model Canvas de Osterwalder ha inspirado múltiples adaptaciones sectoriales. El Social Media Canvas es una herramienta visual que permite planificar de forma estructurada la presencia en redes sociales de una empresa, respondiendo a las preguntas clave de cualquier estrategia de contenidos.</p>
          <p>Su gran ventaja es que permite tener una visión global de toda la estrategia en un solo documento visual, facilitando la comunicación entre el equipo y el cliente, y asegurando la coherencia de todos los elementos.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los bloques del Social Media Canvas</h2>

          <div className="space-y-4">
            {[
              { num: "1", title: "Objetivos", desc: "¿Qué quieres conseguir con las redes sociales? Aumentar ventas, notoriedad de marca, atención al cliente, fidelización... Los objetivos deben ser SMART: específicos, medibles, alcanzables, relevantes y temporales." },
              { num: "2", title: "Audiencia", desc: "¿A quién te diriges? Define tu buyer persona: edad, intereses, comportamiento online, redes que usa, tipo de contenido que consume. Cuanto más específico, mejor podrás conectar con ellos." },
              { num: "3", title: "Canales", desc: "¿En qué redes sociales debes estar? No es necesario estar en todas: es mejor hacerlo bien en dos o tres que mal en seis. La elección depende de donde está tu audiencia y el tipo de contenido que produce tu empresa." },
              { num: "4", title: "Contenido", desc: "¿Qué tipo de contenido vas a publicar? Establece los pilares de contenido: educativo, entretenimiento, inspiracional, promocional... y el ratio entre cada tipo (por ejemplo, 60% educativo, 20% entretenimiento, 20% promocional)." },
              { num: "5", title: "Frecuencia", desc: "¿Con qué regularidad publicarás? La consistencia es más importante que la frecuencia. Es mejor publicar 3 veces por semana de forma constante que 10 veces una semana y desaparecer la siguiente." },
              { num: "6", title: "KPIs y métricas", desc: "¿Cómo medirás el éxito? Define los indicadores clave: alcance, engagement, clics, conversiones, seguidores... y establece objetivos numéricos para cada uno." },
            ].map(block => (
              <div key={block.num} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-accent-500 font-bold text-xl shrink-0 w-8">{block.num}.</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{block.title}</h3>
                  <p className="text-sm">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo usar el Canvas en tu empresa</h2>
          <p>El proceso para crear tu Social Media Canvas es el siguiente:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Reúne al equipo de marketing y define los objetivos de negocio para el año.</li>
            <li>Crea o actualiza el buyer persona con datos reales de tus clientes actuales.</li>
            <li>Audita tu presencia actual en redes: qué funciona, qué no, qué publicamos y con qué resultados.</li>
            <li>Completa cada bloque del Canvas de forma colaborativa.</li>
            <li>Revisa el Canvas cada trimestre y ajusta según los resultados obtenidos.</li>
          </ol>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Beneficios para tu negocio</h2>
          <p>Las empresas que planifican su estrategia de redes sociales con herramientas como el Canvas obtienen resultados hasta 3 veces mejores que las que publican sin una estrategia definida. El Canvas elimina la improvisación, reduce el tiempo de producción de contenidos y asegura que cada publicación tiene un propósito claro y medible.</p>
          <p>Además, al tener todo documentado en un solo lugar, es mucho más fácil incorporar a nuevos miembros del equipo o comunicar la estrategia a stakeholders y directivos.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una estrategia de redes sociales profesional?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 diseñamos estrategias de social media basadas en datos y orientadas a resultados reales para tu negocio.</p>
            <Link href="/smm-social-media-marketing/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver gestión de redes sociales
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales" />
    </>
  );
}
