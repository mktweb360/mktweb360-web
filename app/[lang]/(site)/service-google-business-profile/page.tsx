import { generateMetadata as _gm } from "../google-business-profile-service/page";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = await _gm({ params });
  return {
    ...meta,
    alternates: alternatesFor(`/${lang}/service-google-business-profile/`) ?? meta.alternates,
  };
}

export { default } from "../google-business-profile-service/page";
