import { Metadata, Viewport } from 'next'

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export function getDefaultMetadata(
  url: string,
  title: string,
  description: string,
  keywords: string[],
): Metadata {
  return {
    metadataBase: new URL(url),
    title,
    description,
    keywords,
    authors: { name: 'DoDAO' },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Chained Assets',
      images: [
        {
          url: '/dodao_logo.png',
          alt: 'Chained Assets Logo',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/dodao_logo.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/dodao_logo_square.png',
    },
    alternates: {
      canonical: url,
    },
  }
}
