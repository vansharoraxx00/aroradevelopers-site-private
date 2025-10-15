import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Navbar menus
  const menus = [
    {
      name: "Products",
      links: [
        { name: "Timetoucan", path: "/products/timetoucan" },
        { name: "IE Products", path: "/products/ie" },
        { name: "Analytics & Reporting", path: "/products/analtics" },
       
      ],
    },
    {
      name: "Software",
      links: [
        { name: "Enterprise Resource Planning", path: "/products/erp" },
        { name: "Global Business Management", path: "/software/global-business" },
        { name: "Customer Relation Management", path: "/software/crm" },
        { name: "Supply Chain Management", path: "/software/supply-chain" },
        { name: "Human Capital Management", path: "/software/hcm" },
        { name: "Human Resource Information System", path: "/software/hris" },
        { name: "Restaurant Management", path: "/software/restaurant" },
        { name: "Prescription Management", path: "/software/prescription" },
        { name: "Professional Services Automation", path: "/software/psa" },
        { name: "Contract Lifecycle Management", path: "/software/clm" },
        { name: "Business Spend Management", path: "/software/spend" },
        { name: "Merchandise", path: "/software/merchandise" },
        { name: "Outsourcing", path: "/software/outsourcing" },
        { name: "Multi-Seller Marketplace", path: "/software/multi-seller" },
        { name: "Distributor Portal", path: "/software/distributor" },
        { name: "Omnichannel Commerce", path: "/software/omnichannel" },
        { name: "Analytics & Reporting", path: "/software/analytics-reporting" },
      ],
    },
    {
      name: "Company",
      links: [
        { name: "Careers", path: "/careers" },
        { name: "Blogs", path: "/blogs" },
      ],
    },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2"
          >
            <motion.img
              src={logo}
              alt="Softprogrammer Logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-10 md:h-12 object-contain select-none"
            />
          </motion.div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <Link to="/" className="relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {menus.map((menu, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 relative group hover:text-purple-600 transition">
                  {menu.name} <FaChevronDown className="text-xs mt-1" />
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {openMenu === menu.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-10 left-0 bg-white text-gray-800 shadow-2xl rounded-xl py-4 px-4 border border-gray-100 overflow-y-auto ${
                        menu.name === "Software"
                          ? "grid grid-cols-2 gap-3 w-[520px] max-h-[350px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                          : "w-64 max-h-[300px]"
                      }`}
                    >
                      {menu.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            to={link.path}
                            className="block px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition text-sm"
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

            {/* Separate Links */}
            <li>
              <Link to="/about" className="relative group">
                About Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="relative group">
                Contact Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setLoginOpen(true)}
                className="relative group"
              >
                Login
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={mobileMenuRef}
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
                    <p className="font-semibold text-purple-600">{menu.name}</p>
                    <ul className="pl-4 mt-2 space-y-2 text-sm">
                      {menu.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            to={link.path}
                            className="block hover:text-purple-600"
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
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setLoginOpen(true);
                      setMobileOpen(false);
                    }}
                    className="block hover:text-purple-600"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
