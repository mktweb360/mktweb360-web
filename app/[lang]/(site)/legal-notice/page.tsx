import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Legal Notice | Mkt Web 360",
  description: "Legal notice and terms of use for the Mkt Web 360 SLU website, CIF B87679304.",
  alternates: alternatesFor("/en/legal-notice/") ?? { canonical: "https://www.mktweb360.com/en/legal-notice/" },
  openGraph: { url: "https://www.mktweb360.com/en/legal-notice/" },
  robots: { index: false, follow: false },
};

export default function LegalNoticePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Home", href: "/en/" }, { label: "Legal Notice" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Legal Notice</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: June 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Identification</h2>
          <p className="mb-3">In compliance with Article 10 of Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), the following identification details of the website owner are provided:</p>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Company name:</strong> Mkt Web 360 SLU</p>
            <p><strong>Tax ID (CIF):</strong> B87679304</p>
            <p><strong>Responsible:</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Registered name:</strong> MKTWEB360, S.L.U.</p>
            <p><strong>Trade name:</strong> MKTWEB</p>
            <p><strong>Registered address:</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo, Spain</p>
            <p><strong>Commercial Registry:</strong> Volume 35360, Sheet 45, Section 8, Page M-635651</p>
            <p><strong>Phone:</strong> <a href="tel:+34622748987" className="text-accent-500 hover:underline">+34 622 74 89 87</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
            <p><strong>Website:</strong> <a href="https://www.mktweb360.com" className="text-accent-500 hover:underline">https://www.mktweb360.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Purpose and scope</h2>
          <p>This Legal Notice governs access to and use of the website <strong>www.mktweb360.com</strong> (hereinafter, "the Website"), owned by Mkt Web 360 SLU. Accessing the Website implies full and unreserved acceptance of these terms. Mkt Web 360 SLU reserves the right to modify this Legal Notice at any time; users are responsible for reviewing it periodically.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Terms of use</h2>
          <p className="mb-3">The user agrees to use the Website in accordance with the law, this Legal Notice, good practices and public order. The following are expressly prohibited:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Reproducing, distributing or modifying Website content without the express authorisation of Mkt Web 360 SLU.</li>
            <li>Using the Website for unlawful activities or activities contrary to good faith or public order.</li>
            <li>Introducing or spreading computer viruses or any other system capable of causing damage to the Website or third-party systems.</li>
            <li>Attempting to access, use or manipulate data belonging to Mkt Web 360 SLU, other users or third parties.</li>
            <li>Using mass data extraction mechanisms (scraping) without authorisation.</li>
          </ul>
          <p className="mt-3">Mkt Web 360 SLU reserves the right to deny or withdraw Website access to any user who breaches these terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Intellectual and industrial property</h2>
          <p className="mb-3">All Website content — including, without limitation, texts, photographs, graphics, images, videos, logos, trademarks, trade names, graphic design, source code and software — is the property of Mkt Web 360 SLU or of third parties who have authorised its use, and is protected by Spanish and international intellectual and industrial property law.</p>
          <p>Total or partial reproduction, distribution, public communication, transformation or any other use of Website content without the express written authorisation of Mkt Web 360 SLU is expressly prohibited. Breach of this prohibition may give rise to the corresponding legal actions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Liability and warranties</h2>
          <p className="mb-3">Mkt Web 360 SLU does not guarantee the availability and continuity of Website operation. Where reasonably possible, prior notice will be given of any interruptions to the Website.</p>
          <p className="mb-3">Mkt Web 360 SLU is not liable for damages of any nature arising from access to or use of the Website, including damage to users' computer systems caused by viruses or cyberattacks originating from the Website.</p>
          <p>Website content is for informational purposes only. Mkt Web 360 SLU does not guarantee the accuracy, completeness or currency of published information, nor does it accept any liability for damages that may be caused by the information contained on the Website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Link policy</h2>
          <p className="mb-3">The Website may contain links to third-party websites. Mkt Web 360 SLU has no control over such websites and accepts no liability for their content, privacy policies or practices.</p>
          <p>If you wish to establish a link to the Website from another website, you must first request written permission from Mkt Web 360 SLU via <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>. Links from websites whose content is unlawful, offensive or contrary to public order are prohibited.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Applicable law and jurisdiction</h2>
          <p>These terms are governed by and construed in accordance with Spanish law. For the resolution of any disputes, discrepancies or claims arising from the interpretation or execution of this Legal Notice, the parties submit, with express waiver of any other applicable jurisdiction, to the Courts and Tribunals of the city of <strong>Toledo (Spain)</strong>.</p>
        </section>

      </div>
    </div>
  );
}
