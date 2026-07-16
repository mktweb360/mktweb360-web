import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  description: "Agencia de marketing digital para PYMEs y empresas. SEO, GEO, Google Ads y diseño web con protocolos propios de IA, +10 años y exclusividad por sector.",
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
