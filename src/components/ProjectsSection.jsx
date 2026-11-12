import { useState } from "react";
import { Link } from "react-router";
import MCP from "../assets/images/projects/mcp-server.png";
import MentorGuru from "../assets/images/projects/mentorguru.png";
import Yigil from "../assets/images/projects/yigil/Screenshot 2026-11-12 192733.png";
import Galaxy from "../assets/images/projects/galaxy/g1.jpeg";
import Allogaz from "../assets/images/projects/allogazcm.png";
import Badge from "./ui/badge";
import Button from "./ui/button";

const projects = [
  {
    title: "MCP-SQL",
    category: "Developer tools",
    image: MCP,
    alt: "MCP-SQL project preview",
    tech: ["TypeScript", "MCP", "Express"],
    description:
      "A database bridge that lets AI assistants explore and work with SQL data through the Model Context Protocol.",
    link: "/projets/mcp-sql-server",
    github: "https://github.com/Nebur23/MCP-Sql",
  },
  {
    title: "Mentor Guru",
    category: "Mobile",
    image: MentorGuru,
    alt: "Mentor Guru project preview",
    tech: ["React Native", "Appwrite", "Education"],
    description:
      "A learning companion connecting Cameroon GCE students with mentors, study resources, and a stronger support network.",
    link: "/projets/mentor-guru",
    github: "https://github.com/Nebur23/mentor-guru-mapp",
  },
  {
    title: "Yigil",
    category: "Web",
    image: Yigil,
    alt: "Yigil e-learning homepage for GCE students",
    tech: ["React Router", "NestJS", "Supabase"],
    description:
      "A web-based GCE learning platform with course videos and learning resources, accessible from any browser.",
    link: "/projets/yigil",
    github: "https://github.com/Nebur23/mystudies",
  },
  {
    title: "AI Assistant Prototypes",
    category: "Developer tools",
    image: Galaxy,
    alt: "Kamer Flash WhatsApp assistant conversation",
    tech: ["M-Files VAF / UIX", "Node.js", "Gemini & Grok"],
    description:
      "Internal AI prototypes for M-Files document assistance and Kamer Flash WhatsApp support.",
    link: "/projets/assistants-ia",
    internal: true,
  },
  {
    title: "AlloGaz CM",
    category: "Web",
    image: Allogaz,
    alt: "AlloGaz CM project preview",
    tech: ["Next.js", "Maps", "Local discovery"],
    description:
      "A simple way to find nearby gas bottle vendors and get back to the things that matter.",
    link: "https://allo-gaz.vercel.app/search",
  },
];

const filters = ["All projects", "Web", "Mobile", "Developer tools"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const visibleProjects =
    activeFilter === filters[0]
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section page-width" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED WORK · 2022—NOW</p>
          <h2>Projects I&apos;m proud of</h2>
        </div>
        <p className="section-intro">
          A few experiments and products built to solve problems that matter.
        </p>
      </div>

      <div className="project-toolbar">
        <div className="filter-list" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="project-count">
          {String(visibleProjects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            {project.github || project.internal ? (
              <Link
                className="project-image-link"
                to={project.link}
                aria-label={`View ${project.title} project details`}
              >
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <span className="image-link-icon" aria-hidden="true">↗</span>
              </Link>
            ) : (
              <a
                className="project-image-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
              >
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
                <span className="image-link-icon" aria-hidden="true">↗</span>
              </a>
            )}
            <div className="project-card-heading">
              <div>
                <p className="project-index">0{index + 1} / {project.category}</p>
                <h3>
                  {project.github || project.internal ? (
                    <Link to={project.link}>{project.title}</Link>
                  ) : project.title}
                </h3>
              </div>
              {project.github || project.internal ? (
                <Link
                  className="project-arrow"
                  to={project.link}
                  aria-label={`View ${project.title} project details`}
                >
                  ↗
                </Link>
              ) : (
                <a
                  className="project-arrow"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                >
                  ↗
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((technology) => (
                <Badge key={technology} variant="secondary">{technology}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="projects-more">
        <Button
          href="https://github.com/Nebur23/"
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          More on GitHub <span aria-hidden="true">↗</span>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
