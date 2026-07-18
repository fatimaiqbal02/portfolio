import { profile, experience, education, achievements, skills } from "../data/profile.js";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    // encodeURI handles the space/apostrophe in the file name safely
    link.href = encodeURI(profile.resumeFile);
    link.download = "Fatima-Iqbal-Mirza-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section">
      <div className="container reveal">
        <div className="resume-header">
          <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
          <p className="section-subtitle">
            A snapshot of my experience and education. Download the full PDF below.
          </p>
          <button className="btn btn-primary" onClick={handleDownload}>
            ⬇ Download Resume
          </button>
        </div>

        <h3 className="timeline-heading">Experience</h3>
        <div className="timeline" style={{ marginBottom: 56 }}>
          {experience.map((job) => (
            <div className="timeline-item" key={job.company + job.period}>
              <span className="period">{job.period}</span>
              <h3>{job.role}</h3>
              <p className="place">{job.company} · {job.location}</p>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="timeline-heading">Education</h3>
        <div className="timeline">
          {education.map((edu) => (
            <div className="timeline-item" key={edu.school}>
              <span className="period">{edu.period}</span>
              <h3>{edu.degree}</h3>
              <p className="place">{edu.school}</p>
              <ul>
                {(Array.isArray(edu.detail) ? edu.detail : [edu.detail]).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="timeline-heading" style={{ marginTop: 56 }}>Skills</h3>
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

        <h3 className="timeline-heading" style={{ marginTop: 56 }}>Achievements</h3>
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
  );
}
