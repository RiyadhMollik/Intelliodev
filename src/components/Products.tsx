import ThreeServicesBackground from './ThreeServicesBackground';

const Products = () => {
  const products = [
    {
      title: "Hospital Agent System",
      status: "Live",
      statusColor: "bg-green-100 text-green-800",
      description: "An intelligent hospital assistant that handles patient interactions across multiple channels (WhatsApp, phone calls, web chat) with real-time appointment booking. Features voice integration for natural phone conversations, smart doctor recommendations based on symptoms, and prevents double-booking across all platforms.",
      technologies: "Python, OpenAI GPT, ElevenLabs, Whisper, FastAPI, React"
    },
    {
      title: "AI Sales Agent System",
      status: "Live",
      statusColor: "bg-green-100 text-green-800",
      description: "A comprehensive AI-powered sales automation platform using multiple specialized agents for lead qualification, outreach, and follow-up. Features intelligent lead scoring, automated email generation, and real-time prospect research with RAG system for personalized messaging.",
      technologies: "Python, OpenAI GPT-4, RAG (ChromaDB), Google Sheets API, SendGrid"
    },
    {
      title: "Smart E-Commerce Solution",
      status: "Live",
      statusColor: "bg-green-100 text-green-800",
      description: "An AI-enhanced e-commerce platform that provides intelligent product recommendations, automated customer support, and predictive inventory management. Features personalized shopping experiences, chatbot integration, and customer behavior analysis.",
      technologies: "JavaScript, AI-powered features"
    }
  ];

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="products">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Our Latest AI Products</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          Innovative, enterprise-ready solutions ready for deployment.
        </p>
      </div>
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 
                       hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300 
                       will-change-transform hover:-translate-y-1"
            style={{ perspective: '800px' }}
          >
            {/* glow ring */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur transition" />
            <div className="relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{product.title}</h3>
                <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full border border-green-500/30">
                  {product.status}
                </span>
              </div>
              <p className="text-indigo-200/80 text-sm mb-4">{product.description}</p>
              <div className="text-xs text-indigo-300/60 mb-4">
                <span className="font-semibold">Technologies:</span> {product.technologies}
              </div>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
