import "./Certifications.css";

import javaCert from "../assets/certificates/eCertificate.pdf";
import matricCert from "../assets/certificates/Matric.PDF";
import azureCert from "../assets/certificates/microsoft azure fundamentals.pdf";
import powerBiCert from "../assets/certificates/power bi certificate .pdf";
import aiCert from "../assets/certificates/Tinah AI.pdf";

import {
  FaJava,
  FaGraduationCap,
  FaRobot,
  FaChartBar,
  FaBrain,
} from "react-icons/fa";

function Certifications() {
const certificates = [
  {
    title: "Oracle Certified Associate: Java SE 8 Programmer",
    organisation: "Oracle University",
    year: "2025",
    icon: <FaJava />,
    file: javaCert,
  },
  {
    title: "National Senior Certificate",
    organisation: "Department of Basic Education",
    year: "2016",
    icon: <FaGraduationCap />,
    file: matricCert,
  },
  {
    title: "Microsoft Azure  Fundamentals (AZ-900)",
    organisation: "Microsoft",
    year: "2025",
    icon: <FaRobot />,
    file: azureCert,
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    organisation: "Microsoft",
    year: "2025",
    icon: <FaChartBar />,
    file: powerBiCert,
  },
  {
    title: "Microsoft Certified: Azure AI-900 Fundamentals",
    organisation: "Microsoft",
    year: "2026",
    icon: <FaBrain />,
    file: aiCert,
  },
];
  return (
    <section className="certifications" id="certifications">
      <div className="section-title">
        <h1>Certifications</h1>
        <div className="underline"></div>
      </div>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{cert.icon}</div>

            <h3>{cert.title}</h3>

            <p>{cert.organisation}</p>

            <span>{cert.year}</span>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;