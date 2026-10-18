import { Button, Icon } from "./ui";

function SalesDashboard() {
  const bars = [42, 65, 48, 87, 62, 76, 51, 94, 71, 81, 57, 90];
  return (
    <div className="relative mx-auto w-full max-w-[530px] pb-8 pr-3 sm:pr-7">
      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_12px_45px_#5689b915] sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white">
              <Icon name="chart" className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold">Sales overview</span>
          </div>
          <span className="rounded-md border border-slate-100 px-2 py-1 text-[9px] text-slate-500">
            This month⌄
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-5">
          {[
            ["Revenue", "₹24.8L", "+18.6%"],
            ["Active deals", "128", "+12.4%"],
            ["Win rate", "32.5%", "+8.2%"],
          ].map(([label, value, growth]) => (
            <div key={label}>
              <p className="text-[9px] text-slate-400 sm:text-[10px]">
                {label}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {value}
              </p>
              <p className="mt-1 text-[9px] text-emerald-600">↗ {growth}</p>
            </div>
          ))}
        </div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-semibold">Revenue performance</span>
          <span className="flex items-center gap-1 text-[9px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Revenue
          </span>
        </div>
        <div className="relative flex h-36 items-end gap-2 border-b border-slate-100 px-2 pb-1 sm:h-44 sm:gap-3">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="border-t border-dashed border-slate-100"
              />
            ))}
          </div>
          {bars.map((h, i) => (
            <div
              key={i}
              className="relative flex h-full flex-1 items-end gap-0.5"
            >
              <div
                className="w-full rounded-t-[3px] bg-[#b6caff]"
                style={{ height: `${h * 0.7}%` }}
              />
              <div
                className="w-full rounded-t-[3px] bg-[#6c91ff]"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[8px] text-slate-400">
          <span>01 Oct</span>
          <span>08 Oct</span>
          <span>15 Oct</span>
          <span>22 Oct</span>
          <span>31 Oct</span>
        </div>
        <p className="mt-5 text-[9px] text-slate-400">
          Illustrative dashboard · Sample data
        </p>
      </div>
      <div className="absolute bottom-0 right-0 flex items-center gap-3 rounded-xl border border-white bg-white/95 px-4 py-3 shadow-lg shadow-blue-900/5">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-500">
          <Icon name="chart" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[10px] text-slate-500">A clearer view of growth</p>
          <p className="mt-0.5 text-sm font-semibold text-ink">
            Every insight. One dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-[#edf5ff] py-16 md:py-20">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <SalesDashboard />
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Clarity that moves you forward
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] text-ink md:text-[38px]">
            Big decisions.
            <br />
            Backed by better insights.
          </h2>
          <p className="mt-5 text-sm leading-6 text-muted md:text-base">
            Get the complete picture of your sales performance. Find the
            bottlenecks, spot new opportunities, and give every decision a
            little more confidence.
          </p>
          <ul className="my-7 space-y-3.5">
            {[
              "See which marketing channels bring your best leads.",
              "Track team activity, follow-ups, and daily performance.",
              "Catch missed opportunities before they slip away.",
              "Turn real-time reports into your next growth move.",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2.5 text-sm leading-5 text-slate-700"
              >
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-[#f6b39a] text-[#f09b76]">
                  <Icon name="check" className="h-2.5 w-2.5" />
                </span>
                {text}
              </li>
            ))}
          </ul>
          <Button href="https://Visuti.io/features/reports" arrow>
            Explore Reports
          </Button>
        </div>
      </div>
    </section>
  );
}
