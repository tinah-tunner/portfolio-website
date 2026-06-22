import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h2>Carmina`s creation</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Carmina</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p>
              Passionate about creating beautiful, responsive and modern
              websites using React, JavaScript, HTML and CSS.
            </p>

            <div className="hero-buttons">
              <button>Download CV</button>
              <button>Contact Me</button>
            </div>

            <div className="socials">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Email</a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/profile.jpeg" alt="Carmina" />
          </div>
        </div>
      </section>

      <section id="skills">
        <h1>Skills</h1>

        <div className="skills-container">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Vite</div>
          <div className="skill-card">Git</div>
        </div>
      </section>

      <section id="projects">
        <h1>Projects</h1>

        <div className="projects-container">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built with React and Vite.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Weather App</h3>
            <p>Weather application using APIs.</p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Task Manager</h3>
            <p>Task management application with React.</p>
            <button>View Project</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1>Contact Me</h1>

        <p className="contact-text">
          Let's work together on your next project.
        </p>

        <div className="contact-links">
          <a href="mailto:mbatsicarmina@gmail.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>

        <form className="contact-container">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default App;