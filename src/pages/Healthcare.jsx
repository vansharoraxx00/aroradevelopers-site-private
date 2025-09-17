import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaLaptopMedical, FaRobot, FaHeartbeat, FaNotesMedical } from "react-icons/fa";

export default function Healthcare() {
  const features = [
    {
      icon: <FaStethoscope className="text-blue-600 text-5xl mb-4" />,
      title: "Telemedicine Solutions",
      desc: "Seamless video consultations, digital prescriptions, and virtual healthcare platforms for remote treatment."
    },
    {
      icon: <FaLaptopMedical className="text-green-600 text-5xl mb-4" />,
      title: "Electronic Health Records (EHR)",
      desc: "Centralized, secure patient data management with AI-powered analytics for better decision making."
    },
    {
      icon: <FaRobot className="text-orange-500 text-5xl mb-4" />,
      title: "AI-Powered Diagnostics",
      desc: "Machine learning models to detect diseases early using X-rays, MRIs, and other medical imaging."
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-5xl mb-4" />,
      title: "Wearable Integration",
      desc: "Smart devices and IoT wearables to monitor heart rate, blood pressure, glucose levels in real-time."
    },
    {
      icon: <FaNotesMedical className="text-purple-600 text-5xl mb-4" />,
      title: "Healthcare Automation",
      desc: "Automating hospital workflows, billing systems, appointment scheduling and pharmacy management."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
          Healthcare Solutions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          At Novetech, we leverage AI, IoT, and cloud technology to revolutionize the healthcare industry. 
          Our solutions improve patient outcomes, reduce costs, and create smart digital healthcare ecosystems.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              {item.icon}
              <h2 className="text-xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From telemedicine to AI-driven diagnostics, Novetech ensures that healthcare providers 
            and patients experience innovation that matters. Our secure, scalable, and compliant 
            healthcare IT solutions empower hospitals, clinics, and medical startups to succeed in 
            the digital era.
          </p>
        </div>
      </div>
    </div>
  );
}
