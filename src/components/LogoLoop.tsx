'use client'
import { useEffect, useRef, ReactNode } from 'react'
import Image from 'next/image'

interface Logo {
  node?: ReactNode
  src?: string
  alt?: string
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: Logo[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

const LogoLoop = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor,
  ariaLabel = 'Logo carousel'
}: LogoLoopProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const positionRef = useRef<number>(0)
  const isPausedRef = useRef<boolean>(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Set CSS custom properties
    const container = track.closest('.logoloop') as HTMLElement
    if (container) {
      container.style.setProperty('--logoloop-gap', `${gap}px`)
      container.style.setProperty('--logoloop-logoHeight', `${logoHeight}px`)
      if (fadeOutColor) {
        container.style.setProperty('--logoloop-fadeColor', fadeOutColor)
      }
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime
      
      if (!isPausedRef.current) {
        const elapsed = currentTime - startTimeRef.current
        const distance = (elapsed * speed) / 1000
        
        if (direction === 'left') {
          positionRef.current = -distance
        } else {
          positionRef.current = distance
        }
        
        // Reset position when logos have scrolled out of view
        const trackWidth = track.scrollWidth / 2
        if (Math.abs(positionRef.current) >= trackWidth) {
          positionRef.current = 0
          startTimeRef.current = currentTime
        }
      }
      
      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, direction, gap, logoHeight, fadeOutColor])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isPausedRef.current = true
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isPausedRef.current = false
    }
  }

  const renderLogo = (logo: Logo, index: number) => {
    const content = logo.node ? (
      <span className="logoloop__node">{logo.node}</span>
    ) : logo.src ? (
      <Image src={logo.src} alt={logo.alt || ''} width={100} height={100} />
    ) : null

    if (logo.href) {
      return (
        <a
          key={index}
          href={logo.href}
          className="logoloop__link"
          title={logo.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      )
    }

    return <span key={index}>{content}</span>
  }

  const renderLogos = () => (
    <div className="logoloop__list">
      {logos.map((logo, index) => (
        <div key={index} className="logoloop__item">
          {renderLogo(logo, index)}
        </div>
      ))}
    </div>
  )

  return (
    <div
      className={`logoloop ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${
        fadeOut ? 'logoloop--fade' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="logoloop__track">
        {renderLogos()}
        {renderLogos()}
      </div>
    </div>
  )
}

export default LogoLoop