import BackgroundScene from "./BackgroundScene.jsx";
import { profile } from "../data/profile.js";

const metrics = [
  { label: "Focus", value: "Frontend systems" },
  { label: "Strength", value: "Responsive UI" },
  { label: "Approach", value: "Calm, practical build quality" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-center lg:gap-12 lg:px-8 lg:pb-16 lg:pt-16"
    >
      <div className="animate-fade-up max-w-2xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-[rgba(18,58,114,0.14)] bg-white/70 px-4 py-2 text-xs font-medium tracking-[0.18em] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          {profile.major} • {profile.concentration}
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
          {profile.heroHeadline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {profile.heroDescription}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_30px_rgba(13,35,70,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#163e73]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/65 bg-white/55 p-4 shadow-[0_16px_36px_rgba(15,23,42,0.06)] backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up-delayed">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 p-3 shadow-[0_34px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/70 bg-[linear-gradient(180deg,#f7fafc,#edf3f8)] p-4">
            <BackgroundScene />
          </div>
        </div>
      </div>
    </section>
  );
}
