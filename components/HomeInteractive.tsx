"use client";
// Partes interactivas de la home (estado, carruseles, pestañas). El resto de la home
// se renderiza en servidor (HomeClient.tsx) para no hidratar contenido estático.
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroTechBackdrop } from "@/components/HeroTechBackdrop";

type ServiceItem = { title: string; desc: string; href: string; icon: string; badge?: string };
export type ServiceTab = { id: string; tipo: string; objetivo: string; emoji: string; servicios: ServiceItem[] };

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
      { title: "Auditoría SEO gratuita", desc: "Qué frena tu web en Google, en la IA y en el mapa, y qué harías primero. Gratis, en tu correo en 24 horas laborables.", href: "/auditoria-digital/", icon: "🔬" },
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
            {/* Todos los textos apilados (solo el actual visible): la tarjeta mide siempre lo que el
                testimonio más largo y el bloque no salta al rotar. */}
            <div className="grid mb-4">
              {testimonials.map((x) => (
                <p
                  key={x.name}
                  className="[grid-area:1/1] text-gray-700 italic leading-relaxed text-sm"
                  style={{ visibility: x === t ? "visible" : "hidden" }}
                  aria-hidden={x !== t}
                >
                  &ldquo;{x.text}&rdquo;
                </p>
              ))}
            </div>
            <footer className="text-sm">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-xs text-gray-400">Google</span>
              </div>
              <div className="grid">
                {testimonials.map((x) => (
                  <span key={x.name} className="[grid-area:1/1]" style={{ visibility: x === t ? "visible" : "hidden" }} aria-hidden={x !== t}>
                    <span className="font-semibold text-primary-600">{x.name}</span>
                    <span className="text-gray-500 ml-2">— {x.company}</span>
                  </span>
                ))}
              </div>
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

export type HeroSlide = {
  badge: string | null;
  headline: string;
  subheadline: string;
  subtitle: string;
  cta: { text: string; href: string };
  cta2: { text: string; href: string };
  bg: string;
  /** "tech": fondo animado en CSS/SVG en lugar de foto. */
  visual?: "tech";
  overlay?: string; // clase Tailwind de la capa entre imagen y texto
  bgPosition?: string;
};

export function HeroSlider({ slides: slidesProp, dotLabel = "Ir a la diapositiva" }: { slides?: HeroSlide[]; dotLabel?: string } = {}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const defaultSlides: HeroSlide[] = [
    {
      badge: null,
      headline: "Tu Agencia Online de Marketing Digital",
      subheadline: "Sin clientes, no hay paraíso",
      subtitle: "Te ponemos donde te buscan: más visibilidad online, más clientes y un negocio que crece con estrategias de marketing digital probadas. Servicio nacional.",
      cta: { text: "Diagnóstico gratuito", href: "/contacto/" },
      cta2: { text: "Ver servicios", href: "#servicios" },
      bg: "tech",
      visual: "tech",
      overlay: "bg-transparent",
    },
    {
      badge: "Oferta tienda online",
      headline: "Tu tienda online",
      subheadline: "profesional desde 490€",
      subtitle: "Sin comisiones por venta. Sin licencias mensuales. Diseño 100% personalizado. Web técnicamente optimizada para SEO desde el primer día.",
      cta: { text: "Quiero mi tienda online", href: "/tienda-online/" },
      cta2: { text: "Ver la oferta", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
      bg: "/hero-slide-3.jpg",
      overlay: "bg-primary-900/35",
    },
  ];
  const slides = slidesProp ?? defaultSlides;

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
      className="relative w-full min-h-[620px] md:min-h-[664px] flex items-center justify-center overflow-hidden"
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
          {s.visual === "tech" ? <HeroTechBackdrop /> : <Image
            src={s.bg}
            alt=""
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: s.bgPosition ?? "center" }}
          />}
        </div>
      ))}
      {/* Dark overlay */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${slide.overlay ?? "bg-primary-900/65"}`} />

      {/* Content: todas las diapositivas apiladas en la misma celda de la rejilla, así el hero
          mide siempre lo que la más alta y la página no salta al cambiar. */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20 text-center text-white">
        <div className="grid">
          {slides.map((sl, i) => {
            const on = i === current;
            const H = i === 0 ? "h1" : "p";
            return (
              <div
                key={sl.headline}
                className={`[grid-area:1/1] flex flex-col items-center justify-center transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!on}
                inert={!on}
              >
                {/* Badge */}
                <div className="h-8 mb-4 flex items-center justify-center">
                  {sl.badge && (
                    <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {sl.badge}
                    </span>
                  )}
                </div>

                {/* Headline (el h1 es siempre el de la primera diapositiva) */}
                <H className="text-4xl md:text-5xl xl:text-[3.25rem] font-bold mb-4 leading-tight [text-shadow:0_2px_10px_rgba(15,28,46,0.55),0_1px_2px_rgba(15,28,46,0.5)]">
                  <span className="xl:whitespace-nowrap">{sl.headline}</span><br />
                  <span className="text-[#ff7a00] xl:whitespace-nowrap [text-shadow:0_2px_10px_rgba(15,28,46,0.6),0_1px_2px_rgba(15,28,46,0.7)]">{sl.subheadline}</span>
                </H>

                {/* Subtitle */}
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed italic [text-shadow:0_1px_6px_rgba(15,28,46,0.7),0_1px_2px_rgba(15,28,46,0.6)]">
                  {sl.subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={sl.cta.href}
                    className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
                  >
                    {sl.cta.text}
                  </Link>
                  <Link
                    href={sl.cta2.href}
                    className="border-2 border-white bg-white text-primary-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-50 transition-colors"
                  >
                    {sl.cta2.text}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-10" aria-hidden="true" />

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group p-2 -m-1 flex items-center justify-center"
              aria-label={`${dotLabel} ${i + 1}`}
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

// Color de cada objetivo: recorre el degradado de la marca (violeta → rosa → naranja).
const TAB_COLOR: Record<string, { from: string; to: string }> = {
  presencia:    { from: "#5b21b6", to: "#7c3aed" },
  visibilidad:  { from: "#7c3aed", to: "#a21caf" },
  captacion:    { from: "#a21caf", to: "#db2777" },
  comunidad:    { from: "#db2777", to: "#e11d48" },
  monetizacion: { from: "#e11d48", to: "#ea580c" },
  crecimiento:  { from: "#ea580c", to: "#f97316" },
};
// Mismos colores para los identificadores de las versiones en inglés y francés.
Object.assign(TAB_COLOR, {
  presence: TAB_COLOR.presencia, visibility: TAB_COLOR.visibilidad, visibilite: TAB_COLOR.visibilidad,
  acquisition: TAB_COLOR.captacion, community: TAB_COLOR.comunidad, communaute: TAB_COLOR.comunidad,
  monetization: TAB_COLOR.monetizacion, monetisation: TAB_COLOR.monetizacion,
  growth: TAB_COLOR.crecimiento, croissance: TAB_COLOR.crecimiento,
});
const grad = (id: string) => {
  const c = TAB_COLOR[id] ?? { from: "#7c3aed", to: "#f97316" };
  return `linear-gradient(135deg, ${c.from}, ${c.to})`;
};

export function ServicesTab({
  tabs = SERVICE_TABS,
  allLabel = (tipo: string) => `Ver todos los servicios de ${tipo.toLowerCase()}`,
  hrefOf,
  objetivosLabel = "Objetivos",
}: {
  tabs?: ServiceTab[];
  allLabel?: (tipo: string) => string;
  hrefOf?: (tab: ServiceTab) => string;
  objetivosLabel?: string;
} = {}) {
  const SERVICE_TABS_ = tabs;
  const [activeTab, setActiveTab] = useState(0);
  const [openTab, setOpenTab] = useState<string | null>(null);
  const active = SERVICE_TABS_[activeTab];

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
      {/* Desktop: objetivos en columna (izquierda) + servicios (derecha) */}
      <div className="hidden md:grid md:grid-cols-[250px_1fr] lg:grid-cols-[290px_1fr] gap-6">
        <div role="tablist" aria-orientation="vertical" aria-label={objetivosLabel} className="flex flex-col gap-2">
          {SERVICE_TABS_.map((tab, i) => {
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
                  const n = (i + (e.key === "ArrowDown" ? 1 : -1) + SERVICE_TABS_.length) % SERVICE_TABS_.length;
                  setActiveTab(n);
                  document.getElementById(`tab-${SERVICE_TABS_[n].id}`)?.focus();
                }}
                style={on ? { backgroundImage: grad(tab.id) } : undefined}
                className={`group flex items-center gap-4 text-left rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                  on
                    ? "text-white shadow-[0_14px_30px_-12px_rgba(124,58,237,0.55)] translate-x-1"
                    : "bg-white text-primary-700 ring-1 ring-gray-200 hover:ring-accent-300 hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl transition-colors ${on ? "bg-white/20" : "bg-gray-50"}`}
                  aria-hidden="true"
                >
                  {tab.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-xs font-bold uppercase tracking-widest ${on ? "text-white/85" : "text-gray-400"}`}>
                    {String(i + 1).padStart(2, "0")} · {tab.tipo}
                  </span>
                  <span className={`block text-[0.95rem] font-semibold leading-snug mt-0.5 ${on ? "text-white" : "text-primary-700"}`}>
                    {tab.objetivo}
                  </span>
                </span>
                <span className={`text-lg transition-transform ${on ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:opacity-60"}`} aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>

        <div
          id="panel-servicios"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="relative overflow-hidden rounded-3xl bg-white p-6 lg:p-8 ring-1 ring-gray-200 shadow-[0_20px_50px_-30px_rgba(15,28,46,0.35)] flex flex-col"
        >
          {/* Franja y halo con el color del objetivo */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 transition-all duration-500" style={{ backgroundImage: grad(active.id) }} />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.12] blur-3xl transition-all duration-500" style={{ backgroundImage: grad(active.id) }} />

          <div key={active.id} className="mw-fade-up relative flex flex-1 flex-col">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent" style={{ backgroundImage: grad(active.id) }}>
                  {active.tipo}
                </p>
                <p className="mt-1 text-2xl font-black tracking-tight text-primary-700">{active.objetivo}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {active.servicios.map((s) => (
                <Link
                  key={s.href + s.title}
                  href={s.href}
                  className="group relative flex flex-col rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(15,28,46,0.45)] hover:ring-transparent"
                >
                  {!s.badge && (
                    <span className="absolute top-5 right-5 text-lg text-accent-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">→</span>
                  )}
                  {s.badge && (
                    <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {s.badge}
                    </span>
                  )}
                  <span
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ backgroundImage: grad(active.id) }}
                    aria-hidden="true"
                  >
                    <span className="drop-shadow">{s.icon}</span>
                  </span>
                  <h3 className="font-bold text-primary-700 text-base mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{s.desc}</p>
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-6 text-right">
              <Link
                href={hrefOf ? hrefOf(active) : `/${tabHref[active.id] ?? active.id}/`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.03]"
                style={{ backgroundImage: grad(active.id) }}
              >
                {allLabel(active.tipo)} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — acordeón */}
      <div className="md:hidden space-y-3">
        {SERVICE_TABS_.map((tab, i) => {
          const isOpen = openTab === tab.id;
          return (
            <div key={tab.id} className={`overflow-hidden rounded-2xl bg-white ring-1 transition-shadow ${isOpen ? "ring-transparent shadow-lg" : "ring-gray-200"}`}>
              <button
                onClick={() => setOpenTab(isOpen ? null : tab.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left"
                style={isOpen ? { backgroundImage: grad(tab.id) } : undefined}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl ${isOpen ? "bg-white/20" : "bg-gray-50"}`} aria-hidden="true">{tab.emoji}</span>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest ${isOpen ? "text-white/85" : "text-gray-400"}`}>{String(i + 1).padStart(2, "0")} · {tab.tipo}</p>
                    <p className={`text-sm font-semibold ${isOpen ? "text-white" : "text-primary-700"}`}>{tab.objetivo}</p>
                  </div>
                </div>
                <span className={`text-2xl font-light transition-transform ${isOpen ? "rotate-45 text-white" : "text-gray-400"}`} aria-hidden="true">+</span>
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[1200px]" : "max-h-0"}`}>
                <div className="p-3 grid grid-cols-1 gap-2">
                  {tab.servicios.map((s) => (
                    <Link
                      key={s.href + s.title}
                      href={s.href}
                      className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-3 transition-colors active:bg-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg" style={{ backgroundImage: grad(tab.id) }} aria-hidden="true">{s.icon}</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-primary-700 text-sm">{s.title}</p>
                        <p className="text-gray-500 text-xs leading-snug mt-0.5">{s.desc}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href={hrefOf ? hrefOf(tab) : `/${tabHref[tab.id] ?? tab.id}/`}
                    className="mt-1 rounded-xl px-4 py-3 text-center text-sm font-bold text-white"
                    style={{ backgroundImage: grad(tab.id) }}
                  >
                    {allLabel(tab.tipo)} →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

