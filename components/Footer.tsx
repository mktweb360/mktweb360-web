import Link from "next/link";

type FooterContent = {
  tagline: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  copyright: string;
  services: { label: string; href: string }[];
  moreServices: { label: string; href: string }[];
  company: { label: string; href: string }[];
};

const CONTENT: Record<string, FooterContent> = {
  es: {
    tagline: "Agencia de marketing digital para PYMEs y empresas. Servicio nacional.",
    col1: "Mkt Web 360",
    col2: "Servicios",
    col3: "Más servicios",
    col4: "Empresa",
    copyright: "Todos los derechos reservados",
    services: [
      { label: "SEO Posicionamiento", href: "/seo-posicionamiento-web-organico/" },
      { label: "SEM / Google Ads", href: "/sem-publicidad-ppc/" },
      { label: "Google Business Profile", href: "/google-business-profile/" },
      { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
      { label: "Tiendas Online", href: "/diseno-de-paginas-web/diseno-tiendas-online/" },
      { label: "Creación de Blog", href: "/creacion-de-blog/" },
    ],
    moreServices: [
      { label: "Redes Sociales", href: "/smm-social-media-marketing/" },
      { label: "WhatsApp Marketing", href: "/whatsapp-marketing/" },
      { label: "Email Marketing", href: "/email-marketing/" },
      { label: "Marketing de Contenidos", href: "/marketing-de-contenidos/" },
      { label: "Analítica Web", href: "/analitica-web/" },
      { label: "Reputación Online", href: "/reputacion-online/" },
      { label: "IA en Marketing", href: "/ia-aplicada-al-marketing/" },
      { label: "GEO — Posicionamiento IA", href: "/geo-posicionamiento-ia/" },
      { label: "Blog para Monetización", href: "/blog-para-monetizacion/" },
      { label: "Ecommerce con Participación", href: "/ecommerce-participacion-resultados/" },
    ],
    company: [
      { label: "Blog", href: "/blog/" },
      { label: "Contacto", href: "/contacto/" },
      { label: "Aviso Legal", href: "/aviso-legal/" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad/" },
      { label: "Política de Cookies", href: "/politica-de-cookies/" },
    ],
  },
  en: {
    tagline: "Digital marketing agency for SMEs and businesses. Nationwide service across Spain.",
    col1: "Mkt Web 360",
    col2: "Services",
    col3: "More services",
    col4: "Company",
    copyright: "All rights reserved",
    services: [
      { label: "SEO Positioning", href: "/en/seo-web-positioning/" },
      { label: "Google Ads", href: "/en/google-ads-management/" },
      { label: "Google Business Profile", href: "/en/google-business-profile-management/" },
      { label: "Web Design", href: "/en/web-design/" },
      { label: "Online Stores", href: "/en/online-store/" },
      { label: "Blog Creation", href: "/en/blog-creation-service/" },
    ],
    moreServices: [
      { label: "Social Media", href: "/en/social-media-management/" },
      { label: "WhatsApp Marketing", href: "/en/whatsapp-marketing-service/" },
      { label: "Email Marketing", href: "/en/email-marketing-service/" },
      { label: "Content Marketing", href: "/en/content-marketing/" },
      { label: "Web Analytics", href: "/en/web-analytics/" },
      { label: "Online Reputation", href: "/en/online-reputation-management/" },
      { label: "AI in Marketing", href: "/en/ai-applied-marketing/" },
      { label: "GEO — AI Positioning", href: "/en/geo-generative-engine-optimization/" },
      { label: "Monetisation Blog", href: "/en/blog-creation-service/" },
      { label: "Ecommerce Partnership", href: "/en/ecommerce-no-commissions/" },
    ],
    company: [
      { label: "Blog", href: "/en/blog/" },
      { label: "Contact", href: "/en/contact/" },
      { label: "Legal Notice", href: "/en/legal-notice/" },
      { label: "Privacy Policy", href: "/en/privacy-policy/" },
      { label: "Cookie Policy", href: "/en/cookie-policy/" },
    ],
  },
  fr: {
    tagline: "Agence de marketing digital pour PME et entreprises. Service national en Espagne.",
    col1: "Mkt Web 360",
    col2: "Services",
    col3: "Plus de services",
    col4: "Entreprise",
    copyright: "Tous droits réservés",
    services: [
      { label: "Référencement SEO", href: "/fr/positionnement-seo/" },
      { label: "Google Ads", href: "/fr/gestion-google-ads/" },
      { label: "Google Business Profile", href: "/fr/google-business-profile-service/" },
      { label: "Création Web", href: "/fr/creation-site-web/" },
      { label: "Boutique en Ligne", href: "/fr/boutique-en-ligne/" },
      { label: "Création de Blog", href: "/fr/service-creation-blog/" },
    ],
    moreServices: [
      { label: "Réseaux Sociaux", href: "/fr/marketing-reseaux-sociaux/" },
      { label: "WhatsApp Marketing", href: "/fr/service-whatsapp-marketing/" },
      { label: "Email Marketing", href: "/fr/campagnes-email-marketing/" },
      { label: "Marketing de Contenu", href: "/fr/marketing-de-contenu/" },
      { label: "Analytique Web", href: "/fr/analytique-web/" },
      { label: "Réputation en Ligne", href: "/fr/reputation-en-ligne/" },
      { label: "IA en Marketing", href: "/fr/marketing-intelligence-artificielle/" },
      { label: "GEO — Positionnement IA", href: "/fr/geo-optimisation-moteurs-generatifs/" },
      { label: "Blog de Monétisation", href: "/fr/service-creation-blog/" },
      { label: "E-commerce Participatif", href: "/fr/boutique-en-ligne-sans-commissions/" },
    ],
    company: [
      { label: "Blog", href: "/fr/blog/" },
      { label: "Contact", href: "/fr/contact/" },
      { label: "Mentions Légales", href: "/fr/mentions-legales/" },
      { label: "Politique de Confidentialité", href: "/fr/politique-de-confidentialite/" },
      { label: "Politique de Cookies", href: "/fr/politique-des-cookies/" },
    ],
  },
};

export function Footer({ lang }: { lang?: string }) {
  const c = CONTENT[(lang ?? "es") as keyof typeof CONTENT] ?? CONTENT.es;

  return (
    <footer className="bg-primary-600 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">
            <span className="text-accent-400">Mkt</span> Web 360
          </h3>
          <p className="text-primary-200 text-sm leading-relaxed">
            {c.tagline}
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.849-8.166-10.651h6.052l4.261 5.633 5.617-6.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/mktweb360" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/mkt-web-360-s-l/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">{c.col2}</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            {c.services.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">{c.col3}</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            {c.moreServices.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white transition-colors">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">{c.col4}</h4>
          <ul className="space-y-2 text-sm text-primary-300">
            {c.company.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-primary-100">Contacto</h4>
          <address className="text-sm text-primary-300 not-italic space-y-2">
            <p><a href="tel:+34622748987" className="hover:text-white">+34 622 74 89 87</a></p>
            <p><a href="mailto:info@mktweb360.com" className="hover:text-white">info@mktweb360.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-700 py-4 text-center text-xs text-primary-400">
        © {new Date().getFullYear()} Mkt Web 360 SLU · {c.copyright}
      </div>
    </footer>
  );
}
