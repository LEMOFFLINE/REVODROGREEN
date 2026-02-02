import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Legal Notice | Revodro Tech AG",
  description:
    "Privacy Policy, Terms of Use, and Disclaimer for Revodro Tech AG website.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E5631] via-[#2D5016] to-[#1E5631] py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Legal Notice
            </h1>
            <p className="text-[#A7C4A0] text-lg">
              Privacy Policy, Terms of Use & Disclaimer
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            {/* Company Information */}
            <div className="mb-12 p-6 bg-[#F7FAFC] rounded-lg border border-[#E2E8F0]">
              <h2 className="text-xl font-bold text-[#2D3748] mb-4">
                Company Information
              </h2>
              <div className="text-[#4A5568] space-y-1">
                <p className="font-semibold">Revodro Tech AG</p>
                <p>Stockerstrasse 43</p>
                <p>8002 Zurich, Switzerland</p>
                <p className="mt-3">
                  Email:{" "}
                  <a
                    href="mailto:office@revodro.net"
                    className="text-[#1E5631] hover:underline"
                  >
                    office@revodro.net
                  </a>
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div id="privacy" className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3748] mb-6 pb-2 border-b border-[#E2E8F0]">
                Privacy Policy
              </h2>
              <p className="text-sm text-[#718096] mb-6">
                Last updated: January 2026
              </p>

              <div className="prose prose-gray max-w-none text-[#4A5568] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    1. Data Controller
                  </h3>
                  <p className="leading-relaxed">
                    Revodro Tech AG, Stockerstrasse 43, 8002 Zurich, Switzerland
                    is the data controller for personal data collected through
                    this website. For any privacy-related inquiries, please
                    contact us at office@revodro.net.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    2. Data We Collect
                  </h3>
                  <p className="leading-relaxed mb-3">
                    We collect personal data only when you voluntarily provide
                    it through our contact form:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name and company name</li>
                    <li>Email address</li>
                    <li>Phone number (if provided)</li>
                    <li>Message content and inquiry details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    3. Purpose of Processing
                  </h3>
                  <p className="leading-relaxed">
                    We use your personal data solely to respond to your
                    inquiries, provide requested information about our products
                    and services, and communicate with you regarding potential
                    business opportunities. We do not use your data for
                    marketing purposes without your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    4. Data Retention
                  </h3>
                  <p className="leading-relaxed">
                    We retain your personal data only for as long as necessary
                    to fulfill the purposes for which it was collected,
                    typically for the duration of our business relationship plus
                    any legally required retention period.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    5. Cookies
                  </h3>
                  <p className="leading-relaxed">
                    This website uses only essential cookies necessary for
                    website functionality. We do not use analytics, tracking, or
                    advertising cookies. Essential cookies do not require your
                    consent under GDPR.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    6. Your Rights (GDPR)
                  </h3>
                  <p className="leading-relaxed mb-3">
                    Under the General Data Protection Regulation (GDPR), you
                    have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Right of Access</strong> - Request a copy of your
                      personal data
                    </li>
                    <li>
                      <strong>Right to Rectification</strong> - Request
                      correction of inaccurate data
                    </li>
                    <li>
                      <strong>Right to Erasure</strong> - Request deletion of
                      your personal data
                    </li>
                    <li>
                      <strong>Right to Restriction</strong> - Request
                      restriction of processing
                    </li>
                    <li>
                      <strong>Right to Data Portability</strong> - Receive your
                      data in a portable format
                    </li>
                    <li>
                      <strong>Right to Object</strong> - Object to processing of
                      your personal data
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    To exercise any of these rights, please contact us at
                    office@revodro.net.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    7. Data Security
                  </h3>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational
                    measures to protect your personal data against unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms of Use */}
            <div id="terms" className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3748] mb-6 pb-2 border-b border-[#E2E8F0]">
                Terms of Use
              </h2>

              <div className="prose prose-gray max-w-none text-[#4A5568] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    1. Acceptance of Terms
                  </h3>
                  <p className="leading-relaxed">
                    By accessing and using this website, you accept and agree to
                    be bound by these Terms of Use. If you do not agree with any
                    part of these terms, please do not use this website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    2. Intellectual Property
                  </h3>
                  <p className="leading-relaxed">
                    All content on this website, including but not limited to
                    text, graphics, logos, images, and software, is the property
                    of Revodro Tech AG or its content suppliers and is protected
                    by Swiss and international copyright laws. Unauthorized use,
                    reproduction, or distribution of this content is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    3. Use of Website
                  </h3>
                  <p className="leading-relaxed mb-3">
                    You agree to use this website only for lawful purposes and
                    in a manner that does not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Infringe the rights of others or restrict their use of the
                      website
                    </li>
                    <li>
                      Violate any applicable laws, regulations, or codes of
                      conduct
                    </li>
                    <li>
                      Attempt to gain unauthorized access to any part of the
                      website
                    </li>
                    <li>
                      Introduce viruses or other malicious software
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    4. Links to Third-Party Websites
                  </h3>
                  <p className="leading-relaxed">
                    This website may contain links to third-party websites. We
                    are not responsible for the content, privacy policies, or
                    practices of these external sites. Accessing linked websites
                    is at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    5. Modifications
                  </h3>
                  <p className="leading-relaxed">
                    Revodro Tech AG reserves the right to modify these Terms of
                    Use at any time. Changes will be effective immediately upon
                    posting on this website. Your continued use of the website
                    constitutes acceptance of any modifications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    6. Governing Law
                  </h3>
                  <p className="leading-relaxed">
                    These Terms of Use are governed by and construed in
                    accordance with the laws of Switzerland. Any disputes
                    arising from these terms shall be subject to the exclusive
                    jurisdiction of the courts of Zurich, Switzerland.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div id="disclaimer" className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3748] mb-6 pb-2 border-b border-[#E2E8F0]">
                Disclaimer
              </h2>

              <div className="prose prose-gray max-w-none text-[#4A5568] space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    1. General Information
                  </h3>
                  <p className="leading-relaxed">
                    The information provided on this website is for general
                    informational purposes only and is intended for B2B
                    (business-to-business) use. It does not constitute
                    professional advice, medical guidance, or regulatory
                    recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    2. Product Information
                  </h3>
                  <p className="leading-relaxed">
                    Product descriptions, specifications, and application
                    information are provided for reference only. Actual product
                    characteristics may vary. Customers are responsible for
                    verifying product suitability for their specific
                    applications and ensuring compliance with applicable
                    regulations in their target markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    3. No Medical or Nutritional Advice
                  </h3>
                  <p className="leading-relaxed">
                    Nothing on this website should be interpreted as medical,
                    nutritional, or health advice. The functional ingredients we
                    supply are intended for use by qualified food and supplement
                    manufacturers. End consumers should consult healthcare
                    professionals for health-related decisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    4. Limitation of Liability
                  </h3>
                  <p className="leading-relaxed">
                    To the fullest extent permitted by law, Revodro Tech AG
                    shall not be liable for any direct, indirect, incidental,
                    consequential, or special damages arising from the use of
                    this website or reliance on any information provided herein.
                    We make no warranties, express or implied, regarding the
                    accuracy, completeness, or reliability of the content.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-3">
                    5. Accuracy of Information
                  </h3>
                  <p className="leading-relaxed">
                    While we strive to keep information accurate and up-to-date,
                    we make no representations about the completeness or
                    accuracy of the content. Information may be changed or
                    updated without notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 bg-[#E8F5E9] rounded-lg">
              <h3 className="text-lg font-semibold text-[#1E5631] mb-3">
                Questions?
              </h3>
              <p className="text-[#4A5568]">
                If you have any questions about this Legal Notice, please
                contact us at{" "}
                <a
                  href="mailto:office@revodro.net"
                  className="text-[#1E5631] font-semibold hover:underline"
                >
                  office@revodro.net
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
