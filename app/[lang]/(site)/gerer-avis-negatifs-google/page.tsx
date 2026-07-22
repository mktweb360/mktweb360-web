import { generateMetadata as _gm } from "../manage-negative-reviews-google/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/gerer-avis-negatifs-google/`) ?? meta.alternates,
  };
}

export { default } from "../manage-negative-reviews-google/page";
