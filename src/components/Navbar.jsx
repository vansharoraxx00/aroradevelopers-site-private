import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [logoText, setLogoText] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const fullLogo = "Eratos software";

  // ⌨️ Typewriter Effect with Reset
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLogoText(fullLogo.slice(0, index + 1));
      index++;
      if (index === fullLogo.length) {
        setTimeout(() => {
          index = 0;
          setLogoText("");
        }, 1500);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const menus = [
    {
      name: "Services",
      links: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Apps", path: "/services/mobile-apps" },
        { name: "Cloud", path: "/services/cloud" },
        { name: "AI & ML", path: "/services/ai-ml" },
      ],
    },
    {
      name: "Products",
      links: [
        { name: "SaaS Platform", path: "/products/saas" },
        { name: "ERP Tool", path: "/products/erp" },
        { name: "Analytics Dashboard", path: "/products/analytics" },
        { name: "E-Commerce Platform", path: "/products/ecommerce" },
        { name: "HR Management", path: "/products/hrm" },
      ],
    },
    {
      name: "Industries",
      links: [
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Finance", path: "/industries/finance" },
        { name: "Education", path: "/industries/education" },
        { name: "Retail", path: "/industries/retail" },
      ],
    },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔥 Gradient Flush Logo */}
        <motion.h1
          key={logoText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 bg-clip-text text-transparent"
        >
          {logoText}
          <span className="animate-pulse text-cyan-500">|</span>
        </motion.h1>

        {/* 🌐 Desktop Navbar Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>

          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 relative group hover:text-cyan-600 transition">
                {menu.name} <FaChevronDown className="text-xs mt-1" />
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <AnimatePresence>
                {openMenu === menu.name && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white text-gray-800 shadow-xl rounded-xl py-3 w-64 border border-gray-100"
                  >
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="block px-4 py-2 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}

          <li>
            <Link to="/about" className="relative group">
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="relative group">
              Blog
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* 📱 Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg border-l border-gray-200 z-50 p-6 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 text-gray-700 font-medium">
              <li>
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>

              {menus.map((menu, idx) => (
                <li key={idx}>
                  <p className="font-semibold text-cyan-600">{menu.name}</p>
                  <ul className="pl-4 mt-2 space-y-2 text-sm">
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.path}
                          className="block hover:text-cyan-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <Link to="/about" onClick={() => setMobileOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
