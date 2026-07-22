import { generateMetadata as _gm } from "../content-marketing/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/marketing-de-contenu/`) ?? meta.alternates,
  };
}

export { default } from "../content-marketing/page";
