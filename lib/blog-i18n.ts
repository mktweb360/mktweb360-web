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
      title: "How to Do a Basic SEO Audit of Your Website in 2025",
      excerpt: "Step-by-step guide to carrying out a basic SEO audit. Which tools to use, what errors to look for and how to prioritise improvements to increase organic traffic.",
    },
    fr: {
      title: "Comment Faire un Audit SEO de Base de Votre Site en 2025",
      excerpt: "Guide étape par étape pour réaliser un audit SEO de base. Quels outils utiliser, quelles erreurs chercher et comment prioriser les améliorations pour augmenter le trafic organique.",
    },
  },
  "ia-aplicada-a-marketing-valor-real-o-humo": {
    en: {
      title: "AI Applied to Marketing: Where It Delivers Real Value",
      excerpt: "Discover where AI applied to marketing delivers real value, which uses to prioritise, and where there is still too much hype.",
    },
    fr: {
      title: "IA appliquée au marketing : où elle apporte une vraie valeur",
      excerpt: "Découvrez où l'IA appliquée au marketing apporte une vraie valeur, quels usages prioriser et où il y a encore trop de bruit.",
    },
  },
  "que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026": {
    en: {
      title: "What Is a Business Chatbot and Why You Need One in 2026",
      excerpt: "A business chatbot is no longer technology reserved for large corporations. In 2026, SMEs that automate their customer service with AI reduce costs, capture more leads and sell more.",
    },
    fr: {
      title: "Qu'est-ce qu'un chatbot pour entreprises et pourquoi en avez-vous besoin en 2026",
      excerpt: "Un chatbot d'entreprise n'est plus réservé aux grandes structures. En 2026, les PME qui automatisent leur service client avec l'IA réduisent leurs coûts, captent plus de leads et vendent plus.",
    },
  },
  "agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio": {
    en: {
      title: "AI Agents for Marketing: What They Are and How SMEs Can Use Them",
      excerpt: "AI agents are no longer science fiction. In 2026, accessible tools let any SME automate marketing tasks with agents that work autonomously. Practical guide.",
    },
    fr: {
      title: "Agents IA pour le marketing : ce qu'ils sont et comment les PME peuvent les utiliser",
      excerpt: "Les agents IA ne sont plus de la science-fiction. En 2026, des outils accessibles permettent à n'importe quelle PME d'automatiser des tâches marketing avec des agents qui travaillent de façon autonome.",
    },
  },
  "herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan": {
    en: {
      title: "AI Tools for Digital Marketing in 2026: The Ones That Actually Work",
      excerpt: "Not every AI marketing tool is worth the time it takes to learn. An honest analysis of the ones that deliver real value for SMEs and agencies in 2026.",
    },
    fr: {
      title: "Outils IA pour le Marketing Digital en 2026 : Ceux qui Fonctionnent Vraiment",
      excerpt: "Tous les outils d'IA marketing ne méritent pas le temps qu'il faut pour les apprendre. Analyse honnête de ceux qui apportent une valeur réelle aux PME et agences en 2026.",
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
  "seo-o-google-ads-que-conviene-mas": {
    en: {
      title: "SEO vs Google Ads: Which Is Better for Your Business?",
      excerpt: "Should you invest in SEO or Google Ads? Find out which channel suits your business, budget and urgency best.",
    },
    fr: {
      title: "SEO vs Google Ads : lequel choisir pour votre entreprise ?",
      excerpt: "SEO ou Google Ads ? Découvrez quel canal convient le mieux à votre entreprise selon votre budget et vos objectifs.",
    },
  },
  "que-revisar-antes-de-invertir-mas-en-marketing-digital": {
    en: {
      title: "What to Review Before Investing More in Digital Marketing",
      excerpt: "Before investing more in digital marketing, review these 7 key areas to avoid amplifying mistakes and make better investment decisions.",
    },
    fr: {
      title: "Ce qu'il faut vérifier avant d'investir davantage en marketing digital",
      excerpt: "Avant d'investir davantage en marketing digital, vérifiez ces 7 domaines clés pour éviter d'amplifier les erreurs et prendre de meilleures décisions d'investissement.",
    },
  },
  "senales-web-necesita-rediseno": {
    en: {
      title: "Signs Your Website Needs an Urgent Redesign",
      excerpt: "The clearest signs that your website is losing you sales and when it makes sense to redesign rather than keep optimising.",
    },
    fr: {
      title: "Signes que votre site web a besoin d'une refonte urgente",
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
      title: "SEO for Ecommerce — Errors That Slow Down Your Sales",
      excerpt: "The most common SEO errors in ecommerce and what to review to improve visibility, qualified traffic and sales.",
    },
    fr: {
      title: "SEO pour E-commerce — Erreurs qui Freinent vos Ventes",
      excerpt: "Les erreurs SEO les plus courantes en e-commerce et ce qu'il faut vérifier pour améliorer la visibilité, le trafic qualifié et les ventes.",
    },
  },
  "que-puede-automatizar-una-pyme-en-marketing-y-ventas": {
    en: {
      title: "What Can an SME Automate in Marketing and Sales",
      excerpt: "What marketing and sales processes can an SME automate to save time, improve follow-up and capture better leads.",
    },
    fr: {
      title: "Ce qu'une PME peut automatiser en marketing et ventes",
      excerpt: "Quels processus de marketing et de vente une PME peut automatiser pour gagner du temps, améliorer le suivi et mieux capturer des leads.",
    },
  },
  "seo-local-empresas-servicios": {
    en: {
      title: "Local SEO for Service Businesses — How to Get Customers in Your Area",
      excerpt: "What a service business needs to improve its local presence and attract more customers from Google in its area.",
    },
    fr: {
      title: "SEO local pour les entreprises de services — Comment attirer des clients dans votre zone",
      excerpt: "Ce dont une entreprise de services a besoin pour améliorer sa présence locale et attirer plus de clients depuis Google dans sa zone.",
    },
  },
  "actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web": {
    en: {
      title: "Google Algorithm Updates 2026: What Has Changed and How It Affects Your Website",
      excerpt: "Google has rolled out several algorithm updates in 2026 focused on user experience, AI content and E-E-A-T signals. We analyse what has changed and what you need to do.",
    },
    fr: {
      title: "Mises à jour de l'algorithme Google en 2026 : ce qui a changé et comment ça affecte votre site",
      excerpt: "Google a lancé plusieurs mises à jour d'algorithme en 2026 axées sur l'expérience utilisateur, le contenu IA et les signaux E-E-A-T. Nous analysons ce qui a changé et ce que vous devez faire.",
    },
  },
  "seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini": {
    en: {
      title: "SEO in the AI Era: How to Rank When Google Uses Gemini to Answer",
      excerpt: "Google is no longer just a search engine. It is a generative response engine powered by Gemini. How to adapt your SEO strategy to keep capturing traffic when AI answers first.",
    },
    fr: {
      title: "SEO à l'ère de l'IA : comment se positionner quand Google utilise Gemini pour répondre",
      excerpt: "Google n'est plus seulement un moteur de recherche. C'est un moteur de réponses génératives propulsé par Gemini. Comment adapter votre stratégie SEO pour continuer à capter du trafic quand l'IA répond en premier.",
    },
  },
  "geo-para-pymes-como-aparecer-en-respuestas-ia-sin-ser-una-gran-marca": {
    en: {
      title: "GEO for SMEs: How to Appear in AI Responses Without Being a Big Brand",
      excerpt: "SMEs have a real advantage in GEO: niche specificity. A practical guide for any small business to appear in ChatGPT, Gemini and Perplexity responses.",
    },
    fr: {
      title: "GEO pour les PME : comment apparaître dans les réponses IA sans être une grande marque",
      excerpt: "Les PME ont un véritable avantage en GEO : la spécificité de niche. Guide pratique pour que n'importe quelle petite entreprise apparaisse dans les réponses de ChatGPT, Gemini et Perplexity.",
    },
  },
  "como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026": {
    en: {
      title: "How to Optimise Your Content for AI Citations: GEO Guide 2026",
      excerpt: "Technical and practical GEO guide for SMEs. Learn how to structure your content, implement advanced schema markup, configure llms.txt and build semantic authority to appear in ChatGPT, Gemini and Perplexity.",
    },
    fr: {
      title: "Comment optimiser votre contenu pour être cité par l'IA : guide GEO 2026",
      excerpt: "Guide technique et pratique de GEO pour les PME. Apprenez à structurer votre contenu, implémenter un schema markup avancé, configurer llms.txt et construire l'autorité sémantique pour apparaître dans ChatGPT, Gemini et Perplexity.",
    },
  },
  "por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026": {
    en: {
      title: "Why Appearing in ChatGPT, Perplexity and Gemini Matters More Than SEO in 2026",
      excerpt: "Millions of people no longer search on Google. They ask ChatGPT, Perplexity or Gemini. If your business doesn't appear in their responses, you're losing clients without knowing it. GEO guide 2026.",
    },
    fr: {
      title: "Pourquoi Apparaître dans ChatGPT, Perplexity et Gemini Compte Plus que le SEO en 2026",
      excerpt: "Des millions de personnes ne cherchent plus sur Google. Ils demandent à ChatGPT, Perplexity ou Gemini. Si votre entreprise n'apparaît pas dans leurs réponses, vous perdez des clients sans le savoir. Guide GEO 2026.",
    },
  },
  "geo-posicionamiento-ia-chatgpt-empresas-espana": {
    en: {
      title: "What Is GEO and How to Appear in ChatGPT for Your Business",
      excerpt: "GEO positions your business in ChatGPT and Perplexity. If AI does not mention you when someone asks about your sector, you are losing customers. Practical guide for businesses.",
    },
    fr: {
      title: "Qu'est-ce que le GEO et comment apparaître dans ChatGPT pour votre entreprise",
      excerpt: "Le GEO positionne votre entreprise dans ChatGPT et Perplexity. Si l'IA ne vous mentionne pas quand quelqu'un pose une question sur votre secteur, vous perdez des clients. Guide pratique pour les entreprises.",
    },
  },
  "geo-vs-seo-diferencias": {
    en: {
      title: "GEO vs SEO: Key Differences and How to Combine Both Strategies",
      excerpt: "What sets GEO (Generative Engine Optimization) apart from traditional SEO, why both matter, and how to integrate both strategies for maximum visibility in search engines and AI.",
    },
    fr: {
      title: "GEO vs SEO : Différences Clés et Comment Combiner les Deux Stratégies",
      excerpt: "Ce qui différencie le GEO (Generative Engine Optimization) du SEO traditionnel, pourquoi les deux comptent et comment intégrer les deux stratégies pour une visibilité maximale.",
    },
  },
  "que-es-geo-generative-engine-optimization": {
    en: {
      title: "What Is GEO (Generative Engine Optimization)?",
      excerpt: "GEO: what it is, how it works and why optimising your presence to appear in ChatGPT, Perplexity and Gemini is the new frontier of SEO.",
    },
    fr: {
      title: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
      excerpt: "GEO : qu'est-ce que c'est, comment ça fonctionne et pourquoi optimiser votre présence pour apparaître dans ChatGPT, Perplexity et Gemini est la nouvelle frontière du SEO.",
    },
  },
  "como-la-ia-esta-cambiando-el-marketing-digital-para-siempre": {
    en: {
      title: "How AI Is Changing Digital Marketing Forever",
      excerpt: "AI is no longer a trend in marketing: it is the infrastructure. More than 70% of digital marketing interactions will be influenced by AI in 2026. What changes, what does not, and what you need to do.",
    },
    fr: {
      title: "Comment l'IA transforme le marketing digital pour toujours",
      excerpt: "L'IA n'est plus une tendance en marketing : c'est l'infrastructure. Plus de 70 % des interactions de marketing digital seront influencées par l'IA en 2026. Ce qui change, ce qui ne change pas et ce que vous devez faire.",
    },
  },
  "atencion-cliente-24-7-pymes-sin-contratar-personal": {
    en: {
      title: "24/7 Customer Service for SMEs: How to Achieve It Without Hiring More Staff",
      excerpt: "Large companies have offered 24/7 customer service for years. In 2026, any SME can do the same with an AI chatbot, without expanding headcount.",
    },
    fr: {
      title: "Service client 24h/24 pour PME : comment y parvenir sans recruter",
      excerpt: "Les grandes entreprises offrent un service client 24h/24 depuis des années. En 2026, toute PME peut faire de même avec un chatbot IA, sans augmenter ses effectifs.",
    },
  },
  "chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana": {
    en: {
      title: "AI Chatbot and Legal Compliance: GDPR, EU AI Act and What Changes in August 2026",
      excerpt: "In August 2026 the main AI Act obligations for chatbots come into force. What you need to do to comply with GDPR and the EU AI Act, and why compliance is a competitive advantage.",
    },
    fr: {
      title: "Chatbot IA et conformité légale : RGPD, AI Act européen et ce qui change en août 2026",
      excerpt: "En août 2026 entrent en vigueur les principales obligations de l'AI Act pour les chatbots. Ce que vous devez faire pour respecter le RGPD et l'AI Act européen, et pourquoi la conformité est un avantage concurrentiel.",
    },
  },
  "cuanto-cuesta-un-chatbot-para-empresas-espana-2026": {
    en: {
      title: "How Much Does a Business Chatbot Cost in 2026: A Guide to Real Prices",
      excerpt: "Business chatbot prices range from free to thousands per month. A guide to real prices in 2026: what market leaders charge, what each tier includes and when the investment pays off.",
    },
    fr: {
      title: "Combien coûte un chatbot pour entreprise en 2026 : guide des prix réels",
      excerpt: "Les prix des chatbots pour entreprises vont de gratuit à des milliers par mois. Guide des prix réels en 2026 : ce que facturent les leaders du marché, ce qu'inclut chaque niveau et quand l'investissement est rentable.",
    },
  },
  "chatbot-para-tienda-online-guia-completa-2026": {
    en: {
      title: "Chatbot for Online Stores: The Complete Guide to Selling More and Serving Better in 2026",
      excerpt: "A chatbot for your online store can handle enquiries 24/7, recover abandoned carts, answer product questions and manage order status.",
    },
    fr: {
      title: "Chatbot pour boutique en ligne : le guide complet pour vendre plus et mieux servir en 2026",
      excerpt: "Un chatbot pour votre boutique en ligne peut traiter les demandes 24h/24, récupérer les paniers abandonnés, répondre aux questions produits et gérer le statut des commandes.",
    },
  },
  "chatbot-vs-live-chat-diferencias-cual-elegir-empresa": {
    en: {
      title: "Chatbot vs Live Chat: Real Differences and Which to Choose for Your Business",
      excerpt: "Chatbot or live chat? They are not mutually exclusive. A guide to the real differences, when each one is right, and why the correct combination beats choosing just one.",
    },
    fr: {
      title: "Chatbot vs live chat : vraies différences et lequel choisir pour votre entreprise",
      excerpt: "Chatbot ou live chat ? Ils ne s'excluent pas mutuellement. Guide des vraies différences, quand chacun convient, et pourquoi la bonne combinaison est meilleure que d'en choisir un seul.",
    },
  },
  "chatbot-captacion-cualificacion-leads-guia-practica": {
    en: {
      title: "How to Use a Chatbot to Capture and Qualify Leads: A Practical Guide",
      excerpt: "A well-configured chatbot can capture leads 24/7, qualify them with strategic questions and pass them to the CRM with full context.",
    },
    fr: {
      title: "Comment utiliser un chatbot pour capter et qualifier des leads : guide pratique",
      excerpt: "Un chatbot bien configuré peut capter des leads 24h/24, les qualifier avec des questions stratégiques et les transmettre au CRM avec le contexte complet.",
    },
  },
  "chatbot-para-clinicas-centros-salud-automatizar-citas": {
    en: {
      title: "Chatbot for Clinics and Healthcare Centres: Appointments, FAQs and Healthcare Compliance",
      excerpt: "Clinics and healthcare centres receive hundreds of repetitive enquiries every day. A well-implemented chatbot can automate appointment management, answer FAQs and qualify patients.",
    },
    fr: {
      title: "Chatbot pour cliniques et centres de santé : rendez-vous, questions fréquentes et conformité sanitaire",
      excerpt: "Les cliniques et centres de santé reçoivent des centaines de demandes répétitives chaque jour. Un chatbot bien implémenté peut automatiser la gestion des rendez-vous, répondre aux questions fréquentes et qualifier les patients.",
    },
  },
  "chatbot-wordpress-como-instalarlo-que-evitar": {
    en: {
      title: "Chatbot for WordPress: How to Install It, What to Avoid and What to Expect",
      excerpt: "WordPress has dozens of chatbot plugins. Most are not worth the time it takes to test them. An honest guide on what genuinely works in 2026.",
    },
    fr: {
      title: "Chatbot pour WordPress : comment l'installer, ce qu'il faut éviter et ce qu'il faut attendre",
      excerpt: "WordPress dispose de dizaines de plugins de chatbot. La plupart ne valent pas le temps qu'il faut pour les tester. Un guide honnête sur ce qui fonctionne vraiment en 2026.",
    },
  },
  "como-elegir-chatbot-para-empresa-checklist-2026": {
    en: {
      title: "How to Choose the Right Chatbot for Your Business: A Complete Checklist for 2026",
      excerpt: "Before choosing a chatbot for your business, there are 10 questions you should answer. This checklist helps you avoid the most common mistakes.",
    },
    fr: {
      title: "Comment choisir le bon chatbot pour votre entreprise : checklist complète pour 2026",
      excerpt: "Avant de choisir un chatbot pour votre entreprise, il y a 10 questions auxquelles vous devez répondre. Cette checklist vous aide à éviter les erreurs les plus courantes.",
    },
  },
  "cro-shopware-optimizar-conversion-tienda": {
    en: {
      title: "Shopware CRO: How to Optimise Your Store's Conversion Rate",
      excerpt: "Boost your Shopware store's conversion rate: key GA4 events, the 5 real causes of cart abandonment, and product page and checkout optimisation.",
    },
    fr: {
      title: "CRO Shopware : comment optimiser le taux de conversion de votre boutique",
      excerpt: "Augmentez le taux de conversion de votre boutique Shopware : événements GA4 essentiels, les 5 vraies causes d'abandon de panier et optimisation des fiches produit et du checkout.",
    },
  },
  "geo-shopware-agentic-commerce-chatgpt": {
    en: {
      title: "GEO for Shopware: Sell via ChatGPT with Agentic Commerce",
      excerpt: "Shopware 6.7.9 brings native Agentic Commerce. Prepare your store with GEO so ChatGPT and Perplexity recommend and sell your products directly from the conversation.",
    },
    fr: {
      title: "GEO pour Shopware : vendre via ChatGPT avec l'Agentic Commerce",
      excerpt: "Shopware 6.7.9 intègre l'Agentic Commerce natif. Préparez votre boutique avec le GEO pour que ChatGPT et Perplexity recommandent et vendent vos produits directement depuis la conversation.",
    },
  },
  "google-ads-shopware-campanas-que-venden": {
    en: {
      title: "Google Ads for Shopware: Campaigns That Actually Sell",
      excerpt: "How to set up Google Ads for your Shopware store: conversion tracking, Merchant Center connection, Performance Max, Shopping and ROAS optimisation.",
    },
    fr: {
      title: "Google Ads pour Shopware : des campagnes qui vendent vraiment",
      excerpt: "Comment configurer Google Ads pour votre boutique Shopware : suivi des conversions, connexion au Merchant Center, Performance Max, Shopping et optimisation du ROAS.",
    },
  },
  "migrar-shopware-prestashop-woocommerce-seo": {
    en: {
      title: "Migrating to Shopware from PrestaShop or WooCommerce Without Losing SEO",
      excerpt: "How to migrate your store to Shopware without losing rankings: URL audit, 301 redirect map, launch protocol and post-migration monitoring.",
    },
    fr: {
      title: "Migrer vers Shopware depuis PrestaShop ou WooCommerce sans perdre le SEO",
      excerpt: "Comment migrer votre boutique vers Shopware sans perdre le positionnement : audit des URLs, carte de redirections 301, protocole de lancement et suivi post-migration.",
    },
  },
  "seo-shopware-posicionar-tienda-google": {
    en: {
      title: "Shopware SEO: How to Rank Your Store on Google",
      excerpt: "Technical SEO guide for Shopware 6: URLs, faceted navigation, product schema, Core Web Vitals and optimised product pages to rank your store on Google.",
    },
    fr: {
      title: "SEO Shopware : comment positionner votre boutique sur Google",
      excerpt: "Guide de SEO technique pour Shopware 6 : URLs, navigation à facettes, schéma produit, Core Web Vitals et fiches optimisées pour positionner votre boutique sur Google.",
    },
  },
  "woocommerce-vs-shopify-cual-elegir-tienda-online": {
    en: {
      title: "WooCommerce vs Shopify: Which to Choose for Your Online Store in 2026",
      excerpt: "WooCommerce is free with total control. Shopify is faster to launch but charges commissions. An honest comparison with real 3-year costs and a recommendation by business type.",
    },
    fr: {
      title: "WooCommerce vs Shopify : lequel choisir pour votre boutique en ligne en 2026",
      excerpt: "WooCommerce est gratuit avec un contrôle total. Shopify est plus rapide à lancer mais prélève des commissions. Comparaison honnête avec coûts réels sur 3 ans et recommandation par type d'activité.",
    },
  },
  "migrar-shopify-woocommerce": {
    en: {
      title: "How to Migrate from Shopify to WooCommerce Without Losing Anything",
      excerpt: "Complete guide to migrate from Shopify to WooCommerce: products, customers, orders, SEO and step-by-step process.",
    },
    fr: {
      title: "Comment migrer de Shopify vers WooCommerce sans rien perdre",
      excerpt: "Guide complet pour migrer de Shopify vers WooCommerce : produits, clients, commandes, SEO et processus étape par étape.",
    },
  },
  "gestion-resenas-negativas-google": {
    en: {
      title: "How to Manage Negative Reviews on Google Professionally",
      excerpt: "How to respond to negative Google reviews professionally. Strategy, response templates and how to turn criticism into opportunities.",
    },
    fr: {
      title: "Comment gérer les avis négatifs sur Google de manière professionnelle",
      excerpt: "Comment répondre aux avis négatifs sur Google de manière professionnelle. Stratégie, modèles de réponse et comment transformer les critiques en opportunités.",
    },
  },
  "google-my-business-empresas-guia": {
    en: {
      title: "Google My Business for Businesses — Complete Guide",
      excerpt: "Complete guide to Google My Business (now Google Business Profile). How to create, verify, optimise and manage your listing to attract local customers.",
    },
    fr: {
      title: "Google My Business pour les Entreprises — Guide Complet",
      excerpt: "Guide complet de Google My Business (maintenant Google Business Profile). Comment créer, vérifier, optimiser et gérer votre fiche pour attirer des clients locaux.",
    },
  },
  "como-gestionar-reputacion-online-empresa": {
    en: {
      title: "How to Manage Your Company's Online Reputation: Practical Guide 2026",
      excerpt: "Online reputation is built or destroyed in public. Learn how to manage it strategically: reviews, mentions, responses and crisis prevention.",
    },
    fr: {
      title: "Comment gérer la réputation en ligne de votre entreprise : guide pratique 2026",
      excerpt: "La réputation en ligne se construit ou se détruit en public. Découvrez comment la gérer avec méthode : avis, mentions, réponses et prévention des crises.",
    },
  },
  "como-crear-propuesta-de-valor": {
    en: {
      title: "How to Create a Value Proposition That Differentiates You",
      excerpt: "Step-by-step guide to create a value proposition that clearly explains why customers should choose you over the competition.",
    },
    fr: {
      title: "Comment créer une proposition de valeur qui vous différencie",
      excerpt: "Guide étape par étape pour créer une proposition de valeur qui explique clairement pourquoi les clients devraient vous choisir plutôt que la concurrence.",
    },
  },
  "errores-digitales-negocio-nuevo": {
    en: {
      title: "Digital Mistakes New Businesses Make and How to Avoid Them",
      excerpt: "The most common digital mistakes new businesses make and how to avoid them from day one to save time and money.",
    },
    fr: {
      title: "Erreurs Digitales des Nouvelles Entreprises et Comment les Éviter",
      excerpt: "Les erreurs digitales les plus courantes des nouvelles entreprises et comment les éviter dès le premier jour pour économiser du temps et de l'argent.",
    },
  },
  "cuando-elegir-seo-vs-google-ads": {
    en: {
      title: "When to Choose SEO vs Google Ads: A Practical Decision Guide",
      excerpt: "How to decide between SEO and Google Ads based on your business, budget, urgency and time horizon. With real examples and a practical decision matrix.",
    },
    fr: {
      title: "Quand choisir le SEO plutôt que Google Ads : guide de décision pratique",
      excerpt: "Comment décider entre SEO et Google Ads selon votre entreprise, budget, urgence et horizon temporel. Avec des exemples réels et une matrice de décision pratique.",
    },
  },
  "link-building-pymes": {
    en: {
      title: "Link Building for SMEs — How to Get Quality Links Without Risk",
      excerpt: "Link building strategies that work for SMEs. How to get quality backlinks without risking a Google penalty or wasting budget on low-quality links.",
    },
    fr: {
      title: "Link Building pour PME — Comment Obtenir des Liens de Qualité Sans Risque",
      excerpt: "Stratégies de link building qui fonctionnent pour les PME. Comment obtenir des backlinks de qualité sans risquer une pénalité Google ou gaspiller le budget sur des liens de faible qualité.",
    },
  },
  "google-shopping-tiendas-online": {
    en: {
      title: "Google Shopping for Online Stores — Complete Guide 2025",
      excerpt: "How to set up Google Shopping, optimise your product feed and appear in Google product results.",
    },
    fr: {
      title: "Google Shopping pour boutiques en ligne — Guide complet 2025",
      excerpt: "Comment configurer Google Shopping, optimiser votre flux de produits et apparaître dans les résultats produits de Google.",
    },
  },
  "metodos-pago-tienda-online-espana": {
    en: {
      title: "Payment Methods for Online Stores — Which to Install and Why",
      excerpt: "Which payment gateways to use for your online store, how to configure them and which buyers prefer.",
    },
    fr: {
      title: "Méthodes de paiement pour boutiques en ligne — Lesquelles installer et pourquoi",
      excerpt: "Quelles passerelles de paiement utiliser pour votre boutique en ligne, comment les configurer et lesquelles les acheteurs préfèrent.",
    },
  },
  "migrar-tienda-online-sin-perder-datos": {
    en: {
      title: "How to Migrate Your Online Store Without Losing Products, Customers or SEO",
      excerpt: "Complete checklist and step-by-step process for migrating your ecommerce store without losing products, customers, orders or SEO rankings.",
    },
    fr: {
      title: "Comment migrer votre boutique en ligne sans perdre produits, clients ni SEO",
      excerpt: "Checklist complète et processus étape par étape pour migrer votre boutique e-commerce sans perdre produits, clients, commandes ni classements SEO.",
    },
  },
  "conectar-tpv-tienda-online": {
    en: {
      title: "How to Connect Your Physical POS to Your Online Store",
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
      title: "How to Configure Shipping in WooCommerce — Complete Guide",
      excerpt: "How to configure shipping zones, rates and carriers in WooCommerce. Free shipping, flat rate and carrier integration step by step.",
    },
    fr: {
      title: "Comment configurer les expéditions dans WooCommerce — Guide complet",
      excerpt: "Comment configurer les zones d'expédition, tarifs et transporteurs dans WooCommerce. Livraison gratuite, tarif fixe et intégration transporteurs étape par étape.",
    },
  },
  "email-marketing-pymes": {
    en: {
      title: "Email Marketing for SMEs: First Steps and Strategy Guide",
      excerpt: "Email marketing guide for SMEs. How to get started, which tools to use, how to build your list and design campaigns that convert.",
    },
    fr: {
      title: "Email Marketing pour les PME : Guide des Premiers Pas et Stratégie",
      excerpt: "Guide d'email marketing pour les PME. Comment commencer, quels outils utiliser, comment construire votre liste et concevoir des campagnes qui convertissent.",
    },
  },
  "whatsapp-business-para-empresas": {
    en: {
      title: "WhatsApp Business for Companies: Complete Setup and Strategy Guide 2026",
      excerpt: "How to use WhatsApp Business to attract and retain clients. Setup, automations, catalogue and strategy for businesses.",
    },
    fr: {
      title: "WhatsApp Business pour les Entreprises : Guide Complet de Configuration et Stratégie 2026",
      excerpt: "Comment utiliser WhatsApp Business pour attirer et fidéliser des clients. Configuration, automatisations, catalogue et stratégie pour les entreprises.",
    },
  },
  "como-crear-landing-page-que-convierte": {
    en: {
      title: "How to Create a Landing Page That Converts — Practical Guide",
      excerpt: "Learn how to create landing pages that turn visitors into leads and customers. Structure, copy, CTAs and mistakes to avoid.",
    },
    fr: {
      title: "Comment créer une landing page qui convertit — guide pratique",
      excerpt: "Apprenez à créer des landing pages qui transforment les visites en leads et clients. Structure, copywriting, CTA et erreurs à éviter.",
    },
  },
  "linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads": {
    en: {
      title: "LinkedIn for SMEs: Practical Guide to Generating Leads in 2026",
      excerpt: "LinkedIn has changed more in 2026 than in the previous five years. New algorithm, video as the dominant format, Employee Generated Content and social selling.",
    },
    fr: {
      title: "LinkedIn pour les PME : Guide Pratique pour Générer des Leads en 2026",
      excerpt: "LinkedIn a plus changé en 2026 que lors des cinq années précédentes. Nouvel algorithme, vidéo comme format dominant, Employee Generated Content et social selling.",
    },
  },
  "redes-sociales-para-empresas-2026-que-funciona-de-verdad-segun-los-datos": {
    en: {
      title: "Social Media for Businesses in 2026: What the Data Actually Says Works",
      excerpt: "The Social Media 2026 study by Cyberclick and Metricool analyses millions of posts. TikTok leads on impressions, Instagram on stability, LinkedIn on B2B.",
    },
    fr: {
      title: "Réseaux Sociaux pour Entreprises en 2026 : Ce que Disent Vraiment les Données",
      excerpt: "L'étude Social Media 2026 de Cyberclick et Metricool analyse des millions de publications. TikTok domine les impressions, Instagram la stabilité, LinkedIn le B2B.",
    },
  },
  "cuota-autonomos-2026-todo-lo-que-tienes-que-saber": {
    en: {
      title: "Freelancer Social Security Contributions in Spain 2026: Full Guide",
      excerpt: "Spain's self-employed social security contributions for 2026 remain equal to 2025 by government extension, except the MEI which rises to 0.9%. Full bracket table, the €80 flat rate and how to change your contribution base up to 6 times per year.",
    },
    fr: {
      title: "Cotisations Sociales des Indépendants en Espagne 2026 : Guide Complet",
      excerpt: "Les cotisations des indépendants en 2026 restent identiques à 2025 par prorogation du gouvernement, sauf le MEI qui monte à 0,9 %. Tableau complet des tranches, le forfait à 80 € et comment changer votre base jusqu'à 6 fois par an.",
    },
  },
  "marketing-digital-para-autonomos-en-2026-como-conseguir-clientes-sin-agencia": {
    en: {
      title: "Digital Marketing for Freelancers in 2026: How to Get Clients Without Hiring an Agency",
      excerpt: "Freelancers have more tools than ever to get online clients on their own. Practical guide: local SEO, Google Business Profile, LinkedIn and content for freelancers in 2026.",
    },
    fr: {
      title: "Marketing Digital pour Indépendants en 2026 : Comment Obtenir des Clients Sans Agence",
      excerpt: "Les indépendants ont plus d'outils que jamais pour obtenir des clients en ligne par eux-mêmes. Guide pratique : SEO local, Google Business Profile, LinkedIn et contenu pour indépendants en 2026.",
    },
  },
  "cuanto-cuesta-agencia-marketing-digital-espana-2026": {
    en: {
      title: "How Much Does a Digital Marketing Agency Cost in Spain in 2026?",
      excerpt: "Real prices for digital marketing agencies in Spain 2026: SEO, Google Ads and social media management. What each price range includes and how to choose without making mistakes.",
    },
    fr: {
      title: "Combien Coûte une Agence de Marketing Digital en Espagne en 2026 ?",
      excerpt: "Prix réels des agences de marketing digital en Espagne 2026 : SEO, Google Ads et gestion des réseaux sociaux. Ce qu'inclut chaque gamme de prix et comment ne pas se tromper dans le choix.",
    },
  },
  "seo-para-clinicas-centros-salud-captar-pacientes-google": {
    en: {
      title: "SEO for Clinics and Healthcare Centres: How to Attract Patients on Google",
      excerpt: "74% of patients search Google before calling a clinic. Specific SEO for dental clinics, physiotherapy and healthcare centres. Attract more patients from the first month.",
    },
    fr: {
      title: "SEO pour les cliniques et centres de santé : comment attirer des patients sur Google",
      excerpt: "74 % des patients cherchent sur Google avant d'appeler une clinique. SEO spécifique pour les cliniques dentaires, la kinésithérapie et les centres de santé. Attirez plus de patients dès le premier mois.",
    },
  },
  "como-medir-roi-marketing-digital": {
    en: {
      title: "How to Measure the ROI of Your Digital Marketing Campaigns",
      excerpt: "Learn how to calculate and measure the ROI of your digital marketing investments. Google Analytics 4, attribution, key metrics and mistakes to avoid.",
    },
    fr: {
      title: "Comment mesurer le ROI de vos campagnes de marketing digital",
      excerpt: "Apprenez à calculer et mesurer le ROI de vos investissements en marketing digital. Google Analytics 4, attribution, métriques clés et erreurs à éviter.",
    },
  },
  "google-merchant-center-ecommerce-guia": {
    en: {
      title: "Google Merchant Center for Ecommerce — Complete Guide",
      excerpt: "Complete guide to setting up Google Merchant Center for your online store. Product feed, common errors and link with Google Ads.",
    },
    fr: {
      title: "Google Merchant Center pour E-commerce — Guide Complet",
      excerpt: "Guide complet pour configurer Google Merchant Center pour votre boutique en ligne. Flux de produits, erreurs courantes et lien avec Google Ads.",
    },
  },
  "como-darse-de-alta-autonomo": {
    en: {
      title: "How to Register as a Self-Employed Freelancer in Spain",
      excerpt: "Complete guide to registering as a self-employed freelancer (autónomo) in Spain. Steps, costs, social security and tax obligations.",
    },
    fr: {
      title: "Comment s'inscrire comme travailleur indépendant en Espagne",
      excerpt: "Guide complet pour s'inscrire comme travailleur indépendant (autónomo) en Espagne. Étapes, coûts, sécurité sociale et obligations fiscales.",
    },
  },
  "como-digitalizar-tu-negocio": {
    en: {
      title: "How to Digitalise Your Business — Practical Guide",
      excerpt: "Practical guide to digitalise your business step by step. Tools, strategy and priorities to take your business online without complications.",
    },
    fr: {
      title: "Comment digitaliser votre entreprise — Guide pratique",
      excerpt: "Guide pratique pour digitaliser votre entreprise étape par étape. Outils, stratégie et priorités pour mettre votre entreprise en ligne sans complications.",
    },
  },
  "factura-electronica-obligatoria-autonomos-pymes": {
    en: {
      title: "Electronic Invoice — Obligations for Freelancers and SMEs in Spain",
      excerpt: "Everything you need to know about electronic invoicing obligations in Spain for autónomos and SMEs. When, who, and how to comply.",
    },
    fr: {
      title: "Facture Électronique — Obligations pour Indépendants et PME en Espagne",
      excerpt: "Tout ce que vous devez savoir sur les obligations de facturation électronique en Espagne pour les indépendants et PME. Quand, qui, et comment se conformer.",
    },
  },
  "como-puede-un-autonomo-conseguir-clientes-por-internet": {
    en: {
      title: "How a Freelancer Can Get Clients Online",
      excerpt: "Strategies for freelancers to attract clients online. SEO, LinkedIn, referrals, portfolio and positioning to grow your client base.",
    },
    fr: {
      title: "Comment un indépendant peut obtenir des clients en ligne",
      excerpt: "Stratégies pour que les indépendants attirent des clients en ligne. SEO, LinkedIn, références, portfolio et positionnement pour développer votre clientèle.",
    },
  },
  "seo-para-servicios-urgentes-24h": {
    en: {
      title: "SEO for Urgent Services — How to Appear When Someone Needs You Now",
      excerpt: "SEO strategy for emergency and urgent service businesses. How to appear at the top of Google when someone needs you urgently.",
    },
    fr: {
      title: "SEO pour Services Urgents — Comment Apparaître Quand Quelqu'un a Besoin de Vous Maintenant",
      excerpt: "Stratégie SEO pour les entreprises de services d'urgence. Comment apparaître en tête de Google quand quelqu'un a besoin de vous d'urgence.",
    },
  },
  "como-crear-una-pagina-web-para-pintores-y-conseguir-clientes-en-google": {
    en: {
      title: "How to Create a Website for Painters and Get Customers on Google",
      excerpt: "How to create a professional website for painters that attracts customers through Google. SEO, Google Business Profile and local strategy.",
    },
    fr: {
      title: "Comment créer un site web pour peintres et obtenir des clients sur Google",
      excerpt: "Comment créer un site web professionnel pour peintres qui attire des clients via Google. SEO, Google Business Profile et stratégie locale.",
    },
  },
  "todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing": {
    en: {
      title: "SWOT Analysis in Digital Marketing — Practical Guide",
      excerpt: "How to use SWOT analysis in digital marketing. Practical guide with examples to identify your strengths, weaknesses, opportunities and threats.",
    },
    fr: {
      title: "Analyse SWOT en Marketing Digital — Guide Pratique",
      excerpt: "Comment utiliser l'analyse SWOT dans le marketing digital. Guide pratique avec exemples pour identifier vos forces, faiblesses, opportunités et menaces.",
    },
  },
  "descubre-el-poder-del-canvas-para-la-gestion-de-tus-redes-sociales": {
    en: {
      title: "How to Use the Canvas Framework for Social Media Management",
      excerpt: "How to apply the Canvas business model framework to your social media strategy. Practical guide with examples.",
    },
    fr: {
      title: "Comment utiliser le Canvas pour la gestion des réseaux sociaux",
      excerpt: "Comment appliquer le modèle Canvas à votre stratégie de réseaux sociaux. Guide pratique avec exemples.",
    },
  },
  "descubre-el-analisis-pestel-en-el-marketing-digital": {
    en: {
      title: "PESTEL Analysis in Digital Marketing — Complete Guide",
      excerpt: "What PESTEL analysis is, how to apply it to your digital marketing strategy and what insights it provides for your business.",
    },
    fr: {
      title: "Analyse PESTEL en Marketing Digital — Guide Complet",
      excerpt: "Qu'est-ce que l'analyse PESTEL, comment l'appliquer à votre stratégie de marketing digital et quels enseignements elle apporte pour votre entreprise.",
    },
  },
  "como-elegir-el-mejor-hosting-para-tu-web": {
    en: {
      title: "How to Choose the Best Hosting for Your Website",
      excerpt: "Guide to choosing the best web hosting for your website. Shared, VPS, managed WordPress and cloud hosting compared.",
    },
    fr: {
      title: "Comment choisir le meilleur hébergement pour votre site web",
      excerpt: "Guide pour choisir le meilleur hébergement web pour votre site. Hébergement partagé, VPS, WordPress géré et cloud comparés.",
    },
  },
  "digitalizacion-empresas-castilla-la-mancha": {
    en: {
      title: "Business Digitalisation in Castilla-La Mancha — 2025 Guide",
      excerpt: "How businesses in Castilla-La Mancha can digitalise in 2025. Available aids, essential tools and how to choose a digitalisation partner in the region.",
    },
    fr: {
      title: "Digitalisation des Entreprises en Castille-La Manche — Guide 2025",
      excerpt: "Comment les entreprises de Castille-La Manche peuvent se digitaliser en 2025. Aides disponibles, outils essentiels et comment choisir un partenaire de digitalisation dans la région.",
    },
  },
  "ejemplos-y-diferencias-entre-buscadores-y-navegadores": {
    en: {
      title: "Search Engines vs Browsers — Examples and Differences",
      excerpt: "The key difference between search engines and browsers, with examples of each, and why this distinction matters for digital marketing.",
    },
    fr: {
      title: "Moteurs de Recherche vs Navigateurs — Exemples et Différences",
      excerpt: "La différence clé entre moteurs de recherche et navigateurs, avec des exemples de chacun, et pourquoi cette distinction compte pour le marketing digital.",
    },
  },
  "instagram-para-empresas-que-poner-en-la-biografia-de-instagram": {
    en: {
      title: "Instagram for Businesses — What to Put in Your Bio",
      excerpt: "How to optimise your Instagram business profile. What to write in your bio, how to attract followers and convert them into customers.",
    },
    fr: {
      title: "Instagram pour les Entreprises — Quoi Mettre dans votre Bio",
      excerpt: "Comment optimiser votre profil Instagram d'entreprise. Quoi écrire dans votre bio, comment attirer des abonnés et les convertir en clients.",
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
