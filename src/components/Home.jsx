import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import me from "../assets/pic copy.jpeg";
import data from "../assets/data.json";
import "../styles/home.scss";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, data.projects.length, {
      duration: 1,
      onUpdate: (v) => {
        if (projectCount.current) {
          projectCount.current.textContent = v.toFixed();
        }
      },
    });
  };

  const animations = {
    h1: {
      initial: { y: -50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="home">
      {/* LEFT SECTION */}
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I’m <span>Palki 👋</span>
          </motion.h1>

          <p className="tagline">
            🚀 Full Stack Developer | 💻 MERN Stack | 🎯 Problem Solver
          </p>

          {/* Tech Logos */}
          <div className="role-logos">
            <FaReact />
            <SiFigma />
            <FaNodeJs />
          </div>

          {/* Buttons */}
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="btn primary">
              📄 Resume
            </a>

            <a href="#contact" className="btn secondary">
              📬 Contact
            </a>
          </div>

          {/* Stats */}
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  {data.projects.length}
                </motion.span>
              </p>
              <span>Projects Done</span>
            </article>

            <article>
              <p>💡</p>
              <span>Creative Thinker</span>
            </article>
          </aside>

          {/* Social Links */}
          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section>
        <img src={me} alt="Palki" />
      </section>
    </div>
  );
};

export default Home;