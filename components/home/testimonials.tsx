"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon, SectionHeading } from "./ui";

const stories = [
  {
    name: "Vikrant Kulkarni",
    role: "CMO, Meliora Technologies",
    image: "test3.webp",
    text: "We have used couple of CRM tools earlier—Bitrix & Hubspot; I found Visuti UI & UX very user friendly; The team was highly empathetic towards my requirement and we received excellent support; Very easy to use tool and features.",
  },
  {
    name: "Shibani Thakur",
    role: "Owner, WaterApp",
    image: "test2.webp",
    text: "What we really liked about Visuti is the onboarding process is very smooth and the team is very responsive. Our team got quickly trained on Visuti and found it very easy to use. I’d definitely recommend Visuti to all Growing Businesses.",
  },
  {
    name: "Ritesh Agarwal",
    role: "Co-founder, Winworld Realty Services",
    image: "test1.webp",
    text: "We switched to Visuti after trying four other leading CRMs, and it performed beyond all expectations. Its simple UI & UX quickly won over the sales team and helped them collaborate and close more deals effortlessly.",
  },
];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  function move(direction: number) {
    track.current?.scrollBy({
      left: direction * track.current.clientWidth,
      behavior: "smooth",
    });
  }
  return (
    <section
      id="stories"
      className="site-container scroll-mt-28 py-20 md:py-24"
    >
      <SectionHeading
        eyebrow="Real people. Real progress."
        title="Growing businesses. Happier sales teams."
        description="The best part of our story? Helping our customers write theirs."
      />
      <div
        ref={track}
        onScroll={() => {
          const el = track.current;
          if (el) setPage(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {stories.map((s) => (
          <article
            key={s.name}
            className="flex min-h-[330px] w-full shrink-0 snap-start flex-col rounded-2xl border border-blue-50 bg-[#edf4ff] p-7 md:w-[calc((100%-40px)/3)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <Icon name="quote" className="h-7 w-7 text-brand/50" />
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Customer story
              </span>
            </div>
            <blockquote className="flex-1 text-sm leading-6 text-slate-600">
              “{s.text}”
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-blue-100/80 pt-5">
              <Image
                src={`/images/Visuti/${s.image}`}
                alt={s.name}
                width={46}
                height={46}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xs font-semibold text-ink">{s.name}</h3>
                <p className="mt-1 text-[10px] text-slate-500">{s.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-7 flex items-center justify-center gap-4 md:hidden">
        <button
          onClick={() => move(-1)}
          disabled={page === 0}
          aria-label="Previous customer story"
          className="slider-button disabled:opacity-30"
        >
          <Icon className="h-4 w-4 rotate-180" />
        </button>
        <span className="text-xs text-muted">
          {page + 1} / {stories.length}
        </span>
        <button
          onClick={() => move(1)}
          disabled={page === 2}
          aria-label="Next customer story"
          className="slider-button disabled:opacity-30"
        >
          <Icon className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-8 text-center text-xs text-muted">
        Join a growing community of{" "}
        <span className="font-semibold text-ink">5,000+ businesses.</span> Your
        next chapter starts here.
      </p>
    </section>
  );
}
