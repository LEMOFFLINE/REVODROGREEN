"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiry: formData.get("inquiry"),
      product: formData.get("product"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader currentPage="/contact" />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-contact.jpeg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/50" />
          </div>
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mt-4 max-w-xl">
              Get in touch to learn more about our solutions and ingredients
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-[#2D3748]">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <Card className="p-6 border border-[#E2E8F0]">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#1E5631]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-[#2D3748]">
                          Address
                        </h3>
                        <p className="text-[#4A5568] text-sm">
                          Stockerstrasse 43
                          <br />
                          8002 Zurich
                          <br />
                          Switzerland
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border border-[#E2E8F0]">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#1E5631]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-[#2D3748]">
                          Email
                        </h3>
                        <a
                          href="mailto:office@revodro.net"
                          className="text-[#1E5631] hover:underline text-sm"
                        >
                          office@revodro.net
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-[#F7FAFC] border border-[#E2E8F0]">
                    <h3 className="font-semibold mb-3 text-[#2D3748]">
                      Office Hours
                    </h3>
                    <p className="text-[#4A5568] text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM CET
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 border-2 border-[#E2E8F0]">
                  <h2 className="text-2xl font-bold mb-6 text-[#2D3748]">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-[#2D3748]"
                        >
                          Name *
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-semibold text-[#2D3748]"
                        >
                          Company
                        </label>
                        <Input id="company" name="company" placeholder="Company name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-[#2D3748]"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-[#2D3748]"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+41 XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry"
                        className="text-sm font-semibold text-[#2D3748]"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        className="w-full h-10 px-3 rounded-md border border-[#E2E8F0] bg-white text-sm"
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="sample">Sample Request</option>
                        <option value="quote">Quotation Request</option>
                        <option value="document">
                          Document Package Request
                        </option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="product"
                        className="text-sm font-semibold text-[#2D3748]"
                      >
                        Product of Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        className="w-full h-10 px-3 rounded-md border border-[#E2E8F0] bg-white text-sm"
                      >
                        <option value="">Select a product line</option>
                        <option value="hmo">
                          HMO (Human Milk Oligosaccharides)
                        </option>
                        <option value="plant">
                          Natural Plant Flavors & Concentrates
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-[#2D3748]"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide details about your inquiry, including target market, application scenario, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#1E5631] hover:bg-[#2D5016] text-white font-semibold disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-[#E8F5E9] text-[#1E5631] rounded-md text-sm">
                        Thank you for your message! We will get back to you within 1-2 business days.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm">
                        {errorMessage || "Failed to send message. Please try again."}
                      </div>
                    )}

                    <p className="text-xs text-[#4A5568]">
                      By submitting this form, you agree to our Privacy Policy.
                      We will use your information to respond to your inquiry
                      and may contact you about our products and services.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
