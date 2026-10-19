import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { DemoNotice } from "@/components/DemoNotice";
import { demonstrationDisclaimer, photos } from "@/lib/demo-media";

const fields = [
  "Name",
  "Age",
  "Breed or mix",
  "Size",
  "Temperament",
  "Care requirements",
  "Status",
  "Adoption area",
] as const;

function getDemoDog(slug: string) {
  const match = slug.match(/^demonstration-profile-0([1-6])$/);
  if (!match) return null;
  const index = Number(match[1]) - 1;
  return photos.demoDogs[index] ?? null;
}

export function generateStaticParams() {
  return photos.demoDogs.map((_, index) => ({
    slug: `demonstration-profile-0${index + 1}`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const photo = getDemoDog(slug);
  if (!photo) return { title: "Dog profile" };

  return {
    title: "Demonstration dog profile",
    description:
      "A demonstration profile layout for Leona’s Brave Haven. This is not a verified rescue dog listing.",
    robots: { index: false, follow: true },
  };
}

export default async function DogProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const photo = getDemoDog(slug);
  if (!photo) notFound();

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <DemoNotice title="Demonstration profile">
        <p>{demonstrationDisclaimer}</p>
      </DemoNotice>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#f4f2f4]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Licensed Unsplash photograph used as a visual asset for layout
            development.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Demonstration listing
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold">
            Verified name pending
          </h1>
          <p className="mt-4 leading-8 text-muted">
            This page shows how an individual dog profile will look. None of
            the fields below are filled with invented facts.
          </p>

          <dl className="mt-8 divide-y divide-[#e6e2e6] border-y border-[#e6e2e6]">
            {fields.map((field) => (
              <div
                key={field}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-heading font-semibold">{field}</dt>
                <dd className="text-muted sm:col-span-2">
                  Awaiting a verified record from Leona’s Brave Haven
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/foster-and-volunteer#application">
              Start an adoption inquiry
            </Button>
            <Button href="/meet-the-dogs" variant="secondary">
              Back to Meet the Dogs
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
