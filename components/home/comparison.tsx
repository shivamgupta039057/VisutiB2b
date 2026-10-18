import Image from "next/image";
import { Icon } from "./ui";

function ConnectedApps({ connected }: { connected: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto mt-8 h-[265px] w-[265px] sm:h-[300px] sm:w-[300px] ${connected ? "" : "opacity-70"}`}
    >
      <div
        className={`absolute inset-5 rounded-full border ${connected ? "border-white/50" : "border-slate-300"}`}
      />
      <div
        className={`absolute inset-14 rounded-full border ${connected ? "border-white/50" : "border-slate-300"}`}
      />
      {connected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/Visuti/circle-Visuti-logo.webp"
            alt=""
            width={78}
            height={78}
            className="rounded-2xl shadow-[0_12px_32px_#5742cb60]"
          />
        </div>
      )}
      {Array.from({ length: 8 }, (_, i) => {
        const a = ((i * 45 - 90) * Math.PI) / 180;
        return (
          <div
            key={i}
            className="absolute grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm transition-transform hover:scale-110"
            style={{
              left: connected
                ? `calc(50% + ${Math.cos(a) * 115}px - 22px)`
                : `${10 + i * 28}px`,
              top: connected
                ? `calc(50% + ${Math.sin(a) * 115}px - 22px)`
                : `${218 + (i % 2) * 14}px`,
            }}
          >
            <Image
              src={`/images/Visuti/circle-icon-${i + 1}.svg`}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11"
            />
          </div>
        );
      })}
      {!connected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-400">
            Disconnected data
          </span>
        </div>
      )}
    </div>
  );
}

export function Comparison() {
  return (
    <section
      id="comparison"
      className="site-container scroll-mt-24 pb-16 pt-4 md:pb-24"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="overflow-hidden rounded-[24px] bg-[#f7f8fa] px-6 pb-5 pt-9 text-center sm:px-10 md:pt-10">
          <span className="mb-4 inline-flex rounded-full bg-slate-200/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            The everyday struggle
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Without Visuti
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted">
            Scattered leads. Endless spreadsheets. Missed follow-ups. Your team
            spends more time managing tools than building relationships.
          </p>
          <ConnectedApps connected={false} />
          <p className="pb-3 text-xs font-medium text-slate-500">
            More busywork. Less visibility. Lost opportunities.
          </p>
        </article>
        <article className="relative overflow-hidden rounded-[24px] bg-[#9580fb] px-6 pb-5 pt-9 text-center text-white sm:px-10 md:pt-10">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[50px] border-white/5" />
          <span className="relative mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
            <Icon name="sparkles" className="h-3 w-3" />
            The smarter way to grow
          </span>
          <h2 className="relative text-3xl font-semibold tracking-tight">
            With Visuti
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-6 text-white/90">
            One connected platform for your entire sales journey. Let AI handle
            the repetitive work while your team focuses on relationships and
            revenue.
          </p>
          <ConnectedApps connected />
          <p className="pb-3 text-xs font-medium text-white/90">
            One team. One source of truth. Unlimited possibilities.
          </p>
        </article>
      </div>
    </section>
  );
}
