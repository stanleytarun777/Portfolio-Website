import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,#102948,#14355f)] px-6 py-10 text-center shadow-[0_30px_72px_rgba(15,23,42,0.16)] lg:px-8 lg:py-12"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-white/58">Contact</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3rem]">
        Open to internship opportunities where strong fundamentals and steady execution matter.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">
        If you are hiring for software engineering, web development, or IT
        roles, I would welcome the opportunity to connect and discuss how I can
        contribute.
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
          className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
        >
          View GitHub
        </a>
      </div>

      <p className="mt-6 text-sm text-white/54">{profile.phone}</p>
    </section>
  );
}
