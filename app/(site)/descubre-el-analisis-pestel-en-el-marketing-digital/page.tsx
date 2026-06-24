import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Análisis PESTEL en el Marketing Digital — Guía para PYMEs",
  description: "Descubre cómo aplicar el análisis PESTEL en tu estrategia de marketing digital. Factores Políticos, Económicos, Sociales, Tecnológicos, Ambientales y Legales.",
  alternates: { canonical: "https://www.mktweb360.com/descubre-el-analisis-pestel-en-el-marketing-digital/" },
  openGraph: {
    title: "Análisis PESTEL en Marketing Digital | Mkt Web 360",
    description: "Cómo el análisis PESTEL afecta a tu estrategia de marketing digital. Guía práctica para PYMEs españolas.",
    url: "https://www.mktweb360.com/descubre-el-analisis-pestel-en-el-marketing-digital/",
    type: "article",
    images: [{ url: "/og-descubre-el-analisis-pestel.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Descubre el Análisis PESTEL en el Marketing Digital",
  description: "Cómo aplicar el análisis PESTEL en estrategias de marketing digital para PYMEs.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2023-11-18",
  url: "https://www.mktweb360.com/descubre-el-analisis-pestel-en-el-marketing-digital/",
  mainEntityOfPage: "https://www.mktweb360.com/descubre-el-analisis-pestel-en-el-marketing-digital/",
};

export default function AnalisisPESTELPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Análisis PESTEL en Marketing Digital" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2023-11-18">18 de noviembre de 2023</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Descubre el Análisis PESTEL en el Marketing Digital
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El análisis PESTEL te ayuda a comprender el entorno macro que rodea a tu empresa y a adaptar tu estrategia de marketing digital a los factores externos que no puedes controlar pero sí anticipar.
          </p>
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Qué es el análisis PESTEL?</h2>
          <p>El PESTEL es una herramienta de análisis estratégico del entorno externo de una empresa. Analiza seis categorías de factores: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos (Ambientales) y Legales. A diferencia del DAFO, que combina factores internos y externos, el PESTEL se centra exclusivamente en el macroentorno.</p>
          <p>En el contexto del marketing digital, el PESTEL es especialmente útil porque el entorno online cambia muy rápido: nuevas leyes de privacidad, cambios en el comportamiento del consumidor, irrupción de nuevas tecnologías... Todo ello afecta directamente a tu estrategia digital.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los 6 factores PESTEL aplicados al marketing digital</h2>

          <div className="space-y-4">
            {[
              {
                letter: "P",
                name: "Factores Políticos",
                color: "bg-blue-50 border-blue-200 text-blue-800",
                headerColor: "text-blue-700",
                desc: "Las políticas gubernamentales afectan directamente al marketing digital. El Kit Digital es un claro ejemplo: una política pública que genera oportunidades para agencias y PYMEs. También incluye regulaciones sobre publicidad online, restricciones en redes sociales (como las limitaciones para menores) o cambios en las políticas de datos.",
              },
              {
                letter: "E",
                name: "Factores Económicos",
                color: "bg-emerald-50 border-emerald-200 text-emerald-800",
                headerColor: "text-emerald-700",
                desc: "El contexto económico determina el presupuesto disponible de tus clientes. En periodos de incertidumbre económica, las empresas recortan en marketing, pero también buscan maximizar el ROI. El SEO y el marketing de contenidos ganan peso frente a la publicidad de pago cuando los presupuestos se ajustan.",
              },
              {
                letter: "S",
                name: "Factores Sociales",
                color: "bg-purple-50 border-purple-200 text-purple-800",
                headerColor: "text-purple-700",
                desc: "Los cambios en el comportamiento del consumidor son clave. El auge del comercio social, la importancia de las reseñas online, la preferencia por contenido en vídeo corto (TikTok, Reels) o el creciente consumo de contenido en móvil son tendencias sociales que debes integrar en tu estrategia.",
              },
              {
                letter: "T",
                name: "Factores Tecnológicos",
                color: "bg-yellow-50 border-yellow-200 text-yellow-800",
                headerColor: "text-yellow-700",
                desc: "La IA está transformando el marketing digital: desde la generación de contenido hasta la automatización de campañas. Las actualizaciones del algoritmo de Google (Search Generative Experience, Core Updates) o los cambios en iOS que limitan el tracking son factores tecnológicos que afectan directamente a tu estrategia.",
              },
              {
                letter: "E",
                name: "Factores Ecológicos",
                color: "bg-teal-50 border-teal-200 text-teal-800",
                headerColor: "text-teal-700",
                desc: "La sostenibilidad es un factor de diferenciación creciente. Los consumidores valoran cada vez más que las marcas tengan compromisos medioambientales reales. Comunicar los valores sostenibles de tu empresa es parte de la estrategia de marketing de contenidos y branded content.",
              },
              {
                letter: "L",
                name: "Factores Legales",
                color: "bg-red-50 border-red-200 text-red-800",
                headerColor: "text-red-700",
                desc: "El RGPD ha transformado la forma en que las empresas gestionan datos y hacen email marketing. La Ley de Cookies, las normas sobre publicidad digital, las regulaciones de la IA Act europea... Son factores legales que toda estrategia de marketing digital debe tener en cuenta para evitar sanciones.",
              },
            ].map(factor => (
              <div key={factor.letter + factor.name} className={`border rounded-xl p-5 ${factor.color}`}>
                <h3 className={`font-bold mb-2 ${factor.headerColor}`}>
                  <span className="text-2xl mr-2">{factor.letter}</span>— {factor.name}
                </h3>
                <p className="text-sm">{factor.desc}</p>
              </div>
            ))}
          </div>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo integrar el PESTEL en tu plan de marketing digital</h2>
          <p>El PESTEL no es un análisis que se hace una vez: debe revisarse periódicamente (al menos una vez al año) porque el entorno cambia constantemente. Los resultados del PESTEL deben integrarse con el DAFO para tener una visión completa: los factores externos del PESTEL alimentan las Oportunidades y Amenazas del DAFO.</p>
          <p>En la práctica, el PESTEL te ayuda a anticipar cambios antes de que te impacten, identificar nuevas oportunidades de negocio y ajustar mensajes y canales de comunicación según el contexto social y tecnológico del momento.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Necesitas asesoría estratégica para tu marketing digital?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 integramos el análisis del entorno en todas las estrategias de marketing que diseñamos para nuestros clientes.</p>
            <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar consultoría gratuita
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="descubre-el-analisis-pestel-en-el-marketing-digital" />
    </>
  );
}
