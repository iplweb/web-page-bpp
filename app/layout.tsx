import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://bpp.iplweb.pl"),
  title: {
    default: "Bibliografia Publikacji Pracowników - System zarządzania publikacjami naukowymi",
    template: "%s | Bibliografia Publikacji Pracowników",
  },
  description:
    "Profesjonalny system informatyczny do katalogowania publikacji pracowników jednostek naukowych. Oprogramowanie open source na licencji MIT. Integracja z PBN, raporty, analizy bibliometryczne.",
  keywords: [
    "bibliografia publikacji",
    "system bibliograficzny",
    "publikacje naukowe",
    "PBN",
    "Polska Bibliografia Naukowa",
    "zarządzanie publikacjami",
    "uczelnia",
    "uniwersytet",
    "open source",
    "MIT",
    "ewaluacja",
    "punktacja MNiSW",
  ],
  authors: [{ name: "iplweb Michał Pasternak" }],
  creator: "iplweb Michał Pasternak",
  publisher: "iplweb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bpp.iplweb.pl",
    siteName: "Bibliografia Publikacji Pracowników",
    title: "Bibliografia Publikacji Pracowników - System zarządzania publikacjami naukowymi",
    description:
      "Profesjonalny system informatyczny do katalogowania publikacji pracowników jednostek naukowych. Oprogramowanie open source na licencji MIT.",
    images: [
      {
        url: "/images/logo-bpp-large.png",
        width: 600,
        height: 200,
        alt: "Bibliografia Publikacji Pracowników",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibliografia Publikacji Pracowników",
    description: "Profesjonalny system informatyczny do katalogowania publikacji pracowników jednostek naukowych.",
    images: ["/images/logo-bpp-large.png"],
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
  alternates: {
    canonical: "https://bpp.iplweb.pl",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          defer
          data-domain="bpp.iplweb.pl"
          src="https://plausible.io/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
