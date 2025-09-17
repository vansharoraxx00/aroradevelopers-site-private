import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 add this
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaMoneyBillWave,
  FaBuilding,
  FaPlane,
  FaIndustry,
  FaTruck,
  FaStore,
  FaBroadcastTower,
  FaSolarPanel,
  FaLandmark,
  FaFilm,
} from "react-icons/fa";

export default function Industries() {
  const industries = [
    {
      path: "/industries/healthcare", // 👈 new route
      icon: <FaHospital className="text-red-500 text-5xl mb-4" />,
      title: "Healthcare",
      desc: "AI-driven diagnostics, patient management, telemedicine solutions and health record automation.",
    },
    {
      path: "/industries/finance",
      icon: <FaMoneyBillWave className="text-green-600 text-5xl mb-4" />,
      title: "Finance",
      desc: "Digital banking, fraud detection, blockchain-based transactions and AI-powered risk analysis.",
    },
    {
      path: "/industries/ecommerce",
      icon: <FaShoppingCart className="text-pink-500 text-5xl mb-4" />,
      title: "E-Commerce",
      desc: "Seamless online shopping platforms, payment gateways, personalization engines and analytics.",
    },
    {
      path: "/industries/education",
      icon: <FaUniversity className="text-blue-500 text-5xl mb-4" />,
      title: "Education",
      desc: "eLearning platforms, AI tutors, student performance analytics and smart classrooms.",
    },
    // 👆 baaki industries me bhi path add kar sakte ho
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-12 text-indigo-700">
          Industries We Serve
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {industries.map((item, i) => (
            <Link key={i} to={item.path}>   {/* 👈 Link wrap */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition cursor-pointer"
              >
                {item.icon}
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
