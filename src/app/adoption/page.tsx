import type { Metadata } from "next";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/Button";
import { DogCard } from "@/components/DogCard";
import { PageHero } from "@/components/PageHero";
import { adoptionDogs } from "@/lib/dogs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adoption",
  description:
    "Adopt a rescued dog through Leona’s Brave Haven in Sarasota, Florida. Meet dogs looking for homes and start an adoption inquiry.",
};

const steps = [
  {
    title: "Meet the dogs",
    body: "Read each dog’s story and look for a match with your household, energy, and daily routine. The dogs on this page are currently looking for adoptive homes.",
  },
  {
    title: "Start an inquiry",
    body: "Use the form below or email the rescue. An inquiry starts a conversation. It does not reserve a dog or guarantee placement.",
  },
  {
    title: "Talk through the match",
    body: "The rescue will follow up about the dog, your home, and timing. Some dogs need a quieter house, a yard, or a person who can be home more often.",
  },
  {
    title: "Welcome them home",
    body: "When the match is right, the rescue will guide the next step toward placement so the dog leaves care for a home that can keep them.",
  },
];

export default function AdoptionPage() {
  const dogs = adoptionDogs();

  return (
    <>
      <PageHero
        eyebrow="Find your dog"
        title="Adoption"
        intro="These rescued dogs are looking for adoptive homes. Each story is their own. Browse the dogs, then start an inquiry so the rescue can help you take the next step."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold">How adoption works</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          Adoption decisions depend on a good match for each dog and household.
          The rescue will use your details only to review the inquiry and
          contact you.
        </p>
        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-[#e6e2e6] bg-white p-6">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-orange">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-[#e6e2e6] bg-[#f8fbfa]">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">Dogs looking for a home</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            These dogs have recently joined the adoption list. For the full
            roster, including dogs already in care, visit Meet the Dogs.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dogs.map((dog) => (
              <DogCard key={dog.slug} dog={dog} />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/meet-the-dogs" variant="secondary">
              See every dog in care
            </Button>
          </div>
        </div>
      </section>

      <section id="inquiry" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold">Start an adoption inquiry</h2>
            <p className="mt-4 leading-8 text-muted">
              Tell us which dog you are asking about and a little about your
              home. This form does not guarantee a specific dog. It lets the
              rescue follow up.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Applications are sent to {site.email}. Do not include sensitive
              medical or financial information.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${site.email}`}>Email {site.email}</Button>
              <Button href="/foster-and-volunteer" variant="secondary">
                Foster instead
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-[#e6e2e6] bg-white p-6 sm:p-8">
            <ApplicationForm defaultInterest="Adoption inquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
