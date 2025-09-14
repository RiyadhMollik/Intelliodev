const Portfolio = () => {
  const projects = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKkVMPU1KZ-fgaw9UZUjkLOF3dl57nPrBJuedDAbCkgmLyK2G6l4WgRYA5HH5vvn_7jBZGMVK019TZkYQQrBrzpMDy-AvKS8eSDY57yZZn44j5FPaYMxkcfoERBe7Y6dR3JEvaDymm6cJ2cqCqXA08_xnH3yzavHYcHmFnjdaUfQwhvwhQsoHrdU0Ug72oe_U3R4mA3c_Q1cqQuB-6iNfE7Tl5Hvgcs64tmJ2nBQ__tOb7u7zZbVOAK02Y0KwTxobwwi4TEjDYkk",
      title: "Streamlined Business Analytics Dashboard",
      description: "A comprehensive dashboard providing real-time insights and analytics for informed decision-making."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Y1AYEaWKjLPQk0uO1m-49DESxX-WoevrHIeIBTXzPK1kuhtWQagrZnGU6bzSSYZKzVSQNHFH6DFKxkmzxEjX_M3XN9_H2a8Zfb1YST2x9KRY4lLbj48IdZur4L8bZxcVo6UTPxjXZlkwBJiA0twgopnblfcgcjhcicoPK70nWQ0SXNkn64A49YCJ2ZhlK7vJrlKcxtODiECK9aw22JMhde1BHU0aK2LU7Yg2XcBUxhxYKWpa93cEhNQnxf1FBz7mBhg8ncTDRBg",
      title: "E-commerce Platform with Enhanced UX",
      description: "An intuitive e-commerce platform designed to maximize sales and customer satisfaction."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dXu76EjwWS9dmsXRMRcuQRBdXpFrC-fq0HonB8r9isYD92RjUKvTOBYmwBmQ24gC1FwdSf5bTvLZ3LXNyTics23Vsr5yh8-sFvvwlsn3mEllKhC8zAZpns0TBFx3Nkv-lsOKydDgg-nd2xWod-OXxQgSYa8SrLwe075zeBJgnrLYB6YgmXBEQ8J_Yve9LcNOiJmg3Z4JiKGO_EH-BjZntNpc3-X2IWRjB39wM8ZR_UixBXAytRgxu8C4dqPCendfvSfp4925S2g",
      title: "Mobile App for On-the-Go Productivity",
      description: "A mobile application enabling users to manage tasks and collaborate seamlessly from anywhere."
    }
  ]

  return (
    <section className="px-4 md:px-10 lg:px-40 py-20 bg-[#111122]" id="portfolio">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Our Portfolio</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          See our innovative solutions in action. Here&apos;s a glimpse of what we&apos;ve built.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group flex flex-col rounded-lg overflow-hidden border border-[#323267] bg-[#191933] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
          >
            <div 
              className="w-full h-48 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url("${project.image}")` }}
            ></div>
            <div className="p-6">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-[#9292c9] text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio