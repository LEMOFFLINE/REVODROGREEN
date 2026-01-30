import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/about" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-about.jpeg"
              alt="About RevoDro"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/50" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              About Us
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl">
              Headquartered in Zurich, Switzerland, connecting global innovation with European markets through specialized ingredient solutions
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">
                Company Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  Revodro Tech AG is located in Zurich, Switzerland
                  (Stockerstrasse 43, 8002 Zurich, Switzerland). We specialize
                  in international trade and solution services for functional
                  ingredients in the health and nutrition sector, connecting
                  global innovative ingredients with client application
                  scenarios.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  We provide brands, R&D teams, and manufacturers with more
                  controllable selection, documentation, and delivery
                  coordination. We have established formal authorized
                  partnerships with several innovative ingredient companies and
                  act as their exclusive authorized partner in the European
                  market, providing clients with official channels and project
                  implementation support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 lg:py-24 bg-[#F7FAFC]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-10 bg-white border-2 border-[#E2E8F0] hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#43A047] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-[#165531]">
                    Mission
                  </h3>
                  <p className="text-[#203748] leading-relaxed text-base">
                    To make ingredient selection, compliance preparation, and
                    delivery processes more controllable.
                  </p>
                </Card>
                <Card className="p-10 bg-white border-2 border-[#E2E8F0] hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8F81] to-[#FF7A6B] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-[#165531]">
                    Vision
                  </h3>
                  <p className="text-[#203748] leading-relaxed text-base">
                    To drive healthier product innovation together with
                    partners.
                  </p>
                </Card>
                <Card className="p-10 bg-white border-2 border-[#E2E8F0] hover:border-[#4CAF50] hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D08D60] to-[#C07D50] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-[#165531]">
                    Values
                  </h3>
                  <ul className="text-[#203748] leading-relaxed space-y-2 text-base">
                    <li>Scientific Rigor</li>
                    <li>Transparent Compliance</li>
                    <li>Long-term Partnership</li>
                    <li>Result-Oriented</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#2D3748]">
                Core Capabilities
              </h2>
              <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                Comprehensive solutions across the ingredient lifecycle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                  Ingredient Selection & Evaluation
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Technology, application, compliance, stability, and supply
                  feasibility.
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                  International Trade & Delivery
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Multi-market document and logistics collaboration.
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                  Application Support
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Samples, application advice, formulation directions, and
                  collaborative verification.
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#E2E8F0] hover:border-[#1E5631]/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#2D3748]">
                  Compliance & Quality
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Standardized document packages, quality communication,
                  traceability, and batch consistency collaboration.
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
