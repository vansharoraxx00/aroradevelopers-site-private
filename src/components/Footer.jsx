import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  const products = [
    { name: "Enterprise Resource Planning", path: "/products/erp" },
    { name: "Accounting Software", path: "/products/accounting" },
    { name: "Global Business Management", path: "/products/global-business" },
    { name: "Customer Relation Management", path: "/products/crm" },
    { name: "Supply Chain Management", path: "/products/supply-chain" },
    { name: "Human Capital Management", path: "/products/hcm" },
    { name: "Human Resource Information System", path: "/products/hris" },
    { name: "Restaurant Management", path: "/products/restaurant" },
    { name: "Prescription Management", path: "/products/prescription" },
    { name: "Professional Services Automation", path: "/products/psa" },
    { name: "Contract Lifecycle Management", path: "/products/clm" },
    { name: "Business Spend Management", path: "/products/spend" },
    { name: "Merchandise", path: "/products/merchandise" },
    { name: "Outsourcing", path: "/products/outsourcing" },
    { name: "Multi-Seller Marketplace", path: "/products/multi-seller" },
    { name: "Distributor Portal", path: "/products/distributor" },
    { name: "Omnichannel Commerce", path: "/products/omnichannel" },
    { name: "Analytics & Reporting", path: "/products/analytics-reporting" },
  ];

  const companyLinks = [
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Join Us", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Affiliates", path: "/affiliates" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-white to-gray-50 text-gray-700 pt-16 pb-8 mt-20">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[80px] text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 92.83c-70.47-22.95-144.38-24.58-218.24-13.53-69.16 
            10.41-138.76 30.24-209.67 29.71-72.57-.55-140.63-22.49-211.39-35.6C266.56 
            60.56 167.91 66.7 73.29 98.39c-30.77 10.14-59.78 23.73-87.62 
            38.9v18.71h1200V96.36c-70.79-29.1-141.84-36.48-200.01-3.53z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Products</h3>
            <ul className="space-y-2 text-sm opacity-90 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
              {products.map((p, i) => (
                <li key={i}>
                  <Link to={p.path} className="hover:text-indigo-500">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Company</h3>
            <ul className="space-y-2 text-sm opacity-90 mb-5">
              {companyLinks.map((c, i) => (
                <li key={i}>
                  <Link to={c.path} className="hover:text-indigo-500">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-90 mb-5">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-indigo-600" /> San Francisco, California, USA
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-indigo-600" />
                <a href="tel:+14155550123" className="hover:text-indigo-500">
                  +1 (415) 555-0123
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-indigo-600" />
                <a
                  href="mailto:info@softprogrammer.com"
                  className="hover:text-indigo-500"
                >
                  info@softprogrammer.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("✅ Subscribed successfully!");
              }}
              className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-indigo-400 transition"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 font-medium hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
              Subscribe to our newsletter 📬
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70 text-center md:text-left">
            © {new Date().getFullYear()} Softprogrammer. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((s, i) => {
              const controls = useAnimation();

              return (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.6 },
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                >
                  {s.icon}
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
