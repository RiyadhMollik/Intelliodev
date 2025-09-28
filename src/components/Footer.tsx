import ThreeServicesBackground from './ThreeServicesBackground';

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B14] border-t border-[#232348]">
      {/* Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg className="size-10 text-[#6366F1]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
                <h2 className="text-white text-2xl font-bold">Intelliodev</h2>
              </div>
              <p className="text-[#9292c9] text-lg mb-6 max-w-md leading-relaxed">
                Empowering businesses with cutting-edge AI solutions and full-stack development services. 
                We transform ideas into scalable, intelligent applications.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#9292c9]">
                  <svg className="size-5 text-[#6366F1]" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM40,180V76.19l81.9,75.22a8,8,0,0,0,10.2,0L216,76.19V180Z"/>
                  </svg>
                  <span>intelliodev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#9292c9]">
                  <svg className="size-5 text-[#6366F1]" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"/>
                  </svg>
                  <span>8801786563606</span>
                </div>
                <div className="flex items-center gap-3 text-[#9292c9]">
                  <svg className="size-5 text-[#6366F1]" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"/>
                  </svg>
                  <span>8801742957256</span>
                </div>
                <div className="flex items-center gap-3 text-[#9292c9]">
                  <svg className="size-5 text-[#6366F1]" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"/>
                  </svg>
                  <span>32/A/18   Sultangonj, Rayerbazar, Dhaka</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <a 
                  className="p-3 bg-[#232348] rounded-lg text-[#9292c9] hover:text-white hover:bg-[#6366F1] transition-all duration-300 transform hover:scale-105" 
                  href="#" 
                  aria-label="Follow us on Twitter"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </a>
                <a 
                  className="p-3 bg-[#232348] rounded-lg text-[#9292c9] hover:text-white hover:bg-[#6366F1] transition-all duration-300 transform hover:scale-105" 
                  href="#" 
                  aria-label="Connect on LinkedIn"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </a>
                <a 
                  className="p-3 bg-[#232348] rounded-lg text-[#9292c9] hover:text-white hover:bg-[#6366F1] transition-all duration-300 transform hover:scale-105" 
                  href="#" 
                  aria-label="Follow on GitHub"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </a>
                <a 
                  className="p-3 bg-[#232348] rounded-lg text-[#9292c9] hover:text-white hover:bg-[#6366F1] transition-all duration-300 transform hover:scale-105" 
                  href="#" 
                  aria-label="Subscribe to our newsletter"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM40,180V76.19l81.9,75.22a8,8,0,0,0,10.2,0L216,76.19V180Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Full Stack Integration
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-[#9292c9] hover:text-[#6366F1] transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#232348] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-[#9292c9] text-sm">
                © 2025 Intelliodev. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#privacy" className="text-[#9292c9] hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-[#9292c9] hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-[#9292c9] hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#9292c9] text-sm">
              <span>Built with</span>
              <svg className="size-4 text-red-500" fill="currentColor" viewBox="0 0 256 256">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.69,146.26,196.16,128,206.8Z"/>
              </svg>
              <span>by Intelliodev Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
