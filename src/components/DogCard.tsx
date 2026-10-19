import Image from "next/image";
import { Button } from "@/components/Button";
import { statusLabel, type Dog } from "@/lib/dogs";

type DogCardProps = {
  dog: Dog;
};

export function DogCard({ dog }: DogCardProps) {
  const photo = dog.images[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e6e2e6] bg-white shadow-[0_8px_24px_rgba(48,48,48,0.06)]">
      <div className="relative aspect-[4/3] bg-[#f4f2f4]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-heading font-semibold uppercase tracking-[0.14em] text-muted">
          {statusLabel(dog.status)}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold text-charcoal">
          {dog.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{dog.summary}</p>
        <Button href={`/meet-the-dogs/${dog.slug}`} variant="secondary" className="mt-5">
          Meet {dog.name}
        </Button>
      </div>
    </article>
  );
}
