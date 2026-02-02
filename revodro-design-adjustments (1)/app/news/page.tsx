import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/news" />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              News & Insights
            </h1>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Content Categories
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Expert insights and updates across key topics
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  Ingredient Trends
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Latest developments in HMOs, natural flavors, plant functional
                  components, and emerging ingredients in the health and
                  nutrition sector.
                </p>
                <p className="text-sm text-[#4A5568]">
                  Topics: Market trends, new ingredients, scientific research,
                  consumer preferences
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  Application Insights
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Formulation points for beverages, dairy, new-style tea, child
                  nutrition, and other application categories.
                </p>
                <p className="text-sm text-[#4A5568]">
                  Topics: Formulation tips, ingredient combinations, processing
                  considerations, quality points
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  Compliance Tips
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Checklists for document preparation in different markets.
                  Summary only, not legal advice.
                </p>
                <p className="text-sm text-[#4A5568]">
                  Topics: Document requirements, regulatory updates, compliance
                  checklists, best practices
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3 text-[#2D3748]">
                  Revodro Updates
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Company news including exhibitions, partnerships, product line
                  updates, and industry participation.
                </p>
                <p className="text-sm text-[#4A5568]">
                  Topics: Trade shows, new partnerships, product launches, team
                  updates
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto p-8 lg:p-12 text-center bg-white border border-[#E2E8F0]">
              <h2 className="text-2xl font-bold mb-4 text-[#2D3748]">
                Content Coming Soon
              </h2>
              <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
                We're currently developing our insights library. Check back soon
                for articles, whitepapers, and updates on the latest trends in
                functional ingredients and nutrition science.
              </p>
              <p className="text-[#4A5568]">
                In the meantime, feel free to{" "}
                <Link
                  href="/contact"
                  className="text-[#1E5631] hover:underline font-semibold"
                >
                  contact us
                </Link>{" "}
                with any questions or to request specific information about our
                ingredients and solutions.
              </p>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup Placeholder */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0f3d1f] via-[#1E5631] to-[#4a7c59] text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Subscribe to receive the latest insights, trends, and updates from
              Revodro
            </p>
            <p className="text-white/60">Newsletter subscription coming soon</p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
