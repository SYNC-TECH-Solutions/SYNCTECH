
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { Analytics } from '@/components/analytics';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'SYNC TECH | Synchronizing Innovation with Technology',
  description: 'SYNC TECH is a premier tech company based in Dublin, Ireland, specializing in Web Development, AI Automation, Cloud Hosting, Cybersecurity, Mobile Apps, and SEO.',
  keywords: ['tech company Dublin', 'web development', 'ai automation', 'cloud hosting', 'cybersecurity', 'mobile apps', 'seo'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
