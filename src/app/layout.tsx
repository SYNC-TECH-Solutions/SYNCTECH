import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { Analytics } from '@/components/analytics';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

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
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head/>
      <body className={cn('font-sans antialiased min-h-screen flex flex-col')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <FloatingCta />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
