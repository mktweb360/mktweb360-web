import { LandingPintores } from "@/components/LandingPintores";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";
import { ogImagesIntl } from "@/lib/og";
import { LANDING } from "@/lib/landing-pintores";

const SLUG = "web-design-for-painters";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = lang === "fr" ? LANDING.fr : LANDING.en;
  const path = `/${lang}/${langSlug(lang, SLUG)}/`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: alternatesFor(path) ?? { canonical: `https://www.mktweb360.com${path}` },
    openGraph: {
      type: "website" as const,
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      siteName: "Mkt Web 360",
      url: `https://www.mktweb360.com${path}`,
      title: c.ogTitle,
      description: c.metaDescription,
      images: ogImagesIntl(SLUG),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <LandingPintores lang={lang === "fr" ? "fr" : "en"} />;
}
