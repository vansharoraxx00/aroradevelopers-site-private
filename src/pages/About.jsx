import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 pt-28 bg-gray-50 flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          About Us
        </motion.h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-gray-600 text-lg leading-relaxed mx-auto"
        >
          At{" "}
          <span className="font-semibold text-indigo-600">
            Softprogrammer
          </span>
          , we specialize in transforming ideas into impactful digital
          solutions. Our mission is to deliver cutting-edge, scalable, and
          secure software powered by modern technologies and AI-driven
          innovation. We build products that help businesses grow, adapt, and
          lead in a fast-evolving digital world.
        </motion.p>

        {/* Creator Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500">
            Website designed & developed by{" "}
            <span className="font-semibold text-gray-700">
              Vansh Arora
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
