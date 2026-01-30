import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PlantFlavorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/ingredients" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Natural Plant Flavors & Full-Effect Concentrates
            </h1>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Product Categories
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Diverse natural flavor solutions for food and beverage
                applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Floral", desc: "Delicate floral essences and concentrates" },
                { title: "Tea", desc: "Premium tea extracts and concentrates" },
                { title: "Coffee & Cocoa", desc: "Rich coffee and cocoa flavor solutions" },
                { title: "Herbal Concentrates", desc: "Concentrated herbal flavor extracts" },
                { title: "Herbal Juices", desc: "Fresh-pressed herbal juice preparations" },
                { title: "Fruit & Vegetable NFC Puree/Juice", desc: "Not-from-concentrate natural fruit and vegetable products" },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3 text-[#2D3748]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568]">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Scenarios */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Typical Application Scenarios
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Versatile ingredients for modern food and beverage innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Beverages", desc: "Flavor water, sparkling beverages, fruit tea" },
                { title: "New-style Tea Drinks", desc: "Milk tea, fruit tea, freshly mixed beverages" },
                { title: "Dairy", desc: "Dairy drinks, fermented milk, plant-based alternatives" },
                { title: "Coffee & Cocoa Beverages", desc: "Coffee drinks, cocoa beverages, specialty blends" },
                { title: "Frozen Desserts", desc: "Ice cream, mousse, frozen treats" },
                { title: "Low-alcohol Beverages", desc: "By regulation and formulation positioning" },
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

        {/* Document Support */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">
                Document Support
              </h2>
              <Card className="p-8 border-2 border-[#E2E8F0]">
                <p className="text-[#4A5568] leading-relaxed mb-6">
                  We provide specification information, necessary documents, and
                  application advice tailored to your target market and
                  formulation needs. Cooperation confirmation documents can be
                  provided upon request.
                </p>
                <p className="text-sm text-[#4A5568] italic">
                  All documentation is subject to supplier formal documents and
                  target market regulatory requirements.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Explore Natural Flavor Solutions
            </h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Discover how our natural plant flavors can enhance your product
              portfolio
            </p>
            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold px-8"
              >
                <Link href="/resources">Download Catalog</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
              >
                <Link href="/contact">Request Authorization Proof</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
