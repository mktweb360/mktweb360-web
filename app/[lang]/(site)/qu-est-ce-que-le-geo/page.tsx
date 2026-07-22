import { generateMetadata as _gm } from "../what-is-geo-generative-engine-optimization/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/qu-est-ce-que-le-geo/`) ?? meta.alternates,
  };
}

export { default } from "../what-is-geo-generative-engine-optimization/page";
