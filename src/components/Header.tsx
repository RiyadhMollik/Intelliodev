'use client'

import { useEffect, useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b border-white/10 backdrop-blur-md transition-all duration-300
      ${scrolled ? 'bg-[#0D0D1A]/80 shadow-lg shadow-indigo-500/10' : 'bg-[#0D0D1A]/60'}`}
    >
      {/* Top gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500/80 opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 text-white">
            <svg className="size-8 text-[#6366F1]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <span className="text-white text-xl font-extrabold leading-tight tracking-tight">Intelliodev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { href: '#services', label: 'Services' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#about', label: 'About Us' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/90 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions + Mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex gap-2">
              <a href="#contact" className="flex items-center justify-center rounded-md h-10 px-5 border border-white/10 text-white/90 text-sm font-semibold hover:bg-white/5 transition-colors">
                Contact Us
              </a>
              <a href="#services" className="flex items-center justify-center rounded-md h-10 px-5 bg-[#6366F1] text-white text-sm font-bold hover:bg-indigo-500 transition-colors">
                Get Started
              </a>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center size-10 rounded-md border border-white/10 text-white/90 hover:bg-white/5"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 overflow-hidden rounded-lg border border-white/10 bg-[#0D0D1A]/80 backdrop-blur-md">
              <nav className="flex flex-col p-2 text-sm font-medium">
                {[
                  { href: '#services', label: 'Services' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#about', label: 'About Us' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-white/90 hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 p-2">
                  <a href="#contact" className="rounded-md h-10 px-3 flex items-center justify-center border border-white/10 text-white/90 hover:bg-white/5">Contact Us</a>
                  <a href="#services" className="rounded-md h-10 px-3 flex items-center justify-center bg-[#6366F1] text-white font-semibold hover:bg-indigo-500">Get Started</a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header