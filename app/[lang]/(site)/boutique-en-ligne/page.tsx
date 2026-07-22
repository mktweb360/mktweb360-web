import { generateMetadata as _gm } from "../online-store/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/boutique-en-ligne/`) ?? meta.alternates,
  };
}

export { default } from "../online-store/page";
