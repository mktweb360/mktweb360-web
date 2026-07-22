import { generateMetadata as _gm } from "../ecommerce-no-commissions/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/boutique-en-ligne-sans-commissions/`) ?? meta.alternates,
  };
}

export { default } from "../ecommerce-no-commissions/page";
