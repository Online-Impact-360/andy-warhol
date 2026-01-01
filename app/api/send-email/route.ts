import { sanitizeSubmission } from "@/app/lib/sanitize";
import { SubmissionSchema } from "@/app/lib/validation";
import { generateEmailTemplate } from "@/app/lib/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Generate HTML email template
    const htmlContent = generateEmailTemplate(data);

    //configure resend and send email
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "",
      to: process.env.RECIPIENT_EMAIL || "",
      subject: "New Private Access Request",
      html: htmlContent
    })

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: `Failed to send email: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: `Failed to send email: ${error}` }, { status: 500 });
  }
}