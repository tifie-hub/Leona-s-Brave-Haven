import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donation Policy",
  description:
    "How donations to Leona’s Brave Haven are handled, including pending payment processing and what this website does not claim.",
};

export default function DonationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Donation policy"
        intro="This page explains the current donation process while online payments are being set up."
      />
      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-14 leading-8 text-muted sm:px-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Purpose of gifts
          </h2>
          <p className="mt-3">
            Donations are requested to support food and shelter, emergency
            veterinary care, rescue transportation, rehabilitation, and ongoing
            care for rescued dogs. Designations are honored when practical. If
            a designation cannot be used as requested, the rescue should
            contact the donor when contact details were provided.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Payment processing
          </h2>
          <p className="mt-3">
            A payment provider will be connected only after {site.name} supplies
            a valid account and the integration is configured. Until then, the
            donate form records an intended gift and does not charge a card.
            Successful transactions are never simulated.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Receipts and tax status
          </h2>
          <p className="mt-3">
            This website does not claim that the organization is a registered
            nonprofit or that gifts are tax-deductible. Ask the rescue directly
            if you need a receipt or written confirmation of status.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Refunds
          </h2>
          <p className="mt-3">
            Refund terms will follow the connected payment provider and any
            written policy supplied by the organization. Until checkout is
            live, no online charge is taken through this website.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Questions
          </h2>
          <p className="mt-3">
            Email{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            before sending funds if you need current giving instructions.
          </p>
        </div>
      </section>
    </>
  );
}
