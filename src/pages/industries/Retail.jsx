// src/pages/industries/Retail.jsx
import React from "react";

export default function Retail() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
          Retail Industry Solutions
        </h1>

        {/* Content */}
        <p className="text-gray-700 text-lg mb-6">
          We empower retail businesses with modern digital solutions to improve
          customer experience, optimize inventory, and streamline sales across
          multiple channels.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">
              Omnichannel Shopping
            </h2>
            <p className="text-gray-600">
              Seamless integration of online and offline shopping experiences
              with AI-driven personalization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">
              Customer Insights
            </h2>
            <p className="text-gray-600">
              Real-time data analytics to understand customer behavior and
              improve marketing strategies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">
              AI Inventory Management
            </h2>
            <p className="text-gray-600">
              Smart inventory tracking with demand forecasting to minimize stock
              shortages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">
              Loyalty Programs
            </h2>
            <p className="text-gray-600">
              Digital loyalty and rewards systems to boost customer retention
              and repeat sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
