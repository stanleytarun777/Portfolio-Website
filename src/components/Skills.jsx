import { skillGroups } from "../data/skills.js";

const categoryIcons = {
  "Technical Skills": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Networking: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,41,72,0.07)] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#102948]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#102948]">Capabilities</span>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            My background spans web development, systems work, and the tools that help me
            work effectively on a team and ship things that hold up.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(16,41,72,0.08)] text-[#102948]">
                  {categoryIcons[group.title]}
                </div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">{group.title}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
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
