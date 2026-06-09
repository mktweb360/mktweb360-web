import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital para PYMEs — Mkt Web 360",
  description:
    "Agencia de marketing digital especializada en SEO, SEM/Google Ads, Redes Sociales y Diseño Web. Servicio nacional para PYMEs y empresas desde Toledo.",
  alternates: { canonical: "https://www.mktweb360.com/" },
  openGraph: {
    title: "Mkt Web 360 — Agencia de Marketing Digital para PYMEs",
    description: "SEO, SEM, Social Media y Diseño Web. Servicio nacional desde Toledo, España.",
    url: "https://www.mktweb360.com/",
    images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "Mkt Web 360 Agencia Marketing Digital" }],
  },
};

const SERVICES = [
  {
    icon: "🔍",
    title: "SEO Posicionamiento",
    desc: "Mejora tu visibilidad en Google con estrategias SEO sólidas y duraderas.",
    href: "/seo-posicionamiento-web-organico/",
  },
  {
    icon: "📢",
    title: "SEM / Google Ads",
    desc: "Campañas de publicidad de pago que generan resultados desde el primer día.",
    href: "/sem-publicidad-ppc/",
  },
  {
    icon: "📱",
    title: "Redes Sociales",
    desc: "Gestión profesional de tus redes sociales para conectar con tu audiencia.",
    href: "/smm-social-media-marketing/",
  },
  {
    icon: "💻",
    title: "Diseño Web",
    desc: "Páginas web modernas, rápidas y optimizadas para convertir visitas en clientes.",
    href: "/diseno-de-paginas-web/",
  },
  {
    icon: "✍️",
    title: "Marketing de Contenidos",
    desc: "Contenido de valor que posiciona tu marca como referente en tu sector.",
    href: "/marketing-de-contenidos/",
  },
  {
    icon: "🎯",
    title: "Kit Digital",
    desc: "Ayudas del Gobierno para digitalizar tu negocio. Te acompañamos en el proceso.",
    href: "/kit-digital/",
  },
];

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    company: "Empresa de Reformas, Madrid",
    text: "Gracias a Mkt Web 360 hemos multiplicado por 3 las consultas desde Google. El trabajo de SEO ha sido excepcional y los resultados llegaron antes de lo esperado.",
  },
  {
    name: "Laura G.",
    company: "Clínica Dental, Valencia",
    text: "La gestión de nuestras redes sociales ha mejorado enormemente. El equipo entiende nuestro sector y crea contenido que conecta de verdad con nuestros pacientes.",
  },
  {
    name: "Javier R.",
    company: "Tienda Online, Sevilla",
    text: "Las campañas de Google Ads que gestionan son muy eficientes. El ROAS ha mejorado un 240% desde que empezamos con ellos hace un año.",
  },
  {
    name: "Ana P.",
    company: "Consultoría Legal, Barcelona",
    text: "Nos diseñaron una web profesional que representa perfectamente nuestra firma. El proceso fue ágil y el resultado superó nuestras expectativas.",
  },
  {
    name: "Roberto S.",
    company: "Restaurante, Toledo",
    text: "Con el Kit Digital nos ayudaron a digitalizar nuestro negocio sin complicaciones. Ahora tenemos presencia online sólida y captamos clientes nuevos cada semana.",
  },
  {
    name: "María T.",
    company: "E-commerce Moda, Bilbao",
    text: "El blog y los contenidos SEO que crean han posicionado nuestra tienda para keywords muy competidas. Recomiendo su servicio de marketing de contenidos al 100%.",
  },
];

const FAQS = [
  {
    q: "¿Dónde está ubicada la agencia y a qué zonas dais servicio?",
    a: "Estamos en El Viso de San Juan, Toledo, pero damos servicio a empresas de toda España. Trabajamos de forma remota con clientes en Madrid, Barcelona, Valencia, Sevilla y cualquier otra ciudad española.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados con el SEO?",
    a: "Los primeros resultados del SEO suelen verse entre 3 y 6 meses, aunque depende de la competencia del sector y el estado actual de la web. El SEO es una inversión a largo plazo con resultados duraderos.",
  },
  {
    q: "¿Trabajáis con exclusividad sectorial?",
    a: "Sí, uno de nuestros valores es la exclusividad sectorial por zona geográfica. No trabajamos con dos empresas del mismo sector en la misma área para evitar conflictos de interés.",
  },
  {
    q: "¿Cuál es el proceso para empezar a trabajar juntos?",
    a: "El proceso es simple: contacta con nosotros, realizamos una auditoría gratuita de tu situación digital, te presentamos una propuesta personalizada y, si encaja, comenzamos a trabajar.",
  },
  {
    q: "¿Ofrecéis informes de resultados?",
    a: "Sí, enviamos informes mensuales detallados con todas las métricas relevantes: posiciones SEO, tráfico, conversiones, rendimiento de campañas y evolución de redes sociales.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mkt Web 360 SLU",
  image: "https://www.mktweb360.com/logo.png",
  url: "https://www.mktweb360.com",
  telephone: "+34696714476",
  email: "info@mktweb360.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Viso de San Juan",
    addressLocality: "El Viso de San Juan",
    addressRegion: "Toledo",
    postalCode: "45215",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.0219,
    longitude: -3.9714,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/mktweb360",
    "https://twitter.com/mktweb360",
    "https://www.instagram.com/mktweb360",
    "https://www.linkedin.com/company/mktweb360",
  ],
  description:
    "Agencia de marketing digital para PYMEs y empresas. Especialistas en SEO, SEM, gestión de redes sociales y diseño web. Servicio nacional desde Toledo, España.",
  priceRange: "$$",
  areaServed: "España",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Agencia de Marketing Digital<br />
            <span className="text-accent-400">para PYMEs y Empresas</span>
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Aumenta tu visibilidad online, genera más clientes y haz crecer tu negocio con estrategias de marketing digital probadas. Servicio nacional desde Toledo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auditoria-digital/"
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              Solicitar diagnóstico gratuito
            </Link>
            <Link
              href="#servicios"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Nuestros Servicios de Marketing Digital</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una solución integral de marketing digital para que tu empresa crezca online con estrategias personalizadas y orientadas a resultados.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-primary-600 mb-2 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-accent-500 text-sm font-medium">Saber más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Por qué elegir Mkt Web 360?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "+10 años de experiencia", desc: "Una década ayudando a empresas españolas a crecer online con estrategias de marketing digital." },
              { icon: "🤝", title: "Equipo comprometido", desc: "No somos una gran agencia impersonal. Cada cliente tiene un responsable dedicado y atención cercana." },
              { icon: "🎯", title: "Exclusividad sectorial", desc: "No trabajamos con tu competencia en tu zona. Tu sector es exclusivamente tuyo en tu área geográfica." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <footer className="text-sm">
                  <span className="font-semibold text-primary-600">{t.name}</span>
                  <span className="text-gray-500 ml-2">— {t.company}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 transition-colors flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform text-lg">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Listo para hacer crecer tu negocio?</h2>
            <p className="text-primary-200">Solicita una auditoría gratuita de tu presencia digital. Sin compromiso.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
