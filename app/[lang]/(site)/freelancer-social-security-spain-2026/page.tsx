import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Freelancer Social Security Contributions in Spain 2026: Full Guide to Brackets and Changes"
      : "Cotisations Sociales des Indépendants en Espagne 2026 : Guide Complet des Tranches et Changements",
    description: isEn
      ? "Spain's self-employed social security contributions for 2026 remain equal to 2025 by government extension, except the MEI which rises to 0.9%. Full bracket table, the €80 flat rate and how to change your contribution base up to 6 times per year."
      : "Les cotisations des indépendants en 2026 restent identiques à 2025 par prorogation du gouvernement, sauf le MEI qui monte à 0,9 %. Tableau complet des tranches, le forfait à 80 € et comment changer votre base jusqu'à 6 fois par an.",
    alternates: alternatesFor(`/${lang}/freelancer-social-security-spain-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/freelancer-social-security-spain-2026/`,
    },
    openGraph: {
      title: isEn
        ? "Freelancer Social Security Contributions in Spain 2026: Full Guide | Mkt Web 360"
        : "Cotisations Sociales des Indépendants en Espagne 2026 : Guide Complet | Mkt Web 360",
      description: isEn
        ? "Spain's self-employed contributions for 2026: bracket table, MEI rise to 0.9%, €80 flat rate and flexible base changes."
        : "Cotisations des indépendants en Espagne 2026 : tableau des tranches, MEI à 0,9 %, forfait à 80 € et modifications flexibles de base.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Have self-employed contributions risen in Spain in 2026?",
    a: "The 2026 contribution brackets remain equal to those of 2025 by government extension. The only variation is the MEI (Mecanismo de Equidad Intergeneracional), which rises from 0.8% to 0.9%, representing a small increase in contributions for all self-employed workers.",
  },
  {
    q: "How much does a self-employed worker on the minimum contribution pay in 2026?",
    a: "Self-employed workers in the first bracket (income up to €670/month) pay €200/month. Second bracket (€670–€900): €220. Third bracket (€900–€1,166.70): €260. From the fourth bracket upwards, amounts increase progressively up to €1,542 for the highest earners.",
  },
  {
    q: "What is the self-employed flat rate in 2026?",
    a: "A bonus for new self-employed workers: reduced contribution of €80/month (€88.64 including MEI) for the first 12 months of activity, extendable to 24 months if income does not exceed the minimum wage. Only applies if you have not been self-employed in the last 2 years.",
  },
  {
    q: "How many times can I change my contribution base in 2026?",
    a: "Up to 6 times per year. Changes take effect with a time delay depending on when the request is made. Management is done through the Importass portal of the Social Security.",
  },
  {
    q: "How does my current contribution affect my future pension?",
    a: "Directly. Contributing at the minimum base reduces your current contribution but also reduces the calculation base of your pension, sick pay and cessation of activity benefit. For self-employed workers approaching 50, it may be worth reviewing whether the monthly saving compensates for the reduction in future benefits.",
  },
];

const FAQS_FR = [
  {
    q: "Les cotisations des indépendants ont-elles augmenté en Espagne en 2026 ?",
    a: "Les tableaux de cotisation 2026 restent identiques à ceux de 2025 par prorogation. La seule variation est le MEI (Mecanismo de Equidad Intergeneracional), qui passe de 0,8 % à 0,9 %, ce qui représente une légère augmentation des cotisations pour tous les travailleurs indépendants.",
  },
  {
    q: "Combien paie un indépendant avec la cotisation minimale en 2026 ?",
    a: "Les indépendants de la première tranche (revenus jusqu'à 670 €/mois) paient 200 €/mois. Deuxième tranche (670 €–900 €) : 220 €. Troisième tranche (900 €–1 166,70 €) : 260 €. À partir de la quatrième tranche, les montants augmentent progressivement jusqu'à 1 542 € pour les revenus les plus élevés.",
  },
  {
    q: "Qu'est-ce que le forfait d'indépendant en 2026 ?",
    a: "Un avantage pour les nouveaux indépendants : cotisation réduite de 80 €/mois (88,64 € avec le MEI inclus) pendant les 12 premiers mois d'activité, prolongeable à 24 mois si les revenus ne dépassent pas le SMIC. Ne s'applique que si vous n'avez pas été indépendant au cours des 2 dernières années.",
  },
  {
    q: "Combien de fois puis-je changer ma base de cotisation en 2026 ?",
    a: "Jusqu'à 6 fois par an. Les changements prennent effet avec un délai selon le moment où la demande est faite. La gestion se fait via le portail Importass de la Sécurité Sociale espagnole.",
  },
  {
    q: "Comment ma cotisation actuelle affecte-t-elle ma future retraite ?",
    a: "Directement. Cotiser à la base minimale réduit votre cotisation aujourd'hui mais réduit aussi la base de calcul de votre retraite, de votre indemnité maladie et de cessation d'activité. Pour les indépendants proches de 50 ans, il peut être utile de revoir si l'économie mensuelle compense la réduction des prestations futures.",
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
            {
              label: isEn
                ? "Freelancer Social Security Spain 2026"
                : "Cotisations Indépendants Espagne 2026",
            },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Freelancers & Autónomos" : "Freelances & Indépendants"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Self-employed social security contributions in Spain 2026: everything you need to know about brackets, MEI and the flat rate"
            : "Cotisations sociales des indépendants en Espagne 2026 : tout ce qu'il faut savoir sur les tranches, le MEI et le forfait"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Spain's self-employed contributions for 2026 remain equal to 2025 by government extension, with one single variation: the MEI rises to 0.9%. In this guide you will find the bracket table, the €80 flat rate and how to change your base up to 6 times per year."
            : "Les cotisations des indépendants de 2026 restent identiques à celles de 2025 par prorogation du gouvernement, avec une seule variation : le MEI monte à 0,9 %. Dans ce guide, vous trouverez le tableau des tranches, le forfait à 80 € et comment changer votre base jusqu'à 6 fois par an."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Few topics generate as much confusion among self-employed workers as the monthly contribution they pay. Between the income-based bracket system, the MEI and the flat rate, it is easy to get lost. This article sets out the essential 2026 information so you know exactly what you pay and why."
              : "Peu de sujets génèrent autant de confusion parmi les indépendants que la cotisation qu'ils paient chaque mois. Entre le système de tranches par revenus réels, le MEI et le forfait, il est facile de se perdre. Cet article organise les informations essentielles de 2026 pour que vous sachiez exactement ce que vous payez et pourquoi."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "2026 contributions: what has changed and what has not"
                : "Cotisations 2026 : ce qui a changé et ce qui n'a pas changé"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The main news is that the 2026 contribution tables remain equal to those of 2025. The government has extended the amounts, so the brackets and minimum contributions do not vary compared to the previous year."
                : "La nouvelle principale est que les tableaux de cotisation 2026 restent identiques à ceux de 2025. Le gouvernement a prorogé les montants, donc les tranches et les cotisations minimales ne varient pas par rapport à l'année précédente."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The only real variation is the MEI (Mecanismo de Equidad Intergeneracional), which rises from 0.8% to 0.9%. It is a small increase but it affects all self-employed workers regardless of their bracket. In practice, it means you will pay almost the same as in 2025, with a slight increase from the MEI."
                : "La seule variation réelle est le MEI (Mecanismo de Equidad Intergeneracional), qui passe de 0,8 % à 0,9 %. C'est une augmentation faible mais qui touche tous les indépendants, quelle que soit leur tranche. En pratique, cela signifie que vous paierez pratiquement la même chose qu'en 2025, avec une légère augmentation due au MEI."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Full bracket and minimum contribution table for 2026"
                : "Tableau complet des tranches et cotisations minimales 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The income-based contribution system assigns a contribution according to your billing. These are the minimum contributions for the first brackets in 2026:"
                : "Le système de cotisation par revenus réels assigne une cotisation selon ce que vous facturez. Voici les cotisations minimales des premières tranches en 2026 :"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                {isEn
                  ? "First bracket (income up to €670/month): €200/month."
                  : "Première tranche (revenus jusqu'à 670 €/mois) : 200 €/mois."}
              </li>
              <li>
                {isEn
                  ? "Second bracket (€670–€900): €220/month."
                  : "Deuxième tranche (670 €–900 €) : 220 €/mois."}
              </li>
              <li>
                {isEn
                  ? "Third bracket (€900–€1,166.70): €260/month."
                  : "Troisième tranche (900 €–1 166,70 €) : 260 €/mois."}
              </li>
              <li>
                {isEn
                  ? "From the fourth bracket upwards, amounts increase progressively up to €1,542/month for the highest earners."
                  : "À partir de la quatrième tranche, les montants augmentent progressivement jusqu'à 1 542 €/mois pour les revenus les plus élevés."}
              </li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {isEn
                ? "The key to the system is that the contribution is adjusted to your actual net income. If your income changes throughout the year, you have the ability to adjust your base so that the contribution corresponds to your actual situation."
                : "La clé du système est que la cotisation s'ajuste à vos revenus nets réels. Si vos revenus changent au cours de l'année, vous avez la possibilité d'ajuster votre base pour que la cotisation corresponde à votre situation réelle."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The MEI in 2026: what it is and how much it raises your contribution"
                : "Le MEI en 2026 : ce que c'est et combien il augmente votre cotisation"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The MEI is a surcharge intended to reinforce the sustainability of the pension system. In 2026 it goes from 0.8% to 0.9%, applied to the contribution base of each self-employed worker."
                : "Le MEI est un supplément destiné à renforcer la durabilité du système de retraites. En 2026, il passe de 0,8 % à 0,9 %, appliqué à la base de cotisation de chaque travailleur indépendant."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Although the percentage is small, it is worth bearing in mind when calculating your total contribution: it is the reason why, despite the tables not changing, the final figure you pay each month is slightly higher than in 2025."
                : "Bien que le pourcentage soit faible, il vaut la peine de le garder à l'esprit lors du calcul de votre cotisation totale : c'est la raison pour laquelle, malgré l'absence de changement dans les tableaux, le chiffre final que vous payez chaque mois est légèrement supérieur à celui de 2025."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Flat rate 2026: €80/month for new self-employed workers"
                : "Forfait 2026 : 80 €/mois pour les nouveaux indépendants"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The flat rate remains the great advantage for those starting out. It consists of a reduced contribution of €80/month (€88.64 including MEI) for the first 12 months of activity."
                : "Le forfait reste le grand avantage pour ceux qui débutent. Il consiste en une cotisation réduite de 80 €/mois (88,64 € avec le MEI inclus) pendant les 12 premiers mois d'activité."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "This bonus is extendable to 24 months if your income does not exceed the minimum wage, and only applies if you have not been self-employed in the last 2 years. If you are considering taking the step, the flat rate notably reduces the barrier to entry during the first year."
                : "Cette bonification est prolongeable à 24 mois si vos revenus ne dépassent pas le SMIC, et ne s'applique que si vous n'avez pas été indépendant au cours des 2 dernières années. Si vous envisagez de franchir le pas, le forfait réduit considérablement la barrière à l'entrée pendant la première année."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "How to change your contribution base throughout the year"
                : "Comment changer votre base de cotisation au cours de l'année"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "One of the most useful aspects of the current system is the flexibility: you can change your contribution base up to 6 times per year. This allows you to adapt the contribution to the actual evolution of your income."
                : "L'un des aspects les plus utiles du système actuel est la flexibilité : vous pouvez changer votre base de cotisation jusqu'à 6 fois par an. Cela vous permet d'adapter la cotisation à l'évolution réelle de vos revenus."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Changes take effect with a time delay depending on when you request them, and all management is done through the Importass portal of the Spanish Social Security. Reviewing your base several times a year is good practice to avoid overpaying or underpaying."
                : "Les changements prennent effet avec un délai selon le moment où vous les demandez, et toute la gestion se fait via le portail Importass de la Sécurité Sociale espagnole. Revoir votre base plusieurs fois par an est une bonne pratique pour ne pas payer trop ni trop peu."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Planning: when it makes sense to contribute more"
                : "Planification : quand il est judicieux de cotiser davantage"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Contributing at the minimum base reduces your current contribution but also reduces the calculation base for your pension, sick pay and cessation of activity benefit. It is a decision with long-term consequences."
                : "Cotiser à la base minimale réduit votre cotisation aujourd'hui mais réduit aussi la base de calcul de votre retraite, de votre indemnité maladie et de cessation d'activité. C'est une décision avec des conséquences à long terme."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For self-employed workers with stable income who are approaching 50, reviewing whether the monthly saving from the minimum base compensates for the reduction in future benefits can be a worthwhile exercise. The answer depends on each individual situation and is worth analysing with an adviser."
                : "Pour les indépendants avec des revenus stables qui approchent la cinquantaine, il peut être utile de revoir si l'économie mensuelle de la base minimale compense la réduction des prestations futures. La réponse dépend de chaque situation individuelle et mérite d'être analysée avec un conseiller."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Grow your business to contribute better"
                : "Faites croître votre entreprise pour mieux cotiser"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we help self-employed workers and SMEs attract more and better online clients, with a digital presence that supports growth."
                : "Chez Mkt Web 360, nous aidons les indépendants et les PME à obtenir plus et de meilleurs clients en ligne, avec une présence digitale qui soutient la croissance."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </a>
              <a
                href={`/${lang}/contact/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "Request information" : "Demander des informations"}
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

          <p className="text-sm text-gray-500">
            {isEn
              ? "This article is for informational purposes only and does not constitute tax or legal advice. Always consult a qualified adviser or accountant before making decisions about your contributions."
              : "Cet article est informatif et ne constitue pas un conseil fiscal ou juridique. Consultez toujours un conseiller ou comptable qualifié avant de prendre des décisions concernant vos cotisations."}
          </p>
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
