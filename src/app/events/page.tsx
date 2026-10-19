import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events and Updates",
  description:
    "Confirmed events and updates from Leona’s Brave Haven will be listed here. No events are published until they are verified.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Events and updates"
        intro="Adoption events, fundraisers, and public updates will appear here only after they are confirmed. Nothing on this page is invented to look busy."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-soft bg-[#f8fbfa] px-6 py-14 text-center">
          <h2 className="font-heading text-2xl font-bold">
            No confirmed public events right now
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            When a date, time, and location are verified, they will be listed
            here with clear registration or contact details. Until then, the
            best way to hear about upcoming opportunities is to email the
            rescue.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`}>Email {site.email}</Button>
            <Button href="/contact" variant="secondary">
              Use the contact form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
