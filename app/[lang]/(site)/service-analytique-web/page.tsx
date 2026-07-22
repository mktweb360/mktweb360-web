import { generateMetadata as _gm } from "../web-analytics-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-analytique-web/`) ?? meta.alternates,
  };
}

export { default } from "../web-analytics-service/page";
