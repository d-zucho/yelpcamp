import type { Metadata } from 'next'

import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'YelpCamp',
  description: 'Book your next camping trip with YelpCamp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${archivo.variable} antialiased`}>{children}</body>
    </html>
  )
}
