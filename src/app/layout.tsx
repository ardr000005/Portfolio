import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import React, { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Aravind R Nair - Portfolio",
  description: "Portfolio of Aravind R Nair, a B.Tech Computer Science student, Developer, and Innovator.",
  keywords: [
    "Aravind R Nair",
    "Software Developer",
    "Flutter Developer",
    "Full Stack Developer",
    "Computer Science Student",
    "Indian Developer",
  ],
  authors: [{ name: "Aravind R Nair" }],
  creator: "Aravind R Nair",
  metadataBase: new URL("https://aravindrnair.me"),
  openGraph: {
    title: "Aravind R Nair - Portfolio",
    description: "Explore my software projects, resume, and more — built with Next.js and deployed on Vercel.",
    url: "https://aravindrnair.me",
    siteName: "Aravind R Nair - Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aravind R Nair - Portfolio",
    description: "B.Tech CSE student | Developer | Innovator",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>",
  },
};


const GA_TRACKING_ID = "G-V6CT8M0JSS"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
