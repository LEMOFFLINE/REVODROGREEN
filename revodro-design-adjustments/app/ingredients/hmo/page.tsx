import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HMOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/ingredients" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              HMO (Human Milk Oligosaccharides)
            </h1>
          </div>
        </section>

        {/* Product List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Representative Molecules
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Premium HMO ingredients for advanced nutrition applications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  2'-FL
                </h3>
                <p className="text-[#4A5568]">
                  2'-Fucosyllactose - the most abundant HMO in human milk
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  3'-SL
                </h3>
                <p className="text-[#4A5568]">
                  3'-Sialyllactose - supports immune and cognitive function
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  LNnT
                </h3>
                <p className="text-[#4A5568]">
                  Lacto-N-neotetraose - promotes gut health and microbiome
                  balance
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Scenarios */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Application Scenarios
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Versatile solutions across nutrition categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Infant Nutrition",
                  desc: "Infant formula and follow-on formula applications",
                },
                {
                  title: "Child Nutrition",
                  desc: "Growing-up milk and children's nutrition products",
                },
                {
                  title: "Adult Nutrition",
                  desc: "Dietary supplements and functional nutrition",
                },
                {
                  title: "Special Nutritional Foods",
                  desc: "By regulatory category and specific health needs",
                },
                {
                  title: "Functional Foods & Beverages",
                  desc: "By formulation positioning and health claims",
                },
                {
                  title: "Combination Solutions",
                  desc: "Based on application targets and market requirements",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="p-6 bg-white border border-[#E2E8F0]"
                >
                  <h3 className="text-lg font-bold mb-2 text-[#2D3748]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Document Support */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">
                Compliance & Document Support
              </h2>
              <Card className="p-8 border-2 border-[#E2E8F0]">
                <p className="text-[#4A5568] leading-relaxed mb-6">
                  We can collaborate to provide Specifications (Spec), Batch
                  Certificates of Analysis (COA), Safety Data Sheets (SDS), and
                  declaration documents based on client target market demands.
                  We can also provide summaries of compliance status.
                </p>
                <p className="text-sm text-[#4A5568] italic">
                  All compliance information is subject to the requirements of
                  the target market's competent authorities and the supplier's
                  formal documents.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Integrate HMO Into Your Products?
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Contact us to discuss your HMO requirements and receive
              comprehensive support
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-8"
              >
                <Link href="/contact">Request Document Package</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
