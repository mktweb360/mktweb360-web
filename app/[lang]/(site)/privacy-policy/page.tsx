import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Privacy Policy | Mkt Web 360",
  description: "Privacy policy and personal data protection for Mkt Web 360 SLU, in accordance with the GDPR and LOPDGDD.",
  alternates: alternatesFor("/en/privacy-policy/") ?? { canonical: "https://www.mktweb360.com/en/privacy-policy/" },
  openGraph: { url: "https://www.mktweb360.com/en/privacy-policy/" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Home", href: "/en/" }, { label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Data Controller</h2>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Company name:</strong> Mkt Web 360 SLU</p>
            <p><strong>Tax ID (CIF):</strong> B87679304</p>
            <p><strong>Responsible:</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Registered name:</strong> MKTWEB360, S.L.U.</p>
            <p><strong>Address:</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo, Spain</p>
            <p><strong>Commercial Registry:</strong> Volume 35360, Sheet 45, Section 8, Page M-635651</p>
            <p><strong>Contact email:</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
          </div>
          <p className="mt-3">Mkt Web 360 SLU has not appointed a Data Protection Officer (DPO), as it is not required to do so under Article 37 of the GDPR. For any data protection enquiries, please contact us at the email address above.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Purposes and legal basis</h2>
          <p className="mb-4">We process your personal data for the following purposes:</p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.1 Managing contact requests</h3>
              <p className="mb-1">We process the data you provide through our website contact form (name, email, phone and message) in order to handle and respond to your query or request.</p>
              <p><strong>Legal basis:</strong> Legitimate interest of the controller (Art. 6(1)(f) GDPR) and, where applicable, the consent of the data subject (Art. 6(1)(a) GDPR) by voluntarily submitting the enquiry.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.2 Sending commercial communications</h3>
              <p className="mb-1">If you give us your express consent, we will use your contact details to send you information about our services, news and content of interest.</p>
              <p><strong>Legal basis:</strong> Consent of the data subject (Art. 6(1)(a) GDPR). You may withdraw this consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.3 Statistical analysis of the website</h3>
              <p className="mb-1">With your prior consent, we use Google Analytics 4 and Google Tag Manager to collect statistical and anonymous information about website usage in order to improve its functionality and content.</p>
              <p><strong>Legal basis:</strong> Consent of the data subject (Art. 6(1)(a) GDPR and Art. 22 LSSI).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Recipients and international transfers</h2>
          <p className="mb-4">Your data may be shared with the following service providers acting as processors, with whom Mkt Web 360 SLU has entered into the appropriate data processing agreements:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left">Provider</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Purpose</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Country</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Safeguards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Google LLC</td>
                  <td className="border border-gray-200 px-3 py-2">Google Analytics 4 and Google Tag Manager (web analytics)</td>
                  <td className="border border-gray-200 px-3 py-2">USA</td>
                  <td className="border border-gray-200 px-3 py-2">Standard Contractual Clauses (Art. 46(2)(c) GDPR)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Vercel Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Website hosting</td>
                  <td className="border border-gray-200 px-3 py-2">USA</td>
                  <td className="border border-gray-200 px-3 py-2">Standard Contractual Clauses (Art. 46(2)(c) GDPR)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Resend Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Transactional email delivery</td>
                  <td className="border border-gray-200 px-3 py-2">USA</td>
                  <td className="border border-gray-200 px-3 py-2">Standard Contractual Clauses (Art. 46(2)(c) GDPR)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">SiteGround</td>
                  <td className="border border-gray-200 px-3 py-2">Email hosting</td>
                  <td className="border border-gray-200 px-3 py-2">EU</td>
                  <td className="border border-gray-200 px-3 py-2">Within the EEA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">Data is not shared with third parties for purposes other than those described, except where required by law.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Retention period</h2>
          <p className="mb-3">Data provided through the contact form will be retained for <strong>3 years from the last contact</strong>, unless there is a legal obligation to retain it for a longer period or the data subject requests its deletion before that time.</p>
          <p>Data processed for analytical purposes via Google Analytics 4 is retained for the period configured in that tool (by default, 14 months), in anonymised format.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Your rights</h2>
          <p className="mb-3">Under the GDPR and LOPDGDD, you may exercise the following rights at any time:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Find out what personal data we hold about you.</li>
            <li><strong>Rectification:</strong> Request the correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request the deletion of your data when it is no longer necessary for the purposes for which it was collected.</li>
            <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances.</li>
            <li><strong>Portability:</strong> Receive your data in a structured, commonly used and machine-readable format.</li>
            <li><strong>Restriction:</strong> Request the restriction of processing of your data in certain circumstances.</li>
          </ul>
          <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>, stating the right you wish to exercise and enclosing a copy of your ID or other identifying document.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Right to lodge a complaint</h2>
          <p>If you believe that the processing of your personal data is inadequate or violates applicable regulations, you have the right to lodge a complaint with the <strong>Spanish Data Protection Agency (AEPD)</strong>, the competent supervisory authority in Spain, through its website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">www.aepd.es</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Automated decisions and profiling</h2>
          <p>Mkt Web 360 SLU does not make automated decisions or engage in profiling of website users within the meaning of Article 22 of the GDPR.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">8. Changes to this policy</h2>
          <p>Mkt Web 360 SLU reserves the right to modify this Privacy Policy to adapt it to legislative or case-law developments or changes in business activities. Any changes will be published on this page with the updated date.</p>
        </section>

      </div>
    </div>
  );
}
