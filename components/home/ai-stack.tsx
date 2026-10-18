"use client";

import { useState } from "react";
import { Button, Icon } from "./ui";

const tabs = [
  {
    title: "Call Sentiment Analysis",
    subtitle: "Every conversation has a story. Understand it.",
    features: [
      [
        "AI-generated summaries",
        "Get clear, structured recaps without taking a single note.",
      ],
      [
        "Intent detection",
        "Understand buying signals and qualify the right leads.",
      ],
      ["Sentiment insights", "Know how prospects feel, beyond what they say."],
      [
        "Actionable feedback",
        "Make every next conversation better than the last.",
      ],
    ],
  },
  {
    title: "AI Chatbot",
    subtitle: "Meet your smartest teammate. Always ready to help.",
    features: [
      [
        "Instant answers",
        "Give prospects helpful answers right when they need them.",
      ],
      [
        "A helpful guide",
        "Find your way to the right tools, settings, and next steps.",
      ],
      [
        "Feature discovery",
        "Explore more of what Visuti can do with Sherpa’s guidance.",
      ],
      ["Multilingual support", "Make every customer feel right at home."],
    ],
  },
  {
    title: "Content With AI",
    subtitle: "From a blank page to the perfect next step.",
    features: [
      [
        "AI-backed automations",
        "Put workflows on autopilot, from lead assignments to follow-ups.",
      ],
      [
        "Smart sales journeys",
        "Build sales pipelines around the way your customers buy.",
      ],
      [
        "AI lead scoring",
        "Spot high-potential opportunities and know who to focus on.",
      ],
      [
        "Note to task",
        "Turn a quick note into a clear next action. Let AI do the admin.",
      ],
    ],
  },
];

function AIPreview({ active }: { active: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute -inset-5 rounded-[28px] border border-white/15" />
      <div className="relative min-h-[290px] overflow-hidden rounded-2xl border border-white/60 bg-white p-5 text-slate-700 shadow-[0_22px_70px_#34278635] sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="flex items-center gap-2 text-xs font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-100 text-violet-600">
              <Icon name="sparkles" className="h-4 w-4" />
            </span>
            Visuti AI
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
            ● Ready to help
          </span>
        </div>
        {active === 0 ? (
          <div className="pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Call intelligence · Sample preview
            </p>
            <div className="my-5 flex h-12 items-center justify-center gap-1">
              {Array.from({ length: 38 }, (_, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-violet-400"
                  style={{
                    height: `${8 + ((i * 17) % 39)}px`,
                    opacity: 0.4 + (i % 3) * 0.25,
                  }}
                />
              ))}
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <span className="text-xs font-semibold">
                Conversation summary
              </span>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                The prospect is exploring a CRM for their growing team. Key
                priorities: lead visibility, easier follow-ups, and a connected
                sales process.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px]">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-600">
                Positive sentiment
              </span>
              <span className="text-violet-600">
                Next step: Schedule demo →
              </span>
            </div>
          </div>
        ) : active === 1 ? (
          <div className="space-y-4 pt-5 text-xs leading-5">
            <p className="text-[10px] uppercase tracking-widest text-slate-400">
              Illustrative conversation
            </p>
            <div className="ml-10 rounded-xl rounded-tr-none bg-blue-50 p-3">
              How can I prioritize my leads today?
            </div>
            <div className="mr-5 rounded-xl rounded-tl-none bg-violet-50 p-3">
              <span className="mb-1 block font-semibold text-violet-600">
                Sherpa AI
              </span>
              Start with your high-intent leads. I can help you find recent
              interactions and plan your next follow-up.
            </div>
            <div className="rounded-lg border border-slate-200 p-3 text-slate-400">
              Ask Sherpa anything…
              <span className="float-right text-brand">↑</span>
            </div>
          </div>
        ) : (
          <div className="pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Email assistant · Sample preview
            </p>
            <div className="mt-4 rounded-xl border border-slate-100 p-4">
              <p className="border-b border-slate-100 pb-3 text-[11px]">
                <span className="text-slate-400">Subject:</span> Let’s take your
                sales to the next level
              </p>
              <div className="space-y-3 pt-3 text-xs leading-5 text-slate-500">
                <p>Hi Alex,</p>
                <p>
                  Great speaking with you today! Here’s how Visuti can help your
                  team stay connected and focus on what matters most: growing
                  your business.
                </p>
                <p>Would Thursday work for a quick walkthrough?</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <span className="rounded-lg bg-violet-50 px-3 py-2 text-[10px] font-medium text-violet-600">
                ✦ Make it more personal
              </span>
              <span className="rounded-lg bg-brand px-3 py-2 text-[10px] text-white">
                Ready to send ✓
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AIStack() {
  const [active, setActive] = useState(2);
  const tab = tabs[active];
  return (
    <section id="ai" className="site-container scroll-mt-28 pb-20 md:pb-24">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#947efb] px-6 py-11 text-white sm:px-10 md:px-14 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 -top-52 -z-10 h-[550px] w-[550px] rounded-full border-[85px] border-white/[0.07]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-80 right-0 -z-10 h-[600px] w-[600px] rounded-full border-[90px] border-white/[0.07]"
        />
        <div className="text-center">
          <Icon
            name="sparkles"
            className="mx-auto mb-3 h-7 w-7 text-[#eee5ff]"
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-[38px]">
            Your unfair advantage? A full AI stack.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85 md:text-base">
            With AI in the background, your team focuses on winning, not
            managing.
          </p>
        </div>
        <div
          role="tablist"
          aria-label="AI features"
          className="mx-auto mb-12 mt-8 flex max-w-fit flex-wrap justify-center gap-2 rounded-2xl bg-white/10 p-1.5"
        >
          {tabs.map((t, i) => (
            <button
              id={`ai-tab-${i}`}
              role="tab"
              key={t.title}
              aria-selected={active === i}
              aria-controls="ai-panel"
              tabIndex={active === i ? 0 : -1}
              onKeyDown={(e) => {
                if (
                  ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 2
                        : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                  setActive(next);
                  document.getElementById(`ai-tab-${next}`)?.focus();
                }
              }}
              onClick={() => setActive(i)}
              className={`rounded-xl px-4 py-3 text-xs font-medium transition-all sm:px-5 ${active === i ? "bg-[#ffe57a] text-[#332851] shadow-sm" : "text-white hover:bg-white/15"}`}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id="ai-panel"
          aria-labelledby={`ai-tab-${active}`}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {tab.title}
            </h3>
            <p className="mt-2 text-sm text-white/85">{tab.subtitle}</p>
            <div className="mb-7 mt-7 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {tab.features.map(([title, text]) => (
                <div key={title}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#ffe995]" />
                    {title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-white/85">{text}</p>
                </div>
              ))}
            </div>
            <Button variant="white" className="min-h-11! px-5! py-2.5!">
              Explore AI with a Demo
              <Icon name="play" className="h-3.5 w-3.5" />
            </Button>
          </div>
          <AIPreview active={active} />
        </div>
      </div>
    </section>
  );
}
