"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { headerLinks, site } from "@/lib/site";

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${bar.offsetHeight}px`,
      );
    };

    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        aria-hidden="true"
        className={`header-glass pointer-events-none absolute inset-0 border-b border-white shadow-[0_8px_24px_rgba(48,48,48,0.08)] backdrop-blur-[16px] transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/[0.88] shadow-[0_10px_28px_rgba(48,48,48,0.12)]"
            : "bg-white/80"
        }`}
      />
      <div
        ref={barRef}
        className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
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
          <div className="hidden xl:block">
            <Button
              href={site.youtubeUrl}
              variant="secondary"
              className="px-4"
              onClick={() => setOpen(false)}
            >
              YouTube
            </Button>
          </div>
          <Button href={site.donateUrl} className="px-4" onClick={() => setOpen(false)}>
            Donate
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="px-3 xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="relative border-t border-white/70 xl:hidden"
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
            <div className="px-3 py-2">
              <Button
                href={site.youtubeUrl}
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                YouTube
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
