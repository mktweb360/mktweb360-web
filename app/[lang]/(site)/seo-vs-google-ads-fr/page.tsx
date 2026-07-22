import { generateMetadata as _gm } from "../seo-vs-google-ads/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/seo-vs-google-ads-fr/`) ?? meta.alternates,
  };
}

export { default } from "../seo-vs-google-ads/page";
