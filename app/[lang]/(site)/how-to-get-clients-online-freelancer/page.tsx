import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How a Freelancer Can Get Clients Online | Mkt Web 360" : "Comment un indépendant peut obtenir des clients en ligne | Mkt Web 360",
    description: isEn ? "Strategies for freelancers to attract clients online. SEO, LinkedIn, referrals, portfolio and positioning to grow your client base." : "Stratégies pour que les indépendants attirent des clients en ligne. SEO, LinkedIn, références, portfolio et positionnement pour développer votre clientèle.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/how-to-get-clients-online-freelancer/` },
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
          { label: isEn ? "Get clients online" : "Clients en ligne" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How a freelancer can get clients online without depending on platforms" : "Comment un indépendant peut obtenir des clients en ligne sans dépendre des plateformes"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Getting clients is the biggest challenge for any freelancer. This guide explains the most effective strategies to attract quality clients online without depending on platforms that charge commissions." : "Obtenir des clients est le plus grand défi pour tout indépendant. Ce guide explique les stratégies les plus efficaces pour attirer des clients de qualité en ligne sans dépendre de plateformes qui prennent des commissions."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why freelancers struggle to find clients" : "Pourquoi les indépendants ont du mal à trouver des clients"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Most freelancers struggle with client acquisition for the same reasons: they rely entirely on platforms that commoditise their services, they have no consistent inbound marketing strategy, and they compete on price rather than positioning. Platforms like Fiverr or Upwork create a race to the bottom that benefits neither freelancers nor clients who need quality work." : "La plupart des freelances ont du mal à acquérir des clients pour les mêmes raisons : ils dépendent entièrement de plateformes qui banalisent leurs services, ils n't ont pas de stratégie de marketing entrant cohérente, et ils rivalisent sur le prix plutôt que sur le positionnement. Des plateformes comme Fiverr ou Upwork créent une course vers le bas qui ne bénéficie ni aux freelances ni aux clients qui ont besoin de travail de qualité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The freelancers who consistently earn well and attract quality clients have built systems that bring clients to them rather than constantly hunting for work. They have a clear niche, a professional digital presence, a track record they can point to and a network that generates referrals. Building these takes time, but the alternative — perpetual platform dependency — is a treadmill that gets harder, not easier." : "Les freelances qui gagnent régulièrement bien et attirent des clients de qualité ont construit des systèmes qui amènent les clients à eux plutôt que de constamment chercher du travail. Ils ont une niche claire, une présence numérique professionnelle, un palmarès auquel ils peuvent se référer et un réseau qui génère des références. Construire cela prend du temps, mais l'alternative — la dépendance perpétuelle aux plateformes — est un tapis roulant qui devient plus difficile, pas plus facile."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Your website as your main sales tool" : "Votre site web comme principal outil de vente"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A professional website is the freelancer's most important asset. It works for you 24/7 and gives you complete control over your positioning, unlike platform profiles that are subject to algorithm changes and policy updates. Your website should clearly communicate your niche specialisation, showcase your best work with case studies, feature testimonials from clients and have a clear call to action." : "Un site web professionnel est l'actif le plus important du freelance. Il travaille pour vous 24h/24 et vous donne un contrôle total sur votre positionnement, contrairement aux profils de plateformes soumis aux changements d'algorithme et aux mises à jour de politique. Votre site doit clairement communiquer votre spécialisation de niche, présenter votre meilleur travail avec des études de cas, afficher des témoignages de clients et avoir un appel à l'action clair."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Optimise your website for the specific searches your ideal clients make. If you are a freelance graphic designer specialising in food brand packaging, your website should rank for 'freelance packaging designer Spain' and similar queries. This requires writing content that specifically addresses what your ideal clients search for — service pages, case studies and a blog that demonstrates your expertise." : "Optimisez votre site pour les recherches spécifiques que font vos clients idéaux. Si vous êtes un designer graphique freelance spécialisé dans l'emballage de marques alimentaires, votre site devrait se positionner pour 'designer d'emballage freelance Espagne' et des requêtes similaires. Cela nécessite d'écrire du contenu qui traite spécifiquement de ce que vos clients idéaux recherchent — pages de services, études de cas et un blog qui démontre votre expertise."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "LinkedIn strategy for freelancers" : "Stratégie LinkedIn pour indépendants"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "LinkedIn is the most powerful platform for B2B freelancers. An optimised profile acts as a landing page that appears in searches and converts profile visitors into leads. Your headline should not just say 'Freelancer' — it should say exactly what you do and for whom: 'I help SaaS companies write content that converts technical buyers.' Your About section should speak to client problems, not your biography." : "LinkedIn est la plateforme la plus puissante pour les freelances B2B. Un profil optimisé agit comme une landing page qui apparaît dans les recherches et convertit les visiteurs de profil en leads. Votre titre ne doit pas juste dire 'Freelance' — il doit dire exactement ce que vous faites et pour qui : 'J'aide les entreprises SaaS à écrire du contenu qui convertit les acheteurs techniques.' Votre section À propos doit parler aux problèmes des clients, pas à votre biographie."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Regular LinkedIn content creation — posts sharing insights about your niche 2-3 times per week — builds visibility with your target audience. The algorithm rewards consistency, and over 6-12 months of regular posting, you will attract inbound inquiries from potential clients who have been following your thinking. This is slower than cold outreach but the quality of clients it attracts is significantly higher." : "La création régulière de contenu LinkedIn — des publications partageant des insights sur votre niche 2 à 3 fois par semaine — construit la visibilité auprès de votre audience cible. L'algorithme récompense la cohérence, et sur 6 à 12 mois de publications régulières, vous attirerez des demandes entrantes de clients potentiels qui ont suivi votre réflexion. C'est plus lent que la prospection à froid mais la qualité des clients attirés est significativement plus élevée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "SEO and content to attract inbound clients" : "SEO et contenu pour attirer des clients entrants"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A blog or content hub on your website that addresses the questions your ideal clients ask is one of the highest-leverage investments a freelancer can make. It takes months to gain traction but once established, it generates a steady stream of qualified inbound leads at no cost per acquisition. Focus on specific, low-competition keywords that your ideal clients search for." : "Un blog ou un hub de contenu sur votre site qui répond aux questions que posent vos clients idéaux est l'un des investissements à effet de levier le plus élevé qu'un freelance puisse faire. Il faut des mois pour gagner en traction mais une fois établi, il génère un flux régulier de leads entrants qualifiés sans coût par acquisition. Concentrez-vous sur des mots-clés spécifiques à faible concurrence que vos clients idéaux recherchent."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Guest posting on industry publications and websites your target clients read is another effective content strategy. A well-placed article on an industry publication can generate more qualified leads than months of social media posting. Research the publications your ideal clients read and pitch articles that demonstrate your expertise while providing genuine value to their audience." : "La publication d'articles invités sur des publications et sites web de l'industrie que lisent vos clients cibles est une autre stratégie de contenu efficace. Un article bien placé dans une publication sectorielle peut générer plus de leads qualifiés que des mois de publications sur les réseaux sociaux. Recherchez les publications que lisent vos clients idéaux et proposez des articles qui démontrent votre expertise tout en apportant une vraie valeur à leur audience."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Referral strategy: your best source of qualified leads" : "Stratégie de référencement : votre meilleure source de leads qualifiés"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Referrals consistently generate the highest-quality clients with the shortest sales cycles. A potential client referred by someone they trust already has a positive disposition toward you before the first conversation. Building a referral system means: delivering excellent work that makes clients want to recommend you, staying in touch with past clients, explicitly asking for referrals at the right moment, and maintaining relationships with complementary freelancers who can refer work." : "Les références génèrent régulièrement les clients de la plus haute qualité avec les cycles de vente les plus courts. Un client potentiel référé par quelqu'un en qui il a confiance a déjà une disposition positive envers vous avant la première conversation. Construire un système de référencement signifie : livrer un travail excellent qui donne envie aux clients de vous recommander, rester en contact avec les anciens clients, demander explicitement des références au bon moment, et maintenir des relations avec des freelances complémentaires qui peuvent vous référer du travail."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Build a network of complementary freelancers — if you are a web developer, build relationships with designers, SEO specialists and copywriters. You can refer each other clients for services outside your own scope. This creates a mutual referral network that benefits everyone. Track referrals, thank people who refer you, and reciprocate — this virtuous cycle becomes one of the most reliable client sources over time." : "Construisez un réseau de freelances complémentaires — si vous êtes développeur web, construisez des relations avec des designers, des spécialistes SEO et des rédacteurs. Vous pouvez vous référer mutuellement des clients pour des services hors de votre propre périmètre. Cela crée un réseau de référencement mutuel qui profite à tous. Suivez les références, remerciez les personnes qui vous réfèrent, et réciproquement — ce cycle vertueux devient l'une des sources de clients les plus fiables au fil du temps."}
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
