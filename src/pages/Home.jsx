import { Link } from "react-router-dom";
import { profile, skills, achievements } from "../data/profile.js";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Home() {
  return (
    <>
      {/* Hero / About me */}
      <section className="hero">
        <div className="container reveal">
          <span className="hero-badge">
            <span className="dot" /> Available for opportunities
          </span>
          <div className="avatar">{initials(profile.name)}</div>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="role">{profile.title} · {profile.location}</p>
          <p className="lead">{profile.summary}</p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="chips">
            {profile.highlights.map((h) => (
              <span className="chip" key={h}>{h}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <div className="container reveal">
          <h2 className="section-title">Earned <span className="gradient-text">Achievements</span></h2>
          <p className="section-subtitle">Milestones and recognitions along the way.</p>

          <div className="grid achievements-grid">
            {achievements.map((a) => (
              <div className="card achievement-card" key={a.title}>
                <span className="achievement-icon">{a.icon}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container reveal">
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">The tools and stacks I work with.</p>

          <div className="grid skills-grid">
            {skills.map((group) => (
              <div className="card skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
