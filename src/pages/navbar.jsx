import { useState, useEffect } from "react";
import "../style/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for navbar shrink & active link
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "certifications",
        "projects",
        "timeline",
        "contact",
      ];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Sinchana
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {["skills", "certifications", "projects", "timeline", "contact"].map((item) => (
            <li className="nav-item" key={item}>
              <Link
                to={`/${item}`}
                className={`nav-link ${location.pathname === `/${item}` ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>



        {/* Mobile Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`} id="mobileMenu">
          <div className="mobile-menu-header">
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              ✕
            </button>
          </div>
          <ul className="mobile-nav-menu">
            {["skills", "certifications", "projects", "timeline", "contact"].map((item) => (
              <li className="mobile-nav-item" key={item}>
                <Link
                  to={`/${item}`}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          {/* Social Icons in Mobile Menu */}
          <div className="mobile-nav-social-icons">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav-icon" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="nav-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav-icon" viewBox="0 0 24 24" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="nav-icon" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
