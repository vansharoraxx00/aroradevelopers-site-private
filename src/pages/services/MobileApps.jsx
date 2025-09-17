export default function MobileApps() {
  return (
    <section className="min-h-screen px-8 py-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Mobile Application Development</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl">
        We design and develop **cross-platform mobile apps** that deliver fast performance, smooth UI, 
        and seamless integration with cloud services. Whether Android or iOS, our apps are built with scalability in mind.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-3 max-w-4xl">
        <li>Cross-platform development with React Native & Flutter</li>
        <li>Native features integration (camera, GPS, push notifications)</li>
        <li>Cloud integration (Firebase, AWS Amplify)</li>
        <li>Offline-first architecture for reliability</li>
        <li>Performance optimization & app store deployment</li>
      </ul>
    </section>
  );
}
