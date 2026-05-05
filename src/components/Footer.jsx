import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed as a calm, premium digital workspace.</p>
      </div>
    </footer>
  );
}
