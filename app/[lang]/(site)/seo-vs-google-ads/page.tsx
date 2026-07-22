import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO vs Google Ads: Which Is Better for Your Business? | Mkt Web 360"
      : "SEO vs Google Ads : lequel choisir pour votre entreprise ? | Mkt Web 360",
    description: isEn
      ? "Should you invest in SEO or Google Ads? Find out which channel suits your business, budget and urgency best."
      : "SEO ou Google Ads ? Découvrez quel canal convient le mieux à votre entreprise selon votre budget et vos objectifs.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "seo-vs-google-ads" : "seo-vs-google-ads-fr"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "seo-vs-google-ads" : "seo-vs-google-ads-fr"}/`,
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
            { label: "SEO vs Google Ads" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO vs Google Ads: which should you choose?" : "SEO vs Google Ads : lequel choisir ?"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "SEO and Google Ads are not rivals — they are complementary. But depending on your situation, one can make much more sense than the other. This guide helps you decide without wasting money."
            : "Le SEO et Google Ads ne sont pas des rivaux — ils sont complémentaires. Mais selon votre situation, l'un peut avoir beaucoup plus de sens que l'autre. Ce guide vous aide à décider sans perdre d'argent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The fundamental differences" : "Les différences fondamentales"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO improves your organic position in Google results over time — without paying per click. Google Ads places paid ads instantly at the top. The key difference is timing: SEO takes 3–6 months to show results, while Google Ads generates traffic from day one."
            : "Le SEO améliore votre position organique dans les résultats Google au fil du temps — sans payer par clic. Google Ads place des annonces payantes instantanément en tête. La différence clé est le timing : le SEO prend 3 à 6 mois, tandis que Google Ads génère du trafic dès le premier jour."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "With SEO you invest in content, technical optimisation and links — and once you rank, traffic is essentially free. With Google Ads you pay every click, and when you stop paying, traffic stops immediately. Both have a place, but each suits different situations."
            : "Avec le SEO, vous investissez dans le contenu, l'optimisation technique et les liens — une fois positionné, le trafic est essentiellement gratuit. Avec Google Ads, vous payez chaque clic, et quand vous arrêtez de payer, le trafic s'arrête immédiatement. Les deux ont leur place, mais chacun convient à des situations différentes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "When Google Ads makes more sense" : "Quand Google Ads est plus pertinent"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google Ads is ideal when you need results immediately — for a product launch, seasonal campaign or limited-time promotion. It also makes more sense when your product has a high transaction value that quickly offsets the cost per click."
            : "Google Ads est idéal quand vous avez besoin de résultats immédiatement — pour un lancement de produit, une campagne saisonnière ou une promotion limitée. C'est aussi plus pertinent quand votre produit a une valeur de transaction élevée qui compense rapidement le coût par clic."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Use Ads when you want to test messages and audiences before committing to long-term SEO content, or when you operate in a sector so competitive that organic positioning would take years. Ads give you data immediately to inform your broader strategy."
            : "Utilisez Ads quand vous voulez tester des messages et des audiences avant de vous engager dans du contenu SEO à long terme, ou quand vous opérez dans un secteur si concurrentiel que le positionnement organique prendrait des années. Les Ads vous donnent des données immédiatement pour informer votre stratégie globale."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "When SEO is the best investment" : "Quand le SEO est le meilleur investissement"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO delivers the highest long-term ROI of any digital marketing channel. A page that reaches first position for a commercial keyword can generate thousands of qualified visits per month at zero marginal cost. That compound effect builds a lasting competitive advantage that cannot be replicated overnight."
            : "Le SEO offre le meilleur ROI à long terme de tous les canaux de marketing digital. Une page qui atteint la première position pour un mot-clé commercial peut générer des milliers de visites qualifiées par mois à coût marginal zéro. Cet effet cumulatif construit un avantage concurrentiel durable qui ne peut pas être répliqué du jour au lendemain."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO makes most sense when you have a 12+ month horizon, want to reduce dependence on paid advertising and operate in a sector with consistent monthly search volume. It is the foundation of any serious digital strategy."
            : "Le SEO est le plus pertinent quand vous avez un horizon de 12 mois ou plus, que vous voulez réduire votre dépendance à la publicité payante et que vous opérez dans un secteur avec un volume de recherche mensuel constant. C'est le fondement de toute stratégie digitale sérieuse."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The combined strategy: SEO + Google Ads" : "La stratégie combinée : SEO + Google Ads"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The most effective approach for most businesses is combining both channels. While SEO builds organic authority over 6–12 months, Google Ads generates immediate returns. Once you rank organically for a keyword, you can reduce Ads spend on that term and reinvest in more competitive targets."
            : "L'approche la plus efficace pour la plupart des entreprises est de combiner les deux canaux. Pendant que le SEO construit l'autorité organique sur 6 à 12 mois, Google Ads génère des retours immédiats. Une fois positionné organiquement pour un mot-clé, vous pouvez réduire les dépenses Ads sur ce terme et réinvestir dans des cibles plus concurrentielles."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Appearing in both paid and organic results on the same page increases total click-through rate by 25–30%. The combined strategy also gives you more data: Ads reveal which keywords convert, which directly informs your SEO content roadmap."
            : "Apparaître à la fois dans les résultats payants et organiques sur la même page augmente le taux de clics total de 25 à 30%. La stratégie combinée vous donne également plus de données : les Ads révèlent quels mots-clés convertissent, ce qui informe directement votre feuille de route de contenu SEO."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How much budget to allocate to each channel" : "Quel budget allouer à chaque canal"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For an SME with a 1,000€ monthly budget, a sensible starting allocation is 300–400€ on Google Ads and 600–700€ on SEO. As organic results grow and you capture free traffic, progressively shift budget from Ads to SEO investment."
            : "Pour une PME avec un budget mensuel de 1 000€, une répartition de départ sensée est de 300 à 400€ sur Google Ads et 600 à 700€ sur le SEO. À mesure que les résultats organiques progressent et que vous capturez du trafic gratuit, déplacez progressivement le budget des Ads vers l'investissement SEO."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The right balance depends on your sector, competitive landscape and objectives. At Mkt Web 360 we analyse your specific situation and build an integrated strategy that maximises return on every euro invested."
            : "Le bon équilibre dépend de votre secteur, du paysage concurrentiel et de vos objectifs. Chez Mkt Web 360, nous analysons votre situation spécifique et construisons une stratégie intégrée qui maximise le retour sur chaque euro investi."}
        </p>

        <BlogBanner variant="seo" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Strategy" />
    </>
  );
}
