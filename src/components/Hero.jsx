import BackgroundScene from "./BackgroundScene.jsx";
import { profile } from "../data/profile.js";

const metrics = [
  { label: "Focus", value: "Frontend systems" },
  { label: "Strength", value: "Responsive UI" },
  { label: "Approach", value: "Calm, practical build quality" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          {profile.major} • {profile.concentration}
        </div>

        <h1 className="hero-title">{profile.heroHeadline}</h1>

        <p className="hero-description">{profile.heroDescription}</p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View Projects
          </a>
          <a href="#contact" className="button button-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-scene-frame">
          <div className="hero-scene-inner">
            <BackgroundScene />
          </div>
        </div>
      </div>
    </section>
  );
}
