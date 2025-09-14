import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelliodev - AI-Powered Full Stack Solutions',
  description: 'Intelliodev delivers cutting-edge web solutions, leveraging AI automation to streamline development and enhance efficiency.',
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