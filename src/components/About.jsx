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
                I am a Computer Information Systems (CIS) major with a concentration in Computer
                Science, pursuing opportunities in software engineering, web development, and
                technology roles. My academic background blends technical programming skills with
                a strong understanding of business systems and information technology, allowing me
                to approach software development from both a technical and organizational
                perspective.
              </p>
              <p>
                I have hands-on experience developing responsive, modern web applications and
                websites using HTML, CSS, JavaScript, and React. Recently, I developed a
                full-stack task management application (TaskFlow) using React for the frontend
                and Supabase for backend data handling, featuring authentication, task tracking,
                analytics, and a responsive dashboard. You can find the GitHub repository and
                live demo under Projects below. I focus on writing maintainable code while
                enjoying turning ideas into functional solutions.
              </p>
              <p>
                Through coursework, independent projects, and practical experience, I have
                developed a solid foundation in software development principles, debugging,
                version control, and systems thinking. I am currently seeking a Software
                Engineering, Web Development, or IT internship where I can apply my skills,
                gain real-world experience, and contribute meaningfully to team projects. I am
                motivated, adaptable, and committed to growing into a well-rounded professional.
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
