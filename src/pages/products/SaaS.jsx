import React from "react";

export default function SaaS() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
          SaaS Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Our SaaS products are designed to help businesses scale quickly,
          reduce costs, and improve efficiency. From subscription management to
          AI-powered automation, we build SaaS platforms tailored to your needs.
        </p>
        <ul className="text-left list-disc list-inside text-gray-700 space-y-3">
          <li>Cloud-native architecture</li>
          <li>Scalable subscription management</li>
          <li>Secure payment integrations</li>
          <li>AI-driven automation</li>
        </ul>
      </div>
    </div>
  );
}
