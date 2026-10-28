import type { Metadata } from "next";

// Metadatos base de las páginas en español (antes en app/layout.tsx).
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://www.mktweb360.com"),
  title: {
    default: "Mkt Web 360 — Agencia de Marketing Digital | España",
    template: "%s | Mkt Web 360",
  },
  description:
    "Agencia de marketing digital 360 para pymes y empresas de toda España: SEO y GEO, redes sociales, diseño web y tiendas online, Google Ads e IA aplicada.",
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

