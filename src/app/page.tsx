import Image from "next/image";
import { Button } from "@/components/Button";
import { DemoNotice } from "@/components/DemoNotice";
import { DogCard } from "@/components/DogCard";
import { Section } from "@/components/Section";
import { demonstrationDisclaimer, photos } from "@/lib/demo-media";
import { donationCategories, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate -mt-[var(--site-header-height)] min-h-[calc(78vh+var(--site-header-height))] overflow-hidden bg-charcoal">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          className="object-cover"
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
              <Button href="/donate" size="lg">
                Donate to Save a Dog
              </Button>
              <Button href="/meet-the-dogs" variant="inverse" size="lg">
                Meet the Dogs
              </Button>
            </div>
            <p className="mt-6 text-xs leading-5 text-white/70">
              Hero photograph is a licensed Unsplash image, not a documented
              Leona’s Brave Haven rescue.
            </p>
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
              Verified organizational impact shared by the rescue. Additional
              statistics will be added only when they are confirmed.
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
              src={photos.companions.src}
              alt={photos.companions.alt}
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
              <li className="border-l-4 border-lime pl-4">A path toward foster and adoption</li>
            </ul>
            <div className="mt-8">
              <Button href="/our-story" variant="secondary">
                Read our story
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              Licensed Unsplash photograph. Demonstration image only.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="Meet the dogs"
        title="Adoption listings will appear here"
        intro="Verified dogs available through Leona’s Brave Haven have not been published yet. The cards below show the listing layout only."
      >
        <DemoNotice>
          <p>{demonstrationDisclaimer}</p>
        </DemoNotice>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {photos.demoDogs.slice(0, 3).map((photo, index) => (
            <DogCard
              key={photo.src}
              slug={`demonstration-profile-0${index + 1}`}
              photo={photo}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/meet-the-dogs" variant="secondary">
            View all demonstration profiles
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Rescue stories"
        title="Real stories, when they can be shared"
        intro="Authorized rescue videos, recovery updates, and adoption outcomes will be published here. Until those records are supplied, this section stays honest."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-[#e6e2e6] bg-white p-6">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Verified stories
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold">
              No public rescue stories yet
            </h3>
            <p className="mt-3 leading-7 text-muted">
              When the organization provides dates, photographs, and permission
              to share a dog’s journey, those stories will replace this empty
              state.
            </p>
          </article>
          <article className="overflow-hidden rounded-xl border border-[#e6e2e6] bg-white">
            <div className="relative aspect-[16/10]">
              <Image
                src={photos.resting.src}
                alt={photos.resting.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                Demonstration layout
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold">
                Story title will appear here
              </h3>
              <p className="mt-3 leading-7 text-muted">
                A verified rescue story can include the date, what is known and
                authorized to share, recovery progress, and a current outcome.
                This card is a layout sample only.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-10 text-center">
          <Button href="/rescue-stories" variant="secondary">
            Rescue stories
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
        <div className="mt-10 text-center">
          <Button href="/donate">Donate to Save a Dog</Button>
        </div>
      </Section>

      <Section
        eyebrow="Get involved"
        title="Foster, transport, and volunteer"
        intro="Dogs need more than a rescue pull. They need temporary homes, safe rides, and people who can help with care and community events."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-[#e6e2e6] p-6">
            <h3 className="font-heading text-xl font-bold">Foster a rescue dog</h3>
            <p className="mt-3 leading-7 text-muted">
              Open a spare room or quiet corner so a dog can recover outside a
              crowded shelter environment.
            </p>
          </article>
          <article className="rounded-xl border border-[#e6e2e6] p-6">
            <h3 className="font-heading text-xl font-bold">Help with transport</h3>
            <p className="mt-3 leading-7 text-muted">
              Volunteer drivers help move dogs out of high-risk situations and
              toward veterinary care or foster homes.
            </p>
          </article>
          <article className="rounded-xl border border-[#e6e2e6] p-6">
            <h3 className="font-heading text-xl font-bold">Volunteer your time</h3>
            <p className="mt-3 leading-7 text-muted">
              Shelter assistance, adoption support, and community outreach all
              keep the rescue moving.
            </p>
          </article>
        </div>
        <div className="mt-10 text-center">
          <Button href="/foster-and-volunteer" variant="secondary">
            Apply to help
          </Button>
        </div>
      </Section>

      <Section
        tone="charcoal"
        title="Another dog is waiting for a second chance"
        intro="If you can give, foster, or share this work, you help Leona’s Brave Haven keep answering urgent calls across Florida."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/donate" size="lg">
            Donate to Save a Dog
          </Button>
          <Button href="/contact" variant="inverse" size="lg">
            Contact the rescue
          </Button>
        </div>
      </Section>
    </>
  );
}
