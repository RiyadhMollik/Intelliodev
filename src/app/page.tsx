import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServicesDiagram from '@/components/ServicesDiagram'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Partners from '@/components/Partners'
import FAQ from '@/components/FAQ'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop3D from '@/components/ScrollToTop3D'
import Customers from '@/components/Customers'
import Products from '@/components/Products'
import WhyIntelliodev from '@/components/WhyIntelliodev'
import Demo from '@/components/Demo'
import Security from '@/components/Security'

export default function Home() {
  return (
    <div 
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#0D0D1A] text-white" 
      style={{ 
        fontFamily: '"Space Grotesk", "Noto Sans", sans-serif',
        willChange: 'scroll-position'
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1" style={{ contain: 'layout style paint' }}>
          <Hero />
          <Services />
          <Customers />
          <Products />
          <WhyIntelliodev />
          <ServicesDiagram />
          <Portfolio />
          <Team />
          <Testimonials />
          <Partners />
          <FAQ />
          <Newsletter />
          <Contact />
          <Security />
        </main>
        <Footer />
        <ScrollToTop3D />
      </div>
    </div>
  )
}