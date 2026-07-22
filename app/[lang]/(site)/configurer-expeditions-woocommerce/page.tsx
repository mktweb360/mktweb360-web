import { generateMetadata as _gm } from "../configure-shipping-woocommerce/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/configurer-expeditions-woocommerce/`) ?? meta.alternates,
  };
}

export { default } from "../configure-shipping-woocommerce/page";
