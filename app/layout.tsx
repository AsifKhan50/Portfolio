import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asif Khan — Power Platform Developer & Business Apps Consultant',
  description:
    'Asif Khan builds enterprise-grade business applications with Power Apps, Power Automate, SharePoint, Dataverse, and Microsoft 365. Specializing in automation, digital transformation, and business process optimization.',
  generator: 'v0.app',
  keywords: [
    'Power Platform Developer',
    'Power Apps',
    'Power Automate',
    'Dataverse',
    'SharePoint',
    'Microsoft 365',
    'Business Applications Consultant',
    'Asif Khan',
  ],
  authors: [{ name: 'Asif Khan' }],
  openGraph: {
    title: 'Asif Khan — Power Platform Developer & Business Apps Consultant',
    description:
      'Enterprise-grade business applications, automation, and digital transformation with the Microsoft Power Platform.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
