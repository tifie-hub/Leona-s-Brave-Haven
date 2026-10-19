"use client";

import { useActionState, useState } from "react";
import { submitDonationIntent, type ActionResult } from "@/app/actions/forms";
import {
  describedBy,
  Field,
  FormStatus,
  Honeypot,
  inputClass,
} from "@/components/FormFields";
import { Button } from "@/components/Button";
import { donationCategories } from "@/lib/site";

const initial: ActionResult | null = null;
const amounts = ["25", "50", "100", "250"];

export function DonateForm() {
  const [state, action, pending] = useActionState(submitDonationIntent, initial);
  const [selected, setSelected] = useState("50");

  return (
    <form action={action} className="relative space-y-6" noValidate>
      <Honeypot />
      <FormStatus
        status={pending ? "loading" : state?.status ?? "idle"}
        message={pending ? "Preparing your donation request…" : state?.message}
      />

      <fieldset>
        <legend className="mb-3 font-heading text-sm font-semibold text-charcoal">
          Gift type
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="btn-glass flex min-h-12 items-center gap-3 rounded-md border border-white/90 bg-white/80 px-4 shadow-[0_8px_24px_rgba(48,48,48,0.08)] backdrop-blur-[16px] has-[:checked]:bg-mint/80">
            <input type="radio" name="frequency" value="one-time" defaultChecked className="accent-charcoal" />
            <span className="font-heading font-semibold">One-time</span>
          </label>
          <label className="btn-glass flex min-h-12 items-center gap-3 rounded-md border border-white/90 bg-white/80 px-4 shadow-[0_8px_24px_rgba(48,48,48,0.08)] backdrop-blur-[16px] has-[:checked]:bg-mint/80">
            <input type="radio" name="frequency" value="monthly" className="accent-charcoal" />
            <span className="font-heading font-semibold">Monthly</span>
          </label>
        </div>
        {state?.errors?.frequency ? (
          <p className="mt-2 text-sm font-medium text-[#8a2b0d]" role="alert">
            {state.errors.frequency}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-heading text-sm font-semibold text-charcoal">
          Amount in US dollars
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amounts.map((amount) => (
            <label
              key={amount}
              className="btn-glass flex min-h-12 items-center justify-center rounded-md border border-white/90 bg-white/80 font-heading font-semibold shadow-[0_8px_24px_rgba(48,48,48,0.08)] backdrop-blur-[16px] has-[:checked]:bg-lime/80"
            >
              <input
                type="radio"
                name="amount"
                value={amount}
                className="sr-only"
                checked={selected === amount}
                onChange={() => setSelected(amount)}
              />
              ${amount}
            </label>
          ))}
        </div>
        <div className="mt-4">
          <Field
            id="customAmount"
            name="customAmount"
            label="Or enter a custom amount"
            error={state?.errors?.amount}
          >
            <input
              id="customAmount"
              name="customAmount"
              type="number"
              min="5"
              step="1"
              inputMode="numeric"
              className={inputClass(state?.errors?.amount)}
              aria-invalid={Boolean(state?.errors?.amount)}
              aria-describedby={describedBy("customAmount", undefined, state?.errors?.amount)}
              onChange={(event) => {
                if (event.target.value) setSelected("");
              }}
            />
          </Field>
        </div>
      </fieldset>

      <Field
        id="designation"
        name="designation"
        label="Where should this gift help?"
        error={state?.errors?.designation}
      >
        <select
          id="designation"
          name="designation"
          required
          defaultValue=""
          className={inputClass(state?.errors?.designation)}
          aria-invalid={Boolean(state?.errors?.designation)}
          aria-describedby={describedBy("designation", undefined, state?.errors?.designation)}
        >
          <option value="" disabled>
            Choose a designation
          </option>
          <option value="where-needed">Where it is needed most</option>
          {donationCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="email"
        name="email"
        label="Email for follow-up (optional)"
        error={state?.errors?.email}
      >
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass(state?.errors?.email)}
          aria-invalid={Boolean(state?.errors?.email)}
          aria-describedby={describedBy("email", undefined, state?.errors?.email)}
        />
      </Field>

      <Field id="note" name="note" label="Note (optional)" error={state?.errors?.note}>
        <textarea
          id="note"
          name="note"
          rows={3}
          className={inputClass(state?.errors?.note)}
          aria-invalid={Boolean(state?.errors?.note)}
          aria-describedby={describedBy("note", undefined, state?.errors?.note)}
        />
      </Field>

      <p className="text-sm leading-6 text-muted">
        Secure card checkout is pending a verified payment account. Submitting
        this form records your intended gift and does not charge a card. See the{" "}
        <a className="underline underline-offset-4" href="/donation-policy">
          donation policy
        </a>
        .
      </p>

      <Button type="submit" disabled={pending}>
        {pending ? "Submitting…" : "Continue donation request"}
      </Button>
    </form>
  );
}
