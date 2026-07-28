import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Marketing for Shopware Stores"
      : "Marketing Digital pour Boutiques Shopware",
    description: isEn
      ? "Shopware marketing: SEO, Google Ads, GEO and CRO for existing Shopware stores. You have the platform — we make it sell. Agency based in Spain."
      : "Marketing Shopware : SEO, Google Ads, GEO et CRO pour les boutiques déjà construites sur Shopware. Vous avez la plateforme, nous la faisons vendre. Agence basée en Espagne.",
    alternates: alternatesFor(`/${lang}/shopware-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/shopware-marketing/`,
    },
    openGraph: {
      title: isEn
        ? "Digital Marketing for Shopware Stores | Mkt Web 360"
        : "Marketing Digital pour Boutiques Shopware | Mkt Web 360",
      description: isEn
        ? "SEO, Google Ads, GEO and CRO for your Shopware store. You have the platform — we make it sell more."
        : "SEO, Google Ads, GEO et CRO pour votre boutique Shopware. Vous avez la plateforme, nous la faisons vendre davantage.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const methodology = isEn
    ? [
        { step: "01", title: "Shopware Audit", desc: "We analyse your store in depth: performance, catalogue, technical SEO, product pages and conversion funnel to pinpoint exactly what is holding back sales." },
        { step: "02", title: "Technical SEO for Shopware", desc: "URL structure, product structured data, page speed, catalogue indexation and category architecture to capture organic traffic that buys." },
        { step: "03", title: "Google Shopping and Ads", desc: "Product feed, Google Merchant Center and Shopping and Performance Max campaigns to appear where purchase decisions are made and scale with a controlled ROAS." },
        { step: "04", title: "GEO and Agentic Commerce", desc: "We prepare your store so that ChatGPT, Perplexity and Gemini recommend it, leveraging Shopware 6.7.9 Agentic Commerce: direct sale from AI conversation." },
        { step: "05", title: "CRO: conversion optimisation", desc: "We improve product pages, checkout and key pages with A/B tests so the traffic you already have sells more, without spending more on acquisition." },
        { step: "06", title: "Reporting and continuous improvement", desc: "We monitor sales, ROAS, positions and conversion with a clear monthly report and next steps. Decisions based on real data, not intuition." },
      ]
    : [
        { step: "01", title: "Audit Shopware", desc: "Nous analysons votre boutique en profondeur : performance, catalogue, SEO technique, fiches produit et entonnoir de conversion pour détecter exactement ce qui freine les ventes." },
        { step: "02", title: "SEO technique pour Shopware", desc: "Structure d'URL, données structurées de produit, vitesse de chargement, indexation du catalogue et architecture de catégories pour capter le trafic organique qui achète." },
        { step: "03", title: "Google Shopping et Ads", desc: "Flux de produits, Google Merchant Center et campagnes Shopping et Performance Max pour apparaître là où se prennent les décisions d'achat et progresser avec un ROAS maîtrisé." },
        { step: "04", title: "GEO et Agentic Commerce", desc: "Nous préparons votre boutique pour que ChatGPT, Perplexity et Gemini la recommandent, en tirant parti de l'Agentic Commerce de Shopware 6.7.9 : vente directe depuis la conversation IA." },
        { step: "05", title: "CRO : optimisation des conversions", desc: "Nous améliorons les fiches produit, le tunnel d'achat et les pages clés avec des tests A/B pour que le trafic que vous avez déjà vende davantage, sans dépenser plus en acquisition." },
        { step: "06", title: "Reporting et amélioration continue", desc: "Nous surveillons les ventes, le ROAS, les positions et la conversion avec un rapport mensuel clair et les prochaines étapes. Des décisions basées sur des données réelles, pas sur l'intuition." },
      ];

  const faqs = isEn
    ? [
        { q: "Do you develop the Shopware store or only marketing?", a: "We specialise in marketing and growth for existing Shopware stores. We don't set up the platform — we make the one you already have sell more with SEO, Google Ads, GEO and CRO. If you need development or a migration, we point you to the right partner." },
        { q: "My Shopware store is already live but not selling — can you help?", a: "That is exactly our ideal client profile. We audit what is holding back sales — whether it's a visibility, traffic or conversion issue — and work on the existing store to improve results from the first month, without rebuilding what already works." },
        { q: "Does SEO work in Shopware?", a: "Yes, and very well. Shopware offers advanced technical control — clean URLs, product structured data, performance and catalogue architecture — that, when properly executed, ranks your categories and product pages in Google. The key is SEO execution, not the platform." },
        { q: "What is Shopware Agentic Commerce and why does it matter?", a: "It is the capability, available from Shopware 6.7.9, for AI assistants like ChatGPT to discover and recommend your products and even facilitate purchase. GEO prepares your store to appear on that new sales channel before your competition, while the first-mover advantage is still available." },
        { q: "Do you run Google Shopping and Ads campaigns for Shopware?", a: "Yes. We set up the product feed, Google Merchant Center and Shopping and Performance Max campaigns, always separating the management fee from the advertising spend so you know exactly what you pay and what return you get." },
        { q: "How long until results are visible?", a: "Ads campaigns and CRO improvements can be noticed within weeks; organic SEO consolidates positions over 4 to 8 months depending on competition and catalogue. We work both in parallel: short-term traction with advertising and conversion, and a sustainable medium-term base with SEO and GEO." },
      ]
    : [
        { q: "Développez-vous la boutique Shopware ou seulement le marketing ?", a: "Nous nous spécialisons dans le marketing et la croissance pour les boutiques Shopware déjà construites. Nous ne montons pas la plateforme — nous faisons en sorte que celle que vous avez déjà vende davantage avec le SEO, Google Ads, GEO et CRO. Si vous avez besoin de développement ou d'une migration, nous vous orientons vers le bon partenaire." },
        { q: "Ma boutique Shopware est déjà en ligne mais ne vend pas — pouvez-vous aider ?", a: "C'est exactement notre profil de client idéal. Nous auditons ce qui freine les ventes — si c'est un problème de visibilité, de trafic ou de conversion — et travaillons sur la boutique existante pour améliorer les résultats dès le premier mois, sans refaire ce qui fonctionne déjà." },
        { q: "Le SEO fonctionne-t-il sur Shopware ?", a: "Oui, et très bien. Shopware offre un contrôle technique avancé — URL propres, données structurées de produit, performance et architecture du catalogue — qui, bien travaillé, positionne vos catégories et fiches sur Google. La clé est dans l'exécution SEO, pas dans la plateforme." },
        { q: "Qu'est-ce que l'Agentic Commerce de Shopware et pourquoi est-ce important ?", a: "C'est la capacité, disponible depuis Shopware 6.7.9, que les assistants IA comme ChatGPT découvrent et recommandent vos produits et facilitent même l'achat. Le GEO prépare votre boutique à apparaître sur ce nouveau canal de vente avant vos concurrents, quand l'avantage de premier entrant est encore disponible." },
        { q: "Faites-vous Google Shopping et des campagnes Ads pour Shopware ?", a: "Oui. Nous configurons le flux de produits, Google Merchant Center et des campagnes Shopping et Performance Max, en séparant toujours les frais de gestion des dépenses publicitaires pour que vous sachiez exactement ce que vous payez et quel retour vous obtenez." },
        { q: "En combien de temps voit-on des résultats ?", a: "Les campagnes Ads et les améliorations CRO peuvent se noter en quelques semaines ; le SEO organique consolide les positions entre 4 et 8 mois selon la concurrence et le catalogue. Nous travaillons les deux en parallèle : traction à court terme avec la publicité et la conversion, et une base durable à moyen terme avec le SEO et le GEO." },
      ];

  const services = isEn
    ? [
        { name: "SEO Positioning", href: `/${lang}/seo-web-positioning/` },
        { name: "Google Ads / SEM", href: `/${lang}/google-ads-management/` },
        { name: "GEO — AI Search", href: `/${lang}/geo-generative-engine-optimization/` },
        { name: "Online Stores", href: `/${lang}/online-store/` },
        { name: "Digital Audit", href: `/${lang}/digital-audit/` },
      ]
    : [
        { name: "Positionnement SEO", href: `/${lang}/positionnement-seo/` },
        { name: "Google Ads / SEM", href: `/${lang}/gestion-google-ads/` },
        { name: "GEO — Recherche IA", href: `/${lang}/geo-optimisation-moteurs-generatifs/` },
        { name: "Boutique en ligne", href: `/${lang}/boutique-en-ligne/` },
        { name: "Audit Digital", href: `/${lang}/audit-digital/` },
      ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Shopware Marketing" : "Marketing Shopware" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "You have the platform." : "Vous avez la plateforme."}<br />
              <span className="text-accent-400">
                {isEn ? "We make it sell." : "Nous la faisons vendre."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Shopware is a powerful platform, but on its own it doesn't generate sales. We are the marketing agency that turns your Shopware store into a channel that captures traffic, converts visits and grows month after month with SEO, Google Ads, GEO and CRO."
                : "Shopware est une plateforme puissante, mais en elle-même elle ne génère pas de ventes. Nous sommes l'agence marketing qui transforme votre boutique Shopware en un canal qui capte du trafic, convertit les visites et croît mois après mois avec le SEO, Google Ads, GEO et CRO."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
              >
                {isEn ? "Free Shopware audit" : "Audit Shopware gratuit"}
              </a>
              <a
                href="#methodology"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                {isEn ? "See how we work" : "Voir comment nous travaillons"}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/og-image.jpg"
              alt={isEn ? "Digital marketing for Shopware stores" : "Marketing digital pour boutiques Shopware"}
              className="rounded-2xl shadow-2xl w-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: isEn ? "B2B Leader" : "Leader B2B", label: isEn ? "leading B2B ecommerce platform in Europe" : "plateforme ecommerce leader en Europe" },
            { value: "B2B + B2C", label: isEn ? "in a single platform" : "sur une seule plateforme" },
            { value: "Agentic", label: isEn ? "AI sales (Shopware 6.7.9)" : "vente depuis IA (Shopware 6.7.9)" },
            { value: "Open source", label: isEn ? "full control and ownership" : "contrôle et propriété totaux" },
          ].map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "What we do with your Shopware store" : "Ce que nous faisons avec votre boutique Shopware"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Shopware is one of the most powerful ecommerce platforms in Europe, especially for B2B businesses and demanding catalogues. But a powerful platform without a marketing strategy is just a nice-looking shop nobody finds. That's where we come in."
                  : "Shopware est l'une des plateformes ecommerce les plus puissantes d'Europe, notamment pour les entreprises B2B et les catalogues exigeants. Mais une plateforme puissante sans stratégie marketing n'est qu'une belle boutique que personne ne trouve. C'est là qu'on intervient."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "We don't develop the platform — we make it perform. We work on your existing Shopware store to attract qualified traffic, improve conversion and open new sales channels — including AI — with one clear, measurable goal: more sales with better profitability."
                  : "Nous ne développons pas la plateforme — nous la faisons performer. Nous travaillons sur votre boutique Shopware existante pour attirer du trafic qualifié, améliorer la conversion et ouvrir de nouveaux canaux de vente — dont l'IA — avec un objectif clair et mesurable : plus de ventes avec une meilleure rentabilité."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: isEn ? "Store without marketing" : "Boutique sans marketing", sub: isEn ? "Invisible catalogue. Traffic doesn't arrive or doesn't convert." : "Catalogue invisible. Le trafic n'arrive pas ou ne convertit pas.", bad: true },
                  { label: isEn ? "Store with Mkt Web 360" : "Boutique avec Mkt Web 360", sub: isEn ? "Qualified traffic, better conversion and sales also from AI." : "Trafic qualifié, meilleure conversion et vente aussi depuis l'IA.", bad: false },
                ].map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "Who is this service for?" : "Pour qui est ce service ?"}
              </h3>
              <ul className="space-y-3">
                {(isEn
                  ? [
                      "Businesses with a live Shopware store that isn't selling enough",
                      "B2B businesses with large catalogues and customer-specific pricing",
                      "B2C Shopware stores that want to scale traffic and sales",
                      "Brands that depend too much on a single acquisition channel",
                      "Ecommerce businesses that want to get ahead in AI-driven sales",
                      "Those with a good platform but lacking a marketing strategy",
                    ]
                  : [
                      "Entreprises avec une boutique Shopware déjà lancée qui ne vend pas assez",
                      "Entreprises B2B avec de grands catalogues et des prix par client",
                      "Boutiques B2C sur Shopware qui veulent faire progresser le trafic et les ventes",
                      "Marques qui dépendent trop d'un seul canal d'acquisition",
                      "Ecommerce qui veulent prendre de l'avance dans la vente via l'IA",
                      "Ceux qui ont une bonne plateforme mais manquent d'une stratégie marketing",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "How we grow your Shopware store" : "Comment nous faisons croître votre boutique Shopware"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "A proven process to turn your platform into a profitable sales channel."
                : "Un processus éprouvé pour transformer votre plateforme en un canal de vente rentable."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodology.map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{item.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Everything your Shopware store needs" : "Tout ce dont votre boutique Shopware a besoin"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "We combine the services that sell most in ecommerce, integrated into a single strategy for your Shopware store."
                : "Nous combinons les services qui vendent le plus en ecommerce, intégrés dans une seule stratégie pour votre boutique Shopware."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all font-semibold text-primary-700 hover:text-accent-500"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GEO differentiator */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                {isEn ? "New" : "Nouveau"}
              </span>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">
                {isEn
                  ? "GEO and Agentic Commerce: sell from ChatGPT"
                  : "GEO et Agentic Commerce : vendez depuis ChatGPT"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Commerce is changing channel. More and more people don't search for products on Google — they ask an AI. With Shopware 6.7.9's Agentic Commerce, your store can be discovered, recommended and purchased directly from a conversation with ChatGPT or other assistants."
                  : "Le commerce change de canal. De plus en plus de personnes ne cherchent pas de produits sur Google : elles les demandent à une IA. Avec l'Agentic Commerce de Shopware 6.7.9, votre boutique peut être découverte, recommandée et achetée directement depuis une conversation avec ChatGPT ou d'autres assistants."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "We are pioneers in GEO in Spain. We prepare the catalogue, structured data and authority of your Shopware store so that AI chooses it when a customer asks about what you sell. Those who position themselves first in this channel will gain an advantage that is hard to recover."
                  : "Nous sommes pionniers en GEO en Espagne. Nous préparons le catalogue, les données structurées et l'autorité de votre boutique Shopware pour que l'IA la choisisse quand un client demande ce que vous vendez. Ceux qui se positionnent en premier sur ce canal capteront un avantage difficile à rattraper."}
              </p>
              <Link
                href={`/${lang}/geo-generative-engine-optimization/`}
                className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline"
              >
                {isEn ? "Learn about the GEO service →" : "En savoir plus sur le service GEO →"}
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {(isEn
                ? [
                    { t: "AI discovery", d: "Your catalogue appears when a customer asks ChatGPT about your type of product." },
                    { t: "Recommendation", d: "AI recommends your store over competitors that haven't yet invested in GEO." },
                    { t: "Agentic sale", d: "Shopware 6.7.9 allows completing the purchase from within the AI conversation itself." },
                  ]
                : [
                    { t: "Découverte par l'IA", d: "Votre catalogue apparaît quand un client demande à ChatGPT votre type de produit." },
                    { t: "Recommandation", d: "L'IA recommande votre boutique face aux concurrents qui ne travaillent pas encore le GEO." },
                    { t: "Vente agentique", d: "Shopware 6.7.9 permet de finaliser l'achat depuis la conversation IA elle-même." },
                  ]
              ).map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="font-bold text-primary-700 mb-1">{c.t}</p>
                  <p className="text-sm text-gray-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Frequently asked questions about Shopware marketing"
                : "Questions fréquentes sur le marketing Shopware"}
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="audit" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Free Shopware store audit" : "Audit gratuit de votre boutique Shopware"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "We analyse your store at no cost and tell you exactly what is holding back your sales and where to start growing."
                : "Nous analysons votre boutique sans frais et vous disons exactement ce qui freine vos ventes et par où commencer à croître."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="seo" />
          </div>
        </div>
      </section>

      <RelatedArticles
        category={isEn ? "Ecommerce" : "Ecommerce"}
        title={isEn ? "More about ecommerce and online stores" : "En savoir plus sur l'ecommerce et les boutiques en ligne"}
      />
    </>
  );
}
