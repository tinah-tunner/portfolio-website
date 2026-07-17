import "./Hero.css";
import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <p className="intro">👋 Hello, I'm</p>

          <h1>
            <span>Carmina Tinah</span> Mbatsane
          </h1>

          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Data Analyst",
              2000,
              "AI Enthusiast",
              2000,
              "Power BI Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />

          <p>
            I build modern web applications, analyze data to uncover meaningful
            insights, and create technology-driven solutions using Java, React,
            Spring Boot, Microsoft Azure and Power BI.
          </p>

          <div className="hero-buttons">
            <a
              href="/cv/Carmina_cv latest (1).pdf"
              download="Carmina_Tinah_Mbatsane_CV.pdf"
              className="btn btn-primary"
            >
              📄 Download CV
            </a>

            <a
              href="https://wa.me/27795764099?text=Hello%20Carmina,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Contact Me
            </a>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/tinah-tunner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/carmina-mbatsane-0025b434b"
              target="_blank"
              rel="noopener noreferrer"
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