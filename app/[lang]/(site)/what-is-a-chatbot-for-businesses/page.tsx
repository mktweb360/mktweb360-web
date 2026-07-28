import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "What Is a Business Chatbot and Why You Need One in 2026"
      : "Qu'est-ce qu'un chatbot pour entreprises et pourquoi en avez-vous besoin en 2026",
    description: isEn
      ? "A business chatbot is no longer technology reserved for large corporations. In 2026, SMEs that automate their customer service with AI reduce costs, capture more leads and sell more. Complete guide."
      : "Un chatbot d'entreprise n'est plus réservé aux grandes structures. En 2026, les PME qui automatisent leur service client avec l'IA réduisent leurs coûts, captent plus de leads et vendent plus. Guide complet.",
    alternates: alternatesFor(`/${lang}/what-is-a-chatbot-for-businesses/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/what-is-a-chatbot-for-businesses/`,
    },
    openGraph: {
      title: isEn
        ? "What Is a Business Chatbot and Why You Need One in 2026 | Mkt Web 360"
        : "Qu'est-ce qu'un chatbot pour entreprises et pourquoi en avez-vous besoin en 2026 | Mkt Web 360",
      description: isEn
        ? "A business chatbot is no longer technology reserved for large corporations. In 2026, SMEs that automate their customer service with AI reduce costs, capture more leads and sell more. Complete guide."
        : "Un chatbot d'entreprise n'est plus réservé aux grandes structures. En 2026, les PME qui automatisent leur service client avec l'IA réduisent leurs coûts, captent plus de leads et vendent plus. Guide complet.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "How much does a business chatbot cost?",
          a: "It depends on the level of sophistication. A basic FAQ chatbot can start from around £130/month with a managed platform. An actionable assistant connected to a CRM and product catalogue may require a setup fee of £250–450 plus a monthly fee of £170–260.",
        },
        {
          q: "How long does it take to go live?",
          a: "A well-implemented level-1 chatbot can be live in 2–3 weeks. Levels 2 and 3 require between 4 and 8 weeks depending on the complexity of your business systems.",
        },
        {
          q: "Will the chatbot replace my customer service team?",
          a: "No. The right model is hybrid: the chatbot handles the volume of repetitive enquiries so the human team can focus on conversations that genuinely require judgement, empathy or decision-making.",
        },
        {
          q: "Does it work for any industry?",
          a: "Yes, although with different depths of application. The sectors where ROI is most immediate are e-commerce, hospitality, clinics and health, professional services, real estate, and any business with a high volume of repetitive enquiries.",
        },
        {
          q: "What happens when the chatbot cannot answer?",
          a: "A good chatbot has a clear escalation mechanism: when it recognises it does not have the necessary information, it says so explicitly and offers options to speak with a person. This behaviour must be designed and tested before going live.",
        },
      ]
    : [
        {
          q: "Combien coûte un chatbot pour entreprise ?",
          a: "Cela dépend du niveau de sophistication. Un chatbot FAQ basique peut démarrer à partir de 149 €/mois avec une plateforme gérée. Un assistant actionnable connecté à un CRM et à un catalogue de produits peut nécessiter des frais de mise en place de 300 à 500 € plus un abonnement mensuel de 199 à 299 €.",
        },
        {
          q: "Combien de temps faut-il pour le mettre en service ?",
          a: "Un chatbot de niveau 1 bien implémenté peut être opérationnel en 2 à 3 semaines. Les niveaux 2 et 3 nécessitent entre 4 et 8 semaines selon la complexité des systèmes de l'entreprise.",
        },
        {
          q: "Le chatbot va-t-il remplacer mon équipe de service client ?",
          a: "Non. Le bon modèle est hybride : le chatbot gère le volume des demandes répétitives pour que l'équipe humaine puisse se concentrer sur les conversations qui nécessitent vraiment du jugement, de l'empathie ou des prises de décision.",
        },
        {
          q: "Fonctionne-t-il dans n'importe quel secteur ?",
          a: "Oui, bien qu'avec différents niveaux d'application. Les secteurs où le ROI est le plus immédiat sont l'e-commerce, l'hôtellerie, les cliniques et la santé, les services professionnels, l'immobilier, et toute entreprise avec un volume élevé de demandes répétitives.",
        },
        {
          q: "Que se passe-t-il quand le chatbot ne sait pas répondre ?",
          a: "Un bon chatbot dispose d'un mécanisme d'escalade clair : lorsqu'il reconnaît qu'il n'a pas l'information nécessaire, il le dit explicitement et propose des options pour parler à une personne. Ce comportement doit être conçu et testé avant le lancement.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "What is a business chatbot" : "Qu'est-ce qu'un chatbot d'entreprise" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "What Is a Business Chatbot and Why You Need One in 2026"
            : "Qu'est-ce qu'un chatbot pour entreprises et pourquoi en avez-vous besoin en 2026"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A business chatbot is no longer the preserve of large corporations. In 2026, SMEs that automate their customer service with AI reduce costs, capture more leads and sell more. This guide explains what it really is, what levels exist and why you can no longer ignore it."
            : "Un chatbot d'entreprise n'est plus réservé aux grandes structures. En 2026, les PME qui automatisent leur service client avec l'IA réduisent leurs coûts, captent plus de leads et vendent plus. Ce guide explique ce que c'est vraiment, quels niveaux existent et pourquoi vous ne pouvez plus l'ignorer."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "For years, 'chatbot' was synonymous with those rigid forms that only understood three phrases and frustrated everyone who tried to use them. That era is over. With more than 800 million people using ChatGPT every week, users are now accustomed to conversing with a machine that understands natural language. And they expect the same when they write to your business."
            : "Pendant des années, « chatbot » était synonyme de ces formulaires rigides qui ne comprenaient que trois phrases et frustraient quiconque tentait de les utiliser. Cette époque est révolue. Avec plus de 800 millions de personnes utilisant ChatGPT chaque semaine, les utilisateurs sont désormais habitués à converser avec une machine qui comprend le langage naturel. Et ils attendent la même chose quand ils écrivent à votre entreprise."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why the business chatbot has changed in the past two years"
              : "Pourquoi le chatbot d'entreprise a changé au cours des deux dernières années"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The leap is not one of degree but of category. Language models have turned chatbots into assistants capable of understanding what a person means even if they phrase it poorly, with spelling mistakes or ambiguously. Users no longer need to guess the exact keyword."
              : "Le saut n'est pas de degré, mais de catégorie. Les modèles de langage ont transformé les chatbots en assistants capables de comprendre ce que veut dire une personne, même si elle le formule mal, avec des fautes d'orthographe ou de façon ambiguë. L'utilisateur n'a plus besoin de deviner le mot-clé exact."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The figure that best summarises the change is the mass adoption of ChatGPT: 800 million weekly users have normalised conversation with AI. When someone writes to your website, they are not expecting a menu of buttons — they expect an answer. That expectation obliges every business to rethink how it responds."
              : "Le chiffre qui résume le mieux ce changement est l'adoption massive de ChatGPT : 800 millions d'utilisateurs hebdomadaires ont normalisé la conversation avec l'IA. Quand quelqu'un écrit à votre site web, il n'attend pas un menu de boutons — il attend une réponse. Cette attente oblige toute entreprise à repenser sa façon de répondre."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What types of business chatbot exist"
              : "Quels types de chatbots d'entreprise existent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Not all chatbots do the same thing. It is useful to think in terms of four capability levels, each with a different cost and value. Level 1 answers frequently asked questions: opening hours, location, prices. Level 2 knows your business in depth because it has been trained on your content and can explain services, nuances and particular cases."
              : "Tous les chatbots ne font pas la même chose. Il est utile de penser en termes de quatre niveaux de capacité, chacun avec un coût et une valeur différents. Le niveau 1 répond aux questions fréquentes : horaires, localisation, tarifs. Le niveau 2 connaît votre activité en profondeur car il est entraîné sur votre contenu et peut expliquer les services, les nuances et les cas particuliers."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Level 3 is actionable: it does not just inform, it executes. It books an appointment, logs a lead in the CRM or checks the status of an order. Level 4 goes a step further and recommends: it understands what the customer needs and guides them towards the right product or service, as a good sales rep would. Choosing the right level is a business decision, not a technical one."
              : "Le niveau 3 est actionnable : il n'informe pas seulement, il exécute. Il réserve un rendez-vous, enregistre un lead dans le CRM ou consulte le statut d'une commande. Le niveau 4 va encore plus loin et recommande : il comprend ce dont le client a besoin et l'oriente vers le bon produit ou service, comme le ferait un bon commercial. Choisir le bon niveau est une décision commerciale, pas technique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The problem with the generic chatbot everyone will try to sell you"
              : "Le problème du chatbot générique que tout le monde va essayer de vous vendre"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In the coming months you will be offered dozens of 'AI chatbots'. Most are the same generic platform with your logo on top. A generic chatbot replies with information from the internet or with whatever the vendor decided to load, and it shows: vague answers, errors on business details, and loss of trust."
              : "Dans les prochains mois, on vous proposera des dizaines de « chatbots IA ». La plupart sont la même plateforme générique avec votre logo dessus. Un chatbot générique répond avec des informations d'internet ou avec ce que le prestataire a décidé de charger, et ça se voit : réponses vagues, erreurs sur les détails de votre activité, perte de confiance."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The real difference lies in training. A chatbot trained on your own content — your services, your terms, your way of working — responds as a member of your team would. The tool is only as good as the context you give it."
              : "La vraie différence réside dans l'entraînement. Un chatbot entraîné sur votre propre contenu — vos services, vos conditions, votre façon de travailler — répond comme le ferait un membre de votre équipe. L'outil ne vaut que ce que vaut le contexte qu'on lui donne."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What a chatbot can automate for your business"
              : "Ce qu'un chatbot peut automatiser pour votre entreprise"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The use cases are broader than most imagine. In customer service, it handles the bulk of repetitive enquiries that currently consume your team's hours. In lead capture, it qualifies and registers leads while you sleep. In scheduling, it manages appointments without back-and-forth phone calls."
              : "Les cas d'usage sont plus larges que la plupart ne l'imaginent. Dans le service client, il gère le gros des demandes répétitives qui consomment actuellement les heures de votre équipe. Dans la captation de leads, il qualifie et enregistre les prospects pendant que vous dormez. Dans la gestion des agendas, il gère les rendez-vous sans appels téléphoniques croisés."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In e-commerce, it handles catalogue queries, informs customers about order status and provides after-sales support. The key is that each of these tasks, well automated, frees up human time for what genuinely requires a person."
              : "Dans l'e-commerce, il traite les questions sur le catalogue, informe les clients du statut de leur commande et assure le support après-vente. L'essentiel est que chacune de ces tâches, bien automatisée, libère du temps humain pour ce qui nécessite vraiment une personne."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The numbers that justify the investment"
              : "Les chiffres qui justifient l'investissement"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The underlying argument is straightforward: a well-implemented chatbot handles a volume of enquiries that, if handled by people, would have a growing cost. It does not replace the team — it absorbs the repetition. And it does so 24 hours a day, without shifts or waiting times."
              : "L'argument de fond est simple : un chatbot bien implémenté traite un volume de demandes qui, s'il était géré par des personnes, aurait un coût croissant. Il ne remplace pas l'équipe — il absorbe la répétition. Et il le fait 24 heures sur 24, sans rotation ni temps d'attente."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "When each enquiry answered in time can become a sale or a qualified lead, the return is not just in hours saved but in opportunities that are currently lost because nobody responded in time. That is the calculation worth making before dismissing it on price."
              : "Quand chaque demande répondue à temps peut se transformer en vente ou en lead qualifié, le retour ne réside pas seulement dans les heures économisées, mais dans les opportunités que l'on perd actuellement faute de réponse rapide. C'est ce calcul qu'il convient de faire avant de l'écarter pour des raisons de prix."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Legal compliance: what you cannot ignore"
              : "Conformité légale : ce que vous ne pouvez pas ignorer"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Here is the part almost nobody tells you when trying to sell you a chatbot. Article 50 of the European AI Act comes into force in August 2026 and establishes concrete transparency obligations for systems that interact with people."
              : "Voici la partie que presque personne ne vous dira quand il essaiera de vous vendre un chatbot. L'article 50 du Règlement européen sur l'intelligence artificielle (AI Act) entre en vigueur en août 2026 et établit des obligations de transparence concrètes pour les systèmes qui interagissent avec des personnes."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In practice, your chatbot must meet four minimum requirements: clearly inform the user they are speaking with an AI and not a person, do so in a comprehensible way, do so at the moment of interaction, and respect the user's data protection rights. This is not an aesthetic detail — it is a legal obligation. Deploying a chatbot without having this resolved is unnecessary risk."
              : "En pratique, votre chatbot doit respecter quatre éléments minimaux : informer clairement l'utilisateur qu'il parle avec une IA et non avec une personne, le faire de manière compréhensible, le faire au moment de l'interaction, et respecter les droits de l'utilisateur en matière de traitement des données. Ce n'est pas un détail esthétique : c'est une obligation légale. Déployer un chatbot sans avoir résolu ce point, c'est s'exposer à un risque inutile."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
      <RelatedArticles currentSlug="what-is-a-chatbot-for-businesses" />
    </>
  );
}
