// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      submenu: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Apps", path: "/services/mobile-apps" },
        { name: "Cloud", path: "/services/cloud" },
        { name: "AI & ML", path: "/services/ai-ml" },
      ],
    },
    {
      name: "Industries",
      submenu: [
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Finance", path: "/industries/finance" },
        { name: "Education", path: "/industries/education" },
        { name: "E-Commerce", path: "/industries/ecommerce" },
        { name: "Retail", path: "/industries/retail" },
      ],
    },
    {
      name: "Products",
      submenu: [
        { name: "CRM Software", path: "/products/crm" },
        { name: "ERP System", path: "/products/erp" },
        { name: "HR Management", path: "/products/hrm" },
        { name: "E-Commerce Platform", path: "/products/ecommerce-platform" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          <motion.span
            animate={{ backgroundPosition: ["0%", "200%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-md animate-pulse"
          >
            Novetech
          </motion.span>
        </Link>

        {/* Menu */}
        <ul className="flex gap-8 text-white font-semibold relative">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => item.submenu && setOpenMenu(idx)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.path || "#"}
                className="flex items-center gap-1 transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
                {item.submenu && <FaChevronDown size={12} className="ml-1" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {openMenu === idx && item.submenu && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white text-gray-800 shadow-xl rounded-lg py-2 w-56"
                  >
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
