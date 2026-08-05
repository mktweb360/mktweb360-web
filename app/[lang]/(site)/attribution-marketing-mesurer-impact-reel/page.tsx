import { generateMetadata as _gm } from "../marketing-attribution-measure-real-impact/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates:
      alternatesFor(`/${lang}/attribution-marketing-mesurer-impact-reel/`) ?? meta.alternates,
  };
}

export { default } from "../marketing-attribution-measure-real-impact/page";
