import nodemailer from "nodemailer";
import { site } from "@/lib/site";

function env(name: string) {
  return process.env[name]?.trim().replace(/^["']|["']$/g, "") ?? "";
}

export function contactInbox() {
  return env("CONTACT_INBOX") || site.email;
}

export function emailFromAddress() {
  return env("SMTP_USER") || site.email;
}

export function emailConfigured() {
  return Boolean(env("SMTP_HOST") && env("SMTP_USER") && env("SMTP_PASS"));
}

function formatFields(fields: Record<string, string | number>) {
  return Object.entries(fields)
    .filter(([, value]) => String(value).trim().length > 0)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

function createTransporter(port: number) {
  return nodemailer.createTransport({
    host: env("SMTP_HOST") || "mail.privateemail.com",
    port,
    secure: port === 465,
    requireTLS: port === 587,
    family: 4,
    auth: {
      user: env("SMTP_USER"),
      pass: env("SMTP_PASS"),
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
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

  const preferred = Number(env("SMTP_PORT") || 465);
  const ports = preferred === 587 ? [587, 465] : [465, 587];
  let lastError = "SMTP send failed";

  for (const port of ports) {
    try {
      await createTransporter(port).sendMail({
        from: {
          name: site.name,
          address: emailFromAddress(),
        },
        to: contactInbox(),
        replyTo,
        subject,
        text: `${subject}\n\n${formatFields(fields)}\n`,
      });
      return { sent: true as const };
    } catch (error) {
      lastError = error instanceof Error ? error.message : "SMTP send failed";
      console.error(`Form email failed on port ${port}:`, lastError);
    }
  }

  return { sent: false as const, reason: lastError };
}
