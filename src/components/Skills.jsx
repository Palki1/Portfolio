import React from 'react';
import { SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiPython, SiReact, SiTailwindcss, SiMysql, SiMongodb, SiGit, SiVisualstudiocode, SiHackerrank, SiNodedotjs } from 'react-icons/si';
import { FaTools, FaUserAlt, FaRegCircle } from 'react-icons/fa';

const Skills = () => {
  const skills = {
    Languages: ['C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'Python'],
    Frameworks: ['ReactJS', 'NodeJS', 'Tailwind CSS'],
    Databases: ['MySQL', 'MongoDB'],
    'Tools/Platforms': ['Git', 'VS Code', 'Hacker Rank'],
    'Technical Skills': ['Data Structures and Algorithms (DSA)', 'Object Oriented Programming (OOP)'],
    'Soft Skills': ['Continuous Learning', 'Consistency', 'Adaptability', 'Problem-Solving Skills', 'Team Player'],
  };

  // Normalize keys to map common labels to icons
  const iconMap = {
    'c++': SiCplusplus,
    java: FaRegCircle, // no specific Java icon included here, fallback used
    javascript: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    python: SiPython,
    reactjs: SiReact,
    react: SiReact,
    nodejs: SiNodedotjs,
    'node.js': SiNodedotjs,
    'tailwind css': SiTailwindcss,
    mysql: SiMysql,
    mongodb: SiMongodb,
    git: SiGit,
    'vs code': SiVisualstudiocode,
    'vscode': SiVisualstudiocode,
    'hacker rank': SiHackerrank,
    dsa: FaTools,
    oop: FaTools,
    'data structures and algorithms (dsa)': FaTools,
    'object oriented programming (oop)': FaTools,
    'soft skills': FaUserAlt,
    'team player': FaUserAlt,
  };

  const getIconFor = (skill) => {
    if (!skill) return FaRegCircle;
    const key = skill.toLowerCase().trim();
    // try exact match
    if (iconMap[key]) return iconMap[key];
    // try partial matches
    if (key.includes('react')) return SiReact;
    if (key.includes('node')) return SiNodedotjs;
    if (key.includes('tailwind')) return SiTailwindcss;
    if (key.includes('mysql')) return SiMysql;
    if (key.includes('mongo')) return SiMongodb;
    if (key.includes('git')) return SiGit;
    if (key.includes('html')) return SiHtml5;
    if (key.includes('css')) return SiCss3;
    if (key.includes('java')) return FaRegCircle; // fallback (you can add a Java icon package if desired)
    if (key.includes('python')) return SiPython;
    if (key.includes('hacker')) return SiHackerrank;
    if (key.includes('dsa') || key.includes('data structures') || key.includes('object oriented')) return FaTools;
    return FaRegCircle;
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skillsList.map((skill) => {
                const Icon = getIconFor(skill);
                return (
                  <li key={skill} className="skill-item">
                    <Icon className="skill-icon" style={{ marginRight: 8 }} />
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
