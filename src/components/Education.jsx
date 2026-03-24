import React from 'react';

const Education = () => {
    const education = [
        {
            university: "Lovely Professional University",
            location: "Phagwara, Punjab",
            degree: "Bachelor of Technology - Computer Science and Engineering; CGPA: 7.5",
            year: "Aug’ 23 - Present",
        },
        {
            school: "D.A.V. Centenary Public School",
            location: "Jind, Haryana",
            degree: "Intermediate(PCM); Percentage: 79.9%",
            year: "Apr’ 21 – Mar’22",
        },
        {
            school: "D.A.V. Centenary Public School",
            location: "Jind, Haryana",
            degree: "Matriculation; Percentage: 90%",
            year: "Apr’ 20 – Mar’21",
        },
    ];

    return (
        <div id="education">
            <h2>Education</h2>
            <section>
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.university || edu.school}</h3>
                        <p>{edu.location}</p>
                        <p>{edu.degree}</p>
                        <p>{edu.year}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Education;
