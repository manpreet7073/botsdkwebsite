import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BotSDK - Custom Bot Integration for Developers",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  description:
    "Easily integrate customizable bots into your website with our powerful SDK. Auto-detect website data, customize appearance, and create custom conversation flows.",
  openGraph: {
    title: "BotSDK - Custom Bot Integration for Developers",
    description:
      "Easily integrate customizable bots into your website with our powerful SDK. Auto-detect website data, customize appearance, and create custom conversation flows.",
    url: "https://botsdk.com",
    siteName: "BotSDK",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BotSDK - Custom Bot Integration for Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BotSDK - Custom Bot Integration for Developers",
    description:
      "Easily integrate customizable bots into your website with our powerful SDK. Auto-detect website data, customize appearance, and create custom conversation flows.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-mesh`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
