import React, { useState, useEffect } from "react";
import "../style/about.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Creative Designer & Developer";

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = ["UI/UX Design", "Frontend Development", "Brand Identity", "Digital Art"];
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    // { number: "25+", label: "Happy Clients" },
  ];

  return (
    <section className="about-section">
      {/* Floating particles background */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* About Card (aligned right) */}
      <div className={`about-container ${isVisible ? "visible" : ""}`}>
        <div className="about-card">
          {/* Animated gradient border */}
          <div className="gradient-border"></div>

          <div className="about-content">
            {/* Section header */}
            <div className="about-header">
              <div className="header-bar"></div>
              <div>
                <h2 className="about-title">About Me</h2>
                <div className="about-subtitle">
                  {typedText}
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>

            {/* About text */}
            <p className="about-text">
              Hi! I'm <span className="highlight">Sinchana</span>, a passionate creative professional 
              who loves crafting digital experiences that make a difference. With a keen eye for design and 
              a love for clean code, I bridge the gap between beautiful aesthetics and functional technology.
            </p>

            <p className="about-text secondary">
              I believe in the power of good design to solve problems and create meaningful connections. 
              Whether it's designing intuitive user interfaces, developing responsive web applications, 
              or creating compelling brand identities, I approach every project with creativity, 
              precision, and a user-first mindset.
            </p>

            {/* Skills */}
            <div className="skills">
              {skills.map((skill, index) => (
                <span className="skill-tag" key={skill} style={{ animationDelay: `${index * 0.1}s` }}>
                  {skill}
                </span>
              ))}
            </div>

           {/* Stats */}
<div className="stats-container">
  {stats.map((stat, index) => (
    <div
      key={stat.label}
      className="stat-item"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="stat-number">{stat.number}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  ))}
</div>

{/* CTA Buttons */}
<div className="flex gap-4 justify-center mt-6">
  <button className="btn-download">
    Download CV
  </button>
  <button className="btn-connect">
    Let's Connect
  </button>
</div>

{/* Floating elements */}
<div className="absolute top-10 left-10 w-16 h-16 bg-pink-400 rounded-full blur-2xl opacity-70 animate-pulse"></div>
<div className="absolute bottom-20 right-10 w-20 h-20 bg-blue-400 rounded-full blur-2xl opacity-70 animate-bounce"></div>

{/* Fun Fact Card */}
<div className="relative mt-12 max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex gap-4 items-start border border-gray-700">
  <div className="text-3xl">✨</div>
  <div>
    <h3 className="text-lg font-bold text-white">Fun Fact</h3>
    <p className="text-gray-300 text-sm mt-2">
      I draw inspiration from nature and believe that the best designs are like good conversations –
      they flow naturally and leave you wanting more.
    </p>
  </div>
</div>
       </div>
        </div>
      </div>

            
    </section>
  );
};

export default About;
