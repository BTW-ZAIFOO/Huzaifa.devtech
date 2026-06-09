import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Fail early if fields are omitted
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Deliver form details directly to your email address
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "huzaifazaifi25@gmail.com", // Your designated email receiver
      subject: `New Portfolio Message from ${name}`,
      replyTo: email, // Pressing reply inside your email app replies to the sender directly
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Message Received</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}