import type { Metadata } from "next";
import { DogCard } from "@/components/DogCard";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { dogs } from "@/lib/dogs";

export const metadata: Metadata = {
  title: "Meet the Dogs",
  description:
    "Meet rescued dogs looking for adoption or foster homes through Leona’s Brave Haven in Florida.",
};

export default function MeetTheDogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Adopt a rescued dog in Florida"
        title="Meet the dogs"
        intro="These dogs were rescued from abandonment, injury, or overcrowded shelters. Each one is waiting for a foster home or a forever family."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dogs.map((dog) => (
            <DogCard key={dog.slug} dog={dog} />
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-mint p-8">
          <h2 className="font-heading text-2xl font-bold">
            Interested in adoption?
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-charcoal">
            Adoption decisions depend on a good match for each dog and
            household. Start a conversation and the rescue will help you take
            the next step.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/adoption#inquiry">Start an adoption inquiry</Button>
            <Button href="/contact" variant="secondary">
              Contact the rescue
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
