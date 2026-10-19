type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-[#e6e2e6] bg-[#f8fbfa]">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        {eyebrow ? (
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{intro}</p>
      </div>
    </section>
  );
}
