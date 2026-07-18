// Text-first project card:
//   project name  ->  short description  ->  "View More" button  ->  tech tags
// Clicking "View More" opens the detail modal (handled by the parent via onView).
export default function ProjectCard({ project, onView }) {
  return (
    <article className="card project-card">
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-cta">
          <button className="btn btn-primary" onClick={() => onView(project)}>
            View More
          </button>
        </div>
      </div>

      {project.technologies?.length > 0 && (
        <div className="project-footer">
          {project.technologies.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
