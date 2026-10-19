import Image from "next/image";
import Link from "next/link";
import type { LicensedPhoto } from "@/lib/demo-media";

type DogCardProps = {
  slug: string;
  photo: LicensedPhoto;
};

export function DogCard({ slug, photo }: DogCardProps) {
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
          Demonstration listing
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold text-charcoal">
          Verified name pending
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">
          Age, breed, size, temperament, and adoption status will appear here
          when Leona’s Brave Haven supplies a verified record.
        </p>
        <p className="mt-4 text-xs leading-5 text-muted">
          Licensed Unsplash photograph. Not a documented rescue case.
        </p>
        <Link
          href={`/meet-the-dogs/${slug}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md border-2 border-charcoal px-4 font-heading text-sm font-semibold text-charcoal hover:bg-mint"
        >
          View demonstration profile
        </Link>
      </div>
    </article>
  );
}
