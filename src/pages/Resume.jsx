import React from "react";
import { motion } from "framer-motion";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h1>
      
      <motion.div
        className="w-4/5 h-[80vh] border-2 border-gray-700 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="/Amirtha%20Varshini%20SDE1.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </motion.div>
      
      <motion.a
        href="/Amirtha%20Varshini%20SDE1.pdf"
        download
        className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download Resume
      </motion.a>
    </div>
  );
};

export default Resume;
