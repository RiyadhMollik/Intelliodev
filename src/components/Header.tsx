'use client'

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#232348] px-10 py-4 sticky top-0 bg-[#0D0D1A] z-50">
      <div className="flex items-center gap-3 text-white">
        <svg className="size-8 text-[#6366F1]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
        </svg>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Intelliodev</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a className="text-white hover:text-[#6366F1] transition-colors" href="#services">Services</a>
        <a className="text-white hover:text-[#6366F1] transition-colors" href="#portfolio">Portfolio</a>
        <a className="text-white hover:text-[#6366F1] transition-colors" href="#about">About Us</a>
        <a className="text-white hover:text-[#6366F1] transition-colors" href="#contact">Contact</a>
      </nav>
      <div className="flex gap-2">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#6366F1] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-indigo-500 transition-colors">
          <span className="truncate">Get Started</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-transparent border border-[#232348] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#232348] transition-colors">
          <span className="truncate">Contact Us</span>
        </button>
      </div>
    </header>
  )
}

export default Header