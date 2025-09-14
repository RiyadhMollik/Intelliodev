const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Rahman",
      position: "CEO, Tech Innovators",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0PO0NhIhc6NtGP3nDaK9I4FIqysdwDM7YfZnuoSF-yRuyu5iBqtp7pdiw2og5_fdG3NRTg35fUmD81PNxLyAvn_U8S54XMf87tF3TfmdT5pawbwaYyth3ufNUG5vQ9c25ty9b6gbDRbU7tRlnHMrrmZaORNr9MxExzzgPuwdKkqXNWDGdh2WDi_-9LSW8rhjydIqW4hftQnzYRhMrGBHVxgLV9WPF2w3J5wZZIr9ymHTkoOfMm_mF_-J4rWu3qt6zXhid8wLRY-c",
      testimonial: "Intelliodev transformed our business with their innovative AI solutions. Their team was professional, responsive, and delivered exceptional results."
    },
    {
      name: "Omar Khan",
      position: "Founder, E-Shop",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAozLEi9zmAv1Cj_wSYfjs5SC5ZUTJ2KjIPCsmaJg3pVZdO33xo2P4II9NDH_ZsC3AzHD1Vkz0CaitsdmYnwXrxujYZsd4zNlZ0UDezMmCSuqfatRMwbk0d578rlQ3UFxjriHa_xZFlIJI2s8GkDc8edHtKQIMvzqCGdBTd9-ZC4CKWRoBWBOZPTA1G7uTOFkncHaH_T0omNT62MEHTgUT9mdLJ2zMDGr4-y-9Gpco6W0lVsE5S60HgnlTWWkfHK44eRUVg8k3OSQA",
      testimonial: "Our new website is modern, user-friendly, and has significantly boosted our online presence. The quality of work is outstanding."
    },
    {
      name: "Fatima Chowdhury",
      position: "Manager, Creative Solutions",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPoYqm49uhMWGo7w4eV6KPddAu1k4hQnDMgPLqFU1ZB-0T64Wr0UCiNgBwykRwqEtafIgjekjamtEM4X0UrrVD77cP-ISXqveIc9y0MaehO1nuNn1lJgPZTlPl-Q1m63y6DenU1P3dKg1o5NMAKpTitMlw5WpcvcsAjWwtxIEnFBAnyeTZPWPY-TZP_1uPu4CAfSNFmFfOvO_5Y8H53Sl42xlL0nPsPSSHcDlzlFF1YkIu3vdXI1uCPkq_6Zt09iNRsD4sVxI2mHs",
      testimonial: "The custom software solution has streamlined our operations. Their expertise and attention to detail are commendable."
    }
  ]

  const StarRating = () => (
    <div className="flex gap-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
          <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
        </svg>
      ))}
    </div>
  )

  return (
    <section className="px-4 md:px-10 lg:px-40 py-20" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">What Our Clients Say</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          We&apos;re proud to have happy clients. Read what they&apos;re saying about us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-4 rounded-lg border border-[#323267] bg-[#191933] p-6">
            <div className="flex items-center gap-4">
              <div 
                className="size-12 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url("${testimonial.image}")` }}
              ></div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-indigo-300">{testimonial.position}</p>
              </div>
            </div>
            <StarRating />
            <p className="text-indigo-200">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials