'use client'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="px-4 md:px-10 lg:px-40 py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter">Contact Us</h2>
          <p className="text-lg text-indigo-200 mt-2">
            We&apos;d love to hear from you. Let&apos;s build something amazing together.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              className="form-input w-full min-w-0 resize-none overflow-hidden rounded-md text-white bg-[#232348] border-none focus:ring-2 focus:ring-[#6366F1] h-12 px-4 placeholder:text-[#9292c9]" 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              className="form-input w-full min-w-0 resize-none overflow-hidden rounded-md text-white bg-[#232348] border-none focus:ring-2 focus:ring-[#6366F1] h-12 px-4 placeholder:text-[#9292c9]" 
              placeholder="Your Email" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea 
            className="form-input w-full min-w-0 resize-none overflow-hidden rounded-md text-white bg-[#232348] border-none focus:ring-2 focus:ring-[#6366F1] min-h-36 p-4 placeholder:text-[#9292c9]" 
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="text-center">
            <button 
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#6366F1] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-indigo-500 transition-colors mx-auto"
            >
              <span className="truncate">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact