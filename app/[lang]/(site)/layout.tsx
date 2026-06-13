import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Lang } from "@/lib/i18n";

export default async function LangSiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;
  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
