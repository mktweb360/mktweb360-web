import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mktweb360.com"),
  title: {
    default: "Mkt Web 360 — Agencia de Marketing Digital | España",
    template: "%s | Mkt Web 360",
  },
  description:
    "Agencia de marketing digital especializada en SEO, SEM, Redes Sociales y Diseño Web para PYMEs y empresas. Servicio nacional desde Toledo, España.",
  robots: { index: true, follow: true },
  alternates: {
    types: {
      "application/rss+xml": "https://www.mktweb360.com/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.mktweb360.com",
    siteName: "Mkt Web 360",
  },
  other: {
    copyright: "Mkt Web 360 SLU — Todos los derechos reservados",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.mktweb360.com/#organization",
  name: "Mkt Web 360 SLU",
  url: "https://www.mktweb360.com",
  logo: "https://www.mktweb360.com/logo.png",
  email: "info@mktweb360.com",
  telephone: "+34622748897",
  address: {
    "@type": "PostalAddress",
    streetAddress: "El Viso de San Juan",
    addressLocality: "El Viso de San Juan",
    addressRegion: "Castilla-La Mancha",
    postalCode: "45215",
    addressCountry: "ES",
  },
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "SEO",
    "Marketing Digital",
    "Google Ads",
    "Diseño Web",
    "Redes Sociales",
    "Marketing de Contenidos",
    "Auditoría Digital",
    "Ecommerce",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Marketing Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Posicionamiento Web", url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campañas Google Ads", url: "https://www.mktweb360.com/sem-publicidad-ppc/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestión Redes Sociales", url: "https://www.mktweb360.com/smm-social-media-marketing/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño de Páginas Web", url: "https://www.mktweb360.com/diseno-de-paginas-web/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing de Contenidos", url: "https://www.mktweb360.com/marketing-de-contenidos/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría Digital", url: "https://www.mktweb360.com/auditoria-digital/" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/mktweb360/",
    "https://twitter.com/MktWeb360",
    "https://www.instagram.com/mktweb360/",
    "https://www.linkedin.com/company/mkt-web-360-s-l/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mkt Web 360",
  url: "https://www.mktweb360.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.mktweb360.com/blog/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const copyProtectionScript = `
  document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'a')) {
      e.preventDefault();
    }
  });
  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  });
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="select-none">
        <script dangerouslySetInnerHTML={{ __html: copyProtectionScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
