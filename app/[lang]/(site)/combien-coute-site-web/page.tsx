import { generateMetadata as _gm } from "../how-much-does-a-website-cost/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/combien-coute-site-web/`) ?? meta.alternates,
  };
}

export { default } from "../how-much-does-a-website-cost/page";
