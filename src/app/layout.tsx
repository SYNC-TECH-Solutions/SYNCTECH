
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { Analytics } from '@/components/analytics';
import { Inter } from 'next/font/google';
import { firebaseApp } from '@/lib/firebase'; // Import to initialize Firebase

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteConfig = {
  name: 'SYNC TECH',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie',
  title: 'SYNC TECH: Premium Tech Solutions at Competitive Prices',
  description: 'SYNC TECH delivers top-quality web development, AI automation, and cybersecurity services in Dublin, Ireland, ensuring the best value and quality for your investment.',
  ogImage: 'https://placehold.co/1200x630.png'
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['affordable tech solutions', 'quality web development', 'best price tech company Dublin', 'ai automation', 'cloud hosting', 'cybersecurity', 'mobile apps', 'seo'],
  authors: [{ name: 'Sheraz Hussain', url: siteConfig.url }],
  creator: 'Sheraz Hussain',
  
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: site.config.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@sherazhussain',
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(siteConfig.url),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+353-83-068-2026',
    contactType: 'customer service',
    areaServed: 'IE',
    availableLanguage: 'en'
  },
  sameAs: [],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-sans antialiased min-h-screen flex flex-col')}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <FloatingCta />
          <Analytics />
      </body>
    </html>
  );
}
