import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'By Kim Ji Yong',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
