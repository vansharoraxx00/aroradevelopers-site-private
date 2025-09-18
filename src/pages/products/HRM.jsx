// src/pages/products/HRM.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsersCog, FaChartBar, FaMoneyCheckAlt } from "react-icons/fa";

export default function HRM() {
  const features = [
    {
      icon: <FaUserTie className="text-4xl text-indigo-500" />,
      title: "Recruitment Automation",
      desc: "Streamline hiring with AI-powered resume screening, interview scheduling, and onboarding workflows.",
    },
    {
      icon: <FaUsersCog className="text-4xl text-green-500" />,
      title: "Employee Engagement",
      desc: "Boost productivity with surveys, feedback systems, recognition tools, and communication platforms.",
    },
    {
      icon: <FaChartBar className="text-4xl text-orange-500" />,
      title: "Performance Tracking",
      desc: "Monitor employee performance with real-time KPIs, appraisal systems, and goal management.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-pink-500" />,
      title: "Payroll & Compliance",
      desc: "Automated payroll processing, tax compliance, and attendance management with error-free accuracy.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Smart HR Management Solutions
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Manage recruitment, payroll, employee engagement, and compliance with a
          modern, AI-powered HRM platform designed to simplify HR operations.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our HRM?</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            👥 Improve Workforce Management – Simplify HR operations and free up time
            for strategic decision-making.
          </p>
          <p>
            📊 Data-Driven Insights – Get detailed reports on employee performance,
            engagement, and payroll for smarter HR decisions.
          </p>
          <p>
            🔒 Secure & Compliant – Ensure sensitive employee data is protected with
            enterprise-grade security and compliance.
          </p>
          <p>
            🚀 Scalable & Flexible – From startups to enterprises, our HRM adapts to
            your organizational needs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-6">Transform Your HR Operations</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          Streamline employee management, payroll, and recruitment with our
          next-generation HRM software.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-md"
        >
          Request a Demo
        </motion.a>
      </section>
    </div>
  );
}
