import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      {/* Main Header */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 text-gray-900"
      >
        About Us
      </motion.h2>

      {/* About Section */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-lg text-gray-600 text-center leading-relaxed mb-20"
      >
        Softprogrammer builds innovative software solutions that solve complex problems and drive
        business growth — unlocking the value of artificial intelligence and data.
      </motion.p>

      {/* Our Story */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Our Story</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Founded in 2013, our team of expert developers shares a deep passion for technology. 
          We design, develop, and deliver high-quality software products that meet the unique 
          needs of our clients — combining technical excellence with creativity to bring their vision to life.
        </p>
      </motion.div>

      {/* Our Builds */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Our Builds</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Our expertise spans a wide range of industries and software domains — from web and mobile 
          applications to enterprise software — leveraging artificial intelligence to outperform competitors.
        </p>
      </motion.div>

      {/* Extensive Integrations */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Extensive Integrations</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          We offer hundreds of pre-built and API-based integrations with leading tools and widely-used 
          platforms — helping you seamlessly power your growth with data.
        </p>
      </motion.div>

      {/* Client Collaboration */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Client Collaboration</h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          We take the time to understand our clients’ challenges and goals to craft custom software 
          solutions that deliver measurable results.
        </p>
      </motion.div>

      {/* Customer Challenges */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
          Identifying Customer Challenges & Goals
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Whether you're looking to streamline processes, enhance customer experiences, 
          or unlock new revenue streams, you can trust Softprogrammer to be your partner in 
          software innovation — with a proven track record of delivering successful projects 
          on time and on budget.
        </p>
      </motion.div>

      {/* Internships */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
          Softprogrammer Internships
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Softprogrammer invests in the development of our team members and offers internship opportunities. 
          Our fresh talent helps us leverage technology and people to positively impact customer initiatives.
        </p>
      </motion.div>
    </section>
  );
}
