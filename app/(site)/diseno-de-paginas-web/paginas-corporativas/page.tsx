import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Páginas Web Corporativas: Diseño Profesional para Empresas",
  description:
    "Diseño de páginas web corporativas para empresas. Web profesional que genera confianza, capta leads y posiciona en Google. SEO técnico incluido desde el primer día.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/" },
  openGraph: {
    title: "Páginas Web Corporativas Profesionales — Diseño para Empresas | Mkt Web 360",
    description:
      "Diseño de páginas web corporativas para empresas. Web profesional que genera confianza, capta leads y posiciona en Google. SEO técnico incluido desde el primer día.",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/",
    images: [{ url: "https://www.mktweb360.com/og-paginas-corporativas.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de Páginas Web Corporativas",
  serviceType: "Web Design",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Diseño y desarrollo de páginas web corporativas profesionales para empresas. Web optimizada para SEO, captación de leads y conversión.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/",
  offers: {
    "@type": "Offer",
    price: "790",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "790",
      priceCurrency: "EUR",
      description: "Precio desde 790€ para web corporativa profesional con SEO técnico incluido",
    },
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Diseño Web", item: "https://www.mktweb360.com/diseno-de-paginas-web/" },
    { "@type": "ListItem", position: 3, name: "Páginas Corporativas", item: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta una página web corporativa profesional?",
    a: "El precio de una web corporativa depende del número de páginas, funcionalidades y nivel de personalización. En Mkt Web 360 partimos desde 790€ para webs corporativas con diseño profesional, SEO técnico incluido y formación para gestión autónoma. Las empresas con múltiples sedes, idiomas o integraciones complejas tienen presupuesto personalizado.",
  },
  {
    q: "¿Cuánto tarda en estar lista la web corporativa?",
    a: "El plazo habitual es de 3 a 5 semanas desde el inicio del proyecto, dependiendo de la velocidad en la aportación de contenidos por parte del cliente. Trabajamos con un proceso estructurado con entregas parciales para que puedas validar el avance en cada fase.",
  },
  {
    q: "¿Podré gestionar la web yo mismo una vez entregada?",
    a: "Sí. Desarrollamos sobre WordPress con formación incluida para que puedas actualizar textos, imágenes, añadir páginas nuevas y gestionar el blog de forma completamente autónoma. La web es tuya, sin dependencias ni costes de mantenimiento obligatorios.",
  },
  {
    q: "¿El SEO está incluido en el diseño de la web corporativa?",
    a: "El SEO técnico está incluido: estructura de URLs, metadatos, velocidad de carga, sitemap, schema markup y optimización para móvil. El posicionamiento continuo en Google (link building, contenido SEO, estrategia de keywords) es un servicio aparte que complementa la web para conseguir resultados orgánicos a largo plazo.",
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

const SERVICE_DEMOS = [
  { nombre: "Clínica Dental Sonrisa", sector: "Salud · Dental", url: "https://clinica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=75", desc: "Web para clínica dental con servicios, equipo y citas online." },
  { nombre: "Restaurante El Roble", sector: "Hostelería · Gastronomía", url: "https://restaurante-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75", desc: "Web para restaurante con carta, reservas y eventos privados." },
  { nombre: "García & Asociados", sector: "Legal · Abogados", url: "https://abogados-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=75", desc: "Despacho de abogados con áreas de práctica y consulta online." },
  { nombre: "Reformas Integral BCN", sector: "Construcción · Reformas", url: "https://reformas-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75", desc: "Empresa de reformas con servicios, presupuesto y portfolio." },
  { nombre: "FitCenter Pro", sector: "Deporte · Fitness", url: "https://gimnasio-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=75", desc: "Centro deportivo con actividades, tarifas y prueba gratuita." },
  { nombre: "Premium Homes", sector: "Inmobiliaria · Propiedades", url: "https://inmobiliaria-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75", desc: "Inmobiliaria con catálogo de propiedades y valoración gratuita." },
  { nombre: "Studio Belle", sector: "Estética · Belleza", url: "https://estetica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75", desc: "Centro de estética con tratamientos, precios y cita online." },
  { nombre: "Academia Saber+", sector: "Educación · Formación", url: "https://academia-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75", desc: "Academia con cursos, oposiciones y clase de prueba gratuita." },
  { nombre: "Psicología Bienestar", sector: "Salud · Psicología", url: "https://psicologo-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=75", desc: "Centro de psicología con terapias presenciales y online." },
  { nombre: "Taller Auto Express", sector: "Automoción · Mecánica", url: "https://taller-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=75", desc: "Taller mecánico con servicios, cita online y diagnóstico." },
];

export default function PaginasCorporativasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
            alt="Páginas web corporativas profesionales"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/75 to-primary-700/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <Breadcrumbs crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
            { label: "Páginas Corporativas" },
          ]} />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 border border-accent-400/30 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
              Diseño Web Corporativo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tu empresa, visible<br />
              <span className="text-accent-400">y profesional en Google</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Una web corporativa que genera confianza, capta leads y trabaja por ti 24 horas al día. Diseño profesional, SEO técnico incluido y gestión autónoma desde el primer día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto/" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors text-center">
                Solicitar presupuesto
              </Link>
              <Link href="#demos" className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors text-center">
                Ver demos reales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-primary-700 py-5 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "desde 790€", label: "Precio todo incluido" },
            { value: "3–5 sem.", label: "Plazo de entrega" },
            { value: "SEO", label: "Técnico incluido" },
            { value: "100%", label: "Gestión autónoma" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-lg font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE DEMOS ── */}
      <section id="demos" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-500 mb-3">Webs reales que hemos construido</span>
            <h2 className="text-3xl font-bold text-primary-600 mb-3">Demos en vivo — así queda tu web</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Haz clic en cualquier demo para ver cómo quedaría la web de tu sector. Cada una es navegable y representa un proyecto real.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICE_DEMOS.map((p) => (
              <a
                key={p.nombre}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-32 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.nombre}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-primary-700/0 group-hover:bg-primary-700/20 transition-colors duration-300" />
                  <span className="absolute bottom-2 left-2 inline-block text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full leading-tight">
                    {p.sector}
                  </span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Ver demo →
                  </span>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-bold text-primary-600 text-sm mb-1 group-hover:text-accent-500 transition-colors">{p.nombre}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            ¿Tu sector no aparece? <Link href="/contacto/" className="text-accent-500 hover:underline font-medium">Consúltanos</Link> — trabajamos en todos los sectores.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Cuando un potencial cliente quiere saber si puede confiar en tu empresa, lo primero que hace es buscar tu web. Ese momento — los primeros 5 segundos en tu página — decide si sigue leyendo o vuelve a Google a buscar a tu competencia. Una web corporativa profesional convierte ese momento de duda en una primera impresión que genera confianza.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué una web corporativa profesional importa</h2>
          <p>
            El 75% de las personas juzga la credibilidad de una empresa por el diseño de su web. No por su trayectoria, no por sus años de experiencia, no por sus clientes — por cómo se ve la web. Esto significa que una empresa con 20 años de historia y una web anticuada compite en desventaja frente a un competidor más reciente con una presencia digital cuidada.
          </p>
          <p>
            La confianza se construye antes del primer contacto. Un diseño profesional, textos claros, fotos reales del equipo y las instalaciones, y una estructura fácil de navegar comunican seriedad antes de que el cliente haya leído una sola línea de tu propuesta. Y una web bien construida técnicamente posiciona en Google, multiplicando el número de personas que llegan a esa primera impresión de forma orgánica y gratuita.
          </p>
          <p>
            El tercer factor es la conversión. Una web corporativa no existe solo para informar — existe para convertir visitantes en leads. Formularios bien colocados, llamadas a la acción claras, tiempos de carga rápidos y una experiencia fluida en móvil son elementos técnicos que marcan la diferencia entre una web que genera contactos y una web que solo ocupa espacio en internet.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">El problema real no es carecer de web. Es tener una web que no trabaja.</p>
          <p className="text-gray-600 leading-relaxed mt-4">Una web corporativa que trabaja tiene un objetivo claro en cada página: que el visitante entienda qué hace la empresa, por qué debería confiar en ella, y qué tiene que hacer a continuación. Eso no se consigue con un diseño bonito. Se consigue con una arquitectura de contenido bien pensada, mensajes alineados con lo que el cliente potencial está buscando, y elementos de confianza correctamente posicionados.</p>
          <p className="text-gray-600 leading-relaxed mt-4">Las webs que no trabajan tienen en común lo mismo: fueron diseñadas pensando en cómo quería verse la empresa, no en qué necesita ver el cliente para dar el siguiente paso. El resultado es una presencia digital que existe pero no genera.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué debe incluir una web corporativa</h2>
          <p>Una web corporativa efectiva no es una colección de páginas — es una arquitectura pensada para guiar al visitante desde el descubrimiento hasta el contacto. Estos son los elementos imprescindibles:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Home con propuesta de valor clara:</strong> en menos de 5 segundos el visitante tiene que entender qué haces, para quién y por qué elegirte a ti. Sin ambigüedades, sin jerga del sector.</li>
            <li><strong>Páginas de servicios detalladas:</strong> cada servicio en su propia página, explicado desde el punto de vista del cliente: qué problema resuelve, cómo funciona, a quién va dirigido y qué resultado puede esperar.</li>
            <li><strong>Página Sobre nosotros con equipo real:</strong> nombre, foto y rol de las personas detrás de la empresa. La humanización es el factor de confianza más subestimado en las webs corporativas.</li>
            <li><strong>Casos de éxito o portfolio:</strong> resultados reales con clientes reales. Los números y los nombres concretos convierten mucho más que los textos genéricos.</li>
            <li><strong>Blog o sección de contenidos:</strong> artículos útiles para tu audiencia objetivo posicionan la empresa como referente del sector y atraen tráfico orgánico de forma continua.</li>
            <li><strong>Formulario de contacto optimizado:</strong> visible en cada página, sencillo de rellenar y con confirmación inmediata. El número de campos es inversamente proporcional a la tasa de conversión.</li>
            <li><strong>Datos de contacto y ubicación:</strong> teléfono, email, dirección y horario en un lugar visible en todas las páginas, especialmente en el footer y la página de contacto.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Proceso de trabajo en 4 pasos</h2>
          <ul className="list-none space-y-4">
            {[
              { n: "1", t: "Análisis y estrategia", d: "Estudiamos tu sector, tus competidores y las keywords con más potencial. Definimos la arquitectura de la web, las páginas necesarias y los mensajes clave para cada tipo de cliente." },
              { n: "2", t: "Diseño y desarrollo", d: "Creamos un diseño único adaptado a tu identidad corporativa. Rápido, seguro, adaptado a móvil y con el SEO técnico integrado desde el primer día de desarrollo." },
              { n: "3", t: "Contenido y optimización", d: "Redactamos o revisamos los textos de cada página con enfoque en posicionamiento y conversión. Integramos el formulario de contacto, Google Maps, el blog y cualquier herramienta necesaria." },
              { n: "4", t: "Formación y entrega", d: "Te enseñamos a gestionar la web de forma autónoma. La web es tuya, sin ataduras. Puedes actualizarla, añadir páginas y publicar contenido sin depender de nosotros." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Sectores en los que trabajamos</h2>
          <p>Diseñamos webs corporativas para empresas de todos los tamaños y sectores. Algunos de los más habituales:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: "⚖️", label: "Despachos y asesorías" },
              { icon: "🏗️", label: "Construcción y reformas" },
              { icon: "🏥", label: "Salud y clínicas" },
              { icon: "🎓", label: "Formación y educación" },
              { icon: "🏭", label: "Industria y servicios" },
              { icon: "💻", label: "Tecnología y software" },
              { icon: "🏢", label: "Inmobiliarias" },
              { icon: "🍽️", label: "Hostelería y restauración" },
              { icon: "🚚", label: "Logística y transporte" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                <span>{s.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Web corporativa vs tienda online: ¿cuál necesitas?</h2>
          <div className="space-y-4 text-gray-600">
            <p>La diferencia entre una web corporativa y una tienda online no es solo funcional — es estratégica. Una web corporativa está diseñada para generar confianza, presentar la empresa y convertir visitantes en contactos o llamadas. Una tienda online está diseñada para convertir visitantes en compradores directos.</p>
            <p>Necesitas una web corporativa si tu proceso de venta implica contacto previo, si vendes servicios o proyectos que requieren personalización, si tus clientes son empresas (B2B), o si el ticket de tu producto o servicio hace que la decisión de compra requiera tiempo y confianza antes del cierre.</p>
            <p>Necesitas una tienda online si vendes productos físicos o digitales con precio fijo, si el proceso de compra puede completarse sin intervención humana, y si tienes un catálogo que gestionar con stock, variantes, envíos y cobro online.</p>
            <p>Hay negocios que necesitan las dos cosas: una web corporativa que presenta la empresa y construye confianza, más una tienda online integrada para el canal de venta directa. En esos casos desarrollamos ambas como un sistema cohesionado, no como dos proyectos independientes.</p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿No sabes qué tipo de web necesita tu empresa?</p>
            <p className="text-gray-600 text-sm mb-4">Cuéntanos tu negocio y te recomendamos la solución más adecuada. Sin compromiso, sin rodeos.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Hablar con un especialista
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Tecnología y por qué usamos WordPress</h2>
          <div className="space-y-4 text-gray-600">
            <p>Desarrollamos webs corporativas sobre WordPress porque es la plataforma que mejor equilibra tres factores críticos para el cliente: capacidad de gestión autónoma, coste de mantenimiento a largo plazo, y flexibilidad para crecer.</p>
            <p>WordPress alimenta más del 40% de todos los sitios web del mundo. Eso significa que cualquier profesional puede hacer cambios en tu web si en algún momento necesitas soporte externo — no quedas atado a nosotros ni a ningún otro proveedor. El código, el dominio y el hosting son tuyos desde el primer día.</p>
            <p>El SEO técnico está integrado desde la arquitectura: URLs limpias, velocidad de carga optimizada, sitemap automático, schema markup, metadatos editables, y estructura de cabeceras correcta. No es algo que añadimos al final — es parte del diseño desde el inicio.</p>
            <p>La formación incluida en el precio no es un tutorial genérico. Es una sesión de trabajo contigo o con tu equipo sobre tu web real, donde repasamos exactamente las operaciones que necesitarás hacer: editar textos, añadir páginas, subir imágenes, publicar en el blog y gestionar el formulario de contacto.</p>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
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

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Web corporativa que trabaja por ti</h2>
            <p className="text-primary-200 mb-6">
              Diseño profesional, SEO técnico incluido, gestión autónoma y sin ataduras. Tu empresa visible y generando leads desde el primer día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar presupuesto
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio diseño web
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 pt-2">
            Ver también: <Link href="/diseno-web-para-dentistas/" className="text-accent-500 hover:underline">Diseño web para dentistas</Link> · <Link href="/diseno-web-para-coaches/" className="text-accent-500 hover:underline">Diseño web para coaches</Link> · <Link href="/cuanto-cuesta-pagina-web-profesional/" className="text-accent-500 hover:underline">¿Cuánto cuesta una página web profesional?</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver a Diseño Web</Link>
        </nav>
        </div>
      </article>
      <RelatedArticles category="Diseño Web" />
    </>
  );
}
