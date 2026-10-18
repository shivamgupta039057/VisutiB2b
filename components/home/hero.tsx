import Image from "next/image";
import { Button, Icon } from "./ui";

export function Hero() {
  return (
    <section
      id="home"
      className="hero relative isolate overflow-hidden bg-[#e9f2ff]"
    >
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/Visuti/banner-mob.webp"
          />
          <img
            src="/images/Visuti/bannerbgnew.webp"
            alt="Sunlight over the snow-covered Himalayan peaks"
            fetchPriority="high"
            className="h-full w-full object-cover object-[62%_bottom] md:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0ff]/70 via-[#e6f0ff]/20 to-transparent sm:from-transparent" />
      </div>
      <div className="site-container relative pb-[260px] pt-10 sm:pb-24 sm:pt-16 lg:pb-20 lg:pt-[74px]">
        <div className="max-w-[620px]">
          <div className="mb-7 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[10px] font-semibold text-slate-700 shadow-sm sm:text-[11px]">
              <span className="text-base leading-none text-amber-400">★</span>
              4.7/5 on G2 & 4.8/5 on Capterra
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-violet-600 px-3 py-2 text-[10px] font-semibold text-white sm:text-[11px]">
              Native Agentic AI
              <Icon name="sparkles" className="h-3.5 w-3.5" />
            </span>
          </div>
          <h1 className="max-w-[600px] text-[40px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#10213a] sm:text-[48px] lg:text-[56px]">
            India’s Fastest-Growing
            <br className="hidden sm:block" /> MBBS CRM
            <span className="text-brand">.</span>
          </h1>
          <p className="mt-5 text-base text-slate-700 md:text-lg">
            Your path to peak performance starts here.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-700 sm:text-sm">
            {["Enterprise-grade", "Unlimited users", "Pay as you grow"].map(
              (text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-brand" />
                  {text}
                </span>
              ),
            )}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button arrow>Book a Demo</Button>
            <Button href="https://Visuti.io/pricing" variant="secondary">
              Start Free Trial
            </Button>
          </div>
          <p className="mt-3 text-[11px] text-slate-600">
            Built for ambitious teams. Designed for what’s next.
          </p>
          <div className="mt-10 flex h-16 items-center gap-4 md:mt-12 md:h-[70px] md:gap-5">
            {[1, 2, 4, 3].map((n) => (
              <Image
                key={n}
                src={`/images/Visuti/Badge${n}.svg`}
                alt={
                  [
                    "",
                    "Capterra Shortlist",
                    "Software Advice FrontRunners",
                    "Capterra rating 4.8",
                    "GetApp user reviews",
                  ][n]
                }
                width={82}
                height={76}
                className="h-full w-auto max-w-[76px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
