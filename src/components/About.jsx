import { education, certifications } from "../data/resume.js";

export default function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:items-start">

          {/* Left — Text */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#102948]">
              Background
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              A bit more about me
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                I'm studying at Nicholls State University, working toward a degree in Computer
                Information Systems with a Computer Science concentration. Most of my real
                skill-building has happened outside of class — through side projects and
                figuring out how things actually work in practice.
              </p>
              <p>
                I write code I'm comfortable handing off to someone else — readable, structured,
                and organized. I care about the full picture: not just making something work,
                but making sure it holds up over time and is easy for others to understand.
              </p>
              <p>
                Right now I'm actively looking for software engineering or web development
                internships where I can do real work, learn from experienced engineers, and
                contribute something useful to a team.
              </p>
            </div>
          </div>

          {/* Right — Education + Certifications */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-[#102948] p-6 text-white shadow-[0_8px_32px_rgba(15,23,42,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Education
              </p>
              <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-white/65">{education.school}</p>
              <span className="mt-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85">
                {education.graduation}
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Certifications
              </p>
              <div className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(16,41,72,0.08)] text-[10px] font-bold text-[#102948]">
                      ✓
                    </span>
                    <p className="text-sm leading-6 text-slate-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
