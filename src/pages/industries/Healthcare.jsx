import React from "react";
import { motion } from "framer-motion";
import { FaHospital, FaRobot, FaStethoscope, FaUserMd, FaVideo } from "react-icons/fa";

export default function Healthcare() {
  const features = [
    {
      icon: <FaStethoscope className="text-blue-600 text-4xl mb-4" />,
      title: "AI Diagnostics",
      desc: "Machine learning models to assist doctors in identifying diseases with higher accuracy and speed.",
    },
    {
      icon: <FaVideo className="text-green-500 text-4xl mb-4" />,
      title: "Telemedicine",
      desc: "Virtual consultations with secure video calling, e-prescriptions, and patient follow-ups.",
    },
    {
      icon: <FaUserMd className="text-red-500 text-4xl mb-4" />,
      title: "Patient Management",
      desc: "Digital patient records, appointment scheduling, and real-time health monitoring.",
    },
    {
      icon: <FaRobot className="text-purple-500 text-4xl mb-4" />,
      title: "Automation",
      desc: "AI-powered hospital workflows, robotic process automation, and medical supply tracking.",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <FaHospital className="text-6xl text-red-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            Healthcare Solutions
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We deliver next-gen healthcare software solutions that enhance patient care, 
            optimize hospital operations, and leverage AI to revolutionize the medical industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              {item.icon}
              <h2 className="text-xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
