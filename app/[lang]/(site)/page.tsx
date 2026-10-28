import type { Lang } from "@/lib/i18n";
import Link from "next/link";
import { CompromisoExclusividad } from "@/components/CompromisoExclusividad";
import { HomeAuditoria } from "@/components/HomeAuditoria";
import { HomeContacto } from "@/components/HomeContacto";
import { HomeFaq } from "@/components/HomeFaq";
import { TestimonialsCarousel } from "@/components/HomeInteractive";
import { LangHeroSlider } from "@/components/LangHeroSlider";
import { LangServicesTab } from "@/components/LangServicesTab";
import { getLatestPosts } from "@/lib/blog";
import { getPostI18n, getCategoryI18n } from "@/lib/blog-i18n";
import type { Metadata } from "next";
import { alternatesFor, translatedSlugFor } from "@/lib/i18n/routes";

// Canonical y hreflang de /en/ y /fr/ (no tenían ninguno de los dos).
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const alternates = alternatesFor(`/${lang}/`);
  return alternates ? { alternates } : {};
}

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;
  const isEn = lang === "en";

  // Blog posts — translated
  // [lang]/(site)/page.tsx only serves "en" | "fr" — cast is safe
  const langI18n = lang as "en" | "fr";
  const rawPosts = getLatestPosts(9);
  const blogPosts = rawPosts.map((p) => {
    const t = getPostI18n(p.slug, langI18n, { title: p.title, excerpt: p.excerpt });
    const category = getCategoryI18n(p.category, langI18n);
    const translatedSlug = translatedSlugFor(p.slug, langI18n);
    const href = translatedSlug ? `/${lang}/${translatedSlug}/` : `/${p.slug}/`;
    return { slug: p.slug, title: t.title, excerpt: t.excerpt, category, href };
  });

  const content = {
    en: {
      headline: "Digital Marketing Agency",
      subheadline: "for SMEs and Businesses",
      subtitle:
        "We help Spanish and international businesses grow online with proven digital marketing strategies. SEO, Google Ads, Social Media and Web Design.",
      cta: "Get a free quote",
      cta2: "View our services",
      socialProofBadge: "What our clients say",
      reviewsNote: "Google reviews from our clients, translated from Spanish.",
      reviews: [
        {
          name: "Nathalie B.",
          company: "Client since 2012",
          text: "The time I have been trusting Marcos with the positioning of my website reflects the trust and results he has been able to generate. Total professionalism and dedication.",
        },
        {
          name: "Luisantonio Saezruiz",
          company: "Satisfied client",
          text: "Very happy with you. I wanted to thank you for your work and for taking care of everything related to the website. Those who know me know I don't usually do things like this.",
        },
        {
          name: "Yves Billiet",
          company: "Multi-site client",
          text: "Mkt Web 360 has been our provider for positioning and web for our various businesses for 4 years now. We are really happy with the work.",
        },
        {
          name: "Miguel Palomino",
          company: "Web + SEO client",
          text: "We commissioned a website and they got us to the top of Google within two months at a very competitive price. Highly recommended.",
        },
        {
          name: "CC LASER",
          company: "Business client",
          text: "Very professional, always available and quick to resolve whatever you need. I recommend them 100%.",
        },
        {
          name: "Chema Quiros",
          company: "Client",
          text: "Incredible service. Our company changed in two months. An 11 out of 10.",
        },
      ],
      blogTitle: "Latest articles",
      blogCta: "Read article →",
      blogAll: "View all articles →",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How long does it take to see results from SEO?",
          a: "The first SEO results are usually seen within 3 to 6 months, although it depends on the sector's competition and the current state of the website. SEO is a long-term investment with lasting results.",
        },
        {
          q: "Do you work with sector exclusivity?",
          a: "Yes, sector exclusivity by geographic area is one of our core values. We do not work with two companies in the same sector in the same area to avoid conflicts of interest.",
        },
        {
          q: "Do you work with businesses all over Spain?",
          a: "Yes. We work remotely with businesses in every province: video calls when needed, and phone and email always. Where your business is located is not a limit.",
        },
        {
          q: "What is the process to start working together?",
          a: "The process is simple: contact us, we carry out a free audit of your digital situation, we present a personalised proposal and, if it fits, we start working.",
        },
        {
          q: "Do you provide results reports?",
          a: "Yes, we send detailed monthly reports with all relevant metrics: SEO positions, traffic, conversions, campaign performance and social media evolution.",
        },
      ],
      ctaSection: {
        title: "Your best customer doesn't know you yet",
        subtitle: "Let's introduce you. Tell us about your project and we'll get back to you within 24 hours.",
      },
    },
    fr: {
      headline: "Agence de Marketing Digital",
      subheadline: "pour PME et Entreprises",
      subtitle:
        "Nous aidons les entreprises espagnoles et internationales à croître en ligne avec des stratégies de marketing digital éprouvées.",
      cta: "Obtenir un devis gratuit",
      cta2: "Voir nos services",
      socialProofBadge: "Ce que disent nos clients",
      reviewsNote: "Avis Google de nos clients, traduits de l'espagnol.",
      reviews: [
        {
          name: "Nathalie B.",
          company: "Cliente depuis 2012",
          text: "Le temps que je fais confiance à Marcos pour le positionnement de mon site web reflète la confiance et les résultats qu'il a su générer. Professionnalisme et dévouement totaux.",
        },
        {
          name: "Luisantonio Saezruiz",
          company: "Client satisfait",
          text: "Très contents de vous. Je voulais remercier votre travail et le fait que vous vous occupiez de tout ce qui concerne le site web.",
        },
        {
          name: "Yves Billiet",
          company: "Client multi-sites",
          text: "Mkt Web 360 est depuis 4 ans notre prestataire en positionnement et web pour nos différentes entreprises. Nous sommes vraiment contents du travail.",
        },
        {
          name: "Miguel Palomino",
          company: "Client web + SEO",
          text: "Nous avons commandé un site web et ils nous ont mis en tête de Google en deux mois à un prix très compétitif. Très recommandable.",
        },
        {
          name: "CC LASER",
          company: "Entreprise cliente",
          text: "Très professionnels, toujours disponibles et rapides à résoudre tout ce dont vous avez besoin. Je les recommande à 100%.",
        },
        {
          name: "Chema Quiros",
          company: "Client",
          text: "Service incroyable. Notre entreprise a changé en deux mois. Un 11 sur 10.",
        },
      ],
      blogTitle: "Derniers articles",
      blogCta: "Lire l'article →",
      blogAll: "Voir tous les articles →",
      faqTitle: "Questions Fréquentes",
      faqs: [
        {
          q: "Combien de temps faut-il pour voir des résultats avec le SEO ?",
          a: "Les premiers résultats du SEO se voient généralement entre 3 et 6 mois, selon la concurrence du secteur et l'état actuel du site web. Le SEO est un investissement à long terme avec des résultats durables.",
        },
        {
          q: "Travaillez-vous avec une exclusivité sectorielle ?",
          a: "Oui, l'exclusivité sectorielle par zone géographique est l'une de nos valeurs fondamentales. Nous ne travaillons pas avec deux entreprises du même secteur dans la même zone afin d'éviter les conflits d'intérêts.",
        },
        {
          q: "Travaillez-vous avec des entreprises de toute l'Espagne ?",
          a: "Oui. Nous travaillons à distance avec des entreprises de toutes les provinces : visioconférence si besoin, téléphone et email toujours. L'emplacement de votre entreprise n'est pas une limite.",
        },
        {
          q: "Quel est le processus pour commencer à travailler ensemble ?",
          a: "Le processus est simple : contactez-nous, nous réalisons un audit gratuit de votre situation digitale, nous vous présentons une proposition personnalisée et, si elle convient, nous commençons à travailler.",
        },
        {
          q: "Fournissez-vous des rapports de résultats ?",
          a: "Oui, nous envoyons des rapports mensuels détaillés avec toutes les métriques pertinentes : positions SEO, trafic, conversions, performance des campagnes et évolution des réseaux sociaux.",
        },
      ],
      ctaSection: {
        title: "Votre meilleur client ne vous connaît pas encore",
        subtitle: "Présentons-nous. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
      },
    },
  };

  const c = content[lang as keyof typeof content] ?? content.en;

  return (
    <>
      {/* Hero Slider */}
      <section className="relative mw-skin-hero text-white overflow-hidden">
        <LangHeroSlider lang={lang} />
      </section>

      {/* Services tabs */}
      <section id="services" className="relative isolate overflow-hidden py-20 px-4 bg-gray-50">
        <div aria-hidden="true" className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#7c3aed]/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 ring-1 ring-gray-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {isEn ? "Services" : "Services"}
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-primary-700">
              {isEn ? "What do you want to " : "Qu'est-ce que vous voulez "}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 bg-clip-text text-transparent">{isEn ? "achieve?" : "obtenir ?"}</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              {isEn
                ? "Choose your goal and we'll show you the services that get you there."
                : "Choisissez votre objectif et nous vous montrons les services qui vous y mènent."}
            </p>
          </div>
          <LangServicesTab lang={lang} />
        </div>
      </section>

      {/* Exclusividad por sector y zona */}
      <CompromisoExclusividad lang={langI18n} />

      {/* Auditoría gratuita SEO + GEO + Google Maps */}
      <HomeAuditoria lang={langI18n} />

      {/* Reseñas reales de Google (traducidas) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 ring-1 ring-gray-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {c.socialProofBadge}
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-primary-700">
              {isEn ? "The sector changes. " : "Le secteur change. "}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 bg-clip-text text-transparent">{isEn ? "The method doesn't." : "La méthode, non."}</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400">{c.reviewsNote}</p>
          </div>
          <TestimonialsCarousel testimonials={c.reviews} />
        </div>
      </section>

      {/* Blog section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block rounded-full bg-gradient-to-r from-[#7c3aed] to-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white mb-3">Blog</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700">{c.blogTitle}</h2>
            </div>
            <Link href={`/${lang}/blog/`} className="text-accent-600 font-semibold text-sm hover:underline hidden md:block">
              {c.blogAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(15,28,46,0.45)] hover:ring-transparent"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7c3aed] via-[#db2777] to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="text-xs font-bold text-accent-600 uppercase tracking-widest mb-2">{post.category}</span>
                <h3 className="font-bold text-primary-700 line-clamp-3 leading-snug flex-1 mb-3">{post.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-sm font-semibold text-accent-600">{c.blogCta}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href={`/${lang}/blog/`} className="text-accent-600 font-semibold text-sm hover:underline">
              {c.blogAll}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <HomeFaq lang={langI18n} items={c.faqs} />

      {/* Contacto */}
      <HomeContacto lang={langI18n} />
    </>
  );
}
