import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      title: "SaaS Platform",
      desc: "Custom SaaS products tailored for your business growth.",
      link: "/products/saas",
    },
    {
      title: "ERP Tool",
      desc: "Integrated ERP solutions to streamline operations.",
      link: "/products/erp",
    },
    {
      title: "Analytics Dashboard",
      desc: "Data-driven insights for smarter decision-making.",
      link: "/products/analytics",
    },
    {
      title: "E-Commerce Platform",
      desc: "Scalable e-commerce solutions with modern UI/UX and payments.",
      link: "/products/ecommerce",
    },
    {
      title: "HR Management",
      desc: "Complete HR management system for businesses.",
      link: "/products/hrm",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {products.map((p, i) => (
          <Link
            to={p.link}
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
          >
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
