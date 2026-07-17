import "./Footer.css";
import { FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="finish-line">🏁 End of Portfolio</div>

        <h2>Thank You</h2>

        <p>
          Thank you for taking the time to explore my work.
        </p>

        <p>
          I'm looking forward to hearing from you and discussing how I can
          contribute to your team.
        </p>

        <h3>Let's build something great together.</h3>

        <div className="footer-buttons">
          <a
            href="/cv/Carmina_CV.pdf"
            download="Carmina_Tinah_Mbatsane_CV.pdf"
            className="footer-btn"
          >
            <FaDownload />
            Download CV
          </a>

          <a
            href="https://linkedin.com/in/carmina-mbatsane-0025b434b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="mailto:mbatsicarmina@gmail.com"
            className="footer-btn"
          >
            <FaEnvelope />
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Carmina Tinah Mbatsane. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;