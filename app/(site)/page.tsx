"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getLatestPosts } from "@/lib/blog";
import { OfertasSlider } from "@/components/OfertasSlider";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

type ServiceItem = { title: string; desc: string; href: string; icon: string; badge?: string };
type ServiceTab = { id: string; tipo: string; objetivo: string; emoji: string; servicios: ServiceItem[] };

const SERVICE_TABS: ServiceTab[] = [
  {
    id: "presencia",
    tipo: "PRESENCIA",
    objetivo: "Construye tu base digital",
    emoji: "🏗️",
    servicios: [
      { title: "Diseño Web Profesional", desc: "Tu web, tu activo más importante. Rápida, optimizada y diseñada para convertir visitas en clientes.", href: "/diseno-de-paginas-web/", icon: "🌐" },
      { title: "Tienda Online", desc: "Vende en toda España sin comisiones por venta ni licencias mensuales. Diseño 100% personalizado.", href: "/diseno-de-paginas-web/diseno-tiendas-online/", icon: "🛒" },
      { title: "Google Business Profile", desc: "Aparece en Google Maps cuando tus clientes buscan lo que ofreces en tu zona.", href: "/google-business-profile/", icon: "📍" },
      { title: "Reputación Online", desc: "Gestiona tus reseñas y construye una imagen digital que genera confianza antes del primer contacto.", href: "/reputacion-online/", icon: "⭐" },
    ],
  },
  {
    id: "visibilidad",
    tipo: "VISIBILIDAD",
    objetivo: "Aparece cuando te buscan",
    emoji: "🔍",
    servicios: [
      { title: "SEO Posicionamiento Web", desc: "Primera página de Google. Tráfico orgánico sin pagar por cada clic. Resultados que se mantienen.", href: "/seo-posicionamiento-web-organico/", icon: "📈" },
      { title: "GEO — Posicionamiento en IA", desc: "Aparece en ChatGPT, Perplexity y Gemini. El SEO de la era de la inteligencia artificial.", href: "/geo-posicionamiento-ia/", icon: "🤖" },
      { title: "Google Ads", desc: "Aparece en el top de Google desde el primer día. Solo pagas cuando alguien hace clic.", href: "/sem-publicidad-ppc/", icon: "⚡" },
      { title: "SEO Local", desc: "Domina los resultados de búsqueda en tu ciudad y zona de influencia.", href: "/seo-posicionamiento-web-organico/", icon: "📌" },
    ],
  },
  {
    id: "captacion",
    tipo: "CAPTACIÓN",
    objetivo: "Genera leads y ventas",
    emoji: "🎯",
    servicios: [
      { title: "Google Ads", desc: "Genera clientes potenciales desde el primer día. Campañas optimizadas para tu sector y objetivo.", href: "/sem-publicidad-ppc/", icon: "🎯" },
      { title: "Email Marketing", desc: "El canal con mayor ROI del marketing digital. Secuencias automatizadas que convierten.", href: "/email-marketing/", icon: "✉️" },
      { title: "WhatsApp Marketing", desc: "98% de tasa de apertura. Comunica con tus clientes donde ya están.", href: "/whatsapp-marketing/", icon: "💬" },
      { title: "Oferta SEO 6x3", desc: "6 meses de posicionamiento por el precio de 3. Solo 5 plazas este mes.", href: "/oferta-seo/", icon: "🔥", badge: "Oferta" },
    ],
  },
  {
    id: "comunidad",
    tipo: "COMUNIDAD",
    objetivo: "Construye audiencia y marca",
    emoji: "👥",
    servicios: [
      { title: "Redes Sociales", desc: "Gestión profesional de Instagram, LinkedIn, Facebook y TikTok. Comunidades reales, no seguidores vacíos.", href: "/smm-social-media-marketing/", icon: "📱" },
      { title: "Marketing de Contenidos", desc: "Contenido que posiciona tu marca como referencia en tu sector y atrae clientes de forma orgánica.", href: "/marketing-de-contenidos/", icon: "✍️" },
      { title: "Creación de Blog", desc: "Tu blog como activo digital permanente. Tráfico orgánico constante sin pagar por cada visita.", href: "/creacion-de-blog/", icon: "📝" },
    ],
  },
  {
    id: "monetizacion",
    tipo: "MONETIZACIÓN",
    objetivo: "Genera ingresos adicionales",
    emoji: "💰",
    servicios: [
      { title: "Blog para Monetización", desc: "Crea un activo digital que genera ingresos pasivos con AdSense, Amazon Associates y afiliación.", href: "/blog-monetizacion/", icon: "💸" },
      { title: "Ecommerce con Participación", desc: "Modelo híbrido: montamos tu infraestructura y participamos en el éxito cuando superas objetivos.", href: "/ecommerce-participacion-resultados/", icon: "🤝" },
    ],
  },
  {
    id: "crecimiento",
    tipo: "CRECIMIENTO",
    objetivo: "Mejora constante basada en datos",
    emoji: "📊",
    servicios: [
      { title: "Analítica Web", desc: "GA4, GTM y dashboards de negocio. Cada decisión respaldada por datos reales, no suposiciones.", href: "/analitica-web/", icon: "📊" },
      { title: "IA Aplicada al Marketing", desc: "Protocolos propios de IA integrados en cada servicio. Más rápido, más preciso, mejores decisiones.", href: "/ia-aplicada-al-marketing/", icon: "🧠" },
      { title: "Auditoría Digital", desc: "Diagnóstico completo de tu presencia digital. Sabe exactamente dónde estás antes de invertir más.", href: "/auditoria-digital/", icon: "🔬" },
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
  telephone: "+34622748987",
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

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides: {
    badge: string | null;
    headline: string;
    subheadline: string;
    subtitle: string;
    cta: { text: string; href: string };
    cta2: { text: string; href: string };
    bg: string;
  }[] = [
    {
      badge: null,
      headline: "Agencia de Marketing Digital",
      subheadline: "para PYMEs y Empresas",
      subtitle: "Aumenta tu visibilidad online, genera más clientes y haz crecer tu negocio con estrategias de marketing digital probadas. Servicio nacional.",
      cta: { text: "Diagnóstico gratuito", href: "/contacto/" },
      cta2: { text: "Ver servicios", href: "#servicios" },
      bg: "/hero-slide-1.jpg",
    },
    {
      badge: "Oferta especial junio",
      headline: "6 meses de SEO",
      subheadline: "por el precio de 3",
      subtitle: "Contrata cualquier servicio SEO este mes y llévate 6 meses de posicionamiento pagando solo 3. Plazas limitadas.",
      cta: { text: "Quiero esta oferta", href: "/seo-posicionamiento-web-organico/" },
      cta2: { text: "Ver servicio SEO", href: "/seo-posicionamiento-web-organico/" },
      bg: "/hero-slide-2.jpg",
    },
    {
      badge: "Solo 5 plazas este mes",
      headline: "Tu tienda online",
      subheadline: "profesional desde 490€",
      subtitle: "Sin comisiones por venta. Sin licencias mensuales. Diseño 100% personalizado. Web técnicamente optimizada para SEO desde el primer día.",
      cta: { text: "Reservar mi plaza", href: "/tienda-online/" },
      cta2: { text: "Ver la oferta", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
      bg: "/hero-slide-3.jpg",
    },
  ];

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const slide = slides[current];

  return (
    <div
      className="relative w-full min-h-[560px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={s.bg}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.bg})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-900/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center text-white">
        {/* Badge */}
        <div className="h-8 mb-4 flex items-center justify-center">
          {slide.badge && (
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {slide.badge}
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight min-h-[4rem] md:min-h-[6rem]">
          {slide.headline}<br />
          <span className="text-accent-400">{slide.subheadline}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed italic min-h-[4rem]">
          {slide.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href={slide.cta.href}
            className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            {slide.cta.text}
          </Link>
          <Link
            href={slide.cta2.href}
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
          >
            {slide.cta2.text}
          </Link>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent-400 w-6" : "bg-white/40 w-2.5 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesTab() {
  const [activeTab, setActiveTab] = useState(0);
  const active = SERVICE_TABS[activeTab];

  const tabHref: Record<string, string> = {
    presencia: "diseno-de-paginas-web",
    visibilidad: "seo-posicionamiento-web-organico",
    captacion: "oferta-seo",
    comunidad: "smm-social-media-marketing",
    monetizacion: "blog-monetizacion",
    crecimiento: "analitica-web",
  };

  return (
    <div>
      {/* Desktop tabs */}
      <div className="hidden md:block">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {SERVICE_TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 min-w-[140px] px-4 py-4 text-center transition-all border-b-2 ${
                activeTab === i
                  ? "border-accent-500 bg-white"
                  : "border-transparent hover:border-gray-300 bg-gray-50 hover:bg-white"
              }`}
            >
              <div className="text-xl mb-1">{tab.emoji}</div>
              <div className={`text-xs font-bold uppercase tracking-widest ${activeTab === i ? "text-accent-500" : "text-gray-400"}`}>
                {tab.tipo}
              </div>
              <div className={`text-xs mt-0.5 leading-tight ${activeTab === i ? "text-gray-600" : "text-gray-400"}`}>
                {tab.objetivo}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {active.servicios.map((s) => (
              <Link
                key={s.href + s.title}
                href={s.href}
                className="group relative bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-accent-300 hover:shadow-md transition-all"
              >
                {s.badge && (
                  <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-primary-600 text-sm mb-2 group-hover:text-accent-500 transition-colors leading-tight">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href={`/${tabHref[active.id] ?? active.id}/`}
              className="inline-flex items-center gap-2 text-accent-500 font-semibold text-sm hover:underline"
            >
              Ver todos los servicios de {active.tipo.toLowerCase()} →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile — simple grid of all categories */}
      <div className="md:hidden space-y-6">
        {SERVICE_TABS.map((tab) => (
          <div key={tab.id}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-lg">{tab.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-500">{tab.tipo}</p>
                <p className="text-xs text-gray-400">{tab.objetivo}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {tab.servicios.map((s) => (
                <Link
                  key={s.href + s.title}
                  href={s.href}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-accent-300 transition-colors"
                >
                  <span className="text-xl shrink-0">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-primary-600 text-sm">{s.title}</p>
                    <p className="text-gray-400 text-xs leading-tight mt-0.5">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
      {/* Hero Slider */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <HeroSlider />
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-3">¿Qué quieres conseguir?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Elige tu objetivo y descubre los servicios que te ayudan a conseguirlo.</p>
          </div>
          <ServicesTab />
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

      {/* Social proof — sectores y testimonios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Posicionamiento */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Lo que dicen nuestros clientes</span>
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              El sector cambia.<br />
              <span className="text-accent-500">El método no.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Trabajamos con negocios de sectores muy distintos. Lo que tienen en común: quieren más clientes y resultados medibles.
            </p>
          </div>

          {/* Testimonios anónimos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                texto: "Pasamos de no aparecer en Google a recibir 3-4 llamadas semanales de clientes nuevos. En menos de 4 meses.",
                sector: "Empresa de servicios",
                ciudad: "Toledo",
                servicio: "SEO",
              },
              {
                texto: "Nuestra tienda online genera pedidos todos los días. Antes solo vendíamos en el local y dependíamos del boca a boca.",
                sector: "Comercio local",
                ciudad: "Castilla-La Mancha",
                servicio: "Tienda online",
              },
              {
                texto: "Llevábamos años con una web que no convertía nada. En dos meses teníamos la nueva web y empezamos a recibir consultas.",
                sector: "Clínica de salud",
                ciudad: "Madrid",
                servicio: "Diseño web",
              },
              {
                texto: "Mi competencia llevaba años por delante en Google. Ahora aparezco yo primero. No me lo creía hasta que empezaron a llamarme diciendo que me habían buscado.",
                sector: "Servicio de reformas",
                ciudad: "España",
                servicio: "SEO",
              },
              {
                texto: "Las redes sociales las llevábamos nosotros sin criterio. Desde que las gestionan ellos tenemos el doble de seguidores y, sobre todo, clientes que vienen de Instagram.",
                sector: "Negocio de hostelería",
                ciudad: "Sevilla",
                servicio: "Redes sociales",
              },
              {
                texto: "Necesitaba vender online pero no quería pagar comisiones a Shopify. La tienda que me montaron no tiene nada que envidiar y es completamente mía.",
                sector: "Empresa de productos artesanales",
                ciudad: "Valencia",
                servicio: "Tienda online",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{t.texto}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xs font-bold text-primary-600">{t.sector}</p>
                    <p className="text-xs text-gray-400">{t.ciudad}</p>
                  </div>
                  <span className="text-xs bg-primary-100 text-primary-600 font-semibold px-2 py-0.5 rounded-full">{t.servicio}</span>
                </div>
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

      {/* Slider ofertas */}
      <OfertasSlider />

      {/* Últimas publicaciones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Blog</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-700">Últimas publicaciones</h2>
            </div>
            <Link href="/blog/" className="text-accent-500 font-semibold text-sm hover:underline hidden md:block">
              Ver todos los artículos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getLatestPosts(3).map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-accent-400 hover:shadow-md transition-all group flex flex-col"
              >
                <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide mb-2">
                  {post.category}
                </span>
                <h3 className="font-bold text-primary-700 group-hover:text-accent-500 transition-colors line-clamp-3 text-sm leading-snug flex-1 mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-xs font-semibold text-accent-500">Leer artículo →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog/" className="text-accent-500 font-semibold text-sm hover:underline">
              Ver todos los artículos →
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
