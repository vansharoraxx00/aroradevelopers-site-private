import { motion } from "framer-motion";

export default function About() {
  const leaders = [
    { name: "Sourabh Jasuja", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg", linkedin: "#" },
    { name: "Vansh Arora", role: "CTO", img: "https://randomuser.me/api/portraits/men/32.jpg", linkedin: "#" },
    { name: "Raghav Arora", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/65.jpg", linkedin: "#" },
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
      <p className="max-w-3xl text-gray-600 text-center text-lg mx-auto mb-16">
        At Novetech, we are passionate about transforming ideas into impactful digital solutions. 
        Our mission is to deliver cutting-edge technology with a focus on scalability, security, 
        and AI-driven innovation.
      </p>

      {/* Leadership Section */}
      <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Our Leaders</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {leaders.map((leader, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <img src={leader.img} alt={leader.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
            <h4 className="text-xl font-semibold">{leader.name}</h4>
            <p className="text-gray-500">{leader.role}</p>
            <a href={leader.linkedin} className="text-blue-600 hover:underline mt-2 inline-block">LinkedIn</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
