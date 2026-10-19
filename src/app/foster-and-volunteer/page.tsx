import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Foster and Volunteer",
  description:
    "Foster a rescue dog, help with transport, or volunteer with Leona’s Brave Haven in Sarasota, Florida.",
};

const opportunities = [
  {
    title: "Foster a rescue dog",
    body: "A foster home gives a dog quiet time to heal, learn household life, and wait for adoption without staying in a crowded facility.",
  },
  {
    title: "Rescue transport",
    body: "Drivers help move dogs from high-risk situations to veterinary clinics, foster homes, or other safe holding places.",
  },
  {
    title: "Shelter and care assistance",
    body: "Hands-on help with feeding, cleaning, walks, and calm companionship keeps rescued dogs comfortable while they recover.",
  },
  {
    title: "Events and community support",
    body: "When public events are scheduled, volunteers can help people meet dogs, share information, and keep the day running smoothly.",
  },
  {
    title: "Supplies and professional help",
    body: "Food, crates, medical supplies, and professional skills such as grooming or veterinary support all make rescue more possible.",
  },
];

export default function FosterPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Foster, transport, and volunteer"
        intro="Leona’s Brave Haven needs people as much as it needs donations. If you can open your home, drive a route, or give a few hours, you become part of the rescue."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {opportunities.map((item) => (
          <article key={item.title} className="rounded-xl border border-[#e6e2e6] p-6">
            <h2 className="font-heading text-xl font-bold">{item.title}</h2>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </section>

      <section id="application" className="bg-[#f8fbfa]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-bold">Apply to help</h2>
            <p className="mt-4 leading-8 text-muted">
              Tell us how you would like to help. This form does not guarantee
              placement, a specific dog, or a volunteer role. It starts a
              conversation so the rescue can follow up.
            </p>
            <p className="mt-4 leading-8 text-muted">
              We will use your details only to review the inquiry and contact
              you. Do not include sensitive medical or financial information.
            </p>
          </div>
          <div className="rounded-xl border border-[#e6e2e6] bg-white p-6 sm:p-8">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
