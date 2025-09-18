import React from "react";

export default function ERP() {
  const modules = [
    { icon: "💰", title: "Finance & Accounting", desc: "Track expenses, revenue, and cash flow with precision." },
    { icon: "👥", title: "Human Resources", desc: "Manage payroll, employee data, and performance seamlessly." },
    { icon: "📦", title: "Inventory Management", desc: "Real-time stock tracking, procurement, and warehouse control." },
    { icon: "🚚", title: "Supply Chain", desc: "Optimize logistics, vendors, and demand forecasting." },
    { icon: "🏭", title: "Operations", desc: "Monitor production, quality, and efficiency across departments." },
    { icon: "📊", title: "Analytics & Reporting", desc: "Make data-driven decisions with interactive dashboards." },
  ];

  const benefits = [
    "Boost efficiency by automating manual processes",
    "Gain real-time insights across all departments",
    "Reduce operational costs with smarter workflows",
    "Enhance collaboration and transparency",
    "Scalable for startups to large enterprises",
  ];

  const industries = [
    "🏭 Manufacturing",
    "🛒 Retail & E-commerce",
    "💊 Healthcare",
    "🏗️ Construction",
    "📦 Logistics & Distribution",
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
          ERP System for Modern Businesses
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          A powerful ERP system to manage finance, HR, inventory, supply chain,
          and operations — all in one platform designed to grow with your business.
        </p>
        <a
          href="#modules"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Explore Modules
        </a>
      </div>

      {/* Modules Section */}
      <div id="modules" className="mt-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Core ERP Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{m.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{m.title}</h3>
              <p className="text-gray-600 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our ERP?</h2>
        <ul className="text-left list-disc list-inside text-gray-700 space-y-3 max-w-2xl mx-auto">
          {benefits.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Industries Section */}
      <div className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted Across Industries</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
          {industries.map((ind, idx) => (
            <span
              key={idx}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-indigo-700 text-white py-12 px-6 text-center rounded-3xl max-w-5xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Implement ERP?</h2>
        <p className="text-lg mb-6">
          Empower your business with a unified ERP system tailored to your industry needs.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>
      </div>
    </div>
  );
}