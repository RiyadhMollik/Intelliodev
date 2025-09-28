import ThreeServicesBackground from './ThreeServicesBackground'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 py-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* <img 
          alt="Abstract AI background" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWtYiN7cerDvhUcgQukiLgXghgSG8uc8mhh-_P6gydj5IIqE_FbleBFaAOQaE4lDLFgB_ZMrp0DPnL2nKuXFGlt4LeCueuCu9tyc2uT_J_eJYx7ms5NeJ1ABdTmOIcdawe2HiRrjEdw_UZGj-atp8EZqQ846Mnn6g1sv9QmLWYuA7SMyIL3i5P_sH173spIYXUG0tzPixyGVCJQAqZS845t8IyJKXHCXxNk9s-hzc-KNWwSiyyu-yNFjNPajBm-TITqTY5_9btOMg"
        /> */}
  {/* 3D WebGL background */}
  <ThreeServicesBackground />
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] to-transparent pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Your Future.</span> Automated.
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 max-w-3xl">
          Production‑ready AI for healthcare, education, and business operations. We build the intelligent systems that drive enterprise success.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#6366F1] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-indigo-500 transition-transform transform hover:scale-105">
            <span className="truncate">Get Started</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-transparent border border-[#232348] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#232348] transition-transform transform hover:scale-105">
            <span className="truncate">Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero