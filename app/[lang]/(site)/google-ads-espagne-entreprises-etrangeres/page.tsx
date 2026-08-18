import { generateMetadata as _gm } from "../google-ads-spain-foreign-companies/page";
import { alternatesFor } from "@/lib/i18n/routes";
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return { ...meta, alternates: alternatesFor(`/${lang}/google-ads-espagne-entreprises-etrangeres/`) ?? meta.alternates };
}
export { default } from "../google-ads-spain-foreign-companies/page";
