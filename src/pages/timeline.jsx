import React, { useEffect, useState, useRef } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../style/timeline.css";

const timelineData = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Tech Corp",
    duration: "Jan 2022 – Present",
    description: "Developed scalable web applications using React and Node.js.",
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "State University",
    duration: "Sep 2017 – Jun 2021",
    description: "Graduated with honors, focused on software engineering and AI.",
  },
  {
    type: "work",
    title: "Intern Developer",
    company: "Startup Inc.",
    duration: "Jun 2020 – Aug 2020",
    description: "Contributed to frontend development and UI improvements.",
  },
  // Add more timeline entries as needed
];

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);

  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            const index = Number(target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="timeline-section" id="experience">
      <h2 className="section-title">Experience &amp; Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);
          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`timeline-item ${isLeft ? "left" : "right"} ${
                isVisible ? "visible" : ""
              }`}
            >
              <div className="timeline-icon">
                {item.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <span className="timeline-duration">{item.duration}</span>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
