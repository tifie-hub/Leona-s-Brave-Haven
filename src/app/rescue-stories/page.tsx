import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { DemoNotice } from "@/components/DemoNotice";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/demo-media";

export const metadata: Metadata = {
  title: "Rescue Stories",
  description:
    "Authorized rescue stories, recovery updates, and videos from Leona’s Brave Haven will appear here when they can be verified and shared.",
};

export default function RescueStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories and updates"
        title="Rescue stories"
        intro="This page is ready for real rescue stories, recovery updates, videos, and adoption outcomes. Those materials will be published only with authorization and verified details."
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-soft bg-[#f8fbfa] p-8">
          <h2 className="font-heading text-2xl font-bold">
            No verified public stories yet
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            When a story is ready, it can include a title, date if known,
            authorized photographs or video, recovery progress, the current
            outcome, and a way to support the next rescue. Nothing here is
            invented to fill space.
          </p>
        </div>

        <div className="mt-10">
          <DemoNotice>
            <p>
              The card below is a layout preview. The photograph is a licensed
              Unsplash image and is not a Leona’s Brave Haven rescue case.
            </p>
          </DemoNotice>
        </div>

        <article className="mt-8 overflow-hidden rounded-xl border border-[#e6e2e6] bg-white lg:grid lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src={photos.resting.src}
              alt={photos.resting.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="p-8">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-orange">
              Demonstration story layout
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold">
              Story title will appear here
            </h2>
            <p className="mt-2 text-sm text-muted">Date: not yet provided</p>
            <p className="mt-4 leading-7 text-muted">
              Verified rescue details, recovery notes, and current outcomes will
              be written here. Until then, this preview only shows the structure
              of a story page.
            </p>
            <div className="mt-6">
              <Button href="/donate" variant="secondary">
                Support the next rescue
              </Button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
