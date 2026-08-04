import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Online Reputation Management for Businesses | Mkt Web 360"
      : "Gestion de la Réputation en Ligne pour Entreprises | Mkt Web 360",
    description: isEn
      ? "Professional online reputation management. Review monitoring and management on Google and Trustpilot. Build trust and attract more customers."
      : "Gestion professionnelle de la réputation en ligne. Surveillance et gestion des avis sur Google et Trustpilot. Renforcez la confiance et attirez plus de clients.",
    alternates: alternatesFor(`/${lang}/online-reputation/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-reputation/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "Review monitoring on Google, Trustpilot and other platforms",
        "Professional response to negative reviews",
        "Strategy to generate more positive reviews",
        "Fake review removal request management",
        "Monthly reputation report",
        "Brand mention alerts across the web",
      ]
    : [
        "Surveillance des avis sur Google, Trustpilot et autres plateformes",
        "Réponse professionnelle aux avis négatifs",
        "Stratégie pour générer plus d'avis positifs",
        "Gestion des demandes de suppression d'avis faux",
        "Rapport mensuel de réputation",
        "Alertes de mentions de marque sur le web",
      ];

  const metrics = isEn
    ? [
        { value: "Google", label: "reviews management" },
        { value: "Trustpilot", label: "and other platforms" },
        { value: "Strategy", label: "to generate reviews" },
        { value: "Monthly", label: "reputation report" },
      ]
    : [
        { value: "Google", label: "gestion des avis" },
        { value: "Trustpilot", label: "et autres plateformes" },
        { value: "Stratégie", label: "pour générer des avis" },
        { value: "Mensuel", label: "rapport de réputation" },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Reputation audit", desc: "We analyse the current state of your digital image: existing reviews, average rating, mentions on social media and review sites, and results that appear when searching for your brand on Google." },
        { num: "02", title: "Action plan", desc: "We define the strategy: which negative reviews can be removed, how to respond to existing ones, which acquisition system to implement, and which image improvement actions are a priority." },
        { num: "03", title: "Active management", desc: "We respond to all reviews, process removals where applicable, implement the new review acquisition system and continuously monitor your brand mentions." },
        { num: "04", title: "Monthly report", desc: "You receive a monthly report with the evolution of your average rating, number of new reviews, mentions detected and the impact on your local positioning in Google Maps." },
      ]
    : [
        { num: "01", title: "Audit de réputation", desc: "Nous analysons l'état actuel de votre image numérique : avis existants, note moyenne, mentions sur les réseaux sociaux et sites d'opinion, et résultats qui apparaissent lors de la recherche de votre marque sur Google." },
        { num: "02", title: "Plan d'action", desc: "Nous définissons la stratégie : quels avis négatifs peuvent être supprimés, comment répondre aux existants, quel système d'acquisition mettre en place et quelles actions d'amélioration d'image sont prioritaires." },
        { num: "03", title: "Gestion active", desc: "Nous répondons à tous les avis, traitons les suppressions lorsque c'est possible, mettons en œuvre le système d'acquisition de nouveaux avis et surveillons continuellement les mentions de votre marque." },
        { num: "04", title: "Rapport mensuel", desc: "Vous recevez un rapport mensuel avec l'évolution de votre note moyenne, le nombre de nouveaux avis, les mentions détectées et l'impact sur votre positionnement local dans Google Maps." },
      ];

  const sectors = isEn
    ? [
        { sector: "Clinics & healthcare", desc: "Patients research doctors, dentists and therapists before booking. A low rating or unanswered reviews can mean losing dozens of new patients every month." },
        { sector: "Hospitality & restaurants", desc: "94% of diners check reviews before booking. On Tripadvisor, Google and similar platforms, active reputation management is directly proportional to occupancy." },
        { sector: "Professional services", desc: "Lawyers, advisors, consultants. Your online reputation is the digital equivalent of word of mouth. A visible bad review can negate months of investment in lead generation." },
        { sector: "Local & retail businesses", desc: "Physical shops with better reputations on Google Maps receive more visits. Average rating and number of reviews directly influence local positioning." },
        { sector: "E-commerce", desc: "Product and store reviews are the main conversion factor in online purchases. We manage reputation on Google as well as marketplaces and review platforms." },
        { sector: "Training centres", desc: "Parents and students research thoroughly before enrolment. The online reputation of academies, schools and language centres directly influences enrolment rates." },
      ]
    : [
        { sector: "Cliniques et santé", desc: "Les patients recherchent les médecins, dentistes et thérapeutes avant de prendre rendez-vous. Une faible note ou des avis sans réponse peut signifier perdre des dizaines de nouveaux patients chaque mois." },
        { sector: "Hôtellerie et restauration", desc: "94% des convives consultent les avis avant de réserver. Sur Tripadvisor, Google et plateformes similaires, la gestion active de la réputation est directement proportionnelle au taux d'occupation." },
        { sector: "Services professionnels", desc: "Avocats, conseillers, consultants. Votre réputation en ligne est l'équivalent numérique du bouche à oreille. Un mauvais avis visible peut annuler des mois d'investissement en génération de leads." },
        { sector: "Commerce local et retail", desc: "Les boutiques physiques avec une meilleure réputation sur Google Maps reçoivent plus de visites. La note moyenne et le nombre d'avis influencent directement le positionnement local." },
        { sector: "E-commerce", desc: "Les avis sur les produits et la boutique sont le principal facteur de conversion dans les achats en ligne. Nous gérons la réputation sur Google ainsi que sur les marketplaces et plateformes d'opinion." },
        { sector: "Centres de formation", desc: "Les parents et étudiants recherchent minutieusement avant de s'inscrire. La réputation en ligne des académies, écoles et centres de langues influence directement le taux d'inscription." },
      ];

  const faqs = isEn
    ? [
        { q: "Can you remove negative Google reviews?", a: "Reviews can only be removed if they violate Google's policies: false content, spam, conflict of interest or inappropriate language. We process the removal request with Google when applicable. For the rest, the best strategy is to respond professionally and generate a volume of positive reviews that dilutes the impact of the negative ones." },
        { q: "How long does it take to improve online reputation?", a: "First visible results are usually seen within 60-90 days: improved average rating, more recent reviews and professional responses to all existing ones. Improvement in Google Maps local positioning as a result of better reputation takes between 3 and 6 months." },
        { q: "What if I receive a fake negative review from a competitor?", a: "It is more common than it seems. We document the situation, file the complaint with Google with available evidence and apply the most appropriate response while it is resolved. We also advise you on the legal actions available if the damage is significant." },
        { q: "Do you manage reputation on social media too?", a: "Yes. We monitor mentions on Instagram, Facebook, X (Twitter) and LinkedIn, as well as industry forums and review websites. Google review management is the core of the service, but monitoring is complete across all channels where your brand may be mentioned." },
      ]
    : [
        { q: "Pouvez-vous supprimer des avis négatifs sur Google ?", a: "Les avis ne peuvent être supprimés que s'ils violent les politiques de Google : contenu faux, spam, conflit d'intérêts ou langage inapproprié. Nous traitons la demande de suppression auprès de Google lorsque c'est applicable. Pour le reste, la meilleure stratégie est de répondre professionnellement et de générer un volume d'avis positifs qui dilue l'impact des négatifs." },
        { q: "Combien de temps faut-il pour améliorer la réputation en ligne ?", a: "Les premiers résultats visibles sont généralement observés dans les 60-90 jours : amélioration de la note moyenne, plus d'avis récents et réponses professionnelles à tous les existants. L'amélioration du positionnement local dans Google Maps suite à une meilleure réputation prend entre 3 et 6 mois." },
        { q: "Que se passe-t-il si je reçois un faux avis négatif d'un concurrent ?", a: "C'est plus courant qu'il n'y paraît. Nous documentons la situation, déposons la plainte auprès de Google avec les preuves disponibles et appliquons la réponse la plus appropriée pendant la résolution. Nous vous conseillons également sur les actions légales disponibles si le préjudice est significatif." },
        { q: "Gérez-vous aussi la réputation sur les réseaux sociaux ?", a: "Oui. Nous surveillons les mentions sur Instagram, Facebook, X (Twitter) et LinkedIn, ainsi que les forums et sites d'opinion du secteur. La gestion des avis Google est le cœur du service, mais la surveillance est complète sur tous les canaux où votre marque peut être mentionnée." },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Online Reputation" : "Réputation en ligne" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Your online reputation" : "Votre réputation en ligne"}<br />
              <span className="text-accent-400">
                {isEn ? "is your first impression" : "est votre première impression"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Your online reputation is the first thing potential customers see before contacting you. We manage and improve your company's digital image so that first impressions work in your favour."
                : "Votre réputation en ligne est la première chose que voient les clients potentiels avant de vous contacter. Nous gérons et améliorons l'image numérique de votre entreprise pour que les premières impressions jouent en votre faveur."}
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

      {/* Editorial section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why online reputation defines your sales"
              : "Pourquoi la réputation en ligne définit vos ventes"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "93% of consumers read online reviews before making a purchasing decision. A single unanswered negative review can cost you dozens of potential customers. And it's not just about Google — mentions on social networks, forums and directories form an image that the user builds in seconds before deciding whether to trust your company."
              : "93% des consommateurs lisent des avis en ligne avant de prendre une décision d'achat. Un seul avis négatif sans réponse peut vous coûter des dizaines de clients potentiels. Et il ne s'agit pas seulement de Google — les mentions sur les réseaux sociaux, les forums et les annuaires forment une image que l'utilisateur construit en quelques secondes avant de décider s'il fait confiance à votre entreprise."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Online reputation is not a passive asset — it requires active management and strategy. Companies that respond to all their reviews, positive and negative, generate up to 45% more trust than those that do not. And those that maintain a constant flow of recent reviews rank better in Google Maps than those with many old reviews and no activity."
              : "La réputation en ligne n'est pas un actif passif — elle nécessite une gestion active et une stratégie. Les entreprises qui répondent à tous leurs avis, positifs et négatifs, génèrent jusqu'à 45% plus de confiance que celles qui ne le font pas. Et celles qui maintiennent un flux constant d'avis récents se positionnent mieux dans Google Maps que celles qui ont de nombreux anciens avis sans activité."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "We manage both the reactive part — responding to reviews professionally, including negative ones — and the proactive part: generating a review acquisition system that works automatically and sustainably. The goal is for any potential customer who searches for your company to find a trustworthy image before the first contact."
              : "Nous gérons à la fois la partie réactive — répondre aux avis de manière professionnelle, y compris les négatifs — et la partie proactive : générer un système d'acquisition d'avis qui fonctionne automatiquement et de manière durable. L'objectif est que tout client potentiel qui recherche votre entreprise trouve une image de confiance avant le premier contact."}
          </p>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "How we work" : "Comment nous travaillons"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "For which types of business is online reputation critical?"
              : "Pour quels types d'entreprises la réputation en ligne est-elle critique ?"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "Online reputation impacts every business, but it is especially decisive in sectors where trust is the main barrier to entry:"
              : "La réputation en ligne impacte toutes les entreprises, mais elle est particulièrement déterminante dans les secteurs où la confiance est la principale barrière d'entrée :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((s) => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about online reputation"
              : "Questions fréquentes sur la réputation en ligne"}
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
            {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
          </h2>
          <p className="text-primary-200">
            {isEn ? "Tell us about your project. We respond within 24 hours." : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-reputation`} />
        </div>
      </section>

      <RelatedArticles
        category="Online Reputation"
        title={isEn ? "More about reputation and digital presence" : "En savoir plus sur la réputation et la présence digitale"}
      />
    </>
  );
}
