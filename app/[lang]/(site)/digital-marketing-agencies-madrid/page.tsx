import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Choose a Digital Marketing Agency in Madrid | Mkt Web 360" : "Comment choisir une agence de marketing digital à Madrid | Mkt Web 360",
    description: isEn ? "Guide to choosing a digital marketing agency in Madrid. What to ask, red flags to detect and how to compare proposals." : "Guide pour choisir une agence de marketing digital à Madrid. Quoi demander, red flags à détecter et comment comparer les propositions.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/digital-marketing-agencies-madrid/` },
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
          { label: isEn ? "Agencies in Madrid" : "Agences à Madrid" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to choose a digital marketing agency in Madrid without making costly mistakes" : "Comment choisir une agence de marketing digital à Madrid sans faire d'erreurs coûteuses"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Madrid concentrates hundreds of digital marketing agencies. Choosing well can make the difference between growing or losing money. This guide helps you know what to ask and what warning signs to detect." : "Madrid concentre des centaines d'agences de marketing digital. Bien choisir peut faire la différence entre croître ou perdre de l'argent. Ce guide vous aide à savoir quoi demander et quels signaux d'alarme détecter."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The digital marketing agency market in Madrid" : "Le marché des agences de marketing digital à Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Madrid is home to more than 2,000 digital marketing agencies and freelance consultants. This abundance makes choice difficult: the market ranges from one-person freelancers charging €200 per month to large agencies with retainers of €10,000 or more. The first mistake companies make is choosing based on price alone, without evaluating what is actually being offered." : "Madrid abrite plus de 2 000 agences de marketing digital et consultants indépendants. Cette abondance rend le choix difficile : le marché va des freelances individuels facturant 200€ par mois aux grandes agences avec des retainers de 10 000€ ou plus. La première erreur des entreprises est de choisir sur la base du prix seul, sans évaluer ce qui est réellement proposé."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The reality is that price rarely reflects quality in this sector. A freelancer with the right experience can outperform a large agency with a rotating team of juniors. What matters is the combination of specialisation, track record and the clarity with which results are measured. In Madrid, you will find exceptional professionals at all price points — but also plenty of agencies that over-promise and under-deliver." : "La réalité est que le prix reflète rarement la qualité dans ce secteur. Un freelance avec la bonne expérience peut surpasser une grande agence avec une équipe tournante de juniors. Ce qui compte, c'est la combinaison de la spécialisation, du palmarès et de la clarté avec laquelle les résultats sont mesurés. À Madrid, vous trouverez des professionnels exceptionnels à tous les niveaux de prix — mais aussi beaucoup d'agences qui sur-promettent et sous-livrent."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Types of agencies: specialists vs full service" : "Types d'agences : spécialistes vs full service"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Specialist agencies focus on one or two channels — SEO, Google Ads, social media, email marketing — and tend to have deeper expertise in those areas. Full-service agencies claim to do everything, which can be convenient but often means surface-level work across many channels. For most SMEs, it is better to work with a specialist for your main acquisition channel and expand from there." : "Les agences spécialisées se concentrent sur un ou deux canaux — SEO, Google Ads, réseaux sociaux, email marketing — et tendent à avoir une expertise plus profonde dans ces domaines. Les agences full service prétendent tout faire, ce qui peut être pratique mais signifie souvent un travail superficiel sur de nombreux canaux. Pour la plupart des PME, il vaut mieux travailler avec un spécialiste pour votre canal d'acquisition principal et s'étendre ensuite."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "In Madrid, the market has matured enough that you can find strong specialists in almost every discipline. An SEO agency that ranks its own website well is a good signal. An agency whose Google Ads campaigns generate real returns for its clients speaks for itself. Ask for case studies and references — not just testimonials on their website, but real contacts you can call." : "À Madrid, le marché a suffisamment mûri pour que vous puissiez trouver de solides spécialistes dans presque toutes les disciplines. Une agence SEO qui positionne bien son propre site est un bon signal. Une agence dont les campagnes Google Ads génèrent de vrais retours pour ses clients parle d'elle-même. Demandez des études de cas et des références — pas seulement des témoignages sur leur site, mais de vrais contacts que vous pouvez appeler."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Questions to ask before hiring" : "Questions à poser avant d'embaucher"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Before signing any contract with a Madrid agency, ask these key questions: Who will actually work on your account? Many agencies sell with senior profiles and then assign juniors. What does the reporting process look like — do you receive monthly reports with real metrics, or vague updates? What is the minimum notice period to cancel the service?" : "Avant de signer un contrat avec une agence madrilène, posez ces questions clés : Qui travaillera réellement sur votre compte ? Beaucoup d'agences vendent avec des profils seniors puis assignent des juniors. À quoi ressemble le processus de reporting — recevez-vous des rapports mensuels avec de vraies métriques ou des mises à jour vagues ? Quel est le préavis minimum pour annuler le service ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Also ask what happens to the work done if you leave. Do you own your Google Ads account and all the content created? Some agencies retain ownership of your campaigns and creative work, making it very expensive to switch. A trustworthy agency will always leave assets in your name and help you transition if needed." : "Demandez aussi ce qu'il advient du travail réalisé si vous partez. Possédez-vous votre compte Google Ads et tout le contenu créé ? Certaines agences conservent la propriété de vos campagnes et créations, rendant le changement très coûteux. Une agence digne de confiance laissera toujours les actifs à votre nom et vous aidera à effectuer la transition si nécessaire."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Red flags: signs an agency is not trustworthy" : "Red flags : signes qu'une agence n'est pas fiable"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Watch out for guaranteed results claims — no legitimate agency can guarantee first-page rankings or specific ad performance. If an agency promises you number one on Google in 30 days, walk away. Other red flags include lack of transparency about methods, reluctance to provide references, and contracts with no performance-based clauses." : "Méfiez-vous des promesses de résultats garantis — aucune agence légitime ne peut garantir un positionnement en première page ou des performances publicitaires spécifiques. Si une agence vous promet la première place sur Google en 30 jours, partez. Autres red flags : le manque de transparence sur les méthodes, la réticence à fournir des références, et les contrats sans clauses basées sur la performance."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Agencies that refuse to disclose their team, hide their pricing until the last minute or offer identical proposals to all clients regardless of their business context are also warning signs. The best agencies in Madrid take time to understand your business before making any recommendation. If a proposal arrives in 24 hours without discovery calls, it was generated from a template." : "Les agences qui refusent de divulguer leur équipe, cachent leurs prix jusqu'au dernier moment ou offrent des propositions identiques à tous les clients indépendamment de leur contexte commercial sont aussi des signaux d'alarme. Les meilleures agences de Madrid prennent le temps de comprendre votre entreprise avant de faire une recommandation. Si une proposition arrive en 24 heures sans appels de découverte, elle a été générée à partir d'un modèle."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to compare agency budgets in Madrid" : "Comment comparer les budgets d'agences à Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "When comparing proposals, make sure you are comparing equivalent services. A €500 per month proposal that includes 4 blog articles, Google Ads management and monthly reporting is very different from one that only includes social media scheduling. Create a standard brief and send it to at least three agencies so you can compare on equal terms." : "Lorsque vous comparez des propositions, assurez-vous de comparer des services équivalents. Une proposition à 500€ par mois qui inclut 4 articles de blog, la gestion Google Ads et un reporting mensuel est très différente de celle qui n'inclut que la planification des réseaux sociaux. Créez un brief standard et envoyez-le à au moins trois agences pour pouvoir comparer à conditions égales."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A reasonable budget for a Madrid SME to work with a specialist agency starts at around €800-1,500 per month depending on the channel. Full-service retainers start around €2,000-3,000. Anything below €500 per month for comprehensive marketing management should raise questions about what is actually being done — either the work is very limited or it is being done by very junior profiles." : "Un budget raisonnable pour une PME madrilène travaillant avec une agence spécialisée commence autour de 800-1 500€ par mois selon le canal. Les retainers full service commencent autour de 2 000-3 000€. Tout ce qui est en dessous de 500€ par mois pour une gestion marketing complète devrait soulever des questions sur ce qui est réellement fait — soit le travail est très limité, soit il est fait par des profils très juniors."}
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
      <RelatedArticles category="Strategy" />
    </>
  );
}
