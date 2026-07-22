import { generateMetadata as _gm } from "../google-ads-management/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/gestion-google-ads/`) ?? meta.alternates,
  };
}

export { default } from "../google-ads-management/page";
