import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiVite,
  SiSpringboot,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";

import { VscAzure, VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      title: "Cloud & AI",
      skills: [
        { name: "Microsoft Azure", icon: <VscAzure /> },
        { name: "AI-900", icon: "🤖" },
      ],
    },
    {
      title: "Analytics",
      skills: [
    
        { name: "SQL", icon: "🗄️" },
        { name: "Excel", icon: "📊" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "IntelliJ", icon: <SiIntellijidea /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h1>Skills</h1>
        <div className="underline"></div>
      </div>

      <div className="skills-wrapper">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <h2>{category.title}</h2>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <span className="skill-icon">{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;