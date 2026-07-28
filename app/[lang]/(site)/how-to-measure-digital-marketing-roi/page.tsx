import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Measure the ROI of Your Digital Marketing Campaigns"
      : "Comment mesurer le ROI de vos campagnes de marketing digital",
    description: isEn
      ? "Learn how to calculate and measure the ROI of your digital marketing investments. Google Analytics 4, attribution, key metrics and mistakes to avoid."
      : "Apprenez à calculer et mesurer le ROI de vos investissements en marketing digital. Google Analytics 4, attribution, métriques clés et erreurs à éviter.",
    alternates: alternatesFor(`/${lang}/how-to-measure-digital-marketing-roi/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-measure-digital-marketing-roi/`,
    },
    openGraph: {
      title: isEn
        ? "How to Measure the ROI of Your Digital Marketing Campaigns | Mkt Web 360"
        : "Comment mesurer le ROI de vos campagnes de marketing digital | Mkt Web 360",
      description: isEn
        ? "Learn how to calculate and measure the ROI of your digital marketing investments. Google Analytics 4, attribution, key metrics and mistakes to avoid."
        : "Apprenez à calculer et mesurer le ROI de vos investissements en marketing digital. Google Analytics 4, attribution, métriques clés et erreurs à éviter.",
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
            {
              label: isEn
                ? "Measure Digital Marketing ROI"
                : "Mesurer le ROI marketing digital",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Analytics" : "Analytique"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to measure the ROI of your digital marketing campaigns step by step"
            : "Comment mesurer le ROI de vos campagnes de marketing digital étape par étape"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Investing in digital marketing without measuring the return is like driving with your eyes closed. This guide explains how to calculate ROI, which tools to use and which metrics truly matter."
            : "Investir dans le marketing digital sans mesurer le retour, c'est comme conduire les yeux fermés. Ce guide explique comment calculer le ROI, quels outils utiliser et quelles métriques comptent vraiment."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What is ROI in digital marketing and how is it calculated"
              : "Qu'est-ce que le ROI en marketing digital et comment le calculer"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "ROI stands for Return on Investment. In digital marketing, it measures how much economic benefit every pound invested in marketing actions generates. The formula is straightforward: ROI = (Revenue Generated − Investment) ÷ Investment × 100."
              : "ROI signifie Return on Investment, ou retour sur investissement. En marketing digital, il mesure combien de bénéfice économique génère chaque euro investi dans des actions marketing. La formule est simple : ROI = (Bénéfice généré − Investissement) ÷ Investissement × 100."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For example: if you invest £1,000 in Google Ads and those campaigns generate £4,000 in sales with a profit margin of 40% (£1,600 gross profit), the ROI is (1,600 − 1,000) ÷ 1,000 × 100 = 60%. That is, for every pound invested you recover £1.60 in profit."
              : "Par exemple : si vous investissez 1 000 € dans Google Ads et que ces campagnes génèrent 4 000 € de ventes avec une marge bénéficiaire de 40 % (1 600 € de bénéfice brut), le ROI est de (1 600 − 1 000) ÷ 1 000 × 100 = 60 %. C'est-à-dire que pour chaque euro investi, vous récupérez 1,60 € de bénéfice."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The practical problem is that calculating the 'revenue generated' by a marketing investment is not always straightforward. How do you know which sales came from which channel? What happens if a customer saw your ad, left and came back weeks later through organic search? This is where attribution models come in."
              : "Le problème pratique est que calculer le 'bénéfice généré' par un investissement marketing n'est pas toujours simple. Comment savoir quelles ventes viennent de quel canal ? Que se passe-t-il si un client a vu votre annonce, est parti et est revenu des semaines plus tard via la recherche organique ? C'est là qu'interviennent les modèles d'attribution."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to configure conversion tracking in GA4"
              : "Comment configurer le suivi des conversions dans GA4"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Google Analytics 4 (GA4) is the most powerful free tool for measuring digital marketing performance. But without correctly configuring conversion tracking, it only gives you traffic data — not business results."
              : "Google Analytics 4 (GA4) est l'outil gratuit le plus puissant pour mesurer la performance de votre marketing digital. Mais sans configurer correctement le suivi des conversions, il ne vous donne que des données de trafic — pas des résultats commerciaux."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The first step is to define what a conversion is for your business. It could be: a completed form, a phone call, a purchase in your online shop, a download or a minimum time spent on a key page. Each of these events must be configured in GA4 as a conversion."
              : "La première étape consiste à définir ce qu'est une conversion pour votre entreprise. Il peut s'agir d'un formulaire complété, d'un appel téléphonique, d'un achat dans votre boutique en ligne, d'un téléchargement ou d'un temps minimum passé sur une page clé. Chacun de ces événements doit être configuré dans GA4 comme une conversion."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The most robust way to configure event tracking is through Google Tag Manager (GTM). GTM is a free tool that allows you to add and manage tracking pixels and scripts on your website without modifying the code directly. With GTM you can track button clicks, form submissions, phone calls (with a tracking number) and any other relevant action."
              : "La façon la plus robuste de configurer le suivi des événements est via Google Tag Manager (GTM). GTM est un outil gratuit qui permet d'ajouter et de gérer des pixels de suivi et des scripts sur votre site web sans modifier le code directement. Avec GTM, vous pouvez suivre les clics sur les boutons, les envois de formulaires, les appels téléphoniques (avec un numéro de suivi) et toute autre action pertinente."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For e-commerce, GA4 has enhanced e-commerce tracking that records product impressions, add to cart, checkout initiation and completed purchase — allowing you to calculate the complete conversion funnel and the exact value of each channel."
              : "Pour le e-commerce, GA4 dispose d'un suivi e-commerce amélioré qui enregistre les impressions de produits, l'ajout au panier, l'initiation du paiement et l'achat complété — ce qui permet de calculer l'entonnoir de conversion complet et la valeur exacte de chaque canal."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Attribution: which channel gets credit for each sale"
              : "Attribution : quel canal reçoit le crédit pour chaque vente"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Attribution is the process of deciding which channel or touchpoint receives the 'credit' for a conversion. It is one of the most complex aspects of digital marketing analysis because customers rarely convert on their first contact with a brand."
              : "L'attribution est le processus qui consiste à décider quel canal ou point de contact reçoit le 'crédit' pour une conversion. C'est l'un des aspects les plus complexes de l'analyse du marketing digital car les clients convertissent rarement lors de leur premier contact avec une marque."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A typical customer might discover you through an Instagram ad, search for you on Google days later, read one of your blog articles, subscribe to your newsletter and finally purchase after receiving a promotional email. Which channel do you attribute that sale to?"
              : "Un client typique peut vous découvrir via une annonce Instagram, vous rechercher sur Google quelques jours plus tard, lire l'un de vos articles de blog, s'abonner à votre newsletter et finalement acheter après avoir reçu un e-mail promotionnel. À quel canal attribuez-vous cette vente ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "GA4 uses by default a data-driven attribution model that distributes credit among multiple touchpoints according to their real contribution to the conversion process. This model is more accurate than simplistic 'last click' or 'first click' models that overvalue one channel and underestimate others."
              : "GA4 utilise par défaut un modèle d'attribution basé sur les données qui distribue le crédit entre plusieurs points de contact selon leur contribution réelle au processus de conversion. Ce modèle est plus précis que les modèles simplistes de 'dernier clic' ou de 'premier clic' qui surévaluent un seul canal et sous-estiment les autres."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For SMEs with lower data volume, the 'last non-direct click' model remains useful: it assigns credit to the last channel the user used before converting, ignoring direct traffic. It is simple but gives a reasonably useful picture of which channels are last in 'closing' the conversion."
              : "Pour les PME avec moins de volume de données, le modèle de 'dernier clic non direct' reste utile : il attribue le crédit au dernier canal utilisé par l'utilisateur avant de convertir, en ignorant le trafic direct. C'est simple mais cela donne une image raisonnablement utile des canaux qui ferment la conversion en dernier."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "ROI by channel: SEO vs SEM vs social media"
              : "ROI par canal : SEO vs SEM vs réseaux sociaux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Each digital marketing channel has a different ROI profile, with different time horizons and cost structures."
              : "Chaque canal de marketing digital a un profil de ROI différent, avec des horizons temporels et des structures de coûts distincts."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "SEO:" : "SEO :"}</strong>{" "}
            {isEn
              ? "High initial investment (web development, content, link building), results that take between 3 and 12 months to appear, but ROI that accumulates over time and does not require recurring per-click investment. In the long term, SEO typically has the highest ROI of all digital channels for most sectors."
              : "Investissement initial élevé (développement web, contenu, link building), résultats qui mettent entre 3 et 12 mois à apparaître, mais un ROI qui s'accumule dans le temps et ne nécessite pas d'investissement récurrent par clic. À long terme, le SEO a généralement le ROI le plus élevé de tous les canaux digitaux pour la plupart des secteurs."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Google Ads (SEM):" : "Google Ads (SEA) :"}</strong>{" "}
            {isEn
              ? "More immediate and precisely measurable ROI, but it stops when investment stops. The cost per acquisition varies enormously by sector, but allows you to calculate ROI very directly: campaign cost divided by number of conversions."
              : "ROI plus immédiat et mesurable avec précision, mais qui cesse quand l'investissement s'arrête. Le coût par acquisition varie énormément selon le secteur, mais permet de calculer le ROI de façon très directe : coût de la campagne divisé par le nombre de conversions."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Social media:" : "Réseaux sociaux :"}</strong>{" "}
            {isEn
              ? "Direct ROI is harder to measure because many social media interactions are discovery (awareness) without immediate purchase intent. The real impact is usually measured in terms of brand awareness, trust and indirect traffic that converts in other channels."
              : "Le ROI direct est plus difficile à mesurer car de nombreuses interactions sur les réseaux sociaux sont de la découverte (notoriété) sans intention d'achat immédiate. L'impact réel se mesure généralement en termes de notoriété de marque, de confiance et de trafic indirect qui convertit dans d'autres canaux."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Email marketing:" : "Email marketing :"}</strong>{" "}
            {isEn
              ? "Historically the channel with the highest ROI. The cost is very low (tool + creation time) and the impact on conversions is direct and measurable. For businesses with an active subscriber list, email typically generates more revenue per pound invested than any other channel."
              : "Historiquement le canal avec le ROI le plus élevé. Le coût est très faible (outil + temps de création) et l'impact sur les conversions est direct et mesurable. Pour les entreprises avec une liste d'abonnés active, l'email génère généralement plus de revenus par euro investi que tout autre canal."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Mistakes that distort your metrics"
              : "Erreurs qui faussent vos métriques"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Not filtering internal traffic:"
                : "Ne pas filtrer le trafic interne :"}
            </strong>{" "}
            {isEn
              ? "Visits from your own team artificially inflate metrics. Configure filters in GA4 to exclude your office and agency IP addresses."
              : "Les visites de votre propre équipe gonflent artificiellement les métriques. Configurez des filtres dans GA4 pour exclure les adresses IP de votre bureau et de votre agence."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Counting unqualified leads as conversions:"
                : "Compter les leads non qualifiés comme des conversions :"}
            </strong>{" "}
            {isEn
              ? "A completed form is only a real conversion if the lead has real chances of becoming a customer. If 90% of your leads are junk, your real conversion rate is much lower than your reports suggest."
              : "Un formulaire complété n'est une vraie conversion que si le lead a de réelles chances de devenir client. Si 90 % de vos leads sont des spams, votre taux de conversion réel est bien inférieur à ce que disent les rapports."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Not considering long-term customer value (LTV):"
                : "Ne pas considérer la valeur client à long terme (LTV) :"}
            </strong>{" "}
            {isEn
              ? "If an average customer purchases 3 times a year for 2 years, their real value is not the first purchase but the cumulative total. Calculating ROI only on the first transaction undervalues channels that bring repeat customers."
              : "Si un client moyen achète 3 fois par an pendant 2 ans, sa valeur réelle n'est pas celle du premier achat mais le total cumulé. Calculer le ROI uniquement sur la première transaction sous-évalue les canaux qui amènent des clients récurrents."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Comparing channels across different time horizons:"
                : "Comparer des canaux sur des horizons temporels différents :"}
            </strong>{" "}
            {isEn
              ? "SEO has an ROI that accumulates over 12–24 months. Google Ads shows results in days. Comparing the ROI of both at 3 months is unfair to SEO and can lead to incorrect investment decisions."
              : "Le SEO a un ROI qui s'accumule sur 12 à 24 mois. Google Ads montre des résultats en quelques jours. Comparer le ROI des deux à 3 mois est injuste pour le SEO et peut conduire à des décisions d'investissement incorrectes."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to present marketing results to management"
              : "Comment présenter les résultats marketing à la direction"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The biggest challenge in digital marketing is not executing it well, but communicating its impact in a way that is understandable and relevant to whoever makes investment decisions. Reports full of technical metrics (bounce rate, CTR, CPC) mean nothing to a manager or business owner who simply wants to know whether marketing is generating business."
              : "Le plus grand défi du marketing digital n'est pas de l'exécuter correctement, mais de communiquer son impact de manière compréhensible et pertinente pour ceux qui prennent les décisions d'investissement. Les rapports remplis de métriques techniques (taux de rebond, CTR, CPC) ne signifient rien pour un directeur ou un propriétaire qui veut simplement savoir si le marketing génère du business."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A good marketing report for management must answer three questions: How many potential customers (leads) did we generate this month and from which channels? How many of those leads converted into customers and what revenue did they generate? How much did each acquired customer cost per channel (CAC)?"
              : "Un bon rapport marketing pour la direction doit répondre à trois questions : Combien de clients potentiels (leads) avons-nous générés ce mois-ci et depuis quels canaux ? Combien de ces leads ont converti en clients et quels revenus ont-ils générés ? Combien a coûté chaque client acquis par canal (CAC) ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "With those three metrics clearly stated, any decision-maker can understand whether marketing is working, which channel is performing best and where it makes sense to increase or reduce investment. Other metrics can exist as supporting data but should not be the focus of the strategic conversation."
              : "Avec ces trois métriques clairement exprimées, tout responsable peut comprendre si le marketing fonctionne, quel canal performe le mieux et où il est judicieux d'augmenter ou de réduire l'investissement. Les autres métriques peuvent exister comme données de support mais ne doivent pas être le centre de la conversation stratégique."}
          </p>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we will respond within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
    </>
  );
}
