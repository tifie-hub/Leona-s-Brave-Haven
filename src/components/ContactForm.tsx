"use client";

import { useActionState } from "react";
import { submitContact, type ActionResult } from "@/app/actions/forms";
import {
  describedBy,
  Field,
  FormStatus,
  Honeypot,
  inputClass,
} from "@/components/FormFields";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

const initial: ActionResult | null = null;

const topics = [
  "General question",
  "Adoption",
  "Fostering",
  "Volunteering or transport",
  "Donation",
  "Rescue story or media",
  "Something else",
];

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <form action={action} className="relative space-y-5" noValidate>
      <Honeypot />
      <FormStatus status={pending ? "loading" : state?.status ?? "idle"} message={pending ? "Sending your message…" : state?.message} />

      <Field id="name" name="name" label="Full name" error={state?.errors?.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClass(state?.errors?.name)}
          aria-invalid={Boolean(state?.errors?.name)}
          aria-describedby={describedBy("name", undefined, state?.errors?.name)}
        />
      </Field>

      <Field id="email" name="email" label="Email" error={state?.errors?.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass(state?.errors?.email)}
          aria-invalid={Boolean(state?.errors?.email)}
          aria-describedby={describedBy("email", undefined, state?.errors?.email)}
        />
      </Field>

      <Field
        id="phone"
        name="phone"
        label="Phone (optional)"
        error={state?.errors?.phone}
      >
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass(state?.errors?.phone)}
          aria-invalid={Boolean(state?.errors?.phone)}
          aria-describedby={describedBy("phone", undefined, state?.errors?.phone)}
        />
      </Field>

      <Field id="topic" name="topic" label="Topic" error={state?.errors?.topic}>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className={inputClass(state?.errors?.topic)}
          aria-invalid={Boolean(state?.errors?.topic)}
          aria-describedby={describedBy("topic", undefined, state?.errors?.topic)}
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" name="message" label="Message" error={state?.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={inputClass(state?.errors?.message)}
          aria-invalid={Boolean(state?.errors?.message)}
          aria-describedby={describedBy("message", undefined, state?.errors?.message)}
        />
      </Field>

      <p className="text-sm leading-6 text-muted">
        This message is sent to {site.email}. We use this information only to
        respond to your inquiry. See the{" "}
        <a className="underline underline-offset-4" href="/privacy">
          privacy notice
        </a>{" "}
        for details.
      </p>

      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
