import React from 'react';

const Achievements = () => {
  const achievements = [
    "Solved 130+ DSA Problems on Geeks for Geeks.",
    "150+ Leet Code problems solved, improving coding fundamentals.",
  ];

  return (
    <div id="achievements">
      <h2>Achievements</h2>
      <section>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Achievements;
