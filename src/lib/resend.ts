import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  return resend.emails.send({
    from: "AsiMjed Contact <no-reply@asimjed.com>",
    to: "info@asimjed.com",
    replyTo: data.email,
    subject: `طلب جديد من ${data.name} – ${data.service || "غير محدد"}`,
    html: `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00d4aa;">طلب تواصل جديد</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">الاسم:</td><td style="padding:8px;">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">البريد:</td><td style="padding:8px;">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">الخدمة:</td><td style="padding:8px;">${data.service || "لم يحدد"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">الرسالة:</td><td style="padding:8px;">${data.message}</td></tr>
        </table>
      </div>
    `,
  });
}
