import React from "react";
import { motion } from "framer-motion";
import "../styles/certifications_achievements.css";


const certifications = [
  {
    title: "Python (For DS and AI) - Coursera",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    year: "2023",
  },
  {
    title: "Python",
    issuer: "Genesys Academy",
    year: "2023",
  },
  {
    title: "NLP",
    issuer: "Career Craft Academy",
    year: "2024",
  },"2023",
];

const achievements = [
  {
    title: "3rd Place - All India Seminar on Coastal Weather & Air Quality Monitoring",
    year: "2023",
  },
];

const CertificationsAchievements = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certifications & Achievements
      </motion.h1>

      <div className="w-4/5">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer} - {cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-4/5 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-bold">{ach.title}</h3>
              <p className="text-gray-400">{ach.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsAchievements;
