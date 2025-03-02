import React from "react";
import "../styles/footer.css"; // In Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10 shadow-lg">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <div className="flex space-x-6 mt-2">
        <a href="mailto:amirthavarshini331@gmail.com" className="hover:text-blue-400">Email</a>
        <a href="https://www.linkedin.com/in/varshinisivaguru/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        <a href="https://github.com/Amirtha12S" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
