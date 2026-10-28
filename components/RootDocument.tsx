// Documento raíz común (28/10/2026): <html lang> correcto por idioma desde el servidor.
// Lo usan los tres layouts raíz: app/(site) (ES), app/(app) (área privada, portal, landings) y app/[lang] (EN/FR),
// además de app/global-not-found.tsx. Antes había un único app/layout.tsx con lang="es" y un parche en el navegador.
import "@/app/globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.mktweb360.com/#organization",
  name: "Mkt Web 360 SLU",
  // Marca tal como sale en los títulos y las búsquedas («mkt web 360», «marketing digital 360»), para que Google una la entidad.
  alternateName: ["Mkt Web 360", "MktWeb360"],
  legalName: "Mkt Web 360 SLU",
  description: "Agencia de marketing digital 360 para pymes y empresas de toda España: SEO y GEO, redes sociales, diseño web y tiendas online, Google Ads e IA aplicada.",
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
    "GEO (posicionamiento en asistentes de IA)",
    "Inteligencia Artificial aplicada al marketing",
    "Email Marketing",
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
    "https://www.youtube.com/@mktweb360",
    "https://www.pinterest.es/mktweb3812/",
  ],
};

export const websiteSchema = {
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

export function RootDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
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
        {/* Metricool — analítica web sin cookies (no almacena datos en el dispositivo ni asigna
            identificadores; según Metricool está exenta de consentimiento, art. 22.2 LSSI-CE).
            Va en <head> como <script> literal (código oficial de Metricool, sin modificar) para que
            aparezca tal cual en el HTML servido y Metricool pueda verificar la web. El loader
            inyecta be.js de forma asíncrona, así que no bloquea el renderizado. */}
        <script id="metricool-tracker" dangerouslySetInnerHTML={{ __html:
          'function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"d8693f986b59286e15ea5a473d2e1fdd"})});'
        }} />
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
        <ChatWidget />
      </body>
    </html>
  );
}
