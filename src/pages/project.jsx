import React from "react";

const projects = [
  {
    title: "Real-Time Stock Dashboard",
    description: "An interactive dashboard to track stock sentiment in real-time using NLP and React.js.",
    tech: ["React", "NLP", "Node.js"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x200?text=Project+Screenshot"
  },
  // Add more projects here
];

export default function Project() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tech-stack">{p.tech.join(", ")}</div>
            <div className="project-links">
              <a href={p.demo} className="btn btn-demo">Live Demo</a>
              <a href={p.github} className="btn btn-github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}