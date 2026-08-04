import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "WhatsApp Marketing for Businesses — 98% Open Rate | Mkt Web 360"
      : "WhatsApp Marketing pour Entreprises — 98% de Taux d'Ouverture | Mkt Web 360",
    description: isEn
      ? "WhatsApp Business API marketing service for businesses. 98% open rate, automated sequences and segmented campaigns to convert more customers."
      : "Service de marketing WhatsApp Business API pour entreprises. 98% de taux d'ouverture, séquences automatisées et campagnes segmentées pour convertir plus de clients.",
    alternates: alternatesFor(`/${lang}/whatsapp-marketing-service/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/whatsapp-marketing-service/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const includes = isEn
    ? [
        "WhatsApp Business API configuration",
        "Optimised business profile",
        "Product and service catalogue",
        "Automated responses and welcome messages",
        "Segmented broadcast campaigns",
        "Automated message sequences",
        "Lead tracking via WhatsApp",
        "Monthly metrics and conversion analysis",
      ]
    : [
        "Configuration de l'API WhatsApp Business",
        "Profil d'entreprise optimisé",
        "Catalogue de produits et services",
        "Réponses automatiques et messages de bienvenue",
        "Campagnes de diffusion segmentées",
        "Séquences de messages automatisées",
        "Suivi des leads via WhatsApp",
        "Analyse mensuelle des métriques et conversions",
      ];

  const metrics = isEn
    ? [
        { value: "98%", label: "open rate" },
        { value: "3x", label: "more conversions than email" },
        { value: "Instant", label: "response in minutes" },
        { value: "API", label: "official WhatsApp Business" },
      ]
    : [
        { value: "98%", label: "taux d'ouverture" },
        { value: "3x", label: "plus de conversions que l'email" },
        { value: "Immédiat", label: "réponse en minutes" },
        { value: "API", label: "WhatsApp Business officiel" },
      ];

  const useCases = isEn
    ? [
        { sector: "Clinics & healthcare", desc: "Appointment confirmations, reminders, results and post-treatment follow-up. Reduces no-shows and improves the patient experience." },
        { sector: "Hospitality & restaurants", desc: "Booking confirmations, daily promotions, special menus and loyalty campaigns for returning customers." },
        { sector: "E-commerce & online shops", desc: "Order confirmations, shipping notifications, abandoned cart recovery and reactivation campaigns." },
        { sector: "Real estate agencies", desc: "Lead follow-up, sending property listings, visit reminders and personalised communication with buyers." },
        { sector: "Training & academies", desc: "Class reminders, sending materials, student communication and new enrolment acquisition campaigns." },
        { sector: "Professional services", desc: "Commercial follow-up, sending proposals, meeting reminders and post-sale communication with clients." },
      ]
    : [
        { sector: "Cliniques et santé", desc: "Confirmation de rendez-vous, rappels, résultats et suivi post-traitement. Réduit les absences et améliore l'expérience du patient." },
        { sector: "Hôtellerie et restauration", desc: "Confirmations de réservation, promotions du jour, menus spéciaux et campagnes de fidélisation pour les clients réguliers." },
        { sector: "E-commerce et boutiques en ligne", desc: "Confirmations de commande, notifications d'expédition, récupération de paniers abandonnés et campagnes de réactivation." },
        { sector: "Agences immobilières", desc: "Suivi des leads, envoi de fiches de propriétés, rappels de visites et communication personnalisée avec les acheteurs." },
        { sector: "Formation et académies", desc: "Rappels de cours, envoi de matériaux, communication avec les étudiants et campagnes d'acquisition de nouvelles inscriptions." },
        { sector: "Services professionnels", desc: "Suivi commercial, envoi de propositions, rappels de réunions et communication post-vente avec les clients." },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Audit & strategy", desc: "We analyse your current situation, your objectives and your customer base. We define which use cases have the most impact for your business and design the strategy." },
        { num: "02", title: "Technical setup", desc: "We configure the WhatsApp Business API, the company profile, the catalogue and the necessary integrations with your CRM, website or online shop." },
        { num: "03", title: "Contact acquisition", desc: "We implement opt-in capture points to build your contact list legally: website, social media, point of sale or forms." },
        { num: "04", title: "Campaigns & optimisation", desc: "We launch the first campaigns, measure the results and optimise messages, segmentation and timing to maximise conversions." },
      ]
    : [
        { num: "01", title: "Audit et stratégie", desc: "Nous analysons votre situation actuelle, vos objectifs et votre base de clients. Nous définissons quels cas d'usage ont le plus d'impact pour votre entreprise et concevons la stratégie." },
        { num: "02", title: "Configuration technique", desc: "Nous configurons l'API WhatsApp Business, le profil d'entreprise, le catalogue et les intégrations nécessaires avec votre CRM, site web ou boutique en ligne." },
        { num: "03", title: "Acquisition de contacts", desc: "Nous mettons en place les points de capture opt-in pour construire votre liste de contacts légalement : site web, réseaux sociaux, point de vente ou formulaires." },
        { num: "04", title: "Campagnes et optimisation", desc: "Nous lançons les premières campagnes, mesurons les résultats et optimisons les messages, la segmentation et le timing pour maximiser les conversions." },
      ];

  const faqs = isEn
    ? [
        { q: "Do I need WhatsApp Business API or is the regular app enough?", a: "For personal use or very small businesses, the free WhatsApp Business app is sufficient. If you want to send mass campaigns, automate sequences, integrate with your CRM or manage multiple agents, you need the official WhatsApp Business API. We handle the complete setup." },
        { q: "Is it legal to send marketing messages via WhatsApp?", a: "Yes, as long as contacts have given explicit consent to receive commercial communications. The official WhatsApp API requires prior user opt-in. We help you build your contact list legally and comply with GDPR." },
        { q: "How long does it take to see results?", a: "WhatsApp delivers results much faster than other channels. The first campaigns usually generate responses within hours. Within 30 days you have real open, response and conversion data to optimise the strategy." },
        { q: "Can I integrate WhatsApp with my CRM or online shop?", a: "Yes. The WhatsApp Business API integrates with major CRMs (HubSpot, Salesforce, Zoho), e-commerce platforms (WooCommerce, Shopify) and automation tools. We assess your specific case and propose the most efficient integration." },
      ]
    : [
        { q: "Ai-je besoin de l'API WhatsApp Business ou l'application normale suffit-elle ?", a: "Pour un usage personnel ou les très petites entreprises, l'application WhatsApp Business gratuite est suffisante. Si vous voulez envoyer des campagnes massives, automatiser des séquences, intégrer avec votre CRM ou gérer plusieurs agents, vous avez besoin de l'API officielle WhatsApp Business. Nous gérons la configuration complète." },
        { q: "Est-il légal d'envoyer des messages marketing par WhatsApp ?", a: "Oui, à condition que les contacts aient donné leur consentement explicite pour recevoir des communications commerciales. L'API officielle WhatsApp exige l'opt-in préalable de l'utilisateur. Nous vous aidons à constituer votre liste de contacts légalement et à vous conformer au RGPD." },
        { q: "Combien de temps faut-il pour voir des résultats ?", a: "WhatsApp donne des résultats beaucoup plus rapides que les autres canaux. Les premières campagnes génèrent généralement des réponses en quelques heures. En 30 jours, vous avez de vraies données d'ouverture, de réponse et de conversion pour optimiser la stratégie." },
        { q: "Puis-je intégrer WhatsApp avec mon CRM ou ma boutique en ligne ?", a: "Oui. L'API WhatsApp Business s'intègre avec les principaux CRM (HubSpot, Salesforce, Zoho), les plateformes e-commerce (WooCommerce, Shopify) et les outils d'automatisation. Nous évaluons votre cas spécifique et proposons l'intégration la plus efficace." },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "WhatsApp Marketing" : "WhatsApp Marketing" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "The channel with" : "Le canal avec"}<br />
              <span className="text-accent-400">
                {isEn ? "98% open rate" : "98% de taux d'ouverture"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Email has a 20% open rate. WhatsApp has 98%. If you are not using WhatsApp to communicate with your customers, you are leaving conversations — and sales — on the table."
                : "L'email a un taux d'ouverture de 20%. WhatsApp a 98%. Si vous n'utilisez pas WhatsApp pour communiquer avec vos clients, vous laissez des conversations — et des ventes — de côté."}
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

      {/* Editorial section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why WhatsApp is the most efficient marketing channel in 2026"
              : "Pourquoi WhatsApp est le canal marketing le plus efficace en 2026"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "WhatsApp is the most used messaging application in Spain, with more than 30 million active users. Unlike email, WhatsApp messages are read almost in their entirety and generate responses in minutes, not days."
              : "WhatsApp est l'application de messagerie la plus utilisée en Espagne, avec plus de 30 millions d'utilisateurs actifs. Contrairement à l'email, les messages WhatsApp sont lus presque en totalité et génèrent des réponses en minutes, pas en jours."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The problem is that most companies use WhatsApp reactively — only responding when the customer writes. Well-executed WhatsApp Marketing is proactive: segmented campaigns, automated sequences, lead tracking and reactivation of inactive customers."
              : "Le problème est que la plupart des entreprises utilisent WhatsApp de manière réactive — seulement pour répondre quand le client écrit. Le WhatsApp Marketing bien exécuté est proactif : campagnes segmentées, séquences automatisées, suivi des leads et réactivation des clients inactifs."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The official WhatsApp Business API allows you to scale this channel without losing the closeness and personalisation that make it so effective. Integrated with your CRM or online shop, it becomes one of the acquisition and loyalty channels with the highest return on investment."
              : "L'API officielle WhatsApp Business vous permet d'élargir ce canal sans perdre la proximité et la personnalisation qui le rendent si efficace. Intégré à votre CRM ou boutique en ligne, il devient l'un des canaux d'acquisition et de fidélisation avec le meilleur retour sur investissement."}
          </p>
        </div>
      </section>

      {/* Use cases by sector */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Use cases by sector" : "Cas d'usage par secteur"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "WhatsApp Marketing works in virtually any sector where there is a direct relationship with the customer. These are some of the most common use cases:"
              : "Le WhatsApp Marketing fonctionne dans pratiquement tous les secteurs où il existe une relation directe avec le client. Voici quelques-uns des cas d'usage les plus courants :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((s) => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
            {isEn
              ? "How we launch your WhatsApp strategy"
              : "Comment nous lançons votre stratégie WhatsApp"}
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about WhatsApp Marketing"
              : "Questions fréquentes sur le WhatsApp Marketing"}
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
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
          </h2>
          <p className="text-primary-200">
            {isEn ? "Tell us about your project. We respond within 24 hours." : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-whatsapp`} />
        </div>
      </section>

      <RelatedArticles
        category="WhatsApp Marketing"
        title={isEn ? "More about digital acquisition" : "En savoir plus sur l'acquisition digitale"}
      />
    </>
  );
}
