import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-[2rem] border border-white/70 bg-white/58 p-6 shadow-[0_28px_64px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Skills</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Technical capabilities grouped with clarity and balance.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-600">
          My skill set combines software development, networking foundations,
          and the collaborative habits needed to contribute in professional
          environments.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,248,252,0.78))] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(50,96,154,0.95),rgba(16,35,63,1))] shadow-[0_10px_24px_rgba(18,58,114,0.22)]">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white/76 px-3 py-2 text-sm text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
