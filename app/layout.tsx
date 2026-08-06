import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mktweb360.com"),
  title: {
    default: "Mkt Web 360 — Agencia de Marketing Digital | España",
    template: "%s | Mkt Web 360",
  },
  description:
    "Agencia de marketing digital especializada en SEO, SEM, Redes Sociales y Diseño Web para PYMEs y empresas. Servicio nacional desde Toledo, España.",
  robots: { index: true, follow: true },
  verification: { google: "uer2-Is3fH5njl0xCuDxnRURHePJwYREPyNfyoaKK8U" },
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
  twitter: {
    card: "summary_large_image",
    site: "@MktWeb360",
    creator: "@MktWeb360",
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
  image: "https://www.mktweb360.com/og-image.jpg",
  email: "info@mktweb360.com",
  telephone: "+34622748987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Chopo 98",
    addressLocality: "El Viso de San Juan",
    addressRegion: "Toledo",
    postalCode: "45215",
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.8878, longitude: -4.0647 },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "€€",
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
    "https://x.com/MktWeb360",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: LangSetter updates lang attr client-side for EN/FR pages.
    // The attribute starts as "es" (SSR) and is corrected immediately after hydration.
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect para GTM y GA4: reduce latencia cuando el usuario da consentimiento.
            También elimina la advertencia de DevTools "connection not preconnected". */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Consent Mode v2 — debe ejecutarse ANTES de que GTM cargue */}
        <script dangerouslySetInnerHTML={{ __html:
          "window.dataLayer=window.dataLayer||[];" +
          "function gtag(){window.dataLayer.push(arguments);}" +
          "gtag('consent','default',{" +
            "'ad_storage':'denied'," +
            "'ad_user_data':'denied'," +
            "'ad_personalization':'denied'," +
            "'analytics_storage':'denied'," +
            "'wait_for_update':500" +
          "});"
        }} />
        {/* GTM — carga siempre, incondicionalmente. El consent default=denied arriba garantiza cumplimiento RGPD.
            Sin esto Google nunca recibe señales de consentimiento de usuarios EEE que no interactúan
            con el banner, bloqueando la modelización de conversiones (Consent Mode v2). */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-KVB3R3H" />
      </head>
      <body>
        {/* GTM noscript — fallback para navegadores sin JavaScript */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVB3R3H" height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
