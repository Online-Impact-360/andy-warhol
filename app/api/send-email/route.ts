import { sanitizeSubmission } from "@/app/lib/sanitize";
import { SubmissionSchema } from "@/app/lib/validation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sanitized = sanitizeSubmission(body);
    const parsed = SubmissionSchema.safeParse(sanitized);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in fieldErrors)) {
          fieldErrors[key] = issue.message;
        }
      });
      return NextResponse.json({ success: false, errors: fieldErrors }, { status: 400 });
    }
    const data = parsed.data;

    // Configure Nodemailer transporter
    const host = process.env.EMAIL_HOST as string | undefined;
    const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT as string, 10) : 587;
    const secure = port === 465;
    const user = process.env.EMAIL_USER as string | undefined;
    const pass = process.env.EMAIL_PASS as string | undefined;
    const to = (process.env.RECIPIENT_EMAIL as string | undefined) || user;
    if (!host || !user || !pass || !to) {
      return NextResponse.json({ success: false, message: "Email configuration missing" }, { status: 500 });
    }
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // }
    });

    // Verify transporter configuration
    await transporter.verify();

    // HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Private Access Request</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111; }
          .wrap { max-width: 640px; margin: 0 auto; padding: 16px; }
          .row { margin-bottom: 8px; }
          .label { font-weight: 600; }
          .box { background:#f7f7f7; padding:12px; border-radius:6px; white-space:pre-wrap }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h2>New Private Access Request</h2>
          <div class="row"><span class="label">Full Name:</span> ${data.fullName}</div>
          <div class="row"><span class="label">Email:</span> ${data.email}</div>
          <div class="row"><span class="label">Role:</span> ${data.role}</div>
          <div class="row"><span class="label">City:</span> ${data.city || '-'}</div>
          <div class="row"><span class="label">Country:</span> ${data.country || '-'}</div>
          <div class="row"><span class="label">Message:</span></div>
          <div class="box">${data.message}</div>
        </div>
      </body>
      </html>
    `;

    // Email content (internal notification)
    const mailOptions = {
      from: process.env.EMAIL_FROM || user,
      to,
      subject: "New Private Access Request",
      html: htmlContent,
      text: `New Private Access Request\n\nFull Name: ${data.fullName}\nEmail: ${data.email}\nRole: ${data.role}\nCity: ${data.city || '-'}\nCountry: ${data.country || '-'}\n\nMessage:\n${data.message}`,
      replyTo: data.email,
    };


    await transporter.sendMail(mailOptions);

    //NDA functionality temporarily disabled
    // // Optional: Send confirmation email to requester with NDA link
    // const ndaLink = process.env.NDA_LINK as string | undefined;
    // const confirmHtml = `
    //   <!DOCTYPE html>
    //   <html>
    //   <head>
    //     <meta charset="utf-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1">
    //     <title>Your Private Access Request</title>
    //   </head>
    //   <body style="font-family: Arial, sans-serif; color: #111;">
    //     <div style="max-width:640px;margin:0 auto;padding:16px;">
    //       <h2>Thank you, ${data.fullName}</h2>
    //       <p>We received your request for private access regarding the Warhol artwork.</p>
    //       ${ndaLink ? `<p>Please review and sign the NDA to proceed:</p>
    //       <p><a href="${ndaLink}" style="color:#c6a556;">Open NDA</a></p>` : `<p>We will contact you shortly with next steps.</p>`}
    //     </div>
    //   </body>
    //   </html>
    // `;

    // const confirmOptions = {
    //   from: process.env.EMAIL_FROM || user,
    //   to: data.email,
    //   subject: 'We received your request',
    //   html: confirmHtml,
    //   text: `We received your request. ${ndaLink ? `Please open the NDA: ${ndaLink}` : ''}`,
    // };

    // try {
    //   await transporter.sendMail(confirmOptions);
    // } catch {
    //   // Silently ignore confirmation failures to not block the main flow
    // }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: `Failed to send email: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: `Failed to send email: ${error}` }, { status: 500 });
  }
}