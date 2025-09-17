import React from "react";

export default function Analytics() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
          Analytics Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Unlock the power of your data with our advanced analytics solutions.
          From BI dashboards to AI-powered insights, we help businesses make
          smarter decisions.
        </p>
        <ul className="text-left list-disc list-inside text-gray-700 space-y-3">
          <li>Real-time business intelligence dashboards</li>
          <li>Data warehousing and ETL pipelines</li>
          <li>Predictive analytics with AI/ML</li>
          <li>Custom reporting and visualization</li>
        </ul>
      </div>
    </div>
  );
}
