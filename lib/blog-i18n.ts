/**
 * blog-i18n.ts — Traducciones EN/FR de títulos y excerpts de artículos del blog.
 *
 * Fuente de verdad: generateMetadata() en cada app/[lang]/(site)/{en-slug}/page.tsx
 * La clave es el slug ES de allPosts (sin barras).
 * excerpt = description del metadata de la página.
 */

export type PostTranslation = {
  title: string;
  excerpt: string;
};

export type PostI18n = {
  en: PostTranslation;
  fr: PostTranslation;
};

export const BLOG_I18N: Record<string, PostI18n> = {
  "digitalizacion-pymes-espana-datos-ine-2026": {
    en: {
      title: "Spain's digital SMEs in 2026: websites, social media, AI and e-commerce according to INE",
      excerpt: "Official INE data published on 22/10/2026: 36.2% of firms with fewer than 10 employees and internet access have a website, against 82.9% of those with 10 or more. Social media, AI, online sales and what it means for your business.",
    },
    fr: {
      title: "La PME numérique en Espagne en 2026 : site web, réseaux, IA et e-commerce selon l'INE",
      excerpt: "Données officielles de l'INE publiées le 22/10/2026 : 36,2 % des entreprises de moins de 10 salariés connectées ont un site web, contre 82,9 % de celles de 10 salariés ou plus. Réseaux, IA, vente en ligne et ce que cela signifie pour vous.",
    },
  },
  "cuanto-tarda-el-seo-en-dar-resultados": {
    en: {
      title: "How long does SEO take to work: what happens month by month and what it depends on",
      excerpt: "How long SEO takes to work: usually 3 to 6 months for first results and 6 to 12 to consolidate. What happens in each phase and how to check Search Console.",
    },
    fr: {
      title: "Combien de temps faut-il pour que le SEO donne des résultats : mois par mois et de quoi cela dépend",
      excerpt: "Combien de temps faut-il au SEO : souvent 3 à 6 mois pour les premiers résultats et 6 à 12 pour se consolider. Les étapes et leur suivi dans Search Console.",
    },
  },
  "seo-para-pymes-guia": {
    en: {
      title: "SEO for SMEs in 2026: a practical guide to getting started without wasting money",
      excerpt: "SEO for SMEs in Spain (2026): what you can do yourself this week, what is worth delegating, what an SEO plan costs and how long it takes to show results.",
    },
    fr: {
      title: "SEO pour PME en 2026 : guide pratique pour démarrer sans gaspiller d'argent",
      excerpt: "SEO pour PME en Espagne (2026) : ce que vous pouvez faire vous-même cette semaine, ce qu'il vaut mieux déléguer, combien coûte un plan SEO et en quel délai.",
    },
  },
  "google-ads-sin-comision-agencia-marketing": {
    en: {
      title: "Google Ads with No Commission on Budget",
      excerpt: "What it means when an agency charges no commission on your Google Ads spend, how much you save and how to evaluate the management model that suits you best.",
    },
    fr: {
      title: "Google Ads sans commission sur le budget",
      excerpt: "Google Ads sans commission sur le budget : ce que cela change quand l'agence ne prélève rien sur vos dépenses, ce que vous économisez et comment comparer.",
    },
  },
  "redes-sociales-para-empresas-b2b-2026": {
    en: {
      title: "Social Media for B2B Companies in 2026",
      excerpt: "Social media for B2B companies in 2026: which networks to prioritise, what content generates leads and how to measure the real return on your investment.",
    },
    fr: {
      title: "Réseaux sociaux pour entreprises B2B en 2026",
      excerpt: "Guide pratique des réseaux sociaux B2B pour 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement.",
    },
  },
  "brandformance-como-unir-marca-y-performance": {
    en: {
      title: "Brandformance: Uniting Brand and Performance",
      excerpt: "Brandformance unites brand and performance marketing in one strategy. Why splitting the budgets costs SMEs money and how to combine both in practice.",
    },
    fr: {
      title: "Brandformance : unir marque et performance",
      excerpt: "Le brandformance réunit marque et performance dans une même stratégie. Pourquoi séparer les budgets coûte cher aux PME et comment unir les deux en pratique.",
    },
  },
  "marketing-digital-con-ia-y-respuestas-cero-clic": {
    en: {
      title: "Digital Marketing in the Age of AI Search",
      excerpt: "AI answers directly without users clicking through. How to adapt your digital marketing strategy to keep winning customers in the zero-click era.",
    },
    fr: {
      title: "Marketing digital, IA et zéro clic",
      excerpt: "L'IA répond directement sans que l'utilisateur ne clique. Comment adapter votre stratégie marketing pour continuer à capter des clients à l'ère du zéro clic.",
    },
  },
  "como-escribir-contenido-que-no-suene-a-ia": {
    en: {
      title: "Writing Content That Doesn't Sound Like AI",
      excerpt: "How to write content that doesn't sound like AI: the patterns that give it away, practical editing techniques and the role of the human editor in the process.",
    },
    fr: {
      title: "Écrire du contenu qui ne ressemble pas à l'IA",
      excerpt: "Écrire du contenu qui ne ressemble pas à l'IA : les tics qui le trahissent, des techniques d'édition concrètes et le rôle de l'éditeur humain dans le travail.",
    },
  },
  "seo-social-instagram-tiktok-linkedin-como-buscadores": {
    en: {
      title: "Social SEO: Instagram, TikTok and LinkedIn",
      excerpt: "Social SEO: how to optimise your profiles and content for search on Instagram, TikTok and LinkedIn, with platform-by-platform strategies for 2026.",
    },
    fr: {
      title: "SEO social : Instagram, TikTok et LinkedIn",
      excerpt: "SEO social : comment optimiser vos profils et contenus pour la recherche sur Instagram, TikTok et LinkedIn, avec une stratégie par plateforme pour 2026.",
    },
  },
  "atribucion-de-marketing-como-medir-impacto-real": {
    en: {
      title: "Marketing Attribution: Measuring Real Impact",
      excerpt: "Marketing attribution for SMEs: why last-click distorts your data, the main attribution models and how to approximate real impact without enterprise tools.",
    },
    fr: {
      title: "Attribution marketing : mesurer l'impact réel",
      excerpt: "Attribution marketing pour PME : pourquoi le dernier clic fausse vos décisions, les principaux modèles et comment mesurer l'impact réel sans outils coûteux.",
    },
  },
  "ha-muerto-el-seo-con-la-ia": {
    en: {
      title: "Is SEO Dead With AI? The Honest Answer",
      excerpt: "With ChatGPT and AI search engines on the rise, many wonder if SEO is still worth investing in. Here is the honest answer.",
    },
    fr: {
      title: "Le SEO est-il mort avec l'IA ? La réponse honnête",
      excerpt: "Avec la montée de ChatGPT et des moteurs IA, beaucoup se demandent si le SEO vaut encore la peine. Voici la réponse honnête.",
    },
  },
  "auditoria-seo-basica": {
    en: {
      title: "How to audit a website step by step: a 30-point checklist for SMEs",
      excerpt: "How to audit a website with free tools: 30 checks covering indexing, speed, content, Google Business Profile and AI visibility, and how to read the results.",
    },
    fr: {
      title: "Comment faire un audit de site web pas à pas : checklist en 30 points pour les PME",
      excerpt: "Audit de site web pas à pas : une checklist de 30 points et des outils gratuits pour vérifier indexation, vitesse, contenu, fiche Google et visibilité IA.",
    },
  },

  "ia-aplicada-a-marketing-valor-real-o-humo": {
    en: {
      title: "AI Applied to Marketing: Where It Adds Value",
      excerpt: "Discover where AI applied to marketing delivers real value, which uses to prioritise, and where there is still too much hype.",
    },
    fr: {
      title: "IA appliquée au marketing : sa vraie valeur",
      excerpt: "Découvrez où l'IA appliquée au marketing apporte une vraie valeur, quels usages prioriser et où il y a encore trop de bruit.",
    },
  },
  "que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026": {
    en: {
      title: "What Is a Business Chatbot? Why You Need One",
      excerpt: "What a business chatbot is and why SMEs use one: the types available, what it can automate, the numbers behind the investment and the legal points to check.",
    },
    fr: {
      title: "Qu'est-ce qu'un chatbot pour entreprises",
      excerpt: "Qu'est-ce qu'un chatbot pour entreprises : les types existants, ce qu'il automatise dans une PME, les chiffres de l'investissement et le cadre légal.",
    },
  },
  "agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio": {
    en: {
      title: "AI Agents for Marketing: Uses for SMEs",
      excerpt: "AI agents are no longer science fiction. In 2026, accessible tools let any SME automate marketing tasks with agents that work autonomously. Practical guide.",
    },
    fr: {
      title: "Agents IA pour le marketing : usages en PME",
      excerpt: "Agents IA pour le marketing : en quoi ils diffèrent de ChatGPT, les tâches qu'ils assurent dans une PME, les outils sans équipe technique et leurs risques.",
    },
  },
  "herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan": {
    en: {
      title: "AI Tools for Digital Marketing in 2026",
      excerpt: "Not every AI marketing tool is worth the time it takes to learn. An honest analysis of the ones that deliver real value for SMEs and agencies in 2026.",
    },
    fr: {
      title: "Outils IA pour le marketing digital en 2026",
      excerpt: "Outils IA pour le marketing digital en 2026 : ChatGPT, Claude, Canva, HubSpot Breeze, Make et Zapier passés au crible, et la combinaison conseillée en PME.",
    },
  },
  "chatgpt-para-marketing-digital": {
    en: {
      title: "How to Use ChatGPT for Digital Marketing",
      excerpt: "How to use ChatGPT for SEO content, Google Ads, social media and email marketing without losing quality.",
    },
    fr: {
      title: "Comment utiliser ChatGPT pour le marketing digital",
      excerpt: "Comment utiliser ChatGPT pour le contenu SEO, Google Ads, réseaux sociaux et email marketing sans perdre en qualité.",
    },
  },
  "como-generar-leads-calidad-pyme": {
    en: {
      title: "How to Generate Quality Leads for Your SME",
      excerpt: "How to generate quality leads for your SME by improving message, segmentation, channels, website and sales process.",
    },
    fr: {
      title: "Comment générer des leads de qualité pour votre PME",
      excerpt: "Comment générer des leads de qualité pour votre PME en améliorant votre message, segmentation, canaux, site web et processus commercial.",
    },
  },
  "que-revisar-antes-de-invertir-mas-en-marketing-digital": {
    en: {
      title: "What to Review Before Investing in Marketing",
      excerpt: "Before investing more in digital marketing, review these 7 key areas to avoid amplifying mistakes and make better investment decisions.",
    },
    fr: {
      title: "Que vérifier avant d'investir en marketing",
      excerpt: "Que vérifier avant d'investir en marketing : site, suivi analytique, canaux actuels, ROI et objectifs, pour ne pas amplifier des erreurs avec plus de budget.",
    },
  },
  "senales-web-necesita-rediseno": {
    en: {
      title: "Signs Your Website Needs an Urgent Redesign",
      excerpt: "The clearest signs that your website is losing you sales and when it makes sense to redesign rather than keep optimising.",
    },
    fr: {
      title: "Signes que votre site a besoin d'une refonte",
      excerpt: "Les signes les plus clairs que votre site web vous fait perdre des ventes et quand il est logique de refondre plutôt que de continuer à optimiser.",
    },
  },
  "cuanto-cuesta-pagina-web-profesional": {
    en: {
      title: "How Much Does a Professional Website Cost?",
      excerpt: "What really influences the price of a professional website, what it should include and how to compare quotes.",
    },
    fr: {
      title: "Combien coûte un site web professionnel ?",
      excerpt: "Ce qui influence vraiment le prix d'un site web professionnel, ce qu'il doit inclure et comment comparer les devis.",
    },
  },
  "seo-para-ecommerce-errores-que-frenan-ventas": {
    en: {
      title: "SEO for Ecommerce: Errors That Slow Sales",
      excerpt: "The most common SEO errors in ecommerce and what to review to improve visibility, qualified traffic and sales.",
    },
    fr: {
      title: "SEO pour e-commerce : erreurs à éviter",
      excerpt: "Les erreurs SEO les plus courantes en e-commerce et ce qu'il faut vérifier pour améliorer la visibilité, le trafic qualifié et les ventes.",
    },
  },
  "que-puede-automatizar-una-pyme-en-marketing-y-ventas": {
    en: {
      title: "What Can an SME Automate in Marketing",
      excerpt: "What marketing and sales processes can an SME automate to save time, improve follow-up and capture better leads.",
    },
    fr: {
      title: "Ce qu'une PME peut automatiser en marketing",
      excerpt: "Quels processus de marketing et de vente une PME peut automatiser pour gagner du temps, améliorer le suivi et mieux capturer des leads.",
    },
  },
  "seo-local-empresas-servicios": {
    en: {
      title: "Local SEO for Service Businesses in Your Area",
      excerpt: "What a service business needs to improve its local presence and attract more customers from Google in its area.",
    },
    fr: {
      title: "SEO local pour les entreprises de services — Comment attirer des clients dans votre zone",
      excerpt: "Ce dont une entreprise de services a besoin pour améliorer sa présence locale et attirer plus de clients depuis Google dans sa zone.",
    },
  },
  "actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web": {
    en: {
      title: "Google Algorithm Updates 2026: What Changed",
      excerpt: "Google algorithm updates in 2026: what changed for E-E-A-T, AI Overviews and AI content, which technical signals matter and what to do if traffic has fallen.",
    },
    fr: {
      title: "Mises à jour Google 2026 : ce qui a changé",
      excerpt: "Mises à jour Google 2026 : ce qui change pour l'E-E-A-T, les AI Overviews et le contenu IA, les signaux techniques clés et que faire si votre trafic baisse.",
    },
  },
  "seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini": {
    en: {
      title: "SEO in the AI Era: Ranking with Google Gemini",
      excerpt: "SEO in the AI era: which searches still bring traffic now that Google answers with Gemini, how to appear in AI Overviews and the content strategy for 2026.",
    },
    fr: {
      title: "SEO à l'ère de l'IA et de Google Gemini",
      excerpt: "SEO à l'ère de l'IA : les recherches qui apportent encore du trafic quand Google répond avec Gemini, comment entrer dans les AI Overviews et quoi publier.",
    },
  },
  "geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca": {
    en: {
      title: "GEO for SMEs: Appear in AI Responses",
      excerpt: "SMEs have a real advantage in GEO: niche specificity. A practical guide for any small business to appear in ChatGPT, Gemini and Perplexity responses.",
    },
    fr: {
      title: "GEO pour les PME : apparaître dans l'IA",
      excerpt: "GEO pour les PME : pourquoi la spécialisation est un atout pour apparaître dans ChatGPT, Gemini et Perplexity, et cinq étapes à lancer sans outils payants.",
    },
  },
  "como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026": {
    en: {
      title: "Optimise Content for AI Citations: GEO 2026",
      excerpt: "Optimise content for AI citations: structure your pages, use advanced schema, set up llms.txt and build entity authority so ChatGPT and Gemini can cite you.",
    },
    fr: {
      title: "Optimiser votre contenu pour l'IA : GEO 2026",
      excerpt: "Optimiser votre contenu pour être cité par ChatGPT et Gemini : structure des pages, schema avancé, fichier llms.txt et autorité d'entité, pas à pas.",
    },
  },
  "por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026": {
    en: {
      title: "Why ChatGPT Visibility Matters More Than SEO",
      excerpt: "Why appearing in ChatGPT, Perplexity and Gemini matters for SMEs in 2026: how search has changed, what GEO is and the three signals AI looks for in content.",
    },
    fr: {
      title: "Pourquoi ChatGPT compte plus que le SEO",
      excerpt: "Pourquoi apparaître dans ChatGPT, Perplexity et Gemini compte en 2026 : comment la recherche a changé, ce qu'est le GEO et les trois signaux que l'IA repère.",
    },
  },
  "geo-posicionamiento-ia-chatgpt-empresas-espana": {
    en: {
      title: "What Is GEO: Appear in ChatGPT for Business",
      excerpt: "What GEO is and how to get your business mentioned by ChatGPT and Perplexity: concrete steps, how it differs from SEO and the role of your business listing.",
    },
    fr: {
      title: "GEO : comment apparaître dans ChatGPT",
      excerpt: "GEO : comment faire citer votre entreprise par ChatGPT et Perplexity. Étapes concrètes, différences avec le SEO et rôle de votre fiche et des données locales.",
    },
  },
  "geo-vs-seo-diferencias": {
    en: {
      title: "GEO vs SEO: Differences and How to Combine",
      excerpt: "GEO vs SEO: the key differences between ranking in Google and being cited by ChatGPT, Perplexity and Gemini, and how to prioritise both by business type.",
    },
    fr: {
      title: "GEO vs SEO : différences et comment combiner",
      excerpt: "GEO vs SEO : ce qui distingue le référencement sur Google de la citation par ChatGPT, Perplexity et Gemini, et comment prioriser les deux selon votre secteur.",
    },
  },
  "que-es-geo-generative-engine-optimization": {
    en: {
      title: "What Is GEO (Generative Engine Optimization)?",
      excerpt: "GEO: what it is, how it works and why optimising your presence to appear in ChatGPT, Perplexity and Gemini is the new frontier of SEO.",
    },
    fr: {
      title: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
      excerpt: "Qu'est-ce que le GEO : le fonctionnement des moteurs génératifs, ce qui le distingue du SEO et comment préparer votre site aux réponses de ChatGPT et Gemini.",
    },
  },
  "como-la-ia-esta-cambiando-el-marketing-digital-para-siempre": {
    en: {
      title: "How AI Is Changing Digital Marketing Forever",
      excerpt: "How AI is changing digital marketing: what it already does well, what it still cannot do, the new role of marketers and how to prepare your company.",
    },
    fr: {
      title: "Comment l'IA transforme le marketing digital",
      excerpt: "Comment l'IA transforme le marketing digital : ce qu'elle fait déjà bien, ses limites, le nouveau rôle des marketeurs et comment préparer votre entreprise.",
    },
  },
  "atencion-cliente-24-7-pymes-sin-contratar-personal": {
    en: {
      title: "24/7 Customer Service for SMEs Without Hiring",
      excerpt: "24/7 customer service for SMEs without hiring night staff: what an AI chatbot can handle alone, when to hand over to a person and what it costs.",
    },
    fr: {
      title: "Service client 24h/24 pour PME sans recruter",
      excerpt: "Service client 24h/24 pour PME sans recruter : ce qu'un chatbot IA règle seul, quand passer la main à un humain, son coût et ce qu'attendre à 90 jours.",
    },
  },
  "chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana": {
    en: {
      title: "AI Chatbot Compliance: GDPR and EU AI Act",
      excerpt: "AI chatbot compliance with GDPR and the EU AI Act: what applies from 2 August 2026, the four elements every business chatbot needs and a checklist.",
    },
    fr: {
      title: "Chatbot IA et conformité : RGPD et AI Act",
      excerpt: "Chatbot IA et conformité : ce qu'imposent le RGPD et l'AI Act dès le 2 août 2026, les quatre éléments obligatoires et une checklist pour être en règle.",
    },
  },
  "cuanto-cuesta-un-chatbot-para-empresas-espana-2026": {
    en: {
      title: "How Much Does a Chatbot Cost in 2026",
      excerpt: "How much a chatbot costs in 2026: the pricing models on the market, what the main providers charge, what drives the final price and when it pays off.",
    },
    fr: {
      title: "Combien coûte un chatbot d'entreprise en 2026",
      excerpt: "Combien coûte un chatbot d'entreprise en 2026 : modèles de tarification, prix des principaux acteurs, ce qui fait varier le coût et quand il devient rentable.",
    },
  },
  "chatbot-para-tienda-online-guia-completa-2026": {
    en: {
      title: "Chatbot for Online Stores: Sell More in 2026",
      excerpt: "Chatbot for online stores: answer product questions, recover abandoned carts and report order status 24/7. Integrations, GDPR and costs for 2026.",
    },
    fr: {
      title: "Chatbot pour boutique en ligne : vendre plus",
      excerpt: "Chatbot pour boutique en ligne : répondre aux questions produits, relancer les paniers abandonnés et suivre les commandes 24h/24. Intégrations, RGPD et coûts.",
    },
  },
  "chatbot-vs-live-chat-diferencias-cual-elegir-empresa": {
    en: {
      title: "Chatbot vs Live Chat: Which to Choose",
      excerpt: "Chatbot vs live chat: the real differences, when each one suits your business and why a chatbot with escalation to a person usually works best.",
    },
    fr: {
      title: "Chatbot vs live chat : lequel choisir",
      excerpt: "Chatbot ou live chat : les vraies différences, quand chacun convient à votre entreprise et pourquoi un chatbot relayé par un humain fonctionne souvent mieux.",
    },
  },
  "chatbot-captacion-cualificacion-leads-guia-practica": {
    en: {
      title: "Chatbot Lead Generation: Capture and Qualify",
      excerpt: "Chatbot lead generation: capture enquiries 24/7, qualify them with the right questions and pass them to your CRM with full context. A practical guide.",
    },
    fr: {
      title: "Chatbot pour capter et qualifier des leads",
      excerpt: "Chatbot pour capter des leads 24h/24, les qualifier avec les bonnes questions et les transmettre à votre CRM avec tout le contexte. Guide pratique pour 2026.",
    },
  },
  "chatbot-para-clinicas-centros-salud-automatizar-citas": {
    en: {
      title: "Chatbot for Clinics: Appointments and FAQs",
      excerpt: "Chatbot for clinics: automate appointments, cancellations and FAQs, qualify patients and stay GDPR-compliant. How to integrate it and work out its ROI.",
    },
    fr: {
      title: "Chatbot pour cliniques : rendez-vous et FAQ",
      excerpt: "Chatbot pour cliniques : automatiser rendez-vous, annulations et questions fréquentes, qualifier les patients et respecter le RGPD. Intégration et ROI.",
    },
  },
  "chatbot-wordpress-como-instalarlo-que-evitar": {
    en: {
      title: "Chatbot for WordPress: Installation Guide",
      excerpt: "Chatbot for WordPress: why most plugins fall short, how to install a useful chatbot step by step without slowing your site, and the mistakes to avoid.",
    },
    fr: {
      title: "Chatbot pour WordPress : guide d'installation",
      excerpt: "Chatbot pour WordPress : pourquoi la plupart des plugins déçoivent, comment installer un chatbot utile sans ralentir votre site et les erreurs à éviter.",
    },
  },
  "como-elegir-chatbot-para-empresa-checklist-2026": {
    en: {
      title: "How to Choose a Chatbot: 2026 Checklist",
      excerpt: "How to choose a chatbot: a 10-question checklist on integrations, volume, maintenance, legal compliance and ROI to avoid the most common mistakes.",
    },
    fr: {
      title: "Choisir le bon chatbot : checklist 2026",
      excerpt: "Choisir le bon chatbot : une checklist de 10 questions sur les intégrations, le volume, la maintenance, la conformité et le ROI pour éviter les erreurs.",
    },
  },
  "cro-shopware-optimizar-conversion-tienda": {
    en: {
      title: "Shopware CRO: Optimise Your Conversion Rate",
      excerpt: "Boost your Shopware store's conversion rate: key GA4 events, the 5 real causes of cart abandonment, and product page and checkout optimisation.",
    },
    fr: {
      title: "CRO Shopware : optimiser votre conversion",
      excerpt: "CRO Shopware : les 4 événements GA4 indispensables, les 5 vraies causes d'abandon de panier et comment optimiser fiches produit et checkout pour convertir.",
    },
  },
  "geo-shopware-agentic-commerce-chatgpt": {
    en: {
      title: "GEO for Shopware: Sell via ChatGPT",
      excerpt: "GEO for Shopware: get your store ready for the native Agentic Commerce in version 6.7.9 so ChatGPT and Perplexity can recommend your products.",
    },
    fr: {
      title: "GEO pour Shopware : vendre via ChatGPT",
      excerpt: "GEO pour Shopware : préparez votre boutique à l'Agentic Commerce natif de la version 6.7.9 pour que ChatGPT et Perplexity puissent recommander vos produits.",
    },
  },
  "google-ads-shopware-campanas-que-venden": {
    en: {
      title: "Google Ads for Shopware: Campaigns That Sell",
      excerpt: "How to set up Google Ads for your Shopware store: conversion tracking, Merchant Center connection, Performance Max, Shopping and ROAS optimisation.",
    },
    fr: {
      title: "Campagnes Google Ads pour Shopware",
      excerpt: "Google Ads pour Shopware : suivi des conversions, lien avec Merchant Center, Performance Max et Shopping, titres du flux et pilotage au ROAS plutôt qu'au CPC.",
    },
  },
  "migrar-shopware-prestashop-woocommerce-seo": {
    en: {
      title: "Migrating to Shopware Without Losing SEO",
      excerpt: "How to migrate your store to Shopware without losing rankings: URL audit, 301 redirect map, launch protocol and post-migration monitoring.",
    },
    fr: {
      title: "Migrer vers Shopware sans perdre le SEO",
      excerpt: "Migrer vers Shopware sans perdre votre SEO : audit des URL de valeur, plan de redirections 301, protocole du jour de lancement et suivi après la migration.",
    },
  },
  "seo-shopware-posicionar-tienda-google": {
    en: {
      title: "Shopware SEO: How to Rank Your Store on Google",
      excerpt: "Technical SEO guide for Shopware 6: URLs, faceted navigation, product schema, Core Web Vitals and optimised product pages to rank your store on Google.",
    },
    fr: {
      title: "SEO Shopware : positionner votre boutique",
      excerpt: "SEO Shopware : URL et canonical, navigation à facettes, schéma produit, Core Web Vitals et fiches uniques pour bien positionner une boutique Shopware 6.",
    },
  },
  "woocommerce-vs-shopify-cual-elegir-tienda-online": {
    en: {
      title: "WooCommerce vs Shopify for Your Store in 2026",
      excerpt: "WooCommerce vs Shopify in 2026: an honest comparison of 3-year costs, control and commissions, with a recommendation by business type and a word on Shopware.",
    },
    fr: {
      title: "WooCommerce vs Shopify : lequel choisir",
      excerpt: "WooCommerce vs Shopify : comparaison honnête des coûts sur 3 ans, du contrôle et des commissions, avec une recommandation selon votre type d'activité.",
    },
  },
  "migrar-shopify-woocommerce": {
    en: {
      title: "Migrate from Shopify to WooCommerce Safely",
      excerpt: "Complete guide to migrate from Shopify to WooCommerce: products, customers, orders, SEO and step-by-step process.",
    },
    fr: {
      title: "Comment migrer de Shopify vers WooCommerce sans rien perdre",
      excerpt: "Guide complet pour migrer de Shopify vers WooCommerce : produits, clients, commandes, SEO et processus étape par étape.",
    },
  },
  "gestion-resenas-negativas-google": {
    en: {
      title: "How to Manage Negative Reviews on Google",
      excerpt: "How to respond to negative Google reviews professionally. Strategy, response templates and how to turn criticism into opportunities.",
    },
    fr: {
      title: "Comment gérer les avis négatifs sur Google de manière professionnelle",
      excerpt: "Comment répondre aux avis négatifs sur Google de manière professionnelle. Stratégie, modèles de réponse et comment transformer les critiques en opportunités.",
    },
  },
  "google-my-business-empresas-guia": {
    en: {
      title: "Google My Business for Businesses: Guide",
      excerpt: "Complete guide to Google My Business (now Google Business Profile). How to create, verify, optimise and manage your listing to attract local customers.",
    },
    fr: {
      title: "Google My Business pour les entreprises",
      excerpt: "Google My Business, devenu Google Business Profile : créer, vérifier et optimiser votre fiche, publier des posts et gérer les avis pour attirer des clients.",
    },
  },
  "como-gestionar-reputacion-online-empresa": {
    en: {
      title: "How to Manage Your Online Reputation in 2026",
      excerpt: "Online reputation is built or destroyed in public. Learn how to manage it strategically: reviews, mentions, responses and crisis prevention.",
    },
    fr: {
      title: "Gérer votre réputation en ligne : guide 2026",
      excerpt: "La réputation en ligne se construit ou se détruit en public. Découvrez comment la gérer avec méthode : avis, mentions, réponses et prévention des crises.",
    },
  },
  "como-crear-propuesta-de-valor": {
    en: {
      title: "How to Create a Value Proposition",
      excerpt: "Step-by-step guide to create a value proposition that clearly explains why customers should choose you over the competition.",
    },
    fr: {
      title: "Comment créer une proposition de valeur",
      excerpt: "Guide étape par étape pour créer une proposition de valeur qui explique clairement pourquoi les clients devraient vous choisir plutôt que la concurrence.",
    },
  },
  "errores-digitales-negocio-nuevo": {
    en: {
      title: "Digital Mistakes New Businesses Make",
      excerpt: "The most common digital mistakes new businesses make and how to avoid them from day one to save time and money.",
    },
    fr: {
      title: "Erreurs digitales des nouvelles entreprises",
      excerpt: "Les erreurs digitales les plus courantes des nouvelles entreprises et comment les éviter dès le premier jour pour économiser du temps et de l'argent.",
    },
  },
  "cuando-elegir-seo-vs-google-ads": {
    en: {
      title: "When to Choose SEO vs Google Ads",
      excerpt: "How to decide between SEO and Google Ads based on your business, budget, urgency and time horizon. With real examples and a practical decision matrix.",
    },
    fr: {
      title: "Quand choisir le SEO plutôt que Google Ads",
      excerpt: "SEO ou Google Ads : comment choisir selon votre activité, votre budget, l'urgence et l'horizon, quand combiner les deux, avec une matrice de décision.",
    },
  },
  "link-building-pymes": {
    en: {
      title: "Link Building for SMEs: Safe Quality Links",
      excerpt: "Link building strategies that work for SMEs. How to get quality backlinks without risking a Google penalty or wasting budget on low-quality links.",
    },
    fr: {
      title: "Link building pour PME : liens de qualité",
      excerpt: "Link building pour PME : quels liens aident et lesquels nuisent, des stratégies sûres pour obtenir des backlinks de qualité et les erreurs qui pénalisent.",
    },
  },
  "google-shopping-tiendas-online": {
    en: {
      title: "Google Shopping for Online Stores: Guide",
      excerpt: "How to set up Google Shopping, optimise your product feed and appear in Google product results.",
    },
    fr: {
      title: "Google Shopping pour boutiques en ligne — Guide complet 2025",
      excerpt: "Comment configurer Google Shopping, optimiser votre flux de produits et apparaître dans les résultats produits de Google.",
    },
  },
  "metodos-pago-tienda-online-espana": {
    en: {
      title: "Payment Methods for Online Stores",
      excerpt: "Which payment gateways to use for your online store, how to configure them and which buyers prefer.",
    },
    fr: {
      title: "Méthodes de paiement pour boutiques en ligne — Lesquelles installer et pourquoi",
      excerpt: "Quelles passerelles de paiement utiliser pour votre boutique en ligne, comment les configurer et lesquelles les acheteurs préfèrent.",
    },
  },
  "migrar-tienda-online-sin-perder-datos": {
    en: {
      title: "Migrate Your Online Store Without Losing Data",
      excerpt: "Complete checklist and step-by-step process for migrating your ecommerce store without losing products, customers, orders or SEO rankings.",
    },
    fr: {
      title: "Comment migrer votre boutique en ligne sans perdre produits, clients ni SEO",
      excerpt: "Checklist complète et processus étape par étape pour migrer votre boutique e-commerce sans perdre produits, clients, commandes ni classements SEO.",
    },
  },
  "conectar-tpv-tienda-online": {
    en: {
      title: "Connect Your POS to Your Online Store",
      excerpt: "Synchronise stock, sales and customers between your physical POS and your online store. WooCommerce and other solutions.",
    },
    fr: {
      title: "Comment connecter votre TPV physique à votre boutique en ligne",
      excerpt: "Synchronisez le stock, les ventes et les clients entre votre TPV physique et votre boutique en ligne. WooCommerce et autres solutions.",
    },
  },
  "importar-productos-woocommerce": {
    en: {
      title: "How to Import Products to WooCommerce Easily",
      excerpt: "Import products to WooCommerce from CSV, Excel, Shopify or PrestaShop. Step-by-step guide to avoid errors.",
    },
    fr: {
      title: "Comment importer des produits dans WooCommerce facilement",
      excerpt: "Importez des produits dans WooCommerce depuis CSV, Excel, Shopify ou PrestaShop. Guide étape par étape pour éviter les erreurs.",
    },
  },
  "configurar-envios-woocommerce": {
    en: {
      title: "WooCommerce Shipping: How to Configure It",
      excerpt: "How to configure shipping zones, rates and carriers in WooCommerce. Free shipping, flat rate and carrier integration step by step.",
    },
    fr: {
      title: "Comment configurer les expéditions dans WooCommerce — Guide complet",
      excerpt: "Configurer les expéditions dans WooCommerce : zones, tarifs fixes ou calculés, livraison gratuite dès un montant, transporteurs DHL, DPD et UPS, et retours.",
    },
  },
  "email-marketing-pymes": {
    en: {
      title: "Email Marketing for SMEs: First Steps",
      excerpt: "Email marketing guide for SMEs. How to get started, which tools to use, how to build your list and design campaigns that convert.",
    },
    fr: {
      title: "Email marketing pour les PME : premiers pas",
      excerpt: "Email marketing pour PME : bâtir votre liste de zéro, choisir l'outil, les emails à envoyer, des objets qui donnent envie d'ouvrir et les métriques à suivre.",
    },
  },
  "whatsapp-business-para-empresas": {
    en: {
      title: "WhatsApp Business for Companies: 2026 Guide",
      excerpt: "How to use WhatsApp Business to attract and retain clients. Setup, automations, catalogue and strategy for businesses.",
    },
    fr: {
      title: "WhatsApp Business pour entreprises en 2026",
      excerpt: "WhatsApp Business pour entreprises : configurer profil, catalogue et réponses automatiques, attirer des clients et savoir quand passer à l'API.",
    },
  },
  "como-crear-landing-page-que-convierte": {
    en: {
      title: "Landing Page That Converts: How to Create One",
      excerpt: "Learn how to create landing pages that turn visitors into leads and customers. Structure, copy, CTAs and mistakes to avoid.",
    },
    fr: {
      title: "Créer une landing page qui convertit",
      excerpt: "Apprenez à créer des landing pages qui transforment les visites en leads et clients. Structure, copywriting, CTA et erreurs à éviter.",
    },
  },
  "linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads": {
    en: {
      title: "LinkedIn for SMEs: Generating Leads in 2026",
      excerpt: "LinkedIn for SMEs in 2026: the new algorithm, formats that work, employee content and social selling to generate leads without spending on advertising.",
    },
    fr: {
      title: "LinkedIn pour PME : générer des leads en 2026",
      excerpt: "LinkedIn pour PME en 2026 : nouvel algorithme, formats qui marchent, contenu des employés et social selling pour générer des leads sans payer de publicité.",
    },
  },
  "redes-sociales-para-empresas-2026-que-funciona-de-verdad-segun-los-datos": {
    en: {
      title: "Social Media for Businesses 2026: What Works",
      excerpt: "Social media for businesses in 2026: what the Cyberclick and Metricool study shows about TikTok, Instagram and LinkedIn, and how to choose your main network.",
    },
    fr: {
      title: "Réseaux sociaux pour entreprises en 2026",
      excerpt: "Réseaux sociaux pour entreprises en 2026 : ce que l'étude Cyberclick et Metricool montre sur TikTok, Instagram et LinkedIn, et quel réseau prioriser.",
    },
  },
  "cuota-autonomos-2026-todo-lo-que-tienes-que-saber": {
    en: {
      title: "Freelancer Social Security Contributions in Spain 2026: Full Guide",
      excerpt: "Freelancer social security in Spain 2026: the full bracket table, the MEI rising to 0.9%, the €80 flat rate and how to change your base up to 6 times a year.",
    },
    fr: {
      title: "Cotisations Sociales des Indépendants en Espagne 2026 : Guide Complet",
      excerpt: "Cotisations des indépendants en Espagne 2026 : tableau des tranches, MEI porté à 0,9 %, forfait à 80 € et changement de base jusqu'à 6 fois par an.",
    },
  },
  "marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia": {
    en: {
      title: "Digital Marketing for Freelancers in 2026",
      excerpt: "Digital marketing for freelancers in 2026: the order that works, from Google Business Profile and local SEO to LinkedIn and content, to win clients online.",
    },
    fr: {
      title: "Marketing digital pour indépendants en 2026",
      excerpt: "Marketing digital pour indépendants en 2026 : par où commencer, de la fiche Google Business Profile au SEO local, puis LinkedIn et le contenu.",
    },
  },
  "cuanto-cuesta-agencia-marketing-digital-espana-2026": {
    en: {
      title: "Digital Marketing Agency Cost in Spain 2026",
      excerpt: "Digital marketing agency costs in Spain in 2026: real prices for SEO, Google Ads and social media, what each range includes and red flags in a quote.",
    },
    fr: {
      title: "Coût d'une agence marketing en Espagne 2026",
      excerpt: "Coût d'une agence de marketing digital en Espagne en 2026 : prix réels du SEO, de Google Ads et des réseaux sociaux, ce que couvre chaque tarif et les pièges.",
    },
  },
  "seo-para-clinicas-centros-salud-captar-pacientes-google": {
    en: {
      title: "SEO for Clinics: Attract Patients on Google",
      excerpt: "SEO for clinics and healthcare centres: how patients search, why Google Business Profile matters most, the searches that bring bookings and common mistakes.",
    },
    fr: {
      title: "SEO pour cliniques : attirer des patients",
      excerpt: "SEO pour cliniques : comment cherchent les patients, le rôle de la fiche Google Business Profile, les recherches qui amènent des rendez-vous et les erreurs.",
    },
  },
  "como-medir-roi-marketing-digital": {
    en: {
      title: "How to Measure Digital Marketing ROI",
      excerpt: "Learn how to calculate and measure the ROI of your digital marketing investments. Google Analytics 4, attribution, key metrics and mistakes to avoid.",
    },
    fr: {
      title: "Comment mesurer le ROI du marketing digital",
      excerpt: "Apprenez à calculer et mesurer le ROI de vos investissements en marketing digital. Google Analytics 4, attribution, métriques clés et erreurs à éviter.",
    },
  },
  "google-merchant-center-ecommerce-guia": {
    en: {
      title: "Google Merchant Center for Ecommerce",
      excerpt: "Complete guide to setting up Google Merchant Center for your online store. Product feed, common errors and link with Google Ads.",
    },
    fr: {
      title: "Google Merchant Center pour l'e-commerce",
      excerpt: "Guide complet pour configurer Google Merchant Center pour votre boutique en ligne. Flux de produits, erreurs courantes et lien avec Google Ads.",
    },
  },
  "como-darse-de-alta-autonomo": {
    en: {
      title: "How to Register as a Freelancer in Spain",
      excerpt: "Complete guide to registering as a self-employed freelancer (autónomo) in Spain. Steps, costs, social security and tax obligations.",
    },
    fr: {
      title: "S'inscrire comme indépendant en Espagne",
      excerpt: "Guide complet pour s'inscrire comme travailleur indépendant (autónomo) en Espagne. Étapes, coûts, sécurité sociale et obligations fiscales.",
    },
  },
  "como-digitalizar-tu-negocio": {
    en: {
      title: "How to Digitalise Your Business: Guide",
      excerpt: "Practical guide to digitalise your business step by step. Tools, strategy and priorities to take your business online without complications.",
    },
    fr: {
      title: "Comment digitaliser votre entreprise",
      excerpt: "Guide pratique pour digitaliser votre entreprise étape par étape. Outils, stratégie et priorités pour mettre votre entreprise en ligne sans complications.",
    },
  },
  "factura-electronica-obligatoria-autonomos-pymes": {
    en: {
      title: "Electronic Invoice Obligations in Spain",
      excerpt: "Everything you need to know about electronic invoicing obligations in Spain for autónomos and SMEs. When, who, and how to comply.",
    },
    fr: {
      title: "Facture électronique : obligations en Espagne",
      excerpt: "Tout ce que vous devez savoir sur les obligations de facturation électronique en Espagne pour les indépendants et PME. Quand, qui, et comment se conformer.",
    },
  },
  "como-puede-un-autonomo-conseguir-clientes-por-internet": {
    en: {
      title: "How a Freelancer Can Get Clients Online",
      excerpt: "Strategies for freelancers to attract clients online. SEO, LinkedIn, referrals, portfolio and positioning to grow your client base.",
    },
    fr: {
      title: "Obtenir des clients en ligne en indépendant",
      excerpt: "Stratégies pour que les indépendants attirent des clients en ligne. SEO, LinkedIn, références, portfolio et positionnement pour développer votre clientèle.",
    },
  },
  "seo-para-servicios-urgentes-24h": {
    en: {
      title: "SEO for Urgent Services: Appear When Needed",
      excerpt: "SEO strategy for emergency and urgent service businesses. How to appear at the top of Google when someone needs you urgently.",
    },
    fr: {
      title: "SEO pour services urgents : être trouvé vite",
      excerpt: "Stratégie SEO pour les entreprises de services d'urgence. Comment apparaître en tête de Google quand quelqu'un a besoin de vous d'urgence.",
    },
  },
  "como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google": {
    en: {
      title: "Website for Painters: Get Customers on Google",
      excerpt: "How to create a professional website for painters that attracts customers through Google. SEO, Google Business Profile and local strategy.",
    },
    fr: {
      title: "Site web pour peintres : attirer des clients",
      excerpt: "Comment créer un site web professionnel pour peintres qui attire des clients via Google. SEO, Google Business Profile et stratégie locale.",
    },
  },
  "todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing": {
    en: {
      title: "SWOT Analysis in Digital Marketing",
      excerpt: "How to use SWOT analysis in digital marketing. Practical guide with examples to identify your strengths, weaknesses, opportunities and threats.",
    },
    fr: {
      title: "Analyse SWOT en marketing digital",
      excerpt: "Comment utiliser l'analyse SWOT dans le marketing digital. Guide pratique avec exemples pour identifier vos forces, faiblesses, opportunités et menaces.",
    },
  },
  "descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales": {
    en: {
      title: "Canvas Framework for Social Media Management",
      excerpt: "How to apply the Canvas business model framework to your social media strategy. Practical guide with examples.",
    },
    fr: {
      title: "Canvas pour la gestion des réseaux sociaux",
      excerpt: "Comment appliquer le modèle Canvas à votre stratégie de réseaux sociaux. Guide pratique avec exemples.",
    },
  },
  "descubre-el-analisis-pestel-en-el-marketing-digital": {
    en: {
      title: "PESTEL Analysis in Digital Marketing",
      excerpt: "What PESTEL analysis is, how to apply it to your digital marketing strategy and what insights it provides for your business.",
    },
    fr: {
      title: "Analyse PESTEL en marketing digital",
      excerpt: "Qu'est-ce que l'analyse PESTEL, comment l'appliquer à votre stratégie de marketing digital et quels enseignements elle apporte pour votre entreprise.",
    },
  },
  "como-elegir-el-mejor-hosting-para-tu-web": {
    en: {
      title: "How to Choose the Best Website Hosting",
      excerpt: "Guide to choosing the best web hosting for your website. Shared, VPS, managed WordPress and cloud hosting compared.",
    },
    fr: {
      title: "Comment choisir le meilleur hébergement web",
      excerpt: "Guide pour choisir le meilleur hébergement web pour votre site. Hébergement partagé, VPS, WordPress géré et cloud comparés.",
    },
  },
  "digitalizacion-empresas-castilla-la-mancha": {
    en: {
      title: "Business Digitalisation in Castilla-La Mancha",
      excerpt: "How businesses in Castilla-La Mancha can digitalise in 2025. Available aids, essential tools and how to choose a digitalisation partner in the region.",
    },
    fr: {
      title: "Digitalisation en Castille-La Manche",
      excerpt: "Digitaliser votre entreprise en Castille-La Manche : par où commencer, les outils essentiels d'une PME, les aides du Kit Digital et le choix d'un partenaire.",
    },
  },
  "instagram-para-empresas-que-poner-en-la-biografia-de-instagram": {
    en: {
      title: "Instagram Bio for Businesses: What to Include",
      excerpt: "How to optimise your Instagram business profile. What to write in your bio, how to attract followers and convert them into customers.",
    },
    fr: {
      title: "Instagram entreprise : que mettre dans la bio",
      excerpt: "Comment optimiser votre profil Instagram d'entreprise. Quoi écrire dans votre bio, comment attirer des abonnés et les convertir en clients.",
    },
  },
  // Artículos de tendencia (23-oct-2026): mismos textos que el H1 y la description de lib/articulos-tendencia/
  "modo-ia-google-que-es-como-aparecer": {
    en: {
      title: "Google AI Mode: what it is and how your business can appear in its answers",
      excerpt: "What Google AI Mode is, what changed in October 2026 and what your business can do to appear in its answers and measure whether it brings you customers.",
    },
    fr: {
      title: "Mode IA de Google : de quoi s'agit-il et comment votre entreprise peut apparaître dans ses réponses",
      excerpt: "Le Mode IA de Google : ce qui a changé en octobre 2026 et ce que votre entreprise peut faire pour apparaître dans ses réponses et en mesurer l'impact.",
    },
  },
  "black-friday-tienda-online-que-preparar": {
    en: {
      title: "Black Friday 2026 for online stores in Spain: what to prepare in the weeks left",
      excerpt: "Black Friday 2026 is on 27 November. What an online store selling in Spain should prepare: website, Merchant Center, legal previous price, Google profile.",
    },
    fr: {
      title: "Black Friday 2026 pour les boutiques en ligne en Espagne : que préparer dans les semaines qui restent",
      excerpt: "Black Friday 2026 : le 27 novembre. Que préparer pour une boutique qui vend en Espagne : site, Merchant Center, prix antérieur légal et fiche Google.",
    },
  },
  "medir-trafico-ia-google-analytics-search-console": {
    en: {
      title: "How to measure the traffic you get from AI with Google Analytics 4 and Search Console",
      excerpt: "How to measure visits from ChatGPT, Gemini, Perplexity and Google AI Mode with Google Analytics 4 and Search Console, step by step.",
    },
    fr: {
      title: "Comment mesurer le trafic issu de l'IA avec Google Analytics 4 et Search Console",
      excerpt: "Comment mesurer les visites issues de ChatGPT, Gemini, Perplexity et du Mode IA de Google avec Google Analytics 4 et Search Console, étape par étape.",
    },
  },
};

/** Traducciones de categorías de blog para EN y FR */
export const CATEGORY_I18N: Record<string, { en: string; fr: string }> = {
  "SEO": { en: "SEO", fr: "SEO" },
  "GEO": { en: "GEO", fr: "GEO" },
  "Ecommerce": { en: "Ecommerce", fr: "E-commerce" },
  "Marketing Digital": { en: "Digital Marketing", fr: "Marketing Digital" },
  "IA y Automatización": { en: "AI & Automation", fr: "IA & Automatisation" },
  "Diseño Web": { en: "Web Design", fr: "Conception Web" },
  "Autónomos": { en: "Freelancers", fr: "Indépendants" },
  "Social Media": { en: "Social Media", fr: "Réseaux Sociaux" },
  "Captación": { en: "Lead Generation", fr: "Captation" },
  "Estrategia": { en: "Strategy", fr: "Stratégie" },
  "Automatización": { en: "Automation", fr: "Automatisation" },
  "Emprendedores": { en: "Entrepreneurs", fr: "Entrepreneurs" },
  "IA": { en: "AI", fr: "IA" },
  "Estrategia Digital": { en: "Digital Strategy", fr: "Stratégie Digitale" },
  "Shopware": { en: "Shopware", fr: "Shopware" },
  "SEO Local": { en: "Local SEO", fr: "SEO Local" },
  "Pymes": { en: "SMEs", fr: "PME" },
  "Marketing de Contenidos": { en: "Content Marketing", fr: "Marketing de Contenu" },
  "SEM": { en: "SEM", fr: "SEA" },
};

/**
 * Devuelve la traducción de un post para el idioma dado.
 * Fallback: los valores ES originales del post.
 */
export function getPostI18n(
  esSlug: string,
  lang: "en" | "fr",
  fallback: { title: string; excerpt: string }
): PostTranslation {
  return BLOG_I18N[esSlug]?.[lang] ?? fallback;
}

/**
 * Devuelve el nombre de la categoría traducido.
 * Fallback: la categoría original (ES).
 */
export function getCategoryI18n(category: string, lang: "en" | "fr"): string {
  return CATEGORY_I18N[category]?.[lang] ?? category;
}
