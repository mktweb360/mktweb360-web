import type { Lang } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: lang === "en" ? "About Us — Mkt Web 360" : "À propos — Mkt Web 360",
    description:
      lang === "en"
        ? "Meet the Mkt Web 360 team. Senior experience, AI protocols and sector exclusivity. Digital marketing agency for SMEs. Nationwide service."
        : "Découvrez l'équipe Mkt Web 360. Expérience senior, protocoles IA et exclusivité sectorielle. Agence de marketing digital pour PME.",
    alternates: alternatesFor(`/${lang}/about/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/about/`,
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const values = isEn
    ? [
        { title: "Commitment", desc: "We treat every project as if it were our own business. Your success is our success." },
        { title: "Transparency", desc: "Clear reports, real metrics and honest communication about what works and what doesn't." },
        { title: "Results", desc: "Every action has a measurable objective. We don't do marketing for its own sake — we do marketing that converts." },
        { title: "Communication", desc: "Response within 24 hours and direct contact with your account manager at all times." },
        { title: "Exclusivity", desc: "We don't work with your competition in your area. Your sector is exclusively yours." },
        { title: "AI Applied", desc: "Our own AI protocols integrated into every service for faster and more precise results." },
      ]
    : [
        { title: "Engagement", desc: "Nous traitons chaque projet comme s'il était notre propre entreprise. Votre succès est notre succès." },
        { title: "Transparence", desc: "Rapports clairs, métriques réelles et communication honnête sur ce qui fonctionne et ce qui ne fonctionne pas." },
        { title: "Résultats", desc: "Chaque action a un objectif mesurable. Nous ne faisons pas du marketing pour le faire — nous faisons du marketing qui convertit." },
        { title: "Communication", desc: "Réponse dans les 24 heures et contact direct avec votre responsable de compte à tout moment." },
        { title: "Exclusivité", desc: "Nous ne travaillons pas avec vos concurrents dans votre zone. Votre secteur est exclusivement le vôtre." },
        { title: "IA Appliquée", desc: "Nos propres protocoles IA intégrés dans chaque service pour des résultats plus rapides et plus précis." },
      ];

  const enDiffs = [
    "Senior team — no trainees or junior profiles",
    "Our own AI protocols in every service",
    "Sector and geographic exclusivity per client",
    "Real reporting — good and bad data",
    "Direct access to your account manager, always",
    "Business-oriented, not vanity metrics",
  ];

  const frDiffs = [
    "Équipe senior — pas de stagiaires ni de profils juniors",
    "Protocoles IA propres dans chaque service",
    "Exclusivité sectorielle et géographique par client",
    "Reporting réel — bonnes et mauvaises données",
    "Accès direct à votre responsable de compte, toujours",
    "Orienté business, pas métriques de vanité",
  ];

  const steps = isEn
    ? [
        { num: "01", title: "Free diagnosis", desc: "We analyse your digital situation: website, SEO, competition, social media and analytics. No cost and no commitment." },
        { num: "02", title: "Personalised strategy", desc: "We design an action plan with clear objectives, timelines and tracking metrics adapted to your business." },
        { num: "03", title: "Implementation with AI", desc: "We execute with our own AI protocols that accelerate timelines and improve the precision of every action." },
        { num: "04", title: "Continuous monitoring", desc: "We monitor results weekly and report monthly with real data and next steps." },
      ]
    : [
        { num: "01", title: "Diagnostic gratuit", desc: "Nous analysons votre situation digitale : site web, SEO, concurrence, réseaux sociaux et analytics. Sans frais et sans engagement." },
        { num: "02", title: "Stratégie personnalisée", desc: "Nous concevons un plan d'action avec des objectifs clairs, des délais et des métriques de suivi adaptés à votre entreprise." },
        { num: "03", title: "Implémentation avec IA", desc: "Nous exécutons avec nos propres protocoles IA qui accélèrent les délais et améliorent la précision de chaque action." },
        { num: "04", title: "Suivi continu", desc: "Nous surveillons les résultats hebdomadairement et reportons mensuellement avec des données réelles et les prochaines étapes." },
      ];

  const aiCards = isEn
    ? [
        { title: "Faster", desc: "What used to take days we resolve in hours. More time for strategy and less for repetitive tasks." },
        { title: "More precise", desc: "We analyse more data in less time. We detect opportunities and threats before a traditional agency." },
        { title: "Better decisions", desc: "Every recommendation is backed by real data, not intuition or current trends." },
      ]
    : [
        { title: "Plus rapide", desc: "Ce qui prenait des jours, nous le résolvons en heures. Plus de temps pour la stratégie et moins pour les tâches répétitives." },
        { title: "Plus précis", desc: "Nous analysons plus de données en moins de temps. Nous détectons les opportunités et menaces avant une agence traditionnelle." },
        { title: "Meilleures décisions", desc: "Chaque recommandation est soutenue par des données réelles, pas par l'intuition ou les tendances du moment." },
      ];

  const sectors = isEn
    ? [
        { title: "SEO", desc: "We position you on Google with proven and lasting strategies.", href: `/${lang}/seo/`, badge: "Established" },
        { title: "GEO", desc: "We optimise your presence to appear in ChatGPT, Perplexity and Gemini responses.", href: `/${lang}/geo-ai-positioning/`, badge: "Pioneers" },
        { title: "SEO + GEO", desc: "The complete strategy for total visibility across all current and future search channels.", href: `/${lang}/contact/`, badge: "Recommended" },
      ]
    : [
        { title: "SEO", desc: "Nous vous positionnons sur Google avec des stratégies éprouvées et durables.", href: `/${lang}/seo/`, badge: "Établi" },
        { title: "GEO", desc: "Nous optimisons votre présence pour apparaître dans les réponses de ChatGPT, Perplexity et Gemini.", href: `/${lang}/geo-ai-positioning/`, badge: "Pionniers" },
        { title: "SEO + GEO", desc: "La stratégie complète pour une visibilité totale sur tous les canaux de recherche actuels et futurs.", href: `/${lang}/contact/`, badge: isEn ? "Recommended" : "Recommandé" },
      ];

  const faqs = isEn
    ? [
        { q: "Do you work with businesses outside Spain?", a: "Our main market is Spain, but we work with Spanish-speaking companies and businesses with operations in Spain regardless of where they are based. We also serve French-speaking companies for our French-language digital marketing services." },
        { q: "What does sector exclusivity mean exactly?", a: "We commit to not working with any direct competitor of yours in your geographic area for the same service. If we manage your SEO in Madrid, we will not manage SEO for another company in the same sector and city. This is a firm contractual commitment." },
        { q: "How are your AI protocols different from what other agencies do?", a: "Most agencies use generic AI tools like any user would. We have developed our own integrated workflows that combine AI with specialist analysis, human review and validated sector knowledge. The result is faster work and better quality than either could achieve alone." },
        { q: "How do I know if digital marketing is right for my business?", a: "If your customers search for your products or services online — and virtually all do — digital marketing is right for your business. The question is not whether to invest but which channel and strategy best suits your current objectives and budget. We offer a free initial analysis to assess your specific case." },
      ]
    : [
        { q: "Travaillez-vous avec des entreprises en dehors de l'Espagne ?", a: "Notre marché principal est l'Espagne, mais nous travaillons avec des entreprises hispanophones et des entreprises ayant des opérations en Espagne, quel que soit leur siège. Nous servons également les entreprises francophones pour nos services de marketing digital en langue française." },
        { q: "Que signifie exactement l'exclusivité sectorielle ?", a: "Nous nous engageons à ne pas travailler avec un concurrent direct dans votre zone géographique pour le même service. Si nous gérons votre SEO à Madrid, nous ne gérerons pas le SEO d'une autre entreprise du même secteur et de la même ville. C'est un engagement contractuel ferme." },
        { q: "En quoi vos protocoles IA sont-ils différents de ce que font les autres agences ?", a: "La plupart des agences utilisent des outils IA génériques comme n'importe quel utilisateur. Nous avons développé nos propres workflows intégrés qui combinent IA, analyse spécialisée, révision humaine et connaissances sectorielles validées. Le résultat est un travail plus rapide et de meilleure qualité que l'un ou l'autre seul ne pourrait atteindre." },
        { q: "Comment savoir si le marketing digital convient à mon entreprise ?", a: "Si vos clients recherchent vos produits ou services en ligne — et pratiquement tous le font — le marketing digital convient à votre entreprise. La question n'est pas de savoir si investir, mais quel canal et quelle stratégie conviennent le mieux à vos objectifs et budget actuels. Nous proposons une analyse initiale gratuite pour évaluer votre cas spécifique." },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "About" : "À propos" },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "The experience of a senior team." : "L'expérience d'une équipe senior."}
              <br />
              <span className="text-accent-400">
                {isEn ? "The precision of artificial intelligence." : "La précision de l'intelligence artificielle."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed">
              {isEn
                ? "At Mkt Web 360 we are not just another agency. We are a team committed to real results for real businesses — with our own AI protocols that allow us to work faster, analyse more data and make better decisions than a traditional agency."
                : "Chez Mkt Web 360, nous ne sommes pas une agence ordinaire. Nous sommes une équipe engagée dans des résultats réels pour des entreprises réelles — avec nos propres protocoles IA qui nous permettent de travailler plus vite, d'analyser plus de données et de prendre de meilleures décisions qu'une agence traditionnelle."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors mt-4"
            >
              {isEn ? "Tell us about your project" : "Parlez-nous de votre projet"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "+10", label: isEn ? "years experience" : "ans d'expérience" },
            { value: "National", label: isEn ? "service across Spain" : "service en Espagne" },
            { value: "AI", label: isEn ? "own protocols" : "protocoles propres" },
            { value: "1:1", label: isEn ? "sector exclusivity" : "exclusivité sectorielle" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "Our story" : "Notre histoire"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Mkt Web 360 was founded with a clear objective: to offer Spanish SMEs the same level of serious and professional digital marketing that until then was only accessible to large companies."
                  : "Mkt Web 360 a été fondé avec un objectif clair : offrir aux PME espagnoles le même niveau de marketing digital sérieux et professionnel qui jusqu'alors n'était accessible qu'aux grandes entreprises."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isEn
                  ? "Since then we have worked with companies from very different sectors — from care services to metal industry — always maintaining the same level of involvement, rigour and closeness that differentiates us."
                  : "Depuis lors, nous avons travaillé avec des entreprises de secteurs très différents — des services de soin à l'industrie métallurgique — en maintenant toujours le même niveau d'implication, de rigueur et de proximité qui nous différencie."}
              </p>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "Why we are different" : "Pourquoi nous sommes différents"}
              </h3>
              <ul className="space-y-3">
                {(isEn ? enDiffs : frDiffs).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-primary-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Our values" : "Nos valeurs"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI methodology */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "AI integrated into our methodology" : "IA intégrée dans notre méthodologie"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "We don't use AI like everyone else. We have developed our own protocols integrated into every service — to work faster, analyse more data and make better decisions."
                : "Nous n'utilisons pas l'IA comme tout le monde. Nous avons développé nos propres protocoles intégrés dans chaque service — pour travailler plus vite, analyser plus de données et prendre de meilleures décisions."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {aiCards.map((c) => (
              <div key={c.title} className="bg-primary-50 rounded-2xl p-6 text-center border border-primary-100">
                <h3 className="font-bold text-primary-600 mb-2 text-lg">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary-700 rounded-2xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-2">
              {isEn
                ? '"A qualified team with our own AI protocols.'
                : '"Une équipe qualifiée avec nos propres protocoles IA.'}
            </p>
            <p className="text-primary-200">
              {isEn
                ? 'We work faster, analyse more data and make better decisions than a traditional agency. And all of that feeds into your results."'
                : "Nous travaillons plus vite, analysons plus de données et prenons de meilleures décisions qu'une agence traditionnelle. Et tout cela se répercute sur vos résultats.\""}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "How we work" : "Comment nous travaillons"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "A transparent, measurable process focused on results from day one."
                : "Un processus transparent, mesurable et orienté vers les résultats dès le premier jour."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO / Strategic differentiator */}
      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              {isEn ? "Strategic differentiator" : "Différenciateur stratégique"}
            </span>
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Pioneers in GEO in Spain" : "Pionniers en GEO en Espagne"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "We are one of the first agencies in Spain to implement GEO — Generative Engine Optimization — the discipline of optimising your presence to appear in ChatGPT, Perplexity and Gemini. We implement llms.txt and llms-full.txt since early 2026, one of the first agency sites in Spain to adopt the emerging standard that tells AI models how to index and understand a business."
                : "Nous sommes l'une des premières agences en Espagne à implémenter le GEO — Generative Engine Optimization — la discipline d'optimisation de votre présence pour apparaître dans ChatGPT, Perplexity et Gemini. Nous implémentons llms.txt et llms-full.txt depuis début 2026, l'un des premiers sites d'agence en Espagne à adopter le standard émergent qui indique aux modèles IA comment indexer et comprendre une entreprise."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {sectors.map((s) => (
              <a key={s.title} href={s.href} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-primary-600 text-xl group-hover:text-accent-500 transition-colors">{s.title}</h3>
                  <span className="text-xs font-bold bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full">{s.badge}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn
                ? "Your best customer doesn't know you yet"
                : "Votre meilleur client ne vous connaît pas encore"}
            </h2>
            <p className="text-primary-200">
              {isEn ? "Let's introduce you." : "Présentons-nous."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`about-${lang}`} />
          </div>
        </div>
      </section>

      <RelatedArticles
        category="Marketing Digital"
        title={isEn ? "More about digital marketing" : "En savoir plus sur le marketing digital"}
      />
    </>
  );
}
