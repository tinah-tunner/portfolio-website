import "./index.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav>
        <h2>Carmina's Creation</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

export default App;