import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Social Media for Businesses in 2026: What the Data Actually Says Works"
      : "Réseaux Sociaux pour Entreprises en 2026 : Ce que Disent Vraiment les Données",
    description: isEn
      ? "The Social Media 2026 study by Cyberclick and Metricool analyses millions of posts. TikTok leads on impressions, Instagram on stability, LinkedIn on B2B. What it means for your strategy."
      : "L'étude Social Media 2026 de Cyberclick et Metricool analyse des millions de publications. TikTok domine les impressions, Instagram la stabilité, LinkedIn le B2B. Ce que cela signifie pour votre stratégie.",
    alternates: alternatesFor(`/${lang}/social-media-for-businesses-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/social-media-for-businesses-2026/`,
    },
    openGraph: {
      title: isEn
        ? "Social Media for Businesses in 2026: What the Data Actually Says Works | Mkt Web 360"
        : "Réseaux Sociaux pour Entreprises en 2026 : Ce que Disent Vraiment les Données | Mkt Web 360",
      description: isEn
        ? "The Social Media 2026 study analyses millions of posts. TikTok leads on impressions, Instagram on stability, LinkedIn on B2B. What it means for your strategy."
        : "L'étude Social Media 2026 analyse des millions de publications. TikTok domine les impressions, Instagram la stabilité, LinkedIn le B2B. Ce que cela signifie pour votre stratégie.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Which social network should I prioritise if I have limited time?",
    a: "B2B: LinkedIn is the clear priority in 2026. B2C with a visually attractive product: Instagram offers better stability. TikTok has greater potential organic reach but requires more video production resources.",
  },
  {
    q: "Is Facebook still working for businesses in 2026?",
    a: "Facebook is losing perceived relevance (46% of marketers believe it will lose relevance) but remains effective for audiences aged 35+, local groups and retargeting. The mistake is abandoning it because of trends without analysing whether your clients are actually there.",
  },
  {
    q: "Do I need to be on every social network?",
    a: "No. The strategy of being everywhere distributes resources without critical mass. Choose 1–2 networks where your ideal client is, dominate them with consistency, and expand only when the first platform is performing well.",
  },
  {
    q: "How many posts should I publish per week?",
    a: "LinkedIn: 3–5. Instagram: 4–7. TikTok: 5–7 to gain traction. The most important thing is consistency: posting irregularly is more damaging than posting less but regularly.",
  },
];

const FAQS_FR = [
  {
    q: "Quel réseau social dois-je prioriser si j'ai peu de temps ?",
    a: "B2B : LinkedIn est la priorité claire en 2026. B2C avec un produit visuellement attractif : Instagram offre une meilleure stabilité. TikTok a un plus grand potentiel de portée organique mais nécessite plus de ressources de production vidéo.",
  },
  {
    q: "Facebook fonctionne-t-il encore pour les entreprises en 2026 ?",
    a: "Facebook perd en pertinence perçue (46 % des marketeurs pensent qu'il perdra en relevance) mais reste efficace pour les audiences 35+, les groupes locaux et le retargeting. L'erreur est de l'abandonner par effet de mode sans analyser si vos clients y sont réellement.",
  },
  {
    q: "Dois-je être présent sur tous les réseaux sociaux ?",
    a: "Non. La stratégie de présence partout distribue les ressources sans masse critique. Choisissez 1 à 2 réseaux où se trouve votre client idéal, dominez-les avec constance, et ne vous développez que lorsque la première plateforme fonctionne bien.",
  },
  {
    q: "Combien de publications dois-je faire par semaine ?",
    a: "LinkedIn : 3 à 5. Instagram : 4 à 7. TikTok : 5 à 7 pour gagner de la traction. Le plus important est la régularité : publier de façon irrégulière est plus néfaste que publier moins mais régulièrement.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Social Media for Businesses 2026" : "Réseaux Sociaux pour Entreprises 2026" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Social Media" : "Réseaux Sociaux"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Social media for businesses in 2026: what real data says about what actually works"
            : "Réseaux sociaux pour entreprises en 2026 : ce que disent les données réelles sur ce qui fonctionne vraiment"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "The Social Media 2026 Study by Cyberclick and Metricool analyses millions of posts to answer a question almost nobody resolves with data: what actually works? TikTok leads on impressions, Instagram wins on stability and LinkedIn is the fastest-growing channel in B2B. We help you translate that data into a social media strategy built on evidence."
            : "L'Étude Social Media 2026 de Cyberclick et Metricool analyse des millions de publications pour répondre à une question que presque personne ne résout avec des données : qu'est-ce qui fonctionne vraiment ? TikTok domine les impressions, Instagram gagne en stabilité et LinkedIn est le canal à la plus forte croissance en B2B. Nous vous aidons à traduire ces données en stratégie réseaux sociaux basée sur des preuves."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Every year a new social network appears promising to revolutionise everything, and an old one is supposedly dead. The problem is that most decisions about social media are made by intuition or fashion, not by data. The Social Media 2026 Study makes it possible to do exactly the opposite: look at what works before investing time and budget."
              : "Chaque année, un nouveau réseau social apparaît en promettant de tout révolutionner, et un ancien est supposément mort. Le problème est que la plupart des décisions sur les réseaux sociaux se prennent par intuition ou par mode, pas par les données. L'Étude Social Media 2026 permet de faire exactement le contraire : regarder ce qui fonctionne avant d'investir du temps et du budget."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "The data from the Social Media 2026 Study" : "Les données de l'Étude Social Media 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The Social Media 2026 Study produced by Cyberclick and Metricool is not based on opinions but on the analysis of millions of real posts from businesses and creators. That scale is what makes it useful for an SME: instead of deciding based on what is 'being said' in your sector, you can decide based on what actually generates impressions, interaction and growth."
                : "L'Étude Social Media 2026 élaborée par Cyberclick et Metricool ne se base pas sur des opinions, mais sur l'analyse de millions de publications réelles d'entreprises et de créateurs. Cette échelle est ce qui la rend utile pour une PME : au lieu de décider d'après ce qui 'se dit' dans votre secteur, vous pouvez décider d'après ce qui génère effectivement des impressions, des interactions et de la croissance."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The general conclusion of the study is clear: there is no universal winning network. Some networks win on reach, others on stability and others on contact quality. The right question is not 'which network is best?' but 'which network is best for my type of business and my available resources?'"
                : "La conclusion générale de l'étude est claire : il n'y a pas de réseau gagnant universel. Certains réseaux gagnent en portée, d'autres en stabilité et d'autres en qualité des contacts. La bonne question n'est pas « quel réseau est le meilleur ? » mais « quel réseau est le meilleur pour mon type d'entreprise et mes ressources ? »"}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "TikTok leads on impressions but Instagram dominates on stability"
                : "TikTok domine les impressions mais Instagram règne sur la stabilité"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "According to the data, TikTok is the platform with the highest potential for organic reach: 67.48% of the professionals surveyed believe it will gain even more relevance. For businesses capable of producing short video consistently, it is the channel with the highest growth ceiling in terms of impressions."
                : "Selon les données, TikTok est la plateforme avec le plus grand potentiel de portée organique : 67,48 % des professionnels interrogés pensent qu'elle gagnera encore plus de pertinence. Pour les entreprises capables de produire de la vidéo courte de façon constante, c'est le canal avec le plus grand potentiel de croissance en termes d'impressions."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Instagram, on the other hand, stands out for its stability. It does not offer the reach spikes of TikTok, but it maintains a sustained and predictable performance that makes it a solid foundation for B2C brands with visually attractive products. That predictability is an asset when you plan content with limited resources."
                : "Instagram, en revanche, se distingue par sa stabilité. Il n'offre pas les pics de portée de TikTok, mais il maintient des performances soutenues et prévisibles qui en font une base solide pour les marques B2C avec des produits visuellement attractifs. Cette prévisibilité est un atout quand vous planifiez du contenu avec des ressources limitées."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "LinkedIn: the fastest-growing channel for B2B" : "LinkedIn : le canal à la plus forte croissance pour le B2B"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For businesses selling to other businesses, LinkedIn is the channel with the most traction in 2026. The combination of an algorithm that rewards personal content, the rise of native video and Employee Generated Content has turned the network into a genuine source of qualified leads."
                : "Pour les entreprises qui vendent à d'autres entreprises, LinkedIn est le canal avec la plus forte traction en 2026. La combinaison d'un algorithme qui récompense le contenu des personnes, l'essor de la vidéo native et l'Employee Generated Content a transformé le réseau en une véritable source de leads qualifiés."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "If your client is a business, LinkedIn should be your priority. We cover it in depth in our guide to LinkedIn for SMEs in 2026, with concrete tactics for generating leads without spending on advertising."
                : "Si votre client est une entreprise, LinkedIn devrait être votre priorité. Nous le développons en profondeur dans notre guide LinkedIn pour les PME en 2026, avec des tactiques concrètes pour générer des leads sans dépenser en publicité."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Short video is no longer a trend: it is the standard" : "La vidéo courte n'est plus une tendance : c'est le standard"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For years short video was presented as an 'emerging trend'. In 2026 it no longer is: it has become the market standard. Reels, TikToks and LinkedIn videos dominate distribution on virtually all platforms, and algorithms systematically prioritise this format."
                : "Pendant des années, la vidéo courte a été présentée comme une « tendance émergente ». En 2026, ce n'est plus le cas : elle est devenue le standard du marché. Les Reels, TikToks et vidéos LinkedIn dominent la distribution sur pratiquement toutes les plateformes, et les algorithmes priorisent systématiquement ce format."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "This does not mean you need to produce expensive videos. It means that the ability to shoot short video with purpose becomes a basic competence in your content strategy. Integrating it well with the rest of your content marketing is what distinguishes publishing for its own sake from building an audience."
                : "Cela ne signifie pas que vous devez produire des vidéos coûteuses. Cela signifie que la capacité à filmer des vidéos courtes avec discernement devient une compétence de base de votre stratégie de contenu. L'intégrer correctement avec le reste de votre marketing de contenu est ce qui distingue publier pour publier de construire une audience."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "From quantity to focus: the strategic shift of 2026"
                : "De la quantité au focus : le changement stratégique de 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The most important change the study reveals is not about platform but about mindset: companies are moving from volume to focus. Publishing a lot everywhere has stopped being a strategy; concentrating on fewer networks and doing it well is what produces results."
                : "Le changement le plus important que révèle l'étude n'est pas de plateforme, mais d'état d'esprit : les entreprises passent du volume au focus. Publier beaucoup partout a cessé d'être une stratégie ; se concentrer sur peu de réseaux et bien le faire est ce qui produit des résultats."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "This shift has a practical reading for any SME with limited resources: it is better to dominate one or two networks with consistency than to maintain a mediocre presence on five. Focus reduces effort and increases impact."
                : "Ce changement a une lecture pratique pour toute PME avec des ressources limitées : il vaut mieux dominer un ou deux réseaux avec constance que de maintenir une présence médiocre sur cinq. Le focus réduit l'effort et augmente l'impact."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "How to decide which network to prioritise" : "Comment décider quel réseau prioriser"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The decision should depend on two variables: where your ideal client is and what production resources you have. A B2B business prioritises LinkedIn; a B2C brand with a visual product, Instagram; a business with the capacity to produce consistent video, TikTok. And paid networks — such as PPC advertising — come in once you know which message converts."
                : "La décision devrait dépendre de deux variables : où se trouve votre client idéal et quelles ressources de production vous avez. Une entreprise B2B priorise LinkedIn ; une marque B2C avec un produit visuel, Instagram ; une entreprise capable de produire de la vidéo constante, TikTok. Et les réseaux payants — comme la publicité PPC — entrent en jeu une fois que vous savez quel message convertit."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Choose 1–2 channels, define a realistic posting frequency and measure for a quarter before changing strategy. Consistency is the variable that the data correlates most directly with sustained growth."
                : "Choisissez 1 à 2 canaux, définissez une fréquence de publication réaliste et mesurez pendant un trimestre avant de changer de stratégie. La constance est la variable que les données corrèlent le plus directement avec une croissance soutenue."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Turn data into a social strategy built on evidence"
                : "Transformez les données en stratégie réseaux sociaux basée sur des preuves"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we help businesses and SMEs choose the right networks, define the content that works and measure what truly matters."
                : "Chez Mkt Web 360, nous aidons les entreprises et PME à choisir les bons réseaux, définir le contenu qui fonctionne et mesurer ce qui compte vraiment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </a>
              <a
                href={`/${lang}/social-media-marketing/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See Social Media Marketing service" : "Voir le service Social Media Marketing"}
              </a>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions" : "Questions fréquentes"}
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
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
