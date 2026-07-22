import { generateMetadata as _gm } from "../google-business-profile-management/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/gestion-google-business-profile/`) ?? meta.alternates,
  };
}

export { default } from "../google-business-profile-management/page";
