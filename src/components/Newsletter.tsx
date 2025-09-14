'use client'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section className="bg-[#111122] px-4 md:px-10 lg:px-40 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tighter">Stay Updated with Our Latest Innovations</h2>
        <p className="text-lg text-indigo-200 mt-2">
          Subscribe to our newsletter to receive updates on our latest projects, insights, and industry trends.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input 
            className="form-input flex-1 w-full min-w-0 resize-none overflow-hidden rounded-md text-white bg-[#232348] border-none focus:ring-2 focus:ring-[#6366F1] h-12 px-4 placeholder:text-[#9292c9]" 
            placeholder="Enter your email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#6366F1] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-indigo-500 transition-colors"
          >
            <span className="truncate">Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter