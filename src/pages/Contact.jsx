import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>
      
      <motion.form
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 md:w-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          placeholder="Amirtha Varshini Sivaguru"
          className="w-full p-2 rounded-lg bg-gray-700 text-white mb-4"
        />
        
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          placeholder="amirthavarshini331@gmail.com"
          className="w-full p-2 rounded-lg bg-gray-700 text-white mb-4"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
      
      <div className="flex space-x-6 mt-6">
        <a href="mailto:amirthavarshini331@gmail.com" className="text-3xl hover:text-blue-400">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/varshinisivaguru/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Amirtha12S" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
