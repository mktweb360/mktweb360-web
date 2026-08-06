import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web para Empresas — Soluciones a Medida",
  description: "Diseño de páginas web para empresas con funcionalidades avanzadas. Soluciones a medida, portales, catálogos, reservas y plataformas web empresariales. SEO incluido.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-paginas-web-empresa/" },
  openGraph: {
    title: "Diseño de Páginas Web para Empresas | Mkt Web 360",
    description: "Webs empresariales a medida con SEO técnico, funcionalidades avanzadas y gestión autónoma. Portales, catálogos, reservas y más.",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-paginas-web-empresa/",
    images: [{ url: "https://www.mktweb360.com/og-paginas-corporativas.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de Páginas Web para Empresas",
  serviceType: "Web Design",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Diseño y desarrollo de páginas web para empresas con funcionalidades avanzadas y soluciones a medida.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-paginas-web-empresa/",
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

const PROJECTS = [
  "Webs corporativas multi-idioma",
  "Portales de clientes con área privada",
  "Catálogos de productos online",
  "Webs con reservas y citas online",
  "Plataformas de formación e-learning",
  "Webs inmobiliarias con búsqueda avanzada",
  "Portales de servicios con presupuestadores online",
];

export default function PaginasWebEmpresaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=85"
            alt="Páginas web para empresas profesionales"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/88 via-primary-800/70 to-primary-700/35" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <Breadcrumbs crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
            { label: "Webs para Empresas" },
          ]} />
          <div className="mt-6 max-w-2xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 border border-accent-400/30 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
              Soluciones Web Empresariales
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Páginas web para empresas<br />
              <span className="text-accent-400">con funcionalidades a medida</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Catálogos, portales de clientes, reservas, intranets y plataformas digitales. Soluciones web completas para empresas que necesitan más que una web corporativa estándar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto/" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors text-center">
                Hablar de mi proyecto
              </Link>
              <Link href="#demos" className="border-2 border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors text-center">
                Ver demos en vivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-primary-700 py-5 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "A medida", label: "Nada de plantillas" },
            { value: "Next.js / WP", label: "Tecnología propia" },
            { value: "SEO", label: "Técnico incluido" },
            { value: "Escalable", label: "Crece con tu empresa" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-lg font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEMOS ── */}
      <section id="demos" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-500 mb-3">Demos en vivo por sector</span>
            <h2 className="text-3xl font-bold text-primary-600 mb-3">Así quedan las webs que construimos</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Haz clic en cualquier demo para navegarla en tiempo real. Cada una representa un proyecto para un sector específico.</p>
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

      {/* ── PROJECTS ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-500 mb-3">Tipos de proyecto</span>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Proyectos empresariales que desarrollamos</h2>
              <ul className="space-y-3">
                {PROJECTS.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">¿Proyecto complejo o funcionalidades especiales?</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Cuéntanos qué necesitas. Analizamos tu proyecto sin compromiso y te proponemos la arquitectura técnica y el presupuesto más adecuados.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Trabajamos con Next.js y React para proyectos que requieren máxima velocidad y escalabilidad, y con WordPress para proyectos donde el cliente necesita gestión autónoma sin depender de un equipo técnico.
              </p>
              <Link href="/contacto/" className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors">
                Hablar con un especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nuestro proceso de trabajo</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Un proceso claro, sin sorpresas y contigo en el centro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Análisis y consultoría", desc: "Estudiamos tu negocio, objetivos y competencia para proponer la solución web más adecuada." },
              { step: "2", title: "Diseño UX/UI", desc: "Creamos prototipos que priorizan la experiencia del usuario y los objetivos de negocio." },
              { step: "3", title: "Desarrollo", desc: "Programamos con las mejores tecnologías, SEO técnico integrado y código limpio y escalable." },
              { step: "4", title: "Testing y entrega", desc: "Probamos exhaustivamente en todos los dispositivos. Formación incluida para gestión autónoma." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-primary-600 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué tu web es el activo digital más importante de tu empresa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Las empresas que invierten en una web profesional no lo hacen solo por imagen. Lo hacen porque una web bien construida es el único canal digital que la empresa controla completamente. Las redes sociales cambian sus algoritmos, Google Ads sube sus precios — pero la web trabaja para ti las 24 horas sin depender de terceros.
            </p>
            <p>
              Una web corporativa o empresarial efectiva tiene un único objetivo en cada página: que el visitante entienda qué hace la empresa, por qué debería confiar en ella, y qué tiene que hacer a continuación. Eso no se consigue con un diseño bonito. Se consigue con arquitectura de contenido bien pensada, mensajes alineados con la intención del cliente y elementos de confianza correctamente posicionados.
            </p>
            <p>
              Para empresas con necesidades más complejas — portales de clientes, catálogos avanzados, intranets o plataformas con lógica de negocio específica — la solución técnica importa tanto como el diseño. Usamos la tecnología adecuada a cada proyecto, no la que más nos conviene a nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-primary-200">Cuéntanos tu proyecto y te respondemos con una propuesta en menos de 24 horas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="diseno-web-empresa" />
          </div>
          <div className="text-center mt-6">
            <Link href="/diseno-de-paginas-web/" className="text-primary-200 hover:text-white text-sm transition-colors">
              ← Volver a Diseño Web
            </Link>
          </div>
        </div>
      </section>

      <RelatedArticles category="Diseño Web" />
    </>
  );
}
