import { generateMetadata as _gm } from "../ai-applied-marketing/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/marketing-intelligence-artificielle/`) ?? meta.alternates,
  };
}

export { default } from "../ai-applied-marketing/page";
