import { generateMetadata as _gm } from "../ai-marketing-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-ia-marketing/`) ?? meta.alternates,
  };
}

export { default } from "../ai-marketing-service/page";
