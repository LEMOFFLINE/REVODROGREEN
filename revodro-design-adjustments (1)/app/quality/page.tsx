import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function QualityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/quality" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Quality & Compliance
            </h1>
          </div>
        </section>

        {/* Principles */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Quality & Compliance Principles
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Our commitment to excellence and regulatory integrity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center border-2 border-[#E2E8F0]">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#1E5631]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3748]">
                  Traceable
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Batches and documents are fully traceable throughout the
                  supply chain
                </p>
              </Card>

              <Card className="p-8 text-center border-2 border-[#E2E8F0]">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#1E5631]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3748]">
                  Verifiable
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Key information is verifiable via formal documents and
                  certification
                </p>
              </Card>

              <Card className="p-8 text-center border-2 border-[#E2E8F0]">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-[#1E5631]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3748]">
                  Document Supportable
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Collaborate to provide document packages per market demand
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Document Package List */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">
                Document Package List
              </h2>
              <p className="text-lg text-[#4A5568] mb-8">
                Available upon request, tailored to your target market
                requirements
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white border border-[#E2E8F0]">
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    Specification
                  </h3>
                  <p className="text-[#4A5568] text-sm">
                    Detailed product specifications and technical parameters
                  </p>
                </Card>

                <Card className="p-6 bg-white border border-[#E2E8F0]">
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    COA (Certificate of Analysis)
                  </h3>
                  <p className="text-[#4A5568] text-sm">
                    Batch-specific analytical certificates
                  </p>
                </Card>

                <Card className="p-6 bg-white border border-[#E2E8F0]">
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    SDS (Safety Data Sheet)
                  </h3>
                  <p className="text-[#4A5568] text-sm">
                    Safety and handling information
                  </p>
                </Card>

                <Card className="p-6 bg-white border border-[#E2E8F0]">
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    Declaration Documents
                  </h3>
                  <p className="text-[#4A5568] text-sm">
                    Allergens, GMO, Irradiation, Heavy Metals, etc. (as
                    requested)
                  </p>
                </Card>

                <Card className="p-6 bg-white border border-[#E2E8F0] md:col-span-2">
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    Compliance Status Summary
                  </h3>
                  <p className="text-[#4A5568] text-sm">
                    Based on target market and document availability
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto p-8 bg-[#F7FAFC] border-2 border-[#E2E8F0]">
              <h2 className="text-2xl font-bold mb-4 text-[#2D3748]">
                Disclaimer
              </h2>
              <p className="text-[#4A5568] leading-relaxed">
                The regulatory and compliance information provided on this
                website is for general reference only and does not constitute
                legal advice or regulatory commitments. Specific matters are
                subject to the requirements of the target market's competent
                authorities and the supplier's formal documents.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Documentation Support?
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Contact us to discuss your compliance requirements and
              documentation needs
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-8"
            >
              <Link href="/contact">Request Document Package</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
