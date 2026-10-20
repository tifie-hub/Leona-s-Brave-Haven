import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about adopting, fostering, donating, and contacting Leona’s Brave Haven, a dog rescue in Sarasota, Florida.",
};

const faqs = [
  {
    q: "Where is Leona’s Brave Haven?",
    a: "The listed address is 14500 Myakka Road, Sarasota, FL 34240, USA. Please email before visiting so the team can confirm whether the location is open to the public that day.",
  },
  {
    q: "How can I adopt a rescued dog in Florida?",
    a: "Browse the Adoption page or Meet the Dogs, then start an adoption inquiry or email the rescue. Placement depends on a good match for the dog and household.",
  },
  {
    q: "Can I foster a rescue dog?",
    a: "Yes, foster homes are one of the most useful ways to help. Use the foster and volunteer form to describe your space, household, and availability. Placement is never guaranteed from a form alone.",
  },
  {
    q: "How do donations help?",
    a: "Donations support food and shelter, emergency veterinary care, rescue transportation, rehabilitation, and ongoing care while dogs wait for a home. Use the Donate button to give securely through PayPal. Specific dollar-to-treatment claims are not made unless they can be verified.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "This website does not claim nonprofit, tax-exempt, or tax-deductible status. Please ask the organization directly if you need a receipt or status confirmation.",
  },
  {
    q: "Can I volunteer or help with transport?",
    a: "Yes. Drivers, shelter helpers, and event volunteers are all needed. Send an application or email with your location and the kind of help you can offer.",
  },
  {
    q: "Do you accept dogs from high-kill shelters?",
    a: "The organization fights high-kill shelter deadlines twice a week and rescues abandoned and injured dogs across Florida. Intake decisions are made by the rescue and cannot be promised through the website.",
  },
  {
    q: "Can I share a rescue story or video?",
    a: "Watch official rescue videos on the YouTube channel @leonabravehaven. Authorized stories and videos from supporters are welcome through the contact form so the team can review what may be published.",
  },
  {
    q: "How do I contact the rescue?",
    a: `Email ${site.email} or use the contact form. Please do not include payment card numbers in any message.`,
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Frequently asked questions"
        intro="These answers stay within what the organization has confirmed. Policies that have not been documented are left open rather than guessed."
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <dl className="space-y-8">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-[#e6e2e6] pb-8">
              <dt className="font-heading text-xl font-bold">{item.q}</dt>
              <dd className="mt-3 leading-7 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
