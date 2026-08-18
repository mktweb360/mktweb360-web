import { generateMetadata as _gm } from "../digital-marketing-agency-spain/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/agence-marketing-digital-espagne/`) ?? meta.alternates,
  };
}

export { default } from "../digital-marketing-agency-spain/page";
