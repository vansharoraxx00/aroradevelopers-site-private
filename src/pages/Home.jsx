import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiDocker,
  SiFlutter,
  SiTensorflow,
  SiMongodb,
  SiAwsamplify,
} from "react-icons/si";
import {
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobeAsia,
  FaAward,
  FaBriefcase,
  FaHandshake,
  FaClock,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

export default function Home() {
  // Tech Stack
  const techs = [
    { icon: <SiReact className="text-sky-500" />, name: "React", desc: "Modern frontend UI library for web apps." },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js", desc: "Scalable backend solutions." },
    { icon: <SiPython className="text-yellow-500" />, name: "Python", desc: "AI, automation, data analysis." },
    { icon: <SiOpenjdk className="text-red-500" />, name: "Java", desc: "Cross-platform enterprise solutions." },
    { icon: <SiDocker className="text-blue-500" />, name: "Docker", desc: "Containerization for deployment." },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter", desc: "Cross-platform mobile apps." },
    { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow", desc: "Machine Learning & AI models." },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", desc: "NoSQL database for modern apps." },
    { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js", desc: "React framework for fast, SEO-friendly web apps." },
    { icon: <SiAwsamplify className="text-orange-400" />, name: "AWS", desc: "Cloud infrastructure & services." },
  ];

  // Clients Logos
  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },

  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Mehta",
      company: "TechSolutions",
      feedback:
        "ARORA-PROGRMMERS delivered beyond expectations! Their AI-driven tools have transformed our workflow and boosted efficiency.",
    },
    {
      name: "Emily Johnson",
      company: "GlobalFinance Inc.",
      feedback:
        "Professional, reliable, and innovative — ARORA-PROGRMMERSbecame an indispensable tech partner.",
    },
    {
      name: "David Wong",
      company: "HealthPlus",
      feedback:
        "Their cloud solutions are scalable and secure. Our costs reduced while productivity skyrocketed.",
    },
    {
      name: "Sophia Lee",
      company: "EduTech",
      feedback:
        "Aroradevelopers's team is creative, proactive, and tech-savvy. Highly recommended for any software project.",
    },
  ];

  // Blog Highlights
  const blog = [
    {
      title: "Top 5 AI Trends in 2025",
      desc: "Discover how Artificial Intelligence is reshaping industries worldwide and driving automation.",
    },
    {
      title: "Cloud Migration Best Practices",
      desc: "Tips & tricks for a seamless transition to cloud infrastructure while minimizing downtime.",
    },
    {
      title: "Why Custom Software Wins",
      desc: "Learn the benefits of tailored software solutions over generic products.",
    },
  ];

  return (
    <div className="pt-20 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative text-center py-28 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-gray-900 tracking-tight"
        >
          Transforming Ideas <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            Into Digital Reality 🚀
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-10 text-gray-600"
        >
          Aroradevelopers delivers futuristic solutions in AI, Cloud, and Software Development. Our mission? To turn caffeine ☕ and code into world-changing technology.
        </motion.p>

        <div className="flex justify-center gap-6">
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            className="px-7 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="px-7 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-md hover:bg-gray-50 transition"
          >
            About Us
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">About Aroradevelopers</motion.h2>
          <motion.p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            With over 10 years of business performance, Aroradevelopers develops reliable, scalable, and secure software solutions for any OS, browser, and device. Our cross-industry expertise combined with cutting-edge IT advancements allows us to deliver custom products that perfectly match the needs and behavior of users.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-6">
          Our mission is to empower businesses, startups, and innovators to embrace the future of technology. We envision a world where software solutions are not only functional but transformative, driving growth, efficiency, and positive impact.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700">
          Aroradevelopers focuses on sustainability, scalability, and user-centric design to build solutions that truly matter in a modern digital world.
        </p>
      </section>

      {/* Stats / Achievements */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaClock />, value: "20+", label: "Years Experience" },
            { icon: <FaBriefcase />, value: "226+", label: "Projects Completed" },
            { icon: <FaHandshake />, value: "122+", label: "Happy Clients" },
            { icon: <FaAward />, value: "10+", label: "Awards Won" },
          ].map((stat, i) => (
            <motion.div key={i} className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              <div className="text-5xl mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Technologies We Master ⚡</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }} className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition">
              <div className="text-6xl mb-4">{tech.icon}</div>
              <h3 className="font-semibold text-gray-800">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">How We Work 🔄</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaLightbulb className="text-yellow-500 text-5xl mb-4" />, title: "Ideation", desc: "Understanding client vision, brainstorming solutions, and defining clear objectives." },
            { icon: <FaLaptopCode className="text-indigo-600 text-5xl mb-4" />, title: "Development", desc: "Crafting scalable, robust, and secure solutions tailored to business needs." },
            { icon: <FaCogs className="text-green-600 text-5xl mb-4" />, title: "Delivery", desc: "Seamless deployment, ongoing support, and iterative improvements." },
          ].map((step, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              {step.icon}
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose ARORA-PROGRMMERS*/}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Why Choose Aroradevelopers? 💼</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Innovation First", desc: "We prioritize creativity and technology to craft products that stand out." },
            { title: "Scalable Solutions", desc: "Our systems grow with your business, from startups to enterprises." },
            { title: "AI-Driven Approach", desc: "Future-ready solutions powered by AI & Machine Learning." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* Clients Logos */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Clients 🌍</h2>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {clients.map((client, i) => (
            <motion.img key={i} src={client.logo} alt={client.name} className="h-10 opacity-80 hover:opacity-100 transition" whileHover={{ scale: 1.1 }} />
          ))}
        </div>
      </section>
      

      {/* Blog Highlights */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Insights & Blog ✍️</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blog.map((b, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-6">
          Ready to Build the Future With Aroradevelopers?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
          Let’s collaborate and bring your vision to life with cutting-edge technology solutions tailored to your business needs.
        </p>
        <div className="flex justify-center gap-6">
          <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition">
            Contact Us
          </a>
          <a href="/services" className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 transition">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
