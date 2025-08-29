import React, { useState, useEffect, useRef } from "react";
import "../style/certification.css";

const certifications = [
  {
    id: 1,
    title: "Data Science with Python",
    issuer: "Coursera / Code With Harry",
    date: "December 2024",
    image: "/certificates/data-science.jpg",
    fullImage: "/certificates/data-science-full.jpg",
    description: "Comprehensive data science course covering Python, pandas, numpy, and machine learning fundamentals"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Udemy / Angela Yu",
    date: "November 2024",
    image: "/certificates/full-stack.jpg",
    fullImage: "/certificates/full-stack-full.jpg",
    description: "Complete web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB"
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "October 2024",
    image: "/certificates/aws.jpg",
    fullImage: "/certificates/aws-full.jpg",
    description: "Fundamental AWS cloud concepts, services, security, architecture, pricing, and support"
  },
  {
    id: 4,
    title: "React Developer Certification",
    issuer: "Meta / Coursera",
    date: "September 2024",
    image: "/certificates/react.jpg",
    fullImage: "/certificates/react-full.jpg",
    description: "Advanced React development including hooks, context API, testing, and performance optimization"
  },
  {
    id: 5,
    title: "Python Programming Mastery",
    issuer: "University of Michigan",
    date: "August 2024",
    image: "/certificates/python.jpg",
    fullImage: "/certificates/python-full.jpg",
    description: "Comprehensive Python programming from basics to advanced topics and data structures"
  },
  {
    id: 6,
    title: "DevOps Engineering",
    issuer: "Google Cloud",
    date: "July 2024",
    image: "/certificates/devops.jpg",
    fullImage: "/certificates/devops-full.jpg",
    description: "DevOps practices, CI/CD pipelines, containerization, and cloud infrastructure management"
  }
];

export default function Certification() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section id="certifications" ref={sectionRef} className="certification-section">
        <div className="certification-container">
          <h2 className="certification-title">Achievements & Certifications</h2>
          <p className="certification-subtitle">Professional credentials and accomplishments</p>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`cert-card ${isVisible ? "visible" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(cert)}
              >
                <div className="cert-image">
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-overlay">
                    <span className="view-text">View Certificate</span>
                  </div>
                </div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedCert && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image">
              <img src={selectedCert.fullImage} alt={selectedCert.title} />
            </div>
            <div className="modal-details">
              <h3>{selectedCert.title}</h3>
              <p className="modal-issuer">{selectedCert.issuer}</p>
              <p className="modal-date">{selectedCert.date}</p>
              <p className="modal-description">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
