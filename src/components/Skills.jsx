import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,247,251,0.84))] p-6 shadow-[0_28px_68px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Capabilities</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-[3rem]">
            A balanced foundation across software development, systems, and collaborative execution.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            My skill set combines programming fundamentals, modern web tooling,
            network systems knowledge, and the professional habits needed to
            contribute effectively on a team.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-white/80 bg-white/82 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-[var(--navy)] shadow-[0_0_0_8px_rgba(18,58,114,0.08)]" />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
