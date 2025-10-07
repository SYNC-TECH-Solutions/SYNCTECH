import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import MainLayout from './main-layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteConfig = {
  name: 'SYNC TECH',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie',
  title: 'SYNC TECH | AI Strategy, Custom IT Solutions & 24/7 Global Support',
  description: 'SYNC TECH delivers affordable, global IT solutions including AI strategy, custom web development, cloud services, and cybersecurity. Get secure, scalable, and reliable 24/7 tech support to drive your business growth. Your trusted digital partner, worldwide.',
  ogImage: 'https://placehold.co/1200x630.png'
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'AI Strategy Dublin', 'Global IT Services', 'Worldwide Tech Support', 'Affordable IT Solutions', '24/7 Tech Support', 'Comprehensive IT Solutions', 'Secure Cloud Solutions', 'Your Digital Partner', 'SYNC TECH', 'IT Experts', 'Scalable IT', 'Trusted by Businesses', 'Tech Made Simple', 'Drive Growth with IT', 'cybersecurity', 'cloud services', 'AI automation', 'digital transformation', 'International IT Support', 'Future-Ready Tech Services', 'IT Solutions Made Simple', 'global IT consulting'
  ],
  authors: [{ name: 'Sheraz Hussain', url: siteConfig.url }],
  creator: 'Sheraz Hussain',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N63V26QZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={cn('font-sans antialiased min-h-screen flex flex-col')}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
