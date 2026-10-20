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

export function PayPalDonateForm({
  label = "Donate with PayPal",
  size = "lg",
}: {
  label?: string;
  size?: "md" | "lg";
}) {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <input type="hidden" name="hosted_button_id" value={site.paypalHostedButtonId} />
      <Button type="submit" size={size}>
        {label}
      </Button>
    </form>
  );
}
