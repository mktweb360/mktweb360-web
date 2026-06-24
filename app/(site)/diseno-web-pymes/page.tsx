import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Diseño Web para PYMEs — Qué Debe Tener tu Web para Vender | Mkt Web 360",
  description: "Guía de diseño web para PYMEs. Qué elementos no pueden faltar, qué errores evitar y cómo hacer que tu web genere clientes de forma constante.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-pymes/" },
  openGraph: {
    title: "Diseño Web para PYMEs — Qué Debe Tener tu Web para Vender | Mkt Web 360",
    description: "Guía de diseño web para PYMEs. Qué elementos no pueden faltar, qué errores evitar y cómo hacer que tu web genere clientes de forma constante.",
    url: "https://www.mktweb360.com/diseno-web-pymes/",
    images: [{ url: "/og-diseno-web-pymes.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño Web para PYMEs — Qué Debe Tener tu Web para Vender | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía de diseño web para PYMEs. Qué elementos no pueden faltar, qué errores evitar y cómo hacer que tu web genere clientes de forma constante.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-web-pymes/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web PYMEs" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Diseño Web</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Diseño web para PYMEs: qué debe tener tu web para convertir visitas en clientes</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Una web bonita que no vende no sirve de nada. Esta guía explica qué elementos son imprescindibles, qué errores cometen la mayoría de PYMEs y cómo hacer que tu web trabaje para tu negocio las 24 horas.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Los 7 elementos que no pueden faltar en la web de una PYME</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una web efectiva para una PYME no es la más bonita ni la más elaborada tecnológicamente. Es la que responde las preguntas correctas en el orden correcto y facilita al máximo que el visitante tome acción.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>1. Propuesta de valor clara en la portada:</strong> En los primeros 5 segundos, el visitante debe entender qué ofreces, para quién y por qué deberían elegirte a ti. Si tu portada dice "Bienvenido a nuestra empresa" o describe lo que hacéis en términos genéricos, estás perdiendo oportunidades.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>2. CTA visible y repetido:</strong> El botón de "contactar", "solicitar presupuesto" o "llamar ahora" debe ser visible sin hacer scroll en la portada y repetirse en puntos estratégicos de cada página. Muchas webs de PYMEs tienen la información de contacto enterrada en el footer.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>3. Prueba social:</strong> Reseñas de clientes, logos de empresas con las que has trabajado, números de proyectos realizados, años de experiencia. La prueba social convierte visitantes indecisos en clientes porque reduce el riesgo percibido.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>4. Páginas de servicio detalladas:</strong> Cada servicio o línea de negocio debe tener su propia página con una descripción detallada, los beneficios para el cliente, el proceso de trabajo y un CTA específico. Las páginas de servicio genéricas no posicionan bien en Google ni convierten bien a los visitantes.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>5. Información del equipo o del propietario:</strong> Las PYMEs venden confianza y relaciones personales tanto como servicios. Una sección "Quiénes somos" con fotos reales del equipo humaniza la empresa y genera confianza, especialmente para servicios de alta implicación.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>6. Formulario de contacto funcional:</strong> Parece obvio, pero hay decenas de miles de webs en España con formularios de contacto que no funcionan o que envían los mensajes a un email que nadie revisa. Prueba tu formulario desde distintos dispositivos regularmente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>7. Información local clara:</strong> Para negocios con presencia física o que sirven a una zona geográfica específica, la dirección, el teléfono y la zona de cobertura deben ser fácilmente visibles. Esto es especialmente importante para el SEO local.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Velocidad y rendimiento: por qué importa más que el diseño</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una web lenta es una web que no convierte. Google lo sabe, los usuarios lo saben (aunque no lo articulen así) y los datos lo confirman: cada segundo adicional de tiempo de carga reduce las conversiones aproximadamente un 7%. Una web que tarda 4 segundos en cargar puede estar perdiendo el 20% de sus conversiones potenciales frente a una que carga en 1 segundo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las Core Web Vitals de Google (LCP, INP y CLS) son métricas de rendimiento que también afectan al posicionamiento en búsqueda. Una web que no pasa los umbrales mínimos de estas métricas tiene una penalización implícita en los rankings de Google frente a webs más rápidas con contenido similar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los factores que más afectan negativamente a la velocidad son: imágenes sin optimizar (el error más común), hosting de mala calidad o compartido, exceso de plugins y scripts de terceros, y código CSS/JavaScript sin minificar. La mayoría de estos problemas se solucionan sin rediseñar la web.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Puedes medir la velocidad de tu web con PageSpeed Insights de Google (gratis) y obtener una lista priorizada de mejoras. Puntuaciones por encima de 80 en móvil se consideran buenas. Por debajo de 50 en móvil es un problema serio que probablemente está afectando tanto a tu posicionamiento SEO como a tu tasa de conversión.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">SEO técnico desde el primer día</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El SEO técnico no es algo que se añade a una web después de construirla — debe estar integrado desde el diseño inicial. Construir una web ignorando el SEO técnico y luego intentar "arreglarlo" es mucho más caro y complejo que hacerlo bien desde el principio.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los elementos técnicos básicos que toda web de PYME debe tener son: estructura de URLs limpia y descriptiva (no "/page?id=123" sino "/servicios/fontaneria/"), etiquetas de título y meta descripción únicas para cada página, encabezados jerárquicos correctos (un solo H1 por página, H2 para secciones), texto alternativo en imágenes, sitemap XML y archivo robots.txt correctamente configurados.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El HTTPS (certificado SSL) es obligatorio hoy en día. Los navegadores marcan las webs sin HTTPS como "no seguras" y Google las penaliza en rankings. La mayoría de hostings modernos ofrecen certificados SSL gratuitos con Let's Encrypt.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios locales, los datos estructurados (Schema.org) son especialmente valiosos. Implementar el marcado LocalBusiness con tu nombre, dirección, teléfono y horario ayuda a Google a entender y mostrar correctamente tu información en los resultados de búsqueda local.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Copywriting web: cómo hablarle a tu cliente ideal</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El copywriting es el texto de tu web. Y es probablemente el elemento más subestimado en el diseño web de PYMEs. Muchas webs se diseñan visualmente de forma impecable pero fallan porque el texto habla de la empresa en lugar de hablar al cliente.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La regla más importante del copywriting para PYMEs es orientar el texto al beneficio del cliente, no a las características del servicio. En lugar de "Ofrecemos servicios de fontanería con 15 años de experiencia", escribe "Tu avería resuelta hoy, sin sorpresas en el precio". El primero habla de la empresa; el segundo habla del problema del cliente y cómo se resuelve.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Usa el lenguaje que usa tu cliente, no el lenguaje técnico de tu sector. Si tu cliente busca "arreglar gotera" y tú usas "reparación de filtraciones en cubierta", estás hablando idiomas distintos — y perdiendo posicionamiento SEO además de claridad.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La estructura de lectura en F que siguen los usuarios en web (leen las primeras líneas, luego escanean el lado izquierdo) significa que las primeras palabras de cada párrafo deben ser las más informativas. Los usuarios raramente leen todo el texto; escanean en busca de las palabras que confirman que están en el lugar correcto.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">CTAs que convierten: dónde colocarlos y cómo redactarlos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El Call to Action (CTA) es el botón o enlace que invita al usuario a dar el siguiente paso. Es el elemento que convierte un visitante en un lead. Un CTA mal redactado o mal posicionado puede reducir significativamente las conversiones de una web, independientemente de lo buen que sea el resto del contenido.</p>
        <p className="text-gray-700 leading-relaxed mb-4">En cuanto a posición, el primer CTA debe ser visible sin hacer scroll en la portada (above the fold), debe repetirse después de cada sección de contenido relevante y debe tener un lugar fijo en el header de la web para páginas internas. Para páginas largas, un botón flotante o sticky mejora la accesibilidad.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El texto del CTA debe ser específico y orientado a la acción: "Solicitar presupuesto gratuito", "Llamar ahora", "Ver disponibilidad". Evita los genéricos "Más información", "Enviar" o "Haga clic aquí". El usuario debe saber exactamente qué va a pasar cuando haga clic.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Errores de diseño web que cuestan clientes</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Web no adaptada a móvil:</strong> Más del 60% del tráfico web en España es desde dispositivos móviles. Una web que funciona bien en ordenador pero mal en móvil está descartando más de la mitad de sus visitantes potenciales. No es suficiente con que "se vea" en móvil — debe ser cómoda de navegar y de usar en pantallas pequeñas.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Slider de imágenes en portada:</strong> Los sliders o carruseles de imágenes en portada son uno de los elementos de diseño más extendidos y menos efectivos. Las estadísticas muestran que menos del 1% de los usuarios hace clic en slides que no sean el primero. Son lentos, distraen y no convierten. Un hero estático con un buen titular y CTA funciona mucho mejor.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Página "en construcción" o contenido escaso:</strong> Una web con pocas páginas, sin contenido de valor y con información genérica comunica desinterés. Google lo penaliza en SEO y los usuarios lo interpretan como falta de profesionalidad.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formulario de contacto como única opción:</strong> Ofrece múltiples formas de contacto: formulario, teléfono visible, email, WhatsApp. Cada usuario tiene su canal preferido, y limitar las opciones reduce las conversiones innecesariamente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>No actualizar la web:</strong> Una web con noticias de 2021, horarios desactualizados o promociones caducadas daña la confianza. La web de tu empresa es la primera impresión para muchos clientes potenciales — asegúrate de que esa impresión sea la correcta.</p>

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
