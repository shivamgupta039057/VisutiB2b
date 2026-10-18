import Image from "next/image";

export function Customers() {
  const names = [
    "Reliance Smart Money",
    "KPMG",
    "Tata Indicash",
    "Tally",
    "Glenmark",
    "Tork",
    "Customer",
    "Customer",
    "Customer",
    "Customer",
    "Bike Bazaar",
    "Best Western",
    "Kikkoman",
    "Ambrane",
    "Customer",
  ];
  return (
    <section
      aria-label="Our customers"
      className="site-container py-14 md:py-16"
    >
      <div className="text-center">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
          Good company. Great growth.
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-[30px]">
          Trusted by 5,000+ growing businesses
        </h2>
        <p className="mt-3 text-sm text-muted">
          Big ambitions deserve a CRM that grows with you.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1060px] grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-5 md:gap-x-16 md:gap-y-10">
        {[1, 2, 3, 4, 5, 11, 12, 13, 14, 15].map((n) => (
          <div
            key={n}
            className="flex h-10 items-center justify-center md:h-12"
          >
            <Image
              src={`/images/Visuti/client${n}.webp`}
              alt={names[n - 1]}
              width={145}
              height={58}
              className="max-h-10 w-auto max-w-full object-contain transition-all duration-300 hover:scale-105 md:max-h-12"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
