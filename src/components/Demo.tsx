import ThreeServicesBackground from './ThreeServicesBackground';

const Demo = () => {
  const features = [
    "We'll tailor the demonstration directly to your use-case and business goals.",
    "Discuss secure data handling and our robust privacy-first architecture.",
    "Receive clear, transparent pricing guidance with no hidden costs."
  ];

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="demo">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Book a Live Demo</h2>
            <p className="mt-4 text-lg text-indigo-200">
              "A 20-minute demo tailored to your business goals, including Q&A and transparent pricing guidance."
            </p>
            <ul className="mt-8 space-y-4 text-indigo-200">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="material-symbols-outlined text-blue-400 mr-3">task_alt</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl shadow-2xl border border-white/20">
            <div className="h-96 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
              <p className="text-indigo-200">[Embedded Scheduler Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
