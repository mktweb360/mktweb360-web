import { generateMetadata as _gm } from "../brandformance-brand-performance-strategy/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates:
      alternatesFor(`/${lang}/brandformance-strategie-marque-performance/`) ?? meta.alternates,
  };
}

export { default } from "../brandformance-brand-performance-strategy/page";
