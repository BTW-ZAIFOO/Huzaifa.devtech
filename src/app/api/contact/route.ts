import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, reason } = body;

    // ==========================================
    // BRANCH A: WHATSAPP ACCESS PERMISSION REQUEST
    // ==========================================
    if (reason) {
      if (!name || !email) {
        return NextResponse.json(
          { error: "Missing required fields for WhatsApp request" },
          { status: 400 }
        );
      }

      // Clean the string to build a reliable reply button
      const sanitizedContact = email.replace(/[^a-zA-Z0-9@.]/g, "");
      const openChatLink = sanitizedContact.includes("@") 
        ? `mailto:${sanitizedContact}` 
        : `https://wa.me/${sanitizedContact.replace(/\+/g, "")}?text=Hi%20${encodeURIComponent(name)},%20I%20reviewed%20your%20portfolio%20WhatsApp%20request.`;

      const whatsappData = await resend.emails.send({
        from: "WhatsApp Gatekeeper <onboarding@resend.dev>",
        to: "huzaifazaifi25@gmail.com",
        subject: `🚨 WhatsApp Access Requested by ${name}`,
        replyTo: email,
        html: `
          <div style="font-family: sans-serif; max-width: 550px; padding: 25px; border: 1px solid #10b981; border-radius: 16px; background-color: #09090b; color: #ffffff;">
            <h2 style="color: #10b981; margin-top: 0; font-size: 20px; border-bottom: 1px solid #27272a; padding-bottom: 12px;">WhatsApp Access Request</h2>
            
            <p style="margin: 16px 0 8px 0;"><strong style="color: #a1a1aa;">Requester Name:</strong> <span style="font-size: 15px; color: #fff;">${name}</span></p>
            <p style="margin: 0 0 8px 0;"><strong style="color: #a1a1aa;">Provided Details:</strong> <span style="font-size: 15px; color: #fff;">${email}</span></p>
            
            <div style="background-color: #18181b; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
              <p style="margin: 0; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #a1a1aa;">Purpose of Chat:</p>
              <p style="margin: 6px 0 0 0; font-size: 14px; line-height: 1.5; color: #e4e4e7;">"${reason}"</p>
            </div>
            
            <p style="color: #71717a; font-size: 13px; line-height: 1.4;">Click below to safely start a conversation with this user:</p>
            
            <a href="${openChatLink}" target="_blank" style="display: inline-block; text-align: center; margin-top: 12px; padding: 14px 28px; background-color: #10b981; color: #000000; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 14px;">
              Start Conversation Chat
            </a>
          </div>
        `,
      });

      return NextResponse.json({ success: true, data: whatsappData }, { status: 200 });
    }

    // ==========================================
    // BRANCH B: YOUR ORIGINAL STANDARD MESSAGE CODE
    // ==========================================
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