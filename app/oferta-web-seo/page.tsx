import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OfertaForm } from "@/components/OfertaForm";

export const metadata: Metadata = {
  title: "Oferta Web + SEO — Presencia Digital Completa desde 999€ | Mkt Web 360",
  description:
    "Web profesional + 6 meses de SEO por solo 999€ + IVA. Hosting, dominio, correo corporativo, páginas legales y soporte incluidos. Solo 5 plazas. Oferta limitada.",
  alternates: { canonical: "https://www.mktweb360.com/oferta-web-seo/" },
  robots: { index: true, follow: true },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué pasa después de los 6 meses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Al finalizar los 6 meses puedes contratar el SEO mensual a 300€/mes, o simplemente quedarte con tu web sin ningún compromiso adicional. La web es tuya desde el primer día.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener el contenido listo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No es imprescindible. Si nos facilitas textos e imágenes, mejor. Si no tienes nada, podemos ayudarte a redactar los textos básicos dentro de la oferta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué dominio puedo elegir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cualquier dominio .com o .es disponible. Si ya tienes dominio propio, también lo gestionamos sin coste adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye exactamente el correo corporativo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Configuramos las cuentas que necesites (info@, contacto@, nombre@...), migramos tu correo actual si ya tienes uno y te dejamos todo funcionando.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué solo 5 plazas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para garantizar la calidad del servicio y los plazos de entrega. Cada web requiere atención personalizada y no queremos comprometer el resultado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay permanencia o compromiso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ninguno. La web es tuya desde el primer día. El SEO se puede cancelar en cualquier momento después de los 3 meses incluidos.",
      },
    },
  ],
};

const INCLUDED = [
  {
    title: "Web profesional",
    icon: "🌐",
    items: [
      "Diseño web profesional completo",
      "Responsive — perfecta en móvil y tablet",
      "Velocidad optimizada (Vercel)",
      "SSL incluido",
      "Formulario de contacto funcionando",
      "Google Analytics 4 + Search Console",
      "Páginas legales (aviso legal, privacidad, cookies)",
      "Banner de cookies RGPD",
    ],
  },
  {
    title: "Infraestructura y correo",
    icon: "✉️",
    items: [
      "Dominio .com o .es (1 año incluido)",
      "Hosting profesional (Vercel)",
      "Correo corporativo configurado",
      "Migración del correo actual (sin perder nada)",
      "Creación de cuentas de correo necesarias",
      "Gestión DNS y configuración completa",
      "Soporte técnico durante 6 meses",
    ],
  },
  {
    title: "SEO 6 meses (pagas solo 3)",
    icon: "📈",
    items: [
      "Auditoría técnica inicial",
      "Investigación de palabras clave",
      "Optimización on-page completa",
      "Alta en directorios principales",
      "Google My Business optimizado",
      "Informe mensual de resultados",
      "Los 3 últimos meses son GRATIS",
    ],
    highlight: true,
  },
];

const STEPS = [
  {
    n: "1",
    title: "Nos contactas",
    desc: "Rellenas el formulario o nos llamas. Analizamos tu situación sin compromiso.",
  },
  {
    n: "2",
    title: "Preparamos tu web",
    desc: "En 48-72h tu web está lista. Tú nos das el material, nosotros hacemos el resto.",
  },
  {
    n: "3",
    title: "Lanzamos y posicionamos",
    desc: "Publicamos tu web y comenzamos el trabajo de SEO desde el primer día.",
  },
  {
    n: "4",
    title: "Ves resultados",
    desc: "Informe mensual con posiciones, tráfico y evolución. Tú decides si continuar.",
  },
];

const TESTIMONIALS = [
  {
    text: "Llevábamos años con una web que no nos ayudaba. En una semana teníamos todo funcionando y empezamos a recibir consultas por Google.",
    author: "CC Láser Depilación",
  },
  {
    text: "El proceso fue muy sencillo. Nos explicaron todo, migraron nuestro correo sin problemas y el resultado fue mucho mejor de lo esperado.",
    author: "Interbya Representaciones",
  },
  {
    text: "Por fin tenemos una web que representa bien a nuestra empresa. Y el SEO está funcionando: cada mes recibimos más visitas.",
    author: "Urbanpool",
  },
];

const FAQS = [
  {
    q: "¿Qué pasa después de los 6 meses?",
    a: "Al finalizar los 6 meses puedes contratar el SEO mensual a 300€/mes, o simplemente quedarte con tu web sin ningún compromiso adicional. La web es tuya desde el primer día.",
  },
  {
    q: "¿Necesito tener el contenido listo?",
    a: "No es imprescindible. Si nos facilitas textos e imágenes, mejor. Si no tienes nada, podemos ayudarte a redactar los textos básicos dentro de la oferta.",
  },
  {
    q: "¿Qué dominio puedo elegir?",
    a: "Cualquier dominio .com o .es disponible. Si ya tienes dominio propio, también lo gestionamos sin coste adicional.",
  },
  {
    q: "¿Qué incluye exactamente el correo corporativo?",
    a: "Configuramos las cuentas que necesites (info@, contacto@, nombre@...), migramos tu correo actual si ya tienes uno y te dejamos todo funcionando.",
  },
  {
    q: "¿Por qué solo 5 plazas?",
    a: "Para garantizar la calidad del servicio y los plazos de entrega. Cada web requiere atención personalizada y no queremos comprometer el resultado.",
  },
  {
    q: "¿Hay permanencia o compromiso?",
    a: "Ninguno. La web es tuya desde el primer día. El SEO se puede cancelar en cualquier momento después de los 3 meses incluidos.",
  },
];

export default function OfertaWebSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Minimal header ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Mkt Web 360" width={150} height={42} priority />
          </Link>
          <a
            href="tel:+34696714476"
            className="flex items-center gap-2 font-semibold text-sm text-[#1e3a5f] hover:text-[#f97316] transition-colors"
          >
            <span>📞</span>
            <span>696 71 44 76</span>
          </a>
        </div>
      </header>

      {/* ── SECTION 1: Hero ── */}
      <section style={{ backgroundColor: "#1e3a5f" }} className="text-white px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8">
            <span>⚡</span>
            <span>Solo quedan 5 plazas — Oferta válida hasta 31 julio 2025</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Tu web profesional + 6 meses de SEO por <span className="text-[#f97316]">999€</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200 mb-10 leading-relaxed">
            Todo incluido: hosting, dominio, correo corporativo, páginas legales y soporte.
            <br className="hidden md:block" />
            Sin permanencia. Sin sorpresas.
          </p>

          {/* Price block */}
          <div className="inline-block bg-white/10 border border-white/20 rounded-2xl px-8 py-6 mb-10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl text-blue-300 line-through">2.600€</span>
              <span className="text-5xl font-bold text-white">999€</span>
              <span className="text-xl text-blue-200">+ IVA</span>
            </div>
            <div className="inline-block bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
              Ahorras 1.601€
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#solicitar"
              className="bg-[#f97316] hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors shadow-xl w-full sm:w-auto"
            >
              Quiero esta oferta — Solicitar ahora
            </a>
          </div>

          <a
            href="tel:+34696714476"
            className="text-blue-300 hover:text-white text-sm transition-colors block mb-6"
          >
            ¿Tienes dudas? Llámanos: 696 71 44 76
          </a>

          <p className="text-xs text-blue-400">
            Mkt Web 360 SLU · Agencia de marketing digital · El Viso de San Juan, Toledo
          </p>
        </div>
      </section>

      {/* ── SECTION 2: What's included ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">
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
                    ? "border-[#f97316] bg-orange-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="text-3xl mb-3">{col.icon}</div>
                <h3 className="font-bold text-[#1e3a5f] text-lg mb-4">{col.title}</h3>
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
              className="bg-[#f97316] hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-colors inline-block"
            >
              Reservar mi plaza ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How it works ── */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1e3a5f] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: For whom ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
            ¿Para quién es esta oferta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                <span>✅</span> Perfecta para ti si…
              </h3>
              <ul className="space-y-3">
                {[
                  "Eres autónomo sin presencia digital",
                  "Tienes una PYME con web antigua o lenta",
                  "Tu WordPress está lleno de plugins y va lento",
                  "Quieres captar clientes por Google",
                  "Tienes un negocio local y quieres más visibilidad",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-600 text-lg mb-4 flex items-center gap-2">
                <span>❌</span> No es para ti si…
              </h3>
              <ul className="space-y-3">
                {[
                  "Necesitas una tienda online grande (ecommerce complejo)",
                  "Tu web tiene más de 50 páginas",
                  "Tu proyecto requiere funcionalidades a medida",
                  "No tienes claro qué quieres comunicar",
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

      {/* ── SECTION 5: Testimonials ── */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-[#f97316] text-2xl mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-semibold text-[#1e3a5f] text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ ── */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="border border-gray-200 rounded-xl group overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-[#1e3a5f] text-sm list-none hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <span className="text-[#f97316] text-lg group-open:rotate-180 transition-transform ml-4 shrink-0">▾</span>
                </summary>
                <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA + Form ── */}
      <section id="solicitar" style={{ backgroundColor: "#1e3a5f" }} className="px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white mb-6">
              <span>⚡</span>
              <span>Solo 5 plazas disponibles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Empezamos?
            </h2>
            <p className="text-blue-200 leading-relaxed">
              Esta oferta tiene fecha de cierre. Si estás pensándolo, el mejor momento para empezar es ahora.
            </p>
          </div>

          <OfertaForm />

          <div className="mt-8 pt-6 border-t border-white/20 text-center space-y-2">
            <p className="text-blue-200 text-sm">¿Prefieres hablar primero?</p>
            <a
              href="tel:+34696714476"
              className="text-white font-semibold text-lg hover:text-[#f97316] transition-colors block"
            >
              📞 696 71 44 76
            </a>
            <a
              href="mailto:info@mktweb360.com"
              className="text-blue-300 text-sm hover:text-white transition-colors block"
            >
              info@mktweb360.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-gray-900 text-gray-400 text-xs text-center py-4 px-4">
        © 2025 Mkt Web 360 SLU &nbsp;·&nbsp;
        <Link href="/aviso-legal/" className="hover:text-white transition-colors">Aviso Legal</Link>
        &nbsp;·&nbsp;
        <Link href="/politica-de-privacidad/" className="hover:text-white transition-colors">Privacidad</Link>
        &nbsp;·&nbsp;
        <Link href="/politica-de-cookies/" className="hover:text-white transition-colors">Cookies</Link>
      </footer>
    </>
  );
}
