import { generateMetadata as _gm } from "../website-demos/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/demos-sites-web/`) ?? meta.alternates,
  };
}

export { default } from "../website-demos/page";
