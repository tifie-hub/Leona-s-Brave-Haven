import { Button } from "@/components/Button";
import { site } from "@/lib/site";

type PayPalDonateProps = {
  label?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function PayPalDonate({
  label = "Donate with PayPal",
  size = "md",
  variant = "primary",
  className,
  onClick,
}: PayPalDonateProps) {
  return (
    <Button
      href={site.donateUrl}
      size={size}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
