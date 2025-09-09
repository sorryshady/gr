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
  title: 'GR Group',
  description: 'Collection',
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
