import { generateMetadata as _gm } from "../geo-generative-seo/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/geo-seo-generatif/`) ?? meta.alternates,
  };
}

export { default } from "../geo-generative-seo/page";
