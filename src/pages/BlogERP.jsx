import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function BlogERP() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What Is an ERP System and Why Every Business Needs One
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Discover how ERP systems unify operations, boost productivity, and cut
          costs. Learn why integrated ERP software is essential for modern
          businesses.
        </p>
        <img
          src="https://images.unsplash.com/photo-1633158829585-23ba8f7f6e1a"
          alt="ERP dashboard on laptop showing connected business systems"
          className="rounded-xl shadow-lg w-full max-w-3xl mx-auto mt-10"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-gray-700 space-y-12">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            🏢 Introduction: The Hidden Power Behind Streamlined Companies
          </h2>
          <p className="leading-relaxed">
            If your business is juggling spreadsheets, disconnected apps, or
            endless data entry — you’re not alone. Many growing companies reach
            a point where manual processes start holding them back. That’s where
            ERP systems come in. <br />
            <br />
            ERP (Enterprise Resource Planning) isn’t just a buzzword; it’s the
            digital backbone that keeps every department — from accounting to HR
            to inventory — connected, accurate, and fast. At{" "}
            <span className="font-semibold text-indigo-600">
              Softprogrammer
            </span>
            , we build fully integrated ERP solutions that eliminate
            inefficiencies and help businesses scale effortlessly.
          </p>
        </motion.section>

        {/* What is ERP */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            💡 What Is an ERP System?
          </h2>
          <p className="leading-relaxed">
            An ERP system is an all-in-one software platform that unifies a
            company’s core operations — including accounting, inventory, human
            resources, customer management, and more — into one connected
            system.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Finance and Accounting</li>
            <li>Human Resources (HRIS)</li>
            <li>Customer Relationship Management (CRM)</li>
            <li>Supply Chain and Inventory Management</li>
            <li>Time Tracking and Payroll</li>
            <li>Reporting and Analytics</li>
          </ul>
        </motion.section>

        {/* ERP Integration */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            ⚙️ How ERP Integration Transforms Daily Operations
          </h2>
          <ul className="space-y-2">
            {[
              "Automation: Reduce manual work by syncing invoices, payments, and time logs automatically.",
              "Visibility: Gain real-time insights into performance, budgets, and resources.",
              "Productivity: Free up your team to focus on strategy — not spreadsheets.",
              "Accuracy: Prevent costly mistakes caused by duplicate or outdated data.",
              "Scalability: Add new users, departments, or modules as your business grows.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-indigo-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Real World Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            📈 Real-World Benefits for Businesses
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Financial Control: Unified ledgers and live dashboards improve decision-making.</li>
            <li>Customer Experience: CRM and ERP integration ensures teams share the same insights.</li>
            <li>Compliance & Security: Centralized systems simplify audits and protect sensitive data.</li>
            <li>Remote Access: Cloud-based ERP gives flexibility — work from anywhere, anytime.</li>
          </ul>
        </motion.section>

        {/* Why Every Business Needs ERP */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            🧠 Why Every Business Needs ERP — Sooner, Not Later
          </h2>
          <p className="leading-relaxed">
            Whether you run a small office or a nationwide enterprise,
            inefficiency costs money. ERP ensures operations stay lean,
            decisions are data-driven, and growth remains scalable.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Faster report generation</li>
            <li>Improvement in productivity</li>
            <li>Significant ROI within the first year</li>
          </ul>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            📞 Ready to Simplify Your Operations?
          </h2>
          <p className="text-gray-700 mb-4">
            Let’s build a smarter system together. Book your free consultation or
            see our ERP demo — no obligation, just clarity on how ERP can
            transform your workflow.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Book a Free Consultation <FaArrowRight />
          </a>
        </motion.section>
      </div>
    </section>
  );
}
