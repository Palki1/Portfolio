import React from "react";
import palkiCV from "../assets/palkiCV.pdf";
import profileImg from "../assets/image.png";

const CV = () => {
  return (
    <div id="cv" className="cv-component">
      <div className="cv-image-container">
        <img src={profileImg} alt="Profile" className="cv-image" />
      </div>

      <div className="cv-content">
        <header>
          <h1>Palki Sangwan </h1>
          <p className="contact">Jind, India • sangwanpalki003@gmail.com • +91 981 797 0145</p>
        </header>

        <section className="summary">
          <h2>Summary</h2>
          <p>
            Palki Sangwan is a Computer Science student skilled in full-stack web development. She has experience with technologies like React, Node.js, and MySQL, and has built projects including an AI chatbot, weather app, and startup tracker. She also completed a full-stack internship, gaining hands-on experience in building responsive and real-world web applications.
          </p>
        </section>

        {/* ...existing code... */}

        <div className="cv-actions">
          <a href={palkiCV} download className="download-btn" target="_blank" rel="noopener noreferrer">
            Download CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;