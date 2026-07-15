import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import StickyHeader from '@/components/layout/StickyHeader'
import Footer from '@/components/layout/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'KodoWork',
  description: 'Work-experience based learning programs to land your dream tech job',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <StickyHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
