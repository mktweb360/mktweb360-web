import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Chatbot for Online Stores: The Complete Guide to Selling More and Serving Better in 2026"
      : "Chatbot pour boutique en ligne : le guide complet pour vendre plus et mieux servir en 2026",
    description: isEn
      ? "A chatbot for your online store can handle enquiries 24/7, recover abandoned carts, answer product questions and manage order status. Complete guide with real cases for 2026."
      : "Un chatbot pour votre boutique en ligne peut traiter les demandes 24h/24, récupérer les paniers abandonnés, répondre aux questions produits et gérer le statut des commandes. Guide complet avec cas réels pour 2026.",
    alternates: alternatesFor(`/${lang}/chatbot-for-online-store/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/chatbot-for-online-store/`,
    },
    openGraph: {
      title: isEn
        ? "Chatbot for Online Stores: The Complete Guide to Selling More and Serving Better in 2026 | Mkt Web 360"
        : "Chatbot pour boutique en ligne : le guide complet pour vendre plus et mieux servir en 2026 | Mkt Web 360",
      description: isEn
        ? "A chatbot for your online store can handle enquiries 24/7, recover abandoned carts, answer product questions and manage order status. Complete guide with real cases for 2026."
        : "Un chatbot pour votre boutique en ligne peut traiter les demandes 24h/24, récupérer les paniers abandonnés, répondre aux questions produits et gérer le statut des commandes. Guide complet avec cas réels pour 2026.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Can the chatbot handle complaints and returns?",
          a: "It can manage the start of the process and provide information about the returns policy. For returns that require assessment or exceptions, the right approach is to escalate to the human team with the full conversation context.",
        },
        {
          q: "Does it work on mobile?",
          a: "Yes. Modern chatbots are designed to work correctly on mobile devices, which account for more than 60% of traffic in most online stores.",
        },
        {
          q: "Can the chatbot speak multiple languages?",
          a: "Current AI models are multilingual by default. A chatbot can respond in the language the user writes in without additional configuration, although the training content should be in the relevant languages.",
        },
        {
          q: "How long does it take to be ready?",
          a: "A basic implementation can be live in 2–3 weeks. With full catalogue and order integration, the typical timeframe is 4–6 weeks depending on the complexity of the store.",
        },
      ]
    : [
        {
          q: "Le chatbot peut-il gérer les réclamations et les retours ?",
          a: "Il peut gérer le début du processus et fournir des informations sur la politique de retour. Pour les retours nécessitant une évaluation ou des exceptions, la bonne approche est d'escalader vers l'équipe humaine avec le contexte complet de la conversation.",
        },
        {
          q: "Fonctionne-t-il sur mobile ?",
          a: "Oui. Les chatbots modernes sont conçus pour fonctionner correctement sur les appareils mobiles, qui représentent plus de 60 % du trafic dans la plupart des boutiques en ligne.",
        },
        {
          q: "Le chatbot peut-il parler plusieurs langues ?",
          a: "Les modèles IA actuels sont multilingues par défaut. Un chatbot peut répondre dans la langue que l'utilisateur utilise sans configuration supplémentaire, bien que le contenu d'entraînement doive être dans les langues pertinentes.",
        },
        {
          q: "Combien de temps faut-il pour qu'il soit prêt ?",
          a: "Une implémentation basique peut être opérationnelle en 2 à 3 semaines. Avec une intégration complète du catalogue et des commandes, le délai habituel est de 4 à 6 semaines selon la complexité de la boutique.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Chatbot for online store" : "Chatbot pour boutique en ligne" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "E-commerce" : "E-commerce"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Chatbot for Online Stores: The Complete Guide to Selling More and Serving Better in 2026"
            : "Chatbot pour boutique en ligne : le guide complet pour vendre plus et mieux servir en 2026"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A chatbot for your online store can handle enquiries around the clock, recover abandoned carts, answer product questions and manage order status. A well-integrated conversational assistant is now part of the standard setup for any serious e-commerce operation. This guide explains what to expect and how to do it right."
            : "Un chatbot pour votre boutique en ligne peut traiter les demandes 24h/24, récupérer les paniers abandonnés, répondre aux questions sur les produits et gérer le statut des commandes. Un assistant conversationnel bien intégré fait aujourd'hui partie du standard pour tout e-commerce sérieux. Ce guide explique à quoi s'attendre et comment bien le faire."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "E-commerce continues to grow rapidly across Europe. In that context, customer service is no longer an extra — it is part of the sales funnel. A well-designed chatbot does not just answer questions; it pushes conversions that would otherwise be lost."
            : "L'e-commerce continue de croître rapidement à travers l'Europe. Dans ce contexte, le service client n'est plus un extra — c'est une partie de l'entonnoir de vente. Un chatbot bien conçu ne se contente pas de répondre aux questions ; il pousse des conversions qui autrement seraient perdues."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What a chatbot can do in an online store"
              : "Ce qu'un chatbot peut faire dans une boutique en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The list is longer than it might seem. A chatbot can answer product questions (sizes, materials, compatibility), inform customers about order status by querying the system in real time, help find the right item within the catalogue and recover abandoned carts by opening a conversation at the right moment."
              : "La liste est plus longue qu'il n'y paraît. Un chatbot peut répondre aux questions sur les produits (tailles, matières, compatibilité), informer les clients du statut d'une commande en interrogeant le système en temps réel, aider à trouver le bon article dans le catalogue et récupérer les paniers abandonnés en engageant une conversation au bon moment."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "It also covers after-sales: changes, delivery times, billing questions. With the right implementation, up to 75% of enquiries are resolved automatically, without any intervention from your team. That percentage is what changes the economics of customer service in a high-volume store."
              : "Il couvre également l'après-vente : échanges, délais de livraison, questions de facturation. Avec la bonne implémentation, jusqu'à 75 % des demandes sont résolues automatiquement, sans intervention de votre équipe. Ce pourcentage est ce qui change l'économie du service client dans une boutique à fort volume."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why the generic chatbot fails in e-commerce"
              : "Pourquoi le chatbot générique échoue dans l'e-commerce"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot that does not know your catalogue is a search engine in chat format — and a worse one at that. When a customer asks if a product is available in another colour or when their order will arrive, a generic assistant cannot answer because it is not connected to your data."
              : "Un chatbot qui ne connaît pas votre catalogue est un moteur de recherche au format chat — et encore moins bon. Quand un client demande si un produit est disponible dans une autre couleur ou quand sa commande arrivera, un assistant générique ne peut pas répondre car il n'est pas connecté à vos données."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In e-commerce, the chatbot's usefulness is directly proportional to its integration. It needs to read stock, orders and catalogue to be more than decorative. That is why, before contracting any solution, having the store on a solid platform foundation is essential."
              : "Dans l'e-commerce, l'utilité du chatbot est directement proportionnelle à son intégration. Il a besoin d'accéder au stock, aux commandes et au catalogue pour être plus que décoratif. C'est pourquoi, avant de contracter une solution, il est essentiel d'avoir la boutique sur une base plateforme solide."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Integration with the main e-commerce platforms"
              : "Intégration avec les principales plateformes e-commerce"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The good news is that the most widely used platforms are well supported. WooCommerce, with a 48.6% share of e-commerce, has mature connectors that allow the chatbot to access products and orders without excessive custom development. Shopify, PrestaShop and Shopware offer equivalent pathways."
              : "La bonne nouvelle est que les plateformes les plus utilisées sont bien supportées. WooCommerce, avec 48,6 % de part du marché e-commerce, dispose de connecteurs matures qui permettent au chatbot d'accéder aux produits et commandes sans développements sur mesure excessifs. Shopify, PrestaShop et Shopware offrent des voies équivalentes."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The integration is what determines what level of chatbot you can have. A store with a well-structured catalogue and good data architecture can reach the actionable level with less friction. Prior SEO and structure work pays double: it organises the store for search engines and for the chatbot at the same time."
              : "L'intégration est ce qui détermine quel niveau de chatbot vous pouvez avoir. Une boutique avec un catalogue bien structuré et une bonne architecture de données peut atteindre le niveau actionnable avec moins de friction. Le travail préalable de SEO et de structure paie double : il organise la boutique pour les moteurs de recherche et pour le chatbot en même temps."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Real data on the impact in e-commerce"
              : "Données réelles sur l'impact dans l'e-commerce"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The impact is measured on two fronts. The first is load reduction: when up to three in four enquiries are resolved automatically, the human team stops firefighting repetitive issues and concentrates on the conversations that sell or retain customers."
              : "L'impact se mesure sur deux fronts. Le premier est la réduction de la charge : quand jusqu'à trois demandes sur quatre sont résolues automatiquement, l'équipe humaine cesse de gérer des problèmes répétitifs et se concentre sur les conversations qui vendent ou fidélisent."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The second is conversion. A customer who receives an immediate answer to the question that was holding them back — the delivery time, a size, the returns policy — buys at that moment instead of abandoning the site. That is where the chatbot drives revenue directly."
              : "Le second est la conversion. Un client qui reçoit une réponse immédiate à la question qui le freinait — le délai de livraison, une taille, la politique de retour — achète à ce moment-là au lieu d'abandonner le site. C'est là que le chatbot génère directement du chiffre d'affaires."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "GDPR compliance for the e-commerce chatbot"
              : "Conformité RGPD pour le chatbot e-commerce"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In e-commerce the chatbot handles personal data almost by definition: names, addresses, order numbers. That puts it squarely under the GDPR. The processing of that data must be transparent, with a clear legal basis and information to the user about what is done with what they write."
              : "Dans l'e-commerce, le chatbot traite des données personnelles presque par définition : noms, adresses, numéros de commande. Cela le place directement sous le RGPD. Le traitement de ces données doit être transparent, avec une base juridique claire et une information à l'utilisateur sur ce qui est fait avec ce qu'il écrit."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Added to this is the EU AI Act, whose transparency obligations are mandatory from August 2026. In practice, your chatbot must disclose that it is an AI and comply with data regulations. This is not an optional formality — it is a condition for operating without legal risk."
              : "À cela s'ajoute l'AI Act européen, dont les obligations de transparence sont obligatoires à partir d'août 2026. En pratique, votre chatbot doit indiquer qu'il est une IA et respecter la réglementation sur les données. Ce n'est pas une formalité optionnelle : c'est une condition pour opérer sans risque juridique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How much does it cost to implement a chatbot in an online store"
              : "Combien coûte l'implémentation d'un chatbot dans une boutique en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The cost depends on the level. At the basic end, a managed FAQ chatbot starts at around €149/month. At the advanced end, with catalogue and order integration and actionable capability, the monthly fee sits at around €249–299/month, to which a setup cost is usually added."
              : "Le coût dépend du niveau. À l'extrémité basique, un chatbot FAQ géré commence à environ 149 €/mois. À l'extrémité avancée, avec l'intégration catalogue et commandes et la capacité d'action, l'abonnement mensuel se situe autour de 249 à 299 €/mois, auquel s'ajoute généralement un coût de mise en place."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The right way to look at the number is not as a cost but as a return: how many sales does it rescue and how many hours of customer service does it save. In a store with volume, the break-even point is reached quickly. Choosing the right level for your reality is the decision that carries the most weight in that equation."
              : "La bonne façon de regarder ce chiffre n'est pas comme une dépense, mais comme un retour : combien de ventes récupère-t-il et combien d'heures de service client économise-t-il. Dans une boutique avec du volume, le seuil de rentabilité est atteint rapidement. Choisir le bon niveau pour votre réalité est la décision qui a le plus de poids dans cette équation."}
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
      <RelatedArticles currentSlug="chatbot-for-online-store" />
    </>
  );
}
