import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,     // ✅ Java ka sahi icon
  SiDocker,
  SiFlutter,
  SiTensorflow,
  SiMongodb,
  SiAwsamplify,  // ✅ AWS fallback
} from "react-icons/si";

export default function Home() {
  const techs = [
    { icon: <SiReact className="text-sky-500" />, name: "React" },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiOpenjdk className="text-red-600" />, name: "Java" },
    { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
    { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiAwsamplify className="text-orange-400" />, name: "AWS" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Software Design & Development,
          <br />
          Reimagined with AI
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Novetech brings the future of technology with AI-powered solutions,
          scalable systems, and cutting-edge innovations.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="/services"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md"
          >
            Our Services
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md"
          >
            About Us
          </motion.a>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Technologies We Build With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center"
            >
              <div className="text-6xl mb-3">{tech.icon}</div>
              <p className="font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
