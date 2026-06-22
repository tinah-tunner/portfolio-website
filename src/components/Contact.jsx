import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully! 😊");

    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Me 💌</h1>

      <h2>Junior Full Stack Developer (React + Spring Boot)</h2>

      <p className="contact-text">
        Available for internships, junior developer roles, freelance work, and collaborations.
      </p>

      {/* Contact Links */}
      <div className="contact-links">
        <a href="mailto:mbatsicarmina@gmail.com">
          📧 Email Me
        </a>

        <a
          href="https://github.com/tinah-tunner"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://linkedin.com/in/carmina_mbatsane"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://wa.me/27795764099"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp Me
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-container" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Looking forward to connecting with you! Feel free to reach out for collaborations, job opportunities, or just to say hi. 😊"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;