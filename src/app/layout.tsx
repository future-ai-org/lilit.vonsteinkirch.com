import '../styles/global.css'
import CEOLink from './components/CEOLink'
import ValuesLink from './components/ValuesLink'
import VisionLink from './components/VisionLink'
import StarTeamLink from './components/StarTeamLink'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'LILIT - Ancient Wisdom meets the AI Era',
  description: 'LILIT - Ancient Wisdom meets the AI Era',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={quicksand.className}>
        {children}
        <CEOLink />
        <ValuesLink />
        <VisionLink />
        <StarTeamLink />
      </body>
    </html>
  )
}
