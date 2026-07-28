import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "24/7 Customer Service for SMEs: How to Achieve It Without Hiring More Staff"
      : "Service client 24h/24 pour PME : comment y parvenir sans recruter",
    description: isEn
      ? "Large companies have offered 24/7 customer service for years. In 2026, any SME can do the same with an AI chatbot, without expanding headcount. Here is how it works and what it costs."
      : "Les grandes entreprises offrent un service client 24h/24 depuis des années. En 2026, toute PME peut faire de même avec un chatbot IA, sans augmenter ses effectifs. Voici comment cela fonctionne et ce que cela coûte.",
    alternates: alternatesFor(`/${lang}/24-7-customer-service-smes/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/24-7-customer-service-smes/`,
    },
    openGraph: {
      title: isEn
        ? "24/7 Customer Service for SMEs: How to Achieve It Without Hiring More Staff | Mkt Web 360"
        : "Service client 24h/24 pour PME : comment y parvenir sans recruter | Mkt Web 360",
      description: isEn
        ? "Large companies have offered 24/7 customer service for years. In 2026, any SME can do the same with an AI chatbot, without expanding headcount. Here is how it works and what it costs."
        : "Les grandes entreprises offrent un service client 24h/24 depuis des années. En 2026, toute PME peut faire de même avec un chatbot IA, sans augmenter ses effectifs. Voici comment cela fonctionne et ce que cela coûte.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Do customers get frustrated talking to a bot?",
          a: "Frustration appears when the bot cannot help and does not escalate correctly. A bot that accurately answers the user's question does not generate frustration — it generates satisfaction, because the answer arrives immediately.",
        },
        {
          q: "How many conversations can the chatbot handle simultaneously?",
          a: "Unlimited. While a person can manage 2–3 simultaneous conversations with difficulty, the bot handles hundreds without any variation in response quality.",
        },
        {
          q: "What happens when the chatbot cannot answer?",
          a: "A well-configured bot says it does not have that information and offers alternatives: talking to a person, sending an email, or indicating that someone from the team will reply when available. It does not invent answers when it lacks information.",
        },
        {
          q: "In which languages can it operate?",
          a: "Modern language models are multilingual. A bot can respond in English, French or any other language without additional configuration, although the training content should be in the languages in which you want to operate with precision.",
        },
      ]
    : [
        {
          q: "Les clients se frustrent-ils en parlant à un bot ?",
          a: "La frustration apparaît quand le bot ne peut pas aider et n'escalade pas correctement. Un bot qui répond avec précision à la question de l'utilisateur ne génère pas de frustration — il génère de la satisfaction, car la réponse arrive immédiatement.",
        },
        {
          q: "Combien de conversations le chatbot peut-il gérer simultanément ?",
          a: "Illimitées. Alors qu'une personne peut gérer 2 à 3 conversations simultanées avec difficulté, le bot en gère des centaines sans que la qualité des réponses varie.",
        },
        {
          q: "Que se passe-t-il quand le chatbot ne sait pas répondre ?",
          a: "Un bot bien configuré dit qu'il n'a pas cette information et propose des alternatives : parler à une personne, envoyer un e-mail, ou indiquer que quelqu'un de l'équipe répondra dès que disponible. Il n'invente pas de réponses quand il n'a pas l'information.",
        },
        {
          q: "Dans quelles langues peut-il fonctionner ?",
          a: "Les modèles de langage modernes sont multilingues. Un bot peut répondre en français, anglais ou dans toute autre langue sans configuration supplémentaire, bien que le contenu d'entraînement doive être dans les langues dans lesquelles on veut opérer avec précision.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "24/7 customer service for SMEs" : "Service client 24h/24 pour PME" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "24/7 Customer Service for SMEs: How to Achieve It Without Hiring More Staff"
            : "Service client 24h/24 pour PME : comment y parvenir sans recruter"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Large companies have been offering 24-hour customer service for years. In 2026, any SME can do the same with an AI chatbot, without expanding headcount. This article explains how it works and what it costs."
            : "Les grandes entreprises offrent un service client 24 heures sur 24 depuis des années. En 2026, toute PME peut faire de même avec un chatbot IA, sans augmenter ses effectifs. Cet article explique comment cela fonctionne et ce que cela coûte."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "The customer who has a question at eleven at night does not wait until tomorrow — they go to a competitor. That is the silent leakage that many SMEs do not even measure. A well-planned chatbot closes that door without you having to hire anyone for the night shift."
            : "Le client qui a une question à onze heures du soir n'attend pas demain — il va chez un concurrent. C'est la fuite silencieuse que beaucoup de PME ne mesurent même pas. Un chatbot bien pensé ferme cette porte sans que vous ayez à recruter quelqu'un pour le service de nuit."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The real cost of not having out-of-hours support"
              : "Le coût réel de l'absence de support en dehors des heures ouvrables"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Up to 70% of shopping carts are abandoned, and a significant proportion occurs because the customer has a question that nobody resolves in the moment. When the answer comes too late, the interest has already cooled and the sale is lost."
              : "Jusqu'à 70 % des paniers d'achat sont abandonnés, et une proportion importante survient parce que le client a une question que personne ne résout sur le moment. Quand la réponse arrive trop tard, l'intérêt s'est déjà refroidi et la vente est perdue."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Response speed is decisive: responding within the first 5 minutes can multiply conversion by 9 compared to responding hours later. Outside business hours, without an automated system, that window simply does not exist and every late-night enquiry is an opportunity that evaporates."
              : "La vitesse de réponse est déterminante : répondre dans les 5 premières minutes peut multiplier la conversion par 9 par rapport à répondre des heures plus tard. En dehors des heures ouvrables, sans système automatisé, cette fenêtre n'existe tout simplement pas et chaque demande nocturne est une opportunité qui s'évapore."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why a chatbot is different from live chat and an on-call phone line"
              : "Pourquoi un chatbot est différent du live chat et de la permanence téléphonique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Live chat depends on someone being online, and an on-call phone line depends on someone being available at any hour. Both have a human limit: fatigue, schedules and cost. The chatbot does not have that limit."
              : "Le live chat dépend de la présence de quelqu'un en ligne, et une permanence téléphonique dépend de la disponibilité de quelqu'un à toute heure. Les deux ont une limite humaine : la fatigue, les horaires et le coût. Le chatbot n'a pas cette limite."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot responds instantly, at any hour, regardless of how many people write at the same time. It does not replace human attention for complex cases, but it takes care of everything that does not require judgement — which is usually the majority of the volume."
              : "Un chatbot répond instantanément, à toute heure, peu importe combien de personnes écrivent en même temps. Il ne remplace pas l'attention humaine pour les cas complexes, mais il s'occupe de tout ce qui ne nécessite pas de jugement — ce qui représente généralement la majorité du volume."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What types of enquiry a chatbot can resolve autonomously"
              : "Quels types de demandes un chatbot peut résoudre de manière autonome"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A well-configured chatbot resolves between 65% and 70% of enquiries on its own: opening hours, prices, availability, order status, FAQs, service conditions or steps to complete a purchase. These are repetitive questions that consume a lot of the team's time and that the bot handles in seconds."
              : "Un chatbot bien configuré résout de manière autonome entre 65 % et 70 % des demandes : horaires, prix, disponibilité, statut de commande, questions fréquentes, conditions de service ou étapes pour finaliser un achat. Ce sont des questions répétitives qui consomment beaucoup de temps à l'équipe et que le bot traite en quelques secondes."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "That percentage frees the human team for what genuinely adds value: complex conversations, negotiations and delicate cases. In addition, many of those resolved enquiries turn into commercial opportunities."
              : "Ce pourcentage libère l'équipe humaine pour ce qui apporte vraiment de la valeur : les conversations complexes, les négociations et les cas délicats. De plus, beaucoup de ces demandes résolues se transforment en opportunités commerciales."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The hybrid model: chatbot + human"
              : "Le modèle hybride : chatbot + humain"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The approach that works best is not chatbot or person, but chatbot and person. The bot handles the first contact, resolves what it can and, when it detects that the enquiry requires it, escalates to a person with the full conversation context already collected."
              : "L'approche qui fonctionne le mieux n'est pas chatbot ou personne, mais chatbot et personne. Le bot gère le premier contact, résout ce qu'il peut et, quand il détecte que la demande le nécessite, escalade vers une personne avec tout le contexte de la conversation déjà recueilli."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This way the customer is never left without a response and the team only intervenes when it is really needed. The result is a service that combines the immediacy of the machine with human judgement, and that scales without driving up costs."
              : "Ainsi, le client n'est jamais sans réponse et l'équipe n'intervient que lorsque c'est vraiment nécessaire. Le résultat est un service qui combine l'immédiateté de la machine avec le jugement humain, et qui se développe sans faire exploser les coûts."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How much real saving can a chatbot generate"
              : "Quelle économie réelle un chatbot peut-il générer"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The typical saving sits between €600 and €900 per month in staff time, as the bot absorbs the volume of repetitive enquiries that previously occupied the team for hours. Added to this direct saving is the effect on sales: fewer abandoned carts and more enquiries answered in time."
              : "L'économie typique se situe entre 600 et 900 euros par mois en temps de personnel, le bot absorbant le volume de demandes répétitives qui occupaient auparavant l'équipe pendant des heures. À cette économie directe s'ajoute l'effet sur les ventes : moins de paniers abandonnés et plus de demandes traitées à temps."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The calculation is usually favourable from the first few months, because the cost of a chatbot is fixed and modest compared to the growing cost of expanding headcount. And unlike a new hire, the bot does not need continuous training and does not only cover one shift."
              : "Le calcul est généralement favorable dès les premiers mois, car le coût d'un chatbot est fixe et modeste par rapport au coût croissant de l'augmentation des effectifs. Et contrairement à un recrutement, le bot n'a pas besoin de formation continue et ne couvre pas seulement un service."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What to expect in the first 90 days"
              : "À quoi s'attendre dans les 90 premiers jours"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The implementation follows a three-phase curve over about 90 days. In the first weeks it calibrates: responses are adjusted based on your customers' real questions. Then comes the improvement phase, in which the bot resolves more and more enquiries correctly. Finally comes stabilisation, with the system working consistently."
              : "L'implémentation suit une courbe en trois phases sur environ 90 jours. Dans les premières semaines, il se calibre : les réponses sont ajustées en fonction des vraies questions de vos clients. Vient ensuite la phase d'amélioration, dans laquelle le bot résout de plus en plus de demandes correctement. Enfin vient la stabilisation, avec le système fonctionnant de manière cohérente."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Understanding this curve avoids frustrations. A chatbot is not perfect on day one; it reaches peak performance after an adjustment period. It is also worth keeping the legal aspects in mind to ensure the project complies from the outset."
              : "Comprendre cette courbe évite les frustrations. Un chatbot n'est pas parfait le premier jour ; il atteint ses meilleures performances après une période d'ajustement. Il convient également de garder à l'esprit les aspects juridiques pour s'assurer que le projet est conforme dès le début."}
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
      <RelatedArticles currentSlug="24-7-customer-service-smes" />
    </>
  );
}
