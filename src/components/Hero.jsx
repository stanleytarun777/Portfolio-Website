import { useState } from "react";
import { profile } from "../data/profile.js";

const identityDetails = [
  profile.role,
  profile.college,
  `${profile.major} • ${profile.concentration}`,
  profile.graduation,
  profile.location,
];

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <section id="top" className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8 lg:pt-7">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/56 shadow-[0_35px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
          <div className="relative h-[15rem] overflow-hidden bg-[linear-gradient(135deg,#0f274b_0%,#163a6e_42%,#274f8f_100%)] sm:h-[18rem] lg:h-[20rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.34),transparent_28%),radial-gradient(circle_at_20%_35%,rgba(160,197,255,0.26),transparent_34%)]" />
            <div className="absolute inset-y-0 left-[8%] w-px bg-white/16" />
            <div className="absolute inset-y-0 left-[18%] w-px bg-white/10" />
            <div className="absolute inset-y-0 right-[14%] w-px bg-white/10" />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-[2rem] border border-white/12 bg-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md sm:h-28 sm:w-28" />
            <div className="absolute left-[20%] top-[26%] h-16 w-16 rounded-[1.4rem] border border-white/12 bg-white/6 backdrop-blur-md" />
            <div className="absolute bottom-10 right-[18%] h-28 w-36 rounded-[2rem] border border-white/12 bg-white/8 backdrop-blur-md sm:h-32 sm:w-44" />
            <div className="absolute bottom-0 right-0 h-full w-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
            <div className="absolute right-10 top-10 hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/78 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:inline-flex">
              Recruiter-ready profile
            </div>
            <div className="absolute bottom-8 left-8 rounded-[1.6rem] border border-white/12 bg-white/10 px-4 py-3 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:px-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/66">
                Software portfolio
              </p>
              <p className="mt-2 text-sm font-medium text-white/92 sm:text-base">
                Structured like a modern professional profile
              </p>
            </div>
          </div>

          <div className="relative px-4 pb-5 sm:px-6 lg:px-8 lg:pb-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-end lg:-mt-24">
                <button
                  type="button"
                  aria-label="Open profile image"
                  className="group relative h-32 w-32 shrink-0 overflow-hidden rounded-[2rem] border-[6px] border-white/92 bg-white shadow-[0_30px_55px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_38px_72px_rgba(15,23,42,0.22)] sm:h-40 sm:w-40"
                  onClick={() => setShowImage(true)}
                >
                  <img
                    src={profile.image}
                    alt={`${profile.name} professional headshot`}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-x-3 bottom-3 rounded-full bg-slate-950/62 px-3 py-1 text-xs font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    Expand photo
                  </span>
                </button>

                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[rgba(18,58,114,0.14)] bg-white/78 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-500 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                      {profile.handle}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[rgba(18,58,114,0.1)] px-3 py-1 text-xs font-medium text-[var(--navy)]">
                      Open to internships
                    </span>
                  </div>

                  <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
                    {profile.name}
                  </h1>
                  <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                    {profile.heroHeadline}
                  </p>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-slate-500">
                    {profile.heroDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                    {identityDetails.map((detail) => (
                      <span key={detail} className="inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:pb-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white shadow-[0_22px_34px_rgba(13,35,70,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#173f76]"
                >
                  Connect
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/82 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_14px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  Resume Highlights
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_14px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {profile.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.6rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.78))] px-5 py-4 shadow-[0_18px_36px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </article>
              ))}
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
