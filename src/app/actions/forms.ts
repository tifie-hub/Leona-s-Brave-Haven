"use server";

import { emailConfigured, sendFormEmail } from "@/lib/email";
import { site } from "@/lib/site";
import { storeSubmission } from "@/lib/submissions";
import {
  isHoneypotFilled,
  validateApplication,
  validateContact,
} from "@/lib/validation";

export type ActionResult = {
  status: "success" | "error" | "not_configured";
  message: string;
  errors?: Record<string, string>;
};

export async function submitContact(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (isHoneypotFilled(formData)) {
    return {
      status: "success",
      message: "Thank you. We received your message and will reply soon.",
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

  const email = await sendFormEmail({
    subject: `Website contact: ${values.topic}`,
    replyTo: values.email,
    fields: {
      Form: "Contact",
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
      Topic: values.topic,
      Message: values.message,
    },
  });

  if (!email.sent) {
    return {
      status: emailConfigured() ? "error" : "success",
      message: emailConfigured()
        ? `Email delivery failed (${email.reason}). Please write to ${site.email}.`
        : `Your message was saved. Please also email ${site.email} if your request is time-sensitive.`,
    };
  }

  return {
    status: "success",
    message: "Thank you. We received your message and will reply soon.",
  };
}

export async function submitApplication(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  if (isHoneypotFilled(formData)) {
    return {
      status: "success",
      message: "Thank you. We received your message and will reply soon.",
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

  const email = await sendFormEmail({
    subject: `Website application: ${values.interest}`,
    replyTo: values.email,
    fields: {
      Form: "Website application",
      Interest: values.interest,
      Name: values.name,
      Email: values.email,
      Phone: values.phone,
      City: values.city,
      Household: values.household,
      Experience: values.experience,
      "Dog reference": values.dogReference,
      Message: values.message,
    },
  });

  if (!email.sent) {
    return {
      status: emailConfigured() ? "error" : "success",
      message: emailConfigured()
        ? `Email delivery failed (${email.reason}). Please write to ${site.email}.`
        : `Your application was saved. Please also email ${site.email} if you need a timely response.`,
    };
  }

  return {
    status: "success",
    message: "Thank you. Your application was received and will be reviewed.",
  };
}
