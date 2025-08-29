import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostgresql, SiTypescript } from "react-icons/si";
import "../style/project.css";

const projects = [
  {
    title: "Real-Time Stock Dashboard",
    description: "An interactive dashboard to track stock sentiment in real-time using NLP and React.js with live data visualization.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/667eea/ffffff?text=Stock+Dashboard"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=E-Commerce"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration.",
    tech: ["React", "TypeScript", "PostgreSQL", "Socket.io"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Task+Manager"
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["React", "Python", "OpenWeather API", "Chart.js"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/4ecdc4/ffffff?text=Weather+App"
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive analytics platform for social media metrics with data visualization and reporting features.",
    tech: ["React", "Node.js", "MongoDB", "D3.js"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/45b7d1/ffffff?text=Analytics"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations, responsive design, and interactive elements.",
    tech: ["React", "CSS3", "JavaScript", "Vite"],
    demo: "#",
    github: "#",
    image: "https://via.placeholder.com/400x250/f9ca24/ffffff?text=Portfolio"
  }
];

const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  Python: <FaPython />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  PostgreSQL: <SiPostgresql />,
  Tailwind: <SiTailwindcss />,
  Stripe: <FaJs />,
  "Socket.io": <FaJs />
};

export default function Project() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`projects-section ${visible ? 'visible' : ''}`}
      id="projects"
    >
      <div className="container">
        <h2 className="section-title projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.demo} 
                      className="project-link demo-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      className="project-link github-link"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {techIcons[tech] || <FaJs />}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
