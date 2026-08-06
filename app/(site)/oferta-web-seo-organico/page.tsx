import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Web + SEO desde 999€ — Presencia Digital Completa para Autónomos y PYMEs",
  description:
    "Web profesional + 6 meses de SEO por 999€ + IVA. Todo incluido: hosting, dominio, correo corporativo, páginas legales y soporte. Sin permanencia. Sin sorpresas.",
  alternates: { canonical: "https://www.mktweb360.com/oferta-web-seo-organico/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Web + SEO desde 999€ — Presencia Digital Completa",
    description:
      "Web profesional + 6 meses de SEO por 999€ + IVA. Todo incluido. Sin permanencia.",
    url: "https://www.mktweb360.com/oferta-web-seo-organico/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Web + SEO 999€ — Mkt Web 360",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Offer",
      name: "Web Profesional + SEO 6 meses",
      description:
        "Web profesional completa + 6 meses de posicionamiento SEO por 999€ + IVA. Incluye hosting, dominio, correo corporativo, páginas legales y soporte.",
      price: "999",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      url: "https://www.mktweb360.com/oferta-web-seo-organico/",
      seller: {
        "@type": "Organization",
        name: "Mkt Web 360 SLU",
        url: "https://www.mktweb360.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué pasa después de los 6 meses de SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Al finalizar los 6 meses puedes contratar el SEO mensual a 300€/mes, o quedarte solo con tu web sin ningún compromiso adicional. La web es tuya desde el primer día.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito tener el contenido listo para empezar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No es imprescindible. Si nos facilitas textos e imágenes, mejor. Si no tienes nada, podemos ayudarte a redactar los textos básicos dentro de la oferta.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para qué tipo de negocios es esta oferta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es ideal para autónomos, profesionales y PYMEs de cualquier sector que quieran una presencia digital profesional y empezar a captar clientes por Google.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hay permanencia o compromiso?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ninguno. La web es tuya desde el primer día. El SEO puede cancelarse en cualquier momento tras los 3 meses incluidos.",
          },
        },
      ],
    },
  ],
};

const DEMOS = [
  {
    nombre: "Clínica Dental Sonrisa",
    sector: "Salud · Dental",
    url: "https://clinica-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=75",
    desc: "Web clínica dental con servicios, equipo y citas online.",
  },
  {
    nombre: "Restaurante El Roble",
    sector: "Hostelería",
    url: "https://restaurante-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75",
    desc: "Carta, reservas y espacio del restaurante.",
  },
  {
    nombre: "Despacho Jurídico Martínez",
    sector: "Legal · Abogados",
    url: "https://abogados-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=75",
    desc: "Áreas de práctica, equipo y consulta online.",
  },
  {
    nombre: "Reformas González",
    sector: "Construcción",
    url: "https://reformas-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    desc: "Portfolio de obras, servicios y presupuesto.",
  },
  {
    nombre: "Gimnasio FitLife",
    sector: "Deporte · Fitness",
    url: "https://gimnasio-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=75",
    desc: "Tarifas, clases y reserva de membresía.",
  },
  {
    nombre: "Inmobiliaria Casas & Más",
    sector: "Inmobiliaria",
    url: "https://inmobiliaria-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75",
    desc: "Propiedades, búsqueda avanzada y tasación.",
  },
  {
    nombre: "Centro de Estética Lumière",
    sector: "Belleza · Estética",
    url: "https://estetica-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75",
    desc: "Servicios, tarifas y reserva de cita online.",
  },
  {
    nombre: "Academia Lingua",
    sector: "Educación",
    url: "https://academia-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75",
    desc: "Cursos, niveles y matriculación online.",
  },
  {
    nombre: "Psicología Integral",
    sector: "Psicología · Salud Mental",
    url: "https://psicologo-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=75",
    desc: "Servicios, metodología y primera consulta.",
  },
  {
    nombre: "Taller Mecánico AutoExpert",
    sector: "Automoción",
    url: "https://taller-demo.mktweb360.com",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=75",
    desc: "Servicios, revisiones y presupuesto online.",
  },
];

const INCLUDED = [
  {
    title: "Web profesional",
    icon: "🌐",
    items: [
      "Diseño web profesional completo",
      "Responsive — perfecta en móvil y tablet",
      "Velocidad optimizada (SiteGround)",
      "SSL + formulario de contacto",
      "Google Analytics 4 + Search Console",
      "Páginas legales + banner de cookies RGPD",
    ],
  },
  {
    title: "Infraestructura y correo",
    icon: "✉️",
    items: [
      "Dominio .com o .es (1 año incluido)",
      "Hosting profesional (SiteGround)",
      "Correo corporativo configurado",
      "Migración del correo actual",
      "Gestión DNS y configuración completa",
      "Soporte técnico 6 meses",
    ],
  },
  {
    title: "SEO 6 meses (3 gratis)",
    icon: "📈",
    items: [
      "Auditoría técnica inicial",
      "Investigación de palabras clave",
      "Optimización on-page completa",
      "Alta en directorios principales",
      "Google Business Profile optimizado",
      "Informe mensual de resultados",
    ],
    highlight: true,
  },
];

const STEPS = [
  { n: "1", title: "Contacta", desc: "Rellena el formulario o llámanos. Sin compromiso." },
  { n: "2", title: "Preparamos tu web", desc: "En 48-72h tienes tu web lista. Tú das el material, nosotros hacemos el resto." },
  { n: "3", title: "Lanzamos y posicionamos", desc: "Publicamos y comenzamos el SEO desde el primer día." },
  { n: "4", title: "Ves resultados", desc: "Informe mensual con posiciones y tráfico. Tú decides si continuar." },
];

const FAQS = [
  { q: "¿Qué pasa después de los 6 meses de SEO?", a: "Puedes contratar el SEO mensual a 300€/mes o quedarte solo con tu web sin ningún compromiso. La web es tuya desde el primer día." },
  { q: "¿Necesito tener el contenido listo?", a: "No es imprescindible. Si tienes textos e imágenes, mejor. Si no tienes nada, podemos ayudarte a redactarlos dentro de la oferta." },
  { q: "¿Para qué tipo de negocios es?", a: "Para autónomos, profesionales y PYMEs de cualquier sector que quieran una presencia digital profesional y empezar a captar clientes por Google." },
  { q: "¿Hay permanencia?", a: "Ninguna. La web es tuya desde el primer día. El SEO puede cancelarse en cualquier momento tras los 3 meses incluidos." },
  { q: "¿Qué dominio puedo elegir?", a: "Cualquier .com o .es disponible. Si ya tienes dominio, también lo gestionamos sin coste adicional." },
  { q: "¿Cuánto tarda en estar lista?", a: "La web se entrega en 48-72h tras recibir el material. El SEO empieza en paralelo desde el mismo día del lanzamiento." },
];

export default function OfertaWebSeoOrganicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=85"
          alt="Diseño web y SEO para empresas"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/92 via-primary-800/80 to-primary-700/50" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Inicio</Link>
            <span>›</span>
            <span className="text-white/80">Web + SEO 999€</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-400/40 rounded-full px-4 py-1.5 text-sm font-medium text-accent-300 mb-6">
            <span>⚡</span>
            <span>Oferta limitada · Solo 5 plazas disponibles</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Tu web profesional + 6 meses de SEO por{" "}
            <span className="text-accent-400">999€</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
            Todo incluido: hosting, dominio, correo corporativo, páginas legales y soporte.
            Sin permanencia. Sin sorpresas. La web es tuya desde el primer día.
          </p>

          {/* Price block */}
          <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-8">
            <span className="text-xl text-white/50 line-through">2.600€</span>
            <span className="text-4xl font-bold text-white">999€</span>
            <span className="text-white/70">+ IVA</span>
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              Ahorras 1.601€
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demos"
              className="bg-white text-primary-700 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-center shadow-lg"
            >
              Ver ejemplos reales →
            </a>
            <a
              href="#solicitar"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors text-center shadow-lg"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-primary-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { v: "999€", l: "precio todo incluido" },
            { v: "48-72h", l: "entrega tu web" },
            { v: "6 meses", l: "SEO incluido" },
            { v: "0€", l: "de permanencia" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-xl font-bold text-accent-400">{s.v}</div>
              <div className="text-white/70 text-xs">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-4">
            Todo lo que incluye tu oferta
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Un único precio. Sin letra pequeña. Sin costes ocultos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INCLUDED.map((col) => (
              <div
                key={col.title}
                className={`rounded-2xl p-6 border-2 ${
                  col.highlight
                    ? "border-accent-500 bg-accent-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="text-3xl mb-3">{col.icon}</div>
                <h3 className="font-bold text-primary-700 text-lg mb-4">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#solicitar"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-10 py-4 rounded-full transition-colors inline-block"
            >
              Quiero esta oferta →
            </a>
          </div>
        </div>
      </section>

      {/* ── DEMOS POR SECTOR ── */}
      <section id="demos" className="bg-gray-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-4">
            Ejemplos reales de webs que hacemos
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Estas demos muestran el nivel de calidad incluido en la oferta. Haz clic para verlas en directo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {DEMOS.map((p) => (
              <a
                key={p.nombre}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-28 overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.nombre}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                    {p.sector}
                  </span>
                  <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-accent-500 text-white px-2 py-0.5 rounded-full">
                    Ver →
                  </span>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-bold text-primary-600 text-xs mb-1 group-hover:text-accent-500 transition-colors leading-tight">
                    {p.nombre}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-snug flex-1">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Demos reales — el diseño final se adapta a tu marca, sector y objetivos.
          </p>
        </div>
      </section>

      {/* ── PARA QUIÉN ES ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-12">
            ¿Para quién es esta oferta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-4">✅ Perfecta si…</h3>
              <ul className="space-y-3">
                {[
                  "Eres autónomo sin presencia digital",
                  "Tienes una PYME con web antigua o lenta",
                  "Quieres captar clientes por Google",
                  "Tienes un negocio local (clínica, restaurante, taller…)",
                  "Tu WordPress va lento o está desactualizado",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-600 text-lg mb-4">❌ No es para ti si…</h3>
              <ul className="space-y-3">
                {[
                  "Necesitas una tienda online grande",
                  "Tu web tiene más de 50 páginas",
                  "Tu proyecto requiere funcionalidades a medida",
                  "Aún no tienes claro qué quieres comunicar",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-500">
                    <span className="text-red-400 font-bold shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-12">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-700 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-primary-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl group overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-primary-700 text-sm list-none hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="text-accent-500 text-lg group-open:rotate-180 transition-transform ml-4 shrink-0">
                    ▾
                  </span>
                </summary>
                <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FORMULARIO ── */}
      <section id="solicitar" className="bg-primary-800 px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-6">
              <span>⚡</span>
              <span>Solo 5 plazas disponibles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Empezamos?
            </h2>
            <p className="text-white/70 leading-relaxed">
              Cuéntanos tu proyecto. Te respondemos en menos de 24 horas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <ContactForm />
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-center space-y-2">
            <p className="text-white/60 text-sm">¿Prefieres hablar primero?</p>
            <a
              href="tel:+34622748987"
              className="text-white font-semibold text-lg hover:text-accent-400 transition-colors block"
            >
              📞 622 74 89 87
            </a>
            <a
              href="mailto:info@mktweb360.com"
              className="text-white/60 text-sm hover:text-white transition-colors block"
            >
              info@mktweb360.com
            </a>
          </div>
        </div>
      </section>

      {/* ── ENLACE A ADS LANDING ── */}
      <section className="bg-gray-100 px-4 py-6 text-center text-sm text-gray-500">
        ¿Buscas la oferta especial limitada?{" "}
        <Link href="/oferta-web-seo/" className="text-accent-500 font-semibold hover:underline">
          Ver oferta con plazas limitadas →
        </Link>
      </section>
    </>
  );
}
