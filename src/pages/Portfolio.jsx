import { useState } from "react";
import { projects } from "../data/profile.js";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section">
      <div className="container reveal">
        <h2 className="section-title">My <span className="gradient-text">Portfolio</span></h2>
        <p className="section-subtitle">
          A collection of projects I've built. Click "View More" to see the details.
        </p>

        {projects.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>Projects coming soon.</p>
        ) : (
          <div className="grid projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.title + i}
                className="reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <ProjectCard project={project} onView={setSelected} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
