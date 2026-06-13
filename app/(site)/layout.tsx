import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  alternates: {
    languages: {
      es: "https://www.mktweb360.com/",
      en: "https://www.mktweb360.com/en/",
      fr: "https://www.mktweb360.com/fr/",
    },
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
