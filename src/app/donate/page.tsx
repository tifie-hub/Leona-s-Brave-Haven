import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { donationCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Leona’s Brave Haven by choosing PayPal or HopeFund. Gifts help provide food, shelter, emergency medical care, and rescue transport.",
};

const options = [
  {
    id: "paypal",
    title: "Donate with PayPal",
    summary:
      "Complete your gift on PayPal. You can give with a PayPal account or a card.",
    href: site.paypalUrl,
    label: "Donate with PayPal",
  },
  {
    id: "hopefund",
    title: "Donate with HopeFund",
    summary: "Complete your gift on HopeFund.",
    href: site.hopefundUrl,
    label: "Donate with HopeFund",
  },
] as const;

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support the rescue"
        title="Donate"
        intro="Choose PayPal or HopeFund to complete your gift. This website does not collect card numbers."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          Choose how to donate
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-muted">
          Both options leave this website and open the processor’s checkout.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {options.map((option) => (
            <article
              key={option.id}
              className="flex flex-col rounded-xl border border-[#e6e2e6] bg-white p-8 shadow-[0_8px_24px_rgba(48,48,48,0.06)]"
            >
              <h3 className="font-heading text-2xl font-bold">{option.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{option.summary}</p>
              <div className="mt-6">
                <Button href={option.href} size="lg" className="w-full">
                  {option.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fbfa]">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            How donations help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-muted">
            More than 300 dogs saved. More lives still need help.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {donationCategories.map((category) => (
              <article key={category.id} className="rounded-xl bg-white p-6">
                <h3 className="font-heading text-xl font-bold">{category.title}</h3>
                <p className="mt-3 leading-7 text-muted">{category.summary}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center leading-7 text-muted">
            Read how gifts are handled on the{" "}
            <Link
              href="/donation-policy"
              className="font-semibold underline underline-offset-4"
            >
              donation policy
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
