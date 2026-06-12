import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital para PYMEs — Mkt Web 360",
  description:
    "Agencia de marketing digital especializada en SEO, SEM/Google Ads, Redes Sociales y Diseño Web. Servicio nacional para PYMEs y empresas desde Toledo.",
  alternates: { canonical: "https://www.mktweb360.com/" },
  openGraph: {
    title: "Mkt Web 360 — Agencia de Marketing Digital para PYMEs",
    description: "SEO, SEM, Social Media y Diseño Web. Servicio nacional desde Toledo, España.",
    url: "https://www.mktweb360.com/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mkt Web 360 Agencia Marketing Digital" }],
  },
};

const SERVICES = [
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
    ),
    title: "SEO Posicionamiento",
    desc: "Mejora tu visibilidad en Google con estrategias SEO sólidas y duraderas.",
    href: "/seo-posicionamiento-web-organico/",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
    ),
    title: "SEM / Google Ads",
    desc: "Campañas de publicidad de pago que generan resultados desde el primer día.",
    href: "/sem-publicidad-ppc/",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    ),
    title: "Redes Sociales",
    desc: "Gestión profesional de tus redes sociales para conectar con tu audiencia.",
    href: "/smm-social-media-marketing/",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
    title: "Diseño Web",
    desc: "Páginas web modernas, rápidas y optimizadas para convertir visitas en clientes.",
    href: "/diseno-de-paginas-web/",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    ),
    title: "Marketing de Contenidos",
    desc: "Contenido de valor que posiciona tu marca como referente en tu sector.",
    href: "/marketing-de-contenidos/",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    ),
    title: "Kit Digital",
    desc: "Ayudas del Gobierno para digitalizar tu negocio. Te acompañamos en el proceso.",
    href: "/kit-digital/",
  },
];

const TESTIMONIALS = [
  {
    name: "Nathalie B.",
    company: "Cliente desde 2012",
    text: "El tiempo que llevo confiando el posicionamiento de mi sitio web a Marcos refleja la confianza y los resultados que ha sabido generar. Profesionalidad y dedicación totales.",
  },
  {
    name: "Luisantonio Saezruiz",
    company: "Cliente satisfecho",
    text: "Muy contentos con vosotros. Quería agradecer vuestro trabajo y que os ocupéis de todo lo relacionado con la página web. El que me conoce sabe que no soy dado a hacer estas cosas.",
  },
  {
    name: "Yves Billiet",
    company: "Cliente multisede",
    text: "Mkt Web 360 es desde hace ya 4 años nuestro proveedor en posicionamiento y web de nuestros diferentes negocios. Estamos realmente contentos del trabajo.",
  },
  {
    name: "Miguel Palomino",
    company: "Cliente web + SEO",
    text: "Encargamos una web y nos la pusieron los primeros en Google en dos meses y con un precio muy ajustado. Muy recomendables.",
  },
  {
    name: "CC LASER",
    company: "Empresa cliente",
    text: "Muy profesionales, siempre están disponibles y resuelven rápido todo lo que necesites. Los recomiendo 100x100.",
  },
  {
    name: "Chema Quiros",
    company: "Cliente",
    text: "Increíble el trato. Nuestra empresa cambió en dos meses. Un 11 sobre 10.",
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
  telephone: "+34622748897",
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
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-2 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-block text-accent-500 text-sm font-medium">Saber más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 px-4 bg-primary-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "+10 años", label: "de experiencia" },
            { value: "+100", label: "clientes atendidos" },
            { value: "100%", label: "proyectos entregados" },
            { value: "Nacional", label: "servicio en toda España" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-bold text-accent-400">{m.value}</div>
              <div className="text-sm text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
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
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                ),
                title: "+10 años de experiencia",
                desc: "Una década ayudando a empresas españolas a crecer online con estrategias de marketing digital.",
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                ),
                title: "Trato cercano y dedicado",
                desc: "No somos una gran agencia impersonal. Cada cliente tiene un responsable dedicado y atención directa.",
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                ),
                title: "Exclusividad sectorial",
                desc: "No trabajamos con tu competencia en tu zona. Tu sector es exclusivamente tuyo en tu área geográfica.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="mb-4">{item.icon}</div>
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
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <span className="text-xs text-gray-400">Google</span>
                  </div>
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
      <RelatedArticles title="Últimas ideas y consejos" />
    </>
  );
}
