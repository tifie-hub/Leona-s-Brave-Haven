import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { getDog } from "@/lib/dogs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn how Leona’s Brave Haven, founded by Linda Jenkins, rescues abandoned and injured dogs across Florida.",
};

export default function OurStoryPage() {
  const photo = getDog("suncica")!.images[0];

  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Rescue with urgency. Care with patience."
        intro="Leona’s Brave Haven helps abandoned and injured dogs across Florida through urgent rescue, medical care, rehabilitation, and safe shelter."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold">The mission</h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Rescue dogs in urgent need, provide compassionate care and
              rehabilitation, and help them reach safe, loving homes.
            </p>
            <p className="mt-4 leading-8 text-muted">
              The organization reports that it has saved more than 300 dogs and
              fights high-kill shelter deadlines twice a week. That cadence is
              part of the work, not a marketing countdown. When a shelter
              deadline arrives, dogs need people ready to act.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Through rescue videos, recovery journeys, and adoption updates,
              Leona’s Brave Haven shares dogs’ stories and invites people to
              support their next steps toward safety and loving homes.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-mint">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Founder
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold">Linda Jenkins</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal">
            Leona’s Brave Haven was founded by Linda Jenkins. Additional
            personal history, professional credentials, registration details,
            and a founding date will be published only when the organization
            provides them.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-charcoal">
            What can be shared today is the work itself: pulling dogs from
            urgent situations, arranging medical care, offering rehabilitation,
            and keeping them safe until a foster or adoptive home is ready.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            title: "Urgent rescue",
            body: "Abandoned and injured dogs are pulled from high-risk situations across Florida, including high-kill shelter deadlines.",
          },
          {
            title: "Medical care and rehab",
            body: "Dogs receive the veterinary care and rehabilitation they need before they are asked to start over in a new home.",
          },
          {
            title: "Safe shelter and next steps",
            body: "While they heal, dogs have shelter and a chance at foster care, adoption, and a more stable tomorrow.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-[#e6e2e6] p-6">
            <h3 className="font-heading text-xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-bold">{site.motto}</h2>
            <p className="mt-3 max-w-xl text-white/80">
              Support the next rescue with a gift, a foster home, or a few hours
              of help.
            </p>
          </div>
          <Button href="/donate">Donate to Save a Dog</Button>
        </div>
      </section>
    </>
  );
}
