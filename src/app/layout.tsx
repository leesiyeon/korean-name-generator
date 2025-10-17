import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Korean Name Generator - Free Korean Name Creator | 한국 이름 생성기 | K-pop Names",
  description: "Create authentic Korean names instantly! Free Korean name generator with meanings, pronunciation, and style options. Perfect for K-pop fans, Korean learners, and K-drama enthusiasts. Generate traditional, modern, or trendy Korean names with romanization.",
  keywords: [
    "Korean name generator",
    "Korean name creator",
    "Korean name maker",
    "Korean name finder",
    "Korean name picker",
    "Korean name chooser",
    "Korean name",
    "Korean names",
    "K-pop name",
    "K-pop names",
    "K-drama name",
    "Korean culture",
    "Korean identity",
    "Korean learning",
    "Korean language",
    "Korean pronunciation",
    "Korean romanization",
    "Korean surname",
    "Korean first name",
    "Korean last name",
    "Korean given name",
    "Korean family name",
    "Korean traditional names",
    "Korean modern names",
    "Korean trendy names",
    "Korean baby names",
    "Korean girl names",
    "Korean boy names",
    "Korean unisex names",
    "Korean gender neutral names",
    "Korean name meaning",
    "Korean name meanings",
    "Korean name history",
    "Korean name origin",
    "Korean name origins",
    "Korean name generator free",
    "free Korean name generator",
    "online Korean name generator",
    "Korean name generator tool",
    "Korean name generator app",
    "Korean name generator website",
    "한국 이름",
    "한국 이름 생성기",
    "한국 이름 만들기",
    "한국 이름 찾기",
    "한국 이름 고르기",
    "한국 이름 선택기",
    "한국 이름 생성기 무료",
    "무료 한국 이름 생성기",
    "한국 이름 의미",
    "한국 이름 뜻",
    "한국 이름 발음",
    "한국 이름 로마자",
    "한국 성씨",
    "한국 이름 역사",
    "한국 전통 이름",
    "한국 현대 이름",
    "한국 트렌디 이름",
    "한국 아기 이름",
    "한국 여자 이름",
    "한국 남자 이름",
    "한국 중성 이름",
    "K-pop 아이돌 이름",
    "K-drama 이름",
    "한국 드라마 이름",
    "한국 연예인 이름",
    "한국 배우 이름",
    "한국 가수 이름"
  ],
  authors: [{ name: "Korean Name Generator" }],
  creator: "Korean Name Generator",
  publisher: "Korean Name Generator",
  metadataBase: new URL('https://korean-name-generator-delta.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://korean-name-generator-delta.vercel.app',
    title: 'Korean Name Generator - Free Korean Name Creator | 한국 이름 생성기',
    description: 'Create authentic Korean names instantly! Free Korean name generator with meanings, pronunciation, and style options. Perfect for K-pop fans and Korean learners.',
    siteName: 'Korean Name Generator',
    images: [
      {
        url: 'https://korean-name-generator-delta.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Korean Name Generator - Create Your Perfect Korean Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korean Name Generator - Free Korean Name Creator',
    description: 'Create authentic Korean names instantly! Free Korean name generator with meanings, pronunciation, and style options.',
    creator: '@koreannamegen',
    images: ['https://korean-name-generator-delta.vercel.app/og-image.png'],
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
  category: 'Entertainment',
  classification: 'Korean Name Generator Tool',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Korean Name Generator',
    'application-name': 'Korean Name Generator',
    'msapplication-TileColor': '#8b5cf6',
    'theme-color': '#8b5cf6',
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MCR39PN1M7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCR39PN1M7');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
