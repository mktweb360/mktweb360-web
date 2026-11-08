import type { Metadata } from "next";
import { LandingPintores } from "@/components/LandingPintores";
import { alternatesFor } from "@/lib/i18n/routes";
import { LANDING } from "@/lib/landing-pintores";

const URL = "https://www.mktweb360.com/paginas-web-para-pintores/";
const c = LANDING.es;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: alternatesFor("/paginas-web-para-pintores/") ?? { canonical: URL },
  openGraph: {
    title: c.ogTitle,
    description: c.metaDescription,
    url: URL,
    type: "website",
    images: [{ url: "https://www.mktweb360.com/og-paginas-web-para-pintores.jpg", width: 1200, height: 630 }],
  },
};

export default function PaginasWebParaPintoresPage() {
  return <LandingPintores lang="es" />;
}
