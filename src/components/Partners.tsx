import LogoLoop from './LogoLoop'
import ThreeServicesBackground from './ThreeServicesBackground'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel } from 'react-icons/si'

const Partners = () => {
  // Tech stack logos with icons
  const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
  ]

  // Partner company logos with images
  const partnerLogos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKKxINftsHm_DazKE5YTK38IQ-aMYZFp0yFqU8MYd0A_XEZRLSpOJlyWwZ6ZiaS8Oc4PK-7rzm6IaWlY3gOqktbBwsof3D9-B2LB_0tMDhS5t2bY0dbfWz8d27ve4jyovke9Wtsy92HrNgh6i9-AeFAXNlNrnNQjnYv54YTWig7QCO00NRxznCaPPe7XNQdPxid0mfw2uz47gjkDtXfYQy0ghMq-LGFAdI-M0t1pbFB6NdvbLTE7p54c9TYQv9HtadZZizSxxyACY",
      alt: "Partner Company 1",
      title: "Partner Company 1"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdX2QRaPofdvlL5RnZAVKDewxPWGffJYUwUvZL5V_eiiAqPAWDd-aNrifUMqp6DU31v2mnndaUBfNZHRPS7kTJOpQh3gllCvj0Ev958Tvev0xEbmGq7nC9jqQMjM8638dFLGJAS756IIFL9fwrLyoQOAwIS2d8Y1Au2b2XMrVGePaA0jj-DReNxrs9BNP6R0qYO-jkLNwtv91cD5wDHChF2Wz7SIlJYEMqAnS0bVMsPhum15qCdrWYf7dxIae5RkhmI6sfAfTrxzc",
      alt: "Partner Company 2",
      title: "Partner Company 2"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDurliH3Qk_q1hVN_bzgmqo9QMCrDQ-H1Ci2jNxxqp3Vo-Epqh6BorpprN6Le4YA8iJ4BPMC77pkC0gL2aPVUFpAZ1i73T2Vj5z0Va6lzp5BZOq8f0iLtwQUN6OgJLAIKARxkvYtGK9_7IJduDD1x1LHWM7y0Un14r_AgQZC_YNa9-O30z4SKo5dHdY6y9PXh6r4byaszM68Reh1me0SBFfsX8DyRRBC43DLLrRBc9f2PhrGEFIqBKhA23i1jL53FXI2sV5qAuU_yU",
      alt: "Partner Company 3",
      title: "Partner Company 3"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaDyXAAMD3r-FZ0StQBjeBY91NcGMBBUYpxByeMXP1FvReDuXjFkMMX6E9BjfeItW6219jEh6ygl11vO0oNyY0IIHD0LwMfHwajmDDBZrBqzlys4E6H-balyQwyehyOJklTwaU3qlMUkJsPs5nC2m8heQOMuAL3IadEMdKZcS7muwtmj4x1RGtZtt9N8KaMA2lnOF63VD41UQHDWzYbWP5jfy3q-bT9xUVc123HEoeLKL6g7sBEOeuAwBdlSJWMCQdrR2FmF-5DEE4",
      alt: "Partner Company 4",
      title: "Partner Company 4"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMmSL8BRzAEJmooxlMRuh2FQK1aBzdIOdrd93vh1PpncSWTwLSI7hU7XKzb5GwB_9I4uVZ6Ta8pKCdKIpQiT2A_QdWurXPammETdDE4cgL1VIECnSjLjYNWHAnMjnZyrkxUgfwO9lD3Be7xS-h_aoLOJGaUVBqDILaAN39HMTC_e1aY1ojO4eQa0ji4GEXftCPQne11HoCgiGNEqOXlefD9pSsDMwLjCzPZs",
      alt: "Partner Company 5",
      title: "Partner Company 5"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU0tymnJS3a0nEBXhJQieJGATvEZAMS_Ps-9WsmZNbFreHHbYRAUSvV3I9pCcFTopNO3GS4voqOSt9kj3wJjrarjKqnvykOJn6NAK-kwnVdvdysycwc0HnoZx0j9mQxNID99oVypw4t9Xhc8MMJ9RosPtqgTLdL2OL4bPl9Ui81WDHA1ZOlVLlpXjFErO_CFg03V7ZIFdTWhjzTagi4XUniwqhFErbunZK5uhxMvZZhTZDcNw8UqqaD0SzuE9CDNm3N47_bVE4pNE",
      alt: "Partner Company 6",
      title: "Partner Company 6"
    }
  ]

  return (
    <section className="relative px-4 md:px-10 lg:px-40 py-20">
      <div className="absolute inset-0 z-0">
        <ThreeServicesBackground />
        <div className="absolute inset-0 " />
      </div>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Our Technology Stack</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          We use cutting-edge technologies to build modern, scalable solutions.
        </p>
      </div>
      
      {/* Tech Stack LogoLoop */}
  <div className="relative z-10 mb-16" style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#111122"
          ariaLabel="Technology stack"
        />
      </div>

      {/* <div className="text-center mb-12">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter">Our Trusted Partners</h2>
        <p className="text-lg text-indigo-200 mt-2 max-w-3xl mx-auto">
          We collaborate with industry leaders to deliver the best possible solutions.
        </p>
      </div>

     
      <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={partnerLogos}
          speed={80}
          direction="right"
          logoHeight={64}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#111122"
          ariaLabel="Trusted partners"
        /> */}
      {/* </div> */}
    </section>
  )
}

export default Partners