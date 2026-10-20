import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export function contactInbox() {
  return process.env.CONTACT_INBOX?.trim() || site.email;
}

export function emailFromAddress() {
  return process.env.SMTP_FROM?.trim() || `${site.name} <${site.email}>`;
}

export function emailConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );
}

function formatFields(fields: Record<string, string | number>) {
  return Object.entries(fields)
    .filter(([, value]) => String(value).trim().length > 0)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

function transporter() {
  const port = Number(process.env.SMTP_PORT || 465);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendFormEmail({
  subject,
  replyTo,
  fields,
}: {
  subject: string;
  replyTo: string;
  fields: Record<string, string | number>;
}) {
  if (!emailConfigured()) {
    return { sent: false as const, reason: "not_configured" };
  }

  try {
    await transporter().sendMail({
      from: emailFromAddress(),
      to: contactInbox(),
      replyTo,
      subject,
      text: `${subject}\n\n${formatFields(fields)}\n`,
    });
    return { sent: true as const };
  } catch (error) {
    const message = error instanceof Error ? error.message : "SMTP send failed";
    return { sent: false as const, reason: message };
  }
}
