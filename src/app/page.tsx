import Image from "next/image";
import { Button } from "@/components/Button";
import { DogCard } from "@/components/DogCard";
import { Section } from "@/components/Section";
import { featuredDogs, featuredStories, getDog } from "@/lib/dogs";
import { PayPalDonate } from "@/components/PayPalDonate";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { donationCategories, site } from "@/lib/site";

export default function HomePage() {
  const hero = {
    src: "/images/header.webp",
    alt: "A rescued dog being held safely in someone’s arms",
  };
  const mission = getDog("nino")!.images[0];
  const dogs = featuredDogs();
  const stories = featuredStories().slice(0, 2);

  return (
    <>
      <section className="relative isolate -mt-[var(--site-header-height)] min-h-[calc(78vh+var(--site-header-height))] overflow-hidden bg-charcoal">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          loading="eager"
          className="object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/35" />
        <div className="relative mx-auto flex min-h-[calc(78vh+var(--site-header-height))] w-full max-w-6xl items-end px-4 pb-16 pt-[calc(var(--site-header-height)+2.5rem)] sm:px-6 lg:items-center lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-lime">
              Dog rescue in Sarasota, Florida
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {site.motto}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              {site.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PayPalDonate label="Donate to Save a Dog" size="lg" />
              <Button href="/meet-the-dogs" variant="inverse" size="lg">
                Meet the Dogs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="mint"
        eyebrow="Impact"
        title="300+ dogs saved"
        intro="Leona’s Brave Haven reports that more than 300 dogs have been saved. The work continues, and more lives still need help."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl bg-white p-6">
            <p className="font-heading text-4xl font-bold text-charcoal">300+</p>
            <h3 className="mt-3 font-heading text-xl font-bold">Dogs saved</h3>
            <p className="mt-2 leading-7 text-muted">
              More than 300 abandoned and injured dogs have been rescued and
              given urgent care, rehabilitation, and a safe place to heal.
            </p>
          </article>
          <article className="rounded-xl bg-white p-6">
            <p className="font-heading text-4xl font-bold text-charcoal">2x</p>
            <h3 className="mt-3 font-heading text-xl font-bold">Weekly urgency</h3>
            <p className="mt-2 leading-7 text-muted">
              {site.rescueCadence} Support helps the team respond when time is
              short.
            </p>
          </article>
          <article className="rounded-xl bg-white p-6">
            <p className="font-heading text-4xl font-bold text-charcoal">FL</p>
            <h3 className="mt-3 font-heading text-xl font-bold">Across Florida</h3>
            <p className="mt-2 leading-7 text-muted">
              Abandoned and injured dogs are rescued across Florida and given
              urgent care, rehabilitation, and safe shelter.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="The work"
        title="Urgent rescue, then patient care"
        intro="The mission is to rescue dogs in urgent need, provide compassionate care and rehabilitation, and help them reach safe, loving homes."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={mission.src}
              alt={mission.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-lg leading-8 text-muted">
              High-kill shelter deadlines create a regular, twice-weekly race
              against time. Leona’s Brave Haven steps in to pull dogs from
              danger, treat injury and illness, and give them a stable place to
              recover.
            </p>
            <ul className="mt-6 space-y-3 text-charcoal">
              <li className="border-l-4 border-lime pl-4">Urgent rescue and transport</li>
              <li className="border-l-4 border-lime pl-4">Medical care and rehabilitation</li>
              <li className="border-l-4 border-lime pl-4">Safe shelter while dogs heal</li>
              <li className="border-l-4 border-lime pl-4">A path toward adoption</li>
            </ul>
            <div className="mt-8">
              <Button href="/our-story" variant="secondary">
                Read our story
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="Meet the dogs"
        title="Dogs looking for a home"
        intro="Frida, Lola, Darko, and many others are waiting for a forever home."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dogs.map((dog) => (
            <DogCard key={dog.slug} dog={dog} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/adoption">See dogs for adoption</Button>
          <Button href="/meet-the-dogs" variant="secondary">
            View all dogs
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Rescue stories"
        title="Real recoveries. Real second chances."
        intro="These stories come from the dogs in our care: street rescues, discarded puppies, and recoveries that still need a home."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {stories.map((dog) => (
            <article key={dog.slug} className="overflow-hidden rounded-xl border border-[#e6e2e6] bg-white">
              <div className="relative aspect-[16/10]">
                <Image
                  src={dog.images[0].src}
                  alt={dog.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                  Rescue story
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold">{dog.name}</h3>
                <p className="mt-3 leading-7 text-muted">{dog.summary}</p>
                <div className="mt-5">
                  <Button href={`/meet-the-dogs/${dog.slug}`} variant="secondary">
                    Read {dog.name}'s story
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/rescue-stories" variant="secondary">
            More rescue stories
          </Button>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="On YouTube"
        title="Watch the rescue work"
        intro="Rescue videos, recovery journeys, and adoption updates from Leona’s Brave Haven."
      >
        <div className="mx-auto max-w-4xl">
          <YouTubeEmbed />
        </div>
        <div className="mt-8 text-center">
          <Button href={site.youtubeUrl} variant="secondary">
            Watch on YouTube
          </Button>
        </div>
      </Section>

      <Section
        tone="mint"
        eyebrow="How donations help"
        title="Your support keeps rescue possible"
        intro="More than 300 dogs saved. More lives still need help. Your support helps provide food, shelter, emergency medical care, rescue transport, and second chances."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {donationCategories.map((category) => (
            <article key={category.id} className="rounded-xl bg-white p-6">
              <h3 className="font-heading text-xl font-bold">{category.title}</h3>
              <p className="mt-3 leading-7 text-muted">{category.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-white p-8 text-center shadow-[0_8px_24px_rgba(48,48,48,0.06)]">
          <h3 className="font-heading text-2xl font-bold">Donate with PayPal</h3>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
            Gifts go through PayPal’s secure checkout. You can donate with a
            PayPal account or a card.
          </p>
          <div className="mt-6 flex justify-center">
            <PayPalDonate label="Donate to Save a Dog" size="lg" />
          </div>
        </div>
      </Section>

      <Section
        tone="charcoal"
        title="Another dog is waiting for a second chance"
        intro="If you can give or share this work, you help Leona’s Brave Haven keep answering urgent calls across Florida."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PayPalDonate label="Donate to Save a Dog" size="lg" />
          <Button href="/contact" variant="inverse" size="lg">
            Contact the rescue
          </Button>
        </div>
      </Section>
    </>
  );
}
