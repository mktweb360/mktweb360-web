import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Web Design for Businesses | Mkt Web 360"
      : "Création de Site Web Professionnel pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional web design and development for businesses. Fast, optimised websites built to convert visitors into customers. React + Next.js. Nationwide service."
      : "Création et développement de sites web professionnels pour les entreprises. Sites rapides et optimisés, conçus pour convertir les visiteurs en clients.",
    alternates: alternatesFor(`/${lang}/web-design/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design/`,
    },
  };
}

export default async function WebDesignPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const t = {
    breadcrumbHome: isEn ? "Home" : "Accueil",
    breadcrumbPage: isEn ? "Web Design" : "Création Web",
    h1a: isEn ? "Professional websites" : "Sites web professionnels",
    h1b: isEn ? "built to convert" : "conçus pour convertir",
    intro: isEn
      ? "A beautiful website that doesn't sell is useless. We build websites focused on conversion, speed and SEO — so your website works for your business 24 hours a day."
      : "Un beau site web qui ne vend pas ne sert à rien. Nous créons des sites web axés sur la conversion, la vitesse et le SEO — pour que votre site travaille pour votre entreprise 24 heures sur 24.",
    ctaQuote: isEn ? "Get a free quote" : "Demander un devis",
    ctaTypes: isEn ? "View types of website" : "Voir les types de site",
    metrics: isEn
      ? [
          { value: "100%", label: "Projects delivered" },
          { value: "Responsive", label: "Mobile, tablet & desktop" },
          { value: "SEO", label: "Included from day one" },
          { value: "Support", label: "Post-delivery included" },
        ]
      : [
          { value: "100%", label: "Projets livrés" },
          { value: "Responsive", label: "Mobile, tablette & desktop" },
          { value: "SEO", label: "Inclus dès le premier jour" },
          { value: "Support", label: "Post-livraison inclus" },
        ],
    typesTitle: isEn ? "What type of website do you need?" : "Quel type de site web vous faut-il ?",
    typesSubtitle: isEn
      ? "Every project is different. Choose the one that best fits your objectives."
      : "Chaque projet est différent. Choisissez celui qui correspond le mieux à vos objectifs.",
    types: isEn
      ? [
          { title: "Corporate Websites", desc: "Professional digital presence that builds trust and converts visits into contacts.", href: `/${lang}/web-design/` },
          { title: "Online Stores", desc: "E-commerce without commissions or licences. You manage, we build.", href: `/${lang}/online-store/` },
          { title: "Business Websites", desc: "Custom solutions with specific functionalities for your sector and size.", href: `/${lang}/web-design/` },
        ]
      : [
          { title: "Sites Corporatifs", desc: "Présence digitale professionnelle qui inspire confiance et convertit les visites en contacts.", href: `/${lang}/creation-site-web/` },
          { title: "Boutiques en Ligne", desc: "E-commerce sans commissions ni licences. Vous gérez, nous construisons.", href: `/${lang}/boutique-en-ligne/` },
          { title: "Sites pour Entreprises", desc: "Solutions sur mesure avec des fonctionnalités spécifiques à votre secteur et votre taille.", href: `/${lang}/creation-site-web/` },
        ],
    viewMore: isEn ? "View more →" : "Voir plus →",
    processTitle: isEn ? "How we work" : "Notre méthode de travail",
    processSubtitle: isEn
      ? "A clear process, no surprises, with you at the centre."
      : "Un processus clair, sans surprises, avec vous au centre.",
    process: isEn
      ? [
          { step: "01", title: "Briefing", desc: "We understand your business, your audience and your objectives before designing anything." },
          { step: "02", title: "Design", desc: "Visual prototype tailored to your brand. You approve before we develop." },
          { step: "03", title: "Development", desc: "Fast, secure website optimised for SEO from day one." },
          { step: "04", title: "Delivery", desc: "Training, handover and support. Your website works from the very first moment." },
        ]
      : [
          { step: "01", title: "Briefing", desc: "Nous comprenons votre activité, votre public et vos objectifs avant de concevoir quoi que ce soit." },
          { step: "02", title: "Design", desc: "Prototype visuel adapté à votre marque. Vous approuvez avant que nous développions." },
          { step: "03", title: "Développement", desc: "Site web rapide, sécurisé et optimisé pour le SEO dès le premier jour." },
          { step: "04", title: "Livraison", desc: "Formation, remise et support. Votre site fonctionne dès le premier instant." },
        ],
    includedTitle: isEn ? "Everything included in every project" : "Tout inclus dans chaque projet",
    includes: isEn
      ? [
          "100% custom design — not a template",
          "React frontend + WordPress backend",
          "Mobile-first responsive design",
          "Technical SEO from day one",
          "Stripe, PayPal and Apple Pay integration",
          "Full training for autonomous management",
          "Post-delivery support included",
          "Core Web Vitals optimised",
        ]
      : [
          "Design 100% personnalisé — pas un modèle",
          "Frontend React + backend WordPress",
          "Design responsive mobile-first",
          "SEO technique dès le premier jour",
          "Intégration Stripe, PayPal et Apple Pay",
          "Formation complète pour la gestion autonome",
          "Support post-livraison inclus",
          "Core Web Vitals optimisés",
        ],
    ctaBoxTitle: isEn ? "Is your current website not converting?" : "Votre site actuel ne convertit pas ?",
    ctaBoxDesc: isEn
      ? "We analyse your website at no cost and tell you exactly what is holding back your sales."
      : "Nous analysons votre site sans frais et vous disons exactement ce qui freine vos ventes.",
    ctaBoxItems: isEn
      ? [
          "Free website diagnosis",
          "Speed and technical SEO analysis",
          "Personalised proposal with no beating around the bush",
          "Response in under 24 hours",
        ]
      : [
          "Diagnostic gratuit de votre site",
          "Analyse de vitesse et SEO technique",
          "Proposition personnalisée sans détour",
          "Réponse en moins de 24 heures",
        ],
    editorialTitle: isEn
      ? "Why your website is your most important marketing asset"
      : "Pourquoi votre site web est votre actif marketing le plus important",
    editorial: isEn
      ? [
          "Your website is the only digital channel you fully control. Social media changes its algorithms, Google Ads raises prices, directories charge to appear — but your website works for you 24 hours a day without depending on third parties. It's the centre of your digital strategy and the final destination of all the traffic you generate.",
          "The problem is that most business websites aren't designed to convert. They're designed to exist. A website that doesn't generate contacts, calls or sales isn't an asset — it's a cost. The difference between a converting website and one that doesn't lies in visual hierarchy, loading speed, clarity of message and ease of contact.",
          "At Mkt Web 360 we design websites with a clear objective: the visitor who arrives with buying intent should find what they're looking for, trust your company and contact you. We combine professional design, technical SEO from day one and conversion optimisation in every project.",
        ]
      : [
          "Votre site web est le seul canal digital que vous contrôlez entièrement. Les réseaux sociaux changent leurs algorithmes, Google Ads augmente ses prix, les annuaires facturent pour apparaître — mais votre site travaille pour vous 24 heures sur 24 sans dépendre de tiers. C'est le centre de votre stratégie digitale et la destination finale de tout le trafic que vous générez.",
          "Le problème est que la plupart des sites d'entreprises ne sont pas conçus pour convertir. Ils sont conçus pour exister. Un site qui ne génère pas de contacts, d'appels ou de ventes n'est pas un actif — c'est un coût. La différence entre un site qui convertit et un qui ne convertit pas réside dans la hiérarchie visuelle, la vitesse de chargement, la clarté du message et la facilité de contact.",
          "Chez Mkt Web 360, nous concevons des sites web avec un objectif clair : le visiteur qui arrive avec une intention d'achat doit trouver ce qu'il cherche, faire confiance à votre entreprise et vous contacter. Nous combinons design professionnel, SEO technique dès le premier jour et optimisation de la conversion dans chaque projet.",
        ],
    sectorsTitle: isEn ? "Sectors we work with" : "Secteurs dans lesquels nous travaillons",
    sectorsIntro: isEn
      ? "We design websites for companies across all sectors. Every project starts from scratch — we never use generic templates. Some of the sectors where we have the most experience:"
      : "Nous concevons des sites web pour des entreprises de tous les secteurs. Chaque projet part de zéro — nous n'utilisons jamais de modèles génériques. Quelques secteurs où nous avons le plus d'expérience :",
    sectors: isEn
      ? [
          "Professional services", "Clinics & healthcare", "Hospitality & tourism",
          "Construction & renovation", "E-commerce & retail", "Real estate",
          "Education & training", "Technology & SaaS", "Industry & manufacturing",
          "Accounting & tax advisory", "Law firms", "Freelancers & consultants",
        ]
      : [
          "Services professionnels", "Cliniques & santé", "Hôtellerie & tourisme",
          "Construction & rénovation", "E-commerce & retail", "Immobilier",
          "Éducation & formation", "Technologie & SaaS", "Industrie & fabrication",
          "Comptabilité & conseil fiscal", "Cabinets d'avocats", "Freelances & consultants",
        ],
    faqTitle: isEn ? "Frequently asked questions about web design" : "Questions fréquentes sur la création web",
    faqs: isEn
      ? [
          {
            q: "How long does it take to have the website ready?",
            a: "The standard timeframe for a corporate website is 2 to 3 weeks from the briefing. For more complex websites with specific functionalities or integrations it may take slightly longer. We always agree on the timeline before starting and we meet it.",
          },
          {
            q: "What technology do you use to build websites?",
            a: "We use Next.js with React for corporate websites that require maximum speed and technical SEO, and WordPress for projects where the client needs to manage content independently. In both cases the result is a fast, secure website optimised for Google.",
          },
          {
            q: "Can I manage the website myself afterwards?",
            a: "Yes. If the project requires it, we use WordPress as the content management backend. We train you to update texts, images, blog and any content independently without needing technical knowledge.",
          },
          {
            q: "Is SEO included or is it a separate service?",
            a: "Basic technical SEO is included in all projects: URL structure, loading speed, Core Web Vitals, meta tags, sitemap and Search Console configuration. Ongoing organic positioning (content creation, link building, monthly monitoring) is a complementary service.",
          },
        ]
      : [
          {
            q: "Combien de temps faut-il pour avoir le site prêt ?",
            a: "Le délai standard pour un site corporatif est de 2 à 3 semaines à partir du briefing. Pour des sites plus complexes avec des fonctionnalités spécifiques ou des intégrations, cela peut prendre un peu plus de temps. Nous convenons toujours du délai avant de commencer et nous le respectons.",
          },
          {
            q: "Quelle technologie utilisez-vous pour construire les sites ?",
            a: "Nous utilisons Next.js avec React pour les sites corporatifs qui nécessitent une vitesse maximale et un SEO technique, et WordPress pour les projets où le client a besoin de gérer le contenu de manière autonome. Dans les deux cas, le résultat est un site rapide, sécurisé et optimisé pour Google.",
          },
          {
            q: "Puis-je gérer le site moi-même ensuite ?",
            a: "Oui. Si le projet le requiert, nous utilisons WordPress comme backend de gestion de contenu. Nous vous formons pour mettre à jour les textes, images, blog et tout contenu de manière autonome sans avoir besoin de connaissances techniques.",
          },
          {
            q: "Le SEO est-il inclus ou est-ce un service séparé ?",
            a: "Le SEO technique de base est inclus dans tous les projets : structure des URLs, vitesse de chargement, Core Web Vitals, balises meta, sitemap et configuration de Search Console. Le positionnement organique continu (création de contenu, link building, suivi mensuel) est un service complémentaire.",
          },
        ],
    aiStrip: isEn
      ? "Senior team experience. The precision of artificial intelligence."
      : "L'expérience d'une équipe senior. La précision de l'intelligence artificielle.",
    aiStripSub: isEn
      ? "Our own AI protocols applied to every project for faster, more precise results."
      : "Nos propres protocoles IA appliqués à chaque projet pour des résultats plus rapides et précis.",
    ctaFinalTitle: isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore",
    ctaFinalSub: isEn
      ? "Let's introduce you. Tell us about your project and we'll get back to you within 24 hours."
      : "Présentons-nous. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: t.breadcrumbHome, href: `/${lang}/` },
              { label: t.breadcrumbPage },
            ]}
          />
          <div className="mt-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.h1a}<br />
              <span className="text-accent-400">{t.h1b}</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">{t.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
              >
                {t.ctaQuote}
              </a>
              <a
                href="#types"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                {t.ctaTypes}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {t.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Types of website */}
      <section id="types" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{t.typesTitle}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.typesSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.types.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent-300 transition-all group text-center"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-3 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-accent-500 text-sm font-semibold group-hover:underline">{t.viewMore}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{t.processTitle}</h2>
            <p className="text-gray-600">{t.processSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-primary-600 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included + CTA box */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">{t.includedTitle}</h2>
              <div className="space-y-4">
                {t.includes.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="text-accent-500 text-xl font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t.ctaBoxTitle}</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">{t.ctaBoxDesc}</p>
              <ul className="space-y-3 text-primary-100">
                {t.ctaBoxItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent-400 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">{t.editorialTitle}</h2>
          {t.editorial.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">{t.sectorsTitle}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">{t.sectorsIntro}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {t.sectors.map((s) => (
              <div key={s} className="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                <p className="text-gray-700 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI strip */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">{t.aiStrip}</p>
            <p className="text-gray-500 text-sm mt-1">{t.aiStripSub}</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t.ctaFinalTitle}</h2>
            <p className="text-primary-200">{t.ctaFinalSub}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-web-design`} />
          </div>
        </div>
      </section>

      <RelatedArticles category="Diseño Web" title={isEn ? "More about web design" : "En savoir plus sur la création web"} />
    </>
  );
}
