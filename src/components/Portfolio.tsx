import ThreeServicesBackground from './ThreeServicesBackground';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const Portfolio = () => {
  const projects = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKkVMPU1KZ-fgaw9UZUjkLOF3dl57nPrBJuedDAbCkgmLyK2G6l4WgRYA5HH5vvn_7jBZGMVK019TZkYQQrBrzpMDy-AvKS8eSDY57yZZn44j5FPaYMxkcfoERBe7Y6dR3JEvaDymm6cJ2cqCqXA08_xnH3yzavHYcHmFnjdaUfQwhvwhQsoHrdU0Ug72oe_U3R4mA3c_Q1cqQuB-6iNfE7Tl5Hvgcs64tmJ2nBQ__tOb7u7zZbVOAK02Y0KwTxobwwi4TEjDYkk",
      title: "Hospital Agent System",
      description: "An intelligent hospital assistant that handles patient interactions across multiple channels (WhatsApp, phone calls, web chat) with real-time appointment booking. Features voice integration for natural phone conversations, smart doctor recommendations based on symptoms, and prevents double-booking across all platforms.",
      technologies: "Python, OpenAI GPT, ElevenLabs, Whisper, FastAPI, React",
      type: "Healthcare AI Assistant"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y1AYEaWKjLPQk0uO1m-49DESxX-WoevrHIeIBTXzPK1kuhtWQagrZnGU6bzSSYZKzVSQNHFH6DFKxkmzxEjX_M3XN9_H2a8Zfb1YST2x9KRY4lLbj48IdZur4L8bZxcVo6UTPxjXZlkwBJiA0twgopnblfcgcjhcicoPK70nWQ0SXNkn64A49YCJ2ZhlK7vJrlKcxtODiECK9aw22JMhde1BHU0aK2LU7Yg2XcBUxhxYKWpa93cEhNQnxf1FBz7mBhg8ncTDRBg",
      title: "AI Sales Agent System",
      description: "A comprehensive AI-powered sales automation platform using multiple specialized agents for lead qualification, outreach, and follow-up. Features intelligent lead scoring, automated email generation, and real-time prospect research with RAG system for personalized messaging.",
      technologies: "Python, OpenAI GPT-4, RAG (ChromaDB), Google Sheets API, SendGrid",
      type: "Sales Automation Platform"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dXu76EjwWS9dmsXRMRcuQRBdXpFrC-fq0HonB8r9isYD92RjUKvTOBYmwBmQ24gC1FwdSf5bTvLZ3LXNyTics23Vsr5yh8-sFvvwlsn3mEllKhC8zAZpns0TBFx3Nkv-lsOKydDgg-nd2xWod-OXxQgSYa8SrLwe075zeBJgnrLYB6YgmXBEQ8J_Yve9LcNOiJmg3Z4JiKGO_EH-BjZntNpc3-X2IWRjB39wM8ZR_UixBXAytRgxu8C4dqPCendfvSfp4925S2g",
      title: "Smart E-Commerce Solution",
      description: "An AI-enhanced e-commerce platform that provides intelligent product recommendations, automated customer support, and predictive inventory management. Features personalized shopping experiences, chatbot integration, and customer behavior analysis.",
      technologies: "JavaScript, AI-powered features",
      type: "E-commerce Intelligence"
    }
  ];

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="portfolio">
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 " />
      </div>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Our Portfolio</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          See our innovative solutions in action. Here&apos;s a glimpse of what we&apos;ve built.
        </p>
      </div>
      <div className="relative z-10">
        <ScrollStack useWindowScroll>
          {projects.map((project, index) => (
            <ScrollStackItem key={index}>
              <div className="group flex flex-col rounded-2xl overflow-hidden border border-[#323267] bg-[#191933] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                <div
                  className="w-full h-56 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-indigo-400 bg-indigo-500/20 px-2 py-1 rounded-full border border-indigo-500/30">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-[#9292c9] text-sm mt-2 mb-3">{project.description}</p>
                  <div className="text-xs text-indigo-300/60">
                    <span className="font-semibold">Technologies:</span> {project.technologies}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Portfolio;