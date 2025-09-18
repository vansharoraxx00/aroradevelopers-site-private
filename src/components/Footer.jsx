import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-white to-gray-50 text-gray-700 pt-16 pb-8 mt-20">
      {/* 🌀 Curvy Top Shape */}
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
        {/* 🔹 Grid Layout */}
        <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold mb-4 tracking-wide text-gray-900">NovaTech</h2>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering businesses with next-gen digital solutions.  
              Driving innovation across industries.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services/web-development" className="hover:text-indigo-500">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="hover:text-indigo-500">Mobile Apps</Link></li>
              <li><Link to="/services/cloud" className="hover:text-indigo-500">Cloud Solutions</Link></li>
              <li><Link to="/services/ai-ml" className="hover:text-indigo-500">AI & ML</Link></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Industries</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/industries/healthcare" className="hover:text-indigo-500">Healthcare</Link></li>
              <li><Link to="/industries/finance" className="hover:text-indigo-500">Finance</Link></li>
              <li><Link to="/industries/education" className="hover:text-indigo-500">Education</Link></li>
              <li><Link to="/industries/retail" className="hover:text-indigo-500">Retail</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-indigo-600">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Note */}
        <p className="text-center text-sm opacity-70">
          © {new Date().getFullYear()} NovaTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
