import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Leona’s Brave Haven uses contact and application information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy notice"
        intro="This notice explains how information submitted through the website is used. It is a practical website notice, not a substitute for legal counsel."
      />
      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-14 text-muted leading-8 sm:px-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Who receives your information
          </h2>
          <p className="mt-3">
            Forms on this website are intended for {site.name}, {site.location.street}, {site.location.city}, {site.location.state} {site.location.zip}, {site.location.country}. Questions can be sent to{" "}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            What we collect
          </h2>
          <p className="mt-3">
            Contact and application forms may collect your name, email address,
            phone number, city, household notes, and the message you choose to
            send. A hidden field is used only to discourage automated spam.
            Donations are completed on PayPal, not on a form on this website.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            How information is used
          </h2>
          <p className="mt-3">
            Submitted information is used to respond to inquiries and review
            foster, volunteer, or adoption interest. It is not sold. Card
            numbers should never be entered on these forms. PayPal handles
            donation payments on its own site.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Storage and email
          </h2>
          <p className="mt-3">
            Form submissions are sent to {site.email}. Copies may also be stored
            as files on the website host so they are not lost. Hosting, PayPal,
            and email providers will have access only as needed to operate those
            services.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-charcoal">
            Your choices
          </h2>
          <p className="mt-3">
            You may email {site.email} to ask what information the rescue has
            from a website form and to request a correction. Do not send
            passwords or payment credentials by email.
          </p>
        </div>
      </section>
    </>
  );
}
