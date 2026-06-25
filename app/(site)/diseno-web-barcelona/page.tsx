import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Diseño Web en Barcelona | Mkt Web 360",
  description: "Guía para contratar diseño web en Barcelona. Precios orientativos, qué debe incluir una web profesional, cómo comparar agencias y errores que cuestan clientes.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-barcelona/" },
  openGraph: {
    title: "Diseño Web en Barcelona: Guía para Contratar Bien | Mkt Web 360",
    description: "Guía para contratar diseño web en Barcelona. Precios orientativos, qué debe incluir una web profesional, cómo comparar agencias y errores que cuestan clientes.",
    url: "https://www.mktweb360.com/diseno-web-barcelona/",
    images: [{ url: "/og-diseno-web-barcelona.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño Web en Barcelona | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía para contratar diseño web en Barcelona. Precios orientativos, qué debe incluir una web profesional, cómo comparar agencias y errores que cuestan clientes.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-web-barcelona/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web Barcelona" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Diseño web en Barcelona: qué debes saber antes de contratar una agencia o freelance</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Barcelona tiene una de las escenas de diseño web más activas de España, con cientos de agencias y freelancers de diferentes niveles. Esta guía te ayuda a navegar ese mercado, evaluar propuestas y tomar una decisión informada.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El mercado de diseño web en Barcelona: qué encontrarás</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Barcelona concentra un ecosistema creativo y tecnológico muy desarrollado. La ciudad tiene una larga tradición en diseño gráfico e industrial que se ha trasladado al mundo digital, generando un mercado de diseño web con alta concentración de talento creativo. Esto es una ventaja para el cliente porque hay muchas opciones, pero también puede dificultar la elección cuando todas las webs del portfolio "se ven bien".</p>
        <p className="text-gray-700 leading-relaxed mb-4">El rango de precios en Barcelona es muy amplio: desde 800-1.500€ por webs en plantillas WordPress con personalización básica hasta 20.000-50.000€ por proyectos de diseño digital complejo con desarrollo a medida. La mayoría de PYMEs barcelonesas encuentran proyectos adecuados en el rango de 2.500-8.000€ para una web corporativa profesional con SEO técnico incluido.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un factor a tener en cuenta en Barcelona es el bilingüismo. Muchas agencias trabajan en catalán, castellano e inglés. Si necesitas una web en catalán y castellano (imprescindible para negocios con audiencia local), asegúrate de que el equipo tiene capacidad para gestionar el contenido bilingüe correctamente desde el punto de vista técnico (URLs, hreflang, gestión del contenido).</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué debe incluir siempre una web profesional en 2025</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Independientemente de la ciudad o el presupuesto, una web profesional en 2025 debe cumplir unos estándares mínimos que van más allá del diseño visual. Si la propuesta que recibes no incluye estos elementos, o no los menciona como parte del proyecto, es una señal de que el resultado puede no cumplir tus expectativas comerciales.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Diseño mobile-first:</strong> Más del 60% del tráfico web en España viene de dispositivos móviles. Una web que "se adapta a móvil" no es suficiente — debe estar diseñada pensando primero en la experiencia móvil. Pide ver cómo se ve en un iPhone y en un Android antes de aprobar el diseño.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>SEO técnico básico:</strong> Estructura de URLs correcta, metaetiquetas únicas, etiquetas H1-H6 bien jerarquizadas, sitemap XML, robots.txt, certificado SSL y velocidad de carga optimizada. Sin esto, la web puede ser preciosa visualmente pero invisible para Google.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Core Web Vitals:</strong> Las métricas de rendimiento de Google (LCP, INP, CLS) afectan al posicionamiento. Una web lenta o con saltos visuales durante la carga puede estar penalizada en Google frente a competidores con mejor rendimiento. Pide que incluyan una prueba de PageSpeed Insights antes de la entrega final.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Formularios de contacto funcionando:</strong> Parece obvio, pero un porcentaje sorprendente de webs entregadas tienen formularios que no envían o que envían a emails no monitorizados. Prueba el formulario desde un email externo antes de dar el visto bueno final.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Agencia vs. freelance en Barcelona: cuándo elegir cada opción</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La elección entre agencia y freelance en Barcelona depende principalmente del tamaño y complejidad del proyecto, el presupuesto disponible y la necesidad de soporte continuo post-lanzamiento.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Un freelance tiene sentido cuando:</strong> el proyecto tiene un alcance bien definido y acotado, el presupuesto es ajustado (los freelancers tienen menos gastos fijos y pueden ser más competitivos en precio), o cuando la prioridad es el contacto directo con la persona que hace el trabajo sin intermediarios.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Una agencia tiene sentido cuando:</strong> el proyecto es complejo y requiere múltiples especialistas (diseñador, desarrollador, experto SEO, redactor), necesitas garantías de continuidad (si un freelance enferma o deja el negocio, el proyecto puede quedarse sin soporte), o cuando el proyecto incluye también la gestión del marketing digital después del lanzamiento.</p>
        <p className="text-gray-700 leading-relaxed mb-4">En Barcelona hay también estudios de diseño de tamaño intermedio (3-8 personas) que combinan lo mejor de ambos mundos: especialización del equipo de la agencia con el trato cercano del freelance. Para proyectos de 3.000-10.000€, este tipo de estudio suele ser la mejor relación calidad-precio.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Precios orientativos para diseño web en Barcelona</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Los precios en Barcelona son generalmente un 15-25% superiores a la media nacional por el mayor coste de vida y los alquileres de oficina más elevados. Sin embargo, el nivel de calidad medio también es superior, especialmente en diseño visual y UX.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Web corporativa básica (4-6 páginas, WordPress, plantilla personalizada):</strong> 1.500-3.500€. Incluye diseño visual adaptado a la marca, contenido básico, SEO técnico elemental y formación para gestión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Web corporativa profesional (8-15 páginas, diseño personalizado, SEO completo):</strong> 4.000-10.000€. Incluye diseño único no basado en plantilla, arquitectura de información optimizada, SEO técnico avanzado, redacción de contenidos, integración con CRM o herramientas de marketing y analítica configurada.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Tienda online (WooCommerce o Shopify, hasta 200 productos):</strong> 3.000-8.000€. El rango depende del número de productos, la complejidad de las variantes, las integraciones con TPV o ERPs y si se incluye la migración de un catálogo existente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Proyectos avanzados con desarrollo a medida:</strong> 15.000€ en adelante, sin límite superior según la complejidad. Aplicaciones web, plataformas de ecommerce complejas, intranets, portales B2B.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo evaluar un portfolio de diseño web</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El portfolio es el principal criterio de evaluación de una agencia o freelance de diseño web, pero hay que saber leerlo. Un portfolio visualmente atractivo no garantiza que las webs mostradas funcionen bien técnicamente, posicionen en Google o conviertan visitas en clientes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Cuando evalúes un portfolio, haz estas comprobaciones: visita las webs en el portfolio desde tu móvil para ver cómo funcionan en pantalla pequeña, introduce la URL en PageSpeed Insights para ver la velocidad real, busca en Google el nombre de alguna de las empresas del portfolio para ver su posicionamiento, y si puedes, contacta con algún cliente del portfolio para preguntarles directamente sobre su experiencia.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Pide también ver proyectos del mismo sector que el tuyo. El diseño web de una tienda de moda tiene requerimientos muy diferentes al de una clínica dental o un despacho jurídico. Una agencia con proyectos relevantes en tu sector tendrá un punto de partida más sólido para entender las necesidades específicas de tu negocio.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="SEO Local" />
    </>
  );
}
