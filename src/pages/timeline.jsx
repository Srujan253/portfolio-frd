import React from "react";

const timeline = [
  {
    title: "Frontend Developer Intern",
    org: "XYZ Company",
    year: "2023",
    desc: "Built responsive React apps, improved performance by 30%, and collaborated with backend team."
  },
  // Add more timeline items here
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Timeline</h2>
      <div className="timeline-list">
        {timeline.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>
            <h3>{item.title}</h3>
            <p>{item.org} • {item.year}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}