// src/pages/services/MobileApps.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaLock,
  FaRocket,
} from "react-icons/fa";

export default function MobileApps() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FaReact className="text-4xl text-blue-500" />,
      title: "Cross-Platform Engineering",
      desc: "React Native & modern frameworks for shared codebase, faster delivery and native-like UX.",
    },
    {
      icon: <FaAndroid className="text-4xl text-green-600" />,
      title: "Native Platform Integrations",
      desc: "Deep native capabilities (camera, GPS, sensors, background tasks) via safe native modules and bridges.",
    },
    {
      icon: <FaApple className="text-4xl text-gray-900" />,
      title: "iOS Excellence",
      desc: "Human Interface compliance, on-device performance tuning and App Store delivery expertise.",
    },
    {
      icon: <FaCloud className="text-4xl text-cyan-600" />,
      title: "Cloud Connected",
      desc: "Seamless cloud sync, offline-first conflict resolution and secure APIs (Firebase / AWS / custom).",
    },
    {
      icon: <FaDatabase className="text-4xl text-indigo-600" />,
      title: "Data & Offline Strategy",
      desc: "Local persistence, sync queues, conflict resolution and encryption at rest & transit.",
    },
    {
      icon: <FaLock className="text-4xl text-red-500" />,
      title: "Security & Privacy",
      desc: "Secure storage, credential handling, mobile threat protection and GDPR/PCI-aware flows.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Mobile Application Development
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We design and build robust mobile apps —{" "}
            <span className="font-semibold text-gray-900">cross-platform</span> or
            native — focused on performance, polished UX and seamless cloud
            integrations. From prototype to App Store, we deliver production-ready
            solutions engineered for scale and maintainability.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transform transition"
            >
              Talk to a Mobile Architect
            </a>
            <a
              href="#process"
              className="inline-block border border-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              See Our Process
            </a>
          </div>
        </motion.header>

        {/* QUICK FEATURES (cards) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {features.map((f, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.08)" }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-white p-6 rounded-2xl border border-gray-100"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* TECH STACK BADGES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Preferred tech & tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "React Native", icon: <FaReact className="text-xl" /> },
              { label: "Flutter", icon: <FaRocket className="text-xl" /> }, // icon as placeholder
              { label: "Firebase / Auth", icon: <FaCloud className="text-xl" /> },
              { label: "Native SDKs", icon: <FaMobileAlt className="text-xl" /> },
              { label: "CI/CD", icon: <FaRocket className="text-xl" /> },
              { label: "Sentry / Crashlytics", icon: <FaLock className="text-xl" /> },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
              >
                <div className="text-blue-600">{t.icon}</div>
                <div className="text-sm font-medium">{t.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DEEP TECHNICAL EXPLANATIONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* ARCHITECTURE */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">Architecture & Patterns</h4>
            <p className="text-gray-700 mb-3">
              We start by choosing an architecture that fits product goals — single codebase (React
              Native / Flutter) for faster iteration or native modules for platform-specific
              performance. We adopt clean architecture (presentation → domain → data),
              modular feature boundaries and design tokens for UI consistency.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Feature modules & lazy loading to reduce startup time.</li>
              <li>Unidirectional data flow (Redux / MobX / Riverpod) to maintain predictable state.</li>
              <li>Strict separation between UI and business logic for testability.</li>
            </ul>
          </article>

          {/* OFFLINE-FIRST */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">Offline-first & Data Sync</h4>
            <p className="text-gray-700 mb-3">
              Latency and inconsistent connectivity are primary mobile challenges. We design offline-first
              apps with local queueing, optimistic UI, conflict resolution strategies and background sync.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Local storage: SQLite / Realm / MMKV for reliable persistence.</li>
              <li>Two-way sync with conflict resolution (CRDT or last-writer rules when suitable).</li>
              <li>Background sync & resumable uploads for media and large payloads.</li>
            </ul>
          </article>

          {/* NATIVE FEATURES */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">Native Modules & Performance</h4>
            <p className="text-gray-700 mb-3">
              When performance or low-level APIs are required, we implement native modules (Swift/Obj-C,
              Kotlin/Java) and expose a small, well-documented bridge to the JavaScript layer.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Profiling and instrumentation (CPU, GPU, memory) during development.</li>
              <li>Reduce JS thread work using background workers and native rendering where needed.</li>
              <li>Optimize list rendering, image handling and asset pipelines for smooth 60fps UX.</li>
            </ul>
          </article>

          {/* CI/CD & RELEASE */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">CI / CD & App Store Releases</h4>
            <p className="text-gray-700 mb-3">
              Robust CI/CD pipelines let us deliver frequent, safe releases. Automated builds, signing,
              and beta distribution speed up QA and feedback loops.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Automated builds & signing (Fastlane / GitHub Actions / Bitrise).</li>
              <li>Beta distribution: TestFlight / Play Internal / Firebase App Distribution.</li>
              <li>Release strategies: phased rollouts, feature flags and rollback plans.</li>
            </ul>
          </article>

          {/* QA & MONITORING */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">QA, Observability & Analytics</h4>
            <p className="text-gray-700 mb-3">
              Quality means fewer crashes and data-driven product decisions. We include telemetry from day one.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Crash & performance monitoring: Sentry / Firebase Crashlytics.</li>
              <li>Automated E2E: Detox / Appium / Cypress (for web views).</li>
              <li>Product analytics: Mixpanel / Firebase Analytics for funnel and retention analysis.</li>
            </ul>
          </article>

          {/* SECURITY */}
          <article className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">Security & Privacy</h4>
            <p className="text-gray-700 mb-3">
              Mobile apps require special attention to secure storage, network, and third-party libraries.
              We follow security best practices across the app lifecycle.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Secure storage: Keychain / Keystore and encrypted local DBs.</li>
              <li>Minimize sensitive data, use short-lived tokens and refresh flows.</li>
              <li>Dependency scanning, pen tests and app hardening (obfuscation & tamper checks).</li>
            </ul>
          </article>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <motion.div
          id="process"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">Delivery process (practical)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "Discovery",
                desc: "Requirements, user journeys, technical feasibility & KPIs.",
              },
              {
                step: "Design",
                desc: "Prototypes, interaction specs and accessibility reviews.",
              },
              {
                step: "Build",
                desc: "Sprint-based development, component library and tests.",
              },
              {
                step: "Operate",
                desc: "Monitoring, support SLAs and iterative improvements.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <h4 className="font-semibold mb-2">{p.step}</h4>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to ship world-class mobile apps?</h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Share your app idea, user segments and timelines — we’ll propose a technical plan,
            timeline and a phased delivery approach.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transform transition"
            >
              Request a Proposal
            </a>
            <a
              href="/portfolio"
              className="inline-block border border-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              View Mobile Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
