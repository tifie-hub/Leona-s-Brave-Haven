"use client";

import { useActionState } from "react";
import { submitApplication, type ActionResult } from "@/app/actions/forms";
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

const interests = [
  "Adoption inquiry",
  "Foster a dog",
  "Volunteer at events or with care",
  "Rescue transport",
  "Supplies or professional support",
];

type ApplicationFormProps = {
  defaultInterest?: string;
  dogReference?: string;
};

export function ApplicationForm({
  defaultInterest = "",
  dogReference = "",
}: ApplicationFormProps) {
  const [state, action, pending] = useActionState(submitApplication, initial);

  return (
    <form action={action} className="relative space-y-5" noValidate>
      <Honeypot />
      <FormStatus
        status={pending ? "loading" : state?.status ?? "idle"}
        message={pending ? "Submitting your application…" : state?.message}
      />

      <Field id="interest" name="interest" label="I am interested in" error={state?.errors?.interest}>
        <select
          id="interest"
          name="interest"
          required
          defaultValue={defaultInterest}
          className={inputClass(state?.errors?.interest)}
          aria-invalid={Boolean(state?.errors?.interest)}
          aria-describedby={describedBy("interest", undefined, state?.errors?.interest)}
        >
          <option value="" disabled>
            Choose an option
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </Field>

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

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field id="phone" name="phone" label="Phone (optional)" error={state?.errors?.phone}>
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
      </div>

      <Field id="city" name="city" label="City or nearest area" error={state?.errors?.city}>
        <input
          id="city"
          name="city"
          type="text"
          autoComplete="address-level2"
          required
          className={inputClass(state?.errors?.city)}
          aria-invalid={Boolean(state?.errors?.city)}
          aria-describedby={describedBy("city", undefined, state?.errors?.city)}
        />
      </Field>

      <Field
        id="household"
        name="household"
        label="Household notes (optional)"
        hint="You may share whether you have a yard, other pets, or children. This is optional."
      >
        <textarea id="household" name="household" rows={3} className={inputClass()} />
      </Field>

      <Field
        id="experience"
        name="experience"
        label="Relevant experience (optional)"
      >
        <textarea id="experience" name="experience" rows={3} className={inputClass()} />
      </Field>

      <input type="hidden" name="dogReference" value={dogReference} />

      <Field
        id="message"
        name="message"
        label="How would you like to help?"
        error={state?.errors?.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass(state?.errors?.message)}
          aria-invalid={Boolean(state?.errors?.message)}
          aria-describedby={describedBy("message", undefined, state?.errors?.message)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-charcoal">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            className="mt-1 h-4 w-4 accent-charcoal"
            required
          />
          <span>
            I understand this information will be sent to {site.email} to review
            my inquiry and follow up with me. I have read the{" "}
            <a className="underline underline-offset-4" href="/privacy">
              privacy notice
            </a>
            .
          </span>
        </label>
        {state?.errors?.consent ? (
          <p className="mt-2 text-sm font-medium text-[#8a2b0d]" role="alert">
            {state.errors.consent}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Submit application"}
      </Button>
    </form>
  );
}
