import React from "react";

export default function Blog() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">
          Novetech Blog
        </h1>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest technology trends, AI innovations,
          cloud solutions, and more. We share insights, case studies,
          and expert opinions from our team.
        </p>

        {/* Example Blog Posts */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              The Future of AI in Software Development
            </h2>
            <p className="text-gray-600 text-sm">
              Artificial Intelligence is transforming the way we build apps.
              From AI-driven code assistants to automated testing...
            </p>
            <button className="mt-3 text-indigo-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Why Cloud Computing is the Backbone of Modern Business
            </h2>
            <p className="text-gray-600 text-sm">
              Cloud solutions help businesses scale faster, reduce costs,
              and improve collaboration across teams globally...
            </p>
            <button className="mt-3 text-indigo-600 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
