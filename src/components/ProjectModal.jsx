import { useEffect } from "react";

// Renders the media area inside the modal using LOCAL files only.
// Priority: video > image > gradient placeholder with the project initial.
function ModalMedia({ project }) {
  const { video, image, title } = project;

  if (video) {
    return (
      <div className="modal-media">
        <video src={video} controls preload="metadata" poster={image || undefined} />
      </div>
    );
  }
  if (image) {
    return (
      <div className="modal-media">
        <img src={image} alt={title} />
      </div>
    );
  }
  return (
    <div className="modal-media">
      <div className="project-media-fallback">
        <div className="marquee">
          {/* duplicated so the horizontal scroll loops seamlessly */}
          <span className="marquee-track">
            {`${title} \u2022 ${title} \u2022 ${title} \u2022 `}
          </span>
          <span className="marquee-track" aria-hidden="true">
            {`${title} \u2022 ${title} \u2022 ${title} \u2022 `}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  // Close on Escape + lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card reveal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <ModalMedia project={project} />

        <div className="modal-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {project.technologies?.length > 0 && (
            <div className="tag-row">
              {project.technologies.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {(project.liveUrl || project.codeUrl) && (
            <div className="modal-actions">
              {project.liveUrl && (
                <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
              {project.codeUrl && (
                <a className="btn btn-outline" href={project.codeUrl} target="_blank" rel="noreferrer">
                  Source Code ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
