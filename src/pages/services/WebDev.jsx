export default function WebDev() {
  return (
    <section className="min-h-screen px-8 py-20 bg-white">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Web Development</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl">
        Our web development services cover everything from frontend to backend, ensuring scalable, secure, 
        and modern solutions. We specialize in building **enterprise-grade web applications** using React, Node.js, 
        and cloud infrastructure.  
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-3 max-w-4xl">
        <li>Responsive frontend development with React, Next.js, TailwindCSS</li>
        <li>Backend APIs with Node.js, Express, and GraphQL</li>
        <li>Database solutions: MongoDB, PostgreSQL, MySQL</li>
        <li>Scalable hosting with AWS, Azure, and Google Cloud</li>
        <li>CI/CD pipelines for continuous deployment</li>
        <li>Security best practices: JWT auth, OAuth2, and encryption</li>
      </ul>
    </section>
  );
}
