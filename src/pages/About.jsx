import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 pt-28 bg-gray-50">
      {/* 👆 Added pt-28 for space below navbar */}

      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        About Us
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-gray-600 text-center text-lg mx-auto leading-relaxed"
      >
        At{" "}
        <span className="font-semibold text-indigo-600">Softprogrammer</span>,
        we are passionate about transforming ideas into impactful digital
        solutions. Our mission is to deliver cutting-edge technology with a
        focus on scalability, security, and AI-driven innovation. We believe in
        creating software that empowers businesses to thrive in a connected and
        intelligent world.
      </motion.p>
    </section>
  );
}
