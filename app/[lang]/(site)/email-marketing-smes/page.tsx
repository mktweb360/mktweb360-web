import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Email Marketing for SMEs: First Steps and Strategy Guide"
      : "Email Marketing pour les PME : Guide des Premiers Pas et Stratégie",
    description: isEn
      ? "Email marketing guide for SMEs. How to get started, which tools to use, how to build your list and design campaigns that convert. Real results."
      : "Guide d'email marketing pour les PME. Comment commencer, quels outils utiliser, comment construire votre liste et concevoir des campagnes qui convertissent. Résultats réels.",
    alternates: alternatesFor(`/${lang}/email-marketing-smes/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/email-marketing-smes/`,
    },
    openGraph: {
      title: isEn
        ? "Email Marketing for SMEs: First Steps and Strategy Guide | Mkt Web 360"
        : "Email Marketing pour les PME : Guide des Premiers Pas et Stratégie | Mkt Web 360",
      description: isEn
        ? "Email marketing guide for SMEs. How to get started, which tools to use, how to build your list and design campaigns that convert."
        : "Guide d'email marketing pour les PME. Comment commencer, quels outils utiliser, comment construire votre liste et concevoir des campagnes qui convertissent.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Email Marketing for SMEs" : "Email Marketing pour les PME" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Email Marketing" : "Email Marketing"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Email marketing for SMEs: a first-steps guide to start selling by email"
            : "Email marketing pour les PME : guide des premiers pas pour commencer à vendre par email"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Email marketing remains the channel with the highest ROI in digital marketing. This guide explains how to start from scratch, which tools to use and how to design campaigns that generate real results."
            : "L'email marketing reste le canal avec le meilleur ROI en marketing digital. Ce guide explique comment démarrer de zéro, quels outils utiliser et comment concevoir des campagnes qui génèrent des résultats réels."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Why email marketing still works in 2026"
                : "Pourquoi l'email marketing fonctionne encore en 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "There is a recurring myth in digital marketing: 'email is dead.' People have been saying this for 15 years, and every year email marketing proves the opposite. The average ROI of email marketing is £42 for every £1 invested, according to data from the Data & Marketing Association. No other digital channel comes close."
                : "Il y a un mythe récurrent dans le marketing digital : « l'email est mort ». On le dit depuis 15 ans, et chaque année l'email marketing prouve le contraire. Le ROI moyen de l'email marketing est de 42 € pour chaque euro investi, selon les données de la Data & Marketing Association. Aucun autre canal digital ne s'en approche."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The reason email works so well is structural: when someone gives you their email address, they are giving you permission to communicate with them directly. There is no social media algorithm deciding whether your message reaches them or not. There is no paying for each impression. The email lands in the subscriber's inbox — someone who has freely chosen to receive your communications."
                : "La raison pour laquelle l'email fonctionne si bien est structurelle : quand quelqu'un vous donne son adresse email, il vous donne la permission de communiquer avec lui directement. Il n'y a pas d'algorithme de réseau social qui décide si votre message arrive ou non. Il n'y a pas à payer pour chaque impression. L'email arrive dans la boîte de réception de l'abonné, qui a librement choisi de recevoir vos communications."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For an SME, email marketing also has the advantage of not requiring large budgets or specialist teams to get started. With current tools, a single person can manage an effective email marketing strategy with a few hours per month."
                : "Pour une PME, l'email marketing a aussi l'avantage de ne pas nécessiter de grands budgets ni d'équipes spécialisées pour commencer. Avec les outils actuels, une seule personne peut gérer une stratégie d'email marketing efficace avec quelques heures par mois."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "How to build your subscriber list from scratch"
                : "Comment construire votre liste d'abonnés de zéro"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The subscriber list is the most valuable asset in email marketing. A small but well-qualified list (people genuinely interested in what you offer) is infinitely more valuable than a large list of generic contacts."
                : "La liste d'abonnés est l'actif le plus précieux de l'email marketing. Une liste petite mais bien qualifiée (des personnes véritablement intéressées par ce que vous proposez) vaut infiniment plus qu'une grande liste de contacts génériques."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Form on your website:" : "Formulaire sur votre site web :"}</strong>{" "}
              {isEn
                ? "The most basic method. Place a subscription form in strategic locations on your site: the header, footer, after blog articles and as an exit-intent popup. The form text must clearly communicate what subscribers will receive and how often."
                : "La méthode la plus basique. Placez un formulaire d'inscription dans des endroits stratégiques de votre site : l'en-tête, le pied de page, après les articles de blog et comme popup d'intention de sortie. Le texte du formulaire doit clairement communiquer ce qu'ils recevront et à quelle fréquence."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Lead magnet:" : "Lead magnet :"}</strong>{" "}
              {isEn
                ? "Offer something of real value in exchange for the email address: a guide, a checklist, a template or a free tool relevant to your sector. A good lead magnet can multiply subscription rates by three or four times compared to a simple form."
                : "Offrez quelque chose de valeur réelle en échange de l'adresse email : un guide, une checklist, un modèle ou un outil gratuit pertinent pour votre secteur. Un bon lead magnet peut multiplier par trois ou quatre les taux d'inscription par rapport à un simple formulaire."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Existing clients:" : "Clients existants :"}</strong>{" "}
              {isEn
                ? "If you already have clients, ask for their explicit permission to subscribe them to your list. GDPR requires express consent, so do not import contacts without permission. But a personalised email to your best clients inviting them to subscribe to your newsletter has a very high conversion rate."
                : "Si vous avez déjà des clients, demandez leur permission explicite pour les inscrire à votre liste. Le RGPD requiert un consentement exprès, donc n'importez pas de contacts sans permission. Mais un email personnalisé à vos meilleurs clients les invitant à s'abonner à votre newsletter a un taux de conversion très élevé."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Physical form in your premises:" : "Formulaire physique dans votre local :"}</strong>{" "}
              {isEn
                ? "If you have a physical location, a tablet with a subscription form at the counter (with an incentive like a discount on the next purchase) can generate high-quality local subscribers."
                : "Si vous avez un établissement physique, une tablette avec un formulaire d'inscription au comptoir (avec un incentive comme une réduction sur le prochain achat) peut générer des abonnés locaux de haute qualité."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Email marketing tools for SMEs" : "Outils d'email marketing pour les PME"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "You do not need an expensive tool to get started. Email marketing platforms have free plans sufficient for an SME in its early stages."
                : "Vous n'avez pas besoin d'un outil coûteux pour commencer. Les plateformes d'email marketing ont des plans gratuits suffisants pour une PME dans ses premières étapes."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Mailchimp:</strong>{" "}
              {isEn
                ? "The best known. Free plan up to 500 contacts and 1,000 emails per month. Easy to use, good template editor, basic automations included. Sufficient for getting started."
                : "Le plus connu. Plan gratuit jusqu'à 500 contacts et 1 000 emails par mois. Facile à utiliser, bon éditeur de modèles, automatisations basiques incluses. Suffisant pour commencer."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Brevo (formerly Sendinblue):</strong>{" "}
              {isEn
                ? "Free plan with unlimited contacts and up to 300 emails per day. Very good value for money on paid plans. Includes SMS marketing and basic CRM."
                : "Plan gratuit avec contacts illimités et jusqu'à 300 emails par jour. Très bon rapport qualité-prix sur les plans payants. Inclut le SMS marketing et un CRM basique."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>MailerLite:</strong>{" "}
              {isEn
                ? "Free plan up to 1,000 subscribers. Very clean and intuitive interface. Good automation options and landing pages included."
                : "Plan gratuit jusqu'à 1 000 abonnés. Interface très propre et intuitive. Bonnes options d'automatisation et landing pages incluses."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>ActiveCampaign:</strong>{" "}
              {isEn
                ? "The most powerful option for growing SMEs. No free plan, but its integrated CRM and advanced automations make it especially valuable if you want to connect email marketing with the sales process."
                : "L'option la plus puissante pour les PME en croissance. Pas de plan gratuit, mais son CRM intégré et ses automatisations avancées le rendent particulièrement précieux si vous souhaitez connecter l'email marketing au processus de vente."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Types of emails your business should send" : "Types d'emails que votre entreprise doit envoyer"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "A solid email marketing strategy combines different types of emails with different objectives."
                : "Une stratégie d'email marketing solide combine différents types d'emails avec des objectifs différents."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Regular newsletter:" : "Newsletter périodique :"}</strong>{" "}
              {isEn
                ? "Regular value content (weekly, fortnightly or monthly). The objective is to maintain the relationship and position you as an authority. It does not sell directly, but builds trust that later converts."
                : "Contenu de valeur régulier (hebdomadaire, bimensuel ou mensuel). L'objectif est de maintenir la relation et de vous positionner comme référence. Il ne vend pas directement, mais construit la confiance qui convertit ensuite."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Welcome emails:" : "Emails de bienvenue :"}</strong>{" "}
              {isEn
                ? "The most important sequence. Emails sent in the first 24–48 hours after subscription have the highest open rates. Use them to introduce yourself, set expectations and offer the lead magnet if you promised one."
                : "La séquence la plus importante. Les emails envoyés dans les 24 à 48 premières heures après l'inscription ont les taux d'ouverture les plus élevés. Utilisez-les pour vous présenter, établir des attentes et offrir le lead magnet si vous en avez promis un."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Promotional emails:" : "Emails promotionnels :"}</strong>{" "}
              {isEn
                ? "Offers, launches, discounts. They should be used in moderation — if everything is a promotion, the list will disengage. The general rule is 80% value content, 20% commercial content."
                : "Offres, lancements, remises. Ils doivent être utilisés avec modération — si tout est une promotion, la liste se désengagera. La règle générale est 80 % de contenu de valeur, 20 % de contenu commercial."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>{isEn ? "Re-engagement emails:" : "Emails de réactivation :"}</strong>{" "}
              {isEn
                ? "For inactive subscribers or clients who have stopped buying. A personalised email with an incentive can reactivate a significant portion of these contacts."
                : "Pour les abonnés inactifs ou les clients qui ont arrêté d'acheter. Un email personnalisé avec un incentive peut réactiver une partie significative de ces contacts."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "How to write subject lines that get opened" : "Comment écrire des objets qui font ouvrir l'email"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The email subject line is what determines whether the subscriber opens or ignores your email. You can have the best content in the world, but if the subject line does not generate curiosity, the email will not be opened. The average open rate in email marketing is around 21%, but with good subject lines you can exceed 35–40%."
                : "L'objet de l'email est ce qui détermine si l'abonné ouvre ou ignore votre email. Vous pouvez avoir le meilleur contenu du monde, mais si l'objet ne génère pas de curiosité, l'email ne sera pas ouvert. Le taux d'ouverture moyen en email marketing est d'environ 21 %, mais avec de bons objets on peut dépasser les 35-40 %."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The elements that most influence opens are: personalisation (including the subscriber's name in the subject line improves opens), specificity (a concrete subject line works better than a vague one), curiosity (generating a question that can only be answered by opening the email) and genuine urgency (not manufactured)."
                : "Les éléments qui influencent le plus les ouvertures sont : la personnalisation (inclure le prénom de l'abonné dans l'objet améliore les ouvertures), la spécificité (un objet concret fonctionne mieux qu'un vague), la curiosité (générer une question à laquelle on ne peut répondre qu'en ouvrant l'email) et l'urgence genuíne (pas fabriquée)."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Avoid words that trigger spam filters: 'FREE', 'EARN MONEY', 'EXCLUSIVE OFFER' in capitals, excess exclamation marks. Always test two versions of the subject line (A/B test) with a small portion of your list before sending to the full list."
                : "Évitez les mots qui déclenchent les filtres anti-spam : « GRATUIT », « GAGNEZ DE L'ARGENT », « OFFRE EXCLUSIVE » en majuscules, excès de points d'exclamation. Testez toujours deux versions d'objet (test A/B) avec une petite partie de votre liste avant d'envoyer au total."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Email marketing metrics: what to measure and what to optimise"
                : "Métriques d'email marketing : que mesurer et qu'optimiser"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The main metrics you should monitor for each campaign are: open rate, click-through rate (CTR), conversion rate, bounce rate and unsubscribe rate."
                : "Les principales métriques que vous devez surveiller pour chaque campagne sont : taux d'ouverture, taux de clics (CTR), taux de conversion, taux de rebond (bounces) et taux de désabonnement."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The open rate measures interest in the subject line and brand recognition. If it consistently falls, review the quality of your list and the relevance of your subject lines. The click-through rate measures interest in the email content. If opens are good but clicks are low, the problem lies in the body of the email or the CTA."
                : "Le taux d'ouverture mesure l'intérêt pour l'objet et la reconnaissance de votre marque. S'il baisse constamment, vérifiez la qualité de votre liste et la pertinence de vos objets. Le taux de clics mesure l'intérêt pour le contenu de l'email. Si les ouvertures sont bonnes mais les clics faibles, le problème se trouve dans le corps de l'email ou dans le CTA."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The conversion rate is the metric that matters most for the business: how many people who opened the email end up taking the desired action (buying, booking, downloading). Optimise this by making the CTA clear, singular and easy to execute."
                : "Le taux de conversion est la métrique qui compte le plus pour l'entreprise : combien de personnes ayant ouvert l'email finissent par effectuer l'action souhaitée (acheter, réserver, télécharger). Optimisez cela en rendant le CTA clair, unique et facile à exécuter."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Do you need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "Tell us about your project and we will get back to you in less than 24 hours."
                : "Parlez-nous de votre projet et nous vous répondrons en moins de 24 heures."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Contact us" : "Nous contacter"}
              </a>
              <a
                href={`/${lang}/email-marketing-service/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See Email Marketing service" : "Voir le service Email Marketing"}
              </a>
            </div>
          </div>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
    </>
  );
}
