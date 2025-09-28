'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import ThreeServicesBackground from './ThreeServicesBackground'

const ServicesDiagram = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Artificial Intelligence",
      position: "top-left",
      delay: "0.2s"
    },
    {
      title: "Cloud Services", 
      position: "top-right",
      delay: "0.4s"
    },
    {
      title: "Data Sciences",
      position: "bottom-left", 
      delay: "0.6s"
    },
    {
      title: "Engineering",
      position: "bottom-right",
      delay: "0.8s"
    }
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Unified Three.js background */}
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 pointer-events-none" />
      </div>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#6366F1]">Innovation</span> Ecosystem
          </h2>
          <p className="text-xl text-[#9292c9] max-w-3xl mx-auto">
            Four core pillars that drive digital transformation and business growth
          </p>
        </div>

        {/* Services Diagram */}
        <div className="relative z-10 flex items-center justify-center min-h-[800px] w-full">
          
          {/* Service Cards - anchored to line endpoints (opposite side of logo) */}
          {services.map((service) => {
            // Exact path endpoints in the SVG viewBox (1200x800)
            const anchors = {
              'top-left': { x: 400, y: 180, side: 'left' },
              'top-right': { x: 800, y: 180, side: 'right' },
              'bottom-left': { x: 400, y: 615, side: 'left' },
              'bottom-right': { x: 800, y: 615, side: 'right' }
            } as const

            const a = anchors[service.position as keyof typeof anchors]
            const xPct = (a.x / 1200) * 100
            const yPct = (a.y / 800) * 100
            const offset = 16 // distance from the line endpoint

            // Outer wrapper positions the card edge at the line endpoint
            const anchorStyle: CSSProperties = {
              left: `${xPct}%`,
              top: `${yPct}%`,
              transform: a.side === 'left'
                ? `translate(calc(-100% - ${offset}px), -50%)`
                : `translate(${offset}px, -50%)`,
            }

            return (
              <div key={service.title} className="absolute  z-[100]" style={anchorStyle}>
                {/* Animated/hover effects live on the inner card */}
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: service.delay }}
                >
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-[#1A1A2E] border border-[#6366F1]/30 rounded-2xl px-6 py-5 hover:border-[#6366F1]/60 transition-all duration-500 hover:transform hover:scale-105 w-[380px] h-20 flex items-center shadow-lg shadow-[#6366F1]/20">
                      <div className="mx-1 flex gap-4 items-center w-full">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {service.title === 'Artificial Intelligence' && (
                            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM216,184H40V64H216V184ZM128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
                            </svg>
                          )}
                          {service.title === 'Cloud Services' && (
                            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M160,40a88.09,88.09,0,0,0-81.29,55.63A64,64,0,0,0,72,224h88a88,88,0,0,0,0-176ZM160,208H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z" />
                            </svg>
                          )}
                          {service.title === 'Data Sciences' && (
                            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
                            </svg>
                          )}
                          {service.title === 'Engineering' && (
                            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM216,184H40V64H216V184ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
                            </svg>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Central Logo - Positioned in exact center */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1500 ${
            isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'
          }`}>
            <div className="relative">
              {/* Pulsing Rings */}
              <div className="absolute inset-0 w-40 h-40 border-2 border-[#6366F1]/20 rounded-3xl animate-ping"></div>
              <div className="absolute inset-2 w-36 h-36 border-2 border-[#8B5CF6]/30 rounded-3xl animate-ping" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Main Logo Container */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#6366F1]/40">
                {/* Inner Glow */}
                <div className="absolute inset-2 bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 rounded-2xl animate-pulse"></div>
                
                {/* Logo */}
                <svg className="size-20 text-white relative z-10 drop-shadow-lg" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>

                {/* Rotating Outer Ring */}
                <div className="absolute -inset-4 border-2 border-[#6366F1]/40 rounded-full animate-spin-slow"></div>
                <div className="absolute -inset-6 border border-[#8B5CF6]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Top Left to Center */}
            <path 
              d="M 150 150 Q 350 200 600 400" 
              stroke="url(#connection-gradient)" 
              strokeWidth="3" 
              fill="none" 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              strokeDasharray="10,5"
              filter="url(#glow)"
              style={{ animationDelay: '0.2s' }}
            >
              <animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Top Right to Center */}
            <path 
              d="M 1050 150 Q 850 200 600 400" 
              stroke="url(#connection-gradient)" 
              strokeWidth="3" 
              fill="none" 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              strokeDasharray="10,5"
              filter="url(#glow)"
              style={{ animationDelay: '0.4s' }}
            >
              <animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Bottom Left to Center */}
            <path 
              d="M 150 650 Q 350 600 600 400" 
              stroke="url(#connection-gradient)" 
              strokeWidth="3" 
              fill="none" 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              strokeDasharray="10,5"
              filter="url(#glow)"
              style={{ animationDelay: '0.6s' }}
            >
              <animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Bottom Right to Center */}
            <path 
              d="M 1050 650 Q 850 600 600 400" 
              stroke="url(#connection-gradient)" 
              strokeWidth="3" 
              fill="none" 
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              strokeDasharray="10,5"
              filter="url(#glow)"
              style={{ animationDelay: '0.8s' }}
            >
              <animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite"/>
            </path>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <circle key={i} r="2" fill="#6366F1" className="animate-pulse">
                <animateMotion
                  dur={`${4 + i}s`}
                  repeatCount="indefinite"
                  path={`M ${150 + i * 120} ${150 + i * 60} Q ${350 + i * 60} ${200 + i * 50} 600 400`}
                />
              </circle>
            ))}
          </svg>
        </div>
        </div>
    </section>
  )
}

export default ServicesDiagram