// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Blog() {
  // FAQ toggle state
  const [openFaq, setOpenFaq] = useState(null);

  // SEO: document title + meta description
  useEffect(() => {
    document.title = "What Is an ERP System? Complete Guide for Modern Businesses";
    const meta = document.querySelector("meta[name='description']");
    const desc =
      "Discover how ERP systems unify operations, boost productivity, and cut costs. Learn why integrated ERP software is essential for modern businesses.";
    if (meta) {
      meta.setAttribute("content", desc);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    // clean-up not required
  }, []);

  // JSON-LD schema (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is an ERP System and Why Every Business Needs One",
    "description": "Discover how ERP systems unify operations, boost productivity, and cut costs. Learn why integrated ERP software is essential for modern businesses.",
    "url": "https://yourdomain.com/what-is-an-erp-system-and-why-every-business-needs-one",
    "author": {
      "@type": "Organization",
      "name": "Softprogrammer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Softprogrammer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/path-to-logo.png"
      }
    },
    "datePublished": (new Date()).toISOString().split("T")[0]
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-12 px-6 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              🧭 What Is an ERP System and Why Every Business Needs One
            </h1>


            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
              >
                Book a Free Consultation <FaChevronRight />
              </Link>

              <Link
                to="/products/erp"
                className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition"
              >
                See ERP Product
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
               <p className="mt-4 text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
              Discover how ERP systems unify operations, boost productivity, and cut costs. Learn why integrated ERP software is essential for modern businesses.
            </p>
              <br />
                          </div>
          </motion.div>
        </section>

        {/* Article content */}
        <article className="max-w-4xl mx-auto px-6 md:px-0 pb-24">
          {/* Intro */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-xl prose-indigo mx-auto"
          >
            <h2>🏢 The Hidden Power Behind Streamlined Companies</h2>
            <p>
              If your business is juggling spreadsheets, disconnected apps, or endless data entry — you’re not alone.
              Many growing companies reach a point where manual processes start holding them back. That’s where ERP systems come in.
            </p>

            <p>
              ERP (Enterprise Resource Planning) isn’t just a buzzword; it’s the digital backbone that keeps every department — from accounting to HR to inventory — connected, accurate, and fast.
              At <strong className="text-indigo-600">Softprogrammer</strong>, we build fully integrated ERP solutions that eliminate inefficiencies and help businesses scale effortlessly.
            </p>
          </motion.section>

          {/* What is ERP */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">💡 What Is an ERP System?</h2>
            <p className="text-gray-700 leading-relaxed">
              An ERP system is an all-in-one software platform that unifies a company’s core operations — including accounting, inventory, human resources, customer management, and more — into one connected system.
            </p>

            <p className="mt-3 text-gray-700">
              Instead of managing each department through separate tools, ERP software gives your business a single source of truth, allowing every team to work from the same real-time data.
            </p>

            <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-2">
              <li>Finance and Accounting</li>
              <li>
                Human Resources (<Link to="/products/hrm" className="text-indigo-600 hover:underline">HRIS</Link>)
              </li>
              <li>
                Customer Relationship Management (<Link to="/software/crm" className="text-indigo-600 hover:underline">CRM</Link>) {/* internal link suggestion */}
              </li>
              <li>Supply Chain and Inventory Management</li>
              <li>Time Tracking and Payroll</li>
              <li>Reporting and Analytics</li>
            </ul>
          </motion.section>

          {/* ERP Integration */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">⚙️ How ERP Integration Transforms Daily Operations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Automation:</strong> Reduce manual work by syncing invoices, payments, and time logs automatically.</li>
                <li><strong>Visibility:</strong> Gain real-time insights into performance, budgets, and resources.</li>
                <li><strong>Productivity:</strong> Free up your team to focus on strategy — not spreadsheets.</li>
              </ul>

              <ul className="space-y-3 text-gray-700">
                <li><strong>Accuracy:</strong> Prevent costly mistakes caused by duplicate or outdated data.</li>
                <li><strong>Scalability:</strong> Add new users, departments, or modules as your business grows.</li>
                <li className="text-sm text-gray-500">At Softprogrammer, we take this further with custom-built ERP solutions that integrate with your existing CRM, HRIS, and payroll environments.</li>
              </ul>
            </div>

            <p className="mt-4 text-gray-700">
              <em>Internal link suggestion:</em> Link “Accounting software” to your <Link to="/integrations" className="text-indigo-600 hover:underline">integrations</Link> page or an article about Accounting Software.
            </p>
          </motion.section>

          {/* Real-World Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">📈 Real-World Benefits for Businesses</h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-3">
              <li><strong>Financial Control:</strong> Unified ledgers and live dashboards improve decision-making.</li>
              <li><strong>Customer Experience:</strong> CRM and ERP integration ensures your sales, support, and operations teams share the same customer insights.</li>
              <li><strong>Compliance & Security:</strong> Centralized systems simplify audits and protect sensitive data.</li>
              <li><strong>Remote Access:</strong> Cloud-based ERP gives your team flexibility — work from anywhere, anytime.</li>
            </ul>
          </motion.section>

          {/* ERP vs Multiple Tools (visual list) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">🔄 ERP vs. Multiple Tools: The Efficiency Advantage</h2>

            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Without ERP</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Multiple logins and subscriptions</li>
                    <li>Data silos and repeated entry</li>
                    <li>Delayed reporting</li>
                    <li>Complicated workflows</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">With ERP</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>One unified dashboard</li>
                    <li>Real-time, synced information</li>
                    <li>Instant analytics</li>
                    <li>Streamlined automation</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-gray-700">
                Your ERP system doesn’t replace your tools — it connects them. Imagine your payroll software, your HR platform, and your CRM all working as one seamless machine.
              </p>
            </div>
          </motion.section>

          {/* Why every business needs ERP */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">🧠 Why Every Business Needs ERP — Sooner, Not Later</h2>

            <p className="text-gray-700 leading-relaxed">
              Whether you run a small office or a nationwide enterprise, inefficiency costs money. An ERP system ensures that your operations stay lean, your decisions data-driven, and your growth scalable.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
              <li>Faster report generation</li>
              <li>Improvement in productivity</li>
              <li>Significant ROI within the first year</li>
            </ul>
          </motion.section>

          {/* How We Can Help */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">🛠️ How We Can Help</h2>

            <p className="text-gray-700">
              At <strong className="text-indigo-600">Softprogrammer</strong>, we specialize in fully integrated, cloud-based ERP systems designed to grow with your business. From CRM and HRIS integration to custom automation workflows, we’ll build your system around how you work — not the other way around.
            </p>

            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="bg-white p-4 rounded border border-gray-100">
                ✅ <strong>Custom Integrations</strong> (Payroll, CRM, HRIS) — <Link to="/services/integrations" className="text-indigo-600 hover:underline">See integrations</Link>
              </li>
              <li className="bg-white p-4 rounded border border-gray-100">
                ✅ <strong>Industry-Specific Modules</strong>
              </li>
              <li className="bg-white p-4 rounded border border-gray-100">
                ✅ <strong>Secure Cloud Hosting</strong>
              </li>
              <li className="bg-white p-4 rounded border border-gray-100">
                ✅ <strong>Dedicated Support</strong>
              </li>
            </ul>

            <p className="mt-4 text-gray-700">
              <em>Internal link suggestion:</em> Link “Custom Integrations” to your <Link to="/services/custom-integrations" className="text-indigo-600 hover:underline">custom software / integrations</Link> page.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="mt-12 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">📞 Ready to Simplify Your Operations?</h3>
            <p className="text-gray-700 mb-4">
              Let’s build a smarter system together. Book your free consultation or see our ERP demo — no obligation, just clarity on how ERP can transform your workflow.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
                Book Your Free Consultation <FaChevronRight />
              </Link>

              <Link to="/products/erp" className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-50 transition">
                See ERP Demo
              </Link>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">❓ Frequently Asked Questions About ERP Systems</h3>

            <div className="space-y-3">
              {[
                {
                  q: "What does ERP stand for and what does it do?",
                  a:
                    "ERP stands for Enterprise Resource Planning. It’s a unified system that connects all key areas of your business — such as accounting, HR, inventory, and customer management — into one software solution. By sharing data across departments, ERP eliminates repetitive tasks, improves reporting accuracy, and allows business owners to make faster, smarter decisions.",
                },
                {
                  q: "How is ERP different from CRM?",
                  a:
                    "An ERP system manages your internal operations — things like finance, payroll, HR, inventory, and logistics — while a CRM system focuses on external relationships, such as sales leads and customer service. The real magic happens when the two are integrated: your sales team sees accurate billing data, HR syncs with project tracking, and management gains full visibility from one dashboard.",
                },
                {
                  q: "What size business needs an ERP system?",
                  a:
                    "ERP isn’t just for big corporations anymore — modern cloud-based ERP solutions are scalable and affordable for small and mid-sized businesses. If you’re using multiple disconnected tools, spending too much time reconciling data, or struggling to track operations, it’s time to consider an ERP solution that grows with your company.",
                },
                {
                  q: "How long does it take to implement an ERP system?",
                  a:
                    "Implementation depends on your company’s size and complexity. Small businesses can often deploy a cloud ERP in 4–8 weeks, while enterprise-level systems may take a few months to fully customize and test. At Softprogrammer, we handle everything — from setup to staff training — so you can start seeing results as quickly as possible.",
                },
                {
                  q: "Can an ERP system integrate with my existing software?",
                  a:
                    "Yes! Our ERP solutions are fully integratable with tools like accounting software, HRIS, CRM, Payroll, and more. You don’t need to replace your current systems — just connect them. This flexibility keeps your workflows familiar while adding automation, analytics, and real-time collaboration.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-4"
                  >
                    <span className="font-medium text-gray-800">{faq.q}</span>
                    <span className="text-indigo-600">{openFaq === idx ? "−" : "+"}</span>
                  </button>

                  <motion.div
                    animate={{ height: openFaq === idx ? "auto" : 0, opacity: openFaq === idx ? 1 : 0 }}
                    transition={{ duration: 0.32 }}
                    className="px-4 overflow-hidden"
                  >
                    {openFaq === idx && <div className="pb-4 text-gray-700">{faq.a}</div>}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>
        </article>
      </main>
    </>
  );
}
