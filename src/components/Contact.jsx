import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-[2.1rem] border border-white/65 bg-[linear-gradient(180deg,rgba(16,35,63,0.98),rgba(11,27,48,0.98))] px-5 py-10 text-center shadow-[0_28px_64px_rgba(15,23,42,0.16)] sm:px-6 lg:px-8 lg:py-12"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-white/58">Contact</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-[2.35rem]">
        Let’s connect if you’re hiring for software engineering, web development, or IT internship roles.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
        I’m looking for opportunities where I can contribute meaningfully,
        keep growing quickly, and bring thoughtful execution to a professional
        team.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--navy)] transition duration-300 hover:-translate-y-0.5"
        >
          Email Stanley
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

      <p className="mt-6 text-sm text-white/54">{profile.phone}</p>
    </section>
  );
}
