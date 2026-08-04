import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Business Profile Management — Local Visibility for Businesses | Mkt Web 360"
      : "Gestion Google Business Profile — Visibilité Locale pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional Google Business Profile management. Optimise your profile, generate more reviews and appear first on Google Maps. Nationwide service from Spain."
      : "Gestion professionnelle du Google Business Profile. Optimisez votre fiche, générez plus d'avis et apparaissez en premier sur Google Maps.",
    alternates: alternatesFor(`/${lang}/google-business-profile-service/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-business-profile-service/`,
    },
  };
}

const FAQS_EN = [
  {
    q: "How long does it take to see results from optimising the profile?",
    a: "The first changes are immediate: the updated profile appears on Google within 24–48 hours. The improvement in the Local Pack position (the top 3 map results) is usually visible within 4 to 8 weeks, depending on the competition in your area and sector.",
  },
  {
    q: "Do I need a physical address to have a Google Business Profile?",
    a: "Not necessarily. If you provide services at the customer's location (plumbers, electricians, consultants, etc.) you can create a service-area business profile without showing your address. We configure the profile according to your business model.",
  },
  {
    q: "How do you get more reviews for my business?",
    a: "We design a review acquisition strategy tailored to your sector: automated post-service email, QR code at the point of sale, team training to request reviews naturally. We also manage the responses to all reviews, positive and negative.",
  },
  {
    q: "What happens if I have negative reviews?",
    a: "Well-managed negative reviews generate more trust than having none. We respond professionally and constructively to each negative review. If they are fake or violate Google's policies, we process their removal with Google.",
  },
];

const FAQS_FR = [
  {
    q: "Combien de temps faut-il pour voir les résultats de l'optimisation de la fiche ?",
    a: "Les premiers changements sont immédiats : la fiche mise à jour apparaît sur Google en 24 à 48 heures. L'amélioration du positionnement dans le Local Pack (les 3 premiers résultats sur la carte) est généralement visible entre 4 et 8 semaines, selon la concurrence dans votre zone et secteur.",
  },
  {
    q: "Ai-je besoin d'une adresse physique pour avoir un Google Business Profile ?",
    a: "Pas nécessairement. Si vous fournissez des services chez le client (plombiers, électriciens, conseillers, etc.), vous pouvez créer une fiche de zone de service sans afficher votre adresse. Nous configurons la fiche selon votre modèle commercial.",
  },
  {
    q: "Comment obtenez-vous plus d'avis pour mon entreprise ?",
    a: "Nous concevons une stratégie d'acquisition d'avis adaptée à votre secteur : email automatisé après service, QR code au point de vente, formation de l'équipe pour demander des avis naturellement. Nous gérons également les réponses à tous les avis, positifs et négatifs.",
  },
  {
    q: "Que se passe-t-il si j'ai des avis négatifs ?",
    a: "Les avis négatifs bien gérés génèrent plus de confiance que de ne pas en avoir. Nous répondons de manière professionnelle et constructive à chaque avis négatif. S'ils sont faux ou violent les politiques de Google, nous traitons leur suppression auprès de Google.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn ? FAQS_EN : FAQS_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Google Business Profile Management" : "Gestion Google Business Profile",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Optimisation and management of Google Business Profile for businesses. Improve your local visibility on Google Maps and Google Search."
      : "Optimisation et gestion du Google Business Profile pour les entreprises. Améliorez votre visibilité locale sur Google Maps et Google Search.",
    areaServed: "Spain",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const metrics = isEn
    ? [
        { value: "46%", label: "searches with local intent" },
        { value: "3x", label: "more visits with optimised profile" },
        { value: "Reviews", label: "active management" },
        { value: "Maps", label: "Google Maps positioning" },
      ]
    : [
        { value: "46%", label: "recherches à intention locale" },
        { value: "3x", label: "plus de visites avec profil optimisé" },
        { value: "Avis", label: "gestion active" },
        { value: "Maps", label: "positionnement Google Maps" },
      ];

  const initialOptimisation = isEn
    ? [
        "Complete Google Business Profile audit",
        "Optimised categories and attributes",
        "Persuasive description with local keywords",
        "Business photos and videos",
        "Updated hours, services and prices",
        "Consistent NAP with your website and directories",
      ]
    : [
        "Audit complet de votre fiche Google Business Profile",
        "Catégories et attributs optimisés",
        "Description persuasive avec mots-clés locaux",
        "Photos et vidéos de l'entreprise",
        "Horaires, services et prix mis à jour",
        "NAP cohérent avec votre site web et répertoires",
      ];

  const monthlyManagement = isEn
    ? [
        "Weekly Google posts",
        "Professional response to all reviews",
        "Review acquisition strategy",
        "Maps position tracking",
        "Search and call analysis",
        "Monthly performance report",
      ]
    : [
        "Publications hebdomadaires sur Google",
        "Réponse professionnelle à tous les avis",
        "Stratégie d'acquisition d'avis",
        "Suivi des positions sur Maps",
        "Analyse des recherches et des appels",
        "Rapport mensuel de performance",
      ];

  const processSteps = isEn
    ? [
        { num: "01", title: "Profile audit", desc: "We analyse the current state of your Google Business Profile: incomplete information, incorrect categories, outdated photos, unanswered reviews and NAP consistency with your website." },
        { num: "02", title: "Full optimisation", desc: "We complete and optimise all fields: description with local keywords, primary and secondary categories, business attributes, hours, services, prices and photos." },
        { num: "03", title: "Review strategy", desc: "We design and implement a review acquisition system: post-service email, QR code at the premises, team training. And we respond to all existing reviews." },
        { num: "04", title: "Management and monitoring", desc: "We publish weekly content on the profile, monitor local visibility metrics and send a monthly report with position evolution, calls and visits." },
      ]
    : [
        { num: "01", title: "Audit de la fiche", desc: "Nous analysons l'état actuel de votre Google Business Profile : informations incomplètes, catégories incorrectes, photos obsolètes, avis sans réponse et cohérence NAP avec votre site." },
        { num: "02", title: "Optimisation complète", desc: "Nous complétons et optimisons tous les champs : description avec mots-clés locaux, catégories primaire et secondaires, attributs d'entreprise, horaires, services, prix et photos." },
        { num: "03", title: "Stratégie d'avis", desc: "Nous concevons et mettons en œuvre le système d'acquisition d'avis : email post-service, QR code dans les locaux, formation de l'équipe. Et nous répondons à tous les avis existants." },
        { num: "04", title: "Gestion et suivi", desc: "Nous publions du contenu hebdomadaire sur la fiche, surveillons les métriques de visibilité locale et envoyons un rapport mensuel avec l'évolution des positions, appels et visites." },
      ];

  const sectors = isEn
    ? [
        { sector: "Home services", desc: "Plumbers, electricians, painters, locksmiths, renovation. The Local Pack is the first point of contact when the customer has an urgent need." },
        { sector: "Clinics and healthcare", desc: "Dentists, physiotherapists, psychologists, aesthetic clinics. Reviews are decisive in the patient's decision." },
        { sector: "Hospitality and restaurants", desc: "Restaurants, bars, hotels, cafés. Google Maps is the go-to directory for finding where to eat or stay." },
        { sector: "Local shops and retail", desc: "Physical stores that want to attract customers from their area. The profile shows hours, products and makes the visit easier." },
        { sector: "Professional services", desc: "Accountants, solicitors, consultants. The Maps presence reinforces trust and facilitates the first contact." },
        { sector: "Training centres", desc: "Academies, driving schools, language centres. Local searches for courses and training have high purchase intent." },
      ]
    : [
        { sector: "Services à domicile", desc: "Plombiers, électriciens, peintres, serruriers, rénovation. Le Local Pack est le premier point de contact lorsque le client a un besoin urgent." },
        { sector: "Cliniques et santé", desc: "Dentistes, kinésithérapeutes, psychologues, cliniques esthétiques. Les avis sont déterminants dans la décision du patient." },
        { sector: "Hôtellerie et restauration", desc: "Restaurants, bars, hôtels, cafés. Google Maps est le répertoire de référence pour trouver où manger ou dormir." },
        { sector: "Commerce local et retail", desc: "Magasins physiques qui veulent attirer des clients de leur zone. La fiche montre les horaires, produits et facilite la visite." },
        { sector: "Services professionnels", desc: "Comptables, avocats, consultants. La présence sur Maps renforce la confiance et facilite le premier contact." },
        { sector: "Centres de formation", desc: "Académies, auto-écoles, centres de langues. Les recherches locales de cours et formations ont une forte intention d'achat." },
      ];

  const benefits = isEn
    ? [
        { title: "Immediate visibility", desc: "Appear on Google Maps and in the Local Pack before organic results. It is the most visible digital showcase for local searches." },
        { title: "More direct calls", desc: "Customers call you or request directions directly from the profile without visiting your website. Less friction, more conversions." },
        { title: "Trust through reviews", desc: "A business with positive, actively managed reviews converts up to 3 times more than one without reviews or with unanswered criticism." },
      ]
    : [
        { title: "Visibilité immédiate", desc: "Apparaissez sur Google Maps et dans le Local Pack avant les résultats organiques. C'est la vitrine digitale la plus visible pour les recherches locales." },
        { title: "Plus d'appels directs", desc: "Les clients vous appellent ou demandent un itinéraire directement depuis la fiche sans visiter votre site. Moins de friction, plus de conversions." },
        { title: "Confiance grâce aux avis", desc: "Une entreprise avec des avis positifs gérés activement convertit jusqu'à 3 fois plus qu'une sans avis ou avec des critiques sans réponse." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Google Business Profile" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Appear when your customers" : "Apparaissez quand vos clients"}<br />
              <span className="text-accent-400">
                {isEn ? "are searching nearby" : "recherchent à proximité"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "46% of Google searches have local intent. If your Google Business Profile is not optimised, you are giving customers to your competition every single day."
                : "46% des recherches Google ont une intention locale. Si votre fiche Google Business Profile n'est pas optimisée, vous offrez des clients à votre concurrence chaque jour."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Optimise my profile" : "Optimiser ma fiche"}
            </a>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
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

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Why GBP matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why Google Business Profile is the most powerful local acquisition tool"
              : "Pourquoi Google Business Profile est l'outil d'acquisition locale le plus puissant"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "When someone searches for \"plumber in London\", \"dental clinic near me\" or \"Italian restaurant Madrid\", Google displays the Local Pack: the 3 businesses that appear on the map before any organic result. If you are not in those 3, you don't exist for that potential customer."
              : "Quand quelqu'un recherche « plombier à Paris », « clinique dentaire près de moi » ou « restaurant italien Madrid », Google affiche le Local Pack : les 3 entreprises qui apparaissent sur la carte avant tout résultat organique. Si vous n'êtes pas dans ces 3, vous n'existez pas pour ce client potentiel."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Google Business Profile is completely free, but most businesses have their profile half-completed, with no updated photos, unanswered reviews, no posts and incorrect information. This directly penalises their position on the map and destroys customer trust before they even contact you."
              : "Google Business Profile est totalement gratuit, mais la plupart des entreprises ont leur fiche à moitié remplie, sans photos mises à jour, sans réponse aux avis, sans publications et avec des informations incorrectes. Cela pénalise directement leur position sur la carte et détruit la confiance du client avant même qu'il vous contacte."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "A well-optimised and actively managed profile generates 3x more website visits, more direct calls and more route requests — which are the actions most correlated with real customers. The ROI of optimising Google Business Profile is among the highest of any local marketing action."
              : "Une fiche bien optimisée et gérée activement génère 3 fois plus de visites sur le site web, plus d'appels directs et plus de demandes d'itinéraire — ce sont les actions les plus corrélées avec de vrais clients. Le ROI de l'optimisation de Google Business Profile est parmi les plus élevés de toute action de marketing local."}
          </p>
        </section>

        {/* What's included — 2-column split */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "What's included" : "Ce qui est inclus"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">
                {isEn ? "Initial optimisation" : "Optimisation initiale"}
              </h3>
              <ul className="space-y-3">
                {initialOptimisation.map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">
                {isEn ? "Monthly management" : "Gestion mensuelle"}
              </h3>
              <ul className="space-y-3">
                {monthlyManagement.map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "How we work" : "Comment nous travaillons"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Which type of business needs this most?" : "Pour quel type d'entreprise est-ce indispensable ?"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "Google Business Profile is especially critical for businesses with local customers or that provide services in a specific geographic area:"
              : "Google Business Profile est particulièrement critique pour les entreprises ayant des clients locaux ou qui fournissent des services dans une zone géographique spécifique :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((s) => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Why Google Business Profile is key for your local business"
              : "Pourquoi Google Business Profile est clé pour votre entreprise locale"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about Google Business Profile"
              : "Questions fréquentes sur Google Business Profile"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Focus on your business" : "Concentrez-vous sur votre entreprise"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We put the focus on making sure customers find you. Tell us your situation and we'll explain how to improve your local visibility."
              : "Nous mettons l'accent sur le fait que les clients vous trouvent. Parlez-nous de votre situation et nous vous expliquerons comment améliorer votre visibilité locale."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`${lang}-gbp`} />
          </div>
        </section>
      </div>

      <RelatedArticles
        category="SEO"
        title={isEn ? "More about local search positioning" : "Plus sur le positionnement local"}
      />
    </>
  );
}
