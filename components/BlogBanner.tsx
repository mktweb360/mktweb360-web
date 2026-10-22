import Link from "next/link";

interface BlogBannerProps {
  variant?: "seo" | "ecommerce" | "geo" | "seogeogbp" | "default";
  lang?: string;
}

type BannerData = {
  badge: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  price?: { old?: string; new: string; note?: string };
  /** Enlace secundario (texto + ruta), por ejemplo a la auditoría gratuita. */
  secondary?: { text: string; href: string };
};

type BannerVariants = {
  seo: BannerData;
  ecommerce: BannerData;
  geo: BannerData;
  /** Oferta SEO + GEO + GBP (permanente desde 2-oct-2026). Ver CAMPAÑA-oferta-seo-geo-gbp-2026-10-02.md. */
  seogeogbp: BannerData;
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
    desc: "Sin comisiones por venta ni licencias mensuales. Diseño personalizado y SEO técnico desde el primer día. Hosting y dominio aparte.",
    cta: "Quiero mi tienda online",
    href: "/tienda-online/",
  },
  geo: {
    badge: "Nuevo servicio",
    title: "Auditoría GEO gratuita",
    desc: "Analizamos cómo aparece tu marca en ChatGPT, Perplexity y Gemini y te decimos qué oportunidades estás perdiendo.",
    cta: "Solicitar auditoría gratuita",
    href: "/geo-posicionamiento-ia/",
  },
  seogeogbp: {
    badge: "SEO + GEO + Google Maps",
    title: "Que te encuentren en Google, en la IA y en el mapa",
    desc: "Posicionamiento SEO, GEO para que cualquier asistente de IA pueda encontrarte y citarte, y tu ficha de Google Business Profile optimizada. Un solo servicio mensual.",
    cta: "Ver qué incluye",
    href: "/oferta-seo-geo-gbp/",
    price: { new: "Desde 149 €/mes + IVA", note: "Con 6 meses de permanencia · o 349 €/mes sin permanencia" },
    secondary: { text: "¿Prefieres empezar con un diagnóstico gratuito?", href: "/auditoria-digital/" },
  },
  default: {
    badge: "Gratis y sin compromiso",
    title: "Diagnóstico gratuito de tu web en 24 h",
    desc: "SEO, visibilidad en IA y tu ficha de Google en el mismo informe, con las acciones que más impacto tendrían. Sin coste ni compromiso.",
    cta: "Pedir mi diagnóstico gratuito",
    href: "/auditoria-digital/",
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
    desc: "No sales commissions, no monthly licences. Custom design and technical SEO from day one. Hosting and domain not included.",
    cta: "I want my online store",
    href: "/en/online-store-offer/",
  },
  geo: {
    badge: "New service",
    title: "Free GEO audit",
    desc: "We analyse how your brand appears in ChatGPT, Perplexity and Gemini and tell you what opportunities you are missing.",
    cta: "Request free audit",
    href: "/en/geo-generative-engine-optimization/",
  },
  // La oferta SEO + GEO + Maps solo tiene landing en ES: en EN/FR se muestra el precio y el CTA lleva al diagnóstico gratuito.
  seogeogbp: {
    badge: "SEO + GEO + Google Maps",
    title: "Be found on Google, in AI and on the map",
    desc: "SEO positioning, GEO so that any AI assistant can find and cite you, and your Google Business Profile optimised. One monthly service.",
    cta: "Request free diagnosis",
    href: "/en/digital-audit/",
    price: { new: "From €149/month + VAT", note: "With a 6-month commitment · or €349/month with no commitment" },
  },
  default: {
    badge: "Free, no commitment",
    title: "Free diagnosis of your website in 24 h",
    desc: "SEO, visibility in AI and your Google Business Profile in the same report, with the highest-impact actions. No cost and no commitment.",
    cta: "Request free diagnosis",
    href: "/en/digital-audit/",
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
    desc: "Sans commissions sur les ventes, sans licences mensuelles. Design personnalisé et SEO technique dès le premier jour. Hébergement et domaine en sus.",
    cta: "Je veux ma boutique en ligne",
    href: "/fr/offre-boutique-en-ligne/",
  },
  geo: {
    badge: "Nouveau service",
    title: "Audit GEO gratuit",
    desc: "Nous analysons comment votre marque apparaît dans ChatGPT, Perplexity et Gemini et vous indiquons les opportunités manquées.",
    cta: "Demander un audit gratuit",
    href: "/fr/geo-optimisation-moteurs-generatifs/",
  },
  seogeogbp: {
    badge: "SEO + GEO + Google Maps",
    title: "Soyez trouvé sur Google, dans l'IA et sur la carte",
    desc: "Référencement SEO, GEO pour que tout assistant d'IA puisse vous trouver et vous citer, et votre fiche Google Business Profile optimisée. Un seul service mensuel.",
    cta: "Demander un diagnostic gratuit",
    href: "/fr/audit-digital/",
    price: { new: "À partir de 149 €/mois HT", note: "Avec 6 mois d'engagement · ou 349 €/mois sans engagement" },
  },
  default: {
    badge: "Gratuit et sans engagement",
    title: "Diagnostic gratuit de votre site en 24 h",
    desc: "SEO, visibilité dans l'IA et votre fiche Google Business dans le même rapport, avec les actions au plus fort impact. Sans coût ni engagement.",
    cta: "Demander un diagnostic gratuit",
    href: "/fr/audit-digital/",
  },
};

export function BlogBanner({ variant = "default", lang }: BlogBannerProps) {
  const banners = lang === "en" ? BANNERS_EN : lang === "fr" ? BANNERS_FR : BANNERS_ES;
  const b = banners[variant] ?? banners.seo;
  return (
    <div className="mw-skin-cta my-10 rounded-3xl p-8 text-white">
      <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
        {b.badge}
      </span>
      <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
      <p className="text-primary-200 mb-6 leading-relaxed">{b.desc}</p>
      {b.price && (
        <p className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {b.price.old && <span className="text-primary-200 line-through text-lg whitespace-nowrap">{b.price.old}</span>}
          <span className="text-accent-400 text-3xl font-bold whitespace-nowrap">{b.price.new}</span>
          {b.price.note && <span className="basis-full text-sm text-primary-200">{b.price.note}</span>}
        </p>
      )}
      <Link
        href={b.href}
        className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
      >
        {b.cta}
      </Link>
      {b.secondary && (
        <p className="mt-4 text-sm">
          <Link href={b.secondary.href} className="text-primary-200 underline underline-offset-2 hover:text-white">
            {b.secondary.text}
          </Link>
        </p>
      )}
    </div>
  );
}
