import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Brandformance: How to Unite Brand and Performance Marketing | Mkt Web 360"
      : "Brandformance : comment unir marque et performance pour mieux croître | Mkt Web 360",
    description: isEn
      ? "Brandformance integrates branding and performance marketing into one coherent strategy. Why separating them is a costly mistake — and how combining them multiplies results."
      : "Le brandformance intègre la marque et la performance dans une seule stratégie. Pourquoi les séparer est une erreur coûteuse — et comment les combiner multiplie vos résultats.",
    alternates:
      alternatesFor(
        `/${lang}/${lang === "en" ? "brandformance-brand-performance-strategy" : "brandformance-strategie-marque-performance"}/`
      ) ?? {
        canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "brandformance-brand-performance-strategy" : "brandformance-strategie-marque-performance"}/`,
      },
  };
}

const FAQS_EN = [
  {
    q: "Is brandformance only for big brands with large budgets?",
    a: "No. The concept applies to any business that invests in marketing, even with a limited budget. An SME can start by aligning its value proposition and messaging across Google Ads and social media campaigns. The scale is different; the principle is the same.",
  },
  {
    q: "How do I measure branding's impact on performance without direct attribution?",
    a: "With proxy metrics: branded searches in Google Search Console, direct and branded traffic, lead quality, and conversion rate trends over time. Brandformance is measured in trends and LTV, not last-click.",
  },
  {
    q: "Where does an SME start with brandformance?",
    a: "First, clearly define your brand promise and who it's for. Second, make sure your paid campaigns communicate that same promise — not just price. Third, track cost of acquisition and LTV per channel — you will see the coherence effect within weeks.",
  },
  {
    q: "How long before you see brandformance results?",
    a: "Performance effects are immediate (CPL, conversions). Brand effects take 3–12 months to become statistically visible. The combination typically shows its differential — lower CPL, higher LTV — within 6–9 months.",
  },
];

const FAQS_FR = [
  {
    q: "Le brandformance est-il réservé aux grandes marques avec de gros budgets ?",
    a: "Non. Le concept s'applique à toute entreprise qui investit dans le marketing, même avec un budget limité. Une PME peut commencer par aligner sa proposition de valeur sur ses campagnes Google Ads et réseaux sociaux. L'échelle est différente, le principe est le même.",
  },
  {
    q: "Comment mesurer l'impact de la marque sur la performance sans attribution directe ?",
    a: "Avec des métriques proxy : recherches de marque dans Google Search Console, trafic direct et branded, qualité des leads, et taux de conversion dans le temps. Le brandformance se mesure en tendances et LTV, pas en dernier clic.",
  },
  {
    q: "Par où commence une PME qui veut appliquer le brandformance ?",
    a: "D'abord, définissez clairement votre proposition de valeur et votre cible. Ensuite, assurez-vous que vos campagnes payantes transmettent cette même promesse, pas seulement le prix. Enfin, mesurez le coût d'acquisition et le LTV par canal.",
  },
  {
    q: "Combien de temps faut-il pour voir les résultats du brandformance ?",
    a: "Les effets de performance sont immédiats (CPL, conversions). Les effets marque prennent de 3 à 12 mois pour devenir statistiquement visibles. La combinaison montre généralement son différentiel — CPL plus bas, LTV plus élevé — entre 6 et 9 mois.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Brandformance" : "Brandformance" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Digital Strategy" : "Stratégie Digitale"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              {isEn ? "August 4, 2026" : "4 août 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Brandformance: how to unite brand and performance marketing to grow better"
              : "Brandformance : comment unir marque et performance pour mieux croître"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "Companies that separate 'brand investment' from 'performance investment' are making a costly strategic error. Brandformance is not a trend — it is the correction to an artificial separation we have been paying for decades."
              : "Les entreprises qui séparent 'investissement marque' et 'investissement performance' commettent une erreur stratégique coûteuse. Le brandformance n'est pas une tendance — c'est la correction d'une séparation artificielle que l'on paie depuis des décennies."}
          </p>
          <Image
            src="/og-brandformance-como-unir-marca-y-performance.jpg"
            alt={isEn ? "Brandformance: brand and performance strategy" : "Brandformance : stratégie marque et performance"}
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "For decades, digital marketing organised itself into two parallel worlds: the branding team built the brand long-term through creativity and storytelling, while the performance team optimised conversions with data and automation. It seemed logical. The problem is that the customer does not work that way — and neither does the budget."
              : "Pendant des décennies, le marketing digital s'est organisé en deux mondes parallèles : l'équipe brand construisait la marque à long terme avec créativité et storytelling, tandis que l'équipe performance optimisait les conversions avec des données et de l'automatisation. Cela semblait logique. Le problème, c'est que le client ne fonctionne pas ainsi — et le budget non plus."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "What brandformance is and why it matters" : "Qu'est-ce que le brandformance et pourquoi ça compte"}
          </h2>
          <p>
            {isEn
              ? "Brandformance is the strategic integration of branding and performance marketing into a single business logic. It is not about mixing creativity with data for aesthetics — it is about recognising that brand strengthens performance and performance data improves brand, in a self-reinforcing cycle."
              : "Le brandformance est l'intégration stratégique du branding et du performance marketing dans une seule logique commerciale. Il ne s'agit pas de mélanger créativité et données pour l'esthétique — il s'agit de reconnaître que la marque renforce la performance et que les données de performance améliorent la marque, dans un cycle auto-renforçant."}
          </p>
          <p>
            {isEn
              ? "A company that builds a strong brand reduces its cost per lead over time, because users who already know it convert at a higher rate. A company that only optimises conversions without building brand will see its CPL rise progressively as it exhausts high-intent segments. This is an empirical fact documented in the work of Les Binet and Peter Field across hundreds of brands over decades."
              : "Une entreprise qui construit une marque solide réduit son coût par lead avec le temps, car les utilisateurs qui la connaissent déjà convertissent à un taux plus élevé. Une entreprise qui n'optimise que les conversions sans construire de marque verra son CPL augmenter progressivement. C'est un fait empirique documenté dans les travaux de Les Binet et Peter Field sur des centaines de marques."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Want a strategy that builds brand and drives results?" : "Une stratégie qui construit la marque et génère des résultats ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "At Mkt Web 360 we design marketing strategies that align value proposition, communication and acquisition in a single direction — no silos, no contradictory messages."
                : "Chez Mkt Web 360, nous concevons des stratégies qui alignent proposition de valeur, communication et acquisition dans une seule direction — sans silos, sans messages contradictoires."}
            </p>
            <Link
              href={`/${lang}/digital-audit/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request free diagnosis" : "Demander un diagnostic gratuit"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "How brand strengthens performance" : "Comment la marque renforce la performance"}
          </h2>
          <p>
            {isEn
              ? "When a user already knows your brand, the entire conversion funnel works better. Your Google Ads CTR is higher because they recognise your name. Your email open rate improves because they trust the sender. Your sales close rate is higher because you have already reduced the friction of the unknown."
              : "Quand un utilisateur connaît déjà votre marque, tout l'entonnoir de conversion fonctionne mieux. Votre CTR Google Ads est plus élevé parce qu'il reconnaît votre nom. Votre taux d'ouverture email s'améliore parce qu'il fait confiance à l'expéditeur. Votre taux de transformation commercial est plus élevé parce que vous avez déjà réduit la friction de l'inconnu."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "How performance data improves the brand" : "Comment les données de performance améliorent la marque"}
          </h2>
          <p>
            {isEn
              ? "Performance data is the most precise feedback a brand strategy can receive. If one message in your ads converts three times better than another, that is not just a paid media signal — it is information about which part of your value proposition resonates most with your real audience."
              : "Les données de performance constituent le feedback le plus précis qu'une stratégie de marque puisse recevoir. Si un message dans vos annonces convertit trois fois mieux qu'un autre, ce n'est pas seulement un signal paid media — c'est une information sur la partie de votre proposition de valeur qui résonne le plus avec votre audience réelle."}
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "The mistake of separating budgets" : "L'erreur de séparer les budgets"}
          </h2>
          <p>
            {isEn
              ? "The most common symptom of the wrong approach is having two separate budget lines — 'branding' and 'performance' — with different teams, different KPIs and strategies that often contradict each other. The Google Ads ad promises low price, and the social media campaign promises premium values. Without coherence, the user does not know what to believe and the brand loses effectiveness on both fronts."
              : "Le symptôme le plus courant de la mauvaise approche est d'avoir deux lignes budgétaires séparées — 'branding' et 'performance' — avec des équipes différentes, des KPI différents et des stratégies qui se contredisent souvent. L'annonce Google Ads promet un prix bas, et la campagne réseaux sociaux promet des valeurs premium. Sans cohérence, l'utilisateur ne sait pas quoi croire."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Brandformance in practice for SMEs" : "Le brandformance en pratique pour les PME"}
          </h2>
          <p>
            {isEn
              ? "For an SME, practical implementation starts with strategic clarity: what is your distinctive value proposition and for whom? Once defined, that message should appear in your paid campaigns, your SEO, your editorial content, your email signature and in the responses you give in Google reviews. Small coherence decisions accumulate a brand effect that no separate branding budget could buy at lower cost."
              : "Pour une PME, la mise en œuvre pratique commence par la clarté stratégique : quelle est votre proposition de valeur distinctive et pour qui ? Une fois défini, ce message doit apparaître dans vos campagnes payantes, votre SEO, votre contenu éditorial, votre signature email et dans les réponses que vous donnez sur Google. Les petites décisions de cohérence accumulent un effet de marque qu'aucun budget branding séparé ne pourrait acheter à moindre coût."}
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Strategy that builds and converts at the same time" : "Une stratégie qui construit et convertit en même temps"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "If you want to review whether your current strategy unnecessarily separates brand and results, we can analyse it together in a diagnostic session."
                : "Si vous souhaitez vérifier si votre stratégie actuelle sépare inutilement marque et résultats, nous pouvons l'analyser ensemble dans une session de diagnostic."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/digital-audit/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request free diagnosis" : "Demander un diagnostic gratuit"}
              </Link>
              <Link
                href={`/${lang}/content-marketing/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "Content marketing service" : "Service marketing de contenu"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions about brandformance" : "Questions fréquentes sur le brandformance"}
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="brandformance-como-unir-marca-y-performance" />
    </>
  );
}
