import Image from "next/image";
import { site } from "@/lib/site";

type WhatsAppLinkProps = {
  className?: string;
  size?: number;
  floating?: boolean;
  onClick?: () => void;
};

export function WhatsAppLink({
  className = "",
  size,
  floating = false,
  onClick,
}: WhatsAppLinkProps) {
  const iconSize = size ?? (floating ? 64 : 40);

  const icon = (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Leona’s Brave Haven on WhatsApp"
      className={`inline-flex shrink-0 items-center justify-center rounded-full shadow-[0_10px_28px_rgba(48,48,48,0.28)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${className}`}
      onClick={onClick}
    >
      <Image
        src="/brand/whatsapp.webp"
        alt=""
        width={iconSize}
        height={iconSize}
        className="block"
        style={{ width: iconSize, height: iconSize }}
      />
    </a>
  );

  if (!floating) return icon;

  return (
    <div className="whatsapp-float pointer-events-none">
      <div className="mx-auto flex w-full max-w-6xl justify-end px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto">{icon}</div>
      </div>
    </div>
  );
}
