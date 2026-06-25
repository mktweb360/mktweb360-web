import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  description: "Agencia de marketing digital para PYMEs y empresas. SEO, GEO, Google Ads y diseño web con protocolos propios de IA, +10 años y exclusividad por sector.",
  openGraph: {
    description: "Marketing digital para PYMEs: SEO, GEO, Google Ads y diseño web con IA propia. +10 años y exclusividad sectorial.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
