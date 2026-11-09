import { DemosPage } from "@/components/DemosPage";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";
import { DEMOS_CONTENT } from "@/lib/demos-page";

const SLUG = "website-demos";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = lang === "fr" ? DEMOS_CONTENT.fr : DEMOS_CONTENT.en;
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
      title: `${c.metaTitle} | Mkt Web 360`,
      description: c.metaDescription,
      images: [{ url: "https://www.mktweb360.com/og-demos-webs.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <DemosPage lang={lang === "fr" ? "fr" : "en"} />;
}
