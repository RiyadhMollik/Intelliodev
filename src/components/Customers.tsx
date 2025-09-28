import ThreeServicesBackground from './ThreeServicesBackground';

const Customers = () => {
  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="customers">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10 text-center">
        <h2 className="text-xs md:text-sm font-semibold text-indigo-200 tracking-wider uppercase">
          Trusted by the world's most innovative companies
        </h2>
        <div className='w-full flex justify-center'>
          <div className="mt-8 md:mt-12 flex overflow-x-auto whitespace-nowrap items-center space-x-4 md:space-x-10 lg:space-x-16 grayscale opacity-70">
            <p className="font-semibold text-lg md:text-xl text-indigo-300 inline-block">InnovateHealth</p>
            <p className="font-semibold text-lg md:text-xl text-indigo-300 inline-block">FutureLearn</p>
            <p className="font-semibold text-lg md:text-xl text-indigo-300 inline-block">Quantum Corp</p>
            <p className="font-semibold text-lg md:text-xl text-indigo-300 inline-block">Nexus Retail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
