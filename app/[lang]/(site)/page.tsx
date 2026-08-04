import type { Lang } from "@/lib/i18n";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { LangHeroSlider } from "@/components/LangHeroSlider";
import { LangServicesTab } from "@/components/LangServicesTab";
import { getLatestPosts } from "@/lib/blog";
import { getPostI18n, getCategoryI18n } from "@/lib/blog-i18n";
import { translatedSlugFor } from "@/lib/i18n/routes";

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;
  const isEn = lang === "en";

  // Blog posts — translated
  const rawPosts = getLatestPosts(9);
  const blogPosts = rawPosts.map((p) => {
    const t = getPostI18n(p.slug, lang, { title: p.title, excerpt: p.excerpt });
    const category = getCategoryI18n(p.category, lang);
    const translatedSlug = translatedSlugFor(p.slug, lang);
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
      whyTitle: "Why Mkt Web 360",
      reasons: [
        {
          icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
          title: "+10 years of experience",
          desc: "A decade helping businesses grow online with proven digital marketing strategies.",
        },
        {
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
          title: "Personal, dedicated service",
          desc: "We are not a large impersonal agency. Each client has a dedicated account manager and direct attention.",
        },
        {
          icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
          title: "Sector exclusivity",
          desc: "We do not work with your competitors in your area. Your sector is exclusively yours in your geographic zone.",
        },
        {
          icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
          title: "AI applied to your project",
          desc: "Senior team experience. The precision of artificial intelligence. Our own AI protocols in every service.",
        },
      ],
      metrics: [
        { value: "+1,000", label: "projects delivered" },
        { value: "+10 yrs", label: "of digital experience" },
        { value: "National", label: "service across Spain" },
        { value: "Exclusive", label: "one client per sector & area" },
      ],
      socialProofBadge: "What our clients say",
      socialProofTitle: "The sector changes.",
      socialProofAccent: "The method doesn't.",
      socialProofSubtitle:
        "We work with businesses across many sectors. What they have in common: they want more clients and measurable results.",
      testimonials: [
        {
          text: "We went from not appearing on Google to receiving 3–4 calls a week from new customers. In less than 4 months.",
          sector: "Services company",
          city: "Toledo",
          service: "SEO",
        },
        {
          text: "Our online store now generates orders every day. Before we only sold in our physical shop and relied on word of mouth.",
          sector: "Local business",
          city: "Castilla-La Mancha",
          service: "Online Store",
        },
        {
          text: "We'd had a website for years that converted nothing. Within two months we had the new site and started receiving enquiries.",
          sector: "Health clinic",
          city: "Madrid",
          service: "Web Design",
        },
        {
          text: "My competitors had been ahead of me on Google for years. Now I appear first. I couldn't believe it until people started calling saying they'd found me.",
          sector: "Renovation service",
          city: "Spain",
          service: "SEO",
        },
        {
          text: "We were managing social media without any strategy. Since they took over we have double the followers and, more importantly, clients coming through Instagram.",
          sector: "Hospitality business",
          city: "Seville",
          service: "Social Media",
        },
        {
          text: "I needed to sell online but didn't want to pay Shopify commissions. The store they built is first-rate and completely mine.",
          sector: "Artisan products company",
          city: "Valencia",
          service: "Online Store",
        },
      ],
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
      whyTitle: "Pourquoi Mkt Web 360",
      reasons: [
        {
          icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
          title: "+10 ans d'expérience",
          desc: "Une décennie à aider des entreprises à croître en ligne avec des stratégies de marketing digital éprouvées.",
        },
        {
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
          title: "Service personnel et dédié",
          desc: "Nous ne sommes pas une grande agence impersonnelle. Chaque client a un responsable dédié et une attention directe.",
        },
        {
          icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
          title: "Exclusivité sectorielle",
          desc: "Nous ne travaillons pas avec vos concurrents dans votre zone. Votre secteur est exclusivement le vôtre dans votre zone géographique.",
        },
        {
          icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
          title: "IA appliquée à votre projet",
          desc: "L'expérience d'une équipe senior. La précision de l'intelligence artificielle. Nos propres protocoles IA dans chaque service.",
        },
      ],
      metrics: [
        { value: "+1 000", label: "projets livrés" },
        { value: "+10 ans", label: "d'expérience digitale" },
        { value: "National", label: "service en Espagne" },
        { value: "Exclusif", label: "un client par secteur et zone" },
      ],
      socialProofBadge: "Ce que disent nos clients",
      socialProofTitle: "Le secteur change.",
      socialProofAccent: "La méthode, non.",
      socialProofSubtitle:
        "Nous travaillons avec des entreprises de secteurs très différents. Ce qu'ils ont en commun : ils veulent plus de clients et des résultats mesurables.",
      testimonials: [
        {
          text: "Nous sommes passés de l'invisibilité sur Google à recevoir 3 à 4 appels par semaine de nouveaux clients. En moins de 4 mois.",
          sector: "Entreprise de services",
          city: "Toledo",
          service: "SEO",
        },
        {
          text: "Notre boutique en ligne génère des commandes chaque jour. Avant, nous vendions uniquement en magasin physique.",
          sector: "Commerce local",
          city: "Castilla-La Mancha",
          service: "Boutique en ligne",
        },
        {
          text: "Nous avions un site web depuis des années qui ne convertissait rien. En deux mois, nous avions le nouveau site et avons commencé à recevoir des demandes.",
          sector: "Clinique de santé",
          city: "Madrid",
          service: "Création web",
        },
        {
          text: "Mes concurrents étaient devant moi sur Google depuis des années. Maintenant j'apparais en premier. Je ne le croyais pas jusqu'à ce que les gens commencent à appeler.",
          sector: "Service de rénovation",
          city: "Espagne",
          service: "SEO",
        },
        {
          text: "Nous gérions les réseaux sociaux sans stratégie. Depuis qu'ils s'en occupent, nous avons deux fois plus d'abonnés et, surtout, des clients qui viennent d'Instagram.",
          sector: "Entreprise de restauration",
          city: "Séville",
          service: "Réseaux sociaux",
        },
        {
          text: "J'avais besoin de vendre en ligne sans payer de commissions à Shopify. La boutique qu'ils ont créée est de premier ordre et m'appartient entièrement.",
          sector: "Produits artisanaux",
          city: "Valence",
          service: "Boutique en ligne",
        },
      ],
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
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden">
        <LangHeroSlider lang={lang} />
      </section>

      {/* Services tabs */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-3">
              {isEn ? "What do you want to achieve?" : "Qu'est-ce que vous voulez accomplir ?"}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {isEn
                ? "Choose your objective and discover the services that help you achieve it."
                : "Choisissez votre objectif et découvrez les services qui vous aident à l'atteindre."}
            </p>
          </div>
          <LangServicesTab lang={lang} />
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 px-4 bg-primary-600 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {c.metrics.map((m) => (
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{c.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.reasons.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-accent-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — anonymous testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {c.socialProofBadge}
            </span>
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {c.socialProofTitle}<br />
              <span className="text-accent-500">{c.socialProofAccent}</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{c.socialProofSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-xs font-bold text-primary-600">{t.sector}</p>
                    <p className="text-xs text-gray-400">{t.city}</p>
                  </div>
                  <span className="text-xs bg-primary-100 text-primary-600 font-semibold px-2 py-0.5 rounded-full">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google reviews carousel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{c.socialProofBadge}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.reviews.map((r) => (
              <blockquote key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">&ldquo;{r.text}&rdquo;</p>
                <footer className="text-sm">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <span className="text-xs text-gray-400">Google</span>
                  </div>
                  <span className="font-semibold text-primary-600">{r.name}</span>
                  <span className="text-gray-500 ml-2">— {r.company}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">Blog</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-700">{c.blogTitle}</h2>
            </div>
            <Link href={`/${lang}/blog/`} className="text-accent-500 font-semibold text-sm hover:underline hidden md:block">
              {c.blogAll}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-accent-400 hover:shadow-md transition-all group flex flex-col"
              >
                <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide mb-2">{post.category}</span>
                <h3 className="font-bold text-primary-700 group-hover:text-accent-500 transition-colors line-clamp-3 text-sm leading-snug flex-1 mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="text-xs font-semibold text-accent-500">{c.blogCta}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href={`/${lang}/blog/`} className="text-accent-500 font-semibold text-sm hover:underline">
              {c.blogAll}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{c.faqTitle}</h2>
          </div>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
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
            <h2 className="text-3xl font-bold mb-4">{c.ctaSection.title}</h2>
            <p className="text-primary-200">{c.ctaSection.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`home-${lang}`} />
          </div>
        </div>
      </section>
    </>
  );
}
