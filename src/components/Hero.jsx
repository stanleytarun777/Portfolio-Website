import { profile } from "../data/profile.js";
import { certifications } from "../data/resume.js";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function DetailRow({ icon, text }) {
  return (
    <div className="flex items-start gap-2.5">
      <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        {icon}
      </svg>
      <p className="text-xs leading-5 text-white/75">{text}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-8">

          {/* ── Left column: Identity card + Certifications ── */}
          <div className="flex flex-col gap-5">

            {/* Navy Identity Card */}
            <div className="rounded-2xl bg-[#102948] p-5 text-white shadow-[0_8px_40px_rgba(15,23,42,0.2)] sm:p-6">

              {/* Image + buttons left, details right */}
              <div className="flex items-start gap-4 sm:gap-5">

                {/* Left col: image then buttons directly beneath, same width */}
                <div className="flex shrink-0 flex-col gap-2">
                  <img
                    src={profile.image}
                    alt={`${profile.name} professional headshot`}
                    className="w-36 rounded-xl border-4 border-white/20 object-contain shadow-[0_8px_24px_rgba(0,0,0,0.35)] sm:w-40 md:w-44"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="flex gap-1">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-full bg-[#0a66c2] py-2 text-[10px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#004182]"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/20 bg-white/10 py-2 text-[10px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right col: name + detail rows */}
                <div className="min-w-0 flex-1">
                  <h1 className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl lg:text-2xl">
                    {profile.name}
                  </h1>
                  <div className="mt-3 space-y-2.5">
                    <DetailRow
                      icon={<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />}
                      text={profile.college}
                    />
                    <DetailRow
                      icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                      text={`${profile.major} — ${profile.concentration} Concentration`}
                    />
                    <DetailRow
                      icon={<path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                      text={profile.graduation}
                    />
                    <DetailRow
                      icon={<><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>}
                      text={profile.location}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Certifications card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Certifications</span>
              </div>
              <div className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(16,41,72,0.08)] text-[9px] font-bold text-[#102948]">
                      ✓
                    </span>
                    <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right column: About Me only ── */}
          <div id="about">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(16,41,72,0.07)] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#102948]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#102948]">About Me</span>
              </div>
              <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                A bit more about me
              </h2>
              <div className="mt-4 space-y-3.5 text-sm leading-7 text-slate-600">
                <p>
                  I am a Computer Information Systems (CIS) major with a concentration in Computer
                  Science, pursuing opportunities in software engineering, web development, and
                  technology roles. My academic background blends technical programming skills with
                  a strong understanding of business systems and information technology, allowing me
                  to approach software development from both a technical and organizational perspective.
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
          </div>

        </div>
      </div>
    </section>
  );
}
