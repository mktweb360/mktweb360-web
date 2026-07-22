import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Cómo Hacer una Auditoría SEO Básica de tu Web en 2025",
  description: "Guía paso a paso para hacer una auditoría SEO básica. Qué herramientas usar, qué errores buscar y cómo priorizar las mejoras para aumentar el tráfico orgánico.",
  alternates: { canonical: "https://www.mktweb360.com/auditoria-seo-basica/" },
  openGraph: {
    title: "Cómo Hacer una Auditoría SEO Básica de tu Web | Mkt Web 360",
    description: "Guía paso a paso para hacer una auditoría SEO básica. Qué herramientas usar, qué errores buscar y cómo priorizar las mejoras para aumentar el tráfico orgánico.",
    url: "https://www.mktweb360.com/auditoria-seo-basica/",
    images: [{ url: "https://www.mktweb360.com/og-auditoria-seo-basica.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Hacer una Auditoría SEO Básica de tu Web en 2025 | Mkt Web 360",
  description: "Guía paso a paso para hacer una auditoría SEO básica. Qué herramientas usar, qué errores buscar y cómo priorizar las mejoras para aumentar el tráfico orgánico.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/auditoria-seo-basica/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/auditoria-seo-basica/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Auditoría SEO básica" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo hacer una auditoría SEO básica de tu web: guía práctica sin conocimientos técnicos</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">No necesitas ser experto en SEO para detectar los problemas más importantes que frenan tu posicionamiento. Esta guía explica cómo hacer una auditoría SEO básica con herramientas gratuitas y qué hacer con lo que encuentres.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por qué hacer una auditoría SEO antes de cualquier otra acción</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una auditoría SEO es el diagnóstico previo que revela por qué tu web no posiciona como debería. Sin este diagnóstico, es fácil invertir tiempo y dinero en acciones que no abordan el problema real. Es como tomar pastillas para el dolor de cabeza cuando el problema es una infección que requiere antibiótico: el síntoma puede mejorar temporalmente, pero el problema subyacente persiste.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los problemas SEO más comunes que una auditoría básica puede revelar son: páginas no indexadas por errores de configuración, contenido duplicado que confunde a Google, velocidad de carga lenta que penaliza el posicionamiento, falta de etiquetas básicas (título, descripción, H1), enlaces rotos que dañan la experiencia de usuario y la estructura del sitio, y problemas técnicos con el archivo robots.txt o el sitemap.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una auditoría SEO básica no requiere herramientas de pago. Con Google Search Console, Google Analytics 4 y Screaming Frog (versión gratuita hasta 500 URLs) puedes obtener una imagen clara del estado SEO de cualquier web de tamaño pequeño o mediano. Si además quieres revisar tu presencia en Google Maps, redes sociales y publicidad, una <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">auditoría digital completa</Link> cubre todo el ecosistema.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Paso 1: Google Search Console — visibilidad y errores de indexación</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Search Console (GSC) es la herramienta más importante para el SEO básico porque muestra exactamente cómo Google ve e interactúa con tu web. Si no la tienes configurada, es lo primero que debes hacer antes de cualquier otra cosa. La configuración es gratuita y tarda menos de 15 minutos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">En GSC, lo primero que debes revisar es el informe de "Cobertura" (o "Indexación" en la interfaz más reciente). Te muestra cuántas páginas de tu web están indexadas en Google y cuántas tienen errores. Las páginas con estado "Error" son páginas que Google no puede indexar por algún motivo técnico: errores 404, redirecciones incorrectas, páginas bloqueadas por robots.txt, o errores de servidor.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El informe de "Rendimiento" muestra las consultas (palabras clave) para las que aparece tu web en Google, el número de impresiones y clics, y la posición media. Filtra por páginas para ver qué páginas traen más tráfico y para qué términos posicionan. Este informe es fundamental para entender cuál es tu situación de partida y qué oportunidades hay de mejora.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Revisa también el informe de "Experiencia" → "Core Web Vitals". Te muestra si tu web pasa o falla en las métricas de rendimiento de Google (LCP, INP, CLS). Las páginas que fallan estas métricas pueden estar penalizadas en rankings frente a páginas equivalentes que sí las superan.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Paso 2: rastreo de la web con Screaming Frog</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Screaming Frog es un programa de escritorio que rastrea tu web igual que lo hace Google y devuelve un informe detallado de todos los elementos técnicos. La versión gratuita analiza hasta 500 URLs, suficiente para la mayoría de webs pequeñas y medianas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Al introducir la URL de tu web y ejecutar el rastreo, Screaming Frog te dará información sobre: páginas con errores 404 (contenido no encontrado), redirecciones (301, 302), páginas con títulos o meta descripciones duplicados o demasiado largos/cortos, páginas sin etiqueta H1 o con más de un H1, imágenes sin texto alternativo (alt text), y páginas con contenido escaso (thin content).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Prioriza los errores 404 y los títulos duplicados. Los errores 404 deben corregirse o redirigirse a páginas equivalentes. Los títulos duplicados confunden a Google sobre cuál es la página más relevante para una consulta y deben diferenciarse con contenido único en cada página.</p>

        <OfertaVeranoBanner />
        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Paso 3: velocidad de carga con PageSpeed Insights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">PageSpeed Insights (pagespeed.web.dev) analiza la velocidad de cualquier URL y da una puntuación del 0 al 100 separada para móvil y escritorio. También lista los problemas específicos que están reduciendo la puntuación y estima cuánto tiempo se ahorraría al resolverlos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para SEO, lo más importante es la puntuación en móvil, ya que Google usa el índice mobile-first: valora el rendimiento en móvil por encima del desktop. Una puntuación por encima de 80 en móvil es el objetivo mínimo. Por debajo de 50 indica problemas graves que probablemente estén afectando al posicionamiento.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los problemas más comunes que bajan la puntuación son: imágenes demasiado grandes sin comprimir (el 70% de los casos), código JavaScript que bloquea el renderizado, falta de caché del navegador, y fuentes web que se cargan de forma síncrona. Muchos de estos problemas se resuelven con un plugin de optimización como WP Rocket o con la configuración correcta del CDN.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Paso 4: revisión de contenido y palabras clave</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una parte importante de la auditoría SEO es revisar si el contenido de las páginas principales está optimizado para las <Link href="/como-usar-planificador-de-palabras-clave-google-ads/" className="text-accent-500 hover:underline">palabras clave relevantes</Link>. Esto no significa hacer "keyword stuffing" (repetir la keyword hasta el cansancio), sino asegurarse de que las páginas abordan los temas que buscan tus clientes potenciales de forma natural y completa.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para cada página de servicio o de producto importante, comprueba: ¿La etiqueta de título incluye la keyword principal? ¿El H1 es descriptivo y diferente del título (aunque puede coincidir)? ¿El contenido de la página responde las preguntas que alguien que busca ese servicio podría tener? ¿Tiene al menos 300-500 palabras de contenido relevante?</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un error frecuente en webs de PYMEs es tener páginas de servicio con 50-100 palabras de contenido. Google interpreta estas páginas como thin content (contenido escaso) y las posiciona mal. Ampliar el contenido de las páginas más importantes con información genuinamente útil para el usuario es una de las acciones con <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">mejor retorno SEO</Link>.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo priorizar las mejoras de la auditoría</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una auditoría SEO básica puede revelar decenas de problemas. El error más común al recibirla es intentar abordar todo a la vez, lo que lleva a un trabajo disperso y resultados pobres. La priorización correcta se hace según dos criterios: impacto potencial en tráfico y facilidad de implementación.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Prioridad alta, fácil de implementar:</strong> Corregir errores 404, añadir meta descripciones a páginas que carecen de ellas, comprimir imágenes demasiado grandes, activar redirecciones básicas. Estas acciones se pueden implementar en 1-2 días y tienen impacto directo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Prioridad alta, mayor esfuerzo:</strong> Ampliar el contenido de páginas con thin content, mejorar la velocidad de carga (si requiere cambios técnicos complejos), solucionar problemas de indexación graves. Estas acciones requieren más tiempo pero tienen el mayor impacto a medio plazo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Prioridad secundaria:</strong> Optimizar las imágenes para las keywords de forma sistemática, mejorar el enlazado interno, etc. Estas acciones mejoran el rendimiento pero no son urgentes si ya has resuelto los problemas principales.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="SEO" />
    </>
  );
}
