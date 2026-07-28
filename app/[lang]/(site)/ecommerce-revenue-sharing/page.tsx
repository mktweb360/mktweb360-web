import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Ecommerce with Revenue Sharing — Hybrid Model"
      : "Ecommerce avec Participation aux Résultats — Modèle Hybride",
    description: isEn
      ? "Hybrid ecommerce model: we build your entire digital infrastructure and share in the success when you surpass agreed targets. Fixed setup + monthly management + results bonus. No commission per sale."
      : "Modèle hybride d'ecommerce : nous construisons toute votre infrastructure digitale et participons au succès quand vous dépassez les objectifs définis. Setup fixe + gestion mensuelle + bonus résultats. Sans commission par vente.",
    alternates: alternatesFor(`/${lang}/ecommerce-revenue-sharing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ecommerce-revenue-sharing/`,
    },
    openGraph: {
      title: isEn
        ? "Ecommerce with Revenue Sharing — Hybrid Model | Mkt Web 360"
        : "Ecommerce avec Participation aux Résultats — Modèle Hybride | Mkt Web 360",
      description: isEn
        ? "Hybrid model: fixed setup + guaranteed monthly management + results bonus. We align incentives without risk for the client."
        : "Modèle hybride : setup fixe + gestion mensuelle garantie + bonus résultats. Nous alignons les incitations sans risque pour le client.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const modelSteps = isEn
    ? [
        {
          num: "01",
          title: "Fixed setup",
          price: "£1,500 – £2,500 / €1,500 – €2,500",
          desc: "Design and development of the online store, campaign configuration, analytics and all the initial infrastructure.",
          items: ["Professional online store", "Google Ads configured", "Initial technical SEO", "Analytics and tracking"],
        },
        {
          num: "02",
          title: "Monthly management",
          price: "£300 – £500/month / €300 – €500/month",
          desc: "Ongoing management of campaigns, SEO and optimisation. Guarantees service sustainability without depending solely on success.",
          items: ["Google Ads management", "Monthly SEO", "Results reports", "Continuous optimisation"],
        },
        {
          num: "03",
          title: "Results bonus",
          price: isEn ? "Defined in contract" : "Défini au contrat",
          desc: "When an agreed sales or ROAS threshold is exceeded, a bonus is triggered. Incentives are aligned with your growth.",
          items: ["Pre-agreed threshold", "Clear attribution metrics", "Quarterly review", "Scalable with the business"],
        },
      ]
    : [
        {
          num: "01",
          title: "Setup fixe",
          price: "1 500 € – 2 500 €",
          desc: "Conception et développement de la boutique en ligne, configuration des campagnes, analytique et toute l'infrastructure initiale.",
          items: ["Boutique en ligne professionnelle", "Google Ads configuré", "SEO technique initial", "Analytique et tracking"],
        },
        {
          num: "02",
          title: "Gestion mensuelle",
          price: "300 € – 500 €/mois",
          desc: "Gestion continue des campagnes, SEO et optimisation. Garantit la durabilité du service sans dépendre uniquement du succès.",
          items: ["Gestion Google Ads", "SEO mensuel", "Rapports de résultats", "Optimisation continue"],
        },
        {
          num: "03",
          title: "Bonus de résultats",
          price: "Défini au contrat",
          desc: "Quand un seuil de ventes ou de ROAS convenu est dépassé, un bonus se déclenche. Les incitations sont alignées avec votre croissance.",
          items: ["Seuil défini à l'avance", "Métriques d'attribution claires", "Révision trimestrielle", "Évolutif avec le business"],
        },
      ];

  const faqs = isEn
    ? [
        {
          q: "How is the results bonus defined?",
          a: "We agree on it before starting, based on your real business data: average order value, gross margin and monthly sales target. The bonus is triggered when sales exceed a jointly defined threshold — for example, 10% of sales above £15,000/month. The exact terms are written into the contract before we start.",
        },
        {
          q: "What happens if the results don't come?",
          a: "The initial setup and monthly management cover the work regardless of results. If sales don't reach the bonus threshold, we jointly analyse the causes — product, pricing, market, logistics — and adjust the strategy. If after a reasonable period the project has no viability, we say so clearly.",
        },
        {
          q: "Do you also manage stock and logistics?",
          a: "No. Our responsibility is the digital side: website, SEO, Ads campaigns, email marketing and analytics. Logistics, stock and customer service are the client's responsibility. It is a prerequisite that this part is resolved — scaling an ecommerce with logistical problems only amplifies the problems.",
        },
        {
          q: "How long does it take for the ecommerce to be operational?",
          a: "Store development takes 3 to 6 weeks depending on the catalogue and required integrations. From launch, the initial growth phase lasts 3 to 6 months. The first significant results in organic sales come between month 4 and month 8.",
        },
      ]
    : [
        {
          q: "Comment est défini le bonus de résultats ?",
          a: "Nous l'accordons avant de commencer en nous basant sur les données réelles de votre entreprise : ticket moyen, marge brute et objectif de ventes mensuel. Le bonus se déclenche quand les ventes dépassent un seuil défini conjointement — par exemple, 10 % des ventes au-dessus de 15 000 €/mois. Les termes exacts sont consignés dans le contrat avant de commencer.",
        },
        {
          q: "Que se passe-t-il si les résultats ne viennent pas ?",
          a: "Le setup initial et la gestion mensuelle couvrent le travail indépendamment des résultats. Si les ventes n'atteignent pas le seuil de bonus, nous analysons conjointement les causes — produit, prix, marché, logistique — et ajustons la stratégie. Si après une période raisonnable le projet n'est pas viable, nous le disons clairement.",
        },
        {
          q: "Gérez-vous aussi le stock et la logistique ?",
          a: "Non. Notre responsabilité est la partie digitale : site web, SEO, campagnes Ads, email marketing et analytique. La logistique, le stock et le service client sont la responsabilité du client. Il est prérequis que cette partie soit résolue — faire évoluer un ecommerce avec des problèmes logistiques ne fait qu'amplifier les problèmes.",
        },
        {
          q: "Combien de temps faut-il pour que l'ecommerce soit opérationnel ?",
          a: "Le développement de la boutique prend entre 3 et 6 semaines selon le catalogue et les intégrations nécessaires. À partir du lancement, la phase de croissance initiale dure entre 3 et 6 mois. Les premiers résultats significatifs en ventes organiques arrivent entre le mois 4 et le mois 8.",
        },
      ];

  const requirements = isEn
    ? [
        "A product with sufficient margin to absorb fixed management costs and leave room for a results bonus.",
        "Ability to fulfil orders — logistics, stock and customer service must be resolved before scaling.",
        "Minimum 12-month horizon — well-built ecommerce businesses take 6 to 12 months to reach cruising speed.",
        "Willingness to share real business data — margins, logistics costs, average order value — to define fair bonus metrics.",
        "A product that can be sold online with legal guarantees and without distribution restrictions.",
      ]
    : [
        "Un produit avec une marge suffisante pour absorber les coûts fixes de gestion et laisser de la place au bonus de résultats.",
        "Capacité à honorer les commandes — logistique, stock et service client doivent être résolus avant de passer à l'échelle.",
        "Horizon minimum de 12 mois — les ecommerce bien construits mettent entre 6 et 12 mois pour atteindre leur vitesse de croisière.",
        "Disposition à partager des données réelles de l'entreprise — marges, coûts logistiques, ticket moyen — pour définir des métriques de bonus justes.",
        "Un produit pouvant être vendu en ligne avec des garanties légales et sans restrictions de distribution.",
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "Ecommerce with Revenue Sharing" : "Ecommerce avec Participation" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                {isEn ? "Innovative model" : "Modèle innovant"}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {isEn ? "We build your ecommerce." : "Nous construisons votre ecommerce."}<br />
                <span className="text-accent-400">
                  {isEn ? "We grow together." : "Nous grandissons ensemble."}
                </span>
              </h1>
              <p className="text-xl text-primary-200 mb-8 leading-relaxed">
                {isEn
                  ? "We build your entire digital infrastructure — online store, campaigns, SEO — and share in the success when you surpass agreed targets. Our incentives are aligned with yours."
                  : "Nous construisons toute votre infrastructure digitale — boutique en ligne, campagnes, SEO — et participons au succès quand vous dépassez les objectifs définis. Nos incitations sont alignées avec les vôtres."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#model"
                  className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
                >
                  {isEn ? "See the model" : "Voir le modèle"}
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center"
                >
                  {isEn ? "Talk to us" : "Nous parler"}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/imagen-ecommerce-participacion.jpg"
                alt={isEn ? "Ecommerce with revenue sharing" : "Ecommerce avec participation aux résultats"}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Why we don't do pure commission per sale"
                : "Pourquoi nous ne faisons pas de commission pure par vente"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "Direct commission per sale sounds good on paper, but it has serious operational problems that disadvantage both parties."
                : "La commission directe par vente semble bien sur le papier, mais elle présente de sérieux problèmes opérationnels qui pénalisent les deux parties."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-red-100">
              <h3 className="font-bold text-red-500 mb-4">
                {isEn ? "❌ Pure commission model — why it doesn't work" : "❌ Modèle de commission pure — pourquoi ça ne fonctionne pas"}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {(isEn
                  ? [
                      "Impossible attribution — who generated the sale?",
                      "Low dropshipping margins (10–30%) — commission doesn't cover costs",
                      "We depend on the client's product quality",
                      "Conflict of interest in every invoice",
                      "No payment guarantee — total financial risk",
                    ]
                  : [
                      "Attribution impossible — qui a généré la vente ?",
                      "Marges de dropshipping faibles (10-30 %) — la commission ne couvre pas les coûts",
                      "Nous dépendons de la qualité du produit du client",
                      "Conflit d'intérêts à chaque facture",
                      "Sans garantie de paiement — risque financier total",
                    ]
                ).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400 shrink-0">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-accent-500">
              <h3 className="font-bold text-accent-600 mb-4">
                {isEn ? "✅ Our hybrid model — how we solve it" : "✅ Notre modèle hybride — comment nous le résolvons"}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {(isEn
                  ? [
                      "Fixed setup — covers initial development",
                      "Guaranteed minimum monthly management — sustainability",
                      "Results bonus above defined threshold — real incentive",
                      "Clear attribution metrics agreed in advance",
                      "Aligned incentives without conflict of interest",
                    ]
                  : [
                      "Setup fixe — couvre le développement initial",
                      "Gestion mensuelle minimale garantie — durabilité",
                      "Bonus de résultats au-dessus d'un seuil défini — incitation réelle",
                      "Métriques d'attribution claires accordées à l'avance",
                      "Incitations alignées sans conflit d'intérêts",
                    ]
                ).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent-500 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "How the hybrid model works" : "Comment fonctionne le modèle hybride"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {modelSteps.map((s) => (
              <div key={s.num} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div className="w-10 h-10 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center mb-4 text-sm">{s.num}</div>
                <h3 className="text-xl font-bold text-primary-600 mb-1">{s.title}</h3>
                <p className="text-accent-500 font-bold mb-3">{s.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-accent-500 font-bold">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              {isEn ? "Who is this model for?" : "Pour qui est ce modèle ?"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-accent-400 mb-3">
                  {isEn ? "✅ It fits if you have:" : "✅ Ça convient si vous avez :"}
                </h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  {(isEn
                    ? [
                        "A validated product with real demand",
                        "Sufficient margins (minimum 30–40%)",
                        "Ability to manage stock and logistics",
                        "Willingness to invest medium-term",
                        "Clear and measurable sales targets",
                      ]
                    : [
                        "Un produit validé avec une demande réelle",
                        "Des marges suffisantes (minimum 30-40 %)",
                        "La capacité de gérer le stock et la logistique",
                        "La disposition à investir à moyen terme",
                        "Des objectifs de ventes clairs et mesurables",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-accent-400">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-300 mb-3">
                  {isEn ? "❌ It doesn't fit if:" : "❌ Ça ne convient pas si :"}
                </h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  {(isEn
                    ? [
                        "The product has not been validated yet",
                        "Margins are below 25%",
                        "You expect results in less than 3 months",
                        "You cannot guarantee consistent stock",
                        "You want a model with no fixed costs at all",
                      ]
                    : [
                        "Le produit n'est pas encore validé",
                        "Les marges sont inférieures à 25 %",
                        "Vous cherchez des résultats en moins de 3 mois",
                        "Vous ne pouvez pas garantir un stock régulier",
                        "Vous voulez un modèle sans aucun coût fixe",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-red-300">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Why the hybrid model is the only one that makes sense for both parties"
              : "Pourquoi le modèle hybride est le seul qui ait du sens pour les deux parties"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The pure commission-on-sales model seems attractive to the client at first glance — if I don't sell, I don't pay. But in practice it creates a perverse incentive: the agency only gains if the ecommerce scales quickly, which leads to prioritising volume over profitability, cheap traffic over qualified traffic, and short-term results over sustainable business building."
              : "Le modèle de commission pure sur les ventes semble attractif pour le client au premier abord — si je ne vends pas, je ne paie pas. Mais dans la pratique, il crée une incitation perverse : l'agence ne gagne que si l'ecommerce évolue rapidement, ce qui conduit à prioriser le volume sur la rentabilité, le trafic bon marché sur le trafic qualifié, et les résultats à court terme sur la construction durable de l'entreprise."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The hybrid model we propose genuinely aligns interests. An initial setup that covers building costs, monthly management that guarantees continuous dedication, and a results bonus that incentivises us to grow with you — not inflate metrics. When your ecommerce sells more, we earn more. When it doesn't, we have a direct incentive to find out what's failing and fix it."
              : "Le modèle hybride que nous proposons aligne les intérêts de façon réelle. Un setup initial qui couvre les coûts de construction, une gestion mensuelle qui garantit une dédicace continue, et un bonus de résultats qui nous incite à grandir avec vous — pas à gonfler les métriques. Quand votre ecommerce vend davantage, nous gagnons davantage. Quand ce n'est pas le cas, nous avons une incitation directe à trouver ce qui ne va pas et à le corriger."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "We rejected the pure commission model after analysing the conflicts of interest it generates: debatable sales attribution, pressure to increase advertising spend regardless of ROAS, and tension when results don't arrive on the expected timeline. The hybrid model eliminates those frictions and enables a long-term professional relationship."
              : "Nous avons rejeté le modèle de commission pure après avoir analysé les conflits d'intérêts qu'il génère : attribution des ventes discutable, pression pour augmenter les dépenses publicitaires indépendamment du ROAS, et tension quand les résultats ne viennent pas dans les délais prévus. Le modèle hybride élimine ces frictions et permet une relation professionnelle à long terme."}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What you need to have for this model to work"
              : "Ce que vous devez avoir pour que ce modèle fonctionne"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEn
              ? "This service is not for all projects. For the hybrid model to make sense you need:"
              : "Ce service n'est pas pour tous les projets. Pour que le modèle hybride ait du sens, vous devez avoir :"}
          </p>
          <div className="space-y-4">
            {requirements.map((item) => (
              <div key={item} className="flex items-start gap-4 bg-primary-50 rounded-xl px-5 py-4 border border-primary-100">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions" : "Questions fréquentes"}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn
                ? "Does your project fit this model?"
                : "Votre projet convient-il à ce modèle ?"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "Tell us about your product, your margins and your targets. We will honestly tell you whether it makes sense to work together."
                : "Parlez-nous de votre produit, de vos marges et de vos objectifs. Nous vous dirons honnêtement si ça a du sens de travailler ensemble."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="ecommerce-participacion" />
          </div>
        </div>
      </section>
    </>
  );
}
