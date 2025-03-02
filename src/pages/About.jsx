import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg max-w-2xl text-center">
        I am a final-year B.Tech IT student passionate about software development, 
        quantum computing, and NLP. I have experience in Python, Java, SQL, and IoT projects.
      </p>
    </div>
  );
};

export default About;
