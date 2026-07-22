import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Choose the Best Hosting for Your Website | Mkt Web 360" : "Comment choisir le meilleur hébergement pour votre site web | Mkt Web 360",
    description: isEn ? "Guide to choosing the best web hosting for your website. Shared, VPS, managed WordPress and cloud hosting compared." : "Guide pour choisir le meilleur hébergement web pour votre site. Hébergement partagé, VPS, WordPress géré et cloud comparés.",
    alternates: alternatesFor(`/${lang}/how-to-choose-best-hosting/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-choose-best-hosting/`,
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
          { label: isEn ? "Best hosting" : "Meilleur hébergement" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Web Design</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to choose the best hosting for your website without overpaying" : "Comment choisir le meilleur hébergement pour votre site web sans trop payer"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Choosing the wrong hosting can slow down your website, hurt your SEO and frustrate your visitors. This guide explains the differences between hosting types and how to choose the right one." : "Choisir le mauvais hébergement peut ralentir votre site, nuire à votre SEO et frustrer vos visiteurs. Ce guide explique les différences entre les types d'hébergement et comment choisir le bon."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Types of web hosting: shared, VPS, dedicated and cloud" : "Types d'hébergement web : partagé, VPS, dédié et cloud"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Shared hosting puts your website on a server alongside hundreds or thousands of other websites. It is the cheapest option (€2-10 per month) but the slowest and least reliable because resources are shared. VPS (Virtual Private Server) hosting gives you a dedicated portion of a server's resources — more reliable and faster than shared, typically €15-60 per month. Dedicated hosting gives you an entire server, powerful but expensive (€100+). Cloud hosting uses distributed servers for maximum reliability and scalability." : "L'hébergement partagé place votre site sur un serveur avec des centaines ou milliers d'autres sites. C'est l'option la moins chère (2 à 10€ par mois) mais la plus lente et la moins fiable car les ressources sont partagées. L'hébergement VPS (Serveur Privé Virtuel) vous donne une portion dédiée des ressources d'un serveur — plus fiable et rapide que le partagé, généralement 15 à 60€ par mois. L'hébergement dédié vous donne un serveur entier, puissant mais coûteux (100€+). L'hébergement cloud utilise des serveurs distribués pour une fiabilité et une évolutivité maximales."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For most SME websites, a quality shared hosting plan or a basic VPS is sufficient. The key is choosing a reputable provider with servers in Spain or Europe (for GDPR compliance and speed) and genuine 24/7 support. Cheap shared hosting from unknown providers often comes with hidden problems: oversold servers, poor support and unreliable uptime." : "Pour la plupart des sites web de PME, un plan d'hébergement partagé de qualité ou un VPS de base est suffisant. La clé est de choisir un fournisseur réputé avec des serveurs en Espagne ou en Europe (pour la conformité RGPD et la vitesse) et un vrai support 24h/24. L'hébergement partagé bon marché de fournisseurs inconnus s'accompagne souvent de problèmes cachés : serveurs surchargés, mauvais support et disponibilité peu fiable."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Managed WordPress hosting: when it makes sense" : "Hébergement WordPress géré : quand c'est pertinent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Managed WordPress hosting is a specialised service where the hosting provider handles all WordPress-specific tasks: updates, security, backups and performance optimisation. Providers like Kinsta, WP Engine or SiteGround (on managed plans) offer significantly better WordPress performance than generic shared hosting. They typically cost €20-60 per month but the performance gains are substantial." : "L'hébergement WordPress géré est un service spécialisé où le fournisseur d'hébergement gère toutes les tâches spécifiques à WordPress : mises à jour, sécurité, sauvegardes et optimisation des performances. Des fournisseurs comme Kinsta, WP Engine ou SiteGround (sur les plans gérés) offrent des performances WordPress significativement meilleures que l'hébergement partagé générique. Ils coûtent généralement 20 à 60€ par mois mais les gains de performance sont substantiels."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Managed WordPress hosting makes particular sense if your website is your main business asset, if you receive significant traffic, if you run an ecommerce store, or if you don't have technical staff to handle server management. For a simple informational website with low traffic, a good generic shared hosting is sufficient and the managed WordPress premium is not justified." : "L'hébergement WordPress géré est particulièrement pertinent si votre site web est votre principal actif commercial, si vous recevez un trafic significatif, si vous gérez une boutique e-commerce, ou si vous n'avez pas de personnel technique pour gérer le serveur. Pour un simple site d'information avec peu de trafic, un bon hébergement partagé générique est suffisant et la prime d'hébergement WordPress géré n'est pas justifiée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Key factors when choosing hosting" : "Facteurs clés pour choisir un hébergement"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most important factors are: server location (Spain or Europe for Spanish businesses), uptime guarantee (look for 99.9% or better), backup frequency (daily backups minimum), SSL certificate inclusion, customer support quality (test them before buying — send a pre-sales question and see how quickly and helpfully they respond), and migration support if you are moving from another host." : "Les facteurs les plus importants sont : l'emplacement du serveur (Espagne ou Europe pour les entreprises espagnoles), la garantie de disponibilité (cherchez 99,9% ou mieux), la fréquence des sauvegardes (sauvegardes quotidiennes au minimum), l'inclusion du certificat SSL, la qualité du support client (testez-les avant d'acheter — envoyez une question de pré-vente et voyez à quelle vitesse et utilité ils répondent), et le support de migration si vous déménagez depuis un autre hébergeur."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Avoid choosing hosting based solely on promotional pricing. Many providers offer very low introductory prices (€1-3 per month) that increase dramatically on renewal to €8-12 per month. Read the renewal pricing before signing up. Also check whether the advertised storage and bandwidth limits are realistic for your needs." : "Évitez de choisir un hébergement uniquement sur la base des prix promotionnels. De nombreux fournisseurs offrent des prix d'introduction très bas (1 à 3€ par mois) qui augmentent de façon dramatique au renouvellement à 8 à 12€ par mois. Lisez les prix de renouvellement avant de vous inscrire. Vérifiez également si les limites de stockage et de bande passante annoncées sont réalistes pour vos besoins."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Speed, uptime and security: what to look for" : "Vitesse, disponibilité et sécurité : quoi chercher"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Page speed directly affects both user experience and Google rankings. A hosting provider that loads pages in under 2 seconds is essential. Look for providers that use SSD storage (much faster than traditional hard drives), have CDN (Content Delivery Network) integration, and offer PHP 8+ support for WordPress sites. You can test a hosting provider's speed by looking at independent benchmarks from sources like Hosting Tribunal or WP Beginner." : "La vitesse de chargement affecte directement à la fois l'expérience utilisateur et les classements Google. Un fournisseur d'hébergement qui charge les pages en moins de 2 secondes est essentiel. Cherchez des fournisseurs qui utilisent le stockage SSD (beaucoup plus rapide que les disques durs traditionnels), ont une intégration CDN (Content Delivery Network), et offrent le support PHP 8+ pour les sites WordPress. Vous pouvez tester la vitesse d'un fournisseur d'hébergement en consultant des benchmarks indépendants."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For security, ensure your hosting plan includes: a free SSL certificate (HTTPS), daily malware scanning, automatic backups with easy restore, and DDoS protection. These should not be expensive add-ons — any decent hosting provider includes them in standard plans. Also ensure the provider keeps server software updated and has a responsible disclosure policy for vulnerabilities." : "Pour la sécurité, assurez-vous que votre plan d'hébergement inclut : un certificat SSL gratuit (HTTPS), une analyse quotidienne des logiciels malveillants, des sauvegardes automatiques avec restauration facile, et une protection DDoS. Ce ne doivent pas être des add-ons coûteux — tout fournisseur d'hébergement décent les inclut dans les plans standard. Assurez-vous également que le fournisseur maintient les logiciels serveur à jour."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Best hosting options for SME websites" : "Meilleures options d'hébergement pour les sites PME"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Spanish SMEs, reputable options include SiteGround (excellent support, Spanish servers, slightly more expensive), Raiola Networks (Spanish provider, good support), Dinahosting (Spanish, reliable), and for WordPress-specific sites, Kinsta or WP Engine for high-performance needs. For very budget-conscious businesses, Hostinger offers good performance at low cost, but check their support quality." : "Pour les PME espagnoles, les options réputées incluent SiteGround (excellent support, serveurs espagnols, légèrement plus cher), Raiola Networks (fournisseur espagnol, bon support), Dinahosting (espagnol, fiable), et pour les sites spécifiquement WordPress, Kinsta ou WP Engine pour les besoins haute performance. Pour les entreprises très soucieuses du budget, Hostinger offre de bonnes performances à faible coût, mais vérifiez la qualité de leur support."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Our recommendation: for a standard SME website, invest in a mid-range SiteGround or Raiola plan (€8-15 per month). This gives you reliability, good support and performance without overpaying. Only upgrade to VPS or managed WordPress if your traffic justifies it — above 10,000 monthly visits is usually the threshold where the upgrade starts to make financial sense." : "Notre recommandation : pour un site web standard de PME, investissez dans un plan SiteGround ou Raiola de milieu de gamme (8 à 15€ par mois). Cela vous offre fiabilité, bon support et performances sans trop payer. Passez au VPS ou WordPress géré uniquement si votre trafic le justifie — au-dessus de 10 000 visites mensuelles est généralement le seuil où la mise à niveau commence à avoir du sens financièrement."}
          </p>
        </section>

        <BlogBanner variant="default" />
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
      <RelatedArticles category="Web Design" />
    </>
  );
}
