import './globals.scss'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { getDictionary } from './helpers/Dict'
import Header from './components/Header'
import Footer from './components/Footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack test',
  description: 'The project is a test for a full stack developer position',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  }
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const dict = await getDictionary();

  return (
    <html lang="en">
      <body className={`${manrope.className} relative pt-[102px] lg:pt-36 pb-[102px] lg:pb-[104px] min-h-screen`}>
        <Header dictionary={dict} />
        <main>
        {children}
        </main>
        <Footer dictionary={dict} />
      </body>
    </html>
  )
}
