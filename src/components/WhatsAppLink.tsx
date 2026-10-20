import Image from "next/image";
import { site } from "@/lib/site";

type WhatsAppLinkProps = {
  className?: string;
  size?: number;
  onClick?: () => void;
};

export function WhatsAppLink({
  className = "",
  size = 40,
  onClick,
}: WhatsAppLinkProps) {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Leona’s Brave Haven on WhatsApp"
      className={`inline-flex shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${className}`}
      onClick={onClick}
    >
      <Image
        src="/brand/whatsapp.webp"
        alt=""
        width={size}
        height={size}
        className="block"
        style={{ width: size, height: size }}
      />
    </a>
  );
}
