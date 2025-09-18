// src/pages/services/Cloud.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaServer,
  FaTools,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

export default function Cloud() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  const offerings = [
    {
      icon: <FaAws className="text-4xl text-orange-500" />,
      title: "Cloud Migration",
      desc:
        "Seamless migration from on-premise or legacy infrastructure to AWS, Azure or Google Cloud. We ensure minimal downtime, optimized costs and zero data loss.",
    },
    {
      icon: <FaTools className="text-4xl text-emerald-600" />,
      title: "DevOps & Automation",
      desc:
        "CI/CD pipelines, Infrastructure-as-Code (Terraform/CloudFormation), container orchestration with Kubernetes and automated deployments.",
    },
    {
      icon: <FaServer className="text-4xl text-indigo-600" />,
      title: "Serverless Architectures",
      desc:
        "Event-driven, cost-efficient applications using AWS Lambda, Azure Functions, Google Cloud Functions with integrated APIs and monitoring.",
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-600" />,
      title: "Data Backup & DR",
      desc:
        "Reliable backup solutions, geo-redundant storage, automated snapshots, and full Disaster Recovery (DR) strategies to keep business always-on.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "Security & Compliance",
      desc:
        "Identity & Access Management (IAM), encryption, threat detection, GDPR/ISO/HIPAA compliance with continuous security audits.",
    },
    {
      icon: <FaGoogle className="text-4xl text-blue-500" />,
      title: "Cloud Optimization",
      desc:
        "Right-sizing resources, cost-optimization tools, autoscaling, and performance tuning to maximize ROI from your cloud investment.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-4">
            Cloud Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our cloud experts architect and manage **secure, scalable, and
            cost-effective cloud solutions**. From strategy to deployment, we
            ensure reliability, automation, and compliance — so you can focus on
            growth, not servers.
          </p>
        </motion.header>

        {/* OFFERINGS GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {offerings.map((o, i) => (
            <motion.article
              key={i}
              whileHover={{
                translateY: -8,
                boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  {o.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{o.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CLOUD LIFECYCLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8 mb-10"
        >
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">1) Assessment & Planning</h4>
            <p className="text-gray-700 mb-3">
              Cloud success begins with understanding your workloads. We assess
              existing infra, map dependencies, and build migration roadmaps
              that minimize risk and downtime.
            </p>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">2) Migration & Deployment</h4>
            <p className="text-gray-700 mb-3">
              Lift-and-shift, re-platform, or refactor — we choose the right
              migration strategy. Deploying with Infrastructure-as-Code ensures
              consistency and scalability from day one.
            </p>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">3) Optimization & Scaling</h4>
            <p className="text-gray-700 mb-3">
              We monitor utilization, autoscale workloads, and recommend
              right-sizing. This keeps infra lean, fast, and cost-effective.
            </p>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">4) Governance & Security</h4>
            <p className="text-gray-700 mb-3">
              IAM, encryption, policy enforcement, and continuous compliance
              ensure your business meets strict regulations without slowing
              delivery.
            </p>
          </article>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Ready to modernize with the cloud?
          </h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            From startups to enterprises, we’ve helped businesses unlock the
            full potential of the cloud. Let’s design a roadmap that fits your
            scale and budget.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transform transition"
            >
              Talk to Cloud Experts
            </a>
            <a
              href="/case-studies"
              className="inline-block border border-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Explore Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
