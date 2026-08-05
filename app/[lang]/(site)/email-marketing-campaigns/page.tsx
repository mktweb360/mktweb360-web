import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Email Marketing Campaigns for Businesses — Proven ROI | Mkt Web 360"
      : "Campagnes d'Email Marketing pour Entreprises — ROI Prouvé | Mkt Web 360",
    description: isEn
      ? "Professional email marketing service for businesses. Newsletter design, automated sequences and acquisition campaigns. Average ROI: €36 per euro invested."
      : "Service d'email marketing professionnel pour entreprises. Design de newsletters, séquences automatisées et campagnes d'acquisition avec ROI prouvé.",
    alternates: alternatesFor(`/${lang}/email-marketing-campaigns/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/email-marketing-campaigns/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Email Marketing Campaigns for Businesses" : "Campagnes d'Email Marketing pour Entreprises",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Professional email marketing service for businesses. Newsletter design, automated sequences and acquisition campaigns with proven ROI."
      : "Service d'email marketing professionnel pour entreprises. Design de newsletters, séquences automatisées et campagnes d'acquisition avec ROI prouvé.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/email-marketing-campaigns/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isEn
      ? [
          { "@type": "Question", name: "Which email marketing platform do you use?", acceptedAnswer: { "@type": "Answer", text: "We work with the main platforms: Mailchimp, Brevo (formerly Sendinblue), ActiveCampaign, Klaviyo and HubSpot. The choice depends on your contact volume, budget and automation needs. We recommend the most suitable option for your case." } },
          { "@type": "Question", name: "How many emails are sent per month?", acceptedAnswer: { "@type": "Answer", text: "It depends on the strategy and sector. For most businesses, between 2 and 4 monthly sends is optimal to maintain presence without overwhelming subscribers. Automations (welcome, abandoned cart, post-sale) run independently and don't count as manual sends." } },
          { "@type": "Question", name: "Can I use my current contact list?", acceptedAnswer: { "@type": "Answer", text: "Yes, provided contacts have given their consent to receive commercial communications in accordance with GDPR. We audit your list before starting to remove invalid contacts, reduce the bounce rate and protect your sending domain reputation." } },
          { "@type": "Question", name: "How long until I see returns?", acceptedAnswer: { "@type": "Answer", text: "First results are visible from the first send: opens, clicks and direct conversions. The impact on recurring sales and loyalty grows progressively over the first 3 months as we optimise segments, subject lines and send times." } },
        ]
      : [
          { "@type": "Question", name: "Quelle plateforme d'email marketing utilisez-vous ?", acceptedAnswer: { "@type": "Answer", text: "Nous travaillons avec les principales plateformes : Mailchimp, Brevo (anciennement Sendinblue), ActiveCampaign, Klaviyo et HubSpot. Le choix dépend de votre volume de contacts, de votre budget et de vos besoins en automatisation." } },
          { "@type": "Question", name: "Combien d'emails sont envoyés par mois ?", acceptedAnswer: { "@type": "Answer", text: "Cela dépend de la stratégie et du secteur. Pour la plupart des entreprises, entre 2 et 4 envois mensuels est optimal pour maintenir une présence sans saturer les abonnés. Les automatisations fonctionnent indépendamment." } },
          { "@type": "Question", name: "Puis-je utiliser ma liste de contacts actuelle ?", acceptedAnswer: { "@type": "Answer", text: "Oui, à condition que les contacts aient donné leur consentement conformément au RGPD. Nous auditons votre liste avant de commencer pour supprimer les contacts invalides et protéger la réputation de votre domaine d'envoi." } },
          { "@type": "Question", name: "Combien de temps avant de voir un retour ?", acceptedAnswer: { "@type": "Answer", text: "Les premiers résultats sont visibles dès le premier envoi : ouvertures, clics et conversions directes. L'impact sur les ventes récurrentes et la fidélisation croît progressivement sur les 3 premiers mois." } },
        ],
  };

  const includes = isEn
    ? [
        "Subscriber list design and segmentation",
        "Newsletter design aligned with your brand",
        "Automated welcome and nurturing sequences",
        "Acquisition and reactivation campaigns",
        "A/B testing of subject lines and content",
        "Deliverability optimisation",
        "Monthly analysis: open rate, clicks and conversions",
      ]
    : [
        "Conception et segmentation de la liste d'abonnés",
        "Design de newsletter aligné avec votre marque",
        "Séquences automatisées de bienvenue et de nurturing",
        "Campagnes d'acquisition et de réactivation",
        "Tests A/B des lignes d'objet et du contenu",
        "Optimisation de la délivrabilité",
        "Analyse mensuelle : taux d'ouverture, clics et conversions",
      ];

  const metrics = isEn
    ? [
        { value: "ROI", label: "highest of all channels" },
        { value: "Automated", label: "sequences and flows" },
        { value: "Segmented", label: "lists and campaigns" },
        { value: "Monthly", label: "performance report" },
      ]
    : [
        { value: "ROI", label: "le plus élevé de tous les canaux" },
        { value: "Automatisé", label: "séquences et flux" },
        { value: "Segmenté", label: "listes et campagnes" },
        { value: "Mensuel", label: "rapport de performance" },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Audit and strategy", desc: "We analyse your contact list, your previous sends and your objectives. We define the segmentation, send frequency, campaign types and priority automations." },
        { num: "02", title: "Technical setup", desc: "We configure the sending platform, authentication records (SPF, DKIM, DMARC), brand templates and subscriber capture forms." },
        { num: "03", title: "Production and sending", desc: "We write the copy, design the pieces, configure segmentation and schedule sends. Everything is reviewed and approved before going out." },
        { num: "04", title: "Analysis and optimisation", desc: "After each send we analyse the key metrics: open rate, clicks, conversions and unsubscribes. We apply the learnings to the next send for continuous improvement." },
      ]
    : [
        { num: "01", title: "Audit et stratégie", desc: "Nous analysons votre liste de contacts, vos envois précédents et vos objectifs. Nous définissons la segmentation, la fréquence d'envoi, les types de campagnes et les automatisations prioritaires." },
        { num: "02", title: "Configuration technique", desc: "Nous configurons la plateforme d'envoi, les enregistrements d'authentification (SPF, DKIM, DMARC), les modèles de marque et les formulaires de capture d'abonnés." },
        { num: "03", title: "Production et envoi", desc: "Nous rédigeons le copy, concevons les pièces, configurons la segmentation et planifions les envois. Tout est revu et approuvé avant d'être envoyé." },
        { num: "04", title: "Analyse et optimisation", desc: "Après chaque envoi, nous analysons les métriques clés : taux d'ouverture, clics, conversions et désabonnements. Nous appliquons les enseignements à l'envoi suivant pour une amélioration continue." },
      ];

  const sectors = isEn
    ? [
        { sector: "Ecommerce and online shops", desc: "Cart recovery, seasonal campaigns, post-sale upselling and inactive customer reactivation. The channel with the most direct impact on sales." },
        { sector: "B2B professional services", desc: "Lead nurturing, authority newsletters and proposal follow-ups. Keeps the brand present during long sales cycles." },
        { sector: "Clinics and health centres", desc: "Appointment reminders, prevention campaigns, health newsletters and patient loyalty. High open rates due to the trust relationship." },
        { sector: "Training and academies", desc: "Capture sequences, enrolment reminders, value content for students and course renewal campaigns." },
        { sector: "Hospitality and restaurants", desc: "Seasonal campaigns, special promotions, news newsletters and loyalty programmes for regular customers." },
        { sector: "Real estate agencies", desc: "Property newsletters, personalised alerts by buyer profile, lead follow-up and seller communication." },
      ]
    : [
        { sector: "Ecommerce et boutiques en ligne", desc: "Récupération de panier, campagnes saisonnières, upselling post-vente et réactivation de clients inactifs. Le canal avec le plus grand impact direct sur les ventes." },
        { sector: "Services professionnels B2B", desc: "Nurturing de leads, newsletters d'autorité et suivi de propositions. Maintient la marque présente lors de cycles de vente longs." },
        { sector: "Cliniques et centres de santé", desc: "Rappels de rendez-vous, campagnes de prévention, newsletters santé et fidélisation des patients. Fort taux d'ouverture grâce au lien de confiance." },
        { sector: "Formation et académies", desc: "Séquences de capture, rappels d'inscription, contenu de valeur pour les étudiants et campagnes de renouvellement de cours." },
        { sector: "Hôtellerie et restauration", desc: "Campagnes saisonnières, promotions spéciales, newsletters de nouveautés et programmes de fidélisation pour les clients habituels." },
        { sector: "Agences immobilières", desc: "Newsletters de propriétés, alertes personnalisées par profil d'acheteur, suivi de leads et communication avec les vendeurs." },
      ];

  const plans = isEn
    ? [
        {
          plan: "Basic Plan",
          price: "From €300/month",
          items: ["2 monthly sends", "Brand template design", "Basic segmentation", "Subject line A/B tests", "Results report"],
          highlight: false,
        },
        {
          plan: "Advanced Plan",
          price: "From €500/month",
          items: ["4 monthly sends", "Advanced segmentation", "2 active automations", "Full A/B tests", "Detailed KPI report", "Ongoing optimisation"],
          highlight: true,
        },
        {
          plan: "Complete Plan",
          price: "From €800/month",
          items: ["Unlimited sends", "Advanced automations", "CRM or ecommerce integration", "Acquisition strategy", "Weekly report", "Monthly consultancy"],
          highlight: false,
        },
      ]
    : [
        {
          plan: "Plan Basique",
          price: "À partir de 300€/mois",
          items: ["2 envois mensuels", "Design de modèle de marque", "Segmentation basique", "Tests A/B des lignes d'objet", "Rapport de résultats"],
          highlight: false,
        },
        {
          plan: "Plan Avancé",
          price: "À partir de 500€/mois",
          items: ["4 envois mensuels", "Segmentation avancée", "2 automatisations actives", "Tests A/B complets", "Rapport détaillé avec KPIs", "Optimisation continue"],
          highlight: true,
        },
        {
          plan: "Plan Complet",
          price: "À partir de 800€/mois",
          items: ["Envois illimités", "Automatisations avancées", "Intégration CRM ou ecommerce", "Stratégie d'acquisition", "Rapport hebdomadaire", "Consultation mensuelle"],
          highlight: false,
        },
      ];

  const faqs = isEn
    ? [
        { q: "Which email marketing platform do you use?", a: "We work with the main platforms: Mailchimp, Brevo (formerly Sendinblue), ActiveCampaign, Klaviyo and HubSpot. The choice depends on your contact volume, budget and automation needs. We recommend the most suitable option for your case." },
        { q: "How many emails are sent per month?", a: "It depends on the strategy and sector. For most businesses, between 2 and 4 monthly sends is optimal to maintain presence without overwhelming subscribers. Automations (welcome, abandoned cart, post-sale) run independently and don't count as manual sends." },
        { q: "Can I use my current contact list?", a: "Yes, provided contacts have given their consent to receive commercial communications in accordance with GDPR. We audit your list before starting to remove invalid contacts, reduce the bounce rate and protect your sending domain reputation." },
        { q: "How long until I see returns?", a: "First results are visible from the first send: opens, clicks and direct conversions. The impact on recurring sales and loyalty grows progressively over the first 3 months as we optimise segments, subject lines and send times." },
      ]
    : [
        { q: "Quelle plateforme d'email marketing utilisez-vous ?", a: "Nous travaillons avec les principales plateformes : Mailchimp, Brevo (anciennement Sendinblue), ActiveCampaign, Klaviyo et HubSpot. Le choix dépend de votre volume de contacts, de votre budget et de vos besoins en automatisation." },
        { q: "Combien d'emails sont envoyés par mois ?", a: "Cela dépend de la stratégie et du secteur. Pour la plupart des entreprises, entre 2 et 4 envois mensuels est optimal pour maintenir une présence sans saturer les abonnés. Les automatisations fonctionnent indépendamment." },
        { q: "Puis-je utiliser ma liste de contacts actuelle ?", a: "Oui, à condition que les contacts aient donné leur consentement conformément au RGPD. Nous auditons votre liste avant de commencer pour supprimer les contacts invalides et protéger la réputation de votre domaine d'envoi." },
        { q: "Combien de temps avant de voir un retour ?", a: "Les premiers résultats sont visibles dès le premier envoi : ouvertures, clics et conversions directes. L'impact sur les ventes récurrentes et la fidélisation croît progressivement sur les 3 premiers mois." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Email Marketing" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Email marketing campaigns" : "Campagnes d'email marketing"}<br />
              <span className="text-accent-400">
                {isEn ? "with proven ROI" : "avec ROI prouvé"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Email remains the digital marketing channel with the highest return on investment. We design and manage your campaigns so that every send generates real results: more sales, more recurring customers."
                : "L'email reste le canal de marketing digital avec le meilleur retour sur investissement. Nous concevons et gérons vos campagnes pour que chaque envoi génère des résultats réels : plus de ventes, plus de clients récurrents."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get a free quote" : "Demander un devis"}
            </a>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "What's included" : "Ce qui est inclus"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why email */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why email marketing is still essential"
              : "Pourquoi l'email marketing est encore indispensable"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "With an average ROI of €36 for every euro invested, email marketing outperforms any other digital channel. Unlike social media, your contact list is yours: it doesn't depend on algorithms, it doesn't disappear if a platform changes, and it doesn't require advertising investment to reach your subscribers."
              : "Avec un ROI moyen de 36€ par euro investi, l'email marketing surpasse tous les autres canaux digitaux. Contrairement aux réseaux sociaux, votre liste de contacts vous appartient : elle ne dépend pas des algorithmes, ne disparaît pas si une plateforme change et ne nécessite pas d'investissement publicitaire pour atteindre vos abonnés."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The most common mistake is treating email as a mass broadcasting channel. An effective strategy segments the list, personalises the message according to user behaviour and automates key moments in the customer lifecycle: welcome, first purchase, abandonment, reactivation."
              : "L'erreur la plus courante est de traiter l'email comme un canal de diffusion de masse. Une stratégie efficace segmente la liste, personnalise le message selon le comportement de l'utilisateur et automatise les moments clés du cycle de vie client : bienvenue, premier achat, abandon, réactivation."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "Email doesn't interrupt — it arrives when the user decides to read it, creating a receptiveness far superior to other channels. Well executed, it's the channel with the greatest capacity to convert subscribers into customers, and customers into repeat buyers."
              : "L'email n'interrompt pas — il arrive quand l'utilisateur décide de le lire, créant une disposition bien supérieure à d'autres canaux. Bien exécuté, c'est le canal avec la plus grande capacité à convertir des abonnés en clients, et des clients en acheteurs récurrents."}
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "How we work" : "Comment nous travaillons"}
          </h2>
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

      {/* Sectors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Which types of business benefit most from email marketing?"
              : "Quels types d'entreprises bénéficient le plus de l'email marketing ?"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "Email marketing works for any business with a contact base and a desire to maintain an active relationship with it. Some particularly profitable use cases:"
              : "L'email marketing fonctionne pour toute entreprise disposant d'une base de contacts et souhaitant maintenir une relation active avec elle. Quelques cas d'usage particulièrement rentables :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map((s) => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4 text-center">
            {isEn ? "Email marketing plans" : "Plans d'email marketing"}
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            {isEn
              ? "Indicative prices. The final budget depends on send volume, automation level and platform used."
              : "Prix indicatifs. Le budget final dépend du volume d'envois, du niveau d'automatisation et de la plateforme utilisée."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.plan} className={`rounded-2xl p-6 border-2 flex flex-col ${p.highlight ? "border-accent-500 bg-accent-50" : "border-gray-100 bg-white"}`}>
                <h3 className="text-xl font-bold text-primary-700 mb-1">{p.plan}</h3>
                <p className="text-2xl font-bold text-accent-500 mb-4">{p.price}</p>
                <ul className="space-y-2 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700"><span className="text-accent-500 shrink-0">✓</span>{i}</li>
                  ))}
                </ul>
                <a
                  href={`/${lang}/contact/`}
                  className="mt-6 block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full transition-colors text-sm"
                >
                  {isEn ? "Get a quote" : "Demander un devis"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about email marketing"
              : "Questions fréquentes sur l'email marketing"}
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

      {/* CTA */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Shall we talk about your email strategy?" : "Parlons de votre stratégie email ?"}
          </h2>
          <p className="text-primary-200">
            {isEn
              ? "Tell us your situation and we'll propose an email marketing plan adapted to your business and objectives."
              : "Parlez-nous de votre situation et nous vous proposerons un plan d'email marketing adapté à votre entreprise et à vos objectifs."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-email-marketing`} />
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" />
    </>
  );
}
