import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { featuredStories } from "@/lib/dogs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rescue Stories",
  description:
    "Read real rescue stories from Leona’s Brave Haven: recovery, second chances, and dogs still looking for a home.",
};

export default function RescueStoriesPage() {
  const stories = featuredStories();

  return (
    <>
      <PageHero
        eyebrow="Stories and updates"
        title="Rescue stories"
        intro="These are the journeys behind the dogs in our care: abandoned puppies, street rescues, recoveries, and mothers who still need a home."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {stories.map((dog) => (
            <article
              key={dog.slug}
              className="overflow-hidden rounded-xl border border-[#e6e2e6] bg-white lg:grid lg:grid-cols-2"
            >
              <div className="relative min-h-72">
                <Image
                  src={dog.images[0].src}
                  alt={dog.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-8">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                  Rescue story
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold">{dog.name}</h2>
                <p className="mt-4 leading-7 text-muted">{dog.story[0]}</p>
                {dog.story[1] ? (
                  <p className="mt-4 leading-7 text-muted">{dog.story[1]}</p>
                ) : null}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={`/meet-the-dogs/${dog.slug}`}>Meet {dog.name}</Button>
                  <Button href={site.donateUrl} variant="secondary">
                    Support the next rescue
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
