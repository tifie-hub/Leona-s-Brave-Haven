import type { Metadata } from "next";
import { DonateForm } from "@/components/DonateForm";
import { PageHero } from "@/components/PageHero";
import { donationCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support emergency dog rescue in Florida. Donations help Leona’s Brave Haven provide food, shelter, veterinary care, transport, and rehabilitation.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give"
        title="Donate to Save a Dog"
        intro="Your gift helps Leona’s Brave Haven keep answering urgent calls across Florida. More than 300 dogs have been saved. More lives still need help."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold">How donations are used</h2>
          <p className="mt-4 leading-8 text-muted">
            Gifts support the practical work of rescue: feeding dogs, keeping
            them sheltered, getting them to veterinary care, moving them out of
            danger, and giving them time to recover.
          </p>
          <ul className="mt-8 space-y-5">
            {donationCategories.map((category) => (
              <li key={category.id} className="border-l-4 border-lime pl-4">
                <p className="font-heading font-semibold">{category.title}</p>
                <p className="mt-1 text-muted">{category.summary}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-muted">
            Suggested amounts on this page are ways to give, not claims that a
            specific dollar amount funds a named treatment or saves one dog.
            Tax-exempt status and tax deductibility are not claimed here.
          </p>
        </div>

        <div className="rounded-xl border border-[#e6e2e6] bg-white p-6 shadow-[0_8px_24px_rgba(48,48,48,0.06)] sm:p-8">
          <h2 className="font-heading text-2xl font-bold">Give now</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Card checkout will open after the organization supplies a verified
            payment account. Until then, this form records your intended gift
            and points you to a direct email if you want to give immediately.
          </p>
          <div className="mt-6">
            <DonateForm />
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Prefer to talk first? Email{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
