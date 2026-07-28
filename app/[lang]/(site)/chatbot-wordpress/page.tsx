import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Chatbot for WordPress: How to Install It, What to Avoid and What to Expect"
      : "Chatbot pour WordPress : comment l'installer, ce qu'il faut éviter et ce qu'il faut attendre",
    description: isEn
      ? "WordPress has dozens of chatbot plugins. Most are not worth the time it takes to test them. An honest guide on what genuinely works and how to implement a useful chatbot on a WordPress website in 2026."
      : "WordPress dispose de dizaines de plugins de chatbot. La plupart ne valent pas le temps qu'il faut pour les tester. Un guide honnête sur ce qui fonctionne vraiment et comment implémenter un chatbot utile sur un site WordPress en 2026.",
    alternates: alternatesFor(`/${lang}/chatbot-wordpress/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/chatbot-wordpress/`,
    },
    openGraph: {
      title: isEn
        ? "Chatbot for WordPress: How to Install It, What to Avoid and What to Expect | Mkt Web 360"
        : "Chatbot pour WordPress : comment l'installer, ce qu'il faut éviter et ce qu'il faut attendre | Mkt Web 360",
      description: isEn
        ? "WordPress has dozens of chatbot plugins. Most are not worth the time it takes to test them. An honest guide on what genuinely works and how to implement a useful chatbot on a WordPress website in 2026."
        : "WordPress dispose de dizaines de plugins de chatbot. La plupart ne valent pas le temps qu'il faut pour les tester. Un guide honnête sur ce qui fonctionne vraiment et comment implémenter un chatbot utile sur un site WordPress en 2026.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Does the chatbot affect website loading speed?",
          a: "It depends on the implementation. A heavy plugin that processes AI locally can affect Core Web Vitals, especially on shared hosting. An external widget that loads asynchronously has minimal impact on loading speed.",
        },
        {
          q: "Is it compatible with WooCommerce?",
          a: "A well-integrated chatbot can connect with WooCommerce to query stock, orders and customer data. This requires a specific integration, not just installing a generic plugin.",
        },
        {
          q: "Does it work with any WordPress theme?",
          a: "The chatbot widget loads as JavaScript in the footer of the site, regardless of the theme. It should work with any well-coded theme, although there may be occasional conflicts with very heavy themes or certain JavaScript optimisation plugins.",
        },
        {
          q: "How much does it cost to maintain per month?",
          a: "A managed chatbot service for WordPress typically costs between €149 and €299/month, depending on the level of functionality and the volume of conversations.",
        },
      ]
    : [
        {
          q: "Le chatbot affecte-t-il la vitesse de chargement du site ?",
          a: "Cela dépend de l'implémentation. Un plugin lourd qui traite l'IA localement peut affecter les Core Web Vitals, surtout sur un hébergement partagé. Un widget externe qui se charge de manière asynchrone a un impact minimal sur la vitesse de chargement.",
        },
        {
          q: "Est-il compatible avec WooCommerce ?",
          a: "Un chatbot bien intégré peut se connecter à WooCommerce pour interroger le stock, les commandes et les données client. Cela nécessite une intégration spécifique, pas seulement l'installation d'un plugin générique.",
        },
        {
          q: "Fonctionne-t-il avec n'importe quel thème WordPress ?",
          a: "Le widget du chatbot se charge en JavaScript dans le pied de page du site, indépendamment du thème. Il devrait fonctionner avec n'importe quel thème bien codé, bien qu'il puisse y avoir des conflits ponctuels avec des thèmes très lourds ou certains plugins d'optimisation JavaScript.",
        },
        {
          q: "Combien coûte la maintenance par mois ?",
          a: "Un service de chatbot géré pour WordPress coûte généralement entre 149 et 299 €/mois, selon le niveau de fonctionnalité et le volume de conversations.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Chatbot for WordPress" : "Chatbot pour WordPress" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Chatbot for WordPress: How to Install It, What to Avoid and What to Expect"
            : "Chatbot pour WordPress : comment l'installer, ce qu'il faut éviter et ce qu'il faut attendre"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "WordPress has dozens of chatbot plugins and most are not worth the time it takes to test them. This honest guide explains what genuinely works, what mistakes to avoid and how to implement a useful chatbot without damaging your site's loading speed."
            : "WordPress dispose de dizaines de plugins de chatbot et la plupart ne valent pas le temps qu'il faut pour les tester. Ce guide honnête explique ce qui fonctionne vraiment, quelles erreurs éviter et comment implémenter un chatbot utile sans compromettre la vitesse de chargement de votre site."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "WordPress powers around 59% of CMS-based websites. That popularity has a downside: an ecosystem saturated with plugins that promise 'AI chatbot' and deliver little. Before installing the first one that appears in the search results, it is worth understanding what separates a useful chatbot from yet another plugin that slows down your site."
            : "WordPress propulse environ 59 % des sites web utilisant un CMS. Cette popularité a un revers : un écosystème saturé de plugins qui promettent un « chatbot IA » et livrent peu. Avant d'installer le premier qui apparaît dans les résultats de recherche, il vaut la peine de comprendre ce qui sépare un chatbot utile d'un plugin de plus qui ralentit votre site."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The problem with WordPress chatbot plugins"
              : "Le problème avec les plugins de chatbot WordPress"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The WordPress directory is full of solutions. Tidio, for example, has more than 80,000 installations. Numbers like that inspire confidence, but also hide a problem: many of these plugins do the same thing, resolve little and compete to be installed even when they do not fit the business."
              : "Le répertoire WordPress est plein de solutions. Tidio, par exemple, dépasse les 80 000 installations. Ces chiffres inspirent confiance, mais cachent aussi un problème : beaucoup de ces plugins font la même chose, résolvent peu et se disputent les installations même quand ils ne correspondent pas à l'activité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Most remain at the most basic level: a form disguised as a chat or a message inbox. Testing one after another wastes hours and leaves the impression that 'chatbots do not work', when the problem is not the technology but the choice. Telling the wheat from the chaff is the first step."
              : "La plupart restent au niveau le plus basique : un formulaire déguisé en chat ou une boîte de réception de messages. Les tester l'un après l'autre consume des heures et laisse l'impression que « les chatbots ne fonctionnent pas », alors que le problème n'est pas la technologie mais le choix. Distinguer le bon grain de l'ivraie est la première étape."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What distinguishes a useful chatbot from a generic plugin"
              : "Ce qui distingue un chatbot utile d'un plugin quelconque"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The difference lies in knowledge and connection. A generic plugin responds with rigid rules or generic information. A useful chatbot is trained on your content and understands what the visitor is asking, even if they phrase it imprecisely."
              : "La différence réside dans la connaissance et la connexion. Un plugin quelconque répond avec des règles rigides ou des informations génériques. Un chatbot utile est entraîné sur votre contenu et comprend ce que demande le visiteur, même s'il le formule imprécisément."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The second factor is integration. A chatbot that only displays text is a leaflet; one that queries data, logs leads or escalates to a person when appropriate is a tool. That quality leap is the same one that separates a website that merely exists from one that actually works."
              : "Le deuxième facteur est l'intégration. Un chatbot qui affiche seulement du texte est un dépliant ; un qui interroge des données, enregistre des leads ou escalade vers une personne quand c'est approprié est un outil. Ce saut de qualité est le même qui sépare un site web qui existe seulement d'un qui travaille vraiment."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How a well-integrated chatbot works in WordPress"
              : "Comment fonctionne un chatbot bien intégré dans WordPress"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The correct architecture does not put the intelligence inside WordPress. The core of the chatbot lives in an external SaaS service, where language is processed and knowledge is stored, and in WordPress only a lightweight plugin is installed that acts as a bridge. That widget loads as JavaScript in the footer, without overloading the server."
              : "La bonne architecture ne met pas l'intelligence à l'intérieur de WordPress. Le cœur du chatbot vit dans un service SaaS externe, où le langage est traité et la connaissance est stockée, et dans WordPress seulement un plugin léger est installé qui agit comme pont. Ce widget se charge en JavaScript dans le pied de page, sans surcharger le serveur."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This separation is what protects performance. The heavy work happens externally; your site only displays the chat window. It is also the approach that harnesses AI for marketing without turning your WordPress into an AI server it is not equipped to handle."
              : "Cette séparation est ce qui protège les performances. Le travail lourd se passe à l'extérieur ; votre site affiche seulement la fenêtre de chat. C'est également l'approche qui exploite l'IA pour le marketing sans transformer votre WordPress en serveur d'intelligence artificielle pour lequel il n'est pas équipé."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Steps to implement a chatbot that works on your WordPress site"
              : "Étapes pour implémenter un chatbot qui fonctionne sur votre site WordPress"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The process, done well, follows seven steps. First, define what you want the chatbot to resolve and what enquiries you receive today. Second, choose a service with an external core rather than a plugin that does everything internally. Third, train it with your real content: services, prices, terms."
              : "Le processus, bien fait, suit sept étapes. Premièrement, définir ce que vous voulez que le chatbot résolve et quelles demandes vous recevez aujourd'hui. Deuxièmement, choisir un service avec un noyau externe plutôt qu'un plugin qui fait tout en interne. Troisièmement, l'entraîner avec votre contenu réel : services, prix, conditions."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Fourth, install the bridge plugin and connect it. Fifth, design the escalation mechanism to a person for when the chatbot cannot answer. Sixth, test with real conversations before going live. And seventh, measure and adjust during the first few weeks. Understanding what a business chatbot is helps make better decisions at each of these steps."
              : "Quatrièmement, installer le plugin pont et le connecter. Cinquièmement, concevoir le mécanisme d'escalade vers une personne pour quand le chatbot ne sait pas répondre. Sixièmement, tester avec de vraies conversations avant le lancement. Et septièmement, mesurer et ajuster pendant les premières semaines. Comprendre ce qu'est un chatbot d'entreprise aide à prendre de meilleures décisions à chacune de ces étapes."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The most common mistakes when implementing a chatbot on WordPress"
              : "Les erreurs les plus courantes lors de l'implémentation d'un chatbot sur WordPress"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "There are five recurring failures. The first is choosing a plugin that processes AI locally and penalises speed, especially on shared hosting. The second is not training it with your own content and leaving generic responses. The third is not designing the escalation to a person, so the user gets stuck."
              : "Il y a cinq défaillances récurrentes. La première est de choisir un plugin qui traite l'IA localement et pénalise la vitesse, surtout sur un hébergement partagé. La deuxième est de ne pas l'entraîner avec votre propre contenu et de laisser des réponses génériques. La troisième est de ne pas concevoir l'escalade vers une personne, de sorte que l'utilisateur reste bloqué."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The fourth is forgetting the legal transparency requirement: the chatbot must disclose that it is an AI. And the fifth is launching it without testing with real cases, discovering the gaps with live customers. Avoiding these five mistakes is, in practice, the difference between a chatbot that adds value and one that has to be uninstalled within a fortnight."
              : "La quatrième est d'oublier l'exigence de transparence légale : le chatbot doit indiquer qu'il est une IA. Et la cinquième est de le lancer sans le tester avec des cas réels, en découvrant les lacunes avec les clients en direct. Éviter ces cinq erreurs est, en pratique, la différence entre un chatbot qui apporte de la valeur et un qu'il faut désinstaller en deux semaines."}
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
      <RelatedArticles currentSlug="chatbot-wordpress" />
    </>
  );
}
