import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO in Spain for Foreign Companies — Complete Guide 2026"
      : "SEO en Espagne pour Entreprises Étrangères — Guide Complet 2026",
    description: isEn
      ? "How SEO works in Spain for French and British companies. Spanish search behaviour, local vs national strategy, and how to rank on Google.es without a physical office."
      : "Comment fonctionne le SEO en Espagne pour les entreprises françaises et britanniques. Comportement de recherche espagnol, stratégie locale vs nationale et comment se positionner sur Google.es.",
    alternates: alternatesFor(`/${lang}/seo-spain-foreign-companies/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-spain-foreign-companies/`,
    },
    openGraph: {
      title: isEn
        ? "SEO in Spain for Foreign Companies 2026 | Mkt Web 360"
        : "SEO en Espagne pour Entreprises Étrangères 2026 | Mkt Web 360",
      description: isEn
        ? "Practical SEO guide for French and British companies operating in Spain. Spanish search behaviour, keyword strategy and technical requirements."
        : "Guide SEO pratique pour entreprises françaises et britanniques opérant en Espagne. Comportement de recherche espagnol, stratégie de mots-clés et exigences techniques.",
      images: [{ url: "https://www.mktweb360.com/og-seo-spain-foreign-companies.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function SeoSpainForeignCompaniesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  const sections = isEn
    ? [
        {
          title: "How Spanish Users Search — What Foreign Companies Get Wrong",
          content: "Spanish users search differently from British or French users. Search queries tend to be longer and more conversational. Brand trust matters significantly — Spanish consumers are more likely to click on a result with a familiar brand name or location signal. Without a Spanish address or local signals, you are competing at a disadvantage against established local businesses. The fix: local landing pages, NAP consistency across directories, and content that reflects Spanish commercial intent.",
        },
        {
          title: "Local SEO vs National SEO in Spain — Which One You Need",
          content: "If your business serves a specific city or region (Madrid, Barcelona, Valencia, Seville), local SEO is your priority: Google Business Profile, local citations, reviews in Spanish, and city-specific landing pages. If you serve all of Spain from a single location or operate digitally, national SEO applies: domain authority, informational content, and category pages targeting Spanish keywords. Most foreign companies operating in Spain need both — local signals for trust, national reach for scale.",
        },
        {
          title: "Do You Need a .es Domain to Rank on Google Spain?",
          content: "No — but it helps. A .com domain can rank on Google.es with proper hreflang and geotargeting in Google Search Console. However, Spanish users have a higher click-through rate on .es domains for local searches. Our recommendation: if you are committing to the Spanish market for the medium term, register the .es domain and redirect to your main site or build a Spanish-language subdomain. The SEO benefit is real but not critical in most sectors.",
        },
        {
          title: "Spanish Keyword Strategy — It Is Not Just Translation",
          content: "The most common mistake foreign companies make: translating their existing keyword list into Spanish. Spanish commercial keywords have their own search volume, competition level, and search intent. 'Marketing digital para pymes' gets significantly more searches than its literal translation from French or English equivalents. You need a native Spanish keyword research process — not Google Translate applied to your existing strategy. Regional variations also matter: some terms used in Spain differ from Latin American Spanish.",
        },
        {
          title: "Content Strategy for SEO in Spain — What Works in 2026",
          content: "Google Spain rewards expertise, authority and trustworthiness — the same E-E-A-T signals as everywhere, but applied to Spanish-language content. What works: long-form guides answering specific questions Spanish users ask, sector-specific content demonstrating real knowledge of the Spanish market, and content that mentions Spanish regulations, prices and market conditions. What does not work: thin translated content, generic articles that could apply to any country, and content without Spanish-specific examples or data.",
        },
        {
          title: "GEO — The New SEO Layer That Spanish Companies Are Ignoring",
          content: "In 2026, between 30-40% of informational searches in Spain start with an AI assistant — ChatGPT, Gemini, Perplexity. When a French executive in Madrid asks ChatGPT 'which digital marketing agency should I use in Spain?', the agencies that appear are those with structured data, authoritative content, and brand mentions across multiple sources. GEO (Generative Engine Optimization) is the discipline of optimising for AI citations. It runs in parallel with SEO and is not yet on most agencies' radar — which means early movers gain significant advantage.",
        },
        {
          title: "Timeline — Realistic SEO Results in Spain for Foreign Companies",
          content: "Month 1-2: Technical audit, keyword strategy, on-page optimisation, Google Business Profile setup. Month 3-4: Content publishing, local citations, initial ranking movements for long-tail keywords. Month 5-6: Measurable traffic growth on target keywords, first qualified leads from organic. Month 7-12: Competitive positions on main commercial terms, compound growth from content authority. SEO in Spain is not faster or slower than elsewhere — but starting without local market knowledge costs you 2-3 months of false starts.",
        },
      ]
    : [
        {
          title: "Comment les Espagnols Recherchent — Ce que les Entreprises Étrangères Ratent",
          content: "Les utilisateurs espagnols recherchent différemment des Britanniques ou des Français. Les requêtes tendent à être plus longues et conversationnelles. La confiance envers la marque compte beaucoup — les consommateurs espagnols cliquent davantage sur un résultat avec un nom de marque familier ou un signal de localisation. Sans adresse espagnole ni signaux locaux, vous concurrencez les entreprises locales établies avec un handicap. La solution : pages d'atterrissage locales, cohérence NAP dans les annuaires, et contenu reflétant l'intention commerciale espagnole.",
        },
        {
          title: "SEO Local vs SEO National en Espagne — Ce Dont Vous Avez Besoin",
          content: "Si votre entreprise dessert une ville ou région spécifique (Madrid, Barcelone, Valence, Séville), le SEO local est votre priorité : Google Business Profile, citations locales, avis en espagnol et pages d'atterrissage spécifiques à la ville. Si vous desservez toute l'Espagne depuis un seul endroit ou opérez numériquement, le SEO national s'applique. La plupart des entreprises étrangères opérant en Espagne ont besoin des deux — signaux locaux pour la confiance, portée nationale pour l'échelle.",
        },
        {
          title: "Avez-vous Besoin d'un Domaine .es pour Vous Positionner sur Google Espagne ?",
          content: "Non — mais cela aide. Un domaine .com peut se positionner sur Google.es avec un hreflang approprié et un géociblage dans Google Search Console. Cependant, les utilisateurs espagnols ont un taux de clics plus élevé sur les domaines .es pour les recherches locales. Notre recommandation : si vous vous engagez sur le marché espagnol à moyen terme, enregistrez le domaine .es.",
        },
        {
          title: "Stratégie de Mots-Clés Espagnols — Ce N'est Pas Juste une Traduction",
          content: "L'erreur la plus courante des entreprises étrangères : traduire leur liste de mots-clés existante en espagnol. Les mots-clés commerciaux espagnols ont leur propre volume de recherche, niveau de concurrence et intention de recherche. Vous avez besoin d'un processus de recherche de mots-clés natif en espagnol — pas de Google Translate appliqué à votre stratégie existante.",
        },
        {
          title: "Stratégie de Contenu pour le SEO en Espagne — Ce Qui Fonctionne en 2026",
          content: "Google Espagne récompense l'expertise, l'autorité et la fiabilité. Ce qui fonctionne : guides détaillés répondant aux questions spécifiques des utilisateurs espagnols, contenu sectoriel démontrant une vraie connaissance du marché espagnol, et contenu mentionnant les réglementations, prix et conditions de marché espagnols. Ce qui ne fonctionne pas : contenu traduit superficiellement, articles génériques qui pourraient s'appliquer à n'importe quel pays.",
        },
        {
          title: "GEO — La Nouvelle Couche SEO que les Entreprises Espagnoles Ignorent",
          content: "En 2026, entre 30 et 40% des recherches informatives en Espagne commencent par un assistant IA — ChatGPT, Gemini, Perplexity. Le GEO (Generative Engine Optimization) est la discipline d'optimisation pour les citations IA. Il s'exécute en parallèle du SEO et n'est pas encore sur le radar de la plupart des agences — ce qui signifie que les précurseurs gagnent un avantage significatif.",
        },
        {
          title: "Calendrier — Résultats SEO Réalistes en Espagne pour Entreprises Étrangères",
          content: "Mois 1-2 : Audit technique, stratégie de mots-clés, optimisation on-page, configuration Google Business Profile. Mois 3-4 : Publication de contenu, citations locales, premiers mouvements de positionnement. Mois 5-6 : Croissance mesurable du trafic, premiers leads qualifiés depuis l'organique. Mois 7-12 : Positions concurrentielles sur les termes commerciaux principaux, croissance composée depuis l'autorité de contenu.",
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
              { label: isEn ? "SEO in Spain" : "SEO en Espagne" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            {isEn
              ? "SEO in Spain for Foreign Companies — Complete Guide 2026"
              : "SEO en Espagne pour Entreprises Étrangères — Guide Complet 2026"}
          </h1>
          <p className="text-xl text-primary-200">
            {isEn
              ? "What you need to know before investing in SEO in Spain: search behaviour, keyword strategy, local vs national, and realistic timelines."
              : "Ce que vous devez savoir avant d'investir dans le SEO en Espagne : comportement de recherche, stratégie de mots-clés, local vs national, et délais réalistes."}
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

      <section className="py-12 px-4 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Ready to Start SEO in Spain?"
              : "Prêt à Démarrer le SEO en Espagne ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "English and French-speaking team. We know the Spanish market. Free initial audit."
              : "Équipe anglophone et francophone. Nous connaissons le marché espagnol. Audit initial gratuit."}
          </p>
          <a
            href={`/${lang}/digital-marketing-agency-spain/`}
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            {isEn ? "Get a free audit →" : "Obtenir un audit gratuit →"}
          </a>
        </div>
      </section>

      <RelatedArticles lang={lang} currentSlug="seo-spain-foreign-companies" />
    </>
  );
}
