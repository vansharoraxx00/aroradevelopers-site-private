import React from "react";

export default function SaaS() {
  const features = [
    {
      icon: "☁️",
      title: "Cloud-Native Architecture",
      desc: "Built for reliability, performance, and global accessibility with 99.99% uptime.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Integrated with trusted gateways to ensure safe and seamless transactions.",
    },
    {
      icon: "🤖",
      title: "AI-Driven Automation",
      desc: "Streamline workflows and eliminate repetitive tasks with smart automation.",
    },
    {
      icon: "📈",
      title: "Scalable Subscriptions",
      desc: "Easily manage users, billing cycles, and pricing plans as your business grows.",
    },
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$29/mo",
      features: ["Basic analytics", "Up to 100 users", "Email support"],
    },
    {
      plan: "Pro",
      price: "$79/mo",
      features: ["Advanced analytics", "Up to 1,000 users", "Priority support"],
    },
    {
      plan: "Enterprise",
      price: "Custom",
      features: ["Unlimited users", "Dedicated manager", "24/7 phone support"],
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "CTO, Fintech Corp",
      text: "This SaaS solution completely transformed our workflow. We saved 30% in costs within months!",
    },
    {
      name: "Emily Johnson",
      role: "Founder, EduTech Hub",
      text: "The automation features are a game-changer. My team is more productive than ever.",
    },
    {
      name: "Rajesh Patel",
      role: "CEO, RetailX",
      text: "Scalable, secure, and easy to use. It grows with our business effortlessly.",
    },
  ];

  const faqs = [
    {
      q: "Is there a free trial available?",
      a: "Yes! We offer a 14-day free trial with no credit card required.",
    },
    {
      q: "Can I change my plan later?",
      a: "Absolutely, you can upgrade or downgrade anytime from your dashboard.",
    },
    {
      q: "Is customer support available?",
      a: "Yes, our support team is available 24/7 via chat and email.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-indigo-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 leading-tight">
          Power Your Business with Modern SaaS Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          From subscription management to AI automation, we help you scale faster,
          cut costs, and stay ahead of the competition. Our SaaS platforms are
          designed with flexibility and security in mind.
        </p>
        <a
          href="#pricing"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Get Started Today
        </a>
      </div>

      {/* About Section */}
      <div className="mt-24 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600">
          We specialize in building SaaS products tailored for startups, enterprises,
          and everything in between. With our cloud-first approach, your business is
          always ready for the future.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Flexible Pricing for Every Business
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.plan}</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-6">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-24 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-semibold text-indigo-700">{faq.q}</h4>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-24 bg-indigo-700 text-white py-12 px-6 text-center rounded-3xl max-w-5xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-6">
          Join hundreds of companies that trust our SaaS platforms to innovate,
          scale, and succeed in today’s fast-paced digital world.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Request a Demo
        </a>
      </div>
    </div>
  );
}