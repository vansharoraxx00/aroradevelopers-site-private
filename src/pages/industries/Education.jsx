// src/pages/industries/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaChartLine, FaUsers } from "react-icons/fa";

const Education = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-indigo-500" />,
      title: "Smart Classrooms",
      desc: "Interactive learning experiences with AI-driven content delivery and virtual classrooms.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      title: "E-Learning Platforms",
      desc: "Custom LMS solutions with gamification, quizzes, and personalized courses for students.",
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "Student Analytics",
      desc: "AI-based dashboards to track progress, predict outcomes, and support adaptive learning.",
    },
    {
      icon: <FaUsers className="text-4xl text-pink-500" />,
      title: "Collaboration Tools",
      desc: "Seamless communication with chat, video conferencing, and group project management.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Transforming Education with Technology
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empower schools, colleges, and universities with AI-driven solutions that
          make learning smarter, accessible, and engaging for students across the globe.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Education Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Solutions?</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            📚 Personalized Learning – Each student receives a unique learning journey,
            ensuring they progress at their own pace with AI-driven recommendations.
          </p>
          <p>
            🎥 Hybrid Learning – Support both in-class and online learning with robust
            video conferencing, interactive boards, and mobile-friendly platforms.
          </p>
          <p>
            🔒 Secure & Scalable – Cloud-based infrastructure ensures data security,
            scalability, and seamless integration with existing systems.
          </p>
          <p>
            🌍 Global Reach – Enable remote learning and collaboration across multiple
            geographies, empowering educators and learners worldwide.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Learning?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          Partner with us to build next-generation education platforms that
          inspire, engage, and transform the way knowledge is shared.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-md"
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
};

export default Education;
