import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/solutions" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-solutions.jpeg"
              alt="Solutions & Resources"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/50" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              Solutions
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl">
              End-to-end support for your functional ingredient needs, from selection to delivery
            </p>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Our Solutions
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Comprehensive support across the ingredient lifecycle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="p-0 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/ingredient-selection.jpg"
                    alt="Magnifying glass representing ingredient selection"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                    Ingredient Selection & Substitution
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    Matching based on application targets, cost range, and target
                    market requirements. We help you find the optimal ingredients
                    for your specific formulation needs.
                  </p>
                </div>
              </Card>

              <Card className="p-0 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/documents-compliance.jpg"
                    alt="Organized documents and files for compliance"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                    Document Package & Compliance Preparation
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    Collaboration on Spec/COA/SDS/Declaration documents tailored
                    to your target market's regulatory requirements and
                    documentation standards.
                  </p>
                </div>
              </Card>

              <Card className="p-0 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/warehouse-supply-chain.jpg"
                    alt="Warehouse supply chain with organized inventory"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                    Supply Coordination & Delivery
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    End-to-end logistics management from supplier coordination to
                    final delivery, ensuring timely and efficient supply chain
                    operations with organized warehouse systems.
                  </p>
                </div>
              </Card>

              <Card className="p-0 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/images/collaboration-handshake.jpg"
                    alt="Business collaboration and partnership"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                    Supply Chain Delivery Collaboration
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    Lead time coordination, batch planning, shipping logistics,
                    and customs clearance document collaboration for seamless
                    delivery.
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                  Quality Communication Mechanism
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Batch consistency monitoring, deviation communication, and
                  traceability support to maintain quality standards throughout
                  the supply chain.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Cooperation Process */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Typical Cooperation Process
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                A streamlined approach from initial inquiry to ongoing
                optimization
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "01",
                  title: "Confirm Application Scenario and Target Market",
                  desc: "Understanding your product requirements, target applications, and regulatory environment to provide tailored recommendations.",
                },
                {
                  step: "02",
                  title:
                    "Provide Ingredient Recommendation List and Document Pre-review",
                  desc: "Assessing availability, key compliance points, and suitability for your specific application and market requirements.",
                },
                {
                  step: "03",
                  title: "Sample and Application Verification",
                  desc: "Testing inclusion levels, flavor profiles, and stability points to ensure optimal performance in your formulation.",
                },
                {
                  step: "04",
                  title: "Quotation, Supply, and Delivery Plan",
                  desc: "Detailed planning for batch quantities, lead times, and shipping logistics to meet your production schedule.",
                },
                {
                  step: "05",
                  title: "Quality Communication and Continuous Optimization",
                  desc: "Ongoing support for re-ordering, solution iteration, and continuous improvement based on your feedback and evolving needs.",
                },
              ].map((item) => (
                <Card key={item.step} className="p-6 lg:p-8 bg-white border border-[#E2E8F0]">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#1E5631] text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#2D3748]">
                        {item.title}
                      </h3>
                      <p className="text-[#4A5568] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
