import type { FieldErrors } from "@/lib/validation";

type FieldProps = {
  id: string;
  name: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

export function Field({ id, name, label, hint, error, children }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-heading text-sm font-semibold text-charcoal">
        {label}
      </label>
      {children}
      {hint ? (
        <p id={hintId} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-[#8a2b0d]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function inputClass(error?: string) {
  return [
    "w-full rounded-md border-2 bg-white px-3 py-3 text-base text-charcoal",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal",
    error ? "border-[#8a2b0d]" : "border-[#cfcacf]",
  ].join(" ");
}

export function describedBy(id: string, hint?: string, error?: string) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;
}

export function FormStatus({
  status,
  message,
}: {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}) {
  if (status === "idle" || !message) return null;

  const tone =
    status === "success"
      ? "border-mint bg-[#eefaf8] text-charcoal"
      : status === "error"
        ? "border-[#8a2b0d] bg-[#fff4ef] text-charcoal"
        : "border-[#cfcacf] bg-[#f4f2f4] text-charcoal";

  return (
    <div className={`rounded-md border-2 px-4 py-3 text-sm leading-6 ${tone}`} role="status">
      {message}
    </div>
  );
}

export function Honeypot() {
  return (
    <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label htmlFor="company_website">Company website</label>
      <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function fieldError(errors: FieldErrors, name: string) {
  return errors[name];
}
