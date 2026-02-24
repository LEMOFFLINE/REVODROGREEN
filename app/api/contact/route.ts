import { BrevoClient } from "@getbrevo/brevo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, company, email, phone, inquiry, product, message } = body;

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const inquiryTypes: Record<string, string> = {
      sample: "Sample Request",
      quote: "Quotation Request",
      document: "Document Package Request",
      partnership: "Partnership Inquiry",
      general: "General Inquiry",
    };

    const productTypes: Record<string, string> = {
      hmo: "HMO (Human Milk Oligosaccharides)",
      plant: "Natural Plant Flavors & Concentrates",
      other: "Other",
    };

    const client = new BrevoClient({ apiKey });

    const result = await client.transactionalEmails.sendTransacEmail({
      sender: { name: "Revodro Website", email: "postmaster@revodro.net" },
      to: [{ email: "office@revodro.net" }],
      replyTo: { email },
      subject: `[Website Inquiry] ${inquiryTypes[inquiry] || inquiry} from ${name}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Inquiry Type</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${inquiryTypes[inquiry] || inquiry}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Product Interest</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${product ? productTypes[product] || product : "Not specified"}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px;">Message</h3>
        <div style="padding: 15px; background-color: #f5f5f5; border-radius: 5px; white-space: pre-wrap;">${message}</div>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
        <p style="color: #666; font-size: 12px;">This email was sent from the Revodro website contact form.</p>
      `,
    });

    return NextResponse.json({ success: true, id: result?.messageId });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
