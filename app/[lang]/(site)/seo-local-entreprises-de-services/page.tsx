import { generateMetadata as _gm } from "../local-seo-for-service-businesses/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/seo-local-entreprises-de-services/`) ?? meta.alternates,
  };
}

export { default } from "../local-seo-for-service-businesses/page";
