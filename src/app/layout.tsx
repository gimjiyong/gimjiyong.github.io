import type { Metadata } from 'next'

import HomeButton from '@/app/components/HomeButton'
import NavBar from '@/app/components/NavBar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kim Ji Yong',
  description: 'Tech, Art and Others',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <HomeButton />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
