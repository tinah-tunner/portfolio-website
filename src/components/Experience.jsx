import "./Experience.css";
import { FaBriefcase, FaLaptopCode, FaChartLine } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      period: "2026– Present",
      description:
        "Developing full-stack applications using React, Java, Spring Boot, MySQL, Firebase and REST APIs. Building responsive user interfaces and scalable backend systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      period: "2025 ",
      description:
        "Creating Power BI dashboards, analysing datasets, writing SQL queries and transforming data into meaningful business insights.",
    },
    {
      icon: <FaBriefcase />,
      title: "Professional Development",
      period: "Continuous Learning",
      description:
        "Continuously expanding my expertise through Microsoft certifications, Java programming, AI technologies and cloud computing while building practical real-world projects.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>

      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">{experience.icon}</div>

            <h2>{experience.title}</h2>

            <span>{experience.period}</span>

            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;