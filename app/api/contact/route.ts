import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      /* Dev fallback: log to console if credentials not configured */
      console.log("📧 Contact form submission (no mailer configured):", {
        name, email, subject, message,
      });
      return NextResponse.json({ success: true, dev: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    /* Mail to YOU */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: "mehrankhanciit@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0f0d;color:#e8f5ee;border-radius:12px;border:1px solid rgba(65,184,131,0.2)">
          <div style="background:linear-gradient(135deg,#41b883,#2d9768);padding:2px;border-radius:10px;margin-bottom:24px">
            <div style="background:#0a0f0d;border-radius:9px;padding:16px 20px">
              <h1 style="margin:0;font-size:20px;color:#41b883">New Contact Form Message</h1>
            </div>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(65,184,131,0.1);color:#8ab99b;font-size:13px;width:120px">From</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(65,184,131,0.1);font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(65,184,131,0.1);color:#8ab99b;font-size:13px">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(65,184,131,0.1);font-size:14px">
                <a href="mailto:${email}" style="color:#41b883">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#8ab99b;font-size:13px">Subject</td>
              <td style="padding:10px 0;font-size:14px">${subject}</td>
            </tr>
          </table>

          <div style="background:#111a15;border-radius:10px;padding:16px 20px;border:1px solid rgba(65,184,131,0.12)">
            <p style="margin:0 0 8px;font-size:12px;color:#8ab99b;text-transform:uppercase;letter-spacing:0.1em">Message</p>
            <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>

          <p style="margin-top:20px;font-size:12px;color:#8ab99b;text-align:center">
            Sent from your portfolio contact form at <strong style="color:#41b883">mehran.dev</strong>
          </p>
        </div>
      `,
    });

    /* Auto-reply to sender */
    await transporter.sendMail({
      from: `"Mehran Khan" <${user}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0f0d;color:#e8f5ee;border-radius:12px;border:1px solid rgba(65,184,131,0.2)">
          <div style="text-align:center;margin-bottom:28px">
            <div style="width:56px;height:56px;background:linear-gradient(135deg,#41b883,#2d9768);border-radius:14px;display:inline-flex;align-items:center;justify-content:center;font-size:22px;font-weight:900;color:white;margin-bottom:12px">M</div>
            <h1 style="margin:0;font-size:22px;color:#e8f5ee">Thanks for getting in touch!</h1>
          </div>

          <p style="color:#8ab99b;font-size:15px;line-height:1.7">Hi <strong style="color:#e8f5ee">${name}</strong>,</p>
          <p style="color:#8ab99b;font-size:15px;line-height:1.7">
            I received your message about <em style="color:#41b883">"${subject}"</em> and will get back to you
            within <strong style="color:#e8f5ee">24 hours</strong>.
          </p>

          <div style="background:#111a15;border-radius:10px;padding:16px 20px;border:1px solid rgba(65,184,131,0.12);margin:20px 0">
            <p style="margin:0 0 6px;font-size:12px;color:#8ab99b;text-transform:uppercase;letter-spacing:0.1em">Your message</p>
            <p style="margin:0;font-size:14px;line-height:1.7;color:#8ab99b;white-space:pre-wrap">${message}</p>
          </div>

          <p style="color:#8ab99b;font-size:15px;line-height:1.7">
            In the meantime, feel free to check out my{' '}
            <a href="https://github.com" style="color:#41b883">GitHub</a> or
            <a href="https://linkedin.com" style="color:#41b883;margin-left:4px">LinkedIn</a>.
          </p>

          <p style="color:#8ab99b;font-size:15px;line-height:1.7;margin-top:20px">
            Best,<br />
            <strong style="color:#e8f5ee">Mehran Khan</strong><br />
            <span style="color:#41b883;font-size:13px">Full Stack Developer</span>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
