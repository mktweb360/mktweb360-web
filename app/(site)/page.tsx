"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

const SERVICE_GROUPS = [
  {
    group: "Visibilidad",
    services: [
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>,
        title: "SEO Posicionamiento",
        desc: "Lleva tu web a las primeras posiciones de Google con estrategias duraderas.",
        href: "/seo-posicionamiento-web-organico/",
        img: "/imagen-seo.jpg",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>,
        title: "SEM / Google Ads",
        desc: "Campañas de publicidad que generan resultados desde el primer día.",
        href: "/sem-publicidad-ppc/",
        img: "/imagen-sem.jpg",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>,
        title: "Google Business Profile",
        desc: "Visibilidad local en Google Maps cuando tus clientes te buscan cerca.",
        href: "/google-business-profile/",
      },
    ],
  },
  {
    group: "Presencia",
    services: [
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"/></svg>,
        title: "Diseño Web",
        desc: "Webs profesionales, rápidas y optimizadas para convertir visitas en clientes.",
        href: "/diseno-de-paginas-web/",
        img: "/imagen-diseno-web.jpg",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>,
        title: "Tiendas Online",
        desc: "Ecommerce profesional sin comisiones ni licencias. Tú gestionas, nosotros construimos.",
        href: "/diseno-de-paginas-web/diseno-tiendas-online/",
        img: "/imagen-tiendas-online.jpg",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/></svg>,
        title: "Creación de Blog",
        desc: "Blogs corporativos y profesionales que posicionan y generan tráfico constante.",
        href: "/creacion-de-blog/",
      },
    ],
  },
  {
    group: "Comunidad",
    services: [
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
        title: "Redes Sociales",
        desc: "Gestión profesional de tus redes para conectar con tu audiencia y generar confianza.",
        href: "/smm-social-media-marketing/",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/></svg>,
        title: "Marketing de Contenidos",
        desc: "Contenido que posiciona tu marca como referente y atrae clientes de forma orgánica.",
        href: "/marketing-de-contenidos/",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V20.25a.75.75 0 0 0 1.28.53l3.58-3.58A48.29 48.29 0 0 0 11.25 17c.527 0 1.049-.022 1.566-.064"/></svg>,
        title: "WhatsApp Marketing",
        desc: "Capta y fideliza clientes por el canal con mayor tasa de apertura.",
        href: "/whatsapp-marketing/",
      },
    ],
  },
  {
    group: "Crecimiento",
    services: [
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>,
        title: "Email Marketing",
        desc: "Campañas de email con ROI demostrado. Convierte suscriptores en clientes recurrentes.",
        href: "/email-marketing/",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.5l4.5-4.5 4 4L15 9l6 6"/></svg>,
        title: "Analítica Web",
        desc: "Datos que generan decisiones. GA4, GTM y dashboards orientados a negocio.",
        href: "/analitica-web/",
      },
      {
        icon: <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg>,
        title: "Reputación Online",
        desc: "Gestión de reseñas y monitorización de tu imagen digital en todas las plataformas.",
        href: "/reputacion-online/",
      },
    ],
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
  description: "Agencia de marketing digital para PYMEs y empresas. Especialistas en SEO, SEM, gestión de redes sociales y diseño web. Servicio nacional desde Toledo, España.",
  priceRange: "$$",
  areaServed: "España",
};

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function TestimonialsCarousel({ testimonials }: { testimonials: typeof TESTIMONIALS }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, total]);

  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((t, i) => (
          <blockquote
            key={`${current}-${i}`}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-500"
          >
            <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">&ldquo;{t.text}&rdquo;</p>
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
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current % total ? "bg-accent-500 w-4" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

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
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto italic">
            Aumenta tu visibilidad online, genera más clientes y haz crecer tu negocio con estrategias de marketing digital probadas. Servicio nacional.
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
              Soluciones integrales para que tu empresa crezca online. Cada servicio, orientado a resultados medibles.
            </p>
          </div>
          <div className="space-y-10">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold text-accent-500 uppercase tracking-widest">{group.group}</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
                    >
                      {(s as { img?: string }).img && (
                        <div className="w-full h-36 overflow-hidden">
                          <img src={(s as { img?: string }).img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      )}
                      <div className="p-5 flex gap-3 items-start">
                        <div className="shrink-0 mt-1">{s.icon}</div>
                        <div>
                          <h3 className="font-bold text-primary-600 mb-1 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 px-4 bg-primary-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "Resultados", label: "medibles y reportados" },
            { value: "100%", label: "proyectos entregados" },
            { value: "Nacional", label: "servicio en toda España" },
            { value: "Tu cliente", label: "aún no te conoce" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              {
                icon: (
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
                ),
                title: "IA aplicada a tu proyecto",
                desc: "La experiencia de un equipo senior. La precisión de la inteligencia artificial. Protocolos propios de IA en cada servicio.",
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

      {/* Testimonials carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Lo que dicen nuestros clientes</h2>
          </div>
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* Offer banner */}
      <section className="py-12 px-4 bg-primary-700">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Oferta especial</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">6 meses de SEO por el precio de 3</h2>
            <p className="text-primary-200 max-w-xl mx-auto">Contrata cualquier servicio SEO este mes y llévate 6 meses de posicionamiento pagando solo 3. Plazas limitadas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto/"
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
            >
              Quiero esta oferta
            </Link>
            <Link
              href="/seo-posicionamiento-web-organico/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors text-center"
            >
              Ver servicios SEO
            </Link>
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
