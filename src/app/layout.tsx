import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { defaultViewport, getDefaultMetadata } from '@/utils/seoConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport = defaultViewport

export const metadata = getDefaultMetadata(
  'https://chainedassets.com/',
  'Chained Assets - Comprehensive Guide to Real-World Asset Tokenization',
  'Explore our detailed research on Real-World Asset Tokenization. We offer research, consulting, and business development services to help you navigate regulatory challenges and drive sustainable growth.',
  [
    'Chained Assets',
    'DoDAO',
    'Real World Assets',
    'Blockchain',
    'RWA Solutions',
    'RWA Research',
    'RWA Landscape',
    'Consultations',
    'Business Development',
    'Blockchain Consulting',
    'Regulatory Compliance',
    'Tokenization of Real World Assets',
    'RWA on Blockchain',
    'Research on Real World Assets',
  ],
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
