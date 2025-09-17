import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaChartLine, FaLock, FaMobileAlt, FaPiggyBank } from "react-icons/fa";

export default function Finance() {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-green-600 text-5xl mb-4" />,
      title: "Digital Banking",
      desc: "Seamless digital-first banking platforms with mobile-first experiences.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-5xl mb-4" />,
      title: "AI-Powered Risk Analysis",
      desc: "Machine learning models for fraud detection, credit scoring, and investment insights.",
    },
    {
      icon: <FaLock className="text-red-500 text-5xl mb-4" />,
      title: "Blockchain Security",
      desc: "End-to-end encrypted transactions using blockchain-based smart contracts.",
    },
    {
      icon: <FaMobileAlt className="text-indigo-500 text-5xl mb-4" />,
      title: "Mobile Wallets",
      desc: "Contactless payments, UPI integration, and global transaction support.",
    },
    {
      icon: <FaPiggyBank className="text-yellow-600 text-5xl mb-4" />,
      title: "Wealth Management",
      desc: "AI-driven robo-advisors and investment portfolio optimization.",
    },
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
          Finance Solutions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Novetech provides next-generation fintech solutions, enabling secure,
          smart, and scalable financial platforms for banks, startups, and
          enterprises worldwide.
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
      </div>
    </div>
  );
}
