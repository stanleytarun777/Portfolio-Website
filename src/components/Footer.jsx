import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="bg-[#0a1d35] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1.5 text-center text-sm text-white/30 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Open to software engineering internships &middot; Summer 2026</p>
        </div>
      </div>
    </footer>
  );
}
