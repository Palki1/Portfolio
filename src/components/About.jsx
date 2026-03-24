import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "../styles/about.scss";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div id="about">
      <section>
        <motion.div className="about-content" {...fadeIn}>
          <h2>
            About Me <BsStars className="sparkle" />
          </h2>

          <p>
            I’m Palki, a B.Tech CSE (3rd Year) student at Lovely Professional
            University with a strong interest in Full Stack Web Development and
            Artificial Intelligence. My primary focus is on the MERN Stack, where
            I enjoy building responsive and user-friendly web applications using
            React, Node.js, Express, and MongoDB. Alongside this, I actively
            strengthen my data structures and algorithms skills, applying logical
            thinking and problem-solving in Python and JavaScript. I am passionate
            about learning new technologies, improving my technical depth, and
            turning ideas into practical solutions. As I continue to grow
            academically and professionally, I am eager to gain real-world
            experience and contribute meaningfully to innovative projects.
          </p>

          {/* Skill Cards */}
          <div className="about-cards">
            <div className="card">
              <FaLaptopCode />
              <h4>Full Stack</h4>
            </div>

            <div className="card">
              <FaCode />
              <h4>DSA</h4>
            </div>

            <div className="card">
              <FaBrain />
              <h4>AI</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Background Glow Effect */}
      <div className="bg-blur"></div>
    </div>
  );
};

export default About;