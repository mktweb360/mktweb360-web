import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Ads in Spain for Foreign Companies — Setup, Costs & Strategy 2026"
      : "Google Ads en Espagne pour Entreprises Étrangères — Configuration, Coûts & Stratégie 2026",
    description: isEn
      ? "How Google Ads works in Spain for French and British companies. Campaign setup, Spanish keyword bidding, costs, and how to avoid the most common mistakes foreign companies make."
      : "Comment fonctionne Google Ads en Espagne pour les entreprises françaises et britanniques. Configuration de campagne, enchères sur mots-clés espagnols, coûts et erreurs à éviter.",
    alternates: alternatesFor(`/${lang}/google-ads-spain-foreign-companies/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-ads-spain-foreign-companies/`,
    },
    openGraph: {
      title: isEn
        ? "Google Ads in Spain for Foreign Companies 2026 | Mkt Web 360"
        : "Google Ads en Espagne pour Entreprises Étrangères 2026 | Mkt Web 360",
      description: isEn
        ? "Practical guide: how to run Google Ads in Spain without wasting budget. Spanish CPCs, campaign structure, and management fees explained."
        : "Guide pratique : comment diffuser Google Ads en Espagne sans gaspiller le budget. CPC espagnols, structure de campagne et honoraires de gestion expliqués.",
      images: [{ url: "https://www.mktweb360.com/og-sem.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function GoogleAdsSpainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  const sections = isEn
    ? [
        {
          title: "What Makes Google Ads in Spain Different",
          content: "Spanish Google Ads campaigns behave differently from UK or French markets. Cost-per-click on commercial keywords is generally 20-40% lower than in the UK — which makes Spain an attractive market for foreign companies if campaigns are structured correctly. However, Spanish search intent patterns differ: users often include location qualifiers ('en Madrid', 'para empresas', 'empresas españolas') that require specific match type strategies. Running a copy-paste of your existing campaigns translated into Spanish will significantly underperform.",
        },
        {
          title: "Campaign Structure for Foreign Companies in Spain",
          content: "The most effective structure for a foreign company entering the Spanish market: Start with a single Search campaign targeting your core commercial keywords in Spanish. Use exact match and phrase match — broad match in a new market wastes budget rapidly. Create separate ad groups by intent: informational ('qué es X'), commercial ('precio X España'), and transactional ('contratar X Madrid'). Use location targeting by region initially — Madrid and Barcelona account for 40% of Spanish commercial searches — then expand as you gather data.",
        },
        {
          title: "Spanish CPC Benchmarks by Sector — 2026",
          content: "Average CPCs in Spain by sector (2026 data): Legal services: €3-8. Financial services: €2-6. Marketing and advertising: €1.5-4. Software/SaaS: €2-5. E-commerce (general): €0.40-1.20. Healthcare: €1.5-4. Education and training: €1-3. Construction and real estate: €1.5-5. These are significantly lower than equivalent UK CPCs, which typically run 50-80% higher. This CPC advantage makes Spain particularly attractive for companies with a UK-calibrated CAC tolerance.",
        },
        {
          title: "The Commission Problem — What Most Agencies Do Not Tell You",
          content: "The standard agency model in Spain charges 15-20% of your monthly ad spend as a management fee on top of a base retainer. On a €5,000/month budget, you pay €750-€1,000 per month extra to the agency — money that does not go to Google. This creates a misaligned incentive: the agency benefits from you spending more, not from you converting more efficiently. The alternative: a fixed monthly management fee regardless of budget. Ask every agency you speak with: do you charge a percentage of spend? If yes, calculate the actual annual cost at your planned budget.",
        },
        {
          title: "Spanish Landing Pages — Why Your Current Pages Will Not Convert",
          content: "The single biggest driver of wasted Google Ads budget for foreign companies in Spain: sending Spanish traffic to pages not optimised for the Spanish market. Spanish users have specific trust signals: a local phone number (Spanish format +34), a Spanish address or at minimum a mention of Spain, pricing in euros, testimonials from Spanish companies, and content that reflects knowledge of Spanish market conditions. A page that converts at 4% in the UK may convert at 1-2% in Spain if these signals are absent. Before scaling budget, validate your Spanish landing page conversion rate.",
        },
        {
          title: "Conversion Tracking — The Non-Negotiable First Step",
          content: "Never launch Google Ads in Spain — or anywhere — without conversion tracking. This sounds obvious but is violated by a surprising number of companies. Conversion tracking tells Google's algorithm which clicks lead to results, enabling Smart Bidding to optimise toward actual business outcomes rather than clicks. Minimum setup before launch: form submission tracking, phone call tracking (critical in Spain, where phone calls convert significantly more than in northern Europe), and if applicable, purchase or quote request tracking.",
        },
        {
          title: "Realistic Results Timeline — Google Ads in Spain",
          content: "Week 1-2: Campaign goes live, initial data collection, manual bid management. Week 3-4: First conversion data, initial bid adjustments, negative keyword refinement. Month 2: Smart Bidding activation once sufficient conversion data (minimum 30 conversions in 30 days). Month 3: Campaign optimisation based on search term reports, audience insights, device performance. Month 4-6: Scaling what works, pausing what does not, testing new ad formats. Google Ads in Spain delivers results faster than SEO — but requires 60-90 days of budget to properly optimise the algorithm.",
        },
      ]
    : [
        {
          title: "Ce Qui Rend Google Ads en Espagne Différent",
          content: "Les campagnes Google Ads espagnoles se comportent différemment des marchés britanniques ou français. Le coût par clic sur les mots-clés commerciaux est généralement 20 à 40% moins cher qu'au Royaume-Uni. Cependant, les modèles d'intention de recherche espagnols diffèrent : les utilisateurs incluent souvent des qualificatifs de localisation ('en Madrid', 'para empresas') qui nécessitent des stratégies de correspondance spécifiques. Copier-coller vos campagnes existantes traduites en espagnol sous-performera significativement.",
        },
        {
          title: "Structure de Campagne pour Entreprises Étrangères en Espagne",
          content: "La structure la plus efficace pour une entreprise étrangère entrant sur le marché espagnol : commencez par une seule campagne Search ciblant vos mots-clés commerciaux principaux en espagnol. Utilisez la correspondance exacte et expression — la large correspondance dans un nouveau marché gaspille rapidement le budget. Créez des groupes d'annonces séparés par intention : informationnelle, commerciale et transactionnelle.",
        },
        {
          title: "Benchmarks CPC Espagnols par Secteur — 2026",
          content: "CPC moyens en Espagne par secteur (données 2026) : Services juridiques : 3-8€. Services financiers : 2-6€. Marketing et publicité : 1,5-4€. Logiciel/SaaS : 2-5€. E-commerce (général) : 0,40-1,20€. Santé : 1,5-4€. Formation : 1-3€. Ces CPC sont significativement inférieurs aux CPC britanniques équivalents, qui sont généralement 50 à 80% plus élevés. Cet avantage CPC rend l'Espagne particulièrement attractive.",
        },
        {
          title: "Le Problème des Commissions — Ce que la Plupart des Agences Ne Disent Pas",
          content: "Le modèle standard des agences en Espagne facture 15 à 20% de vos dépenses publicitaires mensuelles en frais de gestion. Sur un budget de 5 000€/mois, vous payez 750 à 1 000€ supplémentaires par mois à l'agence — de l'argent qui ne va pas à Google. Cela crée une incitation mal alignée : l'agence bénéficie de vous voir dépenser plus, pas de vous voir convertir plus efficacement. L'alternative : des honoraires de gestion mensuels fixes indépendants du budget.",
        },
        {
          title: "Pages d'Atterrissage Espagnoles — Pourquoi Vos Pages Actuelles Ne Convertiront Pas",
          content: "Le principal driver de gaspillage de budget Google Ads pour les entreprises étrangères en Espagne : envoyer du trafic espagnol vers des pages non optimisées pour le marché espagnol. Les signaux de confiance spécifiques : un numéro de téléphone local (format espagnol +34), une adresse espagnole, les prix en euros, des témoignages d'entreprises espagnoles, et un contenu reflétant la connaissance des conditions du marché espagnol.",
        },
        {
          title: "Suivi des Conversions — L'Étape Non Négociable",
          content: "Ne lancez jamais Google Ads en Espagne sans suivi des conversions. Configuration minimale avant le lancement : suivi des soumissions de formulaires, suivi des appels téléphoniques (critique en Espagne, où les appels convertissent significativement plus qu'en Europe du Nord), et si applicable, suivi des achats ou demandes de devis.",
        },
        {
          title: "Calendrier de Résultats Réalistes — Google Ads en Espagne",
          content: "Semaine 1-2 : Mise en ligne de la campagne, collecte de données initiales, gestion manuelle des enchères. Semaine 3-4 : Premières données de conversion, ajustements d'enchères. Mois 2 : Activation des enchères intelligentes avec suffisamment de données (minimum 30 conversions en 30 jours). Mois 3 : Optimisation basée sur les rapports de termes de recherche. Google Ads en Espagne livre des résultats plus rapidement que le SEO — mais nécessite 60 à 90 jours de budget pour optimiser correctement l'algorithme.",
        },
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
              { label: isEn ? "Google Ads in Spain" : "Google Ads en Espagne" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {isEn
              ? "Google Ads in Spain for Foreign Companies — Setup, Costs & Strategy 2026"
              : "Google Ads en Espagne pour Entreprises Étrangères — Configuration, Coûts & Stratégie 2026"}
          </h1>
          <p className="text-xl text-primary-200">
            {isEn
              ? "What you need to know before spending a single euro on Google Ads in the Spanish market."
              : "Ce que vous devez savoir avant de dépenser un seul euro sur Google Ads sur le marché espagnol."}
          </p>
        </div>
      </section>

      <BlogBanner lang={lang} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            {isEn
              ? "Ready to Launch Google Ads in Spain?"
              : "Prêt à Lancer Google Ads en Espagne ?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEn
              ? "Fixed management fee. No commission on spend. English-speaking team. Free account audit."
              : "Honoraires de gestion fixes. Sans commission sur les dépenses. Équipe francophone. Audit de compte gratuit."}
          </p>
          <ContactForm formType={`${lang}-google-ads-spain`} />
        </div>
      </section>

      <RelatedArticles lang={lang} currentSlug="google-ads-spain-foreign-companies" />
    </>
  );
}
