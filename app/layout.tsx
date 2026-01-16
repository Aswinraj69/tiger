import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat, Oswald } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tiger - Premium Bar & Dance Club | Dubai',
  description: 'An exclusive sanctuary of sound, style, and sophistication. Premium bar and dance club in Dubai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${montserrat.variable} ${oswald.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
