import { generateMetadata as _gm } from "../seo-positioning/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/positionnement-seo/`) ?? meta.alternates,
  };
}

export { default } from "../seo-positioning/page";
