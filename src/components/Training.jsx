import React from 'react';
import AnimatedSection from './AnimatedSection';

const Training = () => {
  const training = [
    {
      title: "Mastering C++: From Object-Oriented Programming to Dynamic Programming Summer Training",
      institution: "Lovely Professional University",
      date: "Jun’ 25 – July’ 25",
      link: "https://drive.google.com/file/d/1nWudaX3ZKcCyihvCtHp-MSkSPZPROV5M/view?usp=drive_link",
      description: [
        "Gained in-depth knowledge of C++ programming, focusing on object-oriented concepts such as classes, inheritance, polymorphism, and encapsulation.",
        "Applied dynamic programming techniques to solve complex problems efficiently and optimize algorithm performance.",
        "Developed strong problem-solving and logical thinking skills through hands-on coding and real-world problem scenarios.",
        "Successfully completed the course with an A grade, demonstrating proficiency in advanced C++ concepts and programming practices."
      ],
    },
  ];

  const internships = [
    {
      title: "Fullstack Web Development Intern",
      company: "Unified Mentor Pvt Ltd.",
      date: "Jun’ 25 – Jul’ 25",
      link: "https://drive.google.com/file/d/1_KHld_Y2xtr4B6w-mq-j2V4XEcaz3rzx/view?usp=drive_link",
      description: [
        "Develop a clean and responsive blog layout: Designed a visually appealing and mobile-friendly interface using CSS Flexbox and Grid, ensuring the website adapts seamlessly across different screen sizes and devices.",

        " Implement blog post interaction features: Added interactive functionalities such as like, comment, and share options using JavaScript, allowing users to actively engage with blog content and enhancing overall user experience.",
        " Utilize JavaScript for dynamic behavior and data handling: Used JavaScript to manage UI interactions and implemented localStorage to store user actions (like likes and comments), ensuring data persistence without requiring a backend."
      ],
    },
  ];

  return (
    <div id="training" className="page-container">
      <h2>My Training & Internship</h2>

      <section
        className="training-grid"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div className="column" style={{ flex: 1, minWidth: 300 }}>
          {training.map((train, index) => (
            <AnimatedSection key={index} className="training-card" delay={index * 0.05}>
              <div className="train-header">
                <h3>{train.title}</h3>
                <p className="institution">{train.institution}</p>
                <p className="date">{train.date}</p>
              </div>
              <ul className="train-desc">
                {train.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <a
                href={train.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
                style={{ marginTop: "2rem", display: "inline-block" }}
              >
                View Training Certificate
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="column" style={{ flex: 1, minWidth: 300 }}>
          {internships.map((intern, index) => (
            <AnimatedSection key={index} className="training-card internship-card" delay={index * 0.05}>
              <div className="train-header">
                <h3>{intern.title}</h3>
                <p className="institution">{intern.company}</p>
                <p className="date">{intern.date}</p>
              </div>
              <ul className="train-desc">
                {intern.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <a
                href={intern.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
                style={{ marginTop: "2rem", display: "inline-block" }}
              >
                View Internship Certificate / Details
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Training;
