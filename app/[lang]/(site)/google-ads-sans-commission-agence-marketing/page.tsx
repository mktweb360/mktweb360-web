import { generateMetadata as _gm } from "../google-ads-no-commission-marketing-agency/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return { ...meta, alternates: alternatesFor(`/${lang}/google-ads-sans-commission-agence-marketing/`) ?? meta.alternates };
}

export { default } from "../google-ads-no-commission-marketing-agency/page";
