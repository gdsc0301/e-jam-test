import './globals.scss'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack test',
  description: 'The project is a test for a full stack developer position',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} lg:pt-36 min-h-screen`}>{children}</body>
    </html>
  )
}
