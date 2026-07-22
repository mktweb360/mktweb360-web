import { generateMetadata as _gm } from "../seo-web-positioning/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/seo-positionnement-web/`) ?? meta.alternates,
  };
}

export { default } from "../seo-web-positioning/page";
