import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© 2026 Carmina Tinah Mbatsane</p>

      <div className="footer-icons">
        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;