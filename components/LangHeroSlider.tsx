"use client";
// Hero de la portada en inglés y francés: mismos componentes y comportamiento que la versión
// en español (fondo tecnológico animado en la primera diapositiva, altura fija sin saltos).
import { langSlug } from "@/lib/i18n/routes";
import { HeroSlider, type HeroSlide } from "@/components/HomeInteractive";

export function LangHeroSlider({ lang }: { lang: string }) {
  const isEn = lang === "en";
  const slides: HeroSlide[] = [
    {
      badge: null,
      headline: isEn ? "Your Digital Marketing Agency" : "Votre agence de marketing digital",
      subheadline: isEn ? "No customers, no paradise" : "Sans clients, pas de paradis",
      subtitle: isEn
        ? "We put you where people search for you: more online visibility, more customers and a business that grows with proven digital marketing strategies. Nationwide service across Spain."
        : "Nous vous plaçons là où l'on vous cherche : plus de visibilité en ligne, plus de clients et une entreprise qui grandit grâce à des stratégies de marketing digital éprouvées. Service dans toute l'Espagne.",
      cta: { text: isEn ? "Free diagnosis" : "Diagnostic gratuit", href: `/${lang}/contact/` },
      cta2: { text: isEn ? "View services" : "Voir les services", href: "#services" },
      bg: "tech",
      visual: "tech",
      overlay: "bg-transparent",
    },
    {
      badge: isEn ? "Online store offer" : "Offre boutique en ligne",
      headline: isEn ? "Your online store" : "Votre boutique en ligne",
      subheadline: isEn ? "professional, from €490" : "professionnelle dès 490 €",
      subtitle: isEn
        ? "No commissions per sale. No monthly licences. 100% custom design. Technically optimised for SEO from day one."
        : "Sans commission sur les ventes. Sans licence mensuelle. Design 100 % personnalisé. Optimisée techniquement pour le SEO dès le premier jour.",
      cta: { text: isEn ? "I want my online store" : "Je veux ma boutique en ligne", href: `/${lang}/${langSlug(lang, "online-store-offer")}/` },
      cta2: { text: isEn ? "View the offer" : "Voir l'offre", href: `/${lang}/${langSlug(lang, "online-store")}/` },
      bg: "/hero-slide-3.jpg",
      overlay: "bg-primary-900/35",
    },
  ];
  return <HeroSlider slides={slides} dotLabel={isEn ? "Go to slide" : "Aller à la diapositive"} />;
}
