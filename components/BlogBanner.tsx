import Link from "next/link";

interface BlogBannerProps {
  variant?: "seo" | "ecommerce" | "geo" | "default";
  lang?: string;
}

type BannerData = {
  badge: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

type BannerVariants = {
  seo: BannerData;
  ecommerce: BannerData;
  geo: BannerData;
  default: BannerData;
};

const BANNERS_ES: BannerVariants = {
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

const BANNERS_EN: BannerVariants = {
  seo: {
    badge: "SEO Positioning",
    title: "Appear on the first page of Google",
    desc: "Technical audit, keyword strategy, on-page optimisation and link building to attract customers organically and sustainably.",
    cta: "View SEO service",
    href: "/en/seo-web-positioning/",
  },
  ecommerce: {
    badge: "Special offer",
    title: "Professional online store from €490",
    desc: "No sales commissions, no monthly licences. SEO included for 12 months. Only 5 spots available.",
    cta: "Reserve my spot",
    href: "/en/online-store-offer/",
  },
  geo: {
    badge: "New service",
    title: "Free GEO audit",
    desc: "We analyse how your brand appears in ChatGPT, Perplexity and Gemini and tell you what opportunities you are missing.",
    cta: "Request free audit",
    href: "/en/geo-generative-engine-optimization/",
  },
  default: {
    badge: "No commitment",
    title: "Free digital diagnosis",
    desc: "We analyse your online presence and tell you exactly what is holding back your growth. No cost, no commitment.",
    cta: "Request free diagnosis",
    href: "/en/contact/",
  },
};

const BANNERS_FR: BannerVariants = {
  seo: {
    badge: "Référencement SEO",
    title: "Apparaissez en première page de Google",
    desc: "Audit technique, stratégie de mots-clés, optimisation on-page et link building pour attirer des clients de façon organique et durable.",
    cta: "Voir le service SEO",
    href: "/fr/positionnement-seo/",
  },
  ecommerce: {
    badge: "Offre spéciale",
    title: "Boutique en ligne professionnelle dès 490€",
    desc: "Sans commissions sur les ventes, sans licences mensuelles. SEO inclus 12 mois. Seulement 5 places disponibles.",
    cta: "Réserver ma place",
    href: "/fr/offre-boutique-en-ligne/",
  },
  geo: {
    badge: "Nouveau service",
    title: "Audit GEO gratuit",
    desc: "Nous analysons comment votre marque apparaît dans ChatGPT, Perplexity et Gemini et vous indiquons les opportunités manquées.",
    cta: "Demander un audit gratuit",
    href: "/fr/geo-optimisation-moteurs-generatifs/",
  },
  default: {
    badge: "Sans engagement",
    title: "Diagnostic digital gratuit",
    desc: "Nous analysons votre présence en ligne et vous disons exactement ce qui freine votre croissance. Sans coût, sans engagement.",
    cta: "Demander un diagnostic gratuit",
    href: "/fr/contact/",
  },
};

export function BlogBanner({ variant = "default", lang }: BlogBannerProps) {
  const banners = lang === "en" ? BANNERS_EN : lang === "fr" ? BANNERS_FR : BANNERS_ES;
  const b = banners[variant];
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
