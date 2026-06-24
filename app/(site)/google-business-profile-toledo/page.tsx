import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Google Business Profile para Negocios en Toledo — Guía Completa | Mkt Web 360",
  description: "Cómo optimizar tu Google Business Profile si tienes un negocio en Toledo. Aparece en Google Maps y consigue más clientes locales. Guía paso a paso.",
  alternates: { canonical: "https://www.mktweb360.com/google-business-profile-toledo/" },
  openGraph: {
    title: "Google Business Profile para Negocios en Toledo — Guía Completa | Mkt Web 360",
    description: "Cómo optimizar tu Google Business Profile si tienes un negocio en Toledo. Aparece en Google Maps y consigue más clientes locales. Guía paso a paso.",
    url: "https://www.mktweb360.com/google-business-profile-toledo/",
    images: [{ url: "/og-google-business-profile-toledo.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Business Profile para Negocios en Toledo — Guía Completa | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Cómo optimizar tu Google Business Profile si tienes un negocio en Toledo. Aparece en Google Maps y consigue más clientes locales. Guía paso a paso.",
  areaServed: "España",
  url: "https://www.mktweb360.com/google-business-profile-toledo/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "GBP Toledo" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Google Business Profile para negocios en Toledo: guía paso a paso</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Si tienes un negocio en Toledo y no tienes tu ficha de Google optimizada, estás perdiendo clientes cada día. Esta guía explica cómo configurarla, optimizarla y gestionarla para atraer más visitas.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué es Google Business Profile y por qué es clave para negocios en Toledo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Business Profile (GBP) es la herramienta gratuita de Google que permite a los negocios gestionar cómo aparecen en Google Search y Google Maps. Cuando alguien busca "restaurante en Toledo" o "electricista Toledo capital", los resultados que aparecen en el mapa y en el panel local son las fichas de GBP de esos negocios.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios con presencia física en Toledo, GBP es posiblemente el canal de captación gratuito más potente disponible. Una ficha bien optimizada puede generar decenas de llamadas al mes directamente desde Google Maps, sin coste por clic y sin necesidad de tener una web muy elaborada.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El problema es que la mayoría de fichas de negocios en Toledo están incompletas, desactualizadas o directamente abandonadas. Lo que para muchos es un problema, para ti es una oportunidad: si optimizas tu ficha mientras tu competencia no lo hace, vas a aparecer antes que ellos en los resultados locales.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo crear y reclamar tu ficha en Google</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Si tu negocio lleva tiempo funcionando, es posible que Google ya haya creado una ficha automáticamente a partir de información pública. En ese caso, el primer paso es reclamar la propiedad de esa ficha antes de que alguien más lo haga o antes de que la información incorrecta siga perjudicándote.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para reclamar o crear tu ficha, ve a business.google.com e inicia sesión con una cuenta de Google. Busca el nombre de tu negocio para ver si ya existe una ficha creada automáticamente, o crea una nueva si no existe. Google verificará que eres el propietario del negocio, generalmente enviando una postal con un código a la dirección del negocio o mediante una llamada telefónica.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La verificación es obligatoria para gestionar tu ficha y puede tardar entre 1 y 2 semanas si se hace por postal. Hay opciones más rápidas (vídeo, llamada) disponibles para algunos negocios. No pospongas este paso: sin verificar, tu ficha tiene capacidades muy limitadas.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo optimizar cada campo de tu ficha</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una vez verificada tu ficha, hay varios campos que determinarán en gran medida tu posicionamiento en los resultados locales de Toledo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Nombre del negocio:</strong> Usa el nombre real de tu negocio, tal como aparece en tu rótulo y en tu web. No añadas keywords extra al nombre (es una práctica que viola las normas de Google y puede resultar en la suspensión de la ficha).</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Categoría principal:</strong> Es el factor de posicionamiento local más importante dentro de la ficha. Elige la categoría que mejor describa tu negocio principal. Puedes añadir hasta 9 categorías secundarias para servicios adicionales.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Descripción del negocio:</strong> Tienes 750 caracteres para describir tu negocio. Incluye información relevante sobre lo que ofreces, tu experiencia y lo que te diferencia, mencionando naturalmente palabras clave locales.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Horarios:</strong> Mantén el horario actualizado siempre, incluyendo festivos y días especiales. Un horario incorrecto genera visitas frustradas y reseñas negativas evitables.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Fotos:</strong> Las fichas con fotos reciben el doble de solicitudes de ruta y el 35% más de clics que las fichas sin fotos. Añade al menos: foto de portada, logo, foto del exterior, del interior y del equipo. Las fotos de clientes que etiquetan tu negocio también contribuyen positivamente.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia de reseñas para negocios toledanos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas son el factor de posicionamiento local más poderoso y el que más influye en la decisión de compra de los usuarios. Un negocio con 50 reseñas con una media de 4,7 estrellas va a aparecer antes que un competidor con 10 reseñas y una media de 4,2, en igualdad del resto de factores.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La estrategia correcta para generar reseñas no es comprarlas (está prohibido por Google y las detecta fácilmente) sino crear un proceso sistemático para pedirlas a clientes satisfechos. El mejor momento para pedir una reseña es justo después de que el cliente ha tenido una experiencia positiva y está satisfecho con el servicio.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Google tiene un enlace directo para reseñas que puedes compartir fácilmente por WhatsApp o email. Para negocios en Toledo, incluir este enlace en el recibo, en un cartel en el establecimiento o en el mensaje de seguimiento post-servicio puede multiplicar el volumen de reseñas en pocas semanas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Responde siempre a todas las reseñas, tanto positivas como negativas. Las respuestas a reseñas negativas son especialmente valiosas: un negocio que responde con profesionalidad a una crítica demuestra madurez y genera más confianza que uno que solo tiene reseñas de 5 estrellas sin respuesta.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Publicaciones en Google: cómo mantener tu ficha activa</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las publicaciones de GBP son posts que aparecen en tu ficha y que sirven para comunicar novedades, ofertas, eventos o simplemente mantener el perfil activo. Google premia las fichas con actividad regular, lo que significa que publicar con cierta frecuencia mejora tu posicionamiento en el mapa.</p>
        <p className="text-gray-700 leading-relaxed mb-4">No es necesario publicar todos los días, pero sí mantener una cadencia mínima de 1-2 publicaciones al mes. Los tipos de contenido que mejor funcionan para negocios locales en Toledo son: ofertas o promociones temporales, novedades de productos o servicios, eventos y noticias del negocio, y contenido educativo relacionado con tu sector.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las publicaciones de tipo "Oferta" con fecha de inicio y fin son las que más clics generan porque crean urgencia y aparecen de forma destacada en la ficha.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Métricas que debes monitorizar en tu GBP</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Business Profile ofrece estadísticas gratuitas sobre el rendimiento de tu ficha. Las métricas más importantes que debes revisar mensualmente son: número de búsquedas directas (usuarios que buscan tu nombre) vs. búsquedas de descubrimiento (usuarios que buscan una categoría o servicio), número de visualizaciones en Maps vs. en Search, número de clics en el teléfono, clics en la web y solicitudes de ruta.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Estas métricas te dicen si tu ficha está generando impacto y te permiten identificar qué tipo de búsquedas generan más interacción. Si tienes muchas visualizaciones pero pocos clics en el teléfono, puede indicar que tu ficha no está siendo suficientemente persuasiva (pocas fotos, pocas reseñas, descripción floja). Si tienes pocas visualizaciones, el problema está en el posicionamiento y hay que trabajar los factores de relevancia y prominencia.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO Local" />
    </>
  );
}
