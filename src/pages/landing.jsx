// src/App.jsx
import { useEffect, useState } from "react";
import "../style/landing.css";
import About from "./about";

function Landing() {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Create floating particles
    function createParticles() {
      const particlesContainer = document.querySelector(".particles");
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 3 + 3 + "s";
        particlesContainer.appendChild(particle);
      }
    }

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".glass-card");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      cards.forEach((card) => {
        const rotateX = (y - 0.5) * 10;
        const rotateY = (0.5 - x) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll(".glass-card");
      cards.forEach((card) => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Initialize particles
    createParticles();

    // Ripple effect for buttons
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255, 255, 255, 0.6)";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s linear";
        ripple.style.left = e.clientX - e.target.offsetLeft + "px";
        ripple.style.top = e.clientY - e.target.offsetTop + "px";

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Cleanup listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="particles"></div>

      <div className="main-layout">
        <div className="landing-content">
          <div className="container">
            <div className="hero">
              <div className="glass-card">
                <div className="profile-container">
                  {imageError ? (
                    <div className="profile-img">S</div>
                  ) : (
                    <img
                      src="/sinchana.jpg"
                      alt="Sinchana Profile"
                      className="profile-img"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>

                <h1 className="name">Sinchana</h1>
                <p className="tagline">Creative Designer & Developer</p>
                <p className="description">
                  Passionate about creating beautiful digital experiences that blend
                  creativity with functionality. I specialize in bringing ideas to
                  life through innovative design and cutting-edge technology.
                </p>

                <div className="cta-buttons">
                  <a href="#portfolio" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    Get In Touch
                  </a>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link">
                    📧
                  </a>
                  <a href="#" className="social-link">
                    💼
                  </a>
                  <a href="#" className="social-link">
                    📱
                  </a>
                  <a href="#" className="social-link">
                    🐙
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">Scroll to explore ↓</div>
        </div>
        {/* <About /> */}
      </div>
    </>
  );
}

export default Landing;
