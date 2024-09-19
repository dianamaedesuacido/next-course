import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  await resend.emails.send({
    from: "nextapp.dm.com",
    to: "dianadd@stpeter.com.ph",
    subject: "About NextApp",
    react: <WelcomeTemplate name="DM" />,
  });
  return NextResponse.json({});
}
