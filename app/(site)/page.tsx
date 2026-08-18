import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Agencia Marketing Digital para Empresas — SEO, GEO y Ads | Mkt Web 360",
  description: "Agencia de marketing digital con IA propia para PYMEs. SEO, GEO (ChatGPT/Perplexity), Google Ads y diseño web. +10 años. Exclusividad por sector. Resultados verificables.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    description: "Marketing digital para PYMEs: SEO, GEO, Google Ads y diseño web con IA propia. +10 años y exclusividad sectorial.",
    images: [{ url: "https://www.mktweb360.com/og-homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
