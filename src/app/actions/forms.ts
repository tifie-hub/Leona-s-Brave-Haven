"use server";

import { storeSubmission } from "@/lib/submissions";
import {
  isHoneypotFilled,
  validateApplication,
  validateContact,
  validateDonationIntent,
} from "@/lib/validation";

export type ActionResult = {
  status: "success" | "error" | "not_configured";
  message: string;
  errors?: Record<string, string>;
};

function emailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_INBOX);
}

function stripeConfigured() {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_SITE_URL);
}

export async function submitContact(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (isHoneypotFilled(formData)) {
    return {
      status: "success",
      message: "Thank you. If a reply is needed, we will be in touch.",
    };
  }

  const { values, errors, valid } = validateContact(formData);
  if (!valid) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
    };
  }

  await storeSubmission("contact", values);

  if (!emailConfigured()) {
    return {
      status: "success",
      message:
        "Your message was saved on this website. Email delivery is not configured yet, so please also write to leonabravehaven@gmail.com if your request is time-sensitive.",
    };
  }

  return {
    status: "success",
    message: "Thank you. Your message has been sent. We will reply as soon as we can.",
  };
}

export async function submitApplication(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (isHoneypotFilled(formData)) {
    return {
      status: "success",
      message: "Thank you. If a reply is needed, we will be in touch.",
    };
  }

  const { values, errors, valid } = validateApplication(formData);
  if (!valid) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
    };
  }

  await storeSubmission("application", values);

  if (!emailConfigured()) {
    return {
      status: "success",
      message:
        "Your application was saved on this website. Email notification is not configured yet, so please also email leonabravehaven@gmail.com if you need a timely response.",
    };
  }

  return {
    status: "success",
    message: "Thank you. Your application was received and will be reviewed.",
  };
}

export async function submitDonationIntent(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (isHoneypotFilled(formData)) {
    return {
      status: "success",
      message: "Thank you for your interest in supporting rescue work.",
    };
  }

  const { values, errors, valid } = validateDonationIntent(formData);
  if (!valid) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
    };
  }

  await storeSubmission("donation-intent", values);

  if (!stripeConfigured()) {
    return {
      status: "not_configured",
      message:
        "Online payment processing is not connected yet. Your gift details were recorded as an inquiry. To donate now, email leonabravehaven@gmail.com and the team can share current giving instructions.",
    };
  }

  return {
    status: "success",
    message: "Continuing to the payment provider is not available until checkout is fully configured.",
  };
}
