import Image from "next/image";
import type { ReactNode } from "react";

export function Icon({
  name = "arrow",
  className = "h-5 w-5",
}: {
  name?: string;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    sparkles: (
      <>
        <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" />
        <path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5L20 2Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-5" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5" />
      </>
    ),
    phone: (
      <path d="m7 3 3 5-2 2a14 14 0 0 0 6 6l2-2 5 3-1 4C10 23 1 14 3 4l4-1Z" />
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    quote: (
      <>
        <path d="M10 5H4v8h6v6H3m18-14h-6v8h6v6h-7" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Visuti home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/images/Visuti/client1.webp"
        alt="Visuti"
        width={126}
        height={42}
        className={`h-9 w-auto ${light ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}

export function Button({
  children,
  href = "https://Visuti.io/contact-us",
  variant = "primary",
  className = "",
  arrow = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  arrow?: boolean;
}) {
  const variants = {
    primary:
      "bg-brand text-white shadow-[0_5px_16px_#0876ff20] hover:bg-blue-700",
    secondary:
      "border border-blue-200 bg-white text-brand hover:border-brand hover:bg-blue-50",
    white: "bg-white text-brand hover:bg-blue-50",
  };
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon className="h-4 w-4" />}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[38px]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
