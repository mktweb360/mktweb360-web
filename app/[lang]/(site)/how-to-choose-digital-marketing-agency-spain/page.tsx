import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Choose a Digital Marketing Agency in Spain — Checklist 2026"
      : "Comment Choisir une Agence de Marketing Digital en Espagne — Guide 2026",
    description: isEn
      ? "7 criteria to choose the right digital marketing agency in Spain in 2026. Red flags to avoid, questions to ask, and what a serious proposal should include."
      : "7 critères pour choisir la bonne agence de marketing digital en Espagne en 2026. Signaux d'alarme à éviter, questions à poser et ce qu'une proposition sérieuse doit inclure.",
    alternates: alternatesFor(`/${lang}/how-to-choose-digital-marketing-agency-spain/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-choose-digital-marketing-agency-spain/`,
    },
    openGraph: {
      title: isEn
        ? "How to Choose a Digital Marketing Agency in Spain 2026 | Mkt Web 360"
        : "Comment Choisir une Agence de Marketing Digital en Espagne 2026 | Mkt Web 360",
      description: isEn
        ? "Practical guide for foreign companies operating in Spain. What to look for, what to avoid, and how to evaluate proposals from Spanish agencies."
        : "Guide pratique pour les entreprises étrangères opérant en Espagne. Ce qu'il faut chercher, éviter et comment évaluer les propositions des agences espagnoles.",
      images: [{ url: "https://www.mktweb360.com/og-how-to-choose-digital-marketing-agency-spain.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function HowToChooseAgencyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  const criteria = isEn
    ? [
        {
          num: "01",
          title: "They speak your language — literally",
          desc: "If you need to explain your business through a translator, you will lose nuance at every step. Choose an agency that can communicate in your language: English, French or the language of your target market in Spain. This affects everything from briefing to reporting.",
        },
        {
          num: "02",
          title: "They know the Spanish market, not just digital marketing",
          desc: "Spain has specific consumer behaviours, cultural references and search patterns that differ significantly from France, the UK or Germany. An agency that has only worked with local Spanish companies may not understand your positioning. An agency that only knows international markets will miss Spanish SEO nuances.",
        },
        {
          num: "03",
          title: "No commission on ad spend",
          desc: "Many agencies charge a percentage of your Google Ads or Meta Ads budget — typically 10-20%. On a €5,000/month budget, that is €600-€1,000 going to the agency, not to Google. Ask explicitly: do you charge a management fee or a percentage of spend? A serious agency charges a fixed fee.",
        },
        {
          num: "04",
          title: "Sector exclusivity",
          desc: "Would you hire an agency that also works for your main competitor? Ask whether they have an exclusivity policy. A professional agency will work with only one company per sector per geographic area. If they cannot commit to this, your strategy and insights are shared.",
        },
        {
          num: "05",
          title: "Real results, not vanity metrics",
          desc: "Impressions and follower counts are not business results. Ask for examples of campaigns with measurable outcomes: qualified leads generated, cost per acquisition, revenue attributed to digital campaigns. If they cannot show this, they are selling you on activity, not results.",
        },
        {
          num: "06",
          title: "Transparent contracts without permanent lock-in",
          desc: "Avoid agencies that require 12-month minimum contracts with no exit clause. A confident agency does not need to trap clients. Look for rolling monthly contracts or reasonable notice periods — 1 to 3 months is standard.",
        },
        {
          num: "07",
          title: "AI-powered methodology — but with human oversight",
          desc: "In 2026, any serious agency uses AI to research, create and optimise faster. The question is not whether they use AI, but how: Do they have proprietary protocols? Do humans review every output? Ask to see their workflow. Generic ChatGPT outputs with no editorial control is a red flag.",
        },
      ]
    : [
        {
          num: "01",
          title: "Elle parle votre langue — littéralement",
          desc: "Si vous devez expliquer votre entreprise à travers un traducteur, vous perdrez des nuances à chaque étape. Choisissez une agence qui peut communiquer dans votre langue : anglais, français ou la langue de votre marché cible en Espagne.",
        },
        {
          num: "02",
          title: "Elle connaît le marché espagnol, pas seulement le marketing digital",
          desc: "L'Espagne a des comportements de consommateurs spécifiques, des références culturelles et des habitudes de recherche qui diffèrent significativement de la France, du Royaume-Uni ou de l'Allemagne. Une agence qui ne connaît que le marché espagnol local peut ne pas comprendre votre positionnement.",
        },
        {
          num: "03",
          title: "Pas de commission sur le budget publicitaire",
          desc: "Beaucoup d'agences prélèvent un pourcentage de votre budget Google Ads ou Meta Ads — généralement 10 à 20%. Sur un budget de 5 000€/mois, cela représente 600 à 1 000€ qui vont à l'agence, pas à Google. Demandez explicitement : facturez-vous des honoraires de gestion ou un pourcentage des dépenses ?",
        },
        {
          num: "04",
          title: "Exclusivité sectorielle",
          desc: "Engageriez-vous une agence qui travaille également pour votre principal concurrent ? Demandez s'ils ont une politique d'exclusivité. Une agence professionnelle travaille avec une seule entreprise par secteur par zone géographique.",
        },
        {
          num: "05",
          title: "Résultats réels, pas des métriques de vanité",
          desc: "Les impressions et le nombre de followers ne sont pas des résultats commerciaux. Demandez des exemples de campagnes avec des résultats mesurables : leads qualifiés générés, coût par acquisition, revenus attribués aux campagnes digitales.",
        },
        {
          num: "06",
          title: "Contrats transparents sans engagement permanent",
          desc: "Évitez les agences qui exigent des contrats minimum de 12 mois sans clause de sortie. Une agence confiante n'a pas besoin de piéger ses clients. Cherchez des contrats mensuels renouvelables ou des préavis raisonnables — 1 à 3 mois est standard.",
        },
        {
          num: "07",
          title: "Méthodologie propulsée par l'IA — mais avec supervision humaine",
          desc: "En 2026, toute agence sérieuse utilise l'IA pour rechercher, créer et optimiser plus rapidement. La question n'est pas de savoir si elle utilise l'IA, mais comment : a-t-elle des protocoles propriétaires ? Des humains contrôlent-ils chaque résultat ?",
        },
      ];

  const redFlags = isEn
    ? [
        "They guarantee specific Google rankings — no agency can guarantee rankings",
        "They charge a percentage of your ad spend instead of a fixed fee",
        "They cannot show results from previous campaigns with real metrics",
        "They require a 12-month contract on the first proposal",
        "They do not ask about your competitors, margins or customer lifetime value",
        "Their reporting consists of screenshots from Google Analytics with no analysis",
        "They work with your direct competitor in the same market",
      ]
    : [
        "Elles garantissent des positions spécifiques sur Google — aucune agence ne peut garantir les positions",
        "Elles prélèvent un pourcentage de vos dépenses publicitaires au lieu d'honoraires fixes",
        "Elles ne peuvent pas montrer des résultats de campagnes précédentes avec des métriques réelles",
        "Elles exigent un contrat de 12 mois dès la première proposition",
        "Elles ne posent pas de questions sur vos concurrents, vos marges ou la valeur vie client",
        "Leur reporting consiste en des captures d'écran de Google Analytics sans analyse",
        "Elles travaillent avec votre concurrent direct sur le même marché",
      ];

  const questions = isEn
    ? [
        "Can you show me 3 campaigns where you generated qualified leads, with the cost per lead?",
        "Do you charge a fixed management fee or a percentage of ad spend?",
        "Do you have an exclusivity policy by sector and geography?",
        "Who will manage my account day-to-day — a senior or a junior?",
        "What does your AI methodology consist of, and how do humans oversee it?",
        "Can I exit the contract with 30 days notice if results are not there after 6 months?",
        "How do you report results — what metrics, how often, in what format?",
      ]
    : [
        "Pouvez-vous me montrer 3 campagnes où vous avez généré des leads qualifiés, avec le coût par lead ?",
        "Facturez-vous des honoraires de gestion fixes ou un pourcentage des dépenses publicitaires ?",
        "Avez-vous une politique d'exclusivité par secteur et géographie ?",
        "Qui gérera mon compte au quotidien — un senior ou un junior ?",
        "En quoi consiste votre méthodologie IA et comment les humains la supervisent-ils ?",
        "Puis-je résilier le contrat avec 30 jours de préavis si les résultats ne sont pas au rendez-vous après 6 mois ?",
        "Comment rendez-vous compte des résultats — quelles métriques, à quelle fréquence, sous quel format ?",
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            lang={lang}
            items={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "Blog" : "Blog", href: `/${lang}/blog/` },
              { label: isEn ? "Choose an Agency in Spain" : "Choisir une Agence en Espagne" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {isEn
              ? "How to Choose a Digital Marketing Agency in Spain in 2026"
              : "Comment Choisir une Agence de Marketing Digital en Espagne en 2026"}
          </h1>
          <p className="text-xl text-primary-200">
            {isEn
              ? "7 criteria, 7 red flags and 7 questions to ask before signing. A practical guide for foreign companies operating in Spain."
              : "7 critères, 7 signaux d'alarme et 7 questions à poser avant de signer. Guide pratique pour entreprises étrangères opérant en Espagne."}
          </p>
        </div>
      </section>

      <BlogBanner lang={lang} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            {isEn
              ? "Choosing the wrong marketing agency in Spain is an expensive mistake. Not just in money — in time, missed opportunities, and the frustration of having to start over. This guide gives you the exact framework to evaluate agencies before committing."
              : "Choisir la mauvaise agence marketing en Espagne est une erreur coûteuse. Pas seulement en argent — en temps, en opportunités manquées et en frustration d'avoir à recommencer. Ce guide vous donne le cadre exact pour évaluer les agences avant de vous engager."}
          </p>

          <h2 className="text-3xl font-bold text-primary-600 mb-10">
            {isEn ? "7 Criteria for Choosing the Right Agency" : "7 Critères pour Choisir la Bonne Agence"}
          </h2>

          <div className="space-y-10">
            {criteria.map((c) => (
              <div key={c.num} className="flex gap-6">
                <div className="text-5xl font-bold text-primary-100 shrink-0 w-14">{c.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{c.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-red-700 mb-8">
            {isEn ? "🚩 Red Flags — Walk Away If You See These" : "🚩 Signaux d'Alarme — Partez si Vous Voyez Ceci"}
          </h2>
          <ul className="space-y-4">
            {redFlags.map((flag) => (
              <li key={flag} className="flex gap-3 items-start">
                <span className="text-red-500 font-bold mt-0.5">✗</span>
                <span className="text-gray-700">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">
            {isEn ? "7 Questions to Ask Before Signing" : "7 Questions à Poser Avant de Signer"}
          </h2>
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="flex gap-4 p-4 bg-primary-50 rounded-lg">
                <span className="text-primary-600 font-bold shrink-0">{i + 1}.</span>
                <span className="text-gray-700">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "We Answer All 7 Questions Upfront"
              : "Nous Répondons aux 7 Questions d'Emblée"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Fixed fee. No commission. Sector exclusivity. English and French-speaking team. Results-based reporting."
              : "Honoraires fixes. Sans commission. Exclusivité sectorielle. Équipe anglophone et francophone. Reporting basé sur les résultats."}
          </p>
          <a
            href={`/${lang}/digital-marketing-agency-spain/`}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            {isEn ? "See our services →" : "Voir nos services →"}
          </a>
        </div>
      </section>

      <RelatedArticles lang={lang} currentSlug="how-to-choose-digital-marketing-agency-spain" />
    </>
  );
}
