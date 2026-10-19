import Image from "next/image";
import Link from "next/link";
import { mapsSearchUrl, navLinks, site } from "@/lib/site";

const policyLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/donation-policy", label: "Donation policy" },
] as const;

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="inline-flex rounded-md bg-white p-3">
            <Image
              src="/brand/leonas-brave-haven-logo.png"
              alt={site.name}
              width={180}
              height={180}
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-5 max-w-md font-heading text-xl font-semibold leading-8">
            {site.motto}
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
            A Florida dog rescue founded by {site.founder}. More than 300 dogs
            have been saved. More lives still need help.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-lime">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-lime">
            Contact
          </p>
          <address className="mt-4 not-italic leading-7 text-white/85">
            <p className="font-semibold text-white">{site.name}</p>
            <p>{site.location.street}</p>
            <p>
              {site.location.city}, {site.location.state} {site.location.zip}
            </p>
            <p>{site.location.country}</p>
            <p className="mt-3">
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-4 hover:text-lime"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-3">
              <a
                href={mapsSearchUrl()}
                className="underline underline-offset-4 hover:text-lime"
                target="_blank"
                rel="noreferrer"
              >
                Open address in Google Maps
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Dog rescue in Sarasota, Florida.</p>
        </div>
      </div>
    </footer>
  );
}
