import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Online Stores in Toledo — How to Sell Beyond Your Province | Mkt Web 360" : "Boutiques en Ligne à Tolède — Comment Vendre au-delà de votre Province | Mkt Web 360",
    description: isEn ? "Create your online store in Toledo and sell across all of Spain. Without commissions or monthly fees. Guide for Toledo businesses." : "Créez votre boutique en ligne à Tolède et vendez dans toute l'Espagne. Sans commissions ni frais mensuels. Guide pour les entreprises de Tolède.",
    alternates: alternatesFor(`/${lang}/online-stores-toledo/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-stores-toledo/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: isEn ? "Online stores Toledo" : "Boutiques en ligne Tolède" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Online stores in Toledo: how to sell your products beyond the province" : "Boutiques en ligne à Tolède : comment vendre vos produits au-delà de la province"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Having an online store allows you to sell across all of Spain from Toledo. This guide explains what you need, how much it costs and how to avoid the most common mistakes when launching your ecommerce." : "Avoir une boutique en ligne vous permet de vendre dans toute l'Espagne depuis Tolède. Ce guide explique ce dont vous avez besoin, combien ça coûte et comment éviter les erreurs les plus courantes lors du lancement de votre e-commerce."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why Toledo businesses need an online presence" : "Pourquoi les entreprises de Tolède ont besoin d'une présence en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo's local market is limited by geography and population size. A traditional brick-and-mortar business in Toledo depends on foot traffic and word of mouth within a catchment area of perhaps 100,000-200,000 people. An online store opens access to Spain's full market of 47 million people, plus international customers. For products with broad appeal — crafts, ceramics, damascene work, food products, fashion, artisan goods — the online channel can become the primary revenue driver, dwarfing what the physical shop generates." : "Le marché local de Tolède est limité par la géographie et la taille de la population. Une entreprise physique traditionnelle à Tolède dépend du passage et du bouche-à-oreille dans un bassin de peut-être 100 000 à 200 000 personnes. Une boutique en ligne ouvre l'accès à l'ensemble du marché espagnol de 47 millions de personnes, plus les clients internationaux. Pour les produits à large attrait — artisanat, céramique, damasquinage, produits alimentaires, mode, articles artisanaux — le canal en ligne peut devenir le moteur de revenus principal, éclipsant ce que la boutique physique génère."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo has a particular advantage for ecommerce: the city's international recognition as a historic and cultural destination means that 'made in Toledo' or 'from Toledo' products carry intrinsic marketing value. International visitors who fall in love with the city during their visit often become online customers later. Building an online store creates a channel to serve these customers long after they have returned home, turning tourist visits into lasting customer relationships." : "Tolède a un avantage particulier pour l'e-commerce : la reconnaissance internationale de la ville comme destination historique et culturelle signifie que les produits 'fabriqués à Tolède' ou 'de Tolède' portent une valeur marketing intrinsèque. Les visiteurs internationaux qui tombent amoureux de la ville lors de leur visite deviennent souvent des clients en ligne plus tard. Construire une boutique en ligne crée un canal pour servir ces clients longtemps après leur retour chez eux, transformant les visites touristiques en relations clients durables."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What type of online store you need for your business" : "Quel type de boutique en ligne vous faut-il selon votre activité"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Not every Toledo business needs the same type of online store. Artisans and craft businesses with a limited, unique product range are often best served by a simple, beautifully designed shop on an established platform (Shopify, Wix Commerce) that can be set up quickly and managed without technical knowledge. Businesses with large product catalogues, complex variants or high transaction volume may need a more robust solution like WooCommerce or a custom-built store. Service businesses (legal, healthcare, consulting) typically need online booking or enquiry functionality rather than a traditional ecommerce store." : "Toutes les entreprises de Tolède n'ont pas besoin du même type de boutique en ligne. Les artisans et entreprises artisanales avec une gamme de produits limitée et unique sont souvent mieux servis par une boutique simple et magnifiquement conçue sur une plateforme établie (Shopify, Wix Commerce) qui peut être configurée rapidement et gérée sans connaissances techniques. Les entreprises avec de grands catalogues de produits, des variantes complexes ou un volume de transactions élevé peuvent avoir besoin d'une solution plus robuste comme WooCommerce ou une boutique construite sur mesure. Les entreprises de services (juridique, santé, conseil) ont généralement besoin de fonctionnalités de réservation en ligne ou de demande plutôt que d'une boutique e-commerce traditionnelle."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Consider your operational capacity before choosing your store type. An online store requires ongoing management: updating product inventory, processing orders, managing returns, customer service, and maintaining the platform. A small artisan working alone should start with the simplest viable solution rather than an over-engineered platform that requires significant time to maintain. Complexity should scale with revenue and operational capacity — start simple and evolve." : "Considérez votre capacité opérationnelle avant de choisir votre type de boutique. Une boutique en ligne nécessite une gestion continue : mise à jour de l'inventaire des produits, traitement des commandes, gestion des retours, service client, et maintenance de la plateforme. Un petit artisan travaillant seul devrait commencer par la solution viable la plus simple plutôt qu'une plateforme sur-ingéniée qui nécessite un temps significatif à maintenir. La complexité doit évoluer avec les revenus et la capacité opérationnelle — commencez simple et évoluez."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Shopify vs custom solution: the debate that costs money" : "Shopify vs solution personnalisée : le débat qui coûte de l'argent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Shopify vs custom debate is one of the most common conversations Toledo businesses have when planning their online store. Shopify offers a fast, reliable, fully hosted solution with no technical maintenance burden, starting from around €29/month plus transaction fees. It is ideal for businesses that want to launch quickly and focus on selling rather than technical management. The limitations are in customisation — Shopify's design and functionality options, while extensive, are constrained by its platform architecture." : "Le débat Shopify vs personnalisé est l'une des conversations les plus courantes des entreprises de Tolède lors de la planification de leur boutique en ligne. Shopify offre une solution rapide, fiable et entièrement hébergée sans charge de maintenance technique, à partir d'environ 29 €/mois plus les frais de transaction. C'est idéal pour les entreprises qui veulent lancer rapidement et se concentrer sur la vente plutôt que la gestion technique. Les limitations sont dans la personnalisation — les options de design et de fonctionnalité de Shopify, bien qu'étendues, sont contraintes par l'architecture de sa plateforme."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A custom WooCommerce or fully bespoke solution offers maximum flexibility but requires a higher initial investment (typically €2,000-8,000+ for a well-built custom store) and ongoing technical maintenance. For most Toledo SMEs launching their first online store, Shopify or WooCommerce on a well-configured WordPress installation offers the best balance. The key question is not which platform is objectively better — it is which one your team can actually manage and which one your web developer has most experience with." : "Une solution WooCommerce personnalisée ou entièrement sur mesure offre une flexibilité maximale mais nécessite un investissement initial plus élevé (généralement 2 000 à 8 000 €+ pour une boutique personnalisée bien construite) et une maintenance technique continue. Pour la plupart des PME de Tolède lançant leur première boutique en ligne, Shopify ou WooCommerce sur une installation WordPress bien configurée offre le meilleur équilibre. La question clé n'est pas quelle plateforme est objectivement meilleure — c'est laquelle votre équipe peut réellement gérer et laquelle votre développeur web a le plus d'expérience avec."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "SEO for online stores in Toledo" : "SEO pour boutiques en ligne à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "An online store without SEO is a shop with closed shutters. Most ecommerce traffic comes from organic search, and Toledo-based stores have SEO opportunities at multiple levels: local SEO for customers in Toledo and the province who search for products they can collect locally; national SEO for customers across Spain searching for specific products your store sells; and for Toledo-specific products (damascene, ceramics, artisan food), Google searches from international customers planning trips to or inspired by Toledo." : "Une boutique en ligne sans SEO est un magasin avec des volets fermés. La plupart du trafic e-commerce vient de la recherche organique, et les boutiques basées à Tolède ont des opportunités SEO à plusieurs niveaux : SEO local pour les clients à Tolède et dans la province qui recherchent des produits qu'ils peuvent récupérer localement ; SEO national pour les clients à travers l'Espagne cherchant des produits spécifiques que votre boutique vend ; et pour les produits spécifiques à Tolède (damasquinage, céramique, alimentation artisanale), les recherches Google de clients internationaux planifiant des voyages à Tolède ou inspirés par Tolède."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "SEO priorities for a Toledo online store: write original product descriptions (never copy from suppliers), optimise category pages with keyword-rich content that explains your product range, create a blog that connects your products to Toledo's culture and history (excellent for tourist-adjacent traffic), set up Google Merchant Center to appear in Shopping results, and build local links from Toledo tourism and business sites. A well-optimised Toledo ecommerce site can rank nationally for specific product keywords while also ranking locally for collection-in-store searches." : "Priorités SEO pour une boutique en ligne de Tolède : rédigez des descriptions de produits originales (ne copiez jamais les fournisseurs), optimisez les pages de catégories avec du contenu riche en mots-clés expliquant votre gamme de produits, créez un blog qui relie vos produits à la culture et l'histoire de Tolède (excellent pour le trafic adjacent au tourisme), configurez Google Merchant Center pour apparaître dans les résultats Shopping, et construisez des liens locaux depuis les sites de tourisme et d'affaires de Tolède. Un site e-commerce de Tolède bien optimisé peut se classer nationalement pour des mots-clés de produits spécifiques tout en se classant localement pour les recherches de collecte en boutique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to manage shipping from Toledo across Spain" : "Comment gérer les expéditions depuis Tolède dans toute l'Espagne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Shipping logistics is often the biggest operational concern for Toledo businesses launching ecommerce. The main options for national shipping from Toledo: SEUR, MRW, Correos and GLS are the most commonly used carriers for SME ecommerce in Spain. Rates vary by package weight, dimensions and destination. Negotiate rates directly with carriers once your monthly shipment volume justifies it — most carriers offer preferential rates from 30-50 shipments per month." : "La logistique d'expédition est souvent la plus grande préoccupation opérationnelle pour les entreprises de Tolède qui lancent l'e-commerce. Les principales options pour l'expédition nationale depuis Tolède : SEUR, MRW, Correos et GLS sont les transporteurs les plus utilisés pour l'e-commerce PME en Espagne. Les tarifs varient selon le poids du colis, les dimensions et la destination. Négociez les tarifs directement avec les transporteurs une fois que votre volume mensuel d'expéditions le justifie — la plupart des transporteurs offrent des tarifs préférentiels à partir de 30 à 50 expéditions par mois."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Shipping cost transparency is critical for ecommerce conversion rates. Unexpected shipping costs at checkout are the leading cause of cart abandonment in Spain. Display your shipping rates clearly on product pages and consider offering free shipping above a minimum order value — this typically increases average order value. For fragile Toledo products (ceramics, glass, damascene pieces), invest in appropriate packaging — damaged goods are expensive and damage reviews. A single negative review about broken products can suppress conversions significantly." : "La transparence des coûts d'expédition est critique pour les taux de conversion e-commerce. Les frais d'expédition inattendus à la caisse sont la principale cause d'abandon de panier en Espagne. Affichez clairement vos tarifs d'expédition sur les pages produits et envisagez d'offrir la livraison gratuite au-dessus d'une valeur de commande minimale — cela augmente généralement la valeur moyenne des commandes. Pour les produits fragiles de Tolède (céramique, verre, pièces de damasquinage), investissez dans un emballage approprié — les marchandises endommagées sont coûteuses et abîment les avis. Un seul avis négatif sur des produits cassés peut supprimer significativement les conversions."}
          </p>
        </section>

        <BlogBanner variant="ecommerce" />
        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Tell us about your project and we'll get back to you within 24 hours." : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
