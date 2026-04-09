import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'thedoradoor — Secure P2P File Transfer',
  description: 'Transfer files securely peer-to-peer with thedoradoor. Fast, encrypted, no middleman.',
  keywords: ['file transfer', 'p2p', 'secure', 'encrypted', 'thedoradoor'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
