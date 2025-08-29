import React, { useEffect, useRef, useState } from "react";
import "../style/skill.css";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiDocker } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, percentage: 85, color: "#61DAFB", description: "Frontend Library for UI development" },
  { name: "JavaScript", icon: <SiTypescript />, percentage: 90, color: "#F7DF1E", description: "Programming language for web development" },
  { name: "Tailwind", icon: <SiTailwindcss />, percentage: 83, color: "#06B6D4", description: "Utility-first CSS framework" },
  { name: "Node.js", icon: <FaNodeJs />, percentage: 78, color: "#339933", description: "JavaScript runtime environment" },
  { name: "Python", icon: <FaPython />, percentage: 82, color: "#3776AB", description: "Programming language for data science" },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 75, color: "#47A248", description: "NoSQL database system" },
  { name: "Git", icon: <FaGitAlt />, percentage: 87, color: "#F05032", description: "Version control system" },
  { name: "Docker", icon: <SiDocker />, percentage: 70, color: "#2496ED", description: "Containerization platform" },
  // { name: "AWS", icon: <SiAmazonaws />, percentage: 72, color: "#FF9900", description: "Cloud computing services" },
];

export default function Skill() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 40;

  const calculateStrokeDashoffset = (percentage) => {
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="skill-icon-name">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>

              <div className={`skill-progress-container ${hoveredIndex === index ? "show" : ""}`}>
                <svg className="progress-ring" width="120" height="120">
                  <circle
                    className="progress-ring-background"
                    stroke="#2D3748"
                    strokeWidth="8"
                    fill="transparent"
                    r="40"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="progress-ring-circle"
                    stroke={skill.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="60"
                    cy="60"
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: calculateStrokeDashoffset(skill.percentage),
                    }}
                  />
                </svg>
                <div className="skill-percentage">
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-tooltip">{skill.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
