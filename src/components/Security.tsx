import ThreeServicesBackground from './ThreeServicesBackground';

const Security = () => {
  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="security">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 rounded-full p-4 border border-blue-500/30">
            <span className="material-symbols-outlined text-blue-400 text-4xl">security</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Enterprise-Grade Security & Compliance
        </h2>
        <p className="mt-4 text-lg text-indigo-200 leading-relaxed">
          At Intelliodev, data privacy and system reliability are foundational. We employ state-of-the-art
          encryption, rigorous access controls, and continuous monitoring to protect your sensitive
          information. Our practices are aligned with leading industry standards like SOC 2, HIPAA, and GDPR
          to meet the stringent compliance requirements of enterprise AI.
        </p>
      </div>
    </section>
  );
};

export default Security;
