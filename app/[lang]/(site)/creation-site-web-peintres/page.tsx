import { generateMetadata as _gm } from "../web-design-for-painters/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/creation-site-web-peintres/`) ?? meta.alternates,
  };
}

export { default } from "../web-design-for-painters/page";
