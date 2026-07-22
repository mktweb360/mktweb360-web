import { generateMetadata as _gm } from "../whatsapp-marketing-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-whatsapp-marketing/`) ?? meta.alternates,
  };
}

export { default } from "../whatsapp-marketing-service/page";
