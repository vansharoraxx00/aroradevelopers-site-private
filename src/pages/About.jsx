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
            Arora Developers
          </span>
          , we specialize in transforming ideas into impactful digital
          solutions. Our mission is to deliver cutting-edge, scalable, and
          secure software powered by modern technologies and innovation.
          We build reliable digital products that help businesses grow
          and adapt in an evolving tech-driven world.
        </motion.p>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 space-y-2"
        >
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Owner:</span> Vansh Arora
          </p>

          <p className="text-gray-500 text-sm">
            <span className="font-medium text-gray-600">
              Co-Owner / Managing Partner:
            </span>{" "}
            Raghav Arora
          </p>
        </motion.div>

        {/* Creator Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-8"
        >
          <p className="text-xs text-gray-400">
            Website designed & developed by{" "}
            <span className="font-medium text-gray-500">
              Vansh Arora
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
