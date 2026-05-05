import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section id="contact" className="contact-card">
      <p className="contact-eyebrow">Contact</p>
      <h2 className="contact-title">
        Let’s build something clear, useful, and beautifully composed.
      </h2>
      <p className="contact-description">
        I’m actively seeking internship and growth opportunities where I can
        contribute to product quality, team momentum, and user-centered
        software experiences.
      </p>

      <div className="contact-actions">
        <a href={`mailto:${profile.email}`} className="button button-light">
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="button button-outline-light"
        >
          GitHub Profile
        </a>
      </div>

      <p className="contact-phone">{profile.phone}</p>
    </section>
  );
}
