import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ViewTransitions } from 'next-view-transitions'
import ClientLayout from '@/components/layout/client-layout'
import ErrorBoundary from '@/components/ErrorBoundary'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Collection',
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
            <ErrorBoundary>{children}</ErrorBoundary>
          </ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  )
}
