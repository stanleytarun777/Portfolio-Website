import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="bg-[#0a1d35] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1.5 text-sm text-white/30 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Open to software engineering internships &middot; Spring / Summer 2026</p>
        </div>
      </div>
    </footer>
  );
}
