import ThreeServicesBackground from './ThreeServicesBackground'
import ChromaGrid from './ChromaGrid'

const teamItems = [
  {
    image: 'https://avatars.githubusercontent.com/u/106389622?v=4',
    title: 'Riyadh Mollik',
    subtitle: 'Full Stack Developer',
    handle: '@riyadhmollik',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #1a1a2e)',
    url: 'https://github.com/riyadhmollik',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/72163807?v=4',
    title: 'Nasim Mahmud Nayan',
    subtitle: 'AI Engineer',
    handle: '@NMNayan57',
    borderColor: '#10B981',
    gradient: 'linear-gradient(180deg, #10B981, #1a1a2e)',
    url: 'https://github.com/NMNayan57',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/108449187?v=4',
    title: 'Dipro Paul',
    subtitle: 'Full Stack Developer',
    handle: '@Dip-ro',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #4F46E5, #1a1a2e)',
    url: 'https://github.com/Dip-ro',
  }
]

const advisorItems = [
  {
    image: '/fbbd0d1d-5b50-4bbf-8e12-71cc9eea692e.jpeg',
    title: 'Muhammad Usama Islam',
    subtitle: 'Advisor',
    location: 'Assistant Professor, Metro State University, USA',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(145deg, #F59E0B, #1a1a2e)',
    url: 'https://www.metrostate.edu/about/directory/muhammad-usama-islam',
  }
]

export default function Team() {
  return (
    <>
      <section id="team" className="relative py-24 ">
        <div className="absolute inset-0 -z-10">
          <ThreeServicesBackground />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Meet our team</h2>
            <p className="mt-3 text-base text-white/70">A small, focused group of makers crafting delightful digital experiences.</p>
          </div>
          <div className="mt-12 ">
            <ChromaGrid items={teamItems} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
          </div>
        </div>
      </section>

      <section id="advisor" className="relative py-24 ">
        <div className="absolute inset-0 -z-10">
          <ThreeServicesBackground />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Meet our Advisor</h2>
            <p className="mt-3 text-base text-white/70">Guiding our vision with expertise and experience.</p>
          </div>
          <div className="mt-12 flex justify-center">
            <ChromaGrid items={advisorItems} columns={1} radius={300} damping={0.45} fadeOut={0.6} ease="power3.out" />
          </div>
        </div>
      </section>
    </>
  )
}
