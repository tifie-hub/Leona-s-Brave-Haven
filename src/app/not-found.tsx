import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-muted">
        Page not found
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold">
        This page is not available
      </h1>
      <p className="mt-4 leading-8 text-muted">
        The link may be outdated, or the page has not been published yet.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/">Back to the homepage</Button>
        <Button href="/contact" variant="secondary">
          Contact the rescue
        </Button>
      </div>
    </section>
  );
}
