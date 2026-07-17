import "./Projects.css";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "BA KENE Skin Profile System",
      description:
        "A full-stack skincare consultation and client management system featuring authentication, image uploads, appointment scheduling, consultation history, and an admin dashboard.",
      technologies: "React • Spring Boot • MySQL • Cloudinary",
      icon: <FaReact />,
    },
    {
      title: "Reggi Facial Recognition App",
      description:
        "An AI-powered facial recognition application built using Microsoft Azure Face API and Firebase for secure user authentication and identity verification.",
      technologies: "Azure • Firebase • JavaScript",
      icon: <FaJava />,
    },
    {
      title: "Power BI Sales Dashboard",
      description:
        "An interactive analytics dashboard providing business insights, KPIs, revenue analysis, customer trends, and sales performance visualizations.",
      technologies: "Power BI • SQL • Excel",
      icon: <FaChartBar />,
    },
    {
      title: "BMI Calculator",
      description:
        "A Java desktop application that calculates Body Mass Index and provides health classifications using a clean and intuitive interface.",
      technologies: "Java • OOP",
      icon: <FaDatabase />,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h1>Projects</h1>
        <div className="underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;