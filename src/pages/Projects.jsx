import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";


const projects = [
  {
    title: "Smart Garage Door using IoT",
    description:
      "Developed a smart garage door system using Blynk app integration, enabling remote control and monitoring via Wi-Fi connectivity with real-time notifications.",
  },
  {
    title: "Text Summarization using NLP",
    description:
      "Built an NLP-powered text summarization system that condenses lengthy texts into concise, meaningful summaries using advanced Natural Language Processing techniques.",
    link: "https://github.com/Amirtha12S/NLP-pro.git"
  },
  {
    title: "Private Chatspace for Secure Organization using Quantum Computing",
    description:
      "Designed a quantum secure communication system using QKD principles and the BB84 algorithm to ensure confidential information sharing.",
   },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-center mb-4">{project.description}</p>
            <a
              href={project.link}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
