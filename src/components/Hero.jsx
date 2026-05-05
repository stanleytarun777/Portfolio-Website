import { useState } from "react";
import { profile } from "../data/profile.js";

const metrics = [
  "I build full-stack React apps",
  "I've processed 40K+ real records",
  "I hold two Meta certifications",
];

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <section id="top" className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-end lg:gap-10">
          <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.88))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="inline-flex items-center rounded-full border border-[rgba(16,41,77,0.08)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Stanley Nyford
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[4.25rem]">
              {profile.heroHeadline}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {profile.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_34px_rgba(13,35,70,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#173f76]"
              >
                View My Projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                Email Me
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-[1.25rem] border border-slate-200/70 bg-white px-5 py-4"
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(180deg,#102948,#15365f)] p-5 text-white shadow-[0_24px_52px_rgba(15,23,42,0.14)] sm:p-6">
            <div className="rounded-[1.65rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <button
                  type="button"
                  aria-label="Open profile image"
                  className="group relative h-24 w-24 overflow-hidden rounded-[1.8rem] border-4 border-white/90 shadow-[0_22px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1"
                  onClick={() => setShowImage(true)}
                >
                  <img
                    src={profile.image}
                    alt={`${profile.name} professional headshot`}
                    className="h-full w-full object-cover"
                  />
                </button>

                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  {profile.graduation}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {profile.name}
                </p>
                <p className="mt-2 text-sm font-medium text-white/76">{profile.role}</p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {profile.college}
                  <br />
                  {profile.major} • {profile.concentration}
                  <br />
                  {profile.location}
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-[1.15rem] border border-white/10 bg-white/6 px-4 py-3"
                  >
                    <p className="text-sm text-white/64">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Profile image preview"
          onClick={() => setShowImage(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.38)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-slate-700 shadow-lg transition hover:bg-white"
              aria-label="Close image preview"
              onClick={() => setShowImage(false)}
            >
              ×
            </button>

            <img
              src={profile.image}
              alt={`${profile.name} professional headshot`}
              className="max-h-[82vh] w-full rounded-[1.4rem] object-contain bg-[#d8d0c7]"
            />
          </div>
        </div>
      )}
    </>
  );
}
