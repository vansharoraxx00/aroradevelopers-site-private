import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        <Link to="/services/web-development" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block">
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-600">Modern, responsive web apps with scalable architecture.</p>
        </Link>
        <Link to="/services/mobile-apps" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block">
          <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
          <p className="text-gray-600">Cross-platform apps built for performance and usability.</p>
        </Link>
        <Link to="/services/cloud" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block">
          <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
          <p className="text-gray-600">Reliable, secure, and cost-efficient cloud deployments.</p>
        </Link>
        <Link to="/services/ai-ml" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block">
          <h3 className="text-xl font-semibold mb-3">AI & ML</h3>
          <p className="text-gray-600">Intelligent systems powered by machine learning & AI.</p>
        </Link>
      </div>
    </section>
  );
}
