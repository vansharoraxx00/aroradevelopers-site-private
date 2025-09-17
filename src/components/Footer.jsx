import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-gray-300 pt-12 pb-6 mt-16 border-t border-indigo-700/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Novetech</h2>
          <p className="text-sm text-gray-400">
            Building next-gen AI powered solutions for industries across the
            globe. Innovation, scale, and performance – reimagined.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link to="/industries" className="hover:text-yellow-400">Industries</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact</h2>
          <p>Email: <a href="mailto:info@novetech.com" className="hover:text-yellow-400">info@novetech.com</a></p>
          <p>Phone: +91-98765-43210</p>
          <p>Location: New Delhi, India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Novetech. All Rights Reserved.
      </div>
    </footer>
  );
}
