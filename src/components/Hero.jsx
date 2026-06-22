import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const handleDownloadCV = () => {
    window.open("/Carmina-Tinah-Mbatsane-CV.pdf", "_blank");
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Carmina Tinah Mbatsane</span>
          </h1>

          <h2>
          <h2>Full Stack Developer</h2>
          </h2>

          <p>
            I build scalable web applications with Java, Spring Boot, React,
            MySQL, and Docker.
          </p>

          <div className="hero-buttons">
            <button onClick={handleDownloadCV}>
              Download CV
            </button>

            <button onClick={handleContactMe}>
              Contact Me
            </button>
          </div>

          <div className="socials">
            <a
              href="https://github.com/tinah-tunner"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/carmina_mbatsane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Carmina Tinah Mbatsane" />
        </div>
      </div>
    </section>
  );
}

export default Hero;