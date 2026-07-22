import { generateMetadata as _gm } from "../connect-pos-to-online-store/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/connecter-tpv-boutique-ligne/`) ?? meta.alternates,
  };
}

export { default } from "../connect-pos-to-online-store/page";
