import Image from "next/image";
import { SectionHeading } from "./ui";

const benefits = [
  {
    image: "team1.webp",
    title: "Easy from day one",
    text: "A CRM that feels familiar from the first click. Less time learning, more time doing what you do best.",
    color: "bg-[#fff7d5]",
    label: "Made for real people",
  },
  {
    image: "team2.webp",
    title: "Real people. Expert help.",
    text: "From your first setup to your next big milestone, our friendly team is here to help you make the most of Visuti.",
    color: "bg-[#fff0f5]",
    label: "With you, all the way",
  },
  {
    image: "team3.webp",
    title: "Your data, in safe hands",
    text: "Built on a solid technology foundation, with secure access and the peace of mind your business deserves.",
    color: "bg-[#edf2ff]",
    label: "Confidence built in",
  },
];
export function Benefits() {
  return (
    <section
      id="why-Visuti"
      className="site-container scroll-mt-28 pb-20 md:pb-24"
    >
      <SectionHeading
        eyebrow="Thoughtfully simple. Seriously powerful."
        title="A sales CRM your team will actually love."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b) => (
          <article
            key={b.title}
            className="group overflow-hidden rounded-2xl border border-slate-100"
          >
            <div className="flex h-[205px] items-center justify-center bg-[#f8f9fb] px-8 pt-5">
              <Image
                src={`/images/Visuti/${b.image}`}
                alt={b.title}
                width={280}
                height={180}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className={`min-h-[188px] p-6 ${b.color}`}>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                {b.label}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
