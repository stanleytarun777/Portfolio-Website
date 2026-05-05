import { profile } from "../data/profile.js";

const pillars = [
  {
    title: "Engineering mindset",
    text: "I focus on clear structure, maintainable code, and solutions that scale beyond a quick demo.",
  },
  {
    title: "Systems awareness",
    text: "My CIS background gives me a useful balance of software development, business context, and infrastructure thinking.",
  },
  {
    title: "Execution style",
    text: "I value calm problem solving, strong communication, and turning requirements into working products with intention.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.84))] p-6 shadow-[0_28px_68px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-8"
    >
      <div className="rounded-[1.9rem] border border-white/80 bg-[linear-gradient(180deg,#102948,#163a68)] p-6 text-white shadow-[0_24px_54px_rgba(15,23,42,0.12)]">
        <p className="text-xs uppercase tracking-[0.2em] text-white/58">Professional Summary</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
          A software-focused portfolio built around substance, not noise.
        </h2>
        <p className="mt-5 text-base leading-8 text-white/76">{profile.summary}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-[1.7rem] border border-white/80 bg-white/78 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
          >
            <p className="text-sm font-semibold tracking-tight text-slate-950">{pillar.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
