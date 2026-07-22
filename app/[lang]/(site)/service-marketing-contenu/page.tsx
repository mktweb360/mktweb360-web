import { generateMetadata as _gm } from "../content-marketing-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-marketing-contenu/`) ?? meta.alternates,
  };
}

export { default } from "../content-marketing-service/page";
