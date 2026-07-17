import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h1>About Me</h1>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h2>Software Developer & Data Analyst</h2>

          <p>
            I'm <strong>Carmina Tinah Mbatsane</strong>, a passionate Software
            Developer and Data Analyst from South Africa. I enjoy building
            responsive web applications, designing user-friendly interfaces, and
            transforming raw data into meaningful insights.
          </p>

          <p>
            My technical skills include Java, Spring Boot, React, JavaScript,
            SQL, MySQL, Microsoft Azure, Power BI, Firebase, and Git. I enjoy
            learning new technologies and solving real-world problems through
            software.
          </p>

          <p>
            I'm currently looking for opportunities where I can contribute,
            continue learning, and grow as a Software Developer or Data Analyst.
          </p>

          <div className="about-info">
            <div>
              <strong>Name:</strong> Carmina Tinah Mbatsane
            </div>

            <div>
              <strong>Location:</strong> Johannesburg, Gauteng, South Africa
            </div>

            <div>
              <strong>Email:</strong> mbatsicarmina@gmail.com
            </div>

            <div>
              <strong>Availability:</strong> Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;