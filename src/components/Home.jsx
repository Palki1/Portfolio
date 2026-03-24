import React, { useRef } from "react";
import {
  motion,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import me from "../assets/pic2 copy.jpeg";
import data from "../assets/data.json";
import "../styles/home.scss";

const Home = () => {
  const projectCount = useRef(null);

  // Counter Animation
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

  // Scroll Parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // Stagger Animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div id="home">
        {/* LEFT SECTION */}
        <motion.section style={{ y }}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Heading */}
            <motion.h1 variants={item}>
              Hi, I’m <span>Palki 👋</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={item} className="tagline">
              <TypeAnimation
                sequence={[
                  "🚀 Full Stack Developer",
                  1500,
                  "💻 MERN Stack Developer",
                  1500,
                  "🎯 Problem Solver",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Tech Icons */}
            <motion.div variants={item} className="role-logos">
              <FaReact />
              <SiFigma />
              <FaNodeJs />
            </motion.div>

            {/* Buttons */}
            <motion.div variants={item} className="cta-buttons">
              <a href="src/assets/resume.pdf" download className="btn primary">
                📄 Resume
              </a>

              <a href="#contact" className="btn secondary">
                📬 Contact
              </a>
            </motion.div>

            {/* Stats */}
            <motion.aside variants={item}>
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
            </motion.aside>

            {/* Social Icons */}
            <motion.div variants={item} className="socials">
              <motion.a
                href="https://github.com/"
                target="_blank"
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://linkedin.com/"
                target="_blank"
                whileHover={{ scale: 1.3, rotate: -10 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* RIGHT SECTION */}
        <section>
          <motion.img
            src={me}
            alt="Palki"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </section>
      </div>
    </>
   );
};

export default Home;