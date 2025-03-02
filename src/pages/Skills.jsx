import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import "../styles/skills.css";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-400 text-6xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-6xl" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-400 text-6xl" /> },
  { name: "NLP", icon: <FaBrain className="text-green-400 text-6xl" /> }, // Updated icon
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center"
          >
            {skill.icon}
            <p className="mt-4 text-xl font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
