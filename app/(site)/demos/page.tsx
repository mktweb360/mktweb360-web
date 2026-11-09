import type { Metadata } from "next";
import { DemosPage } from "@/components/DemosPage";
import { alternatesFor } from "@/lib/i18n/routes";
import { DEMOS_CONTENT } from "@/lib/demos-page";

const URL = "https://www.mktweb360.com/demos/";
const c = DEMOS_CONTENT.es;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: alternatesFor("/demos/") ?? { canonical: URL },
  openGraph: {
    title: `${c.metaTitle} | Mkt Web 360`,
    description: c.metaDescription,
    url: URL,
    type: "website",
    images: [{ url: "https://www.mktweb360.com/og-demos-webs.jpg", width: 1200, height: 630 }],
  },
};

export default function DemosEsPage() {
  return <DemosPage lang="es" />;
}
