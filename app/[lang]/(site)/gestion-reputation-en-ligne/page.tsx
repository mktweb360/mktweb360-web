import { generateMetadata as _gm } from "../online-reputation-management/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/gestion-reputation-en-ligne/`) ?? meta.alternates,
  };
}

export { default } from "../online-reputation-management/page";
