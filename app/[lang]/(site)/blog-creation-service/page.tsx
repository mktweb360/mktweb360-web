import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Blog Creation for Businesses"
      : "Création de blog professionnel",
    description: isEn
      ? "Professional blog creation service for businesses. SEO strategy, design, specialist-written articles and ongoing optimisation to generate leads without cost per click."
      : "Service de création de blog professionnel pour entreprises. Stratégie SEO, design, articles rédigés par des spécialistes et optimisation continue pour générer des leads sans coût par clic.",
    alternates: alternatesFor(`/${lang}/blog-creation-service/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/blog-creation-service/`,
    },
  };
}


const BLOG_TYPES = {
  en: {
    title: "Choose your type of blog",
    intro: "Every project has different objectives. We design the strategy that fits yours.",
    items: [
      { title: "Corporate blog", desc: "For companies that want to become a point of reference in their sector and generate quality leads.", items: ["Conversion-oriented content", "Integrated into your corporate website", "Technical SEO from the first article"] },
      { title: "Professional blog", desc: "For freelancers, consultants and professionals who want to build authority in their field.", items: ["Personalised content strategy", "Targeting niche keywords", "Attracting qualified clients"] },
      { title: "Thematic blog", desc: "For content projects, affiliate sites or specialist media that live on organic traffic.", items: ["Optimised content architecture", "Strategic keyword clusters", "Long-term monetisation and traffic"] },
    ],
  },
  fr: {
    title: "Choisissez votre type de blog",
    intro: "Chaque projet a des objectifs différents. Nous concevons la stratégie qui correspond aux vôtres.",
    items: [
      { title: "Blog d'entreprise", desc: "Pour les entreprises qui veulent devenir une référence dans leur secteur et générer des leads de qualité.", items: ["Contenu orienté conversion", "Intégré à votre site institutionnel", "SEO technique dès le premier article"] },
      { title: "Blog professionnel", desc: "Pour les indépendants, consultants et professionnels qui veulent asseoir leur autorité dans leur domaine.", items: ["Stratégie de contenu personnalisée", "Ciblage de mots-clés de niche", "Acquisition de clients qualifiés"] },
      { title: "Blog thématique", desc: "Pour les projets de contenu, l'affiliation ou les médias spécialisés qui vivent du trafic organique.", items: ["Architecture de contenu optimisée", "Clusters de mots-clés stratégiques", "Monétisation et trafic sur le long terme"] },
    ],
  },
};

const WHY = {
  en: {
    title: "Why a blog is the most profitable long-term digital asset",
    paragraphs: [
      "Paid advertising generates traffic while you pay. When you stop, the traffic disappears. A well-built blog generates organic traffic cumulatively and permanently — a well-positioned article can attract visits and customers for years at no additional cost.",
      "Every article you publish is a new entry point to your website. Every keyword you position for is a potential customer arriving in search of exactly what you offer. And every article builds the topical authority of your domain, which improves the positioning of the whole website, including your commercial service pages.",
      "A blog is neither a vanity channel nor a corporate diary. It is an acquisition tool that works when it is built with SEO criteria, a clear search intent and a defined conversion goal for each article. At Mkt Web 360 we design blogs that generate qualified traffic and turn it into leads and sales.",
    ],
    boxTitle: "Your best customer is searching for you on Google",
    boxText: "A well-positioned article can bring you customers for years without spending a single euro on advertising.",
    boxItems: ["Long-term ROI with no cost per click", "Content that ranks and converts", "Brand authority in your sector", "Qualified, consistent traffic"],
  },
  fr: {
    title: "Pourquoi un blog est l'actif digital le plus rentable sur le long terme",
    paragraphs: [
      "La publicité payante génère du trafic tant que vous payez. Dès que vous arrêtez, le trafic disparaît. Un blog bien construit génère du trafic organique de façon cumulative et durable : un article bien positionné peut attirer des visites et des clients pendant des années sans coût supplémentaire.",
      "Chaque article publié est une nouvelle porte d'entrée vers votre site. Chaque mot-clé sur lequel vous vous positionnez correspond à un client potentiel qui arrive en cherchant exactement ce que vous proposez. Et chaque article renforce l'autorité thématique de votre domaine, ce qui améliore le positionnement de tout le site, y compris de vos pages de services commerciales.",
      "Le blog n'est ni un canal de vanité ni un journal d'entreprise. C'est un outil d'acquisition qui fonctionne lorsqu'il est construit avec une approche SEO, une intention de recherche claire et un objectif de conversion défini pour chaque article. Chez Mkt Web 360, nous concevons des blogs qui génèrent du trafic qualifié et le transforment en leads et en ventes.",
    ],
    boxTitle: "Votre meilleur client vous cherche sur Google",
    boxText: "Un article bien positionné peut vous apporter des clients pendant des années sans dépenser un euro en publicité.",
    boxItems: ["ROI à long terme sans coût par clic", "Un contenu qui se positionne et qui convertit", "Autorité de marque dans votre secteur", "Trafic qualifié et régulier"],
  },
};

const STEPS = {
  en: {
    title: "How we create your blog",
    steps: [
      { num: "01", title: "Strategy and keyword research", desc: "We research the keywords with the greatest potential for your business and sector. We define the thematic pillars, the content clusters and the editorial calendar for the first 3 months." },
      { num: "02", title: "Architecture and design", desc: "We design the structure of the blog: categories, tags, internal navigation, article template and CTAs. Everything geared towards SEO and conversion from the outset." },
      { num: "03", title: "Development and integration", desc: "We integrate the blog into your existing website or develop it as a standalone project. We configure the sitemap, the structured data schemas and all the technical SEO foundations." },
      { num: "04", title: "Production and monitoring", desc: "We write the first articles, publish them and monitor their positioning. We adjust the strategy every month according to the results obtained." },
    ],
  },
  fr: {
    title: "Comment nous créons votre blog",
    steps: [
      { num: "01", title: "Stratégie et recherche de mots-clés", desc: "Nous étudions les mots-clés au plus fort potentiel pour votre activité et votre secteur. Nous définissons les piliers thématiques, les clusters de contenu et le calendrier éditorial des 3 premiers mois." },
      { num: "02", title: "Architecture et design", desc: "Nous concevons la structure du blog : catégories, étiquettes, navigation interne, modèle d'article et CTA. Le tout pensé pour le SEO et la conversion dès le départ." },
      { num: "03", title: "Développement et intégration", desc: "Nous intégrons le blog à votre site existant ou le développons comme projet indépendant. Nous configurons le sitemap, les schémas de données structurées et toutes les bases techniques du SEO." },
      { num: "04", title: "Production et suivi", desc: "Nous rédigeons les premiers articles, les publions et suivons leur positionnement. Nous ajustons la stratégie chaque mois en fonction des résultats obtenus." },
    ],
  },
};

const FAQS = {
  en: [
    { q: "How long does it take for a new blog to rank?", a: "The first well-optimised articles start to appear on Google within 4 to 12 weeks. Significant organic traffic arrives between 3 and 6 months, depending on the competition in your sector and the authority of your domain. It is a medium-term investment with a cumulative return." },
    { q: "Do you write the articles or do I?", a: "We offer both options. We can take care of all the writing with our team of SEO content specialists, or we can give you the structure, the brief and the keywords so that you write them yourself. The most common option is for us to write and for you to review before publishing." },
    { q: "Does the blog have to be on my website or can it be standalone?", a: "The most efficient option for SEO is to integrate it into your main domain (for example: yourcompany.com/blog). That way, every article that ranks strengthens the authority of your domain and also benefits your service pages. A subdomain or separate domain does not transfer authority to the main domain." },
    { q: "How many articles a month do you start with?", a: "We recommend starting with 2 quality articles a month rather than publishing more with less depth. Google rewards content that answers the search intent in depth. Once the first results come in, we adjust the publishing pace according to what works." },
  ],
  fr: [
    { q: "Combien de temps faut-il pour qu'un nouveau blog se positionne ?", a: "Les premiers articles bien optimisés commencent à apparaître sur Google entre 4 et 12 semaines. Le trafic organique significatif arrive entre 3 et 6 mois, selon la concurrence du secteur et l'autorité du domaine. C'est un investissement à moyen terme au rendement cumulatif." },
    { q: "Rédigez-vous les articles ou dois-je le faire moi-même ?", a: "Nous proposons les deux options. Nous pouvons prendre en charge toute la rédaction avec notre équipe de spécialistes du contenu SEO, ou vous fournir la structure, le brief et les mots-clés pour que vous rédigiez vous-même. L'option la plus courante : nous rédigeons et vous relisez avant publication." },
    { q: "Le blog doit-il être sur mon site ou peut-il être indépendant ?", a: "Le plus efficace pour le SEO est de l'intégrer à votre domaine principal (par exemple : votreentreprise.com/blog). Ainsi, chaque article qui se positionne renforce l'autorité de votre domaine et profite aussi à vos pages de services. Un sous-domaine ou un domaine séparé ne transmet pas d'autorité au domaine principal." },
    { q: "Avec combien d'articles par mois commencez-vous ?", a: "Nous recommandons de commencer par 2 articles de qualité par mois plutôt que d'en publier davantage avec moins de profondeur. Google récompense les contenus qui répondent en profondeur à l'intention de recherche. Dès les premiers résultats, nous ajustons le rythme de publication en fonction de ce qui fonctionne." },
  ],
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const L = isEn ? "en" : "fr";
  const blogTypes = BLOG_TYPES[L];
  const why = WHY[L];
  const steps = STEPS[L];
  const faqs = FAQS[L];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: L,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const includes = isEn
    ? [
        "Content strategy and keyword research",
        "SEO-optimised information architecture",
        "Design integrated in your website or standalone",
        "Articles written by specialists",
        "On-page optimisation of each publication",
        "Schema markup for rich snippets",
        "Monthly position and traffic report",
        "Training for autonomous management (optional)",
      ]
    : [
        "Stratégie de contenu et recherche de mots-clés",
        "Architecture de l'information optimisée pour le SEO",
        "Design intégré dans votre site ou autonome",
        "Articles rédigés par des spécialistes",
        "Optimisation on-page de chaque publication",
        "Balisage Schema pour les rich snippets",
        "Rapport mensuel de positions et de trafic",
        "Formation pour la gestion autonome (optionnel)",
      ];

  const metrics = isEn
    ? [
        { value: "Traffic", label: "constant organic" },
        { value: "SEO", label: "from the first article" },
        { value: "Authority", label: "in your sector" },
        { value: "Leads", label: "qualified without paying per click" },
      ]
    : [
        { value: "Trafic", label: "organique constant" },
        { value: "SEO", label: "dès le premier article" },
        { value: "Autorité", label: "dans votre secteur" },
        { value: "Leads", label: "qualifiés sans payer par clic" },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Blog Creation" : "Création de Blog" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "A blog that works" : "Un blog qui travaille"}<br />
              <span className="text-accent-400">
                {isEn ? "for your business 24/7" : "pour votre entreprise 24h/24"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "A well-built blog is the most profitable digital asset a company can have. It generates constant organic traffic, positions your brand as a reference and converts readers into customers."
                : "Un blog bien construit est l'actif numérique le plus rentable qu'une entreprise puisse avoir. Il génère du trafic organique constant, positionne votre marque comme référence et convertit les lecteurs en clients."}
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
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{blogTypes.title}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{blogTypes.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogTypes.items.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{b.desc}</p>
                <ul className="space-y-2">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary-600 mb-6">{why.title}</h2>
            {why.paragraphs.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
          </div>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{why.boxTitle}</h3>
            <p className="text-primary-200 mb-6 leading-relaxed">{why.boxText}</p>
            <ul className="space-y-3">
              {why.boxItems.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-accent-400 font-bold">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{steps.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-600 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "Frequently asked questions about blog creation" : "Questions fréquentes sur la création de blog"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
          </h2>
          <p className="text-primary-200">
            {isEn ? "Tell us about your project. We respond within 24 hours." : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-blog-creation`} />
        </div>
      </section>
    </>
  );
}
