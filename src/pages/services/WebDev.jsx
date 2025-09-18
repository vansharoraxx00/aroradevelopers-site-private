import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaLock, FaCloud } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiAwsamplify,
  SiKubernetes,
  SiTypescript,
  SiJest,
  SiCypress,
} from "react-icons/si";

export default function WebDev() {
  // small motion variants
  const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
            Enterprise Web Development
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end web application design & development — modern, scalable,
            and secure. We build production-grade apps using React/Next, Node.js,
            cloud-native infra and CI/CD — optimized for performance, reliability
            and developer velocity.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:shadow-lg transition"
            >
              Talk to our Engineers
            </a>
            <a
              href="#approach"
              className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Our Approach
            </a>
          </div>
        </motion.header>

        {/* QUICK DELIVERABLES */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">What we deliver</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Production-ready SPA / SSR apps (React / Next.js)</li>
              <li>Scalable APIs (Node.js + TypeScript, REST / GraphQL)</li>
              <li>Cloud-native deployments (AWS / GCP / Azure)</li>
              <li>CI/CD pipelines, infra as code, containerization</li>
              <li>End-to-end automated tests & observability</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">When to choose this</h3>
            <p className="text-gray-700">
              Projects needing robust performance, multi-region scaling,
              compliance (PCI/GDPR/HIPAA), or long-term maintainability by a
              distributed engineering team.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              We partner from discovery → design → build → operate.
            </p>
          </div>
        </motion.div>

        {/* TECH STACK BADGES */}
        <motion.div
          id="tech"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Core technologies</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <FaReact size={28} />, name: "React / Next.js" },
              { icon: <SiTypescript size={24} />, name: "TypeScript" },
              { icon: <FaNodeJs size={24} />, name: "Node.js" },
              { icon: <SiGraphql size={24} />, name: "GraphQL" },
              { icon: <SiTailwindcss size={24} />, name: "TailwindCSS" },
              { icon: <SiMongodb size={24} />, name: "MongoDB" },
              { icon: <SiPostgresql size={24} />, name: "Postgres" },
              { icon: <SiAwsamplify size={24} />, name: "AWS" },
              { icon: <FaDocker size={24} />, name: "Docker" },
              { icon: <SiKubernetes size={24} />, name: "Kubernetes" },
              { icon: <SiJest size={24} />, name: "Jest" },
              { icon: <SiCypress size={24} />, name: "Cypress" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-2 shadow-sm"
              >
                <div className="text-blue-600">{t.icon}</div>
                <div className="text-sm font-medium">{t.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DETAILED TECHNICAL APPROACH */}
        <motion.div
          id="approach"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid gap-8"
        >
          <h3 className="text-2xl font-bold">Technical approach — deep dive</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FRONTEND */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Frontend (UX → Implementation)</h4>
              <p className="text-gray-700 mb-3">
                Pixel-perfect UIs built with React + Next.js (SSG/SSR where needed).
                We structure components for reusability (atomic/component pattern),
                prioritize accessibility (WCAG A/AA), and optimize first-load using
                code-splitting and server-side rendering when SEO or TTFB matters.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Design tokens & Tailwind for consistent theme</li>
                <li>Component library (Storybook) for rapid dev & docs</li>
                <li>Image optimization, lazy loading, content caching</li>
              </ul>
            </article>

            {/* BACKEND & APIS */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Backend & APIs</h4>
              <p className="text-gray-700 mb-3">
                APIs in Node.js + TypeScript with strict typing. We favor a layered
                architecture (controllers → services → repositories) and use GraphQL
                where clients need tailored queries or REST for simple endpoints.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Authentication: OAuth2 / JWT with refresh token rotation</li>
                <li>Rate limiting, input validation, and structured logging</li>
                <li>API versioning and contract testing</li>
              </ul>
            </article>

            {/* DATABASES */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Data & Storage</h4>
              <p className="text-gray-700 mb-3">
                We choose relational (Postgres) for ACID needs and document (MongoDB)
                for flexible schemas. Data modeling focuses on query patterns and
                scalability (read replicas, sharding if required).
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Backups, point-in-time recovery and cross-region replication</li>
                <li>Schema migrations with tools (Flyway / Liquibase / Prisma)</li>
              </ul>
            </article>

            {/* CLOUD, INFRA & SCALING */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Cloud & Infra</h4>
              <p className="text-gray-700 mb-3">
                Cloud-first infra (AWS/GCP/Azure). Containers + orchestration (K8s)
                or managed serverless (Lambda, Fargate) depending on cost/perf needs.
                Infrastructure as Code (Terraform) for reproducibility.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Auto-scaling groups, CDN (CloudFront), edge caching</li>
                <li>IaC, automated environment provisioning (dev/stage/prod)</li>
              </ul>
            </article>

            {/* DEVOPS & CI/CD */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">CI / CD & Observability</h4>
              <p className="text-gray-700 mb-3">
                Fully automated pipelines for build → test → deploy. Blue/green or
                Canary deployments for zero-downtime releases. End-to-end monitoring
                and alerting for reliability.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>CI: GitHub Actions / GitLab CI with parallelized tests</li>
                <li>Monitoring: Prometheus / Grafana, distributed traces (Jaeger / Zipkin)</li>
                <li>Logging: centralized ELK / Loki stacks</li>
              </ul>
            </article>

            {/* SECURITY & COMPLIANCE */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Security & Compliance</h4>
              <p className="text-gray-700 mb-3">
                Security by design — threat modeling, secure defaults, encryption-in-transit
                and at-rest, regular pen-tests and dependency scanning.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>WAF, DDoS protection, and secure network architecture</li>
                <li>Secrets management (HashiCorp Vault / AWS Secrets Manager)</li>
                <li>Compliance readiness: GDPR, PCI-DSS, HIPAA (as required)</li>
              </ul>
            </article>

            {/* QA & TESTING */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Testing & QA</h4>
              <p className="text-gray-700 mb-3">
                Multi-layered testing strategy: unit, integration, contract, E2E.
                Test automation reduces regression risk and speeds releases.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Unit tests: Jest + React Testing Library</li>
                <li>E2E: Cypress with stable test data and parallel runs</li>
                <li>Performance tests & load testing when needed</li>
              </ul>
            </article>

            {/* PERFORMANCE & SEO */}
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Performance & SEO</h4>
              <p className="text-gray-700 mb-3">
                We optimize TTI/TTFB, use incremental static regeneration, and apply
                best practices for Core Web Vitals. SEO is built-in (structured data,
                semantic markup).
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Critical CSS, preloading important assets</li>
                <li>Image formats: AVIF/WebP, adaptive images</li>
                <li>Accessibility audits and remediation</li>
              </ul>
            </article>
          </div>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">Delivery process</h3>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                title: "Discover",
                desc: "Workshops, goals, KPIs, user research & feasibility.",
              },
              {
                title: "Design",
                desc: "Wireframes, prototypes, design system & accessibility.",
              },
              {
                title: "Build",
                desc: "Iterative sprints, code reviews, automated tests.",
              },
              {
                title: "Operate",
                desc: "Monitoring, support SLAs, continuous improvements.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition"
              >
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-3">
                  {i + 1}
                </div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to build?</h3>
          <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
            Tell us about your product idea, timeline and challenges — we’ll propose
            an actionable plan and a realistic estimate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg shadow hover:scale-[1.02] transform transition"
          >
            Get a Proposal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
