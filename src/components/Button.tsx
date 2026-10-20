import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

const glass =
  "btn-glass border border-white/90 shadow-[0_8px_24px_rgba(48,48,48,0.08)] backdrop-blur-[16px] hover:shadow-[0_10px_28px_rgba(48,48,48,0.12)]";

const variants: Record<Variant, string> = {
  primary: `${glass} bg-lime/80 text-charcoal hover:bg-lime/[0.88]`,
  secondary: `${glass} bg-white/80 text-charcoal hover:bg-white/[0.88]`,
  ghost: `${glass} bg-white/40 text-charcoal hover:bg-white/60`,
  inverse: `${glass} bg-white/25 text-white hover:bg-white/80 hover:text-charcoal`,
};

const sizes = {
  md: "min-h-12 px-5 text-base",
  lg: "min-h-14 px-6 text-base sm:text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = [
    "inline-flex items-center justify-center rounded-md font-heading font-semibold tracking-wide transition-[background-color,box-shadow,color]",
    "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    const external = href.startsWith("http://") || href.startsWith("https://");
    const linkTarget = target ?? (external ? "_blank" : undefined);
    const linkRel = rel ?? (external ? "noopener noreferrer" : undefined);

    if (external) {
      return (
        <a href={href} className={classes} target={linkTarget} rel={linkRel} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
