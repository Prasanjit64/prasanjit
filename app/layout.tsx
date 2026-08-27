import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Prasanjit Ghosh | Mathematics Student & Web Technology Enthusiast',
  description:
    'Personal portfolio of Prasanjit Ghosh, a B.Sc. Mathematics student interested in mathematics, web technology, current affairs, geopolitics and Indian politics.',
  generator: 'v0.app',
  openGraph: {
    title: 'Prasanjit Ghosh | Mathematics Student & Web Technology Enthusiast',
    description:
      'Personal portfolio of Prasanjit Ghosh, a B.Sc. Mathematics student interested in mathematics, web technology, current affairs, geopolitics and Indian politics.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f4f9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
