import type { Metadata } from "next";
import { DemoNotice } from "@/components/DemoNotice";
import { DogCard } from "@/components/DogCard";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { demonstrationDisclaimer, photos } from "@/lib/demo-media";

export const metadata: Metadata = {
  title: "Meet the Dogs",
  description:
    "See how Leona’s Brave Haven will present rescued dogs available for adoption in Florida. Verified listings will replace demonstration photographs.",
};

export default function MeetTheDogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Adopt a rescued dog in Florida"
        title="Meet the dogs"
        intro="When verified records are available, this page will introduce dogs who need adoption or foster care. Until then, the cards below are labeled demonstration listings used to build the layout."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <DemoNotice>
          <p>{demonstrationDisclaimer}</p>
          <p>
            No names, ages, medical notes, or adoption statuses have been
            invented for these photographs.
          </p>
        </DemoNotice>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photos.demoDogs.map((photo, index) => (
            <DogCard
              key={photo.src}
              slug={`demonstration-profile-0${index + 1}`}
              photo={photo}
            />
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-mint p-8">
          <h2 className="font-heading text-2xl font-bold">
            Interested in adoption?
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-charcoal">
            Adoption decisions depend on a good match for each dog and
            household. Eligibility details, fees, and home-check requirements
            will be published after the organization confirms them. You can
            start a conversation now.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/foster-and-volunteer#application">Start an adoption inquiry</Button>
            <Button href="/contact" variant="secondary">
              Contact the rescue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
