import React from "react";

const skills = [
  { category: "Frontend", items: "React, Tailwind, JavaScript, HTML, CSS" },
  { category: "Backend", items: "Node.js, Express.js, MongoDB, SQL" },
  { category: "Data Science", items: "Python, Pandas, NumPy, ML, NLP" },
  { category: "Tools", items: "Git, GitHub, Docker, Azure" }
];

export default function Skill() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card">
            <h3>{s.category}</h3>
            <p>{s.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}