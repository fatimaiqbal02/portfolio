import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section className="section">
      <div className="container reveal">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">
          Feel free to reach out — I'm always open to new opportunities and collaborations.
        </p>

        <div className="grid contact-grid">
          <a className="card contact-card" href={`mailto:${profile.email}`}>
            <span className="label">Email</span>
            <span className="value">{profile.email}</span>
          </a>

          {profile.phones.map((phone) => (
            <a className="card contact-card" href={`tel:${phone}`} key={phone}>
              <span className="label">Phone</span>
              <span className="value">{phone}</span>
            </a>
          ))}

          <div className="card contact-card">
            <span className="label">Location</span>
            <span className="value">{profile.location}</span>
          </div>
        </div>

        <div className="social-row">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="btn btn-outline"
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
