import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { dogs, getDog, statusLabel } from "@/lib/dogs";

export const instant = false;

export function generateStaticParams() {
  return dogs.map((dog) => ({ slug: dog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dog = getDog(slug);
  if (!dog) return { title: "Dog profile" };

  return {
    title: dog.name,
    description: dog.summary,
  };
}

export default async function DogProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dog = getDog(slug);
  if (!dog) notFound();

  const details = [
    ["Name", dog.name],
    ["Status", statusLabel(dog.status)],
    ["Sex", dog.sex],
    ["Age", dog.age],
    ["Size", dog.size],
    ["Weight", dog.weight],
    ["Spayed or neutered", dog.neutered],
    ["Temperament", dog.temperament],
    ["Care needs", dog.care],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#f4f2f4]">
            <Image
              src={dog.images[0].src}
              alt={dog.images[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            {dog.status === "adopted" ? (
              <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_4px_12px_rgba(48,48,48,0.25)]">
                Adopted
              </span>
            ) : null}
          </div>
          {dog.images.length > 1 ? (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {dog.images.slice(1).map((photo) => (
                <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#f4f2f4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p
            className={`font-heading text-sm font-semibold uppercase tracking-[0.16em] ${
              dog.status === "adopted" ? "text-orange" : "text-muted"
            }`}
          >
            {statusLabel(dog.status)}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold">{dog.name}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{dog.summary}</p>

          <div className="mt-6 space-y-4">
            {dog.story.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-charcoal">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 divide-y divide-[#e6e2e6] border-y border-[#e6e2e6]">
            {details.map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="font-heading font-semibold">{label}</dt>
                <dd className="text-muted sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {dog.status === "adopted" ? (
              <>
                <Button href="/meet-the-dogs">See dogs looking for a home</Button>
                <Button href="/adoption" variant="secondary">
                  Back to Adoption
                </Button>
              </>
            ) : (
              <>
                <Button href="/adoption#inquiry">
                  {dog.status === "reserved" ? `Ask about ${dog.name}` : `Start an inquiry for ${dog.name}`}
                </Button>
                <Button href="/meet-the-dogs" variant="secondary">
                  Back to Meet the Dogs
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
