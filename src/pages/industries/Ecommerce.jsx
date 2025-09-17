// src/pages/industries/Ecommerce.jsx
import React from "react";

const Ecommerce = () => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">
        E-Commerce Industry
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
        We help businesses build powerful and scalable e-commerce solutions. 
        From online storefronts to secure payment gateways, inventory management,
        and personalized shopping experiences, our solutions are designed to 
        drive growth and customer satisfaction.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Online Stores</h2>
          <p className="text-gray-600">
            Build engaging and fast-loading web and mobile e-commerce apps with 
            modern UI/UX.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">Payment Solutions</h2>
          <p className="text-gray-600">
            Secure and smooth checkout with support for multiple global payment 
            gateways.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-2">AI-Powered Analytics</h2>
          <p className="text-gray-600">
            Use AI insights to boost customer engagement and optimize sales 
            strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
