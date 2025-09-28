'use client'
import ThreeServicesBackground from './ThreeServicesBackground'
import { useState } from 'react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number>(0)

  const faqs = [
    {
      question: "What services does Intelliodev offer?",
      answer: "Intelliodev offers a range of services including AI automation, web development, custom software solutions, and full-stack integration. We specialize in creating tailored solutions to meet the unique needs of modern businesses."
    },
    {
      question: "How does AI automation benefit my business?",
      answer: "AI automation can significantly increase efficiency by automating repetitive tasks, optimizing workflows, reducing operational costs, and providing data-driven insights for better decision-making."
    },
    {
      question: "What is the process for starting a project with Intelliodev?",
      answer: "Starting a project is simple. Contact us with your idea, and we'll schedule a consultation to discuss your needs. We'll then create a detailed proposal and, upon approval, begin the development process with regular updates."
    }
  ]

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
      <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    </div>
  )

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20" id="faq">
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Frequently Asked Questions</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
        </p>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`rounded-lg border border-[#323267] bg-[#191933] p-4 transition-all duration-300 hover:border-[#6366F1] ${openFAQ === index ? 'border-[#6366F1]' : ''}`}
          >
            <button
              className="flex cursor-pointer items-center justify-between gap-4 w-full text-left"
              onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
            >
              <p className="text-lg font-medium">{faq.question}</p>
              <ChevronIcon isOpen={openFAQ === index} />
            </button>
            {openFAQ === index && (
              <p className="text-[#9292c9] text-sm mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ