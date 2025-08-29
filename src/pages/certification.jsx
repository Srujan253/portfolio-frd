import React from "react";

const certifications = [
  {
    title: "Data Science Specialization",
    org: "Coursera",
    year: "2024",
    link: "#"
  },
  // Add more certifications here
];

export default function Certification() {
  return (
    <section className="certification-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((c, i) => (
          <div key={i} className="cert-card">
            <h3>{c.title}</h3>
            <p>{c.org} • {c.year}</p>
            <a href={c.link} className="cert-link">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
}