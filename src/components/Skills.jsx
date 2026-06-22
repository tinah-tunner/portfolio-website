import { FaJava, FaReact, FaDocker, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1>Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <FaJava size={60} />
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <SiSpringboot size={60} />
          <h3>Spring Boot</h3>
        </div>

        <div className="skill-card">
          <FaReact size={60} />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <SiMysql size={60} />
          <h3>MySQL</h3>
        </div>

        <div className="skill-card">
          <FaDocker size={60} />
          <h3>Docker</h3>
        </div>

        <div className="skill-card">
          <FaGithub size={60} />
          <h3>GitHub</h3>
        </div>

      </div>
    </section>
  );
}

export default Skills;