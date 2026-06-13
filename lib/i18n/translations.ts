import type { Lang } from "./index";

const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      cases: "Casos",
      blog: "Blog",
      contact: "Contacto",
    },
    footer: {
      tagline: "Agencia de marketing digital para PYMEs y empresas. Servicio nacional.",
      services: "Servicios",
      moreServices: "Más servicios",
      company: "Empresa",
      contact: "Contacto",
      rights: "Todos los derechos reservados",
    },
    hero: {
      cta: "Solicitar presupuesto",
      ctaSecondary: "Ver servicios",
    },
    contact: {
      title: "Cuéntanos tu proyecto",
      subtitle: "Te respondemos en menos de 24 horas.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      phonePlaceholder: "Tu teléfono",
      messagePlaceholder: "Cuéntanos tu proyecto...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te contactamos pronto.",
      error: "Error al enviar. Por favor, inténtalo de nuevo.",
    },
    common: {
      readMore: "Leer más",
      learnMore: "Saber más",
      getQuote: "Solicitar presupuesto",
      freeAudit: "Auditoría gratuita",
      ourServices: "Nuestros servicios",
      whyUs: "Por qué elegirnos",
      results: "Resultados",
      national: "Servicio nacional",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      cases: "Cases",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      tagline: "Digital marketing agency for SMEs and businesses. Nationwide service.",
      services: "Services",
      moreServices: "More services",
      company: "Company",
      contact: "Contact",
      rights: "All rights reserved",
    },
    hero: {
      cta: "Get a quote",
      ctaSecondary: "View services",
    },
    contact: {
      title: "Tell us about your project",
      subtitle: "We respond within 24 hours.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent! We'll be in touch shortly.",
      error: "Error sending. Please try again.",
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      getQuote: "Get a quote",
      freeAudit: "Free audit",
      ourServices: "Our services",
      whyUs: "Why choose us",
      results: "Results",
      national: "Nationwide service",
    },
  },
  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      cases: "Cas clients",
      blog: "Blog",
      contact: "Contact",
    },
    footer: {
      tagline: "Agence de marketing digital pour PME et entreprises. Service national.",
      services: "Services",
      moreServices: "Plus de services",
      company: "Entreprise",
      contact: "Contact",
      rights: "Tous droits réservés",
    },
    hero: {
      cta: "Demander un devis",
      ctaSecondary: "Voir les services",
    },
    contact: {
      title: "Parlez-nous de votre projet",
      subtitle: "Nous répondons en moins de 24 heures.",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "Votre email",
      phonePlaceholder: "Votre téléphone",
      messagePlaceholder: "Parlez-nous de votre projet...",
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message envoyé ! Nous vous contacterons bientôt.",
      error: "Erreur d'envoi. Veuillez réessayer.",
    },
    common: {
      readMore: "Lire la suite",
      learnMore: "En savoir plus",
      getQuote: "Demander un devis",
      freeAudit: "Audit gratuit",
      ourServices: "Nos services",
      whyUs: "Pourquoi nous choisir",
      results: "Résultats",
      national: "Service national",
    },
  },
} as const;

export type Translations = typeof translations.es;

export function t(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}
