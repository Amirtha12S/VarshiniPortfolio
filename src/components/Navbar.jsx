import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaEnvelope, FaCertificate } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Amirtha Varshini Sivaguru Portfolio</h1>
      <div className="navbar-links">
        <Link to="/" className="nav-link"><FaHome /> Home</Link>
        <Link to="/about" className="nav-link"><FaUser /> About</Link>
        <Link to="/projects" className="nav-link"><FaProjectDiagram /> Projects</Link>
        <Link to="/resume" className="nav-link"><FaFileAlt /> Resume</Link>
        <Link to="/contact" className="nav-link"><FaEnvelope /> Contact</Link>
        <Link to="/certifications" className="nav-link"><FaCertificate /> Certifications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
