type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "white" | "mint" | "charcoal" | "soft";
  children: React.ReactNode;
  className?: string;
};

const tones = {
  white: "bg-white text-charcoal",
  mint: "bg-mint text-charcoal",
  charcoal: "bg-charcoal text-white",
  soft: "bg-[#f4f2f4] text-charcoal",
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "white",
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {(eyebrow || title || intro) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow ? (
              <p
                className={`text-sm font-heading font-semibold uppercase tracking-[0.16em] ${
                  tone === "charcoal" ? "text-lime" : "text-muted"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p
                className={`mt-4 text-lg leading-8 ${
                  tone === "charcoal" ? "text-white/85" : "text-muted"
                }`}
              >
                {intro}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
