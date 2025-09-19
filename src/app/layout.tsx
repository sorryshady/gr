import ErrorBoundary from '@/components/ErrorBoundary'
import ClientLayout from '@/components/layout/client-layout'
import Header from '@/components/layout/header'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GR Group | Redefining Lifestyle, Sustainability & Global Innovation',
  description:
    'GR Group is a multidimensional conglomerate driving change through premium exports, luxury events, and lifestyle ventures. Our mission: to design a more conscious, elegant, and globally connected future.',
  keywords: [
    'GR Group',
    'thegrgroup',
    'GR Group India',
    'GR Group global',
    'premium exports',
    'international exports',
    'export company India',
    'luxury events',
    'corporate events',
    'event management',
    'lifestyle ventures',
    'sustainable fashion',
    'sustainable brands',
    'brand building',
    'creative collaborations',
    'luxury experiences',
    'conscious consumer',
    'global innovation',
    'India to global markets',
    'trade and logistics',
    'fashion ventures',
    'ethical production',
    'premium lifestyle',
    'high-end events',
    'business conglomerate',
    'international business',
    'event activations',
    'corporate partnerships',
    'global trade company',
  ],
  authors: [{ name: 'GR Group' }],
  creator: 'GR Group',
  publisher: 'GR Group',
  metadataBase: new URL('https://www.thegrgroup.com'),

  openGraph: {
    type: 'website',
    url: 'https://www.thegrgroup.com',
    title: 'GR Group | Redefining Lifestyle, Sustainability & Global Innovation',
    description:
      'A parent company uniting exports, luxury events, and lifestyle ventures under one vision: building a conscious and globally connected future.',
    siteName: 'GR Group',
    // images: [
    //   {
    //     url: 'https://www.thegrgroup.com/opengraph-image.png', // make 1200x630px branded OG image
    //     width: 1200,
    //     height: 630,
    //     alt: 'GR Group – Redefining Lifestyle & Global Innovation',
    //   },
    // ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@thegrgroup', // replace if you have no Twitter yet
    title: 'GR Group | Redefining Lifestyle, Sustainability & Global Innovation',
    description:
      'GR Group operates at the intersection of exports, luxury, and sustainability to shape a more connected future.',
    // images: ['https://www.thegrgroup.com/twitter-image.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  alternates: {
    canonical: 'https://www.thegrgroup.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GR Group',
            url: 'https://www.thegrgroup.com',
            logo: 'https://www.thegrgroup.com/logo.png',
            // sameAs: [
            //   'https://www.linkedin.com/company/thegrgroup',
            //   'https://twitter.com/thegrgroup',
            //   'https://www.instagram.com/thegrgroup',
            // ],
            description:
              'GR Group is a multidimensional conglomerate uniting exports, luxury events, and lifestyle ventures under one philosophy: designing a conscious, elegant, globally connected future.',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Business Inquiries',
              email: 'info@thegrgroup.com',
            },
          }),
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ViewTransitions>
          <ClientLayout>
            <Header />
            <ErrorBoundary>{children}</ErrorBoundary>
            <Footer />
          </ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  )
}
