"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function LangHeroSlider({ lang }: { lang: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const isEn = lang === "en";

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
      headline: isEn ? "Digital Marketing Agency" : "Agence de Marketing Digital",
      subheadline: isEn ? "for SMEs and Businesses" : "pour PME et Entreprises",
      subtitle: isEn
        ? "We help Spanish and international businesses grow online with proven digital marketing strategies. SEO, Google Ads, Social Media and Web Design."
        : "Nous aidons les entreprises espagnoles et internationales à croître en ligne avec des stratégies de marketing digital éprouvées.",
      cta: { text: isEn ? "Get a free quote" : "Demander un devis", href: `/${lang}/contact/` },
      cta2: { text: isEn ? "View our services" : "Voir nos services", href: "#services" },
      bg: "/hero-slide-1.jpg",
    },
    {
      badge: isEn ? "Special June offer" : "Offre spéciale juin",
      headline: isEn ? "6 months of SEO" : "6 mois de SEO",
      subheadline: isEn ? "for the price of 3" : "pour le prix de 3",
      subtitle: isEn
        ? "Sign up for any SEO service this month and get 6 months of positioning paying only 3. Limited places."
        : "Souscrivez à tout service SEO ce mois-ci et obtenez 6 mois de positionnement en payant seulement 3. Places limitées.",
      cta: { text: isEn ? "I want this offer" : "Je veux cette offre", href: `/${lang}/seo-web-positioning/` },
      cta2: { text: isEn ? "View SEO service" : "Voir le service SEO", href: `/${lang}/seo-web-positioning/` },
      bg: "/hero-slide-2.jpg",
    },
    {
      badge: isEn ? "Only 5 places this month" : "Seulement 5 places ce mois",
      headline: isEn ? "Your professional online store" : "Votre boutique en ligne",
      subheadline: isEn ? "from €490" : "professionnelle à partir de 490€",
      subtitle: isEn
        ? "No commissions per sale. No monthly fees. 100% custom design. SEO included for 12 months."
        : "Sans commissions par vente. Sans frais mensuels. Design 100% personnalisé. SEO inclus 12 mois.",
      cta: { text: isEn ? "Reserve my place" : "Réserver ma place", href: `/${lang}/online-store-offer/` },
      cta2: { text: isEn ? "View the offer" : "Voir l'offre", href: `/${lang}/online-store/` },
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
        <div className="h-8 mb-4 flex items-center justify-center">
          {slide.badge && (
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {slide.badge}
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight min-h-[4rem] md:min-h-[6rem]">
          {slide.headline}<br />
          <span className="text-accent-400">{slide.subheadline}</span>
        </h1>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed italic min-h-[4rem]">
          {slide.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link href={slide.cta.href} className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors">
            {slide.cta.text}
          </Link>
          <Link href={slide.cta2.href} className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
            {slide.cta2.text}
          </Link>
        </div>
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
