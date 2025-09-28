import ThreeServicesBackground from './ThreeServicesBackground'
const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Anya Sharma",
      position: "Chief Medical Officer, InnovateHealth",
      testimonial: "Intelliodev's AI transformed our diagnostic process, improving accuracy by 25%. Their team is world-class."
    },
    {
      name: "Mark Chen",
      position: "COO, Quantum Corp",
      testimonial: "The business automation solution cut our operational overhead by 40%, freeing up our team for high-value work."
    }
  ]

  const stats = [
    { value: "40%", label: "Avg. reduction in ops costs" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24h", label: "Time to PoC" }
  ]

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="testimonials">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 
                         hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300 
                         will-change-transform hover:-translate-y-1">
                {/* glow ring */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur transition" />
                <div className="relative">
                  <p className="text-lg text-indigo-200">"{testimonial.testimonial}"</p>
                  <footer className="mt-6">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-indigo-300 text-sm">{testimonial.position}</p>
                  </footer>
                  <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-70" />
                </div>
              </blockquote>
            ))}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Results That Matter.
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              We deliver tangible, measurable impact for our clients.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 
                           hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/15 transition-all duration-300 
                           will-change-transform hover:-translate-y-1">
                  {/* glow ring */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur transition" />
                  <div className="relative">
                    <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">{stat.value}</p>
                    <p className="mt-2 text-indigo-200">{stat.label}</p>
                    <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent opacity-70" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials