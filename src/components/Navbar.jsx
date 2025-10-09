import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import LoginModal from "./LoginModal"; // 👈 Login Modal import

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [logoText, setLogoText] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // 👈 State for modal
  const fullLogo = "Softprogrammer";

  // 🔤 Typewriter Effect
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

  // 🔗 Menus
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
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 🔥 Animated Logo */}
          <motion.h1
            key={logoText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {logoText}
            <span className="animate-pulse text-red-500">|</span>
          </motion.h1>

          {/* 🌐 Desktop Navbar */}
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

                {/* 🧭 Dropdown */}
                <AnimatePresence>
                  {openMenu === menu.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-10 left-0 bg-white text-gray-800 shadow-xl rounded-xl py-4 px-4 border border-gray-100
                      ${menu.name === "Products" ? "grid grid-cols-2 gap-2 w-[480px]" : "block w-64"}`}
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
                    onClick={() => { setLoginOpen(true); setMobileOpen(false); }}
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

      {/* 🔒 Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
