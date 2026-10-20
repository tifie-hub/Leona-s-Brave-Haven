import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { mapsSearchUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Leona’s Brave Haven in Sarasota, Florida for adoption, fostering, donations, or rescue questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Leona’s Brave Haven"
        intro="Reach the rescue by email or send a message through the form. A map embed will be added only after the listed address is confirmed as a public pin."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold">Visit or write</h2>
          <address className="mt-5 not-italic leading-8 text-charcoal">
            <p className="font-heading text-xl font-semibold">{site.name}</p>
            <p>{site.location.street}</p>
            <p>
              {site.location.city}, {site.location.state} {site.location.zip}
            </p>
            <p>{site.location.country}</p>
          </address>
          <p className="mt-5">
            Email:{" "}
            <a className="font-semibold underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-4">
            <a
              className="underline underline-offset-4"
              href={mapsSearchUrl()}
              target="_blank"
              rel="noreferrer"
            >
              Search this address in Google Maps
            </a>
          </p>
          <p className="mt-8 max-w-md leading-7 text-muted">
            Watch rescue videos and updates on YouTube:{" "}
            <a
              className="font-semibold underline underline-offset-4"
              href={site.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              @leonabravehaven
            </a>
            .
          </p>
        </div>

        <div className="rounded-xl border border-[#e6e2e6] bg-white p-6 shadow-[0_8px_24px_rgba(48,48,48,0.06)] sm:p-8">
          <h2 className="font-heading text-2xl font-bold">Send a message</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Messages from this form are sent to {site.email}. You can also
            write that address directly.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
