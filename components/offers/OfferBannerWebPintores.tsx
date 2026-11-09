/**
 * OfferBannerWebPintores — banner con foto de la oferta «Web profesional desde 249 €» para los
 * artículos y la landing de pintores (ES/EN/FR). El precio sale de lib/ofertas.ts.
 *
 * CAMPAÑA: oferta-web-corporativa (EVERGREEN). Misma oferta que OfferBannerWebSeo; este banner solo
 * cambia la imagen y el texto para el sector. Si se retira la oferta, retirar también este archivo,
 * sus imports (grep OfferBannerWebPintores) y public/banner-oferta-web-pintores.jpg.
 */
import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";
import { PRECIO_WEB_PROFESIONAL_DESDE } from "@/lib/ofertas";
import type { LandingLang } from "@/lib/landing-pintores";
import { ruta } from "@/lib/landing-pintores";

const T: Record<LandingLang, {
  aria: string; badge: string; title: string; from: string; vat: string; desc: string;
  cta: string; ctaHref: string; audit: string; alt: string;
}> = {
  es: {
    aria: "Oferta de web profesional para pintores, desde 249 €",
    badge: "Oferta para pintores y empresas de pintura",
    title: "Tu web de pintor, lista para recibir presupuestos",
    from: "Desde",
    vat: "+ IVA",
    desc: "Diseño a medida en WordPress: tú gestionas los textos y las fotos de tus obras. Hosting, dominio y correo aparte. Sin permanencia.",
    cta: "Ver la oferta",
    ctaHref: "/oferta-web-seo-organico/",
    audit: "O pide primero un diagnóstico gratuito de tu web",
    alt: "Pintor profesional con rodillo sobre una escalera pintando la fachada de una vivienda",
  },
  en: {
    aria: "Professional website offer for painters, from €249",
    badge: "Offer for painters and painting companies",
    title: "Your painting website, ready to receive quote requests",
    from: "From",
    vat: "+ VAT",
    desc: "Custom design on WordPress: you manage the text and the photos of your jobs. Hosting, domain and email not included. No minimum term.",
    cta: "See the website design service",
    ctaHref: "/en/web-design/",
    audit: "Or start with a free diagnosis of your website",
    alt: "Professional painter with a roller on a ladder painting the facade of a house",
  },
  fr: {
    aria: "Offre de site web professionnel pour peintres, à partir de 249 €",
    badge: "Offre pour peintres et entreprises de peinture",
    title: "Votre site de peintre, prêt à recevoir des demandes de devis",
    from: "À partir de",
    vat: "HT",
    desc: "Conception sur mesure sous WordPress : vous gérez les textes et les photos de vos chantiers. Hébergement, nom de domaine et messagerie non inclus. Sans engagement.",
    cta: "Voir le service de création de site",
    ctaHref: "/fr/creation-site-web/",
    audit: "Ou commencez par un diagnostic gratuit de votre site",
    alt: "Peintre professionnel avec un rouleau sur une échelle peignant la façade d'une maison",
  },
};

export function OfferBannerWebPintores({ lang }: { lang: LandingLang }) {
  const t = T[lang];
  const price = lang === "es" ? `${PRECIO_WEB_PROFESIONAL_DESDE} €` : lang === "fr" ? `${PRECIO_WEB_PROFESIONAL_DESDE} €` : `€${PRECIO_WEB_PROFESIONAL_DESDE}`;
  return (
    <section className="relative isolate overflow-hidden rounded-3xl my-10 min-h-[22rem] bg-primary-900" aria-label={t.aria}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="/banner-oferta-web-pintores.jpg" alt={t.alt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover object-right mw-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/10 md:to-transparent" />
      </div>
      <div className="relative p-6 sm:p-10 max-w-xl text-white">
        <span className="inline-block bg-accent-500/20 border border-accent-400/50 rounded-full px-4 py-1.5 text-xs font-semibold text-accent-200 mb-4">{t.badge}</span>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{t.title}</h2>
        <p className="flex items-baseline gap-2 mb-3">
          <span className="text-white/70 text-sm">{t.from}</span>
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-white/70 text-sm">{t.vat}</span>
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-5">{t.desc}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <TrackedLink href={t.ctaHref} ctaId="art-pintores-banner-249-oferta" location="articulo-banner-249" type="link" text={t.cta} className="mw-pulse-soft inline-block text-center bg-accent-500 hover:bg-accent-600 text-white font-bold px-7 py-3 rounded-full transition-colors">
            {t.cta} →
          </TrackedLink>
          <TrackedLink href={ruta("/auditoria-digital/", lang)} ctaId="art-pintores-banner-249-auditoria" location="articulo-banner-249" type="audit" text={t.audit} className="text-white/85 hover:text-white text-sm underline underline-offset-2">
            {t.audit}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
