"use client";

import { useRef, useState } from "react";
import { Icon, SectionHeading } from "./ui";

const features = [
  {
    icon: "chart",
    title: "Track your productivity",
    text: "Turn everyday sales activity into clear insights. Know what’s working and where to focus next.",
    color: "bg-[#fff0f5]",
  },
  {
    icon: "grid",
    title: "Do things your way",
    text: "Your process, your pipeline. Create custom sales journeys and fields that fit your business.",
    color: "bg-[#f5e7e4]",
  },
  {
    icon: "shield",
    title: "Keep your data in control",
    text: "Give the right people the right access, with permissions that work at every level.",
    color: "bg-[#f4ece3]",
  },
  {
    icon: "sparkles",
    title: "Let your AI agents work",
    text: "Qualify leads, simplify follow-ups, and move opportunities forward with intelligent automation.",
    color: "bg-[#ddf5e7]",
  },
  {
    icon: "users",
    title: "Bring your team together",
    text: "Keep every conversation, contact, and next step connected. Better teamwork starts here.",
    color: "bg-[#e8eeff]",
  },
];

export function Features() {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  function move(direction: number) {
    if (track.current)
      track.current.scrollBy({
        left:
          direction *
          (track.current.clientWidth / (window.innerWidth >= 768 ? 3 : 1) + 20),
        behavior: "smooth",
      });
  }
  return (
    <section
      id="features"
      className="site-container scroll-mt-28 pb-20 md:pb-24"
    >
      <SectionHeading
        eyebrow="Built around your business"
        title="A little less effort. A lot more growth."
        description="Everything your sales team needs to stay organized, work smarter, and turn the right opportunities into lasting relationships."
      />
      <div
        ref={track}
        onScroll={() => {
          const el = track.current;
          if (el)
            setProgress(
              el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth),
            );
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3"
      >
        {features.map((f) => (
          <article
            key={f.title}
            className={`flex min-h-[270px] w-[88%] shrink-0 snap-start flex-col rounded-2xl p-7 sm:w-[calc((100%-20px)/2)] md:w-[calc((100%-40px)/3)] ${f.color}`}
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink">
              <Icon name={f.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {f.title}
            </h3>
            <p className="mb-6 mt-3 text-sm leading-6 text-slate-600">
              {f.text}
            </p>
            <a
              href="https://Visuti.io/pricing"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3"
            >
              Start free trial
              <Icon className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-6">
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full w-1/3 rounded-full bg-brand transition-transform duration-200"
            style={{ transform: `translateX(${progress * 200}%)` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => move(-1)}
            disabled={progress < 0.01}
            aria-label="Previous features"
            className="slider-button disabled:cursor-default disabled:opacity-35"
          >
            <Icon className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => move(1)}
            disabled={progress > 0.99}
            aria-label="Next features"
            className="slider-button disabled:cursor-default disabled:opacity-35"
          >
            <Icon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
