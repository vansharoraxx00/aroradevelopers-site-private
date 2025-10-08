import React from "react";
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

export default function Home() {
  const techs = [
    { icon: <SiReact className="text-sky-500" />, name: "React" },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiOpenjdk className="text-red-500" />, name: "Java" },
    { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
    { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiAwsamplify className="text-orange-400" />, name: "AWS" },
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
          Softprogrammer delivers futuristic solutions in AI, Cloud, and Software
          Development. Our mission? To turn caffeine ☕ and code into
          world-changing technology.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">
          Technologies We Master ⚡
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <div className="text-6xl mb-4">{tech.icon}</div>
              <p className="font-medium text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
            Why Choose <span className="text-indigo-600">Softprogrammer?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Innovation First",
                desc: "We combine creativity and technology to craft products that truly stand out.",
              },
              {
                title: "Scalable Solutions",
                desc: "From startups to enterprises, our systems adapt and grow with your business.",
              },
              {
                title: "AI-Driven Approach",
                desc: "Future-ready solutions powered by Artificial Intelligence & Machine Learning.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-left"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-gray-900 tracking-tight"
        >
          Our Vision 🌍
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          To empower every business, startup, and dreamer to embrace the future
          of technology. We aim to build solutions that are sustainable,
          scalable, and designed for real impact in a modern digital world.
        </motion.p>
      </section>
    </div>
  );
}
