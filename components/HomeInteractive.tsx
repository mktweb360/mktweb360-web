"use client";
// Partes interactivas de la home (estado, carruseles, pestañas). El resto de la home
// se renderiza en servidor (HomeClient.tsx) para no hidratar contenido estático.
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type ServiceItem = { title: string; desc: string; href: string; icon: string; badge?: string };
type ServiceTab = { id: string; tipo: string; objetivo: string; emoji: string; servicios: ServiceItem[] };

// Cada objetivo muestra 6 servicios (rejilla 3×2). Solo páginas de servicio existentes;
// un servicio puede aparecer en varios objetivos si sirve a ambos.
const SERVICE_TABS: ServiceTab[] = [
  {
    id: "presencia",
    tipo: "PRESENCIA",
    objetivo: "Construye tu base digital",
    emoji: "🏗️",
    servicios: [
      { title: "Diseño Web Profesional", desc: "Tu web, tu activo más importante. Rápida, optimizada y diseñada para convertir visitas en clientes.", href: "/diseno-de-paginas-web/", icon: "🌐" },
      { title: "Webs Corporativas", desc: "Una web profesional que genera confianza, capta contactos y está preparada para posicionar en Google.", href: "/diseno-de-paginas-web/paginas-corporativas/", icon: "🏢" },
      { title: "Webs a Medida", desc: "Portales, catálogos, reservas y plataformas web con funcionalidades a medida y SEO técnico desde el inicio.", href: "/diseno-de-paginas-web/diseno-paginas-web-empresa/", icon: "🧩" },
      { title: "Diseño de Tiendas Online", desc: "Vende en toda España sin comisiones por venta ni licencias mensuales. Diseño 100% personalizado.", href: "/diseno-de-paginas-web/diseno-tiendas-online/", icon: "🛒" },
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
      { title: "SEO Local", desc: "Capta clientes de tu zona: Google Maps, reseñas y páginas locales, tengas o no local físico.", href: "/seo-local/", icon: "📌" },
      { title: "Google Ads", desc: "Aparece en lo más alto de Google desde el primer día. Solo pagas cuando alguien hace clic.", href: "/sem-publicidad-ppc/", icon: "⚡" },
      { title: "Google Business Profile", desc: "Aparece en Google Maps cuando tus clientes buscan lo que ofreces en tu zona.", href: "/google-business-profile/", icon: "📍" },
      { title: "Marketing de Contenidos", desc: "Contenido que posiciona tu marca como referencia en tu sector y atrae clientes de forma orgánica.", href: "/marketing-de-contenidos/", icon: "✍️" },
    ],
  },
  {
    id: "captacion",
    tipo: "CAPTACIÓN",
    objetivo: "Genera leads y ventas",
    emoji: "🎯",
    servicios: [
      { title: "Google Ads", desc: "Genera clientes potenciales desde el primer día. Campañas optimizadas para tu sector y objetivo.", href: "/sem-publicidad-ppc/", icon: "🎯" },
      { title: "SEO Local", desc: "Capta clientes de tu zona: Google Maps, reseñas y páginas locales, tengas o no local físico.", href: "/seo-local/", icon: "📌" },
      { title: "Email Marketing", desc: "El canal con mayor ROI del marketing digital. Secuencias automatizadas que convierten.", href: "/email-marketing/", icon: "✉️" },
      { title: "WhatsApp Marketing", desc: "98% de tasa de apertura. Comunica con tus clientes donde ya están.", href: "/whatsapp-marketing/", icon: "💬" },
      { title: "Tienda Online desde 490 €", desc: "Tu tienda profesional sin comisiones por venta ni licencias mensuales, con SEO técnico desde el primer día.", href: "/tienda-online/", icon: "🛍️" },
      { title: "Marketing para Shopware", desc: "SEO, Google Ads, GEO y optimización de la conversión para tiendas Shopware que necesitan vender más.", href: "/marketing-shopware/", icon: "🏬" },
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
      { title: "Comunicación Audiovisual", desc: "Vídeo corporativo, reels, spots, animaciones y fotografía profesional para comunicar y generar confianza.", href: "/comunicacion-audiovisual/", icon: "🎬" },
      { title: "Reputación Online", desc: "Gestiona tus reseñas y construye una imagen digital que genera confianza antes del primer contacto.", href: "/reputacion-online/", icon: "⭐" },
      { title: "Email Marketing", desc: "El canal con mayor ROI del marketing digital. Secuencias automatizadas que convierten.", href: "/email-marketing/", icon: "✉️" },
    ],
  },
  {
    id: "monetizacion",
    tipo: "MONETIZACIÓN",
    objetivo: "Genera ingresos adicionales",
    emoji: "💰",
    servicios: [
      { title: "Blog para Monetización", desc: "Crea un activo digital que genera ingresos pasivos con AdSense, Amazon Associates y afiliación.", href: "/blog-para-monetizacion/", icon: "💸" },
      { title: "Ecommerce con Participación", desc: "Modelo híbrido: montamos tu infraestructura y participamos en el éxito cuando superas objetivos.", href: "/ecommerce-participacion-resultados/", icon: "🤝" },
      { title: "Dropshipping con Participación", desc: "Montamos y gestionamos tu tienda de dropshipping: setup fijo, gestión mensual y participación en beneficios.", href: "/ecommerce-dropshipping-con-participacion/", icon: "📦" },
      { title: "Tienda Online desde 490 €", desc: "Tu tienda profesional sin comisiones por venta ni licencias mensuales, con SEO técnico desde el primer día.", href: "/tienda-online/", icon: "🛍️" },
      { title: "Marketing para Shopware", desc: "SEO, Google Ads, GEO y optimización de la conversión para tiendas Shopware que necesitan vender más.", href: "/marketing-shopware/", icon: "🏬" },
      { title: "Email Marketing", desc: "El canal con mayor ROI del marketing digital. Secuencias automatizadas que convierten.", href: "/email-marketing/", icon: "✉️" },
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
      { title: "SEO Posicionamiento Web", desc: "Primera página de Google. Tráfico orgánico sin pagar por cada clic. Resultados que se mantienen.", href: "/seo-posicionamiento-web-organico/", icon: "📈" },
      { title: "GEO — Posicionamiento en IA", desc: "Aparece en ChatGPT, Perplexity y Gemini. El SEO de la era de la inteligencia artificial.", href: "/geo-posicionamiento-ia/", icon: "🤖" },
      { title: "Marketing para Shopware", desc: "SEO, Google Ads, GEO y optimización de la conversión para tiendas Shopware que necesitan vender más.", href: "/marketing-shopware/", icon: "🏬" },
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

export function TestimonialsCarousel({ testimonials = TESTIMONIALS }: { testimonials?: typeof TESTIMONIALS }) {
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
            aria-label={`Ver testimonio ${i + 1}`}
            className="p-2 -m-1 flex items-center justify-center"
          >
            <span className={`block h-2 rounded-full transition-all ${i === current % total ? "bg-accent-500 w-4" : "bg-gray-300 w-2"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function HeroSlider() {
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
    overlay?: string; // clase Tailwind de la capa entre imagen y texto
    bgPosition?: string;
  }[] = [
    {
      badge: null,
      headline: "Tu Agencia Online de Marketing Digital",
      subheadline: "Sin clientes, no hay paraíso",
      subtitle: "Te ponemos donde te buscan: más visibilidad online, más clientes y un negocio que crece con estrategias de marketing digital probadas. Servicio nacional.",
      cta: { text: "Diagnóstico gratuito", href: "/contacto/" },
      cta2: { text: "Ver servicios", href: "#servicios" },
      bg: "/hero-nave-oficina.jpg",
      // Velo oscuro solo detrás del texto (centro) y la imagen luminosa en los bordes.
      overlay: "bg-primary-900/30",
      bgPosition: "50% 45%",
    },
    {
      badge: "Solo 5 incorporaciones al mes",
      headline: "Tu tienda online",
      subheadline: "profesional desde 490€",
      subtitle: "Sin comisiones por venta. Sin licencias mensuales. Diseño 100% personalizado. Web técnicamente optimizada para SEO desde el primer día.",
      cta: { text: "Reservar mi plaza", href: "/tienda-online/" },
      cta2: { text: "Ver la oferta", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
      bg: "/hero-slide-3.jpg",
      overlay: "bg-primary-900/35",
    },
  ];

  // El carrusel no rota hasta la primera interacción del usuario: cada cambio de
  // diapositiva pinta un titular nuevo y retrasaba el LCP (22 s en móvil).
  const [interacted, setInteracted] = useState(false);
  useEffect(() => {
    const start = () => setInteracted(true);
    const evs = ["scroll", "pointerdown", "keydown", "touchstart"] as const;
    evs.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return () => evs.forEach((e) => window.removeEventListener(e, start));
  }, []);

  useEffect(() => {
    if (paused || !interacted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, interacted, slides.length]);

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
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden="true"
        >
          {/* next/image: WebP/AVIF responsivo; la primera diapositiva se precarga (LCP). */}
          <Image
            src={s.bg}
            alt=""
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: s.bgPosition ?? "center" }}
          />
        </div>
      ))}
      {/* Dark overlay */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${slide.overlay ?? "bg-primary-900/65"}`} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center text-white">
        {/* Badge */}
        <div className="h-8 mb-4 flex items-center justify-center">
          {slide.badge && (
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {slide.badge}
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight min-h-[4rem] md:min-h-[6rem] [text-shadow:0_2px_10px_rgba(15,28,46,0.55),0_1px_2px_rgba(15,28,46,0.5)]">
          <span className="lg:whitespace-nowrap">{slide.headline}</span><br />
          <span className="text-[#ff7a00] lg:whitespace-nowrap [text-shadow:0_2px_10px_rgba(15,28,46,0.6),0_1px_2px_rgba(15,28,46,0.7)]">{slide.subheadline}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed italic min-h-[4rem] [text-shadow:0_1px_6px_rgba(15,28,46,0.7),0_1px_2px_rgba(15,28,46,0.6)]">
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
            className="border-2 border-white bg-white text-primary-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-50 transition-colors"
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
              className="group p-2 -m-1 flex items-center justify-center"
              aria-label={`Ir a la diapositiva ${i + 1}`}
            >
              <span className={`block h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent-400 w-6" : "bg-white/40 w-2.5 group-hover:bg-white/70"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [openTab, setOpenTab] = useState<string | null>(null);
  const active = SERVICE_TABS[activeTab];

  const tabHref: Record<string, string> = {
    presencia: "diseno-de-paginas-web",
    visibilidad: "seo-posicionamiento-web-organico",
    captacion: "sem-publicidad-ppc",
    comunidad: "smm-social-media-marketing",
    monetizacion: "blog-para-monetizacion",
    crecimiento: "analitica-web",
  };

  return (
    <div>
      {/* Desktop: objetivos en columna (izquierda) + servicios en rejilla 3×2 (derecha) */}
      <div className="hidden md:grid md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div role="tablist" aria-orientation="vertical" aria-label="Objetivos" className="flex flex-col bg-gray-50 border-r border-gray-200 py-2">
          {SERVICE_TABS.map((tab, i) => {
            const on = activeTab === i;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="panel-servicios"
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
                  e.preventDefault();
                  const n = (i + (e.key === "ArrowDown" ? 1 : -1) + SERVICE_TABS.length) % SERVICE_TABS.length;
                  setActiveTab(n);
                  document.getElementById(`tab-${SERVICE_TABS[n].id}`)?.focus();
                }}
                className={`group flex-1 flex items-center gap-3 text-left px-5 py-4 border-l-4 transition-colors ${
                  on ? "border-accent-500 bg-white" : "border-transparent hover:bg-white"
                }`}
              >
                <span className="text-2xl shrink-0" aria-hidden="true">{tab.emoji}</span>
                <span className="min-w-0">
                  <span className={`block text-xs font-bold uppercase tracking-widest ${on ? "text-accent-700" : "text-primary-600 group-hover:text-accent-700"}`}>
                    {tab.tipo}
                  </span>
                  <span className={`block text-sm leading-snug mt-0.5 ${on ? "text-gray-700" : "text-gray-500"}`}>
                    {tab.objetivo}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div id="panel-servicios" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="p-6 lg:p-8 flex flex-col">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {active.servicios.map((s) => (
              <Link
                key={s.href + s.title}
                href={s.href}
                className="group relative bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-accent-300 hover:bg-white hover:shadow-md transition-all"
              >
                {s.badge && (
                  <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-2xl mb-3" aria-hidden="true">{s.icon}</div>
                <h3 className="font-bold text-primary-600 text-base mb-2 group-hover:text-accent-700 transition-colors leading-tight">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-right">
            <Link
              href={`/${tabHref[active.id] ?? active.id}/`}
              className="inline-flex items-center gap-2 text-accent-700 font-semibold text-sm hover:underline"
            >
              Ver todos los servicios de {active.tipo.toLowerCase()} →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile — accordion */}
      <div className="md:hidden border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
        {SERVICE_TABS.map((tab) => {
          const isOpen = openTab === tab.id;
          return (
            <div key={tab.id}>
              <button
                onClick={() => setOpenTab(isOpen ? null : tab.id)}
                className="w-full flex items-center justify-between px-4 py-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{tab.emoji}</span>
                  <div className="text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent-500">{tab.tipo}</p>
                    <p className="text-xs text-gray-400">{tab.objetivo}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-xl font-light">{isOpen ? "−" : "+"}</span>
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
                <div className="px-4 pb-4 grid grid-cols-1 gap-3 bg-white">
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
                  <div className="text-center mt-2">
                    <Link
                      href={`/${tabHref[tab.id] ?? tab.id}/`}
                      className="inline-flex items-center gap-1 text-accent-500 font-semibold text-sm hover:underline"
                    >
                      Ver todos los servicios de {tab.tipo.toLowerCase()} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

