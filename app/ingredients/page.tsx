import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function IngredientsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/ingredients" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-ingredients.jpeg"
              alt="Ingredients & Products"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/50" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              Ingredients & Products
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl">
              Exclusive authorized partnerships in Europe for premium functional ingredients
            </p>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Our Product Lines
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Premium functional ingredients backed by exclusive European partnerships
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* HMO Card */}
              <Card className="overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow rounded-xl !p-0 !gap-0 flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/images/hmo-molecule.jpg"
                    alt="HMO Molecular Structure"
                    fill
                    className="object-cover"
                  />
                  {/* Bottom fade to white */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8 lg:p-10 -mt-4 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#1E5631] text-sm font-semibold rounded-full mb-4">
                      Exclusive Authorization in Europe
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                      HMO (Human Milk Oligosaccharides)
                    </h3>
                    <p className="text-[#4A5568] leading-relaxed mb-4">
                      HMOs possess significant application value in infant
                      nutrition and gut health, continuing to expand into broader
                      nutritional food directions.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-[#2D3748]">
                        Key Products:
                      </h4>
                      <ul className="text-[#4A5568] space-y-1">
                        <li>{"2'-FL"}</li>
                        <li>{"3'-SL"}</li>
                        <li>LNnT</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto pt-4">
                    <Button
                      asChild
                      className="bg-[#1E5631] hover:bg-[#163d23] text-white"
                    >
                      <Link href="/ingredients/hmo">View HMO Product Line</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#1E5631] text-[#1E5631] hover:bg-[#E8F5E9] bg-transparent"
                    >
                      <Link href="/contact">Request Document Package</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Natural Plant Flavors Card */}
              <Card className="overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow rounded-xl !p-0 !gap-0 flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src="/images/plant-flavors-citrus.jpg"
                    alt="Natural Citrus Fruits"
                    fill
                    className="object-cover"
                  />
                  {/* Bottom fade to white */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-8 lg:p-10 -mt-4 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#1E5631] text-sm font-semibold rounded-full mb-4">
                      Exclusive Authorization in Europe
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                      Natural Plant Flavors & Full-Effect Concentrates
                    </h3>
                    <p className="text-[#4A5568] leading-relaxed mb-4">
                      Natural flavor ingredients including flowers, tea, coffee,
                      herbs, fruits, and vegetables in various forms.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-[#2D3748]">
                        Categories:
                      </h4>
                      <ul className="text-[#4A5568] space-y-1">
                        <li>Floral</li>
                        <li>Tea</li>
                        <li>Coffee & Cocoa</li>
                        <li>Herbal Concentrates & Juices</li>
                        <li>Fruit & Vegetable NFC Puree/Juice</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto pt-4">
                    <Button
                      asChild
                      className="bg-[#1E5631] hover:bg-[#163d23] text-white"
                    >
                      <Link href="/ingredients/plant-flavors">
                        View Plant Flavor Product Line
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#1E5631] text-[#1E5631] hover:bg-[#E8F5E9] bg-transparent"
                    >
                      <Link href="/contact">Download Catalog</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Applications Gallery */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#165531]">
                Product Applications
              </h2>
              <p className="text-xl text-[#203748] max-w-2xl mx-auto">
                Our functional ingredients enable innovative products across multiple categories
              </p>
            </div>

            <div className="space-y-16">
              {/* Ice Cream & Frozen Treats */}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/products-grid.png"
                  alt="Ice Cream and Frozen Desserts with Natural Ingredients"
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Botanical Yogurt */}
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="/images/products-yogurt.jpeg"
                    alt="Botanical Yogurt and Plant-Based Dairy Products"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                {/* Herbal Beverages */}
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src="/images/products-beverages.jpeg"
                    alt="Natural Herbal Beverages and Drinks"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Support */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#165531]">
                Document Package Support
              </h2>
              <p className="text-xl text-[#203748] leading-relaxed mb-8">
                We collaborate to provide comprehensive documentation based on
                client target market demands, including Specifications (Spec),
                Batch Certificates of Analysis (COA), Safety Data Sheets (SDS),
                and declaration documents. All compliance information is subject
                to the requirements of the target market's competent authorities
                and the supplier's formal documents.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#165531] hover:bg-[#1E5631] text-white font-bold px-10 py-7 rounded-lg"
              >
                <Link href="/quality">Learn About Quality & Compliance</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
