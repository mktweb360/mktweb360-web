import { generateMetadata as _gm } from "../email-marketing-campaigns/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/campagnes-email-marketing/`) ?? meta.alternates,
  };
}

export { default } from "../email-marketing-campaigns/page";
