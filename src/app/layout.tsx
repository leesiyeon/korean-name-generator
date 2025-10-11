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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korean Name Generator - Find Your Perfect Korean Name',
    description: 'Generate authentic Korean names with meanings, pronunciation guide, and style preferences.',
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
    google: 'xoHssXt3pbecMM_vnU50q5z6hlRJ6Vq8oSO0_P4oQ-Q',
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
