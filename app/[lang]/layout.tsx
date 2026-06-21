import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { supportedLangs, langLocales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return supportedLangs
    .filter((lang) => lang !== "es")
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<string, string> = {
    en: "Mkt Web 360 — Digital Marketing Agency | Spain",
    fr: "Mkt Web 360 — Agence de Marketing Digital | Espagne",
  };

  const descriptions: Record<string, string> = {
    en: "Digital marketing agency specialising in SEO, SEM, Social Media and Web Design for SMEs. Nationwide service from Spain.",
    fr: "Agence de marketing digital spécialisée en SEO, SEM, Réseaux sociaux et Création de sites web pour PME. Service national depuis l'Espagne.",
  };

  return {
    metadataBase: new URL("https://www.mktweb360.com"),
    title: {
      default: titles[lang] ?? titles.en,
      template: `%s | Mkt Web 360`,
    },
    description: descriptions[lang] ?? descriptions.en,
    openGraph: {
      type: "website",
      locale: langLocales[lang as Lang] ?? "en_GB",
      url: `https://www.mktweb360.com/${lang}`,
      siteName: "Mkt Web 360",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!supportedLangs.includes(lang as Lang)) {
    notFound();
  }
  return <>{children}</>;
}
