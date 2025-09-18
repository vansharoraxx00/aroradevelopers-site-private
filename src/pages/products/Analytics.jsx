import React from "react";

export default function Analytics() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          Analytics Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Turn raw data into actionable insights with our advanced analytics
          platforms. From AI-powered predictions to custom dashboards, we help
          businesses unlock new opportunities and make smarter, data-driven
          decisions.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {[
          {
            title: "Real-Time Dashboards",
            desc: "Interactive BI dashboards that give instant visibility into KPIs and performance.",
          },
          {
            title: "Data Warehousing",
            desc: "Seamlessly integrate ETL pipelines and unify data across multiple systems.",
          },
          {
            title: "Predictive Analytics",
            desc: "AI/ML-driven insights to forecast trends and optimize business outcomes.",
          },
          {
            title: "Custom Reporting",
            desc: "Tailored visualizations and reports that match your business goals.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose Our Analytics?
        </h2>
        <ul className="text-gray-700 text-lg space-y-4 list-disc list-inside text-left max-w-3xl mx-auto">
          <li>Boost decision-making with AI-driven recommendations</li>
          <li>Cut costs by optimizing resources and operations</li>
          <li>Enhance customer experiences through behavior insights</li>
          <li>Scale seamlessly as your data grows</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-indigo-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Unlock the Power of Data?
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Transform your business with advanced analytics and AI-driven
          intelligence.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Get a Free Demo
        </button>
      </div>
    </div>
  );
}
