import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Open to software engineering internships &middot; Summer 2026</p>
      </div>
    </footer>
  );
}
