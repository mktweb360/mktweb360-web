import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO para Servicios Urgentes 24h — Cómo Posicionar en Google",
  description: "Cómo posicionar servicios urgentes 24 horas en Google. Estrategias SEO específicas para cerrajeros, fontaneros, electricistas y otros servicios de urgencia.",
  alternates: { canonical: "https://www.mktweb360.com/seo-para-servicios-urgentes-24h/" },
  openGraph: {
    title: "SEO para Servicios Urgentes 24h | Mkt Web 360",
    description: "Estrategias SEO para posicionar servicios urgentes en Google. Cerrajeros, fontaneros, electricistas.",
    url: "https://www.mktweb360.com/seo-para-servicios-urgentes-24h/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO para Servicios Urgentes 24h: Cómo Posicionar en Google",
  description: "Estrategias SEO para servicios de urgencia 24 horas.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2024-03-15",
  url: "https://www.mktweb360.com/seo-para-servicios-urgentes-24h/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-para-servicios-urgentes-24h/",
};

export default function SeoServiciosUrgentesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO para Servicios Urgentes 24h" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime="2024-03-15">15 de marzo de 2024</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO para Servicios Urgentes 24h: Cómo Posicionar en Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Los negocios de servicios urgentes tienen una oportunidad única en Google: captar clientes en el momento exacto que más te necesitan. Descubre cómo posicionarte.
          </p>
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Por qué el SEO es crítico para servicios urgentes?</h2>
          <p>Cuando alguien tiene una emergencia — una tubería rota, una cerradura bloqueada o un cortocircuito — lo primero que hace es buscar en Google. La búsqueda es inmediata, la intención de compra es máxima y la decisión se toma en segundos.</p>
          <p>El que aparece en primeras posiciones en ese momento se lleva el cliente. No hay tiempo para comparar mucho: si estás arriba y tienes buenas reseñas, el teléfono suena.</p>

          <h2 className="text-2xl font-bold text-primary-600">Palabras clave para servicios urgentes</h2>
          <p>La clave está en combinar el tipo de servicio con la urgencia y la localización:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>cerrajero urgente [ciudad]</li>
            <li>fontanero urgente 24 horas [ciudad]</li>
            <li>electricista urgente [barrio]</li>
            <li>desatascos urgentes [ciudad]</li>
            <li>[servicio] urgente ahora [zona]</li>
          </ul>
          <p>Estas búsquedas tienen un volumen menor que las genéricas, pero su conversión es altísima. Un usuario que busca &ldquo;cerrajero urgente Madrid ahora&rdquo; va a llamar al primero que aparezca y tenga buenas valoraciones.</p>

          <h2 className="text-2xl font-bold text-primary-600">Estrategias SEO clave para urgencias</h2>

          <h3 className="text-xl font-semibold text-primary-700">1. Google Business Profile optimizado</h3>
          <p>Para servicios locales urgentes, el Pack Local de Google (el mapa con los 3 resultados destacados) es el objetivo principal. Necesitas tu ficha de Google Business Profile completa, con horario 24h si es el caso, fotos reales y respuestas a todas las reseñas.</p>
          <p>Las reseñas son especialmente críticas: cuando alguien tiene una urgencia a las 2 de la madrugada, va a elegir al cerrajero con más y mejores valoraciones. Anima a tus clientes satisfechos a dejarte reseñas en Google.</p>

          <h3 className="text-xl font-semibold text-primary-700">2. Velocidad de carga en móvil</h3>
          <p>Un cliente con una urgencia en el móvil no espera: si tu web tarda más de 3 segundos en cargar, se va. Optimiza imágenes, usa hosting rápido y asegúrate de pasar el Core Web Vitals de Google. El número de teléfono debe ser clickable y estar visible en el primer scroll.</p>

          <h3 className="text-xl font-semibold text-primary-700">3. Datos estructurados LocalBusiness</h3>
          <p>Implementa el schema markup de LocalBusiness con tu horario de servicio urgente. Google puede mostrar estos datos directamente en los resultados de búsqueda, aumentando tu visibilidad y CTR sin necesidad de estar en primera posición.</p>

          <h3 className="text-xl font-semibold text-primary-700">4. Páginas de servicio por ciudad</h3>
          <p>Si cubres varias ciudades o zonas, crea una página específica por localización: &ldquo;Cerrajero urgente Madrid&rdquo;, &ldquo;Cerrajero urgente Getafe&rdquo;, etc. Cada página debe tener contenido único y relevante para esa zona, incluyendo referencias a barrios, nombres de calles principales y zonas de influencia.</p>

          <h3 className="text-xl font-semibold text-primary-700">5. Google Ads como complemento</h3>
          <p>Para servicios urgentes, combinar SEO con Google Ads es especialmente efectivo. Las campañas de búsqueda permiten aparecer inmediatamente para las búsquedas más competidas mientras el SEO va ganando posiciones de forma orgánica.</p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Conclusión</h2>
          <p>El SEO para servicios urgentes es una de las inversiones más rentables que puede hacer un negocio de este tipo. Una buena posición en Google significa el teléfono sonando constantemente, las 24 horas del día.</p>
          <p>La clave está en trabajar tanto el Pack Local de Google con una ficha de GBP optimizada y con muchas reseñas positivas, como el SEO orgánico con páginas de servicio por zona y contenido relevante. Y siempre con un número de teléfono bien visible para facilitar la conversión.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tienes un servicio urgente y quieres posicionarte en Google?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 somos especialistas en SEO para servicios locales y urgentes. Contáctanos para una auditoría gratuita.</p>
            <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar auditoría SEO gratuita
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-para-servicios-urgentes-24h" />
    </>
  );
}
