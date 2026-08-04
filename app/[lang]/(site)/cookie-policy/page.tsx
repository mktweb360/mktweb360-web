import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Cookie Policy | Mkt Web 360",
  description: "Information about the use of cookies on the Mkt Web 360 SLU website, in accordance with Art. 22 LSSI and the GDPR.",
  alternates: alternatesFor("/en/cookie-policy/") ?? { canonical: "https://www.mktweb360.com/en/cookie-policy/" },
  openGraph: { url: "https://www.mktweb360.com/en/cookie-policy/" },
  robots: { index: false, follow: false },
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Home", href: "/en/" }, { label: "Cookie Policy" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">What are cookies?</h2>
          <p>Cookies are small text files that a website stores on a user's device (computer, tablet or smartphone) when they visit. They allow the website to remember information about the visit, such as preferred language or configuration options, which can make the next visit easier and the site more useful.</p>
          <p className="mt-2">Cookies may be first-party (set by the website itself) or third-party (set by external services), and may be session cookies (deleted when the browser is closed) or persistent cookies (remaining on the device for a set period).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Legal basis</h2>
          <p>The installation of non-essential cookies requires the prior, informed consent of the user, in accordance with <strong>Article 7 of Regulation (EU) 2016/679 (GDPR)</strong> and <strong>Article 22 of Law 34/2002 on Information Society Services (LSSI)</strong>. Strictly necessary cookies for the operation of the site do not require consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Cookies used on this website</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Name</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Provider</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Type</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Purpose</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "_ga",
                    provider: "Google Analytics",
                    type: "Analytics",
                    purpose: "Distinguishes unique users by assigning a random identifier",
                    duration: "2 years",
                  },
                  {
                    name: "_ga_*",
                    provider: "Google Analytics",
                    type: "Analytics",
                    purpose: "Maintains session state for Google Analytics 4",
                    duration: "2 years",
                  },
                  {
                    name: "_gid",
                    provider: "Google Analytics",
                    type: "Analytics",
                    purpose: "Distinguishes unique users; renewed every 24 hours",
                    duration: "24 hours",
                  },
                  {
                    name: "_gcl_au",
                    provider: "Google Tag Manager",
                    type: "Analytics",
                    purpose: "Stores and tracks advertising conversions",
                    duration: "3 months",
                  },
                  {
                    name: "mktweb360_consent",
                    provider: "Own",
                    type: "Preferences",
                    purpose: "Saves the user's cookie consent preferences",
                    duration: "1 year",
                  },
                ].map((row) => (
                  <tr key={row.name} className="even:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.name}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.provider}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.type}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.purpose}</td>
                    <td className="border border-gray-200 px-3 py-2 whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">How to manage cookies</h2>
          <p className="mb-4">You can manage your cookie preferences at any time via the preferences panel at the bottom of this page, or by configuring your browser to block or delete cookies. Instructions for the main browsers are provided below:</p>

          <div className="space-y-3">
            {[
              {
                browser: "Google Chrome",
                instructions: "Settings → Privacy and security → Cookies and other site data.",
              },
              {
                browser: "Mozilla Firefox",
                instructions: "Options → Privacy & Security → Cookies and Site Data.",
              },
              {
                browser: "Safari (macOS / iOS)",
                instructions: "Preferences → Privacy → Manage Website Data.",
              },
              {
                browser: "Microsoft Edge",
                instructions: "Settings → Privacy, search and services → Cookies and site permissions.",
              },
            ].map((item) => (
              <div key={item.browser} className="bg-gray-50 rounded-lg px-4 py-3">
                <p><strong>{item.browser}:</strong> {item.instructions}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-500">Please note that disabling certain cookies may affect the proper functioning of the website or your browsing experience.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Updates to this policy</h2>
          <p>Mkt Web 360 SLU reserves the right to modify this Cookie Policy to adapt it to legislative changes, new technologies or the introduction of new services. When significant changes occur, users will be informed via the cookie consent panel.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Contact</h2>
          <p>For any queries regarding the use of cookies on this website, please contact us at: <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
        </section>

      </div>
    </div>
  );
}
