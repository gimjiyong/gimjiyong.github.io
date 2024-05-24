import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
