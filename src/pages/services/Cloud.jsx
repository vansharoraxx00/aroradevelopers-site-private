export default function Cloud() {
  return (
    <section className="min-h-screen px-8 py-20 bg-white">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Cloud Solutions</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl">
        Our cloud experts design and deploy **secure, cost-effective cloud solutions** tailored to your business. 
        From migration to optimization, we ensure your systems are reliable and scalable.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-3 max-w-4xl">
        <li>Cloud migration (AWS, Azure, GCP)</li>
        <li>DevOps and CI/CD automation</li>
        <li>Serverless architectures with AWS Lambda & Azure Functions</li>
        <li>Data backup and disaster recovery</li>
        <li>Monitoring and cost optimization</li>
      </ul>
    </section>
  );
}
