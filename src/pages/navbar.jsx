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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
