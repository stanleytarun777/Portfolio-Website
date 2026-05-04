import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/60 bg-[linear-gradient(180deg,rgba(16,35,63,0.96),rgba(12,27,50,0.96))] px-6 py-10 text-center shadow-[0_24px_60px_rgba(15,23,42,0.14)] lg:px-8"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Contact</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
        Let’s build something clear, useful, and beautifully composed.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        I’m actively seeking internship and growth opportunities where I can contribute to product
        quality, team momentum, and user-centered software experiences.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--navy)] transition duration-300 hover:-translate-y-0.5"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
        >
          GitHub Profile
        </a>
      </div>

      <p className="mt-6 text-sm text-slate-400">{profile.phone}</p>
    </section>
  );
}
