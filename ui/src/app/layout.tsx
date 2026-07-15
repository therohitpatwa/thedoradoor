import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anywheredoor - Send Anywhere',
  description: 'Transfer files securely peer-to-peer with Anywheredoor. Fast, encrypted, no middleman.',
  keywords: ['file transfer', 'p2p', 'secure', 'encrypted', 'Anywheredoor'],
  icons: {
    icon: '/favicon.png',
  },
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
