import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/partners" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-partners.jpeg"
              alt="Our Partners"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/50" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              Partners
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl">
              Building trusted partnerships for innovation in health and nutrition
            </p>
          </div>
        </section>

        {/* Partnership Philosophy */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">
                Partnership Philosophy
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed">
                We adhere to the following principles with our partners: R&D and
                industrialization capabilities, documentation systems, quality
                management, and long-term innovation roadmaps.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Showcase */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Partner Showcase
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Exclusive authorized partnerships in Europe
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Partner 1: SYNAURA */}
              <Card className="p-8 lg:p-10 border-2 border-[#E2E8F0] hover:border-[#4CAF50] bg-white flex flex-col transition-all duration-300 hover:shadow-xl">
                <div className="flex-1">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src="/images/partner-synaura.jpeg"
                      alt="SYNAURA"
                      width={300}
                      height={150}
                      className="h-24 w-auto"
                    />
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#1E5631] text-sm font-semibold rounded-full mb-4">
                    Exclusive Authorized Partner in Europe
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#165531]">
                    SYNAURA (HMO)
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed mb-6">
                    Revodro acts as the exclusive authorized partner for its HMO
                    products in the European market, responsible for product
                    promotion, customer support, and delivery coordination.
                    Certificates of authorization can be provided upon request.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-[#2D3748]">
                      Key Products:
                    </p>
                    <ul className="text-[#4A5568] text-sm space-y-1">
                      <li>{"2'-FL (2'-Fucosyllactose)"}</li>
                      <li>{"3'-SL (3'-Sialyllactose)"}</li>
                      <li>LNnT (Lacto-N-neotetraose)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end mt-auto">
                  <Button
                    asChild
                    className="bg-[#1E5631] hover:bg-[#163d23] text-white"
                  >
                    <Link href="/contact">Request Authorization Certificate</Link>
                  </Button>
                </div>
              </Card>

              {/* Partner 2: UNIWIN */}
              <Card className="p-8 lg:p-10 border-2 border-[#E2E8F0] hover:border-[#4CAF50] bg-white flex flex-col transition-all duration-300 hover:shadow-xl">
                <div className="flex-1">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src="/images/partner-uniwin.jpeg"
                      alt="UNIWIN"
                      width={300}
                      height={150}
                      className="h-24 w-auto"
                    />
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#1E5631] text-sm font-semibold rounded-full mb-4">
                    Exclusive Authorized Partner in Europe
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#165531]">
                    UNIWIN (Natural Flavors)
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed mb-6">
                    Revodro acts as the exclusive authorized partner for Natural
                    Plant Flavors & Full-Effect Concentrates in the European
                    market, supporting selection advice, sample applications,
                    and delivery coordination. Cooperation confirmation
                    documents can be provided upon request.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-[#2D3748]">
                      Product Categories:
                    </p>
                    <ul className="text-[#4A5568] text-sm space-y-1">
                      <li>Floral Extracts</li>
                      <li>Tea Concentrates</li>
                      <li>Coffee & Cocoa</li>
                      <li>Herbal Concentrates & Juices</li>
                      <li>Fruit & Vegetable NFC Puree</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end mt-auto">
                  <Button
                    asChild
                    className="bg-[#1E5631] hover:bg-[#163d23] text-white"
                  >
                    <Link href="/contact">Request Cooperation Documents</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Values */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#2D3748]">
                What We Look For in Partners
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center border border-[#E2E8F0]">
                <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                  R&D Capabilities
                </h3>
                <p className="text-[#4A5568] text-sm">
                  Strong research and development with proven innovation
                </p>
              </Card>
              <Card className="p-6 text-center border border-[#E2E8F0]">
                <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                  Industrialization
                </h3>
                <p className="text-[#4A5568] text-sm">
                  Robust manufacturing and scalability
                </p>
              </Card>
              <Card className="p-6 text-center border border-[#E2E8F0]">
                <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                  Documentation Systems
                </h3>
                <p className="text-[#4A5568] text-sm">
                  Comprehensive quality and compliance documentation
                </p>
              </Card>
              <Card className="p-6 text-center border border-[#E2E8F0]">
                <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                  Innovation Roadmap
                </h3>
                <p className="text-[#4A5568] text-sm">
                  Long-term vision and continuous product development
                </p>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
