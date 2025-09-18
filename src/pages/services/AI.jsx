// src/pages/services/AI.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaLightbulb,
  FaLock,
} from "react-icons/fa";

export default function AI() {
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  const offerings = [
    {
      icon: <FaRobot className="text-4xl text-indigo-600" />,
      title: "Custom ML Models",
      desc:
        "Classification, regression, time-series forecasting, NLP and computer vision models tailored to your data and business objectives.",
    },
    {
      icon: <FaChartLine className="text-4xl text-emerald-600" />,
      title: "Predictive Analytics",
      desc:
        "Demand forecasting, churn prediction, lifetime-value models and scoring systems that drive measurable business decisions.",
    },
    {
      icon: <FaCloud className="text-4xl text-sky-600" />,
      title: "Cloud ML / MLOps",
      desc:
        "Model training, serving and lifecycle management on cloud (SageMaker / Vertex AI / Azure ML) with CI/CD for models.",
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-600" />,
      title: "Data Engineering",
      desc:
        "Data pipelines, ETL/ELT, feature stores and schema design — production-ready data infra for reliable ML.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "AI Products & Agents",
      desc:
        "Conversational agents, recommendation engines, personalization and automation flows integrated into products.",
    },
    {
      icon: <FaLock className="text-4xl text-red-500" />,
      title: "Governance & Security",
      desc:
        "Privacy-preserving training, model explainability, bias audits and secure serving with monitoring & alerting.",
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 mb-4">
            Artificial Intelligence & Machine Learning
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build practical, production-ready AI — from data strategy to
            deployed models. Our focus is on reliability, interpretability and
            measurable ROI: automations that save cost, models that increase
            revenue and insights that power better decisions.
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
              whileHover={{ translateY: -8, boxShadow: "0 20px 40px rgba(2,6,23,0.08)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white shadow-sm">
                  {o.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{o.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* DEEP DIVE: ML LIFECYCLE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8 mb-10"
        >
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">1) Data Strategy & Engineering</h4>
            <p className="text-gray-700 mb-3">
              Good ML starts with good data. We perform data discovery, lineage mapping and
              build resilient pipelines (batch & streaming) using tools like Airflow, Spark,
              or cloud-native dataflow services. We design feature stores and automate feature
              computation so models get reliable inputs in production.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Data audits & quality profiling (missingness, drift detection).</li>
              <li>Feature engineering and online/offline feature parity via feature stores.</li>
              <li>Secure storage, encryption, and GDPR-aware pipelines.</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">2) Model Development & Evaluation</h4>
            <p className="text-gray-700 mb-3">
              We prototype quickly (scikit-learn, PyTorch, TensorFlow), iterate on metrics,
              and validate models with robust train/val/test splits, time-aware cross-validation,
              and careful baseline comparisons.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Model selection, hyperparameter tuning and reproducibility (experiments tracking).</li>
              <li>Robust evaluation: confusion matrices, calibration, precision-recall by segment.</li>
              <li>Explainability: SHAP/LIME, feature importance and human-readable model summaries.</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">3) MLOps, Serving & Observability</h4>
            <p className="text-gray-700 mb-3">
              Deploy models with confidence: containerized serving (Docker), autoscaling endpoints,
              A/B/Canary rollout and continuous monitoring for data & model drift. We integrate
              model CI/CD pipelines to automate retraining and deployment when performance degrades.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Containerized model servers, model registries and blue/green or canary deployments.</li>
              <li>Monitoring: data drift, prediction distribution, latency and error rates.</li>
              <li>Automated retrain triggers and governance workflows for approvals.</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">4) Integration & Productionization</h4>
            <p className="text-gray-700 mb-3">
              We expose models as reliable APIs, integrate with existing services, and ensure end-to-end
              security (auth, rate-limits, quotas). For real-time apps we design asynchronous event
              pipelines and edge inference where latency matters.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>REST / gRPC / streaming endpoints with versioning and backward compatibility.</li>
              <li>Batch scoring & feature compute for offline workflows.</li>
              <li>Edge & on-device models when privacy or latency require it.</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">5) Ethics, Bias & Compliance</h4>
            <p className="text-gray-700 mb-3">
              Responsible AI is non-negotiable. We run bias audits, document model limitations,
              add human-in-the-loop controls for high-risk decisions, and provide traceability for
              regulatory needs.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bias detection, fairness metrics and demographic slicing.</li>
              <li>Explainability reports for stakeholders & auditors.</li>
              <li>Privacy-preserving techniques: differential privacy, federated learning (where appropriate).</li>
            </ul>
          </article>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-10">
          <h3 className="text-2xl font-bold mb-6">Delivery process — practical steps</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Discover", desc: "Business goals, KPIs, data availability & feasibility." },
              { title: "Prototype", desc: "Quick proof-of-concepts to validate value & feasibility." },
              { title: "Build", desc: "Productionize model, pipelines & infra with tests & monitoring." },
              { title: "Operate", desc: "SLA-backed support, retraining and lifecycle management." },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-3">
                  {i + 1}
                </div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to add intelligence?</h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Share a dataset sample or a business problem — we’ll propose a phased plan: quick POC → validated model → production rollout.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transform transition">
              Request a Consultation
            </a>
            <a href="/case-studies" className="inline-block border border-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-50 transition">
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
