import React from 'react';
import cert1 from "../assets/certification/1.png";
import cert2 from "../assets/certification/2.png";
import cert3 from "../assets/certification/3.png";
import cert4 from "../assets/certification/4.png";
import cert5 from "../assets/certification/5.png";
import cert6 from "../assets/certification/6.png";

const Certificates = () => {
  const certificates = [
    { 
      name: "Build Generative AI Apps and Solutions with No-Code Tools | Infosys Springboard", 
      date: "Aug’ 25", 
      link: "https://drive.google.com/file/d/1Xazta9Qopar7PJMq30ckohQv772YH4se/view?usp=drive_link",
      img: cert1
    },
    { 
      name: "Mastering in C: Basics To Beyond  | CSE Pathshala", 
      date: "Mar’ 24", 
      link: "https://drive.google.com/file/d/1sg2xxAszfp9BuFkISeLUdRViYGgWPbGS/view?usp=drive_link",
      img: cert2
    },
    { 
      name: "Object Oriented Programming  | Iamneo", 
      date: "Dec’ 24", 
      link: "https://drive.google.com/file/d/1dSbzK72pX8mKU5PUbO6TT53ERdvbirlz/view?usp=drive_link",
      img: cert3
    },
    { 
      name: "Introduction to Python  | Infosys Springboard", 
      date: "Jan’ 24", 
      link: "https://drive.google.com/file/d/173h2OL1xB1tMRC2tv-WJU7C0ECWLVsge/view?usp=drive_link",
      img: cert4
    },
    { 
      name: "Introduction To Hardware and Operating Systems  | Coursera", 
      date: "Feb’ 25", 
      link: "https://drive.google.com/file/d/17STSUToeeVPrh3UtOQDcWS_Zcu1ws3AR/view?usp=drive_link",
      img: cert5
    },
    { 
      name: "Responsive Web Design  | Free CodeCamp", 
      date: "Dec’ 23", 
      link: "https://drive.google.com/file/d/1E-9DVnuHMVmVttRC20Dh8jwyEjsdzjvv/view?usp=drive_link",
      img: cert6
    },
  ];

  return (
    <div id="certificates" className="page-container">
      <h2>My Certificates</h2>
      <section>
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.img} alt={cert.name} className="cert-image" />
            <div className="cert-info">
              <h3>{cert.name}</h3>
              <p>{cert.date}</p>
            </div>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certificates;
