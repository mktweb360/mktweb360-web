import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Monetisation Blog — Passive Income with AdSense and Affiliates"
      : "Blog de Monétisation — Revenus Passifs avec AdSense et Affiliés",
    description: isEn
      ? "We build your niche blog optimised to generate passive income with AdSense and affiliate marketing. Complete setup from €990 with 15 SEO articles, monetisation configuration and training."
      : "Nous créons votre blog de niche optimisé pour générer des revenus passifs avec AdSense et le marketing d'affiliation. Setup complet à partir de 990€ avec 15 articles SEO, configuration de la monétisation et formation.",
    alternates: alternatesFor(`/${lang}/blog-monetization/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/blog-monetization/`,
    },
    openGraph: {
      title: isEn
        ? "Monetisation Blog — Passive Income with AdSense and Affiliates | Mkt Web 360"
        : "Blog de Monétisation — Revenus Passifs avec AdSense et Affiliés | Mkt Web 360",
      description: isEn
        ? "We build your niche blog optimised to generate passive income with AdSense and affiliate marketing. Complete setup from €990 with 15 SEO articles, monetisation configuration and training."
        : "Nous créons votre blog de niche optimisé pour générer des revenus passifs avec AdSense et le marketing d'affiliation. Setup complet à partir de 990€ avec 15 articles SEO, configuration de la monétisation et formation.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn
      ? "Monetisation Blog with AdSense and Affiliates"
      : "Blog de Monétisation avec AdSense et Affiliés",
    serviceType: "Blog Monetization Service",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Creation and optimisation of niche blogs to generate passive income through Google AdSense and affiliate marketing. Complete setup with SEO strategy, initial content and training."
      : "Création et optimisation de blogs de niche pour générer des revenus passifs via Google AdSense et le marketing d'affiliation. Setup complet avec stratégie SEO, contenu initial et formation.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/blog-monetization/`,
    offers: {
      "@type": "Offer",
      price: "990",
      priceCurrency: "EUR",
      description: isEn
        ? "Complete blog monetisation setup from €990. Includes domain, hosting, WordPress, 15 SEO articles, AdSense and Amazon Associates configuration."
        : "Setup complet de blog de monétisation à partir de 990€. Inclut domaine, hébergement, WordPress, 15 articles SEO, configuration AdSense et Amazon Associates.",
      availability: "https://schema.org/InStock",
      url: `https://www.mktweb360.com/${lang}/blog-monetization/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Accueil", item: `https://www.mktweb360.com/${lang}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Monetisation Blog" : "Blog de Monétisation",
        item: `https://www.mktweb360.com/${lang}/blog-monetization/`,
      },
    ],
  };

  const FAQS = isEn
    ? [
        {
          q: "How long does it take for a blog to generate income?",
          a: "The first earnings with AdSense usually appear between 4 and 8 months, when the blog starts accumulating organic traffic. To generate consistent and significant income, the typical horizon is 12 to 18 months. Well-focused niche blogs with affiliate marketing can shorten this timeframe if the niche has high purchase intent.",
        },
        {
          q: "What is included in the €990 setup?",
          a: "The setup includes: domain selection and registration, first-year hosting, WordPress installation and configuration with a theme optimised for SEO and speed, Google AdSense and Amazon Associates configuration, 15 initial SEO articles optimised for the highest-potential keywords in the niche, and a training session so you can manage the blog independently.",
        },
        {
          q: "What niche should I choose to make the blog profitable?",
          a: "The most profitable niches combine three factors: sufficient search volume, moderate competition and high purchase intent or advertising interest. Niches such as home and garden, pets, fitness, consumer technology, toys or digital entrepreneurship perform well in Spain with AdSense and Amazon Associates. We analyse the niche's potential before starting to choose the best opportunity.",
        },
        {
          q: "Can I manage the blog myself after the setup?",
          a: "Yes. We build the blog on WordPress with training included so you can publish articles, update affiliate products, review AdSense performance and manage the blog completely independently. If you prefer us to manage it, we have a monthly maintenance plan at €290 that includes 10 monthly SEO articles, affiliate product updates and an income report.",
        },
      ]
    : [
        {
          q: "Combien de temps faut-il à un blog pour générer des revenus ?",
          a: "Les premiers revenus avec AdSense apparaissent généralement entre 4 et 8 mois, quand le blog commence à accumuler du trafic organique. Pour générer des revenus constants et significatifs, l'horizon habituel est de 12 à 18 mois. Les blogs de niche bien ciblés avec le marketing d'affiliation peuvent raccourcir ce délai si le créneau a une forte intention d'achat.",
        },
        {
          q: "Qu'est-ce qui est inclus dans le setup à 990€ ?",
          a: "Le setup comprend : choix et enregistrement du domaine, hébergement de la première année, installation et configuration de WordPress avec un thème optimisé pour le SEO et la vitesse, configuration de Google AdSense et Amazon Associates, 15 articles SEO initiaux optimisés pour les mots-clés à plus fort potentiel du créneau, et une session de formation pour que vous puissiez gérer le blog de manière autonome.",
        },
        {
          q: "Quel créneau dois-je choisir pour que le blog soit rentable ?",
          a: "Les créneaux les plus rentables combinent trois facteurs : un volume de recherches suffisant, une concurrence modérée et une forte intention d'achat ou un intérêt publicitaire élevé. Des créneaux comme la maison et le jardin, les animaux domestiques, le fitness, la technologie grand public, les jouets ou l'entrepreneuriat numérique ont de bonnes performances avec AdSense et Amazon Associates. Nous analysons le potentiel du créneau avant de commencer pour choisir la meilleure opportunité.",
        },
        {
          q: "Puis-je gérer le blog moi-même après le setup ?",
          a: "Oui. Nous développons le blog sur WordPress avec une formation incluse pour que vous puissiez publier des articles, mettre à jour les produits d'affiliation, examiner les performances d'AdSense et gérer le blog de façon complètement autonome. Si vous préférez que nous le gérions, nous avons un plan de maintenance mensuel à 290€ qui comprend 10 articles SEO mensuels, la mise à jour des produits d'affiliation et un rapport de revenus.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Monetisation Blog" : "Blog de Monétisation" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn
                ? "Monetisation Blog: create a digital asset that generates income while you sleep"
                : "Blog de Monétisation : créez un actif numérique qui génère des revenus pendant que vous dormez"}
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We build your niche blog optimised to generate passive income with Google AdSense and affiliate marketing. Complete setup from €990 with 15 SEO articles, monetisation configuration and training so you can manage it independently."
                : "Nous créons votre blog de niche optimisé pour générer des revenus passifs avec Google AdSense et le marketing d'affiliation. Setup complet à partir de 990€ avec 15 articles SEO, configuration de la monétisation et formation pour que vous puissiez le gérer de façon autonome."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
              >
                {isEn ? "Request a quote" : "Demander un devis"}
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/imagen-blog-monetizacion.jpg"
              alt={isEn ? "Monetisation blog with AdSense and affiliates" : "Blog de monétisation avec AdSense et affiliés"}
              className="rounded-2xl shadow-2xl w-full object-cover hidden md:block"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* What it is */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "What a monetisation blog is and why it still works in 2026"
              : "Qu'est-ce qu'un blog de monétisation et pourquoi ça fonctionne encore en 2026"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "A monetisation blog is a content website optimised to rank in Google and generate income passively through advertising (Google AdSense) and affiliate commissions (Amazon Associates, specialised affiliate programmes). The model works because organic traffic is free and recurring: once articles rank, they keep generating visits and income without additional work."
              : "Un blog de monétisation est un site web de contenu optimisé pour se positionner sur Google et générer des revenus de façon passive à travers la publicité (Google AdSense) et les commissions d'affiliation (Amazon Associates, programmes d'affiliation spécialisés). Le modèle fonctionne parce que le trafic organique est gratuit et récurrent : une fois que les articles se positionnent, ils continuent à générer des visites et des revenus sans travail supplémentaire."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "In 2026, with artificial intelligence generating masses of low-quality content, well-built blogs — with specific content, real experience and technical optimisation — have increasing value. Google rewards content that demonstrates genuine experience (E-E-A-T) and penalises generic content. A well-executed niche blog remains one of the digital assets with the best long-term ROI."
              : "En 2026, avec l'intelligence artificielle générant du contenu massif de faible qualité, les blogs bien construits — avec du contenu spécifique, une expérience réelle et une optimisation technique — ont de plus en plus de valeur. Google récompense le contenu qui démontre une expérience réelle (E-E-A-T) et pénalise le contenu générique. Un blog de niche bien exécuté reste l'un des actifs numériques avec le meilleur ROI à long terme."}
          </p>
        </section>

        {/* How monetisation works */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "How monetisation works with AdSense and affiliates"
              : "Comment fonctionne la monétisation avec AdSense et les affiliés"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "There are two main income sources. Google AdSense displays ads on your blog and pays you per thousand impressions (CPM). The niches with the highest RPM in Spain are finance, technology, health and home. With 10,000 monthly visits, a well-monetised blog can generate between €30 and €150/month with AdSense."
              : "Il y a deux sources de revenus principales. Google AdSense affiche des publicités sur votre blog et vous paie pour chaque millier d'impressions (CPM). Les niches avec le RPM le plus élevé en Espagne sont la finance, la technologie, la santé et la maison. Avec 10 000 visites mensuelles, un blog bien monétisé peut générer entre 30 et 150€/mois avec AdSense."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "Affiliate marketing is more profitable at lower volume: when a reader clicks on an affiliate link and buys the recommended product, you earn a commission. Amazon Associates pays between 1% and 10% depending on the category. A fitness blog with 5,000 monthly visits recommending equipment can generate more with affiliation than with AdSense. The combination of both sources — AdSense for general traffic volume and affiliates for the highest purchase-intent articles — is the strategy that maximises income."
              : "Le marketing d'affiliation est plus rentable à moindre volume : quand un lecteur clique sur un lien d'affiliation et achète le produit recommandé, vous touchez une commission. Amazon Associates paie entre 1% et 10% selon la catégorie. Un blog de fitness avec 5 000 visites mensuelles recommandant de l'équipement peut générer plus avec l'affiliation qu'avec AdSense. La combinaison des deux sources — AdSense pour le volume de trafic général et les affiliés pour les articles à plus haute intention d'achat — est la stratégie qui maximise les revenus."}
          </p>
        </section>

        {/* Real cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Our niche blogs — real cases" : "Nos blogs de niche — cas réels"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "We work on niche blogs in sectors with high organic demand in Spain. Our portfolio includes guiadelpiscina.com (pool maintenance and equipment purchasing), fitnessfacil.es (fitness routines and equipment), cuidatumascota.es (pet health and products), emprendedigital.es (tools and resources for online entrepreneurs) and juguetester.es (toy analysis and comparisons)."
              : "Nous travaillons sur des blogs de niche dans des secteurs à forte demande organique en Espagne. Notre portfolio comprend guiadelpiscina.com (entretien de piscine et achat d'équipements), fitnessfacil.es (routines et équipements de fitness), cuidatumascota.es (santé et produits pour animaux domestiques), emprendedigital.es (outils et ressources pour les entrepreneurs en ligne) et juguetester.es (analyses et comparatifs de jouets)."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "Each one combines informational content optimised for SEO with comparison and product recommendation articles with affiliate links. The process is the same for any niche: keyword research, content architecture, high purchase-intent articles and monetisation optimisation based on performance data."
              : "Chacun combine du contenu informatif optimisé pour le SEO avec des articles de comparaison et de recommandation de produits avec des liens d'affiliation. Le processus est le même pour n'importe quel créneau : recherche de mots-clés, architecture de contenu, articles à haute intention d'achat et optimisation de la monétisation selon les données de performance."}
          </p>
        </section>

        {/* Setup 990 */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "What is included in the €990 setup" : "Ce qui est inclus dans le setup à 990€"}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The €990 setup includes everything you need to have an operational monetisation blog with the first articles published: niche selection and validation of income potential, domain registration and first-year hosting, WordPress installation and configuration with a theme optimised for speed and SEO, Google AdSense and Amazon Associates configuration, keyword research and content architecture for the first 6 months, writing and publishing of 15 initial SEO articles (between 800 and 1,200 words each), and a 2-hour training session for autonomous blog management."
              : "Le setup à 990€ comprend tout le nécessaire pour avoir un blog de monétisation opérationnel avec les premiers articles publiés : choix du créneau et validation du potentiel de revenus, enregistrement du domaine et hébergement de la première année, installation et configuration de WordPress avec un thème optimisé pour la vitesse et le SEO, configuration de Google AdSense et Amazon Associates, recherche de mots-clés et architecture de contenu pour les 6 premiers mois, rédaction et publication de 15 articles SEO initiaux (entre 800 et 1 200 mots chacun), et une session de formation de 2 heures pour la gestion autonome du blog."}
          </p>
        </section>

        {/* Maintenance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Monthly maintenance plan" : "Plan de maintenance mensuel"}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "If you prefer us to manage the blog's growth, the monthly maintenance plan at €290/month includes: 10 new SEO articles every month (800–1,200 words, optimised for high-potential keywords), update and optimisation of existing affiliate articles (updated prices, new products, improved CTR), review of AdSense performance and adjustment of ad positions, and a monthly report on traffic, income and next actions. Maintenance is optional — the blog is yours after setup — but it significantly accelerates growth."
              : "Si vous préférez que nous gérions la croissance du blog, le plan de maintenance mensuel à 290€/mois comprend : 10 nouveaux articles SEO chaque mois (800 à 1 200 mots, optimisés pour les mots-clés à fort potentiel), mise à jour et optimisation des articles d'affiliation existants (prix mis à jour, nouveaux produits, amélioration du CTR), révision des performances AdSense et ajustement de la position des annonces, et un rapport mensuel sur le trafic, les revenus et les prochaines actions. La maintenance est facultative — le blog reste entre vos mains après le setup — mais elle accélère significativement la croissance."}
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about monetisation blogs"
              : "Questions fréquentes sur les blogs de monétisation"}
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Do you want to create your monetisation blog?"
              : "Voulez-vous créer votre blog de monétisation ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Do you already have a niche in mind or do you want us to help you identify the best opportunity? Tell us and within 24 hours we will tell you if it has potential and where to start."
              : "Avez-vous déjà un créneau en tête ou voulez-vous que nous vous aidions à identifier la meilleure opportunité ? Dites-le nous et dans les 24 heures nous vous dirons si ça a du potentiel et par où commencer."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm lang={lang} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" />
    </>
  );
}
