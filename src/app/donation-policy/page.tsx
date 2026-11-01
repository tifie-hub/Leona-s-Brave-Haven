import type { Metadata } from "next";
import { PayPalDonate } from "@/components/PayPalDonate";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donation Policy",
  description:
    "How donations to Leona’s Brave Haven are handled through PayPal or HopeFund, and what this website does not claim.",
};

export default function DonationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Donation policy"
        intro="Gifts to Leona’s Brave Haven are completed on PayPal or HopeFund."
      />
      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-14 leading-8 text-muted sm:px-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Purpose of gifts
          </h2>
          <p className="mt-3">
            Donations are requested to support food and shelter, emergency
            veterinary care, rescue transportation, rehabilitation, and ongoing
            care for rescued dogs.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Payment processing
          </h2>
          <p className="mt-3">
            Online gifts are completed on PayPal or HopeFund. This website does
            not collect card numbers or processor passwords. Choose a checkout
            option on the Donate page.
          </p>
          <div className="mt-5">
            <PayPalDonate label="Choose how to donate" />
          </div>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Receipts and tax status
          </h2>
          <p className="mt-3">
            This website does not claim that the organization is a registered
            nonprofit or that gifts are tax-deductible. PayPal or HopeFund may
            send their own payment confirmation. Ask the rescue directly if you need a receipt
            or written confirmation of status.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Refunds
          </h2>
          <p className="mt-3">
            Refund requests follow the process of the checkout you used and any written policy
            supplied by the organization. Email{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            if you need help with a gift.
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
            before giving if you need current instructions.
          </p>
        </div>
      </section>
    </>
  );
}
