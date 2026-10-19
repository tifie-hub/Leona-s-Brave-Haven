"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { headerLinks, site } from "@/lib/site";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e6e2e6] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={site.name}
          className="flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/leonas-brave-haven-logo.png"
            alt={site.name}
            width={220}
            height={220}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-2.5 py-2 text-base font-heading font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${
                isActive(pathname, link.href)
                  ? "bg-mint text-charcoal"
                  : "text-charcoal hover:bg-[#f4f2f4]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`inline-flex min-h-12 items-center justify-center rounded-md border-2 px-4 py-2 text-base font-heading font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${
              isActive(pathname, "/")
                ? "border-charcoal bg-mint text-charcoal"
                : "border-charcoal bg-white text-charcoal hover:bg-[#f4f2f4]"
            }`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/donate"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-lime px-4 py-2 text-base font-heading font-semibold text-charcoal transition-colors hover:bg-[#cce600] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            onClick={() => setOpen(false)}
          >
            Donate to Save a Dog
          </Link>
          <button
            type="button"
            className="inline-flex min-h-12 items-center rounded-md border-2 border-charcoal px-3 py-2 font-heading text-base font-semibold text-charcoal xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[#e6e2e6] bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 font-heading text-lg font-semibold ${
                  isActive(pathname, link.href)
                    ? "bg-mint text-charcoal"
                    : "text-charcoal hover:bg-[#f4f2f4]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
