import Link from "next/link";

interface BlogBannerProps {
  variant?: "seo" | "ecommerce" | "geo" | "default";
}

const BANNERS = {
  seo: {
    badge: "Posicionamiento SEO",
    title: "Aparece en la primera página de Google",
    desc: "Auditoría técnica, estrategia de keywords, optimización on-page y link building para captar clientes de forma orgánica y sostenible.",
    cta: "Ver servicio SEO",
    href: "/seo-posicionamiento-web-organico/",
  },
  ecommerce: {
    badge: "Oferta especial",
    title: "Tienda online profesional desde 490€",
    desc: "Sin comisiones por venta, sin licencias mensuales. SEO incluido 12 meses. Solo 5 plazas disponibles.",
    cta: "Reservar mi plaza",
    href: "/tienda-online/",
  },
  geo: {
    badge: "Nuevo servicio",
    title: "Auditoría GEO gratuita",
    desc: "Analizamos cómo aparece tu marca en ChatGPT, Perplexity y Gemini y te decimos qué oportunidades estás perdiendo.",
    cta: "Solicitar auditoría gratuita",
    href: "/geo-posicionamiento-ia/",
  },
  default: {
    badge: "Sin compromiso",
    title: "Diagnóstico digital gratuito",
    desc: "Analizamos tu presencia online y te decimos exactamente qué está frenando tu crecimiento. Sin coste, sin compromiso.",
    cta: "Solicitar diagnóstico gratuito",
    href: "/contacto/",
  },
};

export function BlogBanner({ variant = "default" }: BlogBannerProps) {
  const b = BANNERS[variant];
  return (
    <div className="my-10 bg-primary-700 rounded-2xl p-8 text-white">
      <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
        {b.badge}
      </span>
      <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
      <p className="text-primary-200 mb-6 leading-relaxed">{b.desc}</p>
      <Link
        href={b.href}
        className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
      >
        {b.cta}
      </Link>
    </div>
  );
}
