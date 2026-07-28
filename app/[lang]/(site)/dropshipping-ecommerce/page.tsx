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
      ? "Dropshipping Ecommerce with Revenue Sharing"
      : "Dropshipping et Ecommerce avec Participation aux Résultats",
    description: isEn
      ? "We build and manage your dropshipping online store with a hybrid model: fixed setup + monthly management + profit sharing. No stock risk. Real strategy."
      : "Nous créons et gérons votre boutique en ligne dropshipping avec un modèle hybride : setup fixe + gestion mensuelle + participation aux bénéfices. Sans risque de stock. Avec une vraie stratégie.",
    alternates: alternatesFor(`/${lang}/dropshipping-ecommerce/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/dropshipping-ecommerce/`,
    },
    openGraph: {
      title: isEn
        ? "Dropshipping Ecommerce with Revenue Sharing | Mkt Web 360"
        : "Dropshipping et Ecommerce avec Participation aux Résultats | Mkt Web 360",
      description: isEn
        ? "We build and manage your dropshipping online store: fixed setup + monthly management + profit sharing. No stock risk."
        : "Nous créons et gérons votre boutique en dropshipping : setup fixe + gestion mensuelle + participation aux bénéfices. Sans risque de stock.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "What is dropshipping and how does it work?",
          a: "Dropshipping is an ecommerce model where you sell products without holding physical stock. When a customer places an order in your store, the supplier ships the product directly to the customer. You earn the difference between the selling price and the supplier price. You need no warehouse, no stock investment and no own logistics management. The challenge lies in choosing the right niche, the right suppliers and having a marketing strategy that generates qualified traffic.",
        },
        {
          q: "Why a hybrid model rather than pure commission on sales?",
          a: "The pure sales commission model has an attribution problem: it is very difficult to determine how much of the sales is due to the agency's work and how much to other factors. The hybrid model — fixed setup + monthly management + bonus on net profit — is fairer for both parties: the client pays for the real work done each month, and the agency has an additional incentive when the business exceeds the profitability threshold. The bonus only applies when the business is already generating more than £2,000/€2,000/month in net profit, which guarantees the client is making money before paying more.",
        },
        {
          q: "How long does it take for a dropshipping store to become profitable?",
          a: "It depends on the niche, the marketing budget and the competition. With a well-executed strategy, the first sales can come within the first weeks. Consistent profitability — covering management costs and starting to generate net profit — is usually achieved between 3 and 6 months. Niches with less competition and higher margins (specialist products, mid-to-high price categories) reach profitability sooner.",
        },
        {
          q: "Which dropshipping suppliers do you use?",
          a: "We work primarily with European suppliers — BigBuy, Brandsgateway, sector-specialist suppliers — because they guarantee acceptable delivery times for the Spanish and European market, comply with EU import regulations and allow more sustainable margins than Asian suppliers. For the niche validation phase we may use AliExpress or mixed suppliers, but for scaling the model we always recommend European suppliers.",
        },
      ]
    : [
        {
          q: "Qu'est-ce que le dropshipping et comment ça fonctionne ?",
          a: "Le dropshipping est un modèle d'ecommerce où vous vendez des produits sans avoir de stock physique. Quand un client passe une commande dans votre boutique, le fournisseur envoie le produit directement au client. Vous gagnez la différence entre le prix de vente et le prix du fournisseur. Vous n'avez pas besoin d'entrepôt, ni d'investissement en stock, ni de gestion logistique propre. Le défi réside dans le choix du bon créneau, des bons fournisseurs et dans une stratégie marketing qui génère du trafic qualifié.",
        },
        {
          q: "Pourquoi un modèle hybride plutôt qu'une simple commission sur les ventes ?",
          a: "Le modèle de pure commission sur les ventes présente un problème d'attribution : il est très difficile de déterminer quelle part des ventes est due au travail de l'agence et quelle part à d'autres facteurs. Le modèle hybride — setup fixe + gestion mensuelle + bonus sur le bénéfice net — est plus juste pour les deux parties : le client paie pour le travail réel effectué chaque mois, et l'agence a une incitation supplémentaire quand l'entreprise dépasse le seuil de rentabilité. Le bonus ne s'applique que quand l'entreprise génère déjà plus de 2 000 €/mois de bénéfice net, ce qui garantit que le client gagne de l'argent avant de payer davantage.",
        },
        {
          q: "Combien de temps faut-il pour qu'une boutique dropshipping soit rentable ?",
          a: "Cela dépend du créneau, du budget marketing et de la concurrence. Avec une stratégie bien exécutée, les premières ventes peuvent arriver dans les premières semaines. La rentabilité consistante — couvrir les coûts de gestion et commencer à générer un bénéfice net — se réalise habituellement entre 3 et 6 mois. Les créneaux avec moins de concurrence et des marges plus élevées (produits spécialisés, catégories de prix moyen-élevé) atteignent la rentabilité plus tôt.",
        },
        {
          q: "Quels fournisseurs de dropshipping utilisez-vous ?",
          a: "Nous travaillons principalement avec des fournisseurs européens — BigBuy, Brandsgateway, des fournisseurs spécialisés par secteur — parce qu'ils garantissent des délais de livraison acceptables pour le marché espagnol et européen, respectent la réglementation d'importation de l'UE et permettent des marges plus durables que les fournisseurs asiatiques. Pour la phase de validation du créneau, nous pouvons utiliser AliExpress ou des fournisseurs mixtes, mais pour faire évoluer le modèle, nous recommandons toujours des fournisseurs européens.",
        },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Dropshipping with Revenue Sharing" : "Dropshipping avec Participation" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn
                ? "Dropshipping Ecommerce with Revenue Sharing: we build and manage your online store with no stock risk"
                : "Ecommerce Dropshipping avec Participation : nous créons et gérons votre boutique sans risque de stock"}
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We build and manage your dropshipping online store with a hybrid model: fixed setup, monthly management and profit sharing. No stock risk, with a real strategy."
                : "Nous créons et gérons votre boutique en ligne dropshipping avec un modèle hybride : setup fixe, gestion mensuelle et participation aux bénéfices. Sans risque de stock, avec une vraie stratégie."}
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
              src="/imagen-ecommerce-participacion.jpg"
              alt={isEn ? "Dropshipping ecommerce with revenue sharing" : "Ecommerce dropshipping avec participation aux résultats"}
              className="rounded-2xl shadow-2xl w-full object-cover hidden md:block"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "What dropshipping is and why the hybrid model changes the rules"
              : "Ce qu'est le dropshipping et pourquoi le modèle hybride change les règles"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Dropshipping is a business model where you sell products online without holding physical stock. When someone buys from your store, the supplier ships the product directly to the customer. You need no warehouse, no initial inventory investment and no own logistics management. The entry risk is much lower than in traditional ecommerce."
              : "Le dropshipping est un modèle d'entreprise où vous vendez des produits en ligne sans avoir de stock physique. Quand quelqu'un achète dans votre boutique, le fournisseur envoie le produit directement au client. Vous n'avez pas besoin d'entrepôt, ni d'investissement initial en inventaire, ni de gestion logistique propre. Le risque d'entrée est bien moindre que dans un ecommerce traditionnel."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The problem with poorly executed dropshipping is well known: saturated niches, margins too low, suppliers with unacceptable delivery times for the Spanish or European market, and a marketing strategy that goes no further than copying product listings. The hybrid model we propose starts from a real niche analysis, European suppliers with 2–5 day delivery times, a store built to convert, and an SEO and marketing strategy that generates traffic without depending on constant paid campaigns."
              : "Le problème du dropshipping mal exécuté est connu : niches saturées, marges trop faibles, fournisseurs avec des délais de livraison inacceptables pour le marché espagnol ou européen, et une stratégie marketing qui ne va pas au-delà de copier des fiches produit. Le modèle hybride que nous proposons part d'une analyse réelle du créneau, de fournisseurs européens avec des délais de 2 à 5 jours, d'une boutique construite pour convertir, et d'une stratégie SEO et marketing qui génère du trafic sans dépendre de campagnes payantes constantes."}
          </p>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "The revenue sharing model: how it works and what it means for you"
              : "Le modèle de participation aux résultats : comment ça fonctionne et ce que ça signifie pour vous"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The revenue sharing model works like this: you pay an initial setup to build the store, a monthly management fee for us to maintain and grow it, and an additional bonus when the business exceeds the profitability threshold. The setup covers the complete store creation. The monthly management fee of £400/€400 per month covers the real work we do each month: SEO, product page optimisation, supplier management, performance analysis and strategy adjustments."
              : "Le modèle de participation aux résultats fonctionne ainsi : vous payez un setup initial pour monter la boutique, une gestion mensuelle pour que nous la maintenions et la fassions croître, et un bonus supplémentaire quand l'entreprise dépasse le seuil de rentabilité. Le setup couvre la création complète de la boutique. La gestion mensuelle de 400 €/mois couvre le travail réel que nous faisons chaque mois : SEO, optimisation des fiches produit, gestion des fournisseurs, analyse des performances et ajustements de stratégie."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The 10% bonus on monthly net profit — calculated on revenue minus product cost and direct expenses — only applies when the business exceeds £2,000/€2,000 per month in net profit. This guarantees that before paying more, you are already making money. If the business doesn't exceed that threshold, you only pay the monthly management fee."
              : "Le bonus de 10 % sur le bénéfice net mensuel — calculé sur les revenus moins le coût du produit et les dépenses directes — ne s'applique que quand l'entreprise dépasse 2 000 €/mois de bénéfice net. Cela garantit qu'avant de payer davantage, vous gagnez déjà de l'argent. Si l'entreprise ne dépasse pas ce seuil, vous ne payez que la gestion mensuelle."}
          </p>
        </section>

        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "What the £1,500/€1,500 setup includes" : "Ce que le setup de 1 500 € inclut"}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The setup includes: niche analysis and margin potential validation with real suppliers; selection and integration of 2–3 European suppliers with agreed pricing; store creation in WooCommerce (preferred for SEO) or Shopify; payment gateway setup (Stripe, PayPal); initial catalogue import of 50–100 products with optimised listings; technical SEO configuration (URL structure, schema markup, page speed); and launch of Google Analytics 4 with conversion tracking."
              : "Le setup inclut : l'analyse du créneau et la validation du potentiel de marge avec de vrais fournisseurs ; la sélection et l'intégration de 2 à 3 fournisseurs européens avec accord de prix ; la création de la boutique sur WooCommerce (préféré pour le SEO) ou Shopify ; la configuration de la passerelle de paiement (Stripe, PayPal) ; l'importation du catalogue initial de 50 à 100 produits avec des fiches optimisées ; la configuration du SEO technique (structure des URL, schema markup, vitesse de chargement) ; et le lancement de Google Analytics 4 avec le suivi des conversions."}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Monthly management and results bonus" : "Gestion mensuelle et bonus de résultats"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The £400/€400/month management fee includes: catalogue updates with new products and optimisation of existing ones; continuous SEO improvement of product pages and categories; supplier relationship management (pricing, availability, incidents); monthly analysis of margins by product and pricing adjustments; and a monthly sales, margin and next-actions report."
              : "La gestion mensuelle de 400 €/mois inclut : la mise à jour du catalogue avec de nouveaux produits et l'optimisation des existants ; l'amélioration continue du SEO des fiches produit et des catégories ; la gestion des relations avec les fournisseurs (prix, disponibilité, incidents) ; l'analyse mensuelle des marges par produit et l'ajustement des prix ; et un rapport mensuel des ventes, marges et prochaines actions."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The 10% bonus on net profit applies from £2,000/€2,000 per month of net profit. Net profit is calculated as: total revenue minus product cost (supplier price + shipping) minus the monthly management fee. Paid advertising costs, if any, are also deducted. The calculation is done monthly with verifiable platform data."
              : "Le bonus de 10 % sur le bénéfice net s'applique à partir de 2 000 €/mois de bénéfice net. Le bénéfice net est calculé comme : revenus totaux moins le coût du produit (prix fournisseur + expédition) moins la quote-part mensuelle de gestion. Les dépenses de publicité payante, le cas échéant, sont également déduites. Le calcul est effectué mensuellement avec des données vérifiables de la plateforme."}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "What types of stores and niches we work with" : "Quels types de boutiques et de créneaux nous travaillons"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "We work niches with margins between 30% and 60%, demonstrable organic demand and available European suppliers. The sectors where the model works best in Spain and Europe: home and decoration (high margins, low brand dependency), garden and pool, pets and accessories, fitness and sports equipment, niche consumer electronics, and baby and childcare products."
              : "Nous travaillons des créneaux avec des marges entre 30 % et 60 %, une demande organique démontrable et des fournisseurs européens disponibles. Les secteurs où le modèle fonctionne le mieux en Espagne et en Europe : maison et décoration (marges élevées, faible dépendance à la marque), jardin et piscine, animaux et accessoires, fitness et équipement sportif, électronique grand public de niche, et produits pour bébé et puériculture."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "We don't work niches with margins below 25%, branded products where prices are controlled, or sectors where Amazon competition makes it impossible to compete on price. Before starting, we do a niche viability analysis with real data on demand, margins and competition."
              : "Nous ne travaillons pas les créneaux avec des marges inférieures à 25 %, les produits de marque où le prix est contrôlé, ou les secteurs où la concurrence d'Amazon rend impossible de concurrencer sur le prix. Avant de commencer, nous faisons une analyse de viabilité du créneau avec des données réelles de demande, de marges et de concurrence."}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about dropshipping with revenue sharing"
              : "Questions fréquentes sur le dropshipping avec participation aux résultats"}
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

        <section id="contact" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Want to build your online store with no stock risk?"
              : "Vous voulez monter votre boutique en ligne sans risque de stock ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Do you have a niche in mind or do you want us to help identify the best opportunity? Tell us and within 48 hours we will respond with a viability analysis."
              : "Vous avez un créneau en tête ou voulez-vous que nous vous aidions à identifier la meilleure opportunité ? Parlez-nous et dans les 48 heures nous vous répondrons avec une analyse de viabilité."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>

      <RelatedArticles category={isEn ? "Ecommerce" : "Ecommerce"} />
    </>
  );
}
