import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiDocker,
  SiFlutter,
  SiTensorflow,
  SiMongodb,
  SiAwsamplify,
} from "react-icons/si";
import {
  FaAward,
  FaBriefcase,
  FaHandshake,
  FaClock,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

/* ================= POPUP ================= */
function IntroPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("introShown");
    if (!shown) {
      setOpen(true);
      sessionStorage.setItem("introShown", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center relative"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Arora Developers
        </h2>

        <p className="uppercase tracking-widest text-indigo-600 text-sm mb-6">
          Website Created By
        </p>

        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>

        <p className="text-lg font-semibold text-gray-800">
          Owner: <span className="text-indigo-600">Vansh Arora</span>
        </p>

        <p className="text-gray-600 mb-6">
          Co-Owner / Managing Partner:{" "}
          <span className="font-medium text-gray-800">Raghav Arora</span>
        </p>

        <p className="text-gray-500 italic text-sm">
          “Where Code Meets Innovation”
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          Enter Website
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const techs = [
    { icon: <SiReact className="text-sky-500" />, name: "React", desc: "Modern frontend UI library." },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js", desc: "Scalable backend solutions." },
    { icon: <SiPython className="text-yellow-500" />, name: "Python", desc: "AI & automation." },
    { icon: <SiOpenjdk className="text-red-500" />, name: "Java", desc: "Enterprise solutions." },
    { icon: <SiDocker className="text-blue-500" />, name: "Docker", desc: "Containerized deployment." },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter", desc: "Cross-platform apps." },
    { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow", desc: "AI & ML models." },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", desc: "NoSQL database." },
    { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js", desc: "SEO-friendly React apps." },
    { icon: <SiAwsamplify className="text-orange-400" />, name: "AWS", desc: "Cloud infrastructure." },
  ];

  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  ];

  const blog = [
    { title: "Top 5 AI Trends in 2025", desc: "How AI is reshaping industries." },
    { title: "Cloud Migration Best Practices", desc: "Move to cloud smoothly." },
    { title: "Why Custom Software Wins", desc: "Tailored solutions outperform." },
  ];

  return (
    <>
      <IntroPopup />

      <div className="pt-20 font-sans text-gray-800">
        {/* HERO */}
        <section className="text-center py-28 bg-gradient-to-r from-indigo-50 via-white to-pink-50">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6"
          >
            Transforming Ideas <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Into Digital Reality 🚀
            </span>
          </motion.h1>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-6">About Arora Developers</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We build scalable, secure and future-ready software solutions.
          </p>
        </section>

        {/* STATS */}
        <section className="py-20 bg-indigo-600 text-white text-center grid grid-cols-2 md:grid-cols-4 gap-8">
          {[["20+", "Years"], ["226+", "Projects"], ["122+", "Clients"], ["10+", "Awards"]].map(
            ([v, l], i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold">{v}</h3>
                <p>{l}</p>
              </div>
            )
          )}
        </section>

        {/* TECH */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-12">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {techs.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-5xl mb-3">{t.icon}</div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-4xl font-bold mb-10">Our Clients</h2>
          <div className="flex justify-center gap-10 flex-wrap">
            {clients.map((c, i) => (
              <img key={i} src={c.logo} alt={c.name} className="h-10" />
            ))}
          </div>
        </section>

        {/* BLOG */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-10">Blog</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blog.map((b, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-indigo-600 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-indigo-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build With Arora Developers?
          </h2>
          <p className="mb-8">Let’s build something amazing together.</p>
        </section>
      </div>
    </>
  );
}
