
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Analytics } from '@/components/analytics';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteConfig = {
  name: 'SYNC TECH',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie',
  title: 'SYNC TECH: Global IT Solutions & Services | Affordable & Secure',
  description: 'SYNC TECH delivers affordable and secure IT solutions to businesses worldwide. Get expert IT support tailored to your needs—reliable, fast, and secure 24/7. From cloud to cybersecurity, we make tech simple.',
  ogImage: 'https://placehold.co/1200x630.png'
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['IT Services Ireland', 'IT Services Near You', 'Affordable IT Solutions', 'Global Tech Support 24/7', 'Smart & Scalable IT', 'Secure Cloud Solutions', 'Your Digital Partner', 'Comprehensive IT Solutions', 'Cutting-edge Technology', 'web development', 'ai automation', 'cybersecurity', 'Excellent Customer Service', 'Computer Security', 'Global IT Services Expert', 'Future-Ready Tech Services'],
  authors: [{ name: 'Sheraz Hussain', url: siteConfig.url }],
  creator: 'Sheraz Hussain',
  
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: siteConfig.url,
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
  sameAs: [
    'https://www.linkedin.com/company/synctechie/',
    'https://www.instagram.com/synctech.ie',
    'https://www.facebook.com/share/19LP52QsnN/',
    'https://github.com/SherazHussain546'
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <head>
        <meta name="trustpilot-one-time-domain-verification-id" content="8af38693-b36b-483d-aeca-ffa55637025c"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-sans antialiased min-h-screen flex flex-col')}>
          <Script 
            type="text/javascript" 
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
            async 
          />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
      </body>
    </html>
  );
}
