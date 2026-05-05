import { useState } from "react";
import { profile } from "../data/profile.js";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About Me" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <div className="profile-chip">
            <button
              type="button"
              className="profile-photo-button"
              aria-label="Open profile image"
              onClick={() => setShowImage(true)}
            >
              <img
                src={profile.image}
                alt={`${profile.name} headshot`}
                className="profile-photo"
              />
            </button>

            <div className="profile-copy">
              <a href="#top" className="profile-name">
                {profile.name}
              </a>
              <p className="profile-meta">{profile.college}</p>
              <p className="profile-meta">
                {profile.major} • {profile.concentration}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-lines">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {open && (
          <div id="primary-navigation" className="mobile-nav">
            <div className="mobile-nav-links">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {showImage && (
        <div
          className="image-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Profile image preview"
          onClick={() => setShowImage(false)}
        >
          <div
            className="image-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="image-modal-close"
              aria-label="Close image preview"
              onClick={() => setShowImage(false)}
            >
              ×
            </button>

            <img
              src={profile.image}
              alt={`${profile.name} professional headshot`}
              className="image-modal-photo"
            />
          </div>
        </div>
      )}
    </>
  );
}
