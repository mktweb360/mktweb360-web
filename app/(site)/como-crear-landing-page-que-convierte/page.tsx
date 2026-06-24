import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Crear una Landing Page que Convierte — Guía Práctica | Mkt Web 360",
  description: "Aprende a crear landing pages que convierten visitas en leads y clientes. Estructura, copy, CTA y errores que debes evitar. Guía con ejemplos reales.",
  alternates: { canonical: "https://www.mktweb360.com/como-crear-landing-page-que-convierte/" },
  openGraph: {
    title: "Cómo Crear una Landing Page que Convierte — Guía Práctica | Mkt Web 360",
    description: "Aprende a crear landing pages que convierten visitas en leads y clientes. Estructura, copy, CTA y errores que debes evitar. Guía con ejemplos reales.",
    url: "https://www.mktweb360.com/como-crear-landing-page-que-convierte/",
    images: [{ url: "/og-como-crear-landing-page-que-convierte.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Crear una Landing Page que Convierte — Guía Práctica | Mkt Web 360",
  description: "Aprende a crear landing pages que convierten visitas en leads y clientes. Estructura, copy, CTA y errores que debes evitar. Guía con ejemplos reales.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/como-crear-landing-page-que-convierte/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/como-crear-landing-page-que-convierte/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Landing pages que convierten" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Diseño Web</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo crear una landing page que convierte visitas en clientes</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Una landing page bien diseñada puede multiplicar por 3 tus conversiones sin invertir más en publicidad. Esta guía explica la estructura, el copy y los elementos que marcan la diferencia.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué es una landing page y para qué sirve</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una landing page es una página web diseñada con un único objetivo: conseguir que el visitante realice una acción concreta. Esa acción puede ser rellenar un formulario, llamar por teléfono, descargar un recurso, comprar un producto o suscribirse a una newsletter.</p>
        <p className="text-gray-700 leading-relaxed mb-4">A diferencia de la página de inicio de una web, que ofrece múltiples opciones de navegación y presenta toda la empresa, una landing page elimina distracciones y dirige al usuario hacia una decisión única. Esta concentración de foco es exactamente lo que la hace más efectiva que cualquier otra página de una web corporativa estándar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las landing pages son especialmente importantes en las campañas de publicidad de pago (Google Ads, Meta Ads) porque cuando alguien hace clic en tu anuncio, está en el pico de su intención. Si le envías a tu página de inicio en lugar de a una página diseñada específicamente para convertir esa intención, estás desperdiciando el coste de ese clic.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estructura de una landing page que convierte</h2>
        <p className="text-gray-700 leading-relaxed mb-4">No existe una estructura universal perfecta, pero hay componentes que aparecen consistentemente en las landing pages con mayores tasas de conversión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Hero section:</strong> El área visible sin hacer scroll (above the fold) es la más crítica. Debe incluir un titular que comunique el beneficio principal, un subtítulo que amplíe o matice el titular, y un CTA (Call to Action) claro y visible. En muchos casos, una imagen o vídeo relevante también ayuda a establecer contexto.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Propuesta de valor:</strong> Por qué tú y no otro. Qué te hace diferente, mejor o más adecuado para las necesidades del usuario. Puede presentarse como lista de beneficios, comparativa con la alternativa o una sección de "cómo funciona".</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Prueba social:</strong> Reseñas, testimonios, logos de clientes, casos de éxito, cifras de resultados. La prueba social reduce el riesgo percibido y es uno de los elementos que más impacto tiene en la conversión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formulario o CTA final:</strong> El punto de conversión debe estar visible sin mucho scroll y repetirse al final de la página. Los formularios más cortos convierten mejor: pide solo lo que necesitas en este momento.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Garantía o gestión del riesgo:</strong> Una garantía de devolución, una consulta gratuita sin compromiso o una política de privacidad clara reducen la fricción en el momento de la decisión.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo escribir un titular que engancha</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El titular es el elemento más importante de tu landing page. Si no consigue que el usuario siga leyendo, el resto no importa. Un buen titular cumple tres condiciones: es claro (el usuario entiende inmediatamente qué ofreces), es relevante para la intención con la que ha llegado y comunica un beneficio o resuelve un problema.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las fórmulas de titular más efectivas son: el beneficio directo ("Consigue 10 nuevos clientes al mes con SEO local"), la transformación ("De invisible en Google a primera posición en 90 días"), y la pregunta que toca el dolor ("¿Inviertes en publicidad y no ves resultados?").</p>
        <p className="text-gray-700 leading-relaxed mb-4">Evita los titulares vagos y corporativos como "Soluciones integrales de marketing para empresas". Nadie se siente identificado con eso. Sé específico sobre a quién va dirigido y qué problema resuelve.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Testea siempre al menos dos versiones de tu titular con un test A/B si tienes suficiente tráfico. Cambiar el titular puede duplicar la tasa de conversión sin modificar nada más de la página.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El CTA perfecto: cómo diseñarlo y dónde colocarlo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El Call to Action es el botón, enlace o formulario que define la conversión. Su diseño, texto y posición tienen un impacto enorme en la tasa de conversión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Texto del CTA:</strong> Evita el genérico "Enviar" o "Más información". El texto del botón debe comunicar el beneficio de hacer clic: "Quiero mi auditoría gratuita", "Solicitar presupuesto sin compromiso", "Descargar guía ahora". La primera persona convierte mejor que la segunda.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Diseño:</strong> El CTA debe contrastar visualmente con el resto de la página. Si el fondo es blanco y el texto es negro, el botón debe ser un color que destaque claramente. El tamaño importa: demasiado pequeño se ignora, demasiado grande resulta agresivo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Posición:</strong> El primer CTA debe estar visible sin hacer scroll (above the fold). Repite el CTA a lo largo de la página, especialmente después de cada bloque de información relevante. Para páginas largas, un CTA fijo en la barra superior o lateral mejora la accesibilidad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Errores más comunes en landing pages</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Demasiados objetivos:</strong> Una landing page con múltiples CTA (llámanos, escríbenos, síguenos en Instagram, suscríbete) genera confusión y reduce las conversiones. Un objetivo, un CTA principal.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Menú de navegación completo:</strong> Incluir el menú de tu web en la landing page invita al usuario a navegar fuera en lugar de convertir. Elimina el menú o reduce las opciones de salida al mínimo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formulario demasiado largo:</strong> Cada campo adicional en un formulario reduce la tasa de conversión. Si no necesitas el teléfono en este momento, no lo pidas. Si la dirección no es necesaria para el primer contacto, no la incluyas.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Velocidad de carga lenta:</strong> Cada segundo adicional de carga reduce la conversión un 7% de media. Optimiza las imágenes, usa un buen hosting y elimina scripts innecesarios.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>No adaptada a móvil:</strong> Más del 60% del tráfico web viene de dispositivos móviles. Una landing page que no funciona bien en móvil está perdiendo más de la mitad de las conversiones potenciales.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo medir y optimizar el rendimiento de tu landing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La tasa de conversión es la métrica principal: el porcentaje de visitantes que completan el objetivo de la página. Una tasa de conversión del 2-5% es buena para muchos sectores, pero el rango varía mucho según el sector, el tipo de oferta y la temperatura del tráfico (frío vs. cualificado).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para optimizar una landing page necesitas datos. Google Analytics 4 con eventos configurados te dice cuántos usuarios llegan, cuántos completan el formulario y en qué punto de la página abandonan. Herramientas de mapas de calor como Hotjar o Microsoft Clarity muestran exactamente dónde hace clic la gente y hasta dónde scrollan, lo que revela dónde se pierde el interés.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los tests A/B son la forma más rigurosa de optimizar. Prueba una variable a la vez (titular, color del CTA, longitud del formulario, imagen del hero) con suficiente tráfico para obtener resultados estadísticamente significativos. Una mejora del 20-30% en la tasa de conversión equivale a un 20-30% más de leads con el mismo presupuesto de publicidad.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="Diseño Web" />
    </>
  );
}
