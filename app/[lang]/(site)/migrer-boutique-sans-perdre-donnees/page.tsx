import { generateMetadata as _gm } from "../migrate-online-store-without-losing-data/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/migrer-boutique-sans-perdre-donnees/`) ?? meta.alternates,
  };
}

export { default } from "../migrate-online-store-without-losing-data/page";
