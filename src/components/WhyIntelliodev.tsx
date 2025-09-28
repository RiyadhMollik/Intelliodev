import ThreeServicesBackground from './ThreeServicesBackground';

const WhyIntelliodev = () => {
  const advantages = [
    {
      title: "What it is",
      description: "Intelliodev is an end-to-end AI development partner. We design, build, and deploy production-grade artificial intelligence solutions that integrate seamlessly into your existing workflows."
    },
    {
      title: "Who it's for",
      description: "We serve forward-thinking enterprises in healthcare, education, and business operations who are ready to harness the power of AI to gain a competitive edge."
    },
    {
      title: "Why it matters",
      description: "Automation isn't a luxury; it's a necessity. We build tools that automate complex processes, unlock critical insights, and empower your teams to focus on strategic growth."
    },
    {
      title: "Tech Stack",
      description: "Our solutions are built on state-of-the-art agent frameworks and ML models, integrating with AWS, GCP, and Azure for a secure, scalable, and future-proof architecture."
    }
  ];

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="why-intellicodev">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter">
            The Intelliodev Advantage
          </h2>
          <p className="text-lg text-indigo-200 mt-2 max-w-2xl mx-auto">
            Built for enterprise trust, performance, and scale.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 
                       hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300 
                       will-change-transform hover:-translate-y-1">
              {/* glow ring */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur transition" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-indigo-200/80 leading-relaxed">{advantage.description}</p>
                <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyIntelliodev;
