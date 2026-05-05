import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(16,35,63,0.97),rgba(9,24,46,0.97))] px-6 py-10 text-center shadow-[0_28px_64px_rgba(15,23,42,0.14)] lg:px-8 lg:py-12"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Contact</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        Ready to contribute, learn quickly, and bring structured execution to a team.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
        I’m actively seeking software engineering, web development, and
        technology internship opportunities where I can add value while growing
        through real product and systems work.
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
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
        >
          View GitHub
        </a>
      </div>

      <p className="mt-6 text-sm text-slate-400">{profile.phone}</p>
    </section>
  );
}
