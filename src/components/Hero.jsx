import BackgroundScene from "./BackgroundScene.jsx";
import { profile } from "../data/profile.js";

const quickPoints = [
  "Full-stack project builder",
  "Networking and systems foundation",
  "Focused on software engineering internships",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(430px,0.96fr)] lg:items-center lg:gap-14 lg:px-8 lg:pb-14 lg:pt-16"
    >
      <div className="animate-fade-up max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-[rgba(18,58,114,0.14)] bg-white/72 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 shadow-[0_12px_26px_rgba(15,23,42,0.06)]">
          Recruiter-ready portfolio
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.75rem]">
          Software engineering potential presented with clarity, structure, and
          real execution.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          {profile.intro} I bring a mix of frontend craftsmanship, networking
          knowledge, and practical problem solving grounded in coursework,
          hands-on projects, and campus work experience.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_30px_rgba(13,35,70,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#173f76]"
          >
            Explore Projects
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
          >
            View Experience
          </a>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {quickPoints.map((point) => (
            <div
              key={point}
              className="rounded-[1.5rem] border border-white/70 bg-white/60 px-5 py-4 shadow-[0_18px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            >
              <p className="text-sm font-medium leading-6 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up-delayed">
        <div className="rounded-[2.25rem] border border-white/70 bg-white/62 p-4 shadow-[0_34px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
          <div className="rounded-[1.8rem] border border-white/75 bg-[linear-gradient(180deg,#f8fbff,#edf3f9)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
            <div className="mb-4 flex items-center justify-between rounded-[1.35rem] border border-white/80 bg-white/80 px-4 py-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Professional Positioning
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">{profile.role}</p>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                Student Portfolio
              </div>
            </div>

            <BackgroundScene />
          </div>
        </div>
      </div>
    </section>
  );
}
