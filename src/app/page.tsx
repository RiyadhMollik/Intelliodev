import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Partners from '@/components/Partners'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0D1A] text-white overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Partners />
          <FAQ />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}