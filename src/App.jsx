
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Skill from './pages/skill.jsx';
import Certification from './pages/certification.jsx';
import Project from './pages/project.jsx';
import Timeline from './pages/timeline.jsx';
import Contact from './pages/contact.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
