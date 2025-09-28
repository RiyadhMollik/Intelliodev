import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelliodev - AI-Powered Full Stack Solutions',
  description: 'Intelliodev delivers cutting-edge web solutions, leveraging AI automation to streamline development and enhance efficiency.',
  keywords: [
    'AI-powered solutions',
    'full stack development',
    'web development',
    'AI automation',
    'Intelliodev',
    'digital transformation',
    'business growth',
    'cloud services',
    'data science',
    'engineering solutions'
  ],
  authors: [
    { name: 'Intelliodev Team', url: 'https://www.intelliodev.com' }
  ],
  openGraph: {
    title: 'Intelliodev - AI-Powered Full Stack Solutions',
    description: 'Discover Intelliodev: Your partner in AI-driven web solutions, transforming businesses with innovative technology.',
    url: 'https://www.intelliodev.com',
    siteName: 'Intelliodev',
    images: [
      {
        url: 'https://www.intelliodev.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intelliodev Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D1A] text-white">
        {children}
      </body>
    </html>
  )
}