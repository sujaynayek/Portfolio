import { useCallback, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Dailygig from "/images/Dailygig.png";
import Bybrainy from "/images/Bybrainy.png";
import Indianpizza from "/images/Indianpizza.png";

const projects = [
  {
    title: "Dailygig Ventures PVT. LTD.",
    imageUrl: Dailygig,
    description:
      '"DailyGig Ventures – A responsive business website for a service-based company, focused on lead generation, service showcasing, and strong brand presence."',
    githubUrl: "https://github.com/sujaynayek",
    liveUrl: "https://dailygigventures.com/",
  },
  {
    title: "Bybrainy",
    imageUrl: Bybrainy,
    description:
      '"ByBrainy – A modern educational/business platform with clean UI, optimized user experience, and conversion-focused landing page design."',
    githubUrl: "https://github.com/sujaynayek",
    liveUrl: "https://bybrainy.com/",
  },
  {
    title: "Indian Pizza House",
    imageUrl: Indianpizza,
    description:
      '"The Indian Pizza House – A restaurant website with interactive menu display, brand-focused design, and customer engagement features for online presence."',
    githubUrl: "https://github.com/sujaynayek",
    liveUrl: "https://theindianpizzahouse.com/",
  },
];

export default function App() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7slwrot",
        "template_fex1r69",
        form.current,
        "jZ-HCeDfw1XFCH_wn",
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send.");
      });
  };

  return (
    <div className="root">
      <header className="sticky-header">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="navbar fix-width"
        >
          <ul className="list">
            <motion.li
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#home">Home</a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="#about">About Me</a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a href="#skills">skills</a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <a href="#projects">Projects</a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="#contacts">Contacts</a>
            </motion.li>
          </ul>
        </motion.nav>
      </header>

      <div className="hero-section fix-width" id="home">
        <div className="hero-container">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            alt="Profile Image"
            src="images/hero_img.jpg"
          />

          <motion.a
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://github.com/sujaynayek"
            target="_blank"
            rel="noreferrer"
            id="github"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{ color: "black" }}
              className="icons bi bi-github"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="mailto:freelance.sujay@gmail.com"
            id="mail"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{ color: "orange" }}
              className="icons bi bi-envelope-at"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://x.com/Sujay9733"
            target="_blank"
            rel="noreferrer"
            id="x"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{ color: "black" }}
              className="icons bi bi-twitter-x"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="tel:+919733371584"
            id="call"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{ color: "blue" }}
              className="icons bi bi-telephone-fill"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://wa.me/919733371584"
            target="_blank"
            rel="noreferrer"
            id="whatsapp"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{ color: "green" }}
              className="icons bi bi-whatsapp"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/sujay-nayek/"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
            className="links"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              className="icons bi bi-linkedin"
              style={{ color: "blue" }}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            href="https://drive.google.com/file/d/1OnNX5vVpOK2mnWA7DA9ZB0hy4QGPWd3S/view?usp=sharing"
            download
            id="resume"
            target="_blank"
            className="icons links"
          >
            Resume📄
          </motion.a>
        </div>
        <div className="fade-container"></div>
      </div>

      <div className="text" id="about">
        <h1 className="text-animation">
          Sujay <span id="surname">Nayek</span>
        </h1>
      </div>

      <div className="about-me fix-width">
        <div className="about-container">
          <img
            src="images/about pic.jpg"
            alt="about pic"
            className="imageShow img"
          />
          <div className="about-para text-animation">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              I’m a passionate and dedicated programmer with a strong interest
              in building modern, responsive, and scalable web applications. As
              a full stack developer — with a preference for the MERN (MongoDB,
              Express.js, React, Node.js) stack — I enjoy bringing ideas to life
              through clean code, intuitive UI/UX, and robust backend logic.
              Problem-solving is at the core of my development journey. I thrive
              on challenges that push me to think deeper, debug smarter, and
              continuously improve my approach. Whether it&apos;s writing
              optimized JavaScript code, designing RESTful APIs, or working with
              databases like MySQL and MongoDB — I love every part of the
              development lifecycle. I take pride in writing maintainable code,
              following best practices, and learning new tools or technologies
              that help me grow. I believe a great developer is not just someone
              who can write code, but someone who can think logically, adapt
              quickly, and collaborate effectively. Currently, I&apos;m
              expanding my knowledge in AI, system design, deployment workflows,
              and scalable architecture. I&apos;m always open to opportunities
              where I can contribute, learn, and grow as a developer. If
              you&apos;re looking for someone who is proactive, curious, and
              genuinely passionate about web development — I’m ready to join
              your team and make an impact.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="text" id="skills">
        <h1 className="text-animation">
          <span id="surname">Skill</span>
        </h1>
      </div>

      <div className="skill-section fix-width">
        <div className="frontend-container">
          <div className="frontend-skills appearLeft">
            <h3>Frontend</h3>
            <div className="skill-icon">
              {[
                "Html",
                "Css",
                "JavaScript",
                "Teilwind",
                "Bootstrap",
                "React",
              ].map((label) => (
                <div className="tooltip-container" key={label}>
                  <span className="skill-btn">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="frontend-img">
            <img
              src="images/frontend_developer.avif"
              alt="frontend-img"
              className="imageShow"
            />
          </div>
        </div>

        <div className="backend-container frontend-container">
          <div className="frontend-skills appearRight">
            <h3>Backend</h3>
            <div className="skill-icon">
              {[
                "Node.js",
                "Express.js",
                "Sql",
                "MongoDB",
                "Git",
                "Github",
                "Ejs",
              ].map((label) => (
                <div className="tooltip-container" key={label}>
                  <span className="skill-btn">{label}</span>
                </div>
              ))}
            </div>
            <div className="tooltip-container">
              <span className="skill-btn">Rest</span>
            </div>
          </div>
          <div className="frontend-img">
            <img
              src="images/backend_developer.jpg"
              alt="Backend-img"
              className="imageShow"
            />
          </div>
        </div>
      </div>

      <div className="text" id="projects">
        <h1 className="text-animation">
          <span id="surname">My Project</span>
        </h1>
      </div>

      <div className="projects-container fix-width">
        {projects.map((p, idx) => (
          <div className="main-card imageShow" key={`${p.title}-${idx}`}>
            <div className="img-container">
              <img alt="website" src={p.imageUrl} />
            </div>

            <div className="card-footer">
              <span>{p.description}</span>
            </div>

            <h3>{p.title}</h3>

            <div className="btn-group">
              <a href={p.githubUrl} target="_blank">
                {" "}
                "Github "{" "}
              </a>
              <a href={p.liveUrl} target="_blank" id="live">
                {" "}
                "Live "{" "}
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer imageShow">
        <div className="footer-content" id="contacts">
          <div className="footer-brand">
            <h3>Sujay Nayek</h3>
            <p>Fullstack Developer</p>
          </div>

          <div className="footer-form">
            <form id="feedback-form" ref={form} onSubmit={handleSubmit}>
              <h5>Enter Your Name</h5>
              <input type="text" name="user_name" placeholder="Name" required />
              <h5>Enter Your Email</h5>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <br />
              <textarea
                name="message"
                id="query"
                placeholder="Write Your Quary Here"
                rows="5"
                cols="40"
              ></textarea>
              <br />
              <button type="submit">Submit Query</button>
            </form>
          </div>

          <div className="footer-social">
            <a href="https://github.com/sujaynayek">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sujay-nayek/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a href="https://x.com/Sujay9733">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a href="mailto:freelance.sujay@gmail.com" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Made With Love &#129505; <br />
            &#169; 2026 Sujay Nayek, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
