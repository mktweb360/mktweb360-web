import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Content Marketing for Businesses | Mkt Web 360"
      : "Marketing de Contenu pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Content strategy and production for businesses. SEO articles, corporate blogs and social media content to attract organic customers. Nationwide service."
      : "Stratégie et production de contenu pour les entreprises. Articles SEO, blogs d'entreprise et contenu pour réseaux sociaux pour attirer des clients organiques.",
    alternates: alternatesFor(`/${lang}/content-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/content-marketing/`,
    },
  };
}

export default async function ContentMarketingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Monthly content strategy and keyword research",
    "SEO blog articles optimised for positioning",
    "Content for social media networks",
    "Email newsletters",
    "On-page optimisation of each publication",
    "Schema markup for rich snippets",
    "Monthly performance report: positions and traffic",
  ];

  const frIncludes = [
    "Stratégie de contenu mensuelle et recherche de mots-clés",
    "Articles de blog SEO optimisés pour le positionnement",
    "Contenu pour les réseaux sociaux",
    "Newsletters par email",
    "Optimisation on-page de chaque publication",
    "Balisage Schema pour les rich snippets",
    "Rapport mensuel de performance : positions et trafic",
  ];

  const metrics = isEn
    ? [
        { value: "SEO", label: "optimised from day one" },
        { value: "Authority", label: "in your sector" },
        { value: "Organic", label: "traffic without cost per click" },
        { value: "Monthly", label: "performance report" },
      ]
    : [
        { value: "SEO", label: "optimisé dès le premier jour" },
        { value: "Autorité", label: "dans votre secteur" },
        { value: "Organique", label: "trafic sans coût par clic" },
        { value: "Mensuel", label: "rapport de performance" },
      ];

  const contentTypes = isEn
    ? [
        { title: "SEO blog articles", desc: "Articles of between 1,000 and 3,000 words optimised to rank strategic keywords and attract qualified organic traffic. They include semantic structure, internal links and CTAs." },
        { title: "Social media content", desc: "Posts, stories, reels and carousels designed for each platform. We adapt the tone, format and message to Instagram, LinkedIn, Facebook and TikTok." },
        { title: "Newsletters & email marketing", desc: "Editorial content for email campaigns: periodic newsletters, nurturing sequences and acquisition emails. Persuasive writing focused on conversion." },
        { title: "Guides & ebooks", desc: "Downloadable value content to generate qualified leads and demonstrate your company's expertise in its sector. Professional format with design included." },
        { title: "Landing page content", desc: "Persuasive texts for conversion-oriented landing pages. Proven copywriting structure to maximise the contact percentage." },
        { title: "Case studies & testimonials", desc: "Documentation and writing of client success stories. The most persuasive content for building trust with new prospects." },
      ]
    : [
        { title: "Articles de blog SEO", desc: "Articles de 1 000 à 3 000 mots optimisés pour positionner des mots-clés stratégiques et attirer du trafic organique qualifié. Ils comprennent une structure sémantique, des liens internes et des CTA." },
        { title: "Contenu pour réseaux sociaux", desc: "Posts, stories, reels et carrousels conçus pour chaque plateforme. Nous adaptons le ton, le format et le message à Instagram, LinkedIn, Facebook et TikTok." },
        { title: "Newsletters et email marketing", desc: "Contenu éditorial pour les campagnes email : newsletters périodiques, séquences de nurturing et emails d'acquisition. Rédaction persuasive axée sur la conversion." },
        { title: "Guides et ebooks", desc: "Contenu de valeur téléchargeable pour générer des leads qualifiés et démontrer l'expertise de votre entreprise dans son secteur. Format professionnel avec design inclus." },
        { title: "Contenu pour landing pages", desc: "Textes persuasifs pour les pages d'atterrissage orientées conversion. Structure de copywriting éprouvée pour maximiser le pourcentage de contacts." },
        { title: "Études de cas et témoignages", desc: "Documentation et rédaction d'études de cas clients. Le contenu le plus persuasif pour instaurer la confiance chez les nouveaux prospects." },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Audit & strategy", desc: "We analyse your website, your competition and the keywords with the most potential for your business. We define the thematic pillars, communication tone and editorial calendar." },
        { num: "02", title: "Research & briefing", desc: "We research each topic in depth before writing: secondary keywords, search intent, optimal structure and sector references." },
        { num: "03", title: "Production & review", desc: "We write, optimise and design each piece. We send it to you for review before publishing. We incorporate your changes without limiting revision rounds." },
        { num: "04", title: "Publication & tracking", desc: "We publish on your website or platform, monitor positioning and traffic, and adjust the strategy monthly based on results." },
      ]
    : [
        { num: "01", title: "Audit et stratégie", desc: "Nous analysons votre site web, votre concurrence et les mots-clés avec le plus de potentiel pour votre entreprise. Nous définissons les piliers thématiques, le ton de communication et le calendrier éditorial." },
        { num: "02", title: "Recherche et briefing", desc: "Nous recherchons chaque sujet en profondeur avant d'écrire : mots-clés secondaires, intention de recherche, structure optimale et références du secteur." },
        { num: "03", title: "Production et révision", desc: "Nous rédigeons, optimisons et concevons chaque pièce. Nous vous l'envoyons pour révision avant publication. Nous incorporons vos modifications sans limite de rounds de révision." },
        { num: "04", title: "Publication et suivi", desc: "Nous publions sur votre site web ou plateforme, surveillons le positionnement et le trafic, et ajustons la stratégie mensuellement selon les résultats." },
      ];

  const sectors = isEn
    ? [
        "Legal & advisory", "Health & clinics", "Technology & SaaS",
        "Construction & renovation", "E-commerce & retail", "Hospitality & tourism",
        "Finance & investment", "Education & training", "Real estate",
        "Industry & manufacturing", "Professional services", "Marketing & agencies",
      ]
    : [
        "Juridique et conseil", "Santé et cliniques", "Technologie et SaaS",
        "Construction et rénovation", "E-commerce et retail", "Hôtellerie et tourisme",
        "Finance et investissement", "Éducation et formation", "Immobilier",
        "Industrie et fabrication", "Services professionnels", "Marketing et agences",
      ];

  const faqs = isEn
    ? [
        { q: "How many articles per month do I need to see SEO results?", a: "For most business websites, between 2 and 4 well-optimised monthly articles are sufficient to build topical authority and improve organic positioning. The most important thing is not quantity but quality, relevance to your audience and the SEO optimisation of each piece." },
        { q: "Who writes the articles — you or me?", a: "We handle everything: keyword research, article structure, writing, SEO optimisation, images and publication. Your role is to review and approve the content before it is published. You can provide technical information from your sector if you wish." },
        { q: "Is the content you create original and exclusive?", a: "Yes. All the content we produce is original, written by people and optimised for your specific domain. We don't use generic templates or duplicate content. Each article aims to rank a specific keyword and respond to the user's search intent." },
        { q: "How long does it take for content to start ranking?", a: "SEO content takes between 3 and 6 months to rank, depending on the competitiveness of the keywords and the current authority of your domain. Social media content generates impact from day one. That is why we recommend combining both strategies." },
      ]
    : [
        { q: "Combien d'articles par mois faut-il pour voir des résultats SEO ?", a: "Pour la plupart des sites web d'entreprise, entre 2 et 4 articles mensuels bien optimisés suffisent pour construire une autorité thématique et améliorer le positionnement organique. Le plus important n'est pas la quantité mais la qualité, la pertinence pour votre audience et l'optimisation SEO de chaque pièce." },
        { q: "Qui rédige les articles — vous ou moi ?", a: "Nous nous occupons de tout : recherche de mots-clés, structure de l'article, rédaction, optimisation SEO, images et publication. Votre rôle est de réviser et approuver le contenu avant sa publication. Vous pouvez fournir des informations techniques de votre secteur si vous le souhaitez." },
        { q: "Le contenu que vous créez est-il original et exclusif ?", a: "Oui. Tout le contenu que nous produisons est original, rédigé par des personnes et optimisé pour votre domaine spécifique. Nous n'utilisons pas de modèles génériques ni de contenu dupliqué. Chaque article vise à positionner un mot-clé spécifique et à répondre à l'intention de recherche de l'utilisateur." },
        { q: "Combien de temps faut-il pour que le contenu commence à se positionner ?", a: "Le contenu SEO met entre 3 et 6 mois à se positionner, selon la concurrence des mots-clés et l'autorité actuelle de votre domaine. Le contenu pour les réseaux sociaux génère un impact dès le premier jour. C'est pourquoi nous recommandons de combiner les deux stratégies." },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Content Marketing" : "Marketing de Contenu" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Content that positions" : "Contenu qui positionne"}
              <br />
              <span className="text-accent-400">
                {isEn ? "and attracts customers" : "et attire des clients"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Quality content positions your brand as a reference in your sector, improves your SEO and builds trust with potential customers. We create the strategy and content your business needs."
                : "Le contenu de qualité positionne votre marque comme référence dans votre secteur, améliore votre SEO et renforce la confiance des clients potentiels. Nous créons la stratégie et le contenu dont votre entreprise a besoin."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get a free quote" : "Demander un devis"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "What's included" : "Ce qui est inclus"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isEn ? enIncludes : frIncludes).map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
              >
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why content marketing is the most profitable long-term investment"
              : "Pourquoi le marketing de contenu est l'investissement le plus rentable à long terme"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Content marketing generates 3 times more leads than traditional outbound marketing and costs 62% less. Companies that publish content regularly receive up to 55% more organic traffic to their website."
              : "Le marketing de contenu génère 3 fois plus de leads que le marketing outbound traditionnel et coûte 62% moins cher. Les entreprises qui publient du contenu régulièrement reçoivent jusqu'à 55% plus de trafic organique sur leur site web."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Unlike paid advertising, content works for your business cumulatively and permanently. A well-positioned article can attract visits for years at no additional cost. And each piece of content you publish builds the topical authority of your domain, which improves the positioning of your entire website."
              : "Contrairement à la publicité payante, le contenu travaille pour votre entreprise de manière cumulative et permanente. Un article bien positionné peut attirer des visites pendant des années sans coût supplémentaire. Et chaque pièce de contenu que vous publiez renforce l'autorité thématique de votre domaine, ce qui améliore le positionnement de l'ensemble de votre site web."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "But it is not just about publishing. Content must respond exactly to what your potential customer is searching for, be structured for search engines and designed to convert readers into leads. At Mkt Web 360 we combine quality writing with technical SEO and conversion strategy."
              : "Mais il ne s'agit pas seulement de publier. Le contenu doit répondre exactement à ce que votre client potentiel recherche, être structuré pour les moteurs de recherche et conçu pour convertir les lecteurs en leads. Chez Mkt Web 360, nous combinons une rédaction de qualité avec le SEO technique et la stratégie de conversion."}
          </p>
        </div>
      </section>

      {/* Content types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "Types of content we produce" : "Types de contenu que nous produisons"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentTypes.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "How we develop your content strategy"
              : "Comment nous développons votre stratégie de contenu"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Sectors we work in" : "Secteurs dans lesquels nous travaillons"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "We produce content for companies in all sectors. We have specialist writers in the following areas:"
              : "Nous produisons du contenu pour des entreprises de tous secteurs. Nous avons des rédacteurs spécialisés dans les domaines suivants :"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {sectors.map((s) => (
              <div key={s} className="bg-white rounded-xl p-3 text-center border border-gray-100">
                <p className="text-gray-700 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about content marketing"
              : "Questions fréquentes sur le marketing de contenu"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Ready to grow online?" : "Prêt à vous développer en ligne ?"}
          </h2>
          <p className="text-primary-200">
            {isEn
              ? "Tell us about your project. We respond within 24 hours."
              : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-content-marketing`} />
        </div>
      </section>

      <RelatedArticles
        category="Marketing de Contenidos"
        title={isEn ? "More about content strategy" : "En savoir plus sur la stratégie de contenu"}
      />
    </>
  );
}
