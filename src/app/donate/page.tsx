import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { donationCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give a rescued dog a second chance",
  description:
    "Support Leona’s Brave Haven by choosing PayPal or HopeFund. Donations help provide food, shelter, emergency medical care, and rescue transport.",
};

const options = [
  {
    id: "paypal",
    title: "Donate with PayPal",
    summary:
      "Complete your donation on PayPal. You can give with a PayPal account or a card.",
    href: site.paypalUrl,
    label: "Donate with PayPal",
  },
  {
    id: "hopefund",
    title: "Donate with HopeFund",
    summary: "Complete your donation on HopeFund.",
    href: site.hopefundUrl,
    label: "Donate with HopeFund",
  },
] as const;

export default function DonatePage() {
  return (
    <section className="relative isolate -mt-[var(--site-header-height)] overflow-hidden bg-charcoal">
      <Image
        src="/images/header.webp"
        alt="A rescued dog being held safely in someone’s arms"
        fill
        priority
        className="object-cover object-[68%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/75 to-charcoal/90" />

      <div className="relative">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-[calc(var(--site-header-height)+3.5rem)] sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Support the rescue
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Give a rescued dog a second chance
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Choose PayPal or HopeFund to complete your donation. This website
            does not collect card numbers.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-white">
            Choose how to donate
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {options.map((option) => (
              <article
                key={option.id}
                className="flex flex-col rounded-xl border border-white/80 bg-white/90 p-8 shadow-[0_8px_24px_rgba(48,48,48,0.18)] backdrop-blur-[16px]"
              >
                <h3 className="font-heading text-2xl font-bold text-charcoal">
                  {option.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-muted">{option.summary}</p>
                <div className="mt-6">
                  <Button href={option.href} size="lg" className="w-full">
                    {option.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-white">
            How donations help
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/85">
            More than 300 dogs saved. More lives still need help.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {donationCategories.map((category) => (
              <article
                key={category.id}
                className="rounded-xl border border-white/70 bg-white/90 p-6 backdrop-blur-[16px]"
              >
                <h3 className="font-heading text-xl font-bold text-charcoal">
                  {category.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{category.summary}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center leading-7 text-white/85">
            Read how donations are handled on the{" "}
            <Link
              href="/donation-policy"
              className="font-semibold text-white underline underline-offset-4"
            >
              donation policy
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
