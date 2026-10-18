"use client";

import { useState } from "react";
import { Button, Icon, Logo } from "./ui";

const menus = [
  {
    label: "Features",
    items: [
      ["Lead management", "#features"],
      ["Sales automation", "#ai"],
      ["Reports & dashboards", "#insights"],
      ["Data & security", "#why-Visuti"],
    ],
  },
  {
    label: "Industries",
    items: [
      ["Manufacturing", "https://Visuti.io/industry/manufacturing-crm"],
      ["Education", "https://Visuti.io/industry/higher-education-crm"],
      ["Explore industries", "https://Visuti.io/industry/others"],
    ],
  },
  {
    label: "Resources",
    items: [
      ["Customer stories", "#stories"],
      ["Blog & insights", "https://Visuti.io/blog"],
      ["Help center", "https://support.Visuti.io/"],
    ],
  },
];

function NavMenu({ label, items }: { label: string; items: string[][] }) {
  return (
    <details className="nav-dropdown group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md py-3 text-[13px] font-medium text-slate-700 transition-colors hover:text-brand">
        {label}
        <Icon
          name="chevron"
          className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="z-30 mt-1 min-w-56 rounded-xl border border-slate-100 bg-white p-2 shadow-xl xl:absolute xl:left-0">
        {items.map(([text, href]) => (
          <a
            onClick={(e) =>
              e.currentTarget.closest("details")?.removeAttribute("open")
            }
            key={text}
            href={href}
            className="block rounded-lg px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-brand"
          >
            {text}
          </a>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <div className="[&_img]:h-7! sm:[&_img]:h-9!">
          <Logo />
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex"
        >
          <NavMenu {...menus[0]} />
          <a className="nav-link" href="#comparison">
            Dare to Compare
          </a>
          <NavMenu {...menus[1]} />
          <a className="nav-link" href="https://Visuti.io/pricing">
            Pricing
          </a>
          <NavMenu {...menus[2]} />
          <a className="nav-link" href="https://Visuti.io/refer-and-earn">
            Refer & Earn
          </a>
        </nav>
        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href="https://app.Visuti.io/"
            aria-label="Log in to Visuti"
            className="rounded-lg border border-blue-100 p-3 text-brand hover:bg-blue-50"
          >
            <Icon name="users" className="h-4 w-4" />
          </a>
          <Button
            href="https://Visuti.io/pricing"
            variant="secondary"
            className="min-h-10! px-4! py-2! text-xs!"
          >
            Start Free Trial
          </Button>
          <Button className="min-h-10! px-4! py-2! text-xs!">
            Book a Demo
          </Button>
        </div>
        <div className="flex items-center gap-3 xl:hidden">
          <Button className="hidden! min-[360px]:inline-flex! min-h-10! px-4! py-2! text-xs!">
            Book a Demo
          </Button>
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink hover:bg-blue-50"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {open && (
        <nav
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-slate-100 bg-white px-6 pb-6 xl:hidden"
        >
          <NavMenu {...menus[0]} />
          <a
            onClick={() => setOpen(false)}
            className="mobile-nav-link"
            href="#comparison"
          >
            Dare to Compare
          </a>
          <NavMenu {...menus[1]} />
          <a className="mobile-nav-link" href="https://Visuti.io/pricing">
            Pricing
          </a>
          <NavMenu {...menus[2]} />
          <a className="mobile-nav-link" href="https://app.Visuti.io/">
            Log in
          </a>
          <Button
            href="https://Visuti.io/pricing"
            variant="secondary"
            className="mt-3 w-full"
          >
            Start Free Trial <Icon />
          </Button>
        </nav>
      )}
    </header>
  );
}
