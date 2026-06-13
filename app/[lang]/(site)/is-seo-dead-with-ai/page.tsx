import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Is SEO Dead With AI? The Honest Answer | Mkt Web 360"
      : "Le SEO est-il mort avec l'IA ? La réponse honnête | Mkt Web 360",
    description: isEn
      ? "With ChatGPT and AI search engines on the rise, many wonder if SEO is still worth investing in. Here is the honest answer."
      : "Avec la montée de ChatGPT et des moteurs IA, beaucoup se demandent si le SEO vaut encore la peine. Voici la réponse honnête.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "is-seo-dead-with-ai" : "le-seo-est-il-mort-avec-ia"}/`,
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
            { label: isEn ? "Is SEO dead?" : "Le SEO est-il mort ?" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">AI · Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Is SEO dead with AI? No — but it is changing fast"
            : "Le SEO est-il mort avec l'IA ? Non — mais il change vite"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Every year someone declares SEO dead. This time the argument is more serious: AI is changing how people search. But SEO is not dying — it is evolving. Here is what you need to know."
            : "Chaque année, quelqu'un déclare le SEO mort. Cette fois, l'argument est plus sérieux : l'IA change la façon dont les gens cherchent. Mais le SEO ne meurt pas — il évolue. Voici ce que vous devez savoir."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How AI is changing search behaviour" : "Comment l'IA change le comportement de recherche"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "AI overviews in Google now answer many queries directly on the results page. ChatGPT, Perplexity and Gemini are capturing a growing share of informational searches. For simple questions — 'what is X', 'how does Y work' — users increasingly get answers without clicking any website."
            : "Les résumés IA dans Google répondent désormais à de nombreuses requêtes directement sur la page de résultats. ChatGPT, Perplexity et Gemini captent une part croissante des recherches informationnelles. Pour les questions simples — 'qu'est-ce que X', 'comment fonctionne Y' — les utilisateurs obtiennent de plus en plus des réponses sans cliquer sur aucun site."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "However, transactional and commercial intent searches — 'best agency near me', 'buy X', 'hire Y in Madrid' — still drive people to click. Users searching with buying intent still need to compare, verify and contact. No AI answers 'which plumber should I call today' definitively."
            : "Cependant, les recherches à intention transactionnelle et commerciale — 'meilleure agence près de moi', 'acheter X', 'embaucher Y à Paris' — poussent encore les gens à cliquer. Les utilisateurs cherchant avec une intention d'achat ont encore besoin de comparer, vérifier et contacter. Aucune IA ne répond définitivement à 'quel plombier appeler aujourd'hui'."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What Google says about AI content and SEO" : "Ce que Google dit sur le contenu IA et le SEO"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google has confirmed it will continue to reward helpful, original content regardless of how it was created. What it penalises is low-quality, mass-produced content designed to manipulate rankings without delivering real value. AI-generated content that is accurate, well-structured and useful is not penalised."
            : "Google a confirmé qu'il continuera à récompenser le contenu utile et original, quelle que soit la façon dont il a été créé. Ce qu'il pénalise, c'est le contenu de faible qualité, produit en masse pour manipuler les classements sans apporter de valeur réelle. Le contenu généré par IA qui est précis, bien structuré et utile n'est pas pénalisé."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google's Helpful Content System evaluates whether content genuinely helps users or exists only for search engines. This standard has existed since before AI — AI just makes it easier to produce bad content at scale, so the signal has become more critical."
            : "Le système de contenu utile de Google évalue si le contenu aide vraiment les utilisateurs ou n'existe que pour les moteurs de recherche. Ce standard existait avant l'IA — l'IA facilite simplement la production de mauvais contenu à grande échelle, ce qui rend le signal encore plus critique."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why SEO still matters in the AI era" : "Pourquoi le SEO est toujours important à l'ère de l'IA"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google processes over 8.5 billion searches per day. Even if AI captures 20–30% of informational queries, that still leaves billions of commercial and transactional searches where rankings drive real business. For local businesses, service companies and ecommerce, organic search remains the highest-ROI channel."
            : "Google traite plus de 8,5 milliards de recherches par jour. Même si l'IA capture 20 à 30% des requêtes informationnelles, cela laisse encore des milliards de recherches commerciales et transactionnelles où les classements génèrent de vrais résultats. Pour les entreprises locales, les sociétés de services et le e-commerce, la recherche organique reste le canal avec le meilleur ROI."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Furthermore, AI tools like ChatGPT and Perplexity pull their answers from high-authority websites. If your website has strong SEO, it is also more likely to be cited in AI responses. Good SEO and good GEO reinforforce each other."
            : "De plus, les outils d'IA comme ChatGPT et Perplexity puisent leurs réponses dans des sites web de haute autorité. Si votre site web a un SEO solide, il est aussi plus susceptible d'être cité dans les réponses IA. Un bon SEO et un bon GEO se renforcent mutuellement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What is changing in SEO strategy" : "Ce qui change dans la stratégie SEO"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The shift is from keyword-stuffed pages to genuinely expert content. Google's E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) are now central. Content that demonstrates real expertise, first-hand experience and credibility ranks above generic AI-generated summaries."
            : "Le changement se fait des pages bourrées de mots-clés vers du contenu vraiment expert. Les signaux E-E-A-T de Google (Expérience, Expertise, Autorité, Fiabilité) sont désormais centraux. Le contenu qui démontre une véritable expertise, une expérience de première main et une crédibilité se classe au-dessus des résumés génériques générés par IA."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Technical SEO is more important than ever: structured data, Core Web Vitals, mobile performance. Backlinks remain a strong signal. Local SEO continues to dominate for local businesses. What is declining is volume-based keyword stuffing and thin, duplicative content."
            : "Le SEO technique est plus important que jamais : données structurées, Core Web Vitals, performance mobile. Les backlinks restent un signal fort. Le SEO local continue de dominer pour les entreprises locales. Ce qui décline, c'est le bourrage de mots-clés basé sur le volume et le contenu mince et dupliqué."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "SEO + GEO: the future of search visibility" : "SEO + GEO : l'avenir de la visibilité en recherche"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The forward-looking strategy is not SEO vs AI — it is SEO + GEO. GEO (Generative Engine Optimization) focuses on making your brand appear in ChatGPT, Perplexity and Gemini responses. It shares many principles with SEO: authority, structured data, clear factual claims, good website signals."
            : "La stratégie prospective n'est pas SEO vs IA — c'est SEO + GEO. Le GEO (Generative Engine Optimization) se concentre sur l'apparition de votre marque dans les réponses de ChatGPT, Perplexity et Gemini. Il partage de nombreux principes avec le SEO : autorité, données structurées, affirmations factuelles claires, bons signaux de site web."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Businesses that invest in both SEO and GEO now will capture clicks from traditional Google searches and also appear as recommendations in AI responses. This dual presence is the new competitive advantage in search visibility."
            : "Les entreprises qui investissent à la fois dans le SEO et le GEO maintenant captureront des clics des recherches Google traditionnelles et apparaîtront également comme recommandations dans les réponses IA. Cette double présence est le nouvel avantage concurrentiel en visibilité de recherche."}
        </p>

        <BlogBanner variant="geo" />

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
      <RelatedArticles category="AI · Strategy" />
    </>
  );
}
