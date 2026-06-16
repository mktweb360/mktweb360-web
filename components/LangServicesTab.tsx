"use client";
import { useState } from "react";
import Link from "next/link";

type LangServiceItem = { title: string; desc: string; href: string; icon: string };
type LangServiceTab = { id: string; tipo: string; objetivo: string; emoji: string; servicios: LangServiceItem[] };

const SERVICE_TABS_LANG: Record<string, LangServiceTab[]> = {
  en: [
    {
      id: "presence",
      tipo: "PRESENCE",
      objetivo: "Build your digital foundation",
      emoji: "🏗️",
      servicios: [
        { title: "Professional Web Design", desc: "Your website, your most important digital asset. Fast, optimised and designed to convert visitors into customers.", href: "/en/web-design/", icon: "🌐" },
        { title: "Online Store", desc: "Sell across Spain with no commissions per sale and no monthly fees. 100% custom design.", href: "/en/online-store/", icon: "🛒" },
        { title: "Google Business Profile", desc: "Appear on Google Maps when your customers search for what you offer in your area.", href: "/en/google-business-profile-management/", icon: "📍" },
        { title: "Online Reputation", desc: "Manage your reviews and build a digital image that generates trust before the first contact.", href: "/en/online-reputation-management/", icon: "⭐" },
      ],
    },
    {
      id: "visibility",
      tipo: "VISIBILITY",
      objetivo: "Appear when people search for you",
      emoji: "🔍",
      servicios: [
        { title: "SEO Web Positioning", desc: "First page of Google. Organic traffic without paying per click. Results that last.", href: "/en/seo-web-positioning/", icon: "📈" },
        { title: "GEO — AI Positioning", desc: "Appear in ChatGPT, Perplexity and Gemini. SEO for the AI era.", href: "/en/geo-generative-engine-optimization/", icon: "🤖" },
        { title: "Google Ads", desc: "Appear at the top of Google from day one. You only pay when someone clicks.", href: "/en/google-ads-management/", icon: "⚡" },
        { title: "Local SEO", desc: "Dominate search results in your city and area of influence.", href: "/en/seo-web-positioning/", icon: "📌" },
      ],
    },
    {
      id: "acquisition",
      tipo: "ACQUISITION",
      objetivo: "Generate leads and sales",
      emoji: "🎯",
      servicios: [
        { title: "Google Ads", desc: "Generate potential customers from day one. Campaigns optimised for your sector.", href: "/en/google-ads-management/", icon: "🎯" },
        { title: "Email Marketing", desc: "The channel with the highest ROI in digital marketing. Automated sequences that convert.", href: "/en/email-marketing-service/", icon: "✉️" },
        { title: "WhatsApp Marketing", desc: "98% open rate. Communicate with your customers where they already are.", href: "/en/whatsapp-marketing-service/", icon: "💬" },
      ],
    },
    {
      id: "community",
      tipo: "COMMUNITY",
      objetivo: "Build audience and brand",
      emoji: "👥",
      servicios: [
        { title: "Social Media Management", desc: "Professional management of Instagram, LinkedIn, Facebook and TikTok.", href: "/en/social-media-management/", icon: "📱" },
        { title: "Content Marketing", desc: "Content that positions your brand as a reference in your sector.", href: "/en/content-marketing/", icon: "✍️" },
        { title: "Blog Creation", desc: "Your blog as a permanent digital asset. Constant organic traffic without paying per visit.", href: "/en/blog-creation-service/", icon: "📝" },
      ],
    },
    {
      id: "monetization",
      tipo: "MONETIZATION",
      objetivo: "Generate additional income",
      emoji: "💰",
      servicios: [
        { title: "Monetisation Blog", desc: "Create a digital asset that generates passive income with AdSense and affiliate marketing.", href: "/en/blog-creation-service/", icon: "💸" },
        { title: "Ecommerce Partnership", desc: "Hybrid model: we build your infrastructure and share in the success.", href: "/en/ecommerce-no-commissions/", icon: "🤝" },
      ],
    },
    {
      id: "growth",
      tipo: "GROWTH",
      objetivo: "Constant improvement based on data",
      emoji: "📊",
      servicios: [
        { title: "Web Analytics", desc: "GA4, GTM and business dashboards. Every decision backed by real data.", href: "/en/web-analytics/", icon: "📊" },
        { title: "AI Applied to Marketing", desc: "Our own AI protocols integrated into every service.", href: "/en/ai-applied-marketing/", icon: "🧠" },
        { title: "Digital Audit", desc: "Complete diagnosis of your digital presence before investing more.", href: "/en/digital-audit/", icon: "🔬" },
      ],
    },
  ],
  fr: [
    {
      id: "presence",
      tipo: "PRÉSENCE",
      objetivo: "Construisez votre base digitale",
      emoji: "🏗️",
      servicios: [
        { title: "Création de Site Web", desc: "Votre site, votre actif le plus important. Rapide, optimisé et conçu pour convertir.", href: "/fr/creation-site-web/", icon: "🌐" },
        { title: "Boutique en Ligne", desc: "Vendez dans toute l'Espagne sans commissions ni frais mensuels.", href: "/fr/boutique-en-ligne/", icon: "🛒" },
        { title: "Google Business Profile", desc: "Apparaissez sur Google Maps quand vos clients cherchent ce que vous offrez.", href: "/fr/gestion-google-business-profile/", icon: "📍" },
        { title: "Réputation en Ligne", desc: "Gérez vos avis et construisez une image digitale qui génère la confiance.", href: "/fr/gestion-reputation-en-ligne/", icon: "⭐" },
      ],
    },
    {
      id: "visibilite",
      tipo: "VISIBILITÉ",
      objetivo: "Apparaissez quand on vous cherche",
      emoji: "🔍",
      servicios: [
        { title: "SEO Positionnement Web", desc: "Première page de Google. Trafic organique sans payer par clic.", href: "/fr/seo-positionnement-web/", icon: "📈" },
        { title: "GEO — Positionnement IA", desc: "Apparaissez dans ChatGPT, Perplexity et Gemini.", href: "/fr/geo-optimisation-moteurs-generatifs/", icon: "🤖" },
        { title: "Google Ads", desc: "Apparaissez en tête de Google dès le premier jour.", href: "/fr/gestion-google-ads/", icon: "⚡" },
        { title: "SEO Local", desc: "Dominez les résultats de recherche dans votre ville.", href: "/fr/seo-positionnement-web/", icon: "📌" },
      ],
    },
    {
      id: "acquisition",
      tipo: "ACQUISITION",
      objetivo: "Générez des leads et des ventes",
      emoji: "🎯",
      servicios: [
        { title: "Google Ads", desc: "Générez des clients potentiels dès le premier jour.", href: "/fr/gestion-google-ads/", icon: "🎯" },
        { title: "Email Marketing", desc: "Le canal avec le meilleur ROI du marketing digital.", href: "/fr/email-marketing-entreprises/", icon: "✉️" },
        { title: "WhatsApp Marketing", desc: "98% de taux d'ouverture. Communiquez où vos clients se trouvent.", href: "/fr/service-whatsapp-marketing/", icon: "💬" },
      ],
    },
    {
      id: "communaute",
      tipo: "COMMUNAUTÉ",
      objetivo: "Construisez audience et marque",
      emoji: "👥",
      servicios: [
        { title: "Réseaux Sociaux", desc: "Gestion professionnelle d'Instagram, LinkedIn, Facebook et TikTok.", href: "/fr/gestion-reseaux-sociaux/", icon: "📱" },
        { title: "Marketing de Contenu", desc: "Du contenu qui positionne votre marque comme référence.", href: "/fr/marketing-de-contenu/", icon: "✍️" },
        { title: "Création de Blog", desc: "Votre blog comme actif digital permanent.", href: "/fr/service-creation-blog/", icon: "📝" },
      ],
    },
    {
      id: "monetisation",
      tipo: "MONÉTISATION",
      objetivo: "Générez des revenus supplémentaires",
      emoji: "💰",
      servicios: [
        { title: "Blog de Monétisation", desc: "Créez un actif digital qui génère des revenus passifs.", href: "/fr/service-creation-blog/", icon: "💸" },
        { title: "E-commerce Participatif", desc: "Modèle hybride : nous construisons votre infrastructure.", href: "/fr/boutique-en-ligne/", icon: "🤝" },
      ],
    },
    {
      id: "croissance",
      tipo: "CROISSANCE",
      objetivo: "Amélioration constante basée sur les données",
      emoji: "📊",
      servicios: [
        { title: "Analytique Web", desc: "GA4, GTM et tableaux de bord métier. Chaque décision basée sur des données réelles.", href: "/fr/analytique-web/", icon: "📊" },
        { title: "IA Appliquée au Marketing", desc: "Nos propres protocoles IA intégrés dans chaque service.", href: "/fr/service-ia-marketing/", icon: "🧠" },
        { title: "Audit Digital", desc: "Diagnostic complet de votre présence digitale.", href: "/fr/audit-digital/", icon: "🔬" },
      ],
    },
  ],
};

export function LangServicesTab({ lang }: { lang: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = SERVICE_TABS_LANG[lang] ?? SERVICE_TABS_LANG.en;
  const active = tabs[activeTab];

  return (
    <div>
      {/* Desktop tabs */}
      <div className="hidden md:block">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 px-3 py-4 text-center transition-all border-b-2 ${
                activeTab === i
                  ? "border-accent-500 bg-white"
                  : "border-transparent hover:border-gray-300 bg-gray-50 hover:bg-white"
              }`}
            >
              <div className="text-xl mb-1">{tab.emoji}</div>
              <div className={`text-xs font-bold uppercase tracking-widest ${activeTab === i ? "text-accent-500" : "text-gray-400"}`}>
                {tab.tipo}
              </div>
              <div className={`text-xs mt-0.5 leading-tight ${activeTab === i ? "text-gray-600" : "text-gray-400"}`}>
                {tab.objetivo}
              </div>
            </button>
          ))}
        </div>
        <div className="bg-white p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {active.servicios.map((s) => (
              <Link
                key={s.href + s.title}
                href={s.href}
                className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-accent-300 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-primary-600 text-sm mb-2 group-hover:text-accent-500 transition-colors leading-tight">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-6">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-lg">{tab.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-500">{tab.tipo}</p>
                <p className="text-xs text-gray-400">{tab.objetivo}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {tab.servicios.map((s) => (
                <Link
                  key={s.href + s.title}
                  href={s.href}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-accent-300 transition-colors"
                >
                  <span className="text-xl shrink-0">{s.icon}</span>
                  <div>
                    <p className="font-semibold text-primary-600 text-sm">{s.title}</p>
                    <p className="text-gray-400 text-xs leading-tight mt-0.5">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
