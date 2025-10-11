import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korean Name Generator - Find Your Perfect Korean Name | 한국 이름 생성기",
  description: "Generate authentic Korean names with meanings, pronunciation guide, and style preferences. Perfect for K-pop fans, Korean learners, and anyone interested in Korean culture. Choose from traditional, modern, or trendy names.",
  keywords: [
    "Korean name generator",
    "Korean name",
    "K-pop name",
    "Korean culture",
    "name meaning",
    "Korean pronunciation",
    "한국 이름",
    "이름 생성기",
    "Korean identity",
    "Korean learning"
  ],
  authors: [{ name: "Korean Name Generator" }],
  creator: "Korean Name Generator",
  publisher: "Korean Name Generator",
  metadataBase: new URL('https://korean-name-generator.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://korean-name-generator.vercel.app',
    title: 'Korean Name Generator - Find Your Perfect Korean Name',
    description: 'Generate authentic Korean names with meanings, pronunciation guide, and style preferences. Perfect for K-pop fans and Korean learners.',
    siteName: 'Korean Name Generator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Korean Name Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korean Name Generator - Find Your Perfect Korean Name',
    description: 'Generate authentic Korean names with meanings, pronunciation guide, and style preferences.',
    images: ['/og-image.png'],
    creator: '@koreannamegen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
