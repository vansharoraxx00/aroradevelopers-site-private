// src/pages/products/EcommercePlatform.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard, FaWarehouse, FaChartLine } from "react-icons/fa";

export default function EcommercePlatform() {
  const features = [
    {
      icon: <FaShoppingCart className="text-4xl text-indigo-500" />,
      title: "Smart Storefront",
      desc: "Customizable storefronts with modern UI/UX to deliver seamless shopping experiences across devices.",
    },
    {
      icon: <FaCreditCard className="text-4xl text-green-500" />,
      title: "Secure Payments",
      desc: "Multiple payment gateways with fraud detection, one-click checkout, and global currency support.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-orange-500" />,
      title: "Inventory Management",
      desc: "Track stock in real-time, automate reorders, and manage warehouses efficiently.",
    },
    {
      icon: <FaChartLine className="text-4xl text-pink-500" />,
      title: "AI Recommendations",
      desc: "Personalized product recommendations powered by AI to boost conversions and customer satisfaction.",
    },
  ];

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Next-Gen E-Commerce Platform
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Launch and scale your online store with AI-driven recommendations,
          secure payments, and seamless inventory management — everything your
          business needs to grow.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl text-center border border-gray-100 transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Our E-Commerce Solution?
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>🛒 Faster Launch – Get your store up and running in days, not months.</p>
          <p>📈 Sales Growth – AI-powered insights help you convert more visitors into loyal customers.</p>
          <p>🔒 Security First – Protect your customers with enterprise-level data security and compliance.</p>
          <p>🌍 Global Reach – Multi-language, multi-currency, and scalable infrastructure for worldwide expansion.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-white">
        <h2 className="text-4xl font-bold mb-6">Launch Your Online Store Today</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          From startups to enterprises, our platform empowers businesses of all sizes
          to sell smarter and scale faster.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-md"
        >
          Get a Free Demo
        </motion.a>
      </section>
    </div>
  );
}
